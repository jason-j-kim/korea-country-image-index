window.KDI_LATEST = {
  "name": "Korea Democracy-Governance Position Index",
  "short_name": "KDI",
  "weights": {
    "freedom_house_total": 0.25,
    "vdem_liberal_democracy": 0.2,
    "vdem_electoral_democracy": 0.15,
    "wgi_voice_accountability": 0.15,
    "wgi_rule_of_law": 0.1,
    "transparency_cpi": 0.1,
    "rsf_press_freedom": 0.05
  },
  "components": {
    "freedom_house_total": {
      "name": "Freedom House total score",
      "unit": "0-100",
      "source": "Freedom House Freedom in the World country pages, collected from annual South Korea reports.",
      "series": {
        "2018": 84,
        "2019": 83,
        "2020": 83,
        "2021": 83,
        "2022": 83,
        "2023": 83,
        "2024": 83,
        "2025": 81,
        "2026": 83
      },
      "quality": "official_scrape"
    },
    "vdem_liberal_democracy": {
      "name": "V-Dem Liberal Democracy Index",
      "unit": "0-1 converted to 0-100",
      "source": "V-Dem Dataset v16; seed values pending local CSV import.",
      "series": {
        "2018": 80,
        "2019": 79,
        "2020": 79,
        "2021": 78,
        "2022": 78,
        "2023": 76,
        "2024": 74,
        "2025": 79
      },
      "quality": "seed_pending_csv"
    },
    "vdem_electoral_democracy": {
      "name": "V-Dem Electoral Democracy Index",
      "unit": "0-1 converted to 0-100",
      "source": "V-Dem Dataset v16; seed values pending local CSV import.",
      "series": {
        "2018": 86,
        "2019": 85,
        "2020": 85,
        "2021": 84,
        "2022": 84,
        "2023": 83,
        "2024": 82,
        "2025": 84
      },
      "quality": "seed_pending_csv"
    },
    "wgi_voice_accountability": {
      "name": "WGI Voice and Accountability",
      "unit": "0-100 percentile/absolute score",
      "source": "World Bank Worldwide Governance Indicators; seed values pending WGI 2025 revision file import.",
      "series": {
        "2018": 74,
        "2019": 74,
        "2020": 75,
        "2021": 76,
        "2022": 74,
        "2023": 73,
        "2024": 72
      },
      "quality": "seed_pending_wgi_file"
    },
    "wgi_rule_of_law": {
      "name": "WGI Rule of Law",
      "unit": "0-100 percentile/absolute score",
      "source": "World Bank Worldwide Governance Indicators; seed values pending WGI 2025 revision file import.",
      "series": {
        "2018": 82,
        "2019": 82,
        "2020": 83,
        "2021": 84,
        "2022": 83,
        "2023": 82,
        "2024": 82
      },
      "quality": "seed_pending_wgi_file"
    },
    "transparency_cpi": {
      "name": "Transparency International CPI",
      "unit": "0-100",
      "source": "Transparency International Corruption Perceptions Index country score.",
      "series": {
        "2018": 57,
        "2019": 59,
        "2020": 61,
        "2021": 62,
        "2022": 63,
        "2023": 63,
        "2024": 64
      },
      "quality": "seed_from_public_cpi_tables"
    },
    "rsf_press_freedom": {
      "name": "RSF World Press Freedom Index",
      "unit": "0-100",
      "source": "Reporters Without Borders World Press Freedom Index. 2026 South Korea: 69.12, rank 47/180.",
      "series": {
        "2018": 74,
        "2019": 75,
        "2020": 76,
        "2021": 76,
        "2022": 72,
        "2023": 71,
        "2024": 70,
        "2025": 67,
        "2026": 69.12
      },
      "quality": "seed_with_official_latest"
    }
  },
  "history": [
    {
      "year": 2018,
      "index": 78.6,
      "components": {
        "freedom_house_total": 84,
        "vdem_liberal_democracy": 80,
        "vdem_electoral_democracy": 86,
        "wgi_voice_accountability": 74,
        "wgi_rule_of_law": 82,
        "transparency_cpi": 57,
        "rsf_press_freedom": 74
      },
      "coverage_weight": 1.0
    },
    {
      "year": 2019,
      "index": 78.25,
      "components": {
        "freedom_house_total": 83,
        "vdem_liberal_democracy": 79,
        "vdem_electoral_democracy": 85,
        "wgi_voice_accountability": 74,
        "wgi_rule_of_law": 82,
        "transparency_cpi": 59,
        "rsf_press_freedom": 75
      },
      "coverage_weight": 1.0
    },
    {
      "year": 2020,
      "index": 78.75,
      "components": {
        "freedom_house_total": 83,
        "vdem_liberal_democracy": 79,
        "vdem_electoral_democracy": 85,
        "wgi_voice_accountability": 75,
        "wgi_rule_of_law": 83,
        "transparency_cpi": 61,
        "rsf_press_freedom": 76
      },
      "coverage_weight": 1.0
    },
    {
      "year": 2021,
      "index": 78.75,
      "components": {
        "freedom_house_total": 83,
        "vdem_liberal_democracy": 78,
        "vdem_electoral_democracy": 84,
        "wgi_voice_accountability": 76,
        "wgi_rule_of_law": 84,
        "transparency_cpi": 62,
        "rsf_press_freedom": 76
      },
      "coverage_weight": 1.0
    },
    {
      "year": 2022,
      "index": 78.25,
      "components": {
        "freedom_house_total": 83,
        "vdem_liberal_democracy": 78,
        "vdem_electoral_democracy": 84,
        "wgi_voice_accountability": 74,
        "wgi_rule_of_law": 83,
        "transparency_cpi": 63,
        "rsf_press_freedom": 72
      },
      "coverage_weight": 1.0
    },
    {
      "year": 2023,
      "index": 77.4,
      "components": {
        "freedom_house_total": 83,
        "vdem_liberal_democracy": 76,
        "vdem_electoral_democracy": 83,
        "wgi_voice_accountability": 73,
        "wgi_rule_of_law": 82,
        "transparency_cpi": 63,
        "rsf_press_freedom": 71
      },
      "coverage_weight": 1.0
    },
    {
      "year": 2024,
      "index": 76.75,
      "components": {
        "freedom_house_total": 83,
        "vdem_liberal_democracy": 74,
        "vdem_electoral_democracy": 82,
        "wgi_voice_accountability": 72,
        "wgi_rule_of_law": 82,
        "transparency_cpi": 64,
        "rsf_press_freedom": 70
      },
      "coverage_weight": 1.0
    },
    {
      "year": 2025,
      "index": 77.4,
      "components": {
        "freedom_house_total": 81,
        "vdem_liberal_democracy": 79,
        "vdem_electoral_democracy": 84,
        "wgi_voice_accountability": 72,
        "wgi_rule_of_law": 82,
        "transparency_cpi": 64,
        "rsf_press_freedom": 67
      },
      "coverage_weight": 1.0
    },
    {
      "year": 2026,
      "index": 78.01,
      "components": {
        "freedom_house_total": 83,
        "vdem_liberal_democracy": 79,
        "vdem_electoral_democracy": 84,
        "wgi_voice_accountability": 72,
        "wgi_rule_of_law": 82,
        "transparency_cpi": 64,
        "rsf_press_freedom": 69.12
      },
      "coverage_weight": 1.0
    }
  ],
  "latest": {
    "year": 2026,
    "index": 78.01,
    "components": {
      "freedom_house_total": 83,
      "vdem_liberal_democracy": 79,
      "vdem_electoral_democracy": 84,
      "wgi_voice_accountability": 72,
      "wgi_rule_of_law": 82,
      "transparency_cpi": 64,
      "rsf_press_freedom": 69.12
    },
    "coverage_weight": 1.0
  },
  "comparison": {
    "from_year": 2018,
    "to_year": 2026,
    "change": -0.59
  },
  "method_note": "Composite tracks South Korea from 2018 using the user-specified weights. Some components are seeded until bulk source files are imported; component quality flags identify this."
};
