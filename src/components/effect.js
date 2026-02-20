// src/components/effect.js
import "../styles/components/effect.scss";
import "../styles/components/_effect-master.scss";
import { createClient } from "@supabase/supabase-js";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

// ─── Supabase ───
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();
let supabase;
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase not configured — effect page will show fallback");
  supabase = null;
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

// ─── State ───
let chartInstance = null;
let benchmarks = [];
let chartAgg = [];
let segmentSummary = {};
let networkStats = { pre: 0, post: 0, delta: 0, r182: 0 };
let selectedSegment = "all";
let showAnnualized = false;

// ─── Segment order (worst → best baseline) ───
const SEGMENT_ORDER = [
  "fast_casual", "high_volume_chain", "college_town_cafe",
  "breakfast_cafe", "airport_restaurant", "sports_bar",
  "bar_and_grille", "hotel_restaurant", "family_diner",
  "upscale_casual", "neighborhood_bistro", "steakhouse"
];

// ─── Chart.js plugin: vertical adoption line ───
const adoptionLinePlugin = {
  id: "adoptionLine",
  afterDraw(chart) {
    const xScale = chart.scales.x;
    const yScale = chart.scales.y;
    if (!xScale || !yScale) return;
    const x = xScale.getPixelForValue(0);
    if (x < xScale.left || x > xScale.right) return;
    const ctx = chart.ctx;
    ctx.save();
    ctx.beginPath();
    ctx.setLineDash([8, 5]);
    ctx.strokeStyle = "rgba(247, 243, 233, 0.5)";
    ctx.lineWidth = 1.5;
    ctx.moveTo(x, yScale.top);
    ctx.lineTo(x, yScale.bottom);
    ctx.stroke();
    // Label
    ctx.setLineDash([]);
    ctx.font = "600 11px 'DM Sans', sans-serif";
    ctx.fillStyle = "rgba(247, 243, 233, 0.7)";
    ctx.textAlign = "center";
    ctx.fillText("En Place Adopted", x, yScale.top - 8);
    ctx.restore();
  }
};

