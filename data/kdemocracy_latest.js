window.KDEMOCRACY_LATEST = {
  "name": "K-Democracy Index",
  "short_name": "K-Democracy",
  "date": "2026-06-30",
  "version": "pilot-2026.06",
  "scope": {
    "domestic": "South Korea annual time series, 2018-2026",
    "international": "Current pilot comparison using latest available public democracy-governance indicators"
  },
  "weights": {
    "freedom_house_total": 0.25,
    "vdem_liberal_democracy": 0.2,
    "vdem_electoral_democracy": 0.15,
    "wgi_voice_accountability": 0.15,
    "wgi_rule_of_law": 0.1,
    "transparency_cpi": 0.1,
    "rsf_press_freedom": 0.05
  },
  "components": [
    {"id": "freedom_house_total", "name": "Freedom House 총점", "weight": 0.25, "unit": "0-100", "source": "Freedom House Freedom in the World"},
    {"id": "vdem_liberal_democracy", "name": "V-Dem 자유민주주의", "weight": 0.2, "unit": "0-100 환산", "source": "V-Dem Democracy Indices"},
    {"id": "vdem_electoral_democracy", "name": "V-Dem 선거민주주의", "weight": 0.15, "unit": "0-100 환산", "source": "V-Dem Democracy Indices"},
    {"id": "wgi_voice_accountability", "name": "WGI 발언권·책임성", "weight": 0.15, "unit": "0-100", "source": "World Bank Worldwide Governance Indicators"},
    {"id": "wgi_rule_of_law", "name": "WGI 법치", "weight": 0.1, "unit": "0-100", "source": "World Bank Worldwide Governance Indicators"},
    {"id": "transparency_cpi", "name": "Transparency CPI", "weight": 0.1, "unit": "0-100", "source": "Transparency International CPI"},
    {"id": "rsf_press_freedom", "name": "RSF 언론자유", "weight": 0.05, "unit": "0-100", "source": "Reporters Without Borders World Press Freedom Index"}
  ],
  "korea_history": [
    {"year": 2018, "index": 78.6, "components": {"freedom_house_total": 84, "vdem_liberal_democracy": 80, "vdem_electoral_democracy": 86, "wgi_voice_accountability": 74, "wgi_rule_of_law": 82, "transparency_cpi": 57, "rsf_press_freedom": 74}},
    {"year": 2019, "index": 78.25, "components": {"freedom_house_total": 83, "vdem_liberal_democracy": 79, "vdem_electoral_democracy": 85, "wgi_voice_accountability": 74, "wgi_rule_of_law": 82, "transparency_cpi": 59, "rsf_press_freedom": 75}},
    {"year": 2020, "index": 78.75, "components": {"freedom_house_total": 83, "vdem_liberal_democracy": 79, "vdem_electoral_democracy": 85, "wgi_voice_accountability": 75, "wgi_rule_of_law": 83, "transparency_cpi": 61, "rsf_press_freedom": 76}},
    {"year": 2021, "index": 78.75, "components": {"freedom_house_total": 83, "vdem_liberal_democracy": 78, "vdem_electoral_democracy": 84, "wgi_voice_accountability": 76, "wgi_rule_of_law": 84, "transparency_cpi": 62, "rsf_press_freedom": 76}},
    {"year": 2022, "index": 78.25, "components": {"freedom_house_total": 83, "vdem_liberal_democracy": 78, "vdem_electoral_democracy": 84, "wgi_voice_accountability": 74, "wgi_rule_of_law": 83, "transparency_cpi": 63, "rsf_press_freedom": 72}},
    {"year": 2023, "index": 77.4, "components": {"freedom_house_total": 83, "vdem_liberal_democracy": 76, "vdem_electoral_democracy": 83, "wgi_voice_accountability": 73, "wgi_rule_of_law": 82, "transparency_cpi": 63, "rsf_press_freedom": 71}},
    {"year": 2024, "index": 76.75, "components": {"freedom_house_total": 83, "vdem_liberal_democracy": 74, "vdem_electoral_democracy": 82, "wgi_voice_accountability": 72, "wgi_rule_of_law": 82, "transparency_cpi": 64, "rsf_press_freedom": 70}},
    {"year": 2025, "index": 77.4, "components": {"freedom_house_total": 81, "vdem_liberal_democracy": 79, "vdem_electoral_democracy": 84, "wgi_voice_accountability": 72, "wgi_rule_of_law": 82, "transparency_cpi": 64, "rsf_press_freedom": 67}},
    {"year": 2026, "index": 78.01, "components": {"freedom_house_total": 83, "vdem_liberal_democracy": 79, "vdem_electoral_democracy": 84, "wgi_voice_accountability": 72, "wgi_rule_of_law": 82, "transparency_cpi": 64, "rsf_press_freedom": 69.12}}
  ],
  "latest_korea": {"year": 2026, "index": 78.01, "rank_in_current_table": 12, "g20_sample_rank": 6, "change_since_2018": -0.59},
  "international_comparison": [
    {"country": "Norway", "group": "OECD", "score": 91.6, "rank": 1, "status": "선도권"},
    {"country": "New Zealand", "group": "OECD", "score": 90.8, "rank": 2, "status": "선도권"},
    {"country": "Sweden", "group": "OECD", "score": 89.9, "rank": 3, "status": "선도권"},
    {"country": "Denmark", "group": "OECD", "score": 89.4, "rank": 4, "status": "선도권"},
    {"country": "Australia", "group": "OECD/G20", "score": 86.9, "rank": 5, "status": "상위권"},
    {"country": "Germany", "group": "OECD/G20", "score": 85.5, "rank": 6, "status": "상위권"},
    {"country": "Canada", "group": "OECD/G20", "score": 84.8, "rank": 7, "status": "상위권"},
    {"country": "Taiwan", "group": "Asia benchmark", "score": 83.5, "rank": 8, "status": "상위권"},
    {"country": "Japan", "group": "OECD/G20", "score": 82.1, "rank": 9, "status": "상위권"},
    {"country": "United Kingdom", "group": "OECD/G20", "score": 81.5, "rank": 10, "status": "상위권"},
    {"country": "Spain", "group": "OECD", "score": 80.3, "rank": 11, "status": "상위권"},
    {"country": "South Korea", "group": "OECD/G20", "score": 78.01, "rank": 12, "status": "중상위권"},
    {"country": "France", "group": "OECD/G20", "score": 77.4, "rank": 13, "status": "중상위권"},
    {"country": "Italy", "group": "OECD/G20", "score": 75.9, "rank": 14, "status": "중상위권"},
    {"country": "United States", "group": "OECD/G20", "score": 73.8, "rank": 15, "status": "중위권"},
    {"country": "Poland", "group": "OECD", "score": 72.4, "rank": 16, "status": "중위권"},
    {"country": "Brazil", "group": "G20", "score": 61.2, "rank": 17, "status": "취약권"},
    {"country": "India", "group": "G20", "score": 54.8, "rank": 18, "status": "취약권"}
  ],
  "notes": [
    "한국 시계열은 2018-2026년 동일 가중치로 산출한다.",
    "국제비교는 현재 공개된 최신 연도 지표를 같은 0-100 스케일로 맞춘 파일럿 비교표다.",
    "다음 단계에서는 각 원자료 CSV/API를 국가별로 자동 수집해 파일럿 값을 대체한다."
  ],
  "source_links": [
    {"label": "Freedom House Freedom in the World", "url": "https://freedomhouse.org/report/freedom-world"},
    {"label": "V-Dem Democracy Indices", "url": "https://www.v-dem.net/data/the-v-dem-dataset/"},
    {"label": "World Bank Worldwide Governance Indicators", "url": "https://www.worldbank.org/en/publication/worldwide-governance-indicators"},
    {"label": "Transparency International CPI", "url": "https://www.transparency.org/en/cpi"},
    {"label": "RSF World Press Freedom Index", "url": "https://rsf.org/en/index"}
  ]
};
