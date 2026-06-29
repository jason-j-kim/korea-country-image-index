const areaChart = document.querySelector("#areaChart");
const areaCtx = areaChart.getContext("2d");
const historyChart = document.querySelector("#historyChart");
const historyCtx = historyChart.getContext("2d");

const kciValue = document.querySelector("#kciValue");
const kciSub = document.querySelector("#kciSub");
const heroKci = document.querySelector("#heroKci");
const heroDate = document.querySelector("#heroDate");
const dataStatus = document.querySelector("#dataStatus");
const areaCards = document.querySelector("#areaCards");
const indicatorTable = document.querySelector("#indicatorTable");
const historySummary = document.querySelector("#historySummary");
const mediaCount = document.querySelector("#mediaCount");
const mediaValue = document.querySelector("#mediaValue");
const mediaSource = document.querySelector("#mediaSource");
const mediaMethod = document.querySelector("#mediaMethod");
const mediaPositive = document.querySelector("#mediaPositive");

const palette = ["#1d5fd1", "#008c88", "#d8426b", "#7655c7", "#3b8b4f", "#c48722"];
let payload = null;

function format(value, digits = 2) {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return "--";
  return Number(value).toLocaleString("ko-KR", {
    maximumFractionDigits: digits,
    minimumFractionDigits: Number(value) % 1 === 0 ? 0 : digits,
  });
}

function score(value) {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return "--";
  return Number(value).toFixed(2);
}

async function loadData() {
  if (window.KCI_LATEST) {
    payload = window.KCI_LATEST;
    return;
  }
  try {
    const response = await fetch("data/kci_latest.json", { cache: "no-store" });
    if (!response.ok) throw new Error("missing kci_latest.json");
    payload = await response.json();
  } catch (error) {
    payload = {
      date: "",
      headline: { kci: null, simple_mean: null },
      areas: [],
      indicators: [],
      history: { global: [], comparison: {} },
      live_collection: {},
    };
  }
}

function renderHeadline() {
  const headline = payload.headline || {};
  kciValue.textContent = score(headline.kci);
  heroKci.textContent = score(headline.kci);
  heroDate.textContent = payload.date ? `갱신 ${payload.date}` : "데이터 없음";
  kciSub.textContent = `단순평균 ${score(headline.simple_mean)} · 활성 영역 ${headline.active_area_count || 0}개`;
  dataStatus.textContent = payload.date ? `data/kci_latest.json · ${payload.date}` : "데이터 없음";

  const media = payload.indicators.find((item) => item.id === "foreign_media_coverage");
  const positive = payload.indicators.find((item) => item.id === "foreign_media_positivity");
  mediaCount.textContent = format(media?.latest_value, 0);
  mediaValue.textContent = format(media?.latest_value, 0);
  if (mediaPositive) mediaPositive.textContent = `${score(positive?.latest_value)}`;
  const live = payload.live_collection?.foreign_media_coverage;
  if (live?.source) {
    const scope = live.query_count && live.edition_count
      ? ` · ${live.query_count}개 주제 × ${live.edition_count}개 영어권 판본`
      : "";
    mediaSource.textContent = `${live.source} · 최근 ${live.window_days || 30}일${scope}`;
  } else {
    mediaSource.textContent = media?.source || "수집 대기";
  }
  if (live?.primary_error) {
    mediaMethod.textContent = "GDELT 호출 제한이 발생해 Google News RSS 영어권 주제 바스켓을 대체 수집원으로 사용했습니다. 일반 한국, 정부·정치, 민주주의, 경제·기술, 외교·안보, 서울·사회, 정책·위기와 한류 보도를 함께 합산하고 중복 링크를 제거합니다.";
  }
}

function renderAreaCards() {
  areaCards.innerHTML = payload.areas.map((area, index) => `
    <article>
      <span style="--c:${palette[index % palette.length]}">${area.name}</span>
      <strong>${score(area.score)}</strong>
      <p>${area.rationale}</p>
      <small>${area.role === "core" ? "본지수" : area.role === "appendix" ? "부록" : "관측"} · 가중치 ${Math.round(area.weight * 100)}% · 변수 ${area.indicator_count}개</small>
    </article>
  `).join("");
}

