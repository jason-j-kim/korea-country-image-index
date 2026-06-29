window.KCI_LATEST = {
  "date": "2026-06-30",
  "name": "Korea Country Image Index",
  "short_name": "KCI",
  "scope": "KCI-D is Korea's domestic time-series country image index. KCI-G is a separate international comparison framework over OECD, G20, and a major-30 country set.",
  "excluded_variables": [
    "K-pop",
    "K-drama",
    "K-video",
    "K-game",
    "K-webtoon",
    "K-fashion",
    "K-beauty",
    "K-tourism",
    "YouTube views",
    "Reddit mentions/subscribers",
    "KF Hallyu status API",
    "K-Food exports"
  ],
  "formula": "KCI = weighted mean of normalized area scores; rank and bounded indicators keep their native scales; unbenchmarked Korea-only time-series indicators are capped at 95 to avoid reading a local maximum as a perfect score.",
  "headline": {
    "kci": 81.91,
    "simple_mean": 81.54,
    "active_area_count": 5,
    "basis": "KCI-D domestic time-series core index; appendix and observational areas excluded from headline."
  },
  "areas": [
    {
      "id": "language_education",
      "name": "언어·교육 수요",
      "weight": 0.2,
      "role": "core",
      "rationale": "한국어 학습, 한국 유학, 한국학 개설처럼 시간과 비용을 투입하는 국가 선택 행동.",
      "score": 95.0,
      "indicator_count": 4,
      "indicators": [
        "topik_total",
        "sejong_students",
        "international_students",
        "korean_university_programs"
      ]
    },
    {
      "id": "knowledge_innovation",
      "name": "지식·혁신 역량",
      "weight": 0.18,
      "role": "core",
      "rationale": "특허, 연구 기여도, 혁신 순위로 나타나는 한국 지식생산 생태계의 국제적 위치.",
      "score": 88.33,
      "indicator_count": 3,
      "indicators": [
        "pct_applications",
        "gii_rank",
        "nature_rank"
      ]
    },
    {
      "id": "medical_services",
      "name": "의료·전문 서비스 신뢰",
      "weight": 0.14,
      "role": "core",
      "rationale": "외국인이 한국 의료를 직접 선택하고 지출하는 고비용 행동.",
      "score": 95.0,
      "indicator_count": 2,
      "indicators": [
        "foreign_patients",
        "medical_spending_krw"
      ]
    },
    {
      "id": "economy_investment",
      "name": "경제·투자 매력",
      "weight": 0.14,
      "role": "core",
      "rationale": "외국인직접투자처럼 기업과 자본이 한국을 선택하는 행동.",
      "score": 51.35,
      "indicator_count": 1,
      "indicators": [
        "fdi_inflow_usd_m"
      ]
    },
    {
      "id": "foreign_media_digital",
      "name": "외국 언론·정보 수요",
      "weight": 0.0,
      "role": "observational",
      "rationale": "외국 언론 노출량과 Wikipedia 조회처럼 한국 국가 자체에 대한 정보탐색 행동. 단순 보도량은 감성 보정 전까지 점수에서 제외한다.",
      "score": null,
      "indicator_count": 0,
      "indicators": []
    },
    {
      "id": "democracy_governance",
      "name": "민주주의·거버넌스 신뢰",
      "weight": 0.34,
      "role": "core",
      "rationale": "정치적 권리, 시민적 자유, 민주주의 작동 수준은 국가이미지의 제도적 신뢰 기반이다.",
      "score": 78.01,
      "indicator_count": 1,
      "indicators": [
        "kdi_composite"
      ]
    },
    {
      "id": "lifestyle_services",
      "name": "생활문화 서비스 소비",
      "weight": 0.0,
      "role": "appendix",
      "rationale": "수출액이 아니라 해외 식당 방문, 인식, 외식 서비스 선택에 나타나는 생활문화 접촉.",
      "score": 85.93,
      "indicator_count": 3,
      "indicators": [
        "korean_restaurant_chains",
        "korean_food_awareness",
        "korean_food_satisfaction"
      ]
    }
  ],
  "indicators": [
    {
      "id": "topik_total",
      "area": "language_education",
      "name": "TOPIK 국내외 총 응시자",
      "unit": "persons",
      "source": "NIIE/data.go.kr; kci_behavioral_indicators.docx Table 1",
      "status": "active",
      "latest_year": 2025,
      "latest_value": 553237,
      "score": 95.0,
      "series": {
        "2020": 218869,
        "2021": 330000,
        "2022": 360000,
        "2023": 420000,
        "2024": 490000,
        "2025": 553237
      }
    },
    {
      "id": "sejong_students",
      "area": "language_education",
      "name": "세종학당 수강생",
      "unit": "persons",
      "source": "Sejong Institute Foundation/data.go.kr; document Table 1",
      "status": "active",
      "latest_year": 2025,
      "latest_value": 239020,
      "score": 95.0,
      "series": {
        "2020": 101675,
        "2021": 138425,
        "2022": 178973,
        "2023": 216226,
        "2024": 210374,
        "2025": 239020
      }
    },
    {
      "id": "international_students",
      "area": "language_education",
      "name": "한국 내 외국인 유학생",
      "unit": "persons",
      "source": "MOE/KEDI, Ministry of Justice; document Table 5",
      "status": "active",
      "latest_year": 2025,
      "latest_value": 305329,
      "score": 95.0,
      "series": {
        "2020": 153695,
        "2021": 155281,
        "2022": 166892,
        "2023": 226507,
        "2024": 263775,
        "2025": 305329
      }
    },
    {
      "id": "korean_university_programs",
      "area": "language_education",
      "name": "해외 한국어 교육기관 수",
      "unit": "institutions",
      "source": "KF/MCST; document Table 4. 2025 value includes primary/secondary schools, not universities only.",
      "status": "active",
      "latest_year": 2025,
      "latest_value": 2777,
      "score": 95.0,
      "series": {
        "2017": 1300,
        "2021": 1600,
        "2024": 1800,
        "2025": 2777
      }
    },
    {
      "id": "pct_applications",
      "area": "knowledge_innovation",
      "name": "WIPO PCT 국제 특허 출원",
      "unit": "applications",
      "source": "WIPO PCT Yearly Review; document Table 6",
      "status": "active",
      "latest_year": 2024,
      "latest_value": 23851,
      "score": 95.0,
      "series": {
        "2018": 17000,
        "2020": 20000,
        "2022": 22000,
        "2023": 22288,
        "2024": 23851
      }
    },
    {
      "id": "gii_rank",
      "area": "knowledge_innovation",
      "name": "WIPO 글로벌 혁신지수 순위",
      "unit": "rank",
      "source": "WIPO GII; document Table 8",
      "status": "active",
      "latest_year": 2025,
      "latest_value": 4,
      "score": 90.0,
      "series": {
        "2019": 11,
        "2021": 5,
        "2022": 6,
        "2023": 10,
        "2024": 6,
        "2025": 4
      }
    },
    {
      "id": "nature_rank",
      "area": "knowledge_innovation",
      "name": "Nature Index 종합 순위",
      "unit": "rank",
      "source": "Nature Index 2026; document Table 7",
      "status": "active",
      "latest_year": 2026,
      "latest_value": 7,
      "score": 80.0,
      "series": {
        "2026": 7
      }
    },
    {
      "id": "foreign_patients",
      "area": "medical_services",
      "name": "외국인 환자 수",
      "unit": "persons",
      "source": "MOHW/Medical Korea; document Table 9",
      "status": "active",
      "latest_year": 2024,
      "latest_value": 1170467,
      "score": 95.0,
      "series": {
        "2019": 497000,
        "2020": 146000,
        "2021": 146000,
        "2022": 248000,
        "2023": 610000,
        "2024": 1170467
      }
    },
    {
      "id": "medical_spending_krw",
      "area": "medical_services",
      "name": "외국인 환자 의료 지출",
      "unit": "KRW 100m",
      "source": "MOHW/Yanolja Research; document Table 10",
      "status": "active",
      "latest_year": 2024,
      "latest_value": 12401,
      "score": 95.0,
      "series": {
        "2019": 4091,
        "2024": 12401
      }
    },
    {
      "id": "fdi_inflow_usd_m",
      "area": "economy_investment",
      "name": "FDI 유입액",
      "unit": "USD million",
      "source": "UNCTAD/World Bank; document Table 11 plus API refresh when available",
      "status": "active",
      "latest_year": 2024,
      "latest_value": 12862.5,
      "score": 51.35,
      "series": {
        "2020": 8764.9,
        "2021": 22060.4,
        "2022": 25044.7,
        "2023": 18599.1,
        "2024": 12862.5,
        "2019": 9634.3,
        "2018": 12182.6,
        "2017": 17912.9,
        "2016": 12104.3,
        "2015": 4104.1,
        "2014": 9273.6,
        "2013": 12766.6,
        "2012": 9495.9,
        "2011": 9773.0,
        "2010": 9497.4,
        "2009": 9021.9,
        "2008": 11187.5,
        "2007": 8826.9,
        "2006": 9161.9,
        "2005": 13643.2,
        "2004": 13294.4,
        "2003": 7010.0,
        "2002": 5475.1,
        "2001": 6522.3,
        "2000": 11509.4,
        "1999": 10726.3,
        "1998": 5989.2,
        "1997": 3301.1,
        "1996": 2782.6,
        "1995": 2487.1,
        "1994": 1136.6,
        "1993": 832.3,
        "1992": 1001.6,
        "1991": 1455.2,
        "1990": 1045.6,
        "1989": 1389.6,
        "1988": 1293.1,
        "1987": 838.6,
        "1986": 682.5,
        "1985": 355.3,
        "1984": 223.3,
        "1983": 184.3,
        "1982": 120.9,
        "1981": 155.1,
        "1980": 47.1,
        "1979": 172.0,
        "1978": 89.0,
        "1977": 94.0,
        "1976": 81.0,
        "1975": 6.0,
        "1974": 2.0,
        "1973": 4.0,
        "1972": 496.0,
        "1971": 42.0,
        "1970": 66.0
      },
      "live": {
        "ok": true,
        "series": {
          "2024": 12862.5,
          "2023": 18599.1,
          "2022": 25044.7,
          "2021": 22060.4,
          "2020": 8764.9,
          "2019": 9634.3,
          "2018": 12182.6,
          "2017": 17912.9,
          "2016": 12104.3,
          "2015": 4104.1,
          "2014": 9273.6,
          "2013": 12766.6,
          "2012": 9495.9,
          "2011": 9773.0,
          "2010": 9497.4,
          "2009": 9021.9,
          "2008": 11187.5,
          "2007": 8826.9,
          "2006": 9161.9,
          "2005": 13643.2,
          "2004": 13294.4,
          "2003": 7010.0,
          "2002": 5475.1,
          "2001": 6522.3,
          "2000": 11509.4,
          "1999": 10726.3,
          "1998": 5989.2,
          "1997": 3301.1,
          "1996": 2782.6,
          "1995": 2487.1,
          "1994": 1136.6,
          "1993": 832.3,
          "1992": 1001.6,
          "1991": 1455.2,
          "1990": 1045.6,
          "1989": 1389.6,
          "1988": 1293.1,
          "1987": 838.6,
          "1986": 682.5,
          "1985": 355.3,
          "1984": 223.3,
          "1983": 184.3,
          "1982": 120.9,
          "1981": 155.1,
          "1980": 47.1,
          "1979": 172.0,
          "1978": 89.0,
          "1977": 94.0,
          "1976": 81.0,
          "1975": 6.0,
          "1974": 2.0,
          "1973": 4.0,
          "1972": 496.0,
          "1971": 42.0,
          "1970": 66.0
        },
        "url": "https://api.worldbank.org/v2/country/KOR/indicator/BX.KLT.DINV.CD.WD?format=json&per_page=80"
      }
    },
    {
      "id": "foreign_media_coverage",
      "area": "foreign_media_digital",
      "name": "외국 언론의 한국 보도량",
      "unit": "articles, last 30 days",
      "source": "GDELT 2.1 DOC API, English-language global news query for South Korea/Korea",
      "status": "active",
      "latest_year": 2026,
      "latest_value": 1261,
      "score": null,
      "series": {
        "2026": 1261
      },
      "live": {
        "ok": true,
        "source": "Google News RSS topic-basket fallback",
        "year": 2026,
        "value": 1261,
        "annualized_value": 15342,
        "window_days": 30,
        "query_count": 10,
        "edition_count": 6,
        "by_topic": {
          "general_country": 252,
          "government_politics": 115,
          "democracy_society": 74,
          "economy_technology": 56,
          "diplomacy_security": 47,
          "seoul_society": 168,
          "policy_crisis": 9,
          "hallyu_music": 235,
          "hallyu_screen": 161,
          "hallyu_lifestyle": 178
        },
        "sentiment_method": "English headline/description lexicon, positive/neutral/negative; quick exposure signal, not full article NLP.",
        "sentiment_counts": {
          "positive": 179,
          "neutral": 982,
          "negative": 100
        },
        "positivity_index": 53.13,
        "net_sentiment_index": 53.13,
        "topic_sentiment": {
          "general_country": {
            "positive": 27,
            "neutral": 199,
            "negative": 26
          },
          "government_politics": {
            "positive": 7,
            "neutral": 67,
            "negative": 41
          },
          "democracy_society": {
            "positive": 5,
            "neutral": 62,
            "negative": 7
          },
          "economy_technology": {
            "positive": 26,
            "neutral": 28,
            "negative": 2
          },
          "diplomacy_security": {
            "positive": 8,
            "neutral": 34,
            "negative": 5
          },
          "seoul_society": {
            "positive": 30,
            "neutral": 125,
            "negative": 13
          },
          "policy_crisis": {
            "positive": 1,
            "neutral": 4,
            "negative": 4
          },
          "hallyu_music": {
            "positive": 34,
            "neutral": 199,
            "negative": 2
          },
          "hallyu_screen": {
            "positive": 19,
            "neutral": 138,
            "negative": 4
          },
          "hallyu_lifestyle": {
            "positive": 26,
            "neutral": 148,
            "negative": 4
          }
        },
        "sample_articles": [
          {
            "title": "Mexico 1-0 South Korea (Jun 18, 2026) Game Analysis - ESPN",
            "description": "Mexico 1-0 South Korea (Jun 18, 2026) Game Analysis ESPN",
            "topics": [
              "general_country"
            ],
            "source": "ESPN",
            "sentiment": "neutral"
          },
          {
            "title": "'Coreano Hermano': Ahead of Mexico vs. South Korea, it's all love between the fans - NPR",
            "description": "'Coreano Hermano': Ahead of Mexico vs. South Korea, it's all love between the fans NPR",
            "topics": [
              "general_country"
            ],
            "source": "NPR",
            "sentiment": "neutral"
          },
          {
            "title": "Massive bonuses for South Korea's chip workers puts central bank on inflation alert - CNBC",
            "description": "Massive bonuses for South Korea's chip workers puts central bank on inflation alert CNBC",
            "topics": [
              "general_country"
            ],
            "source": "CNBC",
            "sentiment": "neutral"
          },
          {
            "title": "Thousands demand South Korea repeat local elections after ballot shortage - Reuters",
            "description": "Thousands demand South Korea repeat local elections after ballot shortage Reuters",
            "topics": [
              "democracy_society",
              "general_country"
            ],
            "source": "Reuters",
            "sentiment": "neutral"
          },
          {
            "title": "4 Takeaways From Mexico's Group-Clinching Win Over South Korea - FOX Sports",
            "description": "4 Takeaways From Mexico's Group-Clinching Win Over South Korea FOX Sports",
            "topics": [
              "general_country"
            ],
            "source": "FOX Sports",
            "sentiment": "positive"
          },
          {
            "title": "Hwang In-beom sparks South Korea’s 2-1 comeback win over the Czech Republic at the World Cup - AP News",
            "description": "Hwang In-beom sparks South Korea’s 2-1 comeback win over the Czech Republic at the World Cup AP News",
            "topics": [
              "general_country"
            ],
            "source": "AP News",
            "sentiment": "positive"
          },
          {
            "title": "Can Sonny, South Korea’s Legendary Captain, Deliver in His Final World Cup? - The New Yorker",
            "description": "Can Sonny, South Korea’s Legendary Captain, Deliver in His Final World Cup? The New Yorker",
            "topics": [
              "general_country"
            ],
            "source": "The New Yorker",
            "sentiment": "neutral"
          },
          {
            "title": "Mexico beat South Korea to clinch first place in Group A - ESPN",
            "description": "Mexico beat South Korea to clinch first place in Group A ESPN",
            "topics": [
              "general_country"
            ],
            "source": "ESPN",
            "sentiment": "neutral"
          },
          {
            "title": "South Africa’s stirring upset books Canada showdown, South Korea bench Son Heung-min and left stunned - The New York Times",
            "description": "South Africa’s stirring upset books Canada showdown, South Korea bench Son Heung-min and left stunned The New York Times",
            "topics": [
              "general_country"
            ],
            "source": "The New York Times",
            "sentiment": "neutral"
          },
          {
            "title": "South Korea's shock Son Heung-Min gamble backfires spectacularly - ESPN",
            "description": "South Korea's shock Son Heung-Min gamble backfires spectacularly ESPN",
            "topics": [
              "general_country"
            ],
            "source": "ESPN",
            "sentiment": "neutral"
          },
          {
            "title": "South Korea’s World Cup wreckage: From Son’s ‘absolute heartache’ to threats against the coach - The Athletic - The New York Times",
            "description": "South Korea’s World Cup wreckage: From Son’s ‘absolute heartache’ to threats against the coach - The Athletic The New York Times",
            "topics": [
              "general_country"
            ],
            "source": "The New York Times",
            "sentiment": "neutral"
          },
          {
            "title": "South Korea coach Hong Myung-Bo quits after World Cup exit, criticism from president - ESPN",
            "description": "South Korea coach Hong Myung-Bo quits after World Cup exit, criticism from president ESPN",
            "topics": [
              "general_country"
            ],
            "source": "ESPN",
            "sentiment": "neutral"
          },
          {
            "title": "Mexico beat South Korea at World Cup but are still a work in progress - ESPN",
            "description": "Mexico beat South Korea at World Cup but are still a work in progress ESPN",
            "topics": [
              "general_country"
            ],
            "source": "ESPN",
            "sentiment": "neutral"
          },
          {
            "title": "South Korea on brink of WC exit after 'wrong' Son gamble - ESPN",
            "description": "South Korea on brink of WC exit after 'wrong' Son gamble ESPN",
            "topics": [
              "general_country"
            ],
            "source": "ESPN",
            "sentiment": "neutral"
          },
          {
            "title": "South Africa 1-0 South Korea (Jun 24, 2026) Game Analysis - ESPN",
            "description": "South Africa 1-0 South Korea (Jun 24, 2026) Game Analysis ESPN",
            "topics": [
              "general_country"
            ],
            "source": "ESPN",
            "sentiment": "neutral"
          },
          {
            "title": "South Korea drop captain Son Heung-Min for World Cup decider - ESPN",
            "description": "South Korea drop captain Son Heung-Min for World Cup decider ESPN",
            "topics": [
              "general_country"
            ],
            "source": "ESPN",
            "sentiment": "neutral"
          },
          {
            "title": "Mexico vs. South Korea at World Cup 2026: TV channel, how to watch in UK, kick-off time, live stream, referee, predicted line-ups - ESPN",
            "description": "Mexico vs. South Korea at World Cup 2026: TV channel, how to watch in UK, kick-off time, live stream, referee, predicted line-ups ESPN",
            "topics": [
              "general_country"
            ],
            "source": "ESPN",
            "sentiment": "neutral"
          },
          {
            "title": "Park Ji-sung blasts KFA as South Korea warned against repeating 2014 World Cup failures - ESPN",
            "description": "Park Ji-sung blasts KFA as South Korea warned against repeating 2014 World Cup failures ESPN",
            "topics": [
              "general_country"
            ],
            "source": "ESPN",
            "sentiment": "neutral"
          },
          {
            "title": "South Korea's World Cup disaster prompts outlandish question from Korean journalist - Yahoo Sports",
            "description": "South Korea's World Cup disaster prompts outlandish question from Korean journalist Yahoo Sports",
            "topics": [
              "general_country"
            ],
            "source": "Yahoo Sports",
            "sentiment": "neutral"
          },
          {
            "title": "South Korea president calls for government investigation into World Cup exit as head coach resigns - The New York Times",
            "description": "South Korea president calls for government investigation into World Cup exit as head coach resigns The New York Times",
            "topics": [
              "general_country",
              "government_politics"
            ],
            "source": "The New York Times",
            "sentiment": "negative"
          },
          {
            "title": "4 Takeaways From South Korea's Comeback Win Over Czechia In Group A - FOX Sports",
            "description": "4 Takeaways From South Korea's Comeback Win Over Czechia In Group A FOX Sports",
            "topics": [
              "general_country"
            ],
            "source": "FOX Sports",
            "sentiment": "positive"
          },
          {
            "title": "No Bafana, no party! South Africa stun South Korea to advance to FIFA World Cup R32 - ESPN",
            "description": "No Bafana, no party! South Africa stun South Korea to advance to FIFA World Cup R32 ESPN",
            "topics": [
              "general_country"
            ],
            "source": "ESPN",
            "sentiment": "neutral"
          },
          {
            "title": "Park criticises South Korea after loss to South Africa, warns of 2014 World Cup repeat - Reuters",
            "description": "Park criticises South Korea after loss to South Africa, warns of 2014 World Cup repeat Reuters",
            "topics": [
              "general_country"
            ],
            "source": "Reuters",
            "sentiment": "neutral"
          },
          {
            "title": "Soccer-South Africa and South Korea seek win in decisive Group A clash - Reuters",
            "description": "Soccer-South Africa and South Korea seek win in decisive Group A clash Reuters",
            "topics": [
              "general_country"
            ],
            "source": "Reuters",
            "sentiment": "positive"
          },
          {
            "title": "Is South Korea out of the World Cup? Third-place standings reveal final place for Korean squad - Yahoo Sports",
            "description": "Is South Korea out of the World Cup? Third-place standings reveal final place for Korean squad Yahoo Sports",
            "topics": [
              "general_country"
            ],
            "source": "Yahoo Sports",
            "sentiment": "neutral"
          }
        ],
        "url": "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
        "urls": [
          "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
          "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
          "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
          "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
          "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
          "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korean+government%22+OR+%22South+Korea+government%22+OR+%22South+Korea+parliament%22+OR+%22South+Korea+president%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korean+government%22+OR+%22South+Korea+government%22+OR+%22South+Korea+parliament%22+OR+%22South+Korea+president%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korean+government%22+OR+%22South+Korea+government%22+OR+%22South+Korea+parliament%22+OR+%22South+Korea+president%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korean+government%22+OR+%22South+Korea+government%22+OR+%22South+Korea+parliament%22+OR+%22South+Korea+president%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korean+government%22+OR+%22South+Korea+government%22+OR+%22South+Korea+parliament%22+OR+%22South+Korea+president%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korean+government%22+OR+%22South+Korea+government%22+OR+%22South+Korea+parliament%22+OR+%22South+Korea+president%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+democracy%22+OR+%22South+Korea+election%22+OR+%22South+Korea+court%22+OR+%22South+Korea+protest%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+democracy%22+OR+%22South+Korea+election%22+OR+%22South+Korea+court%22+OR+%22South+Korea+protest%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+democracy%22+OR+%22South+Korea+election%22+OR+%22South+Korea+court%22+OR+%22South+Korea+protest%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+democracy%22+OR+%22South+Korea+election%22+OR+%22South+Korea+court%22+OR+%22South+Korea+protest%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+democracy%22+OR+%22South+Korea+election%22+OR+%22South+Korea+court%22+OR+%22South+Korea+protest%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+democracy%22+OR+%22South+Korea+election%22+OR+%22South+Korea+court%22+OR+%22South+Korea+protest%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+economy%22+OR+%22South+Korea+trade%22+OR+%22South+Korea+investment%22+OR+%22South+Korea+technology%22+OR+%22South+Korea+semiconductor%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+economy%22+OR+%22South+Korea+trade%22+OR+%22South+Korea+investment%22+OR+%22South+Korea+technology%22+OR+%22South+Korea+semiconductor%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+economy%22+OR+%22South+Korea+trade%22+OR+%22South+Korea+investment%22+OR+%22South+Korea+technology%22+OR+%22South+Korea+semiconductor%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+economy%22+OR+%22South+Korea+trade%22+OR+%22South+Korea+investment%22+OR+%22South+Korea+technology%22+OR+%22South+Korea+semiconductor%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+economy%22+OR+%22South+Korea+trade%22+OR+%22South+Korea+investment%22+OR+%22South+Korea+technology%22+OR+%22South+Korea+semiconductor%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+economy%22+OR+%22South+Korea+trade%22+OR+%22South+Korea+investment%22+OR+%22South+Korea+technology%22+OR+%22South+Korea+semiconductor%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+diplomacy%22+OR+%22South+Korea+security%22+OR+%22South+Korea+defense%22+OR+%22South+Korea+military%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+diplomacy%22+OR+%22South+Korea+security%22+OR+%22South+Korea+defense%22+OR+%22South+Korea+military%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+diplomacy%22+OR+%22South+Korea+security%22+OR+%22South+Korea+defense%22+OR+%22South+Korea+military%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+diplomacy%22+OR+%22South+Korea+security%22+OR+%22South+Korea+defense%22+OR+%22South+Korea+military%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+diplomacy%22+OR+%22South+Korea+security%22+OR+%22South+Korea+defense%22+OR+%22South+Korea+military%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+diplomacy%22+OR+%22South+Korea+security%22+OR+%22South+Korea+defense%22+OR+%22South+Korea+military%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
          "https://news.google.com/rss/search?q=%28%22Seoul%22+%22South+Korea%22+OR+%22South+Korea+society%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
          "https://news.google.com/rss/search?q=%28%22Seoul%22+%22South+Korea%22+OR+%22South+Korea+society%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
          "https://news.google.com/rss/search?q=%28%22Seoul%22+%22South+Korea%22+OR+%22South+Korea+society%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
          "https://news.google.com/rss/search?q=%28%22Seoul%22+%22South+Korea%22+OR+%22South+Korea+society%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
          "https://news.google.com/rss/search?q=%28%22Seoul%22+%22South+Korea%22+OR+%22South+Korea+society%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
          "https://news.google.com/rss/search?q=%28%22Seoul%22+%22South+Korea%22+OR+%22South+Korea+society%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+policy%22+OR+%22South+Korea+crisis%22+OR+%22South+Korea+scandal%22+OR+%22South+Korea+reform%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+policy%22+OR+%22South+Korea+crisis%22+OR+%22South+Korea+scandal%22+OR+%22South+Korea+reform%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+policy%22+OR+%22South+Korea+crisis%22+OR+%22South+Korea+scandal%22+OR+%22South+Korea+reform%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+policy%22+OR+%22South+Korea+crisis%22+OR+%22South+Korea+scandal%22+OR+%22South+Korea+reform%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+policy%22+OR+%22South+Korea+crisis%22+OR+%22South+Korea+scandal%22+OR+%22South+Korea+reform%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
          "https://news.google.com/rss/search?q=%28%22South+Korea+policy%22+OR+%22South+Korea+crisis%22+OR+%22South+Korea+scandal%22+OR+%22South+Korea+reform%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-pop%22+OR+Kpop+OR+BTS+OR+BLACKPINK+OR+%22NewJeans%22+OR+%22Korean+pop%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-pop%22+OR+Kpop+OR+BTS+OR+BLACKPINK+OR+%22NewJeans%22+OR+%22Korean+pop%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-pop%22+OR+Kpop+OR+BTS+OR+BLACKPINK+OR+%22NewJeans%22+OR+%22Korean+pop%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-pop%22+OR+Kpop+OR+BTS+OR+BLACKPINK+OR+%22NewJeans%22+OR+%22Korean+pop%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-pop%22+OR+Kpop+OR+BTS+OR+BLACKPINK+OR+%22NewJeans%22+OR+%22Korean+pop%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-pop%22+OR+Kpop+OR+BTS+OR+BLACKPINK+OR+%22NewJeans%22+OR+%22Korean+pop%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-drama%22+OR+%22Korean+drama%22+OR+%22Korean+film%22+OR+%22Korean+cinema%22+OR+%22Squid+Game%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-drama%22+OR+%22Korean+drama%22+OR+%22Korean+film%22+OR+%22Korean+cinema%22+OR+%22Squid+Game%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-drama%22+OR+%22Korean+drama%22+OR+%22Korean+film%22+OR+%22Korean+cinema%22+OR+%22Squid+Game%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-drama%22+OR+%22Korean+drama%22+OR+%22Korean+film%22+OR+%22Korean+cinema%22+OR+%22Squid+Game%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-drama%22+OR+%22Korean+drama%22+OR+%22Korean+film%22+OR+%22Korean+cinema%22+OR+%22Squid+Game%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-drama%22+OR+%22Korean+drama%22+OR+%22Korean+film%22+OR+%22Korean+cinema%22+OR+%22Squid+Game%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-beauty%22+OR+%22Korean+beauty%22+OR+%22K-food%22+OR+%22Korean+food%22+OR+%22Korean+tourism%22+OR+%22Korean+fashion%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-beauty%22+OR+%22Korean+beauty%22+OR+%22K-food%22+OR+%22Korean+food%22+OR+%22Korean+tourism%22+OR+%22Korean+fashion%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-beauty%22+OR+%22Korean+beauty%22+OR+%22K-food%22+OR+%22Korean+food%22+OR+%22Korean+tourism%22+OR+%22Korean+fashion%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-beauty%22+OR+%22Korean+beauty%22+OR+%22K-food%22+OR+%22Korean+food%22+OR+%22Korean+tourism%22+OR+%22Korean+fashion%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-beauty%22+OR+%22Korean+beauty%22+OR+%22K-food%22+OR+%22Korean+food%22+OR+%22Korean+tourism%22+OR+%22Korean+fashion%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
          "https://news.google.com/rss/search?q=%28%22K-beauty%22+OR+%22Korean+beauty%22+OR+%22K-food%22+OR+%22Korean+food%22+OR+%22Korean+tourism%22+OR+%22Korean+fashion%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen"
        ],
        "errors": [],
        "primary_error": "HTTP Error 429: Too Many Requests",
        "primary_url": "https://api.gdeltproject.org/api/v2/doc/doc?query=%28%22South+Korea%22+OR+%22Republic+of+Korea%22%29+sourcelang%3Aenglish&mode=timelinevolraw&format=json&startdatetime=20260530231345&enddatetime=20260629231345"
      }
    },
    {
      "id": "foreign_media_annualized",
      "area": "foreign_media_digital",
      "name": "외국 언론 한국 보도량 연환산 추정치",
      "unit": "annualized articles",
      "source": "Annualized estimate from the latest 30-day foreign media exposure sample.",
      "status": "active",
      "latest_year": 2026,
      "latest_value": 15342,
      "score": null,
      "series": {
        "2026": 15342
      },
      "live": {
        "ok": true,
        "year": 2026,
        "value": 15342,
        "base_30_day_value": 1261,
        "window_days": 30,
        "source": "Google News RSS topic-basket fallback"
      }
    },
    {
      "id": "foreign_media_positivity",
      "area": "foreign_media_digital",
      "name": "외국 언론 한국 보도 긍정지수",
      "unit": "0-100 headline positivity index",
      "source": "Google News RSS headline/description lexicon sentiment. Observational until full article NLP is added.",
      "status": "active",
      "latest_year": 2026,
      "latest_value": 53.13,
      "score": null,
      "series": {
        "2026": 53.13
      },
      "live": {
        "ok": true,
        "year": 2026,
        "value": 53.13,
        "net_sentiment_index": 53.13,
        "sentiment_counts": {
          "positive": 179,
          "neutral": 982,
          "negative": 100
        },
        "sentiment_method": "English headline/description lexicon, positive/neutral/negative; quick exposure signal, not full article NLP.",
        "source": "Google News RSS topic-basket fallback"
      }
    },
    {
      "id": "wikimedia_pageviews",
      "area": "foreign_media_digital",
      "name": "영문 Wikipedia 한국 문서 조회",
      "unit": "pageviews, latest full month",
      "source": "Wikimedia REST API, en.wikipedia South_Korea pageviews",
      "status": "active",
      "latest_year": 2026,
      "latest_value": 191458,
      "score": null,
      "series": {
        "2026": 191458
      },
      "live": {
        "ok": true,
        "year": 2026,
        "month": 5,
        "value": 191458,
        "article": "South_Korea",
        "url": "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/South_Korea/daily/2026050100/2026053100"
      }
    },
    {
      "id": "google_trends_korea",
      "area": "foreign_media_digital",
      "name": "Google Trends 'South Korea' 관심도",
      "unit": "index",
      "source": "Google Trends API/manual export; document section E-2",
      "status": "connector_required",
      "latest_year": null,
      "latest_value": null,
      "score": null,
      "series": {}
    },
    {
      "id": "korean_restaurant_chains",
      "area": "lifestyle_services",
      "name": "해외 한국 외식기업 매장 수",
      "unit": "stores",
      "source": "MAFRA/aT overseas restaurant company survey; document Table 13",
      "status": "active",
      "latest_year": 2025,
      "latest_value": 4644,
      "score": 95.0,
      "series": {
        "2020": 3722,
        "2023": 4382,
        "2025": 4644
      }
    },
    {
      "id": "korean_food_awareness",
      "area": "lifestyle_services",
      "name": "해외 한국 음식 인지도",
      "unit": "percent",
      "source": "MAFRA/KFPI 2025 overseas Korean food consumer survey; document Table 15",
      "status": "active",
      "latest_year": 2025,
      "latest_value": 68.6,
      "score": 68.6,
      "series": {
        "2025": 68.6
      }
    },
    {
      "id": "korean_food_satisfaction",
      "area": "lifestyle_services",
      "name": "해외 한국 음식 만족도",
      "unit": "percent",
      "source": "MAFRA/KFPI 2025 overseas Korean food consumer survey; document Table 15",
      "status": "active",
      "latest_year": 2025,
      "latest_value": 94.2,
      "score": 94.2,
      "series": {
        "2025": 94.2
      }
    },
    {
      "id": "kdi_composite",
      "area": "democracy_governance",
      "name": "KDI 민주주의·거버넌스 복합지수",
      "unit": "0-100",
      "source": "Freedom House 25%, V-Dem Liberal 20%, V-Dem Electoral 15%, WGI Voice 15%, WGI Rule of Law 10%, Transparency CPI 10%, RSF Press Freedom 5%",
      "status": "active",
      "latest_year": 2026,
      "latest_value": 78.01,
      "score": 78.01,
      "series": {
        "2018": 78.6,
        "2019": 78.25,
        "2020": 78.75,
        "2021": 78.75,
        "2022": 78.25,
        "2023": 77.4,
        "2024": 76.75,
        "2025": 77.4,
        "2026": 78.01
      },
      "components": {
        "freedom_house_total": 83,
        "vdem_liberal_democracy": 79,
        "vdem_electoral_democracy": 84,
        "wgi_voice_accountability": 72,
        "wgi_rule_of_law": 82,
        "transparency_cpi": 64,
        "rsf_press_freedom": 69.12
      }
    }
  ],
  "history": {
    "years": [
      2021,
      2022,
      2023,
      2024,
      2025,
      2026
    ],
    "global": [
      {
        "year": 2021,
        "kci": 53.93,
        "simple_mean": 46.49
      },
      {
        "year": 2022,
        "kci": 55.01,
        "simple_mean": 51.53
      },
      {
        "year": 2023,
        "kci": 49.87,
        "simple_mean": 52.76
      },
      {
        "year": 2024,
        "kci": 44.94,
        "simple_mean": 54.96
      },
      {
        "year": 2025,
        "kci": 59.09,
        "simple_mean": 64.27
      },
      {
        "year": 2026,
        "kci": 69.46,
        "simple_mean": 70.37
      }
    ],
    "areas": {
      "language_education": [
        {
          "year": 2021,
          "score": 20.34
        },
        {
          "year": 2022,
          "score": 31.88
        },
        {
          "year": 2023,
          "score": 52.97
        },
        {
          "year": 2024,
          "score": 66.67
        },
        {
          "year": 2025,
          "score": 95.0
        },
        {
          "year": 2026,
          "score": 95.0
        }
      ],
      "knowledge_innovation": [
        {
          "year": 2021,
          "score": 29.04
        },
        {
          "year": 2022,
          "score": 50.78
        },
        {
          "year": 2023,
          "score": 81.45
        },
        {
          "year": 2024,
          "score": 61.78
        },
        {
          "year": 2025,
          "score": 47.5
        },
        {
          "year": 2026,
          "score": 47.5
        }
      ],
      "medical_services": [
        {
          "year": 2021,
          "score": 0.0
        },
        {
          "year": 2022,
          "score": 4.98
        },
        {
          "year": 2023,
          "score": 22.64
        },
        {
          "year": 2024,
          "score": 95.0
        },
        {
          "year": 2025,
          "score": 95.0
        },
        {
          "year": 2026,
          "score": 95.0
        }
      ],
      "economy_investment": [
        {
          "year": 2021,
          "score": 88.08
        },
        {
          "year": 2022,
          "score": 95.0
        },
        {
          "year": 2023,
          "score": 74.26
        },
        {
          "year": 2024,
          "score": 51.35
        },
        {
          "year": 2025,
          "score": 51.35
        },
        {
          "year": 2026,
          "score": 51.35
        }
      ],
      "foreign_media_digital": [
        {
          "year": 2021,
          "score": null
        },
        {
          "year": 2022,
          "score": null
        },
        {
          "year": 2023,
          "score": null
        },
        {
          "year": 2024,
          "score": null
        },
        {
          "year": 2025,
          "score": null
        },
        {
          "year": 2026,
          "score": null
        }
      ],
      "democracy_governance": [
        {
          "year": 2021,
          "score": 95.0
        },
        {
          "year": 2022,
          "score": 75.0
        },
        {
          "year": 2023,
          "score": 32.5
        },
        {
          "year": 2024,
          "score": 0.0
        },
        {
          "year": 2025,
          "score": 32.5
        },
        {
          "year": 2026,
          "score": 63.0
        }
      ],
      "lifestyle_services": [
        {
          "year": 2021,
          "score": 0.0
        },
        {
          "year": 2022,
          "score": 0.0
        },
        {
          "year": 2023,
          "score": 71.58
        },
        {
          "year": 2024,
          "score": 71.58
        },
        {
          "year": 2025,
          "score": 95.0
        },
        {
          "year": 2026,
          "score": 95.0
        }
      ]
    },
    "comparison": {
      "from_year": 2021,
      "to_year": 2026,
      "kci_change": 15.53
    }
  },
  "democracy": {
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
  },
  "global_comparison": {
    "name": "KCI-G International Comparison Index",
    "short_name": "KCI-G",
    "status": "framework_ready",
    "comparison_groups": {
      "OECD_sample": [
        "AUS",
        "CAN",
        "FRA",
        "DEU",
        "ITA",
        "JPN",
        "KOR",
        "MEX",
        "NLD",
        "ESP",
        "SWE",
        "TUR",
        "GBR",
        "USA"
      ],
      "G20_sample": [
        "ARG",
        "AUS",
        "BRA",
        "CAN",
        "CHN",
        "FRA",
        "DEU",
        "IND",
        "IDN",
        "ITA",
        "JPN",
        "KOR",
        "MEX",
        "SAU",
        "ZAF",
        "TUR",
        "GBR",
        "USA"
      ],
      "major_30": [
        "ARG",
        "AUS",
        "BRA",
        "CAN",
        "CHN",
        "FRA",
        "DEU",
        "IND",
        "IDN",
        "ITA",
        "JPN",
        "KOR",
        "MEX",
        "NLD",
        "SAU",
        "SGP",
        "ESP",
        "SWE",
        "THA",
        "TUR",
        "GBR",
        "USA",
        "VNM",
        "ZAF",
        "ARE",
        "POL",
        "MYS",
        "PHL",
        "EGY",
        "QAT"
      ]
    },
    "country_names": {
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
      "VNM": "Vietnam"
    },
    "korea": {
      "iso3": "KOR",
      "name": "South Korea",
      "democracy_governance_position": {
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
    },
    "candidate_dimensions": [
      {
        "id": "democracy_governance",
        "name": "Democracy and governance",
        "status": "partially_ready",
        "source_plan": "Freedom House, V-Dem, WGI, Transparency CPI, RSF by country-year."
      },
      {
        "id": "knowledge_innovation",
        "name": "Knowledge and innovation",
        "status": "planned",
        "source_plan": "WIPO GII, PCT, Nature Index or Scimago by country-year."
      },
      {
        "id": "education_language_attraction",
        "name": "Education and language attraction",
        "status": "planned",
        "source_plan": "UNESCO/OECD international students, language learning platform country demand where comparable."
      },
      {
        "id": "medical_service_attraction",
        "name": "Medical service attraction",
        "status": "planned",
        "source_plan": "Comparable medical tourism data are limited; use cautiously or omit from KCI-G."
      },
      {
        "id": "foreign_media_exposure",
        "name": "Foreign media exposure and sentiment",
        "status": "partially_ready",
        "source_plan": "Apply the same Google News/GDELT topic basket to all comparison countries."
      }
    ],
    "method_note": "KCI-D remains Korea's internal time-series index. KCI-G is a separate international comparison framework over OECD, G20, and a major-30 country set. Values should not be merged until cross-country source coverage is complete."
  },
  "live_collection": {
    "foreign_media_coverage": {
      "ok": true,
      "source": "Google News RSS topic-basket fallback",
      "year": 2026,
      "value": 1261,
      "annualized_value": 15342,
      "window_days": 30,
      "query_count": 10,
      "edition_count": 6,
      "by_topic": {
        "general_country": 252,
        "government_politics": 115,
        "democracy_society": 74,
        "economy_technology": 56,
        "diplomacy_security": 47,
        "seoul_society": 168,
        "policy_crisis": 9,
        "hallyu_music": 235,
        "hallyu_screen": 161,
        "hallyu_lifestyle": 178
      },
      "sentiment_method": "English headline/description lexicon, positive/neutral/negative; quick exposure signal, not full article NLP.",
      "sentiment_counts": {
        "positive": 179,
        "neutral": 982,
        "negative": 100
      },
      "positivity_index": 53.13,
      "net_sentiment_index": 53.13,
      "topic_sentiment": {
        "general_country": {
          "positive": 27,
          "neutral": 199,
          "negative": 26
        },
        "government_politics": {
          "positive": 7,
          "neutral": 67,
          "negative": 41
        },
        "democracy_society": {
          "positive": 5,
          "neutral": 62,
          "negative": 7
        },
        "economy_technology": {
          "positive": 26,
          "neutral": 28,
          "negative": 2
        },
        "diplomacy_security": {
          "positive": 8,
          "neutral": 34,
          "negative": 5
        },
        "seoul_society": {
          "positive": 30,
          "neutral": 125,
          "negative": 13
        },
        "policy_crisis": {
          "positive": 1,
          "neutral": 4,
          "negative": 4
        },
        "hallyu_music": {
          "positive": 34,
          "neutral": 199,
          "negative": 2
        },
        "hallyu_screen": {
          "positive": 19,
          "neutral": 138,
          "negative": 4
        },
        "hallyu_lifestyle": {
          "positive": 26,
          "neutral": 148,
          "negative": 4
        }
      },
      "sample_articles": [
        {
          "title": "Mexico 1-0 South Korea (Jun 18, 2026) Game Analysis - ESPN",
          "description": "Mexico 1-0 South Korea (Jun 18, 2026) Game Analysis ESPN",
          "topics": [
            "general_country"
          ],
          "source": "ESPN",
          "sentiment": "neutral"
        },
        {
          "title": "'Coreano Hermano': Ahead of Mexico vs. South Korea, it's all love between the fans - NPR",
          "description": "'Coreano Hermano': Ahead of Mexico vs. South Korea, it's all love between the fans NPR",
          "topics": [
            "general_country"
          ],
          "source": "NPR",
          "sentiment": "neutral"
        },
        {
          "title": "Massive bonuses for South Korea's chip workers puts central bank on inflation alert - CNBC",
          "description": "Massive bonuses for South Korea's chip workers puts central bank on inflation alert CNBC",
          "topics": [
            "general_country"
          ],
          "source": "CNBC",
          "sentiment": "neutral"
        },
        {
          "title": "Thousands demand South Korea repeat local elections after ballot shortage - Reuters",
          "description": "Thousands demand South Korea repeat local elections after ballot shortage Reuters",
          "topics": [
            "democracy_society",
            "general_country"
          ],
          "source": "Reuters",
          "sentiment": "neutral"
        },
        {
          "title": "4 Takeaways From Mexico's Group-Clinching Win Over South Korea - FOX Sports",
          "description": "4 Takeaways From Mexico's Group-Clinching Win Over South Korea FOX Sports",
          "topics": [
            "general_country"
          ],
          "source": "FOX Sports",
          "sentiment": "positive"
        },
        {
          "title": "Hwang In-beom sparks South Korea’s 2-1 comeback win over the Czech Republic at the World Cup - AP News",
          "description": "Hwang In-beom sparks South Korea’s 2-1 comeback win over the Czech Republic at the World Cup AP News",
          "topics": [
            "general_country"
          ],
          "source": "AP News",
          "sentiment": "positive"
        },
        {
          "title": "Can Sonny, South Korea’s Legendary Captain, Deliver in His Final World Cup? - The New Yorker",
          "description": "Can Sonny, South Korea’s Legendary Captain, Deliver in His Final World Cup? The New Yorker",
          "topics": [
            "general_country"
          ],
          "source": "The New Yorker",
          "sentiment": "neutral"
        },
        {
          "title": "Mexico beat South Korea to clinch first place in Group A - ESPN",
          "description": "Mexico beat South Korea to clinch first place in Group A ESPN",
          "topics": [
            "general_country"
          ],
          "source": "ESPN",
          "sentiment": "neutral"
        },
        {
          "title": "South Africa’s stirring upset books Canada showdown, South Korea bench Son Heung-min and left stunned - The New York Times",
          "description": "South Africa’s stirring upset books Canada showdown, South Korea bench Son Heung-min and left stunned The New York Times",
          "topics": [
            "general_country"
          ],
          "source": "The New York Times",
          "sentiment": "neutral"
        },
        {
          "title": "South Korea's shock Son Heung-Min gamble backfires spectacularly - ESPN",
          "description": "South Korea's shock Son Heung-Min gamble backfires spectacularly ESPN",
          "topics": [
            "general_country"
          ],
          "source": "ESPN",
          "sentiment": "neutral"
        },
        {
          "title": "South Korea’s World Cup wreckage: From Son’s ‘absolute heartache’ to threats against the coach - The Athletic - The New York Times",
          "description": "South Korea’s World Cup wreckage: From Son’s ‘absolute heartache’ to threats against the coach - The Athletic The New York Times",
          "topics": [
            "general_country"
          ],
          "source": "The New York Times",
          "sentiment": "neutral"
        },
        {
          "title": "South Korea coach Hong Myung-Bo quits after World Cup exit, criticism from president - ESPN",
          "description": "South Korea coach Hong Myung-Bo quits after World Cup exit, criticism from president ESPN",
          "topics": [
            "general_country"
          ],
          "source": "ESPN",
          "sentiment": "neutral"
        },
        {
          "title": "Mexico beat South Korea at World Cup but are still a work in progress - ESPN",
          "description": "Mexico beat South Korea at World Cup but are still a work in progress ESPN",
          "topics": [
            "general_country"
          ],
          "source": "ESPN",
          "sentiment": "neutral"
        },
        {
          "title": "South Korea on brink of WC exit after 'wrong' Son gamble - ESPN",
          "description": "South Korea on brink of WC exit after 'wrong' Son gamble ESPN",
          "topics": [
            "general_country"
          ],
          "source": "ESPN",
          "sentiment": "neutral"
        },
        {
          "title": "South Africa 1-0 South Korea (Jun 24, 2026) Game Analysis - ESPN",
          "description": "South Africa 1-0 South Korea (Jun 24, 2026) Game Analysis ESPN",
          "topics": [
            "general_country"
          ],
          "source": "ESPN",
          "sentiment": "neutral"
        },
        {
          "title": "South Korea drop captain Son Heung-Min for World Cup decider - ESPN",
          "description": "South Korea drop captain Son Heung-Min for World Cup decider ESPN",
          "topics": [
            "general_country"
          ],
          "source": "ESPN",
          "sentiment": "neutral"
        },
        {
          "title": "Mexico vs. South Korea at World Cup 2026: TV channel, how to watch in UK, kick-off time, live stream, referee, predicted line-ups - ESPN",
          "description": "Mexico vs. South Korea at World Cup 2026: TV channel, how to watch in UK, kick-off time, live stream, referee, predicted line-ups ESPN",
          "topics": [
            "general_country"
          ],
          "source": "ESPN",
          "sentiment": "neutral"
        },
        {
          "title": "Park Ji-sung blasts KFA as South Korea warned against repeating 2014 World Cup failures - ESPN",
          "description": "Park Ji-sung blasts KFA as South Korea warned against repeating 2014 World Cup failures ESPN",
          "topics": [
            "general_country"
          ],
          "source": "ESPN",
          "sentiment": "neutral"
        },
        {
          "title": "South Korea's World Cup disaster prompts outlandish question from Korean journalist - Yahoo Sports",
          "description": "South Korea's World Cup disaster prompts outlandish question from Korean journalist Yahoo Sports",
          "topics": [
            "general_country"
          ],
          "source": "Yahoo Sports",
          "sentiment": "neutral"
        },
        {
          "title": "South Korea president calls for government investigation into World Cup exit as head coach resigns - The New York Times",
          "description": "South Korea president calls for government investigation into World Cup exit as head coach resigns The New York Times",
          "topics": [
            "general_country",
            "government_politics"
          ],
          "source": "The New York Times",
          "sentiment": "negative"
        },
        {
          "title": "4 Takeaways From South Korea's Comeback Win Over Czechia In Group A - FOX Sports",
          "description": "4 Takeaways From South Korea's Comeback Win Over Czechia In Group A FOX Sports",
          "topics": [
            "general_country"
          ],
          "source": "FOX Sports",
          "sentiment": "positive"
        },
        {
          "title": "No Bafana, no party! South Africa stun South Korea to advance to FIFA World Cup R32 - ESPN",
          "description": "No Bafana, no party! South Africa stun South Korea to advance to FIFA World Cup R32 ESPN",
          "topics": [
            "general_country"
          ],
          "source": "ESPN",
          "sentiment": "neutral"
        },
        {
          "title": "Park criticises South Korea after loss to South Africa, warns of 2014 World Cup repeat - Reuters",
          "description": "Park criticises South Korea after loss to South Africa, warns of 2014 World Cup repeat Reuters",
          "topics": [
            "general_country"
          ],
          "source": "Reuters",
          "sentiment": "neutral"
        },
        {
          "title": "Soccer-South Africa and South Korea seek win in decisive Group A clash - Reuters",
          "description": "Soccer-South Africa and South Korea seek win in decisive Group A clash Reuters",
          "topics": [
            "general_country"
          ],
          "source": "Reuters",
          "sentiment": "positive"
        },
        {
          "title": "Is South Korea out of the World Cup? Third-place standings reveal final place for Korean squad - Yahoo Sports",
          "description": "Is South Korea out of the World Cup? Third-place standings reveal final place for Korean squad Yahoo Sports",
          "topics": [
            "general_country"
          ],
          "source": "Yahoo Sports",
          "sentiment": "neutral"
        }
      ],
      "url": "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
      "urls": [
        "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
        "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
        "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
        "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
        "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
        "https://news.google.com/rss/search?q=%22South+Korea%22+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korean+government%22+OR+%22South+Korea+government%22+OR+%22South+Korea+parliament%22+OR+%22South+Korea+president%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korean+government%22+OR+%22South+Korea+government%22+OR+%22South+Korea+parliament%22+OR+%22South+Korea+president%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korean+government%22+OR+%22South+Korea+government%22+OR+%22South+Korea+parliament%22+OR+%22South+Korea+president%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korean+government%22+OR+%22South+Korea+government%22+OR+%22South+Korea+parliament%22+OR+%22South+Korea+president%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korean+government%22+OR+%22South+Korea+government%22+OR+%22South+Korea+parliament%22+OR+%22South+Korea+president%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korean+government%22+OR+%22South+Korea+government%22+OR+%22South+Korea+parliament%22+OR+%22South+Korea+president%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+democracy%22+OR+%22South+Korea+election%22+OR+%22South+Korea+court%22+OR+%22South+Korea+protest%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+democracy%22+OR+%22South+Korea+election%22+OR+%22South+Korea+court%22+OR+%22South+Korea+protest%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+democracy%22+OR+%22South+Korea+election%22+OR+%22South+Korea+court%22+OR+%22South+Korea+protest%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+democracy%22+OR+%22South+Korea+election%22+OR+%22South+Korea+court%22+OR+%22South+Korea+protest%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+democracy%22+OR+%22South+Korea+election%22+OR+%22South+Korea+court%22+OR+%22South+Korea+protest%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+democracy%22+OR+%22South+Korea+election%22+OR+%22South+Korea+court%22+OR+%22South+Korea+protest%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+economy%22+OR+%22South+Korea+trade%22+OR+%22South+Korea+investment%22+OR+%22South+Korea+technology%22+OR+%22South+Korea+semiconductor%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+economy%22+OR+%22South+Korea+trade%22+OR+%22South+Korea+investment%22+OR+%22South+Korea+technology%22+OR+%22South+Korea+semiconductor%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+economy%22+OR+%22South+Korea+trade%22+OR+%22South+Korea+investment%22+OR+%22South+Korea+technology%22+OR+%22South+Korea+semiconductor%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+economy%22+OR+%22South+Korea+trade%22+OR+%22South+Korea+investment%22+OR+%22South+Korea+technology%22+OR+%22South+Korea+semiconductor%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+economy%22+OR+%22South+Korea+trade%22+OR+%22South+Korea+investment%22+OR+%22South+Korea+technology%22+OR+%22South+Korea+semiconductor%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+economy%22+OR+%22South+Korea+trade%22+OR+%22South+Korea+investment%22+OR+%22South+Korea+technology%22+OR+%22South+Korea+semiconductor%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+diplomacy%22+OR+%22South+Korea+security%22+OR+%22South+Korea+defense%22+OR+%22South+Korea+military%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+diplomacy%22+OR+%22South+Korea+security%22+OR+%22South+Korea+defense%22+OR+%22South+Korea+military%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+diplomacy%22+OR+%22South+Korea+security%22+OR+%22South+Korea+defense%22+OR+%22South+Korea+military%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+diplomacy%22+OR+%22South+Korea+security%22+OR+%22South+Korea+defense%22+OR+%22South+Korea+military%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+diplomacy%22+OR+%22South+Korea+security%22+OR+%22South+Korea+defense%22+OR+%22South+Korea+military%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+diplomacy%22+OR+%22South+Korea+security%22+OR+%22South+Korea+defense%22+OR+%22South+Korea+military%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
        "https://news.google.com/rss/search?q=%28%22Seoul%22+%22South+Korea%22+OR+%22South+Korea+society%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
        "https://news.google.com/rss/search?q=%28%22Seoul%22+%22South+Korea%22+OR+%22South+Korea+society%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
        "https://news.google.com/rss/search?q=%28%22Seoul%22+%22South+Korea%22+OR+%22South+Korea+society%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
        "https://news.google.com/rss/search?q=%28%22Seoul%22+%22South+Korea%22+OR+%22South+Korea+society%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
        "https://news.google.com/rss/search?q=%28%22Seoul%22+%22South+Korea%22+OR+%22South+Korea+society%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
        "https://news.google.com/rss/search?q=%28%22Seoul%22+%22South+Korea%22+OR+%22South+Korea+society%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+policy%22+OR+%22South+Korea+crisis%22+OR+%22South+Korea+scandal%22+OR+%22South+Korea+reform%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+policy%22+OR+%22South+Korea+crisis%22+OR+%22South+Korea+scandal%22+OR+%22South+Korea+reform%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+policy%22+OR+%22South+Korea+crisis%22+OR+%22South+Korea+scandal%22+OR+%22South+Korea+reform%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+policy%22+OR+%22South+Korea+crisis%22+OR+%22South+Korea+scandal%22+OR+%22South+Korea+reform%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+policy%22+OR+%22South+Korea+crisis%22+OR+%22South+Korea+scandal%22+OR+%22South+Korea+reform%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
        "https://news.google.com/rss/search?q=%28%22South+Korea+policy%22+OR+%22South+Korea+crisis%22+OR+%22South+Korea+scandal%22+OR+%22South+Korea+reform%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-pop%22+OR+Kpop+OR+BTS+OR+BLACKPINK+OR+%22NewJeans%22+OR+%22Korean+pop%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-pop%22+OR+Kpop+OR+BTS+OR+BLACKPINK+OR+%22NewJeans%22+OR+%22Korean+pop%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-pop%22+OR+Kpop+OR+BTS+OR+BLACKPINK+OR+%22NewJeans%22+OR+%22Korean+pop%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-pop%22+OR+Kpop+OR+BTS+OR+BLACKPINK+OR+%22NewJeans%22+OR+%22Korean+pop%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-pop%22+OR+Kpop+OR+BTS+OR+BLACKPINK+OR+%22NewJeans%22+OR+%22Korean+pop%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-pop%22+OR+Kpop+OR+BTS+OR+BLACKPINK+OR+%22NewJeans%22+OR+%22Korean+pop%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-drama%22+OR+%22Korean+drama%22+OR+%22Korean+film%22+OR+%22Korean+cinema%22+OR+%22Squid+Game%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-drama%22+OR+%22Korean+drama%22+OR+%22Korean+film%22+OR+%22Korean+cinema%22+OR+%22Squid+Game%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-drama%22+OR+%22Korean+drama%22+OR+%22Korean+film%22+OR+%22Korean+cinema%22+OR+%22Squid+Game%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-drama%22+OR+%22Korean+drama%22+OR+%22Korean+film%22+OR+%22Korean+cinema%22+OR+%22Squid+Game%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-drama%22+OR+%22Korean+drama%22+OR+%22Korean+film%22+OR+%22Korean+cinema%22+OR+%22Squid+Game%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-drama%22+OR+%22Korean+drama%22+OR+%22Korean+film%22+OR+%22Korean+cinema%22+OR+%22Squid+Game%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-beauty%22+OR+%22Korean+beauty%22+OR+%22K-food%22+OR+%22Korean+food%22+OR+%22Korean+tourism%22+OR+%22Korean+fashion%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-beauty%22+OR+%22Korean+beauty%22+OR+%22K-food%22+OR+%22Korean+food%22+OR+%22Korean+tourism%22+OR+%22Korean+fashion%22%29+when%3A30d&hl=en-GB&gl=GB&ceid=GB%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-beauty%22+OR+%22Korean+beauty%22+OR+%22K-food%22+OR+%22Korean+food%22+OR+%22Korean+tourism%22+OR+%22Korean+fashion%22%29+when%3A30d&hl=en-AU&gl=AU&ceid=AU%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-beauty%22+OR+%22Korean+beauty%22+OR+%22K-food%22+OR+%22Korean+food%22+OR+%22Korean+tourism%22+OR+%22Korean+fashion%22%29+when%3A30d&hl=en-CA&gl=CA&ceid=CA%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-beauty%22+OR+%22Korean+beauty%22+OR+%22K-food%22+OR+%22Korean+food%22+OR+%22Korean+tourism%22+OR+%22Korean+fashion%22%29+when%3A30d&hl=en-IN&gl=IN&ceid=IN%3Aen",
        "https://news.google.com/rss/search?q=%28%22K-beauty%22+OR+%22Korean+beauty%22+OR+%22K-food%22+OR+%22Korean+food%22+OR+%22Korean+tourism%22+OR+%22Korean+fashion%22%29+when%3A30d&hl=en-SG&gl=SG&ceid=SG%3Aen"
      ],
      "errors": [],
      "primary_error": "HTTP Error 429: Too Many Requests",
      "primary_url": "https://api.gdeltproject.org/api/v2/doc/doc?query=%28%22South+Korea%22+OR+%22Republic+of+Korea%22%29+sourcelang%3Aenglish&mode=timelinevolraw&format=json&startdatetime=20260530231345&enddatetime=20260629231345"
    },
    "foreign_media_annualized": {
      "ok": true,
      "year": 2026,
      "value": 15342,
      "base_30_day_value": 1261,
      "window_days": 30,
      "source": "Google News RSS topic-basket fallback"
    },
    "foreign_media_positivity": {
      "ok": true,
      "year": 2026,
      "value": 53.13,
      "net_sentiment_index": 53.13,
      "sentiment_counts": {
        "positive": 179,
        "neutral": 982,
        "negative": 100
      },
      "sentiment_method": "English headline/description lexicon, positive/neutral/negative; quick exposure signal, not full article NLP.",
      "source": "Google News RSS topic-basket fallback"
    },
    "wikimedia_pageviews": {
      "ok": true,
      "year": 2026,
      "month": 5,
      "value": 191458,
      "article": "South_Korea",
      "url": "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/South_Korea/daily/2026050100/2026053100"
    },
    "fdi_inflow_usd_m": {
      "ok": true,
      "series": {
        "2024": 12862.5,
        "2023": 18599.1,
        "2022": 25044.7,
        "2021": 22060.4,
        "2020": 8764.9,
        "2019": 9634.3,
        "2018": 12182.6,
        "2017": 17912.9,
        "2016": 12104.3,
        "2015": 4104.1,
        "2014": 9273.6,
        "2013": 12766.6,
        "2012": 9495.9,
        "2011": 9773.0,
        "2010": 9497.4,
        "2009": 9021.9,
        "2008": 11187.5,
        "2007": 8826.9,
        "2006": 9161.9,
        "2005": 13643.2,
        "2004": 13294.4,
        "2003": 7010.0,
        "2002": 5475.1,
        "2001": 6522.3,
        "2000": 11509.4,
        "1999": 10726.3,
        "1998": 5989.2,
        "1997": 3301.1,
        "1996": 2782.6,
        "1995": 2487.1,
        "1994": 1136.6,
        "1993": 832.3,
        "1992": 1001.6,
        "1991": 1455.2,
        "1990": 1045.6,
        "1989": 1389.6,
        "1988": 1293.1,
        "1987": 838.6,
        "1986": 682.5,
        "1985": 355.3,
        "1984": 223.3,
        "1983": 184.3,
        "1982": 120.9,
        "1981": 155.1,
        "1980": 47.1,
        "1979": 172.0,
        "1978": 89.0,
        "1977": 94.0,
        "1976": 81.0,
        "1975": 6.0,
        "1974": 2.0,
        "1973": 4.0,
        "1972": 496.0,
        "1971": 42.0,
        "1970": 66.0
      },
      "url": "https://api.worldbank.org/v2/country/KOR/indicator/BX.KLT.DINV.CD.WD?format=json&per_page=80"
    }
  }
};