// ─── Main component ───
export default function Effect() {
  const section = document.createElement("section");
  section.className = "effect";
  section.id = "effect";

  section.innerHTML = `
    <div class="effect__container">

      <!-- Hero -->
      <header class="effect__header">
        <p class="effect__eyebrow">Network Results</p>
        <h1 class="effect__title">The En Place Effect</h1>
        <p class="effect__subtitle">
          Staff turnover across our restaurant network, before and after adoption.
        </p>
      </header>

      <!-- Hero Stats -->
      <div class="effect__stats" id="effect-stats">
        <div class="effect__stat">
          <p class="effect__stat-value effect__stat-value--muted" id="stat-pre">—</p>
          <p class="effect__stat-label">Before En Place</p>
          <p class="effect__stat-sub">Network rolling avg</p>
        </div>
        <div class="effect__stat-divider"></div>
        <div class="effect__stat">
          <p class="effect__stat-value effect__stat-value--gold" id="stat-post">—</p>
          <p class="effect__stat-label">After En Place</p>
          <p class="effect__stat-sub">Annualized quit rate</p>
        </div>
        <div class="effect__stat-divider"></div>
        <div class="effect__stat">
          <p class="effect__stat-value effect__stat-value--gold" id="stat-delta">—</p>
          <p class="effect__stat-label">Improvement</p>
          <p class="effect__stat-sub">Across all segments</p>
        </div>
      </div>

      <!-- Chart Section -->
      <div class="effect__chart-card" id="effect-chart-card">
        <div class="effect__chart-header">
          <div>
            <p class="effect__section-eyebrow">Turnover Trajectory</p>
            <h2 class="effect__chart-title" id="chart-title">All Restaurants</h2>
            <p class="effect__chart-meta" id="chart-meta">100 restaurants · 12 segments</p>
          </div>
          <button class="effect__toggle" id="toggle-annualized">
            Show true annualized rate
          </button>
        </div>

        <!-- Segment Pills -->
        <div class="effect__pills" id="segment-pills"></div>

        <!-- Chart -->
        <div class="effect__chart-wrap">
          <canvas id="turnover-chart"></canvas>
        </div>

        <!-- Annualized Explainer -->
        <div class="effect__explainer" id="annualized-explainer" style="display:none">
          <strong>Reading this chart:</strong>
          The rolling line at 6 months still shows
          <span id="explainer-r182">—</span> because it includes 183 days of pre-adoption data.
          But count the actual departures since adoption and annualize:
          <strong class="effect__explainer-gold" id="explainer-post">—</strong>.
          The old crisis is still in the rearview mirror. The bleeding already stopped.
        </div>
      </div>

      <!-- Results Table -->
      <div class="effect__table-section">
        <p class="effect__section-eyebrow effect__section-eyebrow--center">By Segment</p>
        <h2 class="effect__section-title">Results Across the Network</h2>
        <p class="effect__section-sub">
          Sorted by largest improvement. Industry benchmarks sourced from NRA, Cornell Hotel School, Black Box Intelligence, and BLS.
        </p>
        <div class="effect__table-card">
          <table class="effect__table" id="results-table">
            <thead>
              <tr>
                <th class="effect__th--left">Segment</th>
                <th>Industry Avg</th>
                <th>Before</th>
                <th>After</th>
                <th>Improvement</th>
                <th class="effect__th--left effect__th--source">Source</th>
              </tr>
            </thead>
            <tbody id="results-tbody">
              <tr><td colspan="6" class="effect__loading">Loading network data...</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Breaking the Cascade -->
      <div class="effect__narrative">
        <p class="effect__section-eyebrow effect__section-eyebrow--center">Why It Works</p>
        <h2 class="effect__section-title">Breaking the Cascade</h2>

        <div class="effect__narrative-body">
          <p>
            Every restaurant operates with two populations: veterans who've survived their first
            90 days, and newcomers still in the danger zone. Industry data consistently shows new hires
            quit at roughly <strong>5× the rate</strong> of established staff during this period.
          </p>
          <p>
            When a veteran leaves, their position enters this 90-day cliff. If the replacement
            doesn't stick, the clock resets. Another hire. Another $2,300 in hard costs. Another
            round of training pulled from your existing team. Morale drops. More people start
            looking. The cost compounds.
          </p>
          <p>
            En Place breaks this cycle by detecting warning signs before they become resignations.
            Anonymous mood tracking catches the drift. Predictive scheduling avoids the burnout.
            When a position does turn over, Stable Hire reduces the probability of a cliff failure.
            The cascade never starts.
          </p>
        </div>

        <div class="effect__callout">
          <h3 class="effect__callout-title">The Three-Exit Rule</h3>
          <p class="effect__callout-body">
            If En Place prevents just <strong>3 departures per year</strong>, the platform pays for itself.
            Three prevented exits at $2,305 each = $6,915 in hard replacement costs alone — before
            accounting for productivity loss, training burden, and team morale impact.
          </p>
        </div>
      </div>

      <!-- Data Sources -->
      <div class="effect__sources">
        <p class="effect__sources-text">
          <strong>Data Sources:</strong> National Restaurant Association, Cornell Hotel School, Black Box
          Intelligence, Bureau of Labor Statistics, QSR Magazine, 7shifts, Homebase, Nucleus Research.
        </p>
      </div>

      <!-- CTA -->
      <div class="effect__cta-section">
        <h2 class="effect__cta-title">See how this applies to your restaurant</h2>
        <p class="effect__cta-sub">Calculate your turnover cost and projected savings.</p>
        <a href="/calculator" class="effect__cta-btn">
          Your Turnover Cost
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>

    </div>
  `;

  // ─── Load data after mount ───
  setTimeout(() => initEffect(section), 0);

  return section;
}

// ═══════════════════════════════════════════════════════════════
// DATA LOADING
// ═══════════════════════════════════════════════════════════════