function renderIndicatorTable() {
  const rows = payload.indicators
    .filter((item) => item.status !== "connector_required")
    .map((item) => {
      const area = payload.areas.find((entry) => entry.id === item.area);
      return `
        <div class="table-row">
          <span>${area?.name || item.area}</span>
          <b>${item.name}</b>
          <span>${item.latest_year || "--"}</span>
          <span>${format(item.latest_value)}</span>
          <span>${score(item.score)}</span>
          <small>${item.source}</small>
        </div>
      `;
    }).join("");

  indicatorTable.innerHTML = `
    <div class="table-row table-head">
      <span>영역</span><span>변수</span><span>연도</span><span>최신값</span><span>점수</span><span>출처</span>
    </div>
    ${rows}
  `;
}

function drawAreaChart() {
  const ratio = window.devicePixelRatio || 1;
  const box = areaChart.getBoundingClientRect();
  const width = box.width || 900;
  const height = Math.max(box.height || 420, 320);
  areaChart.width = width * ratio;
  areaChart.height = height * ratio;
  areaCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
  areaCtx.clearRect(0, 0, width, height);

  const rows = payload.areas || [];
  const padding = { top: 28, right: 24, bottom: 92, left: 48 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const barW = chartW / Math.max(rows.length, 1) * 0.56;

  areaCtx.strokeStyle = "#d9e0e8";
  areaCtx.lineWidth = 1;
  areaCtx.beginPath();
  areaCtx.moveTo(padding.left, padding.top);
  areaCtx.lineTo(padding.left, padding.top + chartH);
  areaCtx.lineTo(padding.left + chartW, padding.top + chartH);
  areaCtx.stroke();

  areaCtx.fillStyle = "#657080";
  areaCtx.font = "12px Segoe UI, sans-serif";
  [0, 25, 50, 75, 100].forEach((tick) => {
    const y = padding.top + chartH - chartH * tick / 100;
    areaCtx.fillText(String(tick), 12, y + 4);
    areaCtx.strokeStyle = tick === 0 ? "#d9e0e8" : "#eef2f6";
    areaCtx.beginPath();
    areaCtx.moveTo(padding.left, y);
    areaCtx.lineTo(padding.left + chartW, y);
    areaCtx.stroke();
  });

  rows.forEach((area, index) => {
    const lane = chartW / rows.length;
    const x = padding.left + lane * index + (lane - barW) / 2;
    const hasScore = area.score !== null && area.score !== undefined;
    const value = hasScore ? area.score : 0;
    const barH = chartH * value / 100;
    const y = padding.top + chartH - barH;
    areaCtx.fillStyle = hasScore ? palette[index % palette.length] : "#cfd6df";
    areaCtx.fillRect(x, y, barW, Math.max(barH, hasScore ? 0 : 4));
    areaCtx.fillStyle = "#17202a";
    areaCtx.font = "700 12px Segoe UI, sans-serif";
    areaCtx.fillText(hasScore ? score(value) : "관측", x + barW / 2 - 16, y - 8);
    areaCtx.save();
    areaCtx.translate(x + barW / 2, padding.top + chartH + 18);
    areaCtx.rotate(-Math.PI / 6);
    areaCtx.fillStyle = "#405064";
    areaCtx.font = "12px Segoe UI, sans-serif";
    areaCtx.fillText(area.name, -8, 0);
    areaCtx.restore();
  });
}

function drawHistoryChart() {
  const ratio = window.devicePixelRatio || 1;
  const box = historyChart.getBoundingClientRect();
  const width = box.width || 900;
  const height = Math.max(box.height || 320, 260);
  historyChart.width = width * ratio;
  historyChart.height = height * ratio;
  historyCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
  historyCtx.clearRect(0, 0, width, height);

  const rows = payload.history?.global || [];
  const padding = { top: 24, right: 28, bottom: 42, left: 50 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const xFor = (index) => padding.left + chartW * index / Math.max(rows.length - 1, 1);
  const yFor = (value) => padding.top + chartH - chartH * value / 100;

  historyCtx.strokeStyle = "#d9e0e8";
  historyCtx.beginPath();
  historyCtx.moveTo(padding.left, padding.top);
  historyCtx.lineTo(padding.left, padding.top + chartH);
  historyCtx.lineTo(padding.left + chartW, padding.top + chartH);
  historyCtx.stroke();

  [0, 25, 50, 75, 100].forEach((tick) => {
    const y = yFor(tick);
    historyCtx.fillStyle = "#657080";
    historyCtx.font = "12px Segoe UI, sans-serif";
    historyCtx.fillText(String(tick), 12, y + 4);
    historyCtx.strokeStyle = tick === 0 ? "#d9e0e8" : "#eef2f6";
    historyCtx.beginPath();
    historyCtx.moveTo(padding.left, y);
    historyCtx.lineTo(padding.left + chartW, y);
    historyCtx.stroke();
  });

  const valid = rows.filter((row) => row.kci !== null && row.kci !== undefined);
  if (!valid.length) return;

  historyCtx.strokeStyle = "#1d5fd1";
  historyCtx.lineWidth = 3;
  historyCtx.beginPath();
  rows.forEach((row, index) => {
    if (row.kci === null || row.kci === undefined) return;
    const x = xFor(index);
    const y = yFor(row.kci);
    if (index === 0) historyCtx.moveTo(x, y);
    else historyCtx.lineTo(x, y);
  });
  historyCtx.stroke();

  rows.forEach((row, index) => {
    const x = xFor(index);
    historyCtx.fillStyle = "#405064";
    historyCtx.font = "12px Segoe UI, sans-serif";
    historyCtx.fillText(String(row.year), x - 14, padding.top + chartH + 28);
    if (row.kci === null || row.kci === undefined) return;
    const y = yFor(row.kci);
    historyCtx.fillStyle = "#fff";
    historyCtx.beginPath();
    historyCtx.arc(x, y, 5, 0, Math.PI * 2);
    historyCtx.fill();
    historyCtx.strokeStyle = "#1d5fd1";
    historyCtx.lineWidth = 2;
    historyCtx.stroke();
  });
}

function renderHistorySummary() {
  const comparison = payload.history?.comparison || {};
  const media = payload.indicators.find((item) => item.id === "wikimedia_pageviews");
  const democracy = payload.democracy;
  historySummary.innerHTML = `
    <article>
      <span>변화 기간</span>
      <strong>${comparison.from_year || "--"}-${comparison.to_year || "--"}</strong>
      <small>연도별 최신값 기준</small>
    </article>
    <article>
      <span>KCI 변화</span>
      <strong>${comparison.kci_change !== null && comparison.kci_change !== undefined ? `${comparison.kci_change > 0 ? "+" : ""}${score(comparison.kci_change)}` : "--"}</strong>
      <small>가중평균 변화</small>
    </article>
    <article>
      <span>Wikipedia 조회</span>
      <strong>${format(media?.latest_value, 0)}</strong>
      <small>${media?.latest_year || ""}년 최신 월</small>
    </article>
    <article>
      <span>민주주의 KDI</span>
      <strong>${score(democracy?.latest?.index)}</strong>
      <small>${democracy?.comparison?.from_year || ""} 대비 ${democracy?.comparison?.change > 0 ? "+" : ""}${score(democracy?.comparison?.change)}</small>
    </article>
  `;
}

function renderAll() {
  renderHeadline();
  renderAreaCards();
  renderIndicatorTable();
  renderHistorySummary();
  drawAreaChart();
  drawHistoryChart();
}

window.addEventListener("resize", () => {
  drawAreaChart();
  drawHistoryChart();
});

loadData().then(renderAll);
