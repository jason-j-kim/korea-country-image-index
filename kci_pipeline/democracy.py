from __future__ import annotations

DEMOCRACY_WEIGHTS = {
    "freedom_house_total": 0.25,
    "vdem_liberal_democracy": 0.20,
    "vdem_electoral_democracy": 0.15,
    "wgi_voice_accountability": 0.15,
    "wgi_rule_of_law": 0.10,
    "transparency_cpi": 0.10,
    "rsf_press_freedom": 0.05,
}

DEMOCRACY_COMPONENTS = {
    "freedom_house_total": {
        "name": "Freedom House total score",
        "unit": "0-100",
        "source": "Freedom House Freedom in the World country pages, collected from annual South Korea reports.",
        "series": {2018: 84, 2019: 83, 2020: 83, 2021: 83, 2022: 83, 2023: 83, 2024: 83, 2025: 81, 2026: 83},
        "quality": "official_scrape",
    },
    "vdem_liberal_democracy": {
        "name": "V-Dem Liberal Democracy Index",
        "unit": "0-1 converted to 0-100",
        "source": "V-Dem Dataset v16; seed values pending local CSV import.",
        "series": {2018: 80, 2019: 79, 2020: 79, 2021: 78, 2022: 78, 2023: 76, 2024: 74, 2025: 79},
        "quality": "seed_pending_csv",
    },
    "vdem_electoral_democracy": {
        "name": "V-Dem Electoral Democracy Index",
        "unit": "0-1 converted to 0-100",
        "source": "V-Dem Dataset v16; seed values pending local CSV import.",
        "series": {2018: 86, 2019: 85, 2020: 85, 2021: 84, 2022: 84, 2023: 83, 2024: 82, 2025: 84},
        "quality": "seed_pending_csv",
    },
    "wgi_voice_accountability": {
        "name": "WGI Voice and Accountability",
        "unit": "0-100 percentile/absolute score",
        "source": "World Bank Worldwide Governance Indicators; seed values pending WGI 2025 revision file import.",
        "series": {2018: 74, 2019: 74, 2020: 75, 2021: 76, 2022: 74, 2023: 73, 2024: 72},
        "quality": "seed_pending_wgi_file",
    },
    "wgi_rule_of_law": {
        "name": "WGI Rule of Law",
        "unit": "0-100 percentile/absolute score",
        "source": "World Bank Worldwide Governance Indicators; seed values pending WGI 2025 revision file import.",
        "series": {2018: 82, 2019: 82, 2020: 83, 2021: 84, 2022: 83, 2023: 82, 2024: 82},
        "quality": "seed_pending_wgi_file",
    },
    "transparency_cpi": {
        "name": "Transparency International CPI",
        "unit": "0-100",
        "source": "Transparency International Corruption Perceptions Index country score.",
        "series": {2018: 57, 2019: 59, 2020: 61, 2021: 62, 2022: 63, 2023: 63, 2024: 64},
        "quality": "seed_from_public_cpi_tables",
    },
    "rsf_press_freedom": {
        "name": "RSF World Press Freedom Index",
        "unit": "0-100",
        "source": "Reporters Without Borders World Press Freedom Index. 2026 South Korea: 69.12, rank 47/180.",
        "series": {2018: 74, 2019: 75, 2020: 76, 2021: 76, 2022: 72, 2023: 71, 2024: 70, 2025: 67, 2026: 69.12},
        "quality": "seed_with_official_latest",
    },
}


def latest_available(series: dict[int, float], year: int) -> float | None:
    candidates = [candidate for candidate in series if candidate <= year]
    if not candidates:
        return None
    return series[max(candidates)]


def build_democracy_index(start_year: int = 2018, end_year: int = 2026) -> dict:
    years = list(range(start_year, end_year + 1))
    rows = []
    for year in years:
        components = {}
        weighted_sum = 0.0
        total_weight = 0.0
        for component_id, weight in DEMOCRACY_WEIGHTS.items():
            meta = DEMOCRACY_COMPONENTS[component_id]
            value = latest_available(meta["series"], year)
            components[component_id] = value
            if value is None:
                continue
            weighted_sum += value * weight
            total_weight += weight
        rows.append(
            {
                "year": year,
                "index": round(weighted_sum / total_weight, 2) if total_weight else None,
                "components": components,
                "coverage_weight": round(total_weight, 2),
            }
        )

    latest = next((row for row in reversed(rows) if row["index"] is not None), None)
    first = next((row for row in rows if row["index"] is not None), None)
    return {
        "name": "Korea Democracy-Governance Position Index",
        "short_name": "KDI",
        "weights": DEMOCRACY_WEIGHTS,
        "components": DEMOCRACY_COMPONENTS,
        "history": rows,
        "latest": latest,
        "comparison": {
            "from_year": first["year"] if first else None,
            "to_year": latest["year"] if latest else None,
            "change": round(latest["index"] - first["index"], 2) if first and latest else None,
        },
        "method_note": "Composite tracks South Korea from 2018 using the user-specified weights. Some components are seeded until bulk source files are imported; component quality flags identify this.",
    }
