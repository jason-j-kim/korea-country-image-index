from __future__ import annotations

import json
import re
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from typing import Any


FOREIGN_MEDIA_QUERY_GROUPS = {
    "general_country": '"South Korea"',
    "government_politics": '("South Korean government" OR "South Korea government" OR "South Korea parliament" OR "South Korea president")',
    "democracy_society": '("South Korea democracy" OR "South Korea election" OR "South Korea court" OR "South Korea protest")',
    "economy_technology": '("South Korea economy" OR "South Korea trade" OR "South Korea investment" OR "South Korea technology" OR "South Korea semiconductor")',
    "diplomacy_security": '("South Korea diplomacy" OR "South Korea security" OR "South Korea defense" OR "South Korea military")',
    "seoul_society": '("Seoul" "South Korea" OR "South Korea society")',
    "policy_crisis": '("South Korea policy" OR "South Korea crisis" OR "South Korea scandal" OR "South Korea reform")',
    "hallyu_music": '("K-pop" OR Kpop OR BTS OR BLACKPINK OR "NewJeans" OR "Korean pop")',
    "hallyu_screen": '("K-drama" OR "Korean drama" OR "Korean film" OR "Korean cinema" OR "Squid Game")',
    "hallyu_lifestyle": '("K-beauty" OR "Korean beauty" OR "K-food" OR "Korean food" OR "Korean tourism" OR "Korean fashion")',
}

HALLYU_EXCLUSIONS = ""

POSITIVE_TERMS = {
    "growth", "grow", "grows", "rising", "rise", "record", "surge", "boost", "win", "wins", "success",
    "successful", "strong", "resilient", "resilience", "innovation", "innovative", "leader", "leading",
    "breakthrough", "deal", "agreement", "cooperation", "alliance", "investment", "approved", "improve",
    "improved", "recovery", "popular", "award", "top", "best", "exports", "expands", "launches",
    "historic", "milestone", "confidence", "stable", "stability", "democratic", "reform",
}

NEGATIVE_TERMS = {
    "crisis", "scandal", "war", "threat", "missile", "tension", "tensions", "decline", "falls", "fall",
    "slump", "risk", "risks", "warning", "probe", "investigation", "arrest", "impeachment", "corruption",
    "strike", "protest", "conflict", "dispute", "ban", "sanctions", "tariff", "fear", "fears", "turmoil",
    "martial", "law", "crash", "accident", "dead", "death", "spy", "espionage", "illegal", "fraud",
    "authoritarian", "backsliding", "polarization", "violence", "abuse", "crackdown",
}


def _clean_text(value: str | None) -> str:
    if not value:
        return ""
    value = re.sub(r"<[^>]+>", " ", value)
    value = re.sub(r"&[^;]+;", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def _sentiment_label(text: str) -> str:
    tokens = re.findall(r"[a-zA-Z][a-zA-Z-]+", text.lower())
    positive = sum(1 for token in tokens if token in POSITIVE_TERMS)
    negative = sum(1 for token in tokens if token in NEGATIVE_TERMS)
    if positive > negative:
        return "positive"
    if negative > positive:
        return "negative"
    return "neutral"


def _get_json(url: str, timeout: int = 25) -> Any:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "KCI-country-image-index/0.1 (local research prototype)",
            "Accept": "application/json",
        },
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return json.loads(response.read().decode("utf-8"))


def collect_gdelt_foreign_media(days: int = 30) -> dict:
    """Count English-language global news coverage about Korea in GDELT.

    This deliberately uses country-level keywords, not K-pop/K-drama/K-beauty
    terms, so it measures foreign news attention to Korea as a country.
    """
    now = datetime.now(timezone.utc)
    start = now - timedelta(days=days)
    query = '("South Korea" OR "Republic of Korea") sourcelang:english'
    params = {
        "query": query,
        "mode": "timelinevolraw",
        "format": "json",
        "startdatetime": start.strftime("%Y%m%d%H%M%S"),
        "enddatetime": now.strftime("%Y%m%d%H%M%S"),
    }
    url = "https://api.gdeltproject.org/api/v2/doc/doc?" + urllib.parse.urlencode(params)
    try:
        payload = _get_json(url)
        rows = payload.get("timeline", {}).get("data", [])
        total = sum(int(row.get("value", 0)) for row in rows)
        annualized = round(total * 365 / days)
        return {
            "ok": True,
            "year": now.year,
            "value": total,
            "annualized_value": annualized,
            "window_days": days,
            "url": url,
        }
    except Exception as exc:  # network/API failures should not break the index build
        fallback = collect_google_news_foreign_media(days=days)
        fallback["primary_error"] = str(exc)
        fallback["primary_url"] = url
        return fallback