async function initEffect(section) {
  if (!supabase) return;

  try {
    // Parallel fetch
    const [benchRes, chartRes] = await Promise.all([
      supabase.from("turnover_benchmarks").select("*"),
      supabase.from("turnover_chart_agg").select("*"),
    ]);

    if (benchRes.error) throw benchRes.error;
    if (chartRes.error) throw chartRes.error;

    benchmarks = benchRes.data || [];
    chartAgg = chartRes.data || [];

    // Compute segment summaries
    computeSummaries();

    // Render everything
    renderHeroStats(section);
    renderPills(section);
    renderChart(section);
    renderTable(section);
    wireInteractions(section);

  } catch (err) {
    console.error("Effect page data load failed:", err);
  }
}

function computeSummaries() {
  // Group benchmarks by profile_key
  const grouped = {};
  for (const b of benchmarks) {
    const key = b.profile_key;
    if (!grouped[key]) {
      grouped[key] = {
        label: b.label,
        national_avg: b.national_avg,
        national_range: b.national_range,
        source: b.source,
        pre_sum: 0, post_sum: 0, r182_sum: 0, count: 0,
      };
    }
    grouped[key].pre_sum += b.pre_avg_turnover;
    grouped[key].post_sum += b.post_annualized;
    grouped[key].r182_sum += b.rolling_at_182;
    grouped[key].count += 1;
  }

  segmentSummary = {};
  for (const [key, g] of Object.entries(grouped)) {
    segmentSummary[key] = {
      label: g.label,
      national_avg: g.national_avg,
      national_range: g.national_range,
      source: g.source,
      pre: +(g.pre_sum / g.count).toFixed(1),
      post: +(g.post_sum / g.count).toFixed(1),
      r182: +(g.r182_sum / g.count).toFixed(1),
      delta: +((g.pre_sum - g.post_sum) / g.count).toFixed(1),
      count: g.count,
    };
  }

  // Network-wide stats
  const totalPre = benchmarks.reduce((s, b) => s + b.pre_avg_turnover, 0);
  const totalPost = benchmarks.reduce((s, b) => s + b.post_annualized, 0);
  const totalR182 = benchmarks.reduce((s, b) => s + b.rolling_at_182, 0);
  const n = benchmarks.length || 1;
  networkStats = {
    pre: +(totalPre / n).toFixed(1),
    post: +(totalPost / n).toFixed(1),
    r182: +(totalR182 / n).toFixed(1),
    delta: +((totalPre - totalPost) / n).toFixed(1),
  };
}

// ═══════════════════════════════════════════════════════════════
// HERO STATS
// ═══════════════════════════════════════════════════════════════

function renderHeroStats(section) {
  section.querySelector("#stat-pre").textContent = networkStats.pre + "%";
  section.querySelector("#stat-post").textContent = networkStats.post + "%";
  section.querySelector("#stat-delta").textContent = networkStats.delta + " pts";
}

// ═══════════════════════════════════════════════════════════════
// SEGMENT PILLS
// ═══════════════════════════════════════════════════════════════

function renderPills(section) {
  const container = section.querySelector("#segment-pills");
  if (!container) return;

  const allPill = { key: "all", label: "All Restaurants" };
  const pills = [allPill, ...SEGMENT_ORDER.map(k => ({
    key: k,
    label: segmentSummary[k]?.label || k,
  }))];

  container.innerHTML = pills.map(p =>
    `<button class="effect__pill${p.key === selectedSegment ? " effect__pill--active" : ""}" data-segment="${p.key}">${p.label}</button>`
  ).join("");
}

// ═══════════════════════════════════════════════════════════════
// CHART
// ═══════════════════════════════════════════════════════════════

function getChartData(segment) {
  if (segment === "all") {
    // Average across all segments per day
    const dayMap = {};
    for (const row of chartAgg) {
      const d = row.days_from_adoption;
      if (!dayMap[d]) dayMap[d] = { sum: 0, count: 0 };
      dayMap[d].sum += row.avg_turnover;
      dayMap[d].count += 1;
    }
    const days = Object.keys(dayMap).map(Number).sort((a, b) => a - b);
    return days.map(d => ({
      day: d,
      value: +(dayMap[d].sum / dayMap[d].count).toFixed(1),
    }));
  } else {
    return chartAgg
      .filter(r => r.profile_key === segment)
      .sort((a, b) => a.days_from_adoption - b.days_from_adoption)
      .map(r => ({ day: r.days_from_adoption, value: r.avg_turnover }));
  }
}

