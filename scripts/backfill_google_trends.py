from __future__ import annotations

import argparse
import json
import math
import time
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path

import numpy as np
import pandas as pd


ROOT_DIR = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT_DIR / "data"
RAW_DIR = DATA_DIR / "raw" / "google_trends"
OUTPUT_DIR = DATA_DIR / "output" / "google_trends"
LATEST_JSON = DATA_DIR / "google_trends_hallyu_latest.json"
LATEST_JS = DATA_DIR / "google_trends_hallyu_latest.js"

DEFAULT_KEYWORDS = [
    "K wave",
    "Korea",
    "Seoul",
    "BTS",
    "K pop",
    "K movie",
    "K drama",
    "K food",
    "K beauty",
]


@dataclass(frozen=True)
class BatchResult:
    batch_id: int
    keywords: list[str]
    frame: pd.DataFrame


def kst_today() -> str:
    return datetime.now(timezone(timedelta(hours=9))).strftime("%Y-%m-%d")


def ensure_dirs() -> None:
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def chunk_keywords(keywords: list[str], anchor: str, batch_size: int = 5) -> list[list[str]]:
    others = [keyword for keyword in keywords if keyword != anchor]
    batches = []
    for start in range(0, len(others), batch_size - 1):
        batch = [anchor] + others[start : start + batch_size - 1]
        batches.append(batch)
    return batches


def fetch_trends_batch(
    keywords: list[str],
    timeframe: str,
    geo: str,
    hl: str,
    tz: int,
    retries: int,
    pause: float,
) -> pd.DataFrame:
    try:
        from pytrends.request import TrendReq
    except ImportError as exc:
        raise SystemExit("pytrends is required. Install with: pip install pytrends") from exc

    last_error: Exception | None = None
    for attempt in range(1, retries + 1):
        try:
            client = TrendReq(hl=hl, tz=tz, retries=0, backoff_factor=0)
            client.build_payload(keywords, cat=0, timeframe=timeframe, geo=geo, gprop="")
            frame = client.interest_over_time()
            if frame.empty:
                raise RuntimeError("Google Trends returned an empty frame.")
            frame = frame.drop(columns=["isPartial"], errors="ignore")
            frame.index.name = "week"
            return frame.reset_index()
        except Exception as exc:  # pytrends raises requests exceptions and opaque response errors.
            last_error = exc
            sleep_seconds = pause * attempt
            print(f"[trends] batch failed attempt {attempt}/{retries}: {exc}")
            time.sleep(sleep_seconds)
    raise RuntimeError(f"Google Trends request failed after {retries} attempts: {last_error}")


def build_sample_panel(keywords: list[str], years: int, seed: int = 42) -> pd.DataFrame:
    rng = np.random.default_rng(seed)
    end = pd.Timestamp(kst_today()).to_period("W-SUN").end_time.normalize()
    weeks = pd.date_range(end=end, periods=years * 52 + 1, freq="W-SUN")
    rows = []
    base = np.linspace(0, 1, len(weeks))
    for idx, keyword in enumerate(keywords):
        trend = 35 + idx * 4 + base * (10 + idx)
        season = 9 * np.sin(np.linspace(0, math.pi * 10, len(weeks)) + idx / 2)
        shock = rng.normal(0, 4, len(weeks))
        values = np.clip(trend + season + shock, 0, 100)
        for week, value in zip(weeks, values):
            rows.append({"week": week.date().isoformat(), "keyword": keyword, "value": round(float(value), 3)})
    return pd.DataFrame(rows)


def median_ratio(reference: pd.Series, candidate: pd.Series) -> float:
    joined = pd.concat([reference, candidate], axis=1).dropna()
    joined = joined[(joined.iloc[:, 0] > 0) & (joined.iloc[:, 1] > 0)]
    if joined.empty:
        return 1.0
    ratio = joined.iloc[:, 0] / joined.iloc[:, 1]
    ratio = ratio.replace([np.inf, -np.inf], np.nan).dropna()
    return float(ratio.median()) if not ratio.empty else 1.0


