const kdData = window.KDEMOCRACY_LATEST;
const kdPalette = ["#1d5fd1", "#008c88", "#d8426b", "#7655c7", "#c48722", "#3b8b4f"];

function kdScore(value) {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return "--";
  return Number(value).toFixed(2);
}

function kdFormatSigned(value) {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return "--";
  return `${Number(value) > 0 ? "+" : ""}${Number(value).toFixed(2)}`;
}

function setupCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = rect.width || canvas.width;
  const height = rect.height || canvas.height;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);
  return { ctx, width, height };
}

function renderHeadline() {
  document.querySelector("#kdLatest").textContent = kdScore(kdData.latest_korea.index);
  document.querySelector("#kdLatestMeta").textContent = `${kdData.latest_korea.year} · ${kdData.version}`;
  document.querySelector("#kdStatus").textContent = `data/kdemocracy_latest.json · ${kdData.date}`;
  document.querySelector("#kdChange").textContent = kdFormatSigned(kdData.latest_korea.change_since_2018);
  document.querySelector("#kdGlobalRank").textContent = `${kdData.latest_korea.rank_in_current_table}위`;
  document.querySelector("#kdG20Rank").textContent = `${kdData.latest_korea.g20_sample_rank}위`;
}

function drawHistoryChart() {
  const canvas = document.querySelector("#kdHistoryChart");
  const { ctx, width, height } = setupCanvas(canvas);
  const rows = kdData.korea_history;
  const padding = { top: 28, right: 24, bottom: 52, left: 54 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const min = Math.floor(Math.min(...rows.map((row) => row.index)) - 2);
  const max = Math.ceil(Math.max(...rows.map((row) => row.index)) + 2);

  ctx.strokeStyle = "#d9e0e8";
  ctx.lineWidth = 1;
  ctx.font = "12px Segoe UI, sans-serif";
  ctx.fillStyle = "#657080";
  for (let i = 0; i <= 4; i += 1) {
    const value = min + ((max - min) * i) / 4;
    const y = padding.top + chartH - ((value - min) / (max - min)) * chartH;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + chartW, y);
    ctx.stroke();
    ctx.fillText(value.toFixed(0), 12, y + 4);
  }

  ctx.strokeStyle = "#1d5fd1";
  ctx.lineWidth = 3;
  ctx.beginPath();
  rows.forEach((row, index) => {
    const x = padding.left + (chartW * index) / Math.max(rows.length - 1, 1);
    const y = padding.top + chartH - ((row.index - min) / (max - min)) * chartH;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  rows.forEach((row, index) => {
    const x = padding.left + (chartW * index) / Math.max(rows.length - 1, 1);
    const y = padding.top + chartH - ((row.index - min) / (max - min)) * chartH;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#1d5fd1";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#17202a";
    ctx.font = "700 12px Segoe UI, sans-serif";
    ctx.fillText(row.year, x - 14, padding.top + chartH + 28);
    if (index === rows.length - 1 || index === 0) {
      ctx.fillText(kdScore(row.index), x - 18, y - 12);
    }
  });
}

function drawGlobalChart() {
  const canvas = document.querySelector("#kdGlobalChart");
  const { ctx, width, height } = setupCanvas(canvas);
  const rows = kdData.international_comparison.slice(0, 12);
  const padding = { top: 26, right: 40, bottom: 36, left: 132 };
  const chartW = width - padding.left - padding.right;
  const lane = (height - padding.top - padding.bottom) / rows.length;
  const barH = lane * 0.58;

  ctx.font = "12px Segoe UI, sans-serif";
  rows.forEach((row, index) => {
    const y = padding.top + lane * index + (lane - barH) / 2;
    const barW = chartW * row.score / 100;
    const isKorea = row.country === "South Korea";
    ctx.fillStyle = isKorea ? "#d8426b" : kdPalette[index % kdPalette.length];
    ctx.fillRect(padding.left, y, barW, barH);
    ctx.fillStyle = "#17202a";
    ctx.font = `${isKorea ? "800" : "600"} 12px Segoe UI, sans-serif`;
    ctx.textAlign = "right";
    ctx.fillText(row.country, padding.left - 12, y + barH * 0.68);
    ctx.textAlign = "left";
    ctx.font = "700 12px Segoe UI, sans-serif";
    ctx.fillText(kdScore(row.score), padding.left + barW + 8, y + barH * 0.68);
  });
  ctx.textAlign = "left";
}

function drawG20Chart() {
  const canvas = document.querySelector("#kdG20Chart");
  const { ctx, width, height } = setupCanvas(canvas);
  const rows = kdData.international_comparison
    .filter((row) => row.group.includes("G20"))
    .sort((a, b) => b.score - a.score);
  const padding = { top: 22, right: 34, bottom: 94, left: 52 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const lane = chartW / Math.max(rows.length, 1);
  const barW = lane * 0.56;

  ctx.strokeStyle = "#d9e0e8";
  ctx.lineWidth = 1;
  ctx.font = "12px Segoe UI, sans-serif";
  ctx.fillStyle = "#657080";
  for (let i = 0; i <= 4; i += 1) {
    const value = i * 25;
    const y = padding.top + chartH - (chartH * value) / 100;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + chartW, y);
    ctx.stroke();
    ctx.fillText(String(value), 16, y + 4);
  }

  rows.forEach((row, index) => {
    const x = padding.left + lane * index + (lane - barW) / 2;
    const barH = (chartH * row.score) / 100;
    const y = padding.top + chartH - barH;
    const isKorea = row.country === "South Korea";
    ctx.fillStyle = isKorea ? "#d8426b" : kdPalette[index % kdPalette.length];
    ctx.fillRect(x, y, barW, barH);
    ctx.fillStyle = "#17202a";
    ctx.font = `${isKorea ? "800" : "700"} 12px Segoe UI, sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText(`${index + 1}`, x + barW / 2, y - 22);
    ctx.fillText(kdScore(row.score), x + barW / 2, y - 7);
    ctx.save();
    ctx.translate(x + barW / 2, padding.top + chartH + 18);
    ctx.rotate(-Math.PI / 5);
    ctx.textAlign = "right";
    ctx.font = `${isKorea ? "800" : "600"} 12px Segoe UI, sans-serif`;
    ctx.fillStyle = isKorea ? "#d8426b" : "#405064";
    ctx.fillText(row.country, 0, 0);
    ctx.restore();
  });
  ctx.textAlign = "left";
}

function renderRanking() {
  const rows = kdData.international_comparison.map((row) => `
    <div class="${row.country === "South Korea" ? "is-korea" : ""}">
      <span>${row.rank}</span>
      <b>${row.country}</b>
      <small>${row.group} · ${row.status}</small>
      <strong>${kdScore(row.score)}</strong>
    </div>
  `).join("");
  document.querySelector("#kdRanking").innerHTML = rows;
}

function renderComponents() {
  document.querySelector("#kdComponents").innerHTML = kdData.components.map((component) => `
    <article>
      <span>${Math.round(component.weight * 100)}%</span>
      <h3>${component.name}</h3>
      <p>${component.source}</p>
      <small>${component.unit}</small>
    </article>
  `).join("");
  document.querySelector("#kdSources").innerHTML = kdData.source_links.map((source) => (
    `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`
  )).join("");
}

function renderAll() {
  renderHeadline();
  renderRanking();
  renderComponents();
  drawHistoryChart();
  drawGlobalChart();
  drawG20Chart();
}

window.addEventListener("resize", () => {
  drawHistoryChart();
  drawGlobalChart();
  drawG20Chart();
});

renderAll();