def collect_google_news_foreign_media(days: int = 30) -> dict:
    """Fallback foreign-media exposure sample from English Google News RSS editions.

    Google News RSS is not a full news database. To avoid the too-small count
    produced by a single "South Korea" query, this collector uses a topic
    basket for country-image and Hallyu-related Korea exposure, then
    deduplicates article links across English-language editions.
    """
    editions = [
        ("US", "en-US", "US:en"),
        ("GB", "en-GB", "GB:en"),
        ("AU", "en-AU", "AU:en"),
        ("CA", "en-CA", "CA:en"),
        ("IN", "en-IN", "IN:en"),
        ("SG", "en-SG", "SG:en"),
    ]
    links: set[str] = set()
    articles: dict[str, dict] = {}
    by_topic: dict[str, int] = {}
    urls = []
    errors = []
    for topic, base_query in FOREIGN_MEDIA_QUERY_GROUPS.items():
        topic_links: set[str] = set()
        for gl, hl, ceid in editions:
            params = {
                "q": f"{base_query}{HALLYU_EXCLUSIONS} when:{days}d",
                "hl": hl,
                "gl": gl,
                "ceid": ceid,
            }
            url = "https://news.google.com/rss/search?" + urllib.parse.urlencode(params)
            urls.append(url)
            try:
                request = urllib.request.Request(url, headers={"User-Agent": "KCI-country-image-index/0.1"})
                with urllib.request.urlopen(request, timeout=25) as response:
                    root = ET.fromstring(response.read())
                for item in root.findall(".//item"):
                    link = item.findtext("link") or item.findtext("guid") or item.findtext("title")
                    if link:
                        topic_links.add(link)
                        links.add(link)
                        title = _clean_text(item.findtext("title"))
                        description = _clean_text(item.findtext("description"))
                        if link not in articles:
                            articles[link] = {
                                "title": title,
                                "description": description,
                                "topics": set(),
                                "source": _clean_text(item.findtext("source")),
                            }
                        articles[link]["topics"].add(topic)
            except Exception as exc:
                errors.append(f"{topic}/{gl}: {exc}")
        by_topic[topic] = len(topic_links)
    sentiment_counts = {"positive": 0, "neutral": 0, "negative": 0}
    topic_sentiment = {topic: {"positive": 0, "neutral": 0, "negative": 0} for topic in FOREIGN_MEDIA_QUERY_GROUPS}
    for article in articles.values():
        label = _sentiment_label(f"{article['title']} {article['description']}")
        sentiment_counts[label] += 1
        article["sentiment"] = label
        article["topics"] = sorted(article["topics"])
        for topic in article["topics"]:
            topic_sentiment[topic][label] += 1
    total = max(len(articles), 1)
    annualized = round(len(links) * 365 / days) if links else None
    positivity_index = round((sentiment_counts["positive"] + 0.5 * sentiment_counts["neutral"]) / total * 100, 2)
    net_sentiment_index = round(50 + 50 * (sentiment_counts["positive"] - sentiment_counts["negative"]) / total, 2)
    return {
        "ok": bool(links),
        "source": "Google News RSS topic-basket fallback",
        "year": datetime.now(timezone.utc).year,
        "value": len(links) if links else None,
        "annualized_value": annualized,
        "window_days": days,
        "query_count": len(FOREIGN_MEDIA_QUERY_GROUPS),
        "edition_count": len(editions),
        "by_topic": by_topic,
        "sentiment_method": "English headline/description lexicon, positive/neutral/negative; quick exposure signal, not full article NLP.",
        "sentiment_counts": sentiment_counts,
        "positivity_index": positivity_index,
        "net_sentiment_index": net_sentiment_index,
        "topic_sentiment": topic_sentiment,
        "sample_articles": list(articles.values())[:25],
        "url": urls[0] if urls else None,
        "urls": urls,
        "errors": errors,
    }


def collect_wikimedia_pageviews(article: str = "South_Korea") -> dict:
    """Fetch latest full-month English Wikipedia pageviews for a Korea article."""
    today = datetime.now(timezone.utc).date()
    first_this_month = today.replace(day=1)
    last_month_last_day = first_this_month - timedelta(days=1)
    start = last_month_last_day.replace(day=1).strftime("%Y%m%d00")
    end = last_month_last_day.strftime("%Y%m%d00")
    safe_article = urllib.parse.quote(article, safe="")
    url = (
        "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/"
        f"en.wikipedia/all-access/user/{safe_article}/daily/{start}/{end}"
    )
    try:
        payload = _get_json(url)
        total = sum(int(item.get("views", 0)) for item in payload.get("items", []))
        return {
            "ok": True,
            "year": last_month_last_day.year,
            "month": last_month_last_day.month,
            "value": total,
            "article": article,
            "url": url,
        }
    except Exception as exc:
        return {"ok": False, "error": str(exc), "year": last_month_last_day.year, "value": None, "url": url}


def collect_worldbank_fdi() -> dict:
    """Refresh Korea FDI inflow where World Bank has a newer value."""
    indicator = "BX.KLT.DINV.CD.WD"
    url = f"https://api.worldbank.org/v2/country/KOR/indicator/{indicator}?format=json&per_page=80"
    try:
        payload = _get_json(url)
        rows = payload[1] if isinstance(payload, list) and len(payload) > 1 else []
        series = {}
        for row in rows:
            value = row.get("value")
            date = row.get("date")
            if value is None or not date or not re.match(r"^\d{4}$", date):
                continue
            series[int(date)] = round(float(value) / 1_000_000, 2)
        return {"ok": True, "series": series, "url": url}
    except Exception as exc:
        return {"ok": False, "error": str(exc), "series": {}, "url": url}


def collect_live_sources() -> dict:
    media = collect_gdelt_foreign_media()
    positivity = {
        "ok": media.get("ok", False),
        "year": media.get("year"),
        "value": media.get("positivity_index"),
        "net_sentiment_index": media.get("net_sentiment_index"),
        "sentiment_counts": media.get("sentiment_counts"),
        "sentiment_method": media.get("sentiment_method"),
        "source": media.get("source"),
    }
    return {
        "foreign_media_coverage": media,
        "foreign_media_positivity": positivity,
        "wikimedia_pageviews": collect_wikimedia_pageviews(),
        "fdi_inflow_usd_m": collect_worldbank_fdi(),
    }