def collect_panel(
    keywords: list[str],
    anchor: str,
    timeframe: str,
    geo: str,
    hl: str,
    tz: int,
    retries: int,
    pause: float,
    sample: bool,
) -> tuple[pd.DataFrame, list[dict]]:
    if sample:
        panel = build_sample_panel(keywords, years=5)
        return panel, [{"batch_id": 0, "keywords": keywords, "scale_to_anchor": 1.0, "sample": True}]

    batches = chunk_keywords(keywords, anchor)
    results: list[BatchResult] = []
    for batch_id, batch_keywords in enumerate(batches, start=1):
        print(f"[trends] fetching batch {batch_id}/{len(batches)}: {', '.join(batch_keywords)}")
        frame = fetch_trends_batch(batch_keywords, timeframe, geo, hl, tz, retries, pause)
        raw_path = RAW_DIR / f"{kst_today()}_batch_{batch_id}.csv"
        frame.to_csv(raw_path, index=False, encoding="utf-8-sig")
        results.append(BatchResult(batch_id=batch_id, keywords=batch_keywords, frame=frame))
        time.sleep(pause)

    reference = results[0].frame.set_index("week")[anchor].astype(float)
    long_frames = []
    metadata = []
    for result in results:
        frame = result.frame.set_index("week").copy()
        scale = median_ratio(reference, frame[anchor].astype(float))
        metadata.append({"batch_id": result.batch_id, "keywords": result.keywords, "scale_to_anchor": scale, "sample": False})
        for keyword in result.keywords:
            if keyword == anchor and result.batch_id != 1:
                continue
            series = frame[keyword].astype(float) * scale
            long_frames.append(
                pd.DataFrame(
                    {
                        "week": series.index,
                        "keyword": keyword,
                        "value": series.clip(lower=0).round(3).to_numpy(),
                    }
                )
            )
    panel = pd.concat(long_frames, ignore_index=True)
    panel["week"] = pd.to_datetime(panel["week"]).dt.date.astype(str)
    return panel.sort_values(["week", "keyword"]), metadata


def minmax(series: pd.Series) -> pd.Series:
    min_value = series.min()
    max_value = series.max()
    if pd.isna(min_value) or pd.isna(max_value) or max_value == min_value:
        return pd.Series([50.0] * len(series), index=series.index)
    return (series - min_value) / (max_value - min_value) * 100


def make_features(panel: pd.DataFrame) -> tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]:
    wide = panel.pivot(index="week", columns="keyword", values="value").sort_index()
    wide = wide.interpolate(limit_direction="both")
    normalized = wide.apply(minmax, axis=0)
    normalized["hallyu_attention_index"] = normalized.mean(axis=1).round(3)
    normalized["momentum_4w"] = normalized["hallyu_attention_index"].diff(4).round(3)
    normalized["momentum_12w"] = normalized["hallyu_attention_index"].diff(12).round(3)
    rolling_mean = normalized["hallyu_attention_index"].rolling(52, min_periods=12).mean()
    rolling_std = normalized["hallyu_attention_index"].rolling(52, min_periods=12).std()
    normalized["rolling_52w_z"] = ((normalized["hallyu_attention_index"] - rolling_mean) / rolling_std).round(3)
    normalized["next_4w_change"] = normalized["hallyu_attention_index"].shift(-4).sub(normalized["hallyu_attention_index"]).round(3)

    matrix = normalized[wide.columns].copy()
    z = (matrix - matrix.mean()) / matrix.std(ddof=0).replace(0, np.nan)
    z = z.fillna(0.0)
    u, singular_values, _ = np.linalg.svd(z.to_numpy(), full_matrices=False)
    factor_count = min(3, u.shape[1])
    factors = pd.DataFrame(index=normalized.index)
    for idx in range(factor_count):
        factors[f"pca_factor_{idx + 1}"] = (u[:, idx] * singular_values[idx]).round(6)
    factors["hallyu_attention_index"] = normalized["hallyu_attention_index"]
    factors = factors.reset_index()

    backtest = normalized[["hallyu_attention_index", "momentum_4w", "momentum_12w", "rolling_52w_z", "next_4w_change"]].copy()
    backtest["signal"] = np.where(backtest["momentum_12w"] > 0, 1, -1)
    backtest["strategy_payoff_proxy"] = (backtest["signal"] * backtest["next_4w_change"]).round(3)
    backtest = backtest.reset_index()
    return normalized.reset_index(), factors, backtest