function renderChart(section) {
  const canvas = section.querySelector("#turnover-chart");
  if (!canvas) return;

  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null;
  }

  const data = getChartData(selectedSegment);
  if (!data.length) return;

  const stats = selectedSegment === "all" ? networkStats : segmentSummary[selectedSegment];
  if (!stats) return;

  const labels = data.map(d => d.day);
  const values = data.map(d => d.value);

  // Datasets
  const datasets = [
    {
      label: "Rolling 365-day Turnover",
      data: values,
      borderColor: "#f7f3e9",
      borderWidth: 2.5,
      backgroundColor: (ctx) => {
        const chart = ctx.chart;
        const { ctx: c, chartArea } = chart;
        if (!chartArea) return "rgba(244, 208, 111, 0.08)";
        const gradient = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, "rgba(244, 208, 111, 0.15)");
        gradient.addColorStop(1, "rgba(244, 208, 111, 0.01)");
        return gradient;
      },
      fill: true,
      tension: 0.35,
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#f4d06f",
      pointHoverBorderColor: "#1a110f",
      pointHoverBorderWidth: 2,
    },
  ];

  // National avg reference (not for "all")
  if (selectedSegment !== "all" && stats.national_avg) {
    datasets.push({
      label: `Industry Avg (${stats.national_avg}%)`,
      data: labels.map(() => stats.national_avg),
      borderColor: "rgba(247, 243, 233, 0.25)",
      borderWidth: 1,
      borderDash: [6, 4],
      pointRadius: 0,
      pointHoverRadius: 0,
      fill: false,
    });
  }

  // Annualized post rate (toggle)
  if (showAnnualized) {
    datasets.push({
      label: `True Rate (${stats.post}%)`,
      data: labels.map(() => stats.post),
      borderColor: "#f4d06f",
      borderWidth: 2,
      borderDash: [10, 5],
      pointRadius: 0,
      pointHoverRadius: 0,
      fill: false,
    });
  }

  chartInstance = new Chart(canvas, {
    type: "line",
    data: { labels, datasets },
    plugins: [adoptionLinePlugin],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false,
      },
      layout: {
        padding: { top: 24 },
      },
      scales: {
        x: {
          grid: { color: "rgba(247, 243, 233, 0.06)", drawBorder: false },
          ticks: {
            color: "rgba(247, 243, 233, 0.4)",
            font: { family: "'DM Sans', sans-serif", size: 11 },
            callback: (val, idx) => {
              const day = labels[idx];
              if (day === 0) return "Day 0";
              if (day % 60 === 0 || idx === 0 || idx === labels.length - 1) {
                return day > 0 ? `+${day}` : `${day}`;
              }
              return "";
            },
            maxRotation: 0,
          },
          border: { display: false },
        },
        y: {
          grid: { color: "rgba(247, 243, 233, 0.06)", drawBorder: false },
          ticks: {
            color: "rgba(247, 243, 233, 0.4)",
            font: { family: "'DM Sans', sans-serif", size: 11 },
            callback: v => v + "%",
          },
          border: { display: false },
          beginAtZero: true,
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(26, 17, 15, 0.95)",
          borderColor: "rgba(244, 208, 111, 0.2)",
          borderWidth: 1,
          titleFont: { family: "'DM Sans', sans-serif", size: 11 },
          bodyFont: { family: "'DM Sans', sans-serif", size: 14, weight: "600" },
          titleColor: "rgba(247, 243, 233, 0.5)",
          bodyColor: "#f7f3e9",
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            title: (items) => {
              const day = labels[items[0].dataIndex];
              const phase = day <= 0 ? "Pre-adoption" : "Post-adoption";
              return `${phase} · Day ${day > 0 ? "+" : ""}${day}`;
            },
            label: (item) => {
              if (item.datasetIndex === 0) return `${item.parsed.y.toFixed(1)}%`;
              return `${item.dataset.label}`;
            },
          },
        },
      },
    },
  });
}

