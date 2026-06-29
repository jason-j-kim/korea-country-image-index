from __future__ import annotations

import json
from datetime import datetime, timedelta, timezone
from pathlib import Path

from . import config
from .democracy import build_democracy_index
from .global_compare import build_global_comparison


def _latest_year_value(series: dict[int, float]) -> tuple[int | None, float | None]:
    if not series:
        return None, None
    year = max(series)
    return year, series[year]


def _score_indicator(indicator: dict, value: float | None) -> float | None:
    if value is None:
        return None
    if indicator.get("score_included", True) is False:
        return None
    direction = indicator.get("direction", "positive")
    if direction == "bounded":
        low = float(indicator.get("scale_min", 0))
        high = float(indicator.get("scale_max", 100))
        if high == low:
            return None
        return round(max(0.0, min(100.0, (float(value) - low) / (high - low) * 100)), 2)
    if direction == "rank":
        rank_max = float(indicator.get("rank_max", 30))
        return round(max(0.0, min(100.0, (rank_max - float(value) + 1) / rank_max * 100)), 2)

    values = [float(v) for v in indicator.get("series", {}).values() if v is not None]
    if not values:
        return None
    low = min(values)
    high = max(values)
    if high == low:
        return None
    raw_score = (float(value) - low) / (high - low) * 100
    if indicator.get("benchmark") != "external":
        raw_score = min(raw_score, float(indicator.get("time_series_cap", 95)))
    return round(raw_score, 2)


def _complete_series(series: dict[int, float], years: list[int]) -> dict[int, float | None]:
    if not series:
        return {year: None for year in years}
    completed: dict[int, float | None] = {}
    known_years = sorted(series)
    for year in years:
        previous = [known for known in known_years if known <= year]
        if previous:
            completed[year] = series[previous[-1]]
        else:
            completed[year] = None
    return completed


def _merge_live_series(indicators: dict, live: dict) -> list[dict]:
    rows = []
    for indicator_id, indicator in indicators.items():
        merged = {int(year): value for year, value in indicator.get("series", {}).items()}
        live_result = live.get(indicator_id)
        live_note = None
        if live_result:
            if live_result.get("series"):
                for year, value in live_result["series"].items():
                    merged[int(year)] = value
            elif live_result.get("value") is not None:
                merged[int(live_result["year"])] = live_result["value"]
            live_note = live_result

        year, value = _latest_year_value(merged)
        row = {
            "id": indicator_id,
            "area": indicator["area"],
            "name": indicator["name"],
            "unit": indicator.get("unit"),
            "source": indicator.get("source"),
            "status": indicator.get("status", "active"),
            "latest_year": year,
            "latest_value": value,
            "score": _score_indicator({**indicator, "series": merged}, value),
            "series": merged,
        }
        if live_note:
            row["live"] = live_note
        rows.append(row)
    return rows


def _append_democracy_index(indicator_rows: list[dict]) -> tuple[list[dict], dict]:
    democracy = build_democracy_index()
    latest = democracy.get("latest") or {}
    row = {
        "id": "kdi_composite",
        "area": "democracy_governance",
        "name": "KDI 민주주의·거버넌스 복합지수",
        "unit": "0-100",
        "source": "Freedom House 25%, V-Dem Liberal 20%, V-Dem Electoral 15%, WGI Voice 15%, WGI Rule of Law 10%, Transparency CPI 10%, RSF Press Freedom 5%",
        "status": "active",
        "latest_year": latest.get("year"),
        "latest_value": latest.get("index"),
        "score": latest.get("index"),
        "series": {row["year"]: row["index"] for row in democracy.get("history", []) if row.get("index") is not None},
        "components": latest.get("components"),
    }
    filtered = [row for row in indicator_rows if row.get("area") != "democracy_governance"]
    filtered.append(row)
    return filtered, democracy


def _area_scores(indicator_rows: list[dict]) -> list[dict]:
    areas = []
    for area_id, meta in config.AREAS.items():
        rows = [row for row in indicator_rows if row["area"] == area_id and row.get("score") is not None]
        score = round(sum(row["score"] for row in rows) / len(rows), 2) if rows else None
        areas.append(
            {
                "id": area_id,
                "name": meta["name"],
                "weight": meta["weight"],
                "role": meta.get("role", "core"),
                "rationale": meta["rationale"],
                "score": score,
                "indicator_count": len(rows),
                "indicators": [row["id"] for row in rows],
            }
        )
    return areas


def _headline(areas: list[dict]) -> dict:
    active = [area for area in areas if area.get("score") is not None and area.get("role") == "core"]
    total_weight = sum(area["weight"] for area in active)
    weighted = sum(area["score"] * area["weight"] for area in active) / total_weight if total_weight else 0
    simple = sum(area["score"] for area in active) / len(active) if active else 0
    return {
        "kci": round(weighted, 2),
        "simple_mean": round(simple, 2),
        "active_area_count": len(active),
        "basis": "KCI-D domestic time-series core index; appendix and observational areas excluded from headline.",
    }