def export_latest(
    panel: pd.DataFrame,
    normalized: pd.DataFrame,
    factors: pd.DataFrame,
    backtest: pd.DataFrame,
    metadata: list[dict],
    keywords: list[str],
    anchor: str,
    timeframe: str,
    geo: str,
) -> dict[str, Path]:
    date_label = kst_today()
    panel_path = OUTPUT_DIR / f"{date_label}_google_trends_hallyu_weekly_panel.csv"
    normalized_path = OUTPUT_DIR / f"{date_label}_google_trends_hallyu_normalized.csv"
    factors_path = OUTPUT_DIR / f"{date_label}_google_trends_hallyu_ipca_proxy_factors.csv"
    backtest_path = OUTPUT_DIR / f"{date_label}_google_trends_hallyu_backtest_input.csv"

    panel.to_csv(panel_path, index=False, encoding="utf-8-sig")
    normalized.to_csv(normalized_path, index=False, encoding="utf-8-sig")
    factors.to_csv(factors_path, index=False, encoding="utf-8-sig")
    backtest.to_csv(backtest_path, index=False, encoding="utf-8-sig")

    latest_row = normalized.dropna(subset=["hallyu_attention_index"]).iloc[-1]
    payload = {
        "date": date_label,
        "name": "Google Trends Hallyu Weekly Backfill",
        "timeframe": timeframe,
        "geo": geo or "global",
        "anchor": anchor,
        "keywords": keywords,
        "weeks": int(panel["week"].nunique()),
        "start_week": str(panel["week"].min()),
        "end_week": str(panel["week"].max()),
        "latest": {
            "week": str(latest_row["week"]),
            "hallyu_attention_index": round(float(latest_row["hallyu_attention_index"]), 3),
            "momentum_4w": None if pd.isna(latest_row["momentum_4w"]) else round(float(latest_row["momentum_4w"]), 3),
            "momentum_12w": None if pd.isna(latest_row["momentum_12w"]) else round(float(latest_row["momentum_12w"]), 3),
            "rolling_52w_z": None if pd.isna(latest_row["rolling_52w_z"]) else round(float(latest_row["rolling_52w_z"]), 3),
        },
        "method": {
            "collection": "pytrends interest_over_time, weekly 5-year panel",
            "scaling": "Google Trends 5-keyword batches are stitched by the anchor keyword median ratio.",
            "ipca_bootstrap": "PCA/SVD factor proxy is exported so IPCA and backtests can start before 60 live weeks accrue.",
            "backtest_input": "Includes hallyu_attention_index, 4w/12w momentum, 52w z-score, next_4w_change, and a simple sign signal.",
        },
        "batches": metadata,
        "outputs": {
            "panel": str(panel_path.relative_to(ROOT_DIR)),
            "normalized": str(normalized_path.relative_to(ROOT_DIR)),
            "ipca_proxy_factors": str(factors_path.relative_to(ROOT_DIR)),
            "backtest_input": str(backtest_path.relative_to(ROOT_DIR)),
        },
    }
    latest_json = json.dumps(payload, ensure_ascii=False, indent=2)
    LATEST_JSON.write_text(latest_json, encoding="utf-8")
    LATEST_JS.write_text(f"window.GOOGLE_TRENDS_HALLYU_LATEST = {latest_json};\n", encoding="utf-8")
    return {
        "panel": panel_path,
        "normalized": normalized_path,
        "ipca_proxy_factors": factors_path,
        "backtest_input": backtest_path,
        "latest_json": LATEST_JSON,
        "latest_js": LATEST_JS,
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Backfill 5-year weekly Google Trends panel for Hallyu keywords.")
    parser.add_argument("--geo", default="", help="Google Trends geo code. Empty string means global.")
    parser.add_argument("--timeframe", default="today 5-y", help="Google Trends timeframe, default: today 5-y.")
    parser.add_argument("--hl", default="en-US", help="Google Trends locale.")
    parser.add_argument("--tz", type=int, default=540, help="Timezone offset minutes. Korea is 540.")
    parser.add_argument("--anchor", default="Korea", help="Anchor keyword used to stitch 5-keyword batches.")
    parser.add_argument("--keywords", nargs="*", default=DEFAULT_KEYWORDS, help="Hallyu keyword list.")
    parser.add_argument("--retries", type=int, default=3)
    parser.add_argument("--pause", type=float, default=4.0, help="Pause seconds between Google Trends requests.")
    parser.add_argument("--sample", action="store_true", help="Generate deterministic sample panel without network calls.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    ensure_dirs()
    if args.anchor not in args.keywords:
        raise SystemExit(f"Anchor keyword must be in keyword list: {args.anchor}")
    panel, metadata = collect_panel(
        keywords=args.keywords,
        anchor=args.anchor,
        timeframe=args.timeframe,
        geo=args.geo,
        hl=args.hl,
        tz=args.tz,
        retries=args.retries,
        pause=args.pause,
        sample=args.sample,
    )
    normalized, factors, backtest = make_features(panel)
    outputs = export_latest(panel, normalized, factors, backtest, metadata, args.keywords, args.anchor, args.timeframe, args.geo)
    print("[trends] outputs")
    for name, path in outputs.items():
        print(f"  - {name}: {path}")
    print(f"[trends] weeks={panel['week'].nunique()} keywords={panel['keyword'].nunique()}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
