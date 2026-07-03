from __future__ import annotations

import argparse
import json
import os
import time
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path

import numpy as np
import pandas as pd
import requests
from scipy import stats


ROOT_DIR = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT_DIR / "data"
OUTPUT_DIR = DATA_DIR / "output" / "granger"
EXPORT_RAW_DIR = DATA_DIR / "raw" / "exports"
TRENDS_PANEL = DATA_DIR / "output" / "google_trends" / f"{datetime.now(timezone(timedelta(hours=9))).strftime('%Y-%m-%d')}_google_trends_hallyu_normalized.csv"
LATEST_JSON = DATA_DIR / "hallyu_exports_granger_latest.json"
LATEST_JS = DATA_DIR / "hallyu_exports_granger_latest.js"

DEFAULT_KEYWORDS = ["K wave", "Korea", "Seoul", "BTS", "K pop", "K movie", "K drama", "K food", "K beauty"]

SECTOR_HS = {
    "total_exports": ["TOTAL"],
    "electronics_hs85": ["85"],
    "cosmetics_hs3304": ["3304"],
    "processed_food_hs16_21": ["16", "17", "18", "19", "20", "21"],
}


@dataclass(frozen=True)
class GrangerResult:
    sector: str
    keyword: str
    direction: str
    best_lag: int | None
    best_p_value: float | None
    best_f_stat: float | None
    observations: int
    significant_at_05: bool


def kst_today() -> str:
    return datetime.now(timezone(timedelta(hours=9))).strftime("%Y-%m-%d")


def ensure_dirs() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    EXPORT_RAW_DIR.mkdir(parents=True, exist_ok=True)


def parse_month(value: object) -> str:
    text = str(value).strip()
    if len(text) == 6 and text.isdigit():
        return f"{text[:4]}-{text[4:]}"
    return pd.to_datetime(text).to_period("M").astype(str)


def load_trends_monthly(path: Path, keywords: list[str]) -> pd.DataFrame:
    if not path.exists():
        raise SystemExit(f"Google Trends normalized panel not found: {path}")
    frame = pd.read_csv(path)
    if "week" not in frame.columns:
        raise SystemExit("Trends panel must contain a 'week' column.")
    frame["month"] = pd.to_datetime(frame["week"]).dt.to_period("M").astype(str)
    available = [keyword for keyword in keywords if keyword in frame.columns]
    if not available:
        raise SystemExit(f"No requested keywords found in trends panel: {keywords}")
    monthly = frame.groupby("month", as_index=False)[available].mean()
    return monthly


def load_exports_csv(path: Path) -> pd.DataFrame:
    frame = pd.read_csv(path)
    lower = {column.lower(): column for column in frame.columns}
    if "month" not in lower:
        raise SystemExit("Export CSV must contain a month column.")
    month_col = lower["month"]
    frame["month"] = frame[month_col].map(parse_month)

    if {"sector", "export_usd"}.issubset(lower):
        sector_col = lower["sector"]
        value_col = lower["export_usd"]
        long = frame[["month", sector_col, value_col]].rename(columns={sector_col: "sector", value_col: "export_usd"})
        return long

    value_cols = [column for column in frame.columns if column != month_col and column != "month"]
    long = frame.melt(id_vars=["month"], value_vars=value_cols, var_name="sector", value_name="export_usd")
    return long


def comtrade_get_month(period: str, cmd_code: str, api_key: str, pause: float) -> float:
    endpoint = "https://comtradeapi.un.org/data/v1/get/C/M/HS"
    params = {
        "reporterCode": "410",
        "period": period,
        "cmdCode": cmd_code,
        "flowCode": "X",
        "partnerCode": "0",
        "partner2Code": "0",
        "motCode": "0",
        "customsCode": "C00",
        "includeDesc": "true",
    }
    headers = {"Ocp-Apim-Subscription-Key": api_key}
    response = requests.get(endpoint, params=params, headers=headers, timeout=40)
    time.sleep(pause)
    if response.status_code >= 400:
        raise RuntimeError(f"Comtrade request failed {response.status_code}: {response.text[:300]}")
    payload = response.json()
    rows = payload.get("data") or payload.get("Data") or []
    total = 0.0
    for row in rows:
        value = row.get("primaryValue", row.get("PrimaryValue", row.get("TradeValue", 0)))
        try:
            total += float(value or 0)
        except ValueError:
            continue
    return total


