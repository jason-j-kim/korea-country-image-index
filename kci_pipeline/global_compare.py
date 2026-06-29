from __future__ import annotations

COMPARISON_COUNTRIES = {
    "OECD_sample": ["AUS", "CAN", "FRA", "DEU", "ITA", "JPN", "KOR", "MEX", "NLD", "ESP", "SWE", "TUR", "GBR", "USA"],
    "G20_sample": ["ARG", "AUS", "BRA", "CAN", "CHN", "FRA", "DEU", "IND", "IDN", "ITA", "JPN", "KOR", "MEX", "SAU", "ZAF", "TUR", "GBR", "USA"],
    "major_30": [
        "ARG", "AUS", "BRA", "CAN", "CHN", "FRA", "DEU", "IND", "IDN", "ITA",
        "JPN", "KOR", "MEX", "NLD", "SAU", "SGP", "ESP", "SWE", "THA", "TUR",
        "GBR", "USA", "VNM", "ZAF", "ARE", "POL", "MYS", "PHL", "EGY", "QAT",
    ],
}

COUNTRY_NAMES = {
    "ARG": "Argentina",
    "AUS": "Australia",
    "BRA": "Brazil",
    "CAN": "Canada",
    "CHN": "China",
    "EGY": "Egypt",
    "FRA": "France",
    "DEU": "Germany",
    "IND": "India",
    "IDN": "Indonesia",
    "ITA": "Italy",
    "JPN": "Japan",
    "KOR": "South Korea",
    "MEX": "Mexico",
    "MYS": "Malaysia",
    "NLD": "Netherlands",
    "PHL": "Philippines",
    "POL": "Poland",
    "QAT": "Qatar",
    "SAU": "Saudi Arabia",
    "SGP": "Singapore",
    "ZAF": "South Africa",
    "ESP": "Spain",
    "SWE": "Sweden",
    "THA": "Thailand",
    "TUR": "Turkey",
    "ARE": "United Arab Emirates",
    "GBR": "United Kingdom",
    "USA": "United States",
    "VNM": "Vietnam",
}


def build_global_comparison(korea_democracy_index: dict) -> dict:
    latest = korea_democracy_index.get("latest") or {}
    return {
        "name": "KCI-G International Comparison Index",
        "short_name": "KCI-G",
        "status": "framework_ready",
        "comparison_groups": COMPARISON_COUNTRIES,
        "country_names": COUNTRY_NAMES,
        "korea": {
            "iso3": "KOR",
            "name": "South Korea",
            "democracy_governance_position": latest,
        },
        "candidate_dimensions": [
            {
                "id": "democracy_governance",
                "name": "Democracy and governance",
                "status": "partially_ready",
                "source_plan": "Freedom House, V-Dem, WGI, Transparency CPI, RSF by country-year.",
            },
            {
                "id": "knowledge_innovation",
                "name": "Knowledge and innovation",
                "status": "planned",
                "source_plan": "WIPO GII, PCT, Nature Index or Scimago by country-year.",
            },
            {
                "id": "education_language_attraction",
                "name": "Education and language attraction",
                "status": "planned",
                "source_plan": "UNESCO/OECD international students, language learning platform country demand where comparable.",
            },
            {
                "id": "medical_service_attraction",
                "name": "Medical service attraction",
                "status": "planned",
                "source_plan": "Comparable medical tourism data are limited; use cautiously or omit from KCI-G.",
            },
            {
                "id": "foreign_media_exposure",
                "name": "Foreign media exposure and sentiment",
                "status": "partially_ready",
                "source_plan": "Apply the same Google News/GDELT topic basket to all comparison countries.",
            },
        ],
        "method_note": "KCI-D remains Korea's internal time-series index. KCI-G is a separate international comparison framework over OECD, G20, and a major-30 country set. Values should not be merged until cross-country source coverage is complete.",
    }
