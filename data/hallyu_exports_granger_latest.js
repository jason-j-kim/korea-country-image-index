window.HALLYU_EXPORTS_GRANGER_LATEST = {
  "date": "2026-07-03",
  "name": "Hallyu Google Trends vs Korea Monthly Exports Granger Analysis",
  "exports_source": "data\\raw\\exports\\2026-07-03_korea_monthly_exports_kosis_data_go_kr.csv",
  "trends_source": "C:\\Users\\user\\Desktop\\한류지수\\data\\output\\google_trends\\2026-07-03_google_trends_hallyu_normalized.csv",
  "months": 60,
  "start_month": "2021-06",
  "end_month": "2026-05",
  "sectors": [
    "cosmetics_hs3304",
    "electronics_hs85",
    "processed_food_hs16_21",
    "total_exports"
  ],
  "significant_trend_to_export_count": 12,
  "top_trend_to_export": [
    {
      "sector": "total_exports",
      "keyword": "K food",
      "direction": "trend_to_export",
      "best_lag": 1.0,
      "best_p_value": 2.1e-05,
      "best_f_stat": 21.667655,
      "observations": 58,
      "significant_at_05": true
    },
    {
      "sector": "total_exports",
      "keyword": "K beauty",
      "direction": "trend_to_export",
      "best_lag": 2.0,
      "best_p_value": 7.9e-05,
      "best_f_stat": 11.387614,
      "observations": 57,
      "significant_at_05": true
    },
    {
      "sector": "electronics_hs85",
      "keyword": "K food",
      "direction": "trend_to_export",
      "best_lag": 1.0,
      "best_p_value": 0.002379,
      "best_f_stat": 10.14992,
      "observations": 58,
      "significant_at_05": true
    },
    {
      "sector": "electronics_hs85",
      "keyword": "K beauty",
      "direction": "trend_to_export",
      "best_lag": 2.0,
      "best_p_value": 0.007136,
      "best_f_stat": 5.443652,
      "observations": 57,
      "significant_at_05": true
    },
    {
      "sector": "processed_food_hs16_21",
      "keyword": "K drama",
      "direction": "trend_to_export",
      "best_lag": 2.0,
      "best_p_value": 0.007659,
      "best_f_stat": 5.358275,
      "observations": 57,
      "significant_at_05": true
    },
    {
      "sector": "electronics_hs85",
      "keyword": "BTS",
      "direction": "trend_to_export",
      "best_lag": 6.0,
      "best_p_value": 0.007832,
      "best_f_stat": 3.438831,
      "observations": 53,
      "significant_at_05": true
    },
    {
      "sector": "processed_food_hs16_21",
      "keyword": "K food",
      "direction": "trend_to_export",
      "best_lag": 1.0,
      "best_p_value": 0.008493,
      "best_f_stat": 7.452597,
      "observations": 58,
      "significant_at_05": true
    },
    {
      "sector": "total_exports",
      "keyword": "BTS",
      "direction": "trend_to_export",
      "best_lag": 6.0,
      "best_p_value": 0.009988,
      "best_f_stat": 3.291741,
      "observations": 53,
      "significant_at_05": true
    },
    {
      "sector": "cosmetics_hs3304",
      "keyword": "Seoul",
      "direction": "trend_to_export",
      "best_lag": 6.0,
      "best_p_value": 0.014433,
      "best_f_stat": 3.070827,
      "observations": 53,
      "significant_at_05": true
    },
    {
      "sector": "cosmetics_hs3304",
      "keyword": "K food",
      "direction": "trend_to_export",
      "best_lag": 1.0,
      "best_p_value": 0.015941,
      "best_f_stat": 6.185762,
      "observations": 58,
      "significant_at_05": true
    },
    {
      "sector": "cosmetics_hs3304",
      "keyword": "BTS",
      "direction": "trend_to_export",
      "best_lag": 5.0,
      "best_p_value": 0.034092,
      "best_f_stat": 2.678559,
      "observations": 54,
      "significant_at_05": true
    },
    {
      "sector": "processed_food_hs16_21",
      "keyword": "Seoul",
      "direction": "trend_to_export",
      "best_lag": 6.0,
      "best_p_value": 0.035031,
      "best_f_stat": 2.545275,
      "observations": 53,
      "significant_at_05": true
    }
  ],
  "method": {
    "export_transform": "log monthly difference of export_usd by sector",
    "trend_transform": "monthly mean of normalized weekly Google Trends, first difference",
    "test": "OLS nested-model Granger F-test implemented with numpy/scipy",
    "null": "Keyword trend lags do not improve prediction of export sector growth beyond export-sector lags."
  },
  "outputs": {
    "panel": "data\\output\\granger\\2026-07-03_hallyu_trends_exports_monthly_panel.csv",
    "results": "data\\output\\granger\\2026-07-03_hallyu_trends_exports_granger.csv"
  }
};