def fetch_comtrade_exports(start_month: str, end_month: str, api_key: str, pause: float) -> pd.DataFrame:
    periods = pd.period_range(start=start_month, end=end_month, freq="M")
    rows = []
    for period in periods:
        period_code = period.strftime("%Y%m")
        for sector, codes in SECTOR_HS.items():
            sector_total = 0.0
            for code in codes:
                print(f"[exports] {period_code} {sector} HS={code}")
                sector_total += comtrade_get_month(period_code, code, api_key, pause)
            rows.append({"month": period.strftime("%Y-%m"), "sector": sector, "export_usd": sector_total})
    frame = pd.DataFrame(rows)
    raw_path = EXPORT_RAW_DIR / f"{kst_today()}_korea_monthly_exports_comtrade.csv"
    frame.to_csv(raw_path, index=False, encoding="utf-8-sig")
    return frame


def prepare_panel(trends: pd.DataFrame, exports: pd.DataFrame, keywords: list[str]) -> pd.DataFrame:
    exports = exports.copy()
    exports["export_usd"] = pd.to_numeric(exports["export_usd"], errors="coerce")
    wide_exports = exports.pivot_table(index="month", columns="sector", values="export_usd", aggfunc="sum").reset_index()
    panel = wide_exports.merge(trends, on="month", how="inner").sort_values("month")
    for sector in [column for column in wide_exports.columns if column != "month"]:
        panel[f"{sector}_logdiff"] = np.log(panel[sector].replace(0, np.nan)).diff()
    for keyword in keywords:
        if keyword in panel.columns:
            panel[f"{keyword}_diff"] = panel[keyword].diff()
    return panel


def lag_matrix(series: pd.Series, max_lag: int) -> pd.DataFrame:
    return pd.concat({f"lag_{lag}": series.shift(lag) for lag in range(1, max_lag + 1)}, axis=1)


def fit_sse(y: np.ndarray, x: np.ndarray) -> tuple[float, int, int]:
    beta, *_ = np.linalg.lstsq(x, y, rcond=None)
    resid = y - x @ beta
    sse = float(resid.T @ resid)
    n_obs, n_params = x.shape
    return sse, n_obs, n_params


def granger_f_test(y: pd.Series, x: pd.Series, lag: int) -> tuple[float | None, float | None, int]:
    data = pd.DataFrame({"y": y, "x": x})
    y_lags = lag_matrix(data["y"], lag)
    x_lags = lag_matrix(data["x"], lag)
    design = pd.concat([data["y"], y_lags, x_lags], axis=1).dropna()
    if len(design) <= (2 * lag + 2):
        return None, None, int(len(design))
    y_vec = design["y"].to_numpy(dtype=float)
    restricted_x = np.column_stack([np.ones(len(design)), design[y_lags.columns].to_numpy(dtype=float)])
    unrestricted_x = np.column_stack([restricted_x, design[x_lags.columns].to_numpy(dtype=float)])
    sse_r, _, _ = fit_sse(y_vec, restricted_x)
    sse_u, n_obs, n_params_u = fit_sse(y_vec, unrestricted_x)
    df_num = lag
    df_den = n_obs - n_params_u
    if df_den <= 0 or sse_u <= 0:
        return None, None, int(n_obs)
    f_stat = ((sse_r - sse_u) / df_num) / (sse_u / df_den)
    p_value = float(stats.f.sf(f_stat, df_num, df_den))
    return float(f_stat), p_value, int(n_obs)


def run_granger(panel: pd.DataFrame, keywords: list[str], max_lag: int) -> pd.DataFrame:
    results: list[GrangerResult] = []
    sectors = [column.removesuffix("_logdiff") for column in panel.columns if column.endswith("_logdiff")]
    for sector in sectors:
        y = panel[f"{sector}_logdiff"]
        for keyword in keywords:
            x_col = f"{keyword}_diff"
            if x_col not in panel.columns:
                continue
            x = panel[x_col]
            for direction, lhs, rhs in [
                ("trend_to_export", y, x),
                ("export_to_trend", x, y),
            ]:
                candidates = []
                for lag in range(1, max_lag + 1):
                    f_stat, p_value, n_obs = granger_f_test(lhs, rhs, lag)
                    if p_value is not None:
                        candidates.append((p_value, f_stat, lag, n_obs))
                if not candidates:
                    results.append(GrangerResult(sector, keyword, direction, None, None, None, 0, False))
                    continue
                best_p, best_f, best_lag, n_obs = min(candidates, key=lambda item: item[0])
                results.append(
                    GrangerResult(
                        sector=sector,
                        keyword=keyword,
                        direction=direction,
                        best_lag=best_lag,
                        best_p_value=round(float(best_p), 6),
                        best_f_stat=round(float(best_f), 6),
                        observations=n_obs,
                        significant_at_05=bool(best_p < 0.05),
                    )
                )
    return pd.DataFrame([result.__dict__ for result in results])


