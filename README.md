# Korea Country Image Index (KCI)

KCI is a local research prototype for measuring Korea's country image with behavioral demand, governance, and international media exposure indicators.

The current web page is `index.html`. It reads:

- `data/kci_latest.json`
- `data/kci_latest.js`
- `data/kdi_latest.json`
- `data/kdi_latest.js`

## Current Indicators

- Language and education demand
- Knowledge and innovation capacity
- Medical and professional service trust
- Economy and investment attractiveness
- Foreign media and information demand
- Democracy and governance trust
- Lifestyle service consumption

## Democracy Index (KDI)

The democracy-governance component tracks South Korea from 2018 using:

- Freedom House total score: 25%
- V-Dem Liberal Democracy Index: 20%
- V-Dem Electoral Democracy Index: 15%
- WGI Voice & Accountability: 15%
- WGI Rule of Law: 10%
- Transparency CPI: 10%
- RSF Press Freedom: 5%

Some component histories are currently seeded and marked with quality flags until original bulk CSV/Excel source files are imported.

## Foreign Media Exposure

International media exposure is collected from an English-language Google News RSS topic basket when GDELT is rate-limited. The collector records:

- Article exposure count
- Topic-level exposure
- Positive / neutral / negative headline signal
- Positivity index

The sentiment score is a lightweight headline/description lexicon signal, not full article NLP.

## Run

Open `index.html` directly in a browser.

To refresh data:

```powershell
python -m kci_pipeline.run_kci
```

To run without network collection:

```powershell
python -m kci_pipeline.run_kci --offline
```

## Google Trends Hallyu Backfill

Build a 5-year weekly Google Trends panel for Hallyu keywords:

```powershell
python scripts/backfill_google_trends.py
```

Default keywords:

- K wave
- Korea
- Seoul
- BTS
- K pop
- K movie
- K drama
- K food
- K beauty

The script exports a stitched weekly panel, normalized keyword panel, PCA/IPCA proxy factors, and a backtest input file under `data/output/google_trends/`. Google Trends only allows five terms per request, so the script uses `Korea` as the anchor keyword to stitch batches.