// ═══════════════════════════════════════════════════════════════
// RESULTS TABLE
// ═══════════════════════════════════════════════════════════════

function renderTable(section) {
  const tbody = section.querySelector("#results-tbody");
  if (!tbody) return;

  // Sort by delta descending
  const sorted = SEGMENT_ORDER
    .filter(k => segmentSummary[k])
    .sort((a, b) => segmentSummary[b].delta - segmentSummary[a].delta);

  tbody.innerHTML = sorted.map(key => {
    const s = segmentSummary[key];
    return `
      <tr class="effect__tr" data-segment="${key}">
        <td class="effect__td--name">${s.label}</td>
        <td class="effect__td--center effect__td--muted">${s.national_avg}%</td>
        <td class="effect__td--center effect__td--pre">${s.pre}%</td>
        <td class="effect__td--center effect__td--post">${s.post}%</td>
        <td class="effect__td--center">
          <span class="effect__delta-badge">−${s.delta.toFixed(0)} pts</span>
        </td>
        <td class="effect__td--source">${s.source}</td>
      </tr>
    `;
  }).join("");
}

// ═══════════════════════════════════════════════════════════════
// INTERACTIONS
// ═══════════════════════════════════════════════════════════════

function wireInteractions(section) {
  // Segment pills
  section.querySelector("#segment-pills")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-segment]");
    if (!btn) return;
    selectedSegment = btn.dataset.segment;
    updateSegmentUI(section);
  });

  // Table row clicks → select segment
  section.querySelector("#results-tbody")?.addEventListener("click", (e) => {
    const row = e.target.closest("[data-segment]");
    if (!row) return;
    selectedSegment = row.dataset.segment;
    updateSegmentUI(section);
    section.querySelector("#effect-chart-card")?.scrollIntoView({ behavior: "smooth" });
  });

  // Annualized toggle
  section.querySelector("#toggle-annualized")?.addEventListener("click", () => {
    showAnnualized = !showAnnualized;
    const btn = section.querySelector("#toggle-annualized");
    const explainer = section.querySelector("#annualized-explainer");
    if (btn) {
      btn.classList.toggle("effect__toggle--active", showAnnualized);
      btn.textContent = showAnnualized ? "✓ True annualized rate" : "Show true annualized rate";
    }
    if (explainer) explainer.style.display = showAnnualized ? "block" : "none";
    updateExplainer(section);
    renderChart(section);
  });
}

function updateSegmentUI(section) {
  // Update pills
  section.querySelectorAll(".effect__pill").forEach(p => {
    p.classList.toggle("effect__pill--active", p.dataset.segment === selectedSegment);
  });

  // Update chart title
  const stats = selectedSegment === "all" ? networkStats : segmentSummary[selectedSegment];
  const titleEl = section.querySelector("#chart-title");
  const metaEl = section.querySelector("#chart-meta");

  if (selectedSegment === "all") {
    if (titleEl) titleEl.textContent = "All Restaurants";
    if (metaEl) metaEl.textContent = `${benchmarks.length} restaurants · ${SEGMENT_ORDER.length} segments`;
  } else if (stats) {
    if (titleEl) titleEl.textContent = stats.label;
    if (metaEl) metaEl.textContent = `Industry avg: ${stats.national_avg}% · ${stats.source}`;
  }

  updateExplainer(section);
  renderChart(section);
}

function updateExplainer(section) {
  const stats = selectedSegment === "all" ? networkStats : segmentSummary[selectedSegment];
  if (!stats) return;
  const r182El = section.querySelector("#explainer-r182");
  const postEl = section.querySelector("#explainer-post");
  if (r182El) r182El.textContent = stats.r182 + "%";
  if (postEl) postEl.textContent = stats.post + "%";
}