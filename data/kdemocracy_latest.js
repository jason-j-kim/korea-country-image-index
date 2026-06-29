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
  "power_alternation": {
    "name": "정권교체지수",
    "window": "1995-2026",
    "method": "선거 또는 헌정 절차를 통해 집권 정당/블록이 반대 진영으로 교체된 횟수를 집계하고, 5회 이상을 100점으로 정규화한다.",
    "formula": "score = min(100, alternations / 5 * 100)",
    "interpretation": "높을수록 유권자가 집권세력을 실제로 교체할 수 있었던 경험이 많다는 뜻이다. 단, 잦은 교체가 항상 정책 안정성을 뜻하지는 않으므로 기존 민주주의 지표의 보완축으로 사용한다.",
    "comparison": [
      {"country": "South Korea", "alternations": 5, "score": 100, "events": "1998, 2008, 2017, 2022, 2025", "note": "보수-진보 진영 간 대통령 권력 교체가 반복됨"},
      {"country": "Italy", "alternations": 5, "score": 100, "events": "1996, 2001, 2006, 2008, 2013+", "note": "연립정부 교체가 잦아 유동성이 높음"},
      {"country": "Australia", "alternations": 4, "score": 80, "events": "1996, 2007, 2013, 2022", "note": "양대 정당 경쟁에 따른 주기적 교체"},
      {"country": "United States", "alternations": 4, "score": 80, "events": "2001, 2009, 2017, 2021", "note": "대통령제 양당 경쟁의 교체성 높음"},
      {"country": "Germany", "alternations": 3, "score": 60, "events": "1998, 2005, 2021", "note": "연립 형태는 바뀌지만 총리 소속 블록 기준 교체"},
      {"country": "Taiwan", "alternations": 3, "score": 60, "events": "2000, 2008, 2016", "note": "민주화 이후 양대 진영 교체"},
      {"country": "United Kingdom", "alternations": 3, "score": 60, "events": "1997, 2010, 2024", "note": "하원 다수 기반의 집권당 교체"},
      {"country": "Brazil", "alternations": 3, "score": 60, "events": "2003, 2016, 2023", "note": "대통령 진영 교체와 탄핵 이후 승계 포함"},
      {"country": "France", "alternations": 2, "score": 40, "events": "2012, 2017", "note": "대통령 소속 정치 블록 기준"},
      {"country": "Japan", "alternations": 2, "score": 40, "events": "2009, 2012", "note": "민주주의 제도는 안정적이나 LDP 장기 우위가 강함"},
      {"country": "Canada", "alternations": 2, "score": 40, "events": "2006, 2015", "note": "자유당-보수당 간 교체"},
      {"country": "Mexico", "alternations": 2, "score": 40, "events": "2000, 2018", "note": "PRI 장기지배 종료 이후 대형 교체 발생"}
    ]
  },
  "notes": [
    "한국 시계열은 2018-2026년 동일 가중치로 산출한다.",
    "국제비교는 현재 공개된 최신 연도 지표를 같은 0-100 스케일로 맞춘 파일럿 비교표다.",
    "정권교체지수는 민주주의의 경쟁성과 권력교체 경험을 보완적으로 보여주는 별도 그래프다.",
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