def export_results(panel: pd.DataFrame, results: pd.DataFrame, exports_source: str, trends_source: str) -> dict[str, Path]:
    date_label = kst_today()
    panel_path = OUTPUT_DIR / f"{date_label}_hallyu_trends_exports_monthly_panel.csv"
    results_path = OUTPUT_DIR / f"{date_label}_hallyu_trends_exports_granger.csv"
    panel.to_csv(panel_path, index=False, encoding="utf-8-sig")
    results.to_csv(results_path, index=False, encoding="utf-8-sig")
    significant = results[(results["direction"] == "trend_to_export") & (results["significant_at_05"])]
    payload = {
        "date": date_label,
        "name": "Hallyu Google Trends vs Korea Monthly Exports Granger Analysis",
        "exports_source": exports_source,
        "trends_source": trends_source,
        "months": int(panel["month"].nunique()),
        "start_month": str(panel["month"].min()) if not panel.empty else None,
        "end_month": str(panel["month"].max()) if not panel.empty else None,
        "sectors": [column.removesuffix("_logdiff") for column in panel.columns if column.endswith("_logdiff")],
        "significant_trend_to_export_count": int(len(significant)),
        "top_trend_to_export": significant.sort_values("best_p_value").head(20).to_dict(orient="records"),
        "method": {
            "export_transform": "log monthly difference of export_usd by sector",
            "trend_transform": "monthly mean of normalized weekly Google Trends, first difference",
            "test": "OLS nested-model Granger F-test implemented with numpy/scipy",
            "null": "Keyword trend lags do not improve prediction of export sector growth beyond export-sector lags.",
        },
        "outputs": {
            "panel": str(panel_path.relative_to(ROOT_DIR)),
            "results": str(results_path.relative_to(ROOT_DIR)),
        },
    }
    latest_json = json.dumps(payload, ensure_ascii=False, indent=2)
    LATEST_JSON.write_text(latest_json, encoding="utf-8")
    LATEST_JS.write_text(f"window.HALLYU_EXPORTS_GRANGER_LATEST = {latest_json};\n", encoding="utf-8")
    return {"panel": panel_path, "results": results_path, "latest_json": LATEST_JSON, "latest_js": LATEST_JS}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Granger analysis between Hallyu Google Trends and Korean monthly exports.")
    parser.add_argument("--trends", type=Path, default=TRENDS_PANEL, help="Normalized weekly Google Trends panel CSV.")
    parser.add_argument("--exports-csv", type=Path, help="Monthly exports CSV. Long columns: month,sector,export_usd. Wide also accepted.")
    parser.add_argument("--comtrade-key", default=os.getenv("COMTRADE_API_KEY", "").strip(), help="UN Comtrade API subscription key.")
    parser.add_argument("--start-month", default="2021-06")
    parser.add_argument("--end-month", default="2026-06")
    parser.add_argument("--max-lag", type=int, default=6)
    parser.add_argument("--pause", type=float, default=1.0)
    parser.add_argument("--keywords", nargs="*", default=DEFAULT_KEYWORDS)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    ensure_dirs()
    trends = load_trends_monthly(args.trends, args.keywords)
    if args.exports_csv:
        exports = load_exports_csv(args.exports_csv)
        exports_source = str(args.exports_csv)
    elif args.comtrade_key:
        exports = fetch_comtrade_exports(args.start_month, args.end_month, args.comtrade_key, args.pause)
        exports_source = "UN Comtrade API"
    else:
        raise SystemExit(
            "No export data source available. Provide --exports-csv or set COMTRADE_API_KEY. "
            "UN Comtrade returned 401 without a subscription key in this environment."
        )
    panel = prepare_panel(trends, exports, args.keywords)
    if len(panel) < args.max_lag + 12:
        raise SystemExit(f"Too few overlapping monthly observations for Granger analysis: {len(panel)}")
    results = run_granger(panel, args.keywords, args.max_lag)
    outputs = export_results(panel, results, exports_source, str(args.trends))
    print("[granger] outputs")
    for name, path in outputs.items():
        print(f"  - {name}: {path}")
    sig = results[(results["direction"] == "trend_to_export") & (results["significant_at_05"])]
    print(f"[granger] months={panel['month'].nunique()} significant trend->export pairs={len(sig)}")
    if not sig.empty:
        print(sig.sort_values("best_p_value").head(10).to_string(index=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