def _history(indicator_rows: list[dict]) -> dict:
    years = list(range(2021, 2027))
    by_area: dict[str, list[dict]] = {}
    global_rows = []

    for area_id, meta in config.AREAS.items():
        area_indicators = [row for row in indicator_rows if row["area"] == area_id]
        area_history = []
        for year in years:
            scores = []
            for row in area_indicators:
                series = _complete_series(row["series"], years)
                value = series[year]
                score = _score_indicator({**row, "series": row["series"]}, value)
                if score is not None:
                    scores.append(score)
            area_history.append(
                {
                    "year": year,
                    "score": round(sum(scores) / len(scores), 2) if scores else None,
                }
            )
        by_area[area_id] = area_history

    for year_index, year in enumerate(years):
        area_scores = []
        weighted_sum = 0.0
        total_weight = 0.0
        for area_id, meta in config.AREAS.items():
            if meta.get("role", "core") != "core":
                continue
            score = by_area[area_id][year_index]["score"]
            if score is None:
                continue
            area_scores.append(score)
            weighted_sum += score * meta["weight"]
            total_weight += meta["weight"]
        global_rows.append(
            {
                "year": year,
                "kci": round(weighted_sum / total_weight, 2) if total_weight else None,
                "simple_mean": round(sum(area_scores) / len(area_scores), 2) if area_scores else None,
            }
        )

    first = next((row for row in global_rows if row["kci"] is not None), None)
    last = next((row for row in reversed(global_rows) if row["kci"] is not None), None)
    return {
        "years": years,
        "global": global_rows,
        "areas": by_area,
        "comparison": {
            "from_year": first["year"] if first else None,
            "to_year": last["year"] if last else None,
            "kci_change": round(last["kci"] - first["kci"], 2) if first and last else None,
        },
    }


def build_index(live: dict | None = None) -> dict:
    live = live or {}
    indicator_rows = _merge_live_series(config.INDICATORS, live)
    indicator_rows, democracy = _append_democracy_index(indicator_rows)
    global_comparison = build_global_comparison(democracy)
    areas = _area_scores(indicator_rows)
    headline = _headline(areas)
    now = datetime.now(timezone(timedelta(hours=9)))
    return {
        "date": now.strftime("%Y-%m-%d"),
        "name": "Korea Country Image Index",
        "short_name": "KCI",
        "scope": "KCI-D is Korea's domestic time-series country image index. KCI-G is a separate international comparison framework over OECD, G20, and a major-30 country set.",
        "excluded_variables": config.EXCLUDED_VARIABLES,
        "formula": "KCI = weighted mean of normalized area scores; rank and bounded indicators keep their native scales; unbenchmarked Korea-only time-series indicators are capped at 95 to avoid reading a local maximum as a perfect score.",
        "headline": headline,
        "areas": areas,
        "indicators": indicator_rows,
        "history": _history(indicator_rows),
        "democracy": democracy,
        "global_comparison": global_comparison,
        "live_collection": live,
    }


def export_index(index: dict) -> dict[str, Path]:
    config.DATA_DIR.mkdir(parents=True, exist_ok=True)
    config.OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    json_path = config.DATA_DIR / "kci_latest.json"
    js_path = config.DATA_DIR / "kci_latest.js"
    kdi_json_path = config.DATA_DIR / "kdi_latest.json"
    kdi_js_path = config.DATA_DIR / "kdi_latest.js"
    kcig_json_path = config.DATA_DIR / "kcig_latest.json"
    kcig_js_path = config.DATA_DIR / "kcig_latest.js"
    dated_path = config.OUTPUT_DIR / f"{index['date']}_kci_latest.json"
    text = json.dumps(index, ensure_ascii=False, indent=2)
    json_path.write_text(text, encoding="utf-8")
    js_path.write_text(f"window.KCI_LATEST = {text};\n", encoding="utf-8")
    democracy_text = json.dumps(index.get("democracy", {}), ensure_ascii=False, indent=2)
    kdi_json_path.write_text(democracy_text, encoding="utf-8")
    kdi_js_path.write_text(f"window.KDI_LATEST = {democracy_text};\n", encoding="utf-8")
    global_text = json.dumps(index.get("global_comparison", {}), ensure_ascii=False, indent=2)
    kcig_json_path.write_text(global_text, encoding="utf-8")
    kcig_js_path.write_text(f"window.KCIG_LATEST = {global_text};\n", encoding="utf-8")
    dated_path.write_text(text, encoding="utf-8")
    return {
        "json": json_path,
        "js": js_path,
        "kdi_json": kdi_json_path,
        "kdi_js": kdi_js_path,
        "kcig_json": kcig_json_path,
        "kcig_js": kcig_js_path,
        "dated": dated_path,
    }
