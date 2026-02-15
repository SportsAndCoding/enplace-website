// src/components/calculator.js
import '../styles/components/calculator.scss';

// ─────────────────────────────────────
// INDUSTRY PRESETS
// ─────────────────────────────────────

const PRESETS = [
    { key: 'fine', label: 'Fine Dining', staff: 20, turnover: 55, cost: 4500 },
    { key: 'full', label: 'Full Service', staff: 30, turnover: 75, cost: 3500 },
    { key: 'fast-casual', label: 'Fast Casual', staff: 25, turnover: 100, cost: 2800 },
    { key: 'qsr', label: 'Quick Service', staff: 40, turnover: 130, cost: 2100 },
    { key: 'custom', label: 'Custom', staff: null, turnover: null, cost: null },
];

// ─────────────────────────────────────
// COST BREAKDOWN CATEGORIES
// ─────────────────────────────────────

const BREAKDOWN = [
    { key: 'recruiting', label: 'Recruiting & Hiring', pct: 0.30, color: '#c9a227', desc: 'Job postings, interviewing, background checks, onboarding paperwork' },
    { key: 'training', label: 'Training & Ramp-Up', pct: 0.30, color: '#d4af37', desc: 'Trainer time, materials, reduced output during learning curve' },
    { key: 'productivity', label: 'Lost Productivity', pct: 0.25, color: '#8b6f47', desc: 'Understaffing gaps, slower service, team morale impact' },
    { key: 'management', label: 'Management Time', pct: 0.15, color: '#6b5535', desc: 'Hours spent scrambling for coverage, retraining, damage control' },
];

// ─────────────────────────────────────
// HELPERS
// ─────────────────────────────────────

function formatCurrency(n) {
    if (n >= 1000000) {
        return '$' + (n / 1000000).toFixed(1) + 'M';
    }
    return '$' + Math.round(n).toLocaleString('en-US');
}

function formatNumber(n) {
    return Math.round(n).toLocaleString('en-US');
}

// Animate a number counting up
function animateValue(el, start, end, duration, formatter) {
    const startTime = performance.now();
    const diff = end - start;

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = start + (diff * eased);
        el.textContent = formatter(current);
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

// ─────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────

export default function Calculator() {
    const section = document.createElement('section');
    section.className = 'calc';

    // State
    let staffCount = 30;
    let turnoverRate = 75;
    let costPerReplacement = 3500;
    let activePreset = 'full';
    let previousTotal = 0;

    // Preset buttons
    const presetBtns = PRESETS.map(p => `
        <button class="calc__preset ${p.key === activePreset ? 'calc__preset--active' : ''}"
                data-preset="${p.key}">
            ${p.label}
        </button>
    `).join('');

    // Breakdown rows (will be updated dynamically)
    const breakdownRows = BREAKDOWN.map(b => `
        <div class="calc__breakdown-row" data-key="${b.key}">
            <div class="calc__breakdown-header">
                <span class="calc__breakdown-label">${b.label}</span>
                <span class="calc__breakdown-value" data-key="${b.key}-value">$0</span>
            </div>
            <div class="calc__breakdown-bar-track">
                <div class="calc__breakdown-bar-fill" data-key="${b.key}-bar"
                     style="width: 0%; background: ${b.color};"></div>
            </div>
            <p class="calc__breakdown-desc">${b.desc}</p>
        </div>
    `).join('');

    section.innerHTML = `
        <!-- HERO -->
        <div class="calc__hero">
            <div class="calc__hero-inner">
                <span class="calc__hero-label">Free Tool</span>
                <h1 class="calc__hero-title">Restaurant Turnover<br>Cost Calculator</h1>
                <p class="calc__hero-subtitle">
                    Enter your restaurant's numbers and see what employee turnover
                    is actually costing you — broken down by category, with savings
                    projections you can act on.
                </p>
            </div>
        </div>

        <!-- CALCULATOR BODY -->
        <div class="calc__body">
            <div class="calc__container">

                <!-- LEFT: INPUTS -->
                <div class="calc__inputs">

                    <!-- Presets -->
                    <div class="calc__presets">
                        <span class="calc__presets-label">Start with a template:</span>
                        <div class="calc__presets-row">
                            ${presetBtns}
                        </div>
                    </div>

                    <!-- Staff Count -->
                    <div class="calc__input-group">
                        <div class="calc__input-header">
                            <label class="calc__input-label" for="staffCount">Total Staff</label>
                            <div class="calc__input-value-wrap">
                                <input type="number" id="staffCountNum" class="calc__input-number"
                                       value="${staffCount}" min="1" max="500" />
                                <span class="calc__input-unit">employees</span>
                            </div>
                        </div>
                        <input type="range" id="staffCount" class="calc__slider"
                               min="5" max="200" value="${staffCount}" />
                        <div class="calc__slider-labels">
                            <span>5</span>
                            <span>200</span>
                        </div>
                    </div>

                    <!-- Turnover Rate -->
                    <div class="calc__input-group">
                        <div class="calc__input-header">
                            <label class="calc__input-label" for="turnoverRate">Annual Turnover Rate</label>
                            <div class="calc__input-value-wrap">
                                <input type="number" id="turnoverRateNum" class="calc__input-number"
                                       value="${turnoverRate}" min="5" max="300" />
                                <span class="calc__input-unit">%</span>
                            </div>
                        </div>
                        <input type="range" id="turnoverRate" class="calc__slider"
                               min="10" max="200" value="${turnoverRate}" />
                        <div class="calc__slider-labels">
                            <span>10%</span>
                            <span class="calc__slider-benchmark">
                                <span class="calc__benchmark-dot"></span>
                                75% industry avg
                            </span>
                            <span>200%</span>
                        </div>
                    </div>

                    <!-- Cost Per Replacement -->
                    <div class="calc__input-group">
                        <div class="calc__input-header">
                            <label class="calc__input-label" for="costPer">Replacement Cost Per Employee</label>
                            <div class="calc__input-value-wrap">
                                <span class="calc__input-currency">$</span>
                                <input type="number" id="costPerNum" class="calc__input-number calc__input-number--wide"
                                       value="${costPerReplacement}" min="500" max="20000" />
                            </div>
                        </div>
                        <input type="range" id="costPer" class="calc__slider"
                               min="1000" max="10000" step="100" value="${costPerReplacement}" />
                        <div class="calc__slider-labels">
                            <span>$1,000</span>
                            <span class="calc__slider-benchmark">
                                <span class="calc__benchmark-dot"></span>
                                $3,500 avg
                            </span>
                            <span>$10,000</span>
                        </div>
                    </div>

                    <!-- Sources -->
                    <div class="calc__sources">
                        <p class="calc__sources-text">
                            Industry data from Bureau of Labor Statistics, Cornell Center for
                            Hospitality Research, and Black Box Intelligence (2024-2025).
                        </p>
                    </div>
                </div>

                <!-- RIGHT: RESULTS -->
                <div class="calc__results">

                    <!-- Hero Number -->
                    <div class="calc__results-hero">
                        <span class="calc__results-hero-label">Your Annual Turnover Cost</span>
                        <div class="calc__results-hero-number" id="totalCost">$0</div>
                        <div class="calc__results-hero-context">
                            <span id="employeesLost">0</span> employees replaced per year
                        </div>
                    </div>

                    <!-- Breakdown -->
                    <div class="calc__breakdown">
                        <h3 class="calc__breakdown-title">Where the money goes</h3>
                        ${breakdownRows}
                    </div>

                    <!-- Monthly Impact -->
                    <div class="calc__monthly">
                        <div class="calc__monthly-item">
                            <span class="calc__monthly-value" id="monthlyCost">$0</span>
                            <span class="calc__monthly-label">per month</span>
                        </div>
                        <div class="calc__monthly-divider"></div>
                        <div class="calc__monthly-item">
                            <span class="calc__monthly-value" id="weeklyCost">$0</span>
                            <span class="calc__monthly-label">per week</span>
                        </div>
                        <div class="calc__monthly-divider"></div>
                        <div class="calc__monthly-item">
                            <span class="calc__monthly-value" id="perEmployee">$0</span>
                            <span class="calc__monthly-label">per employee</span>
                        </div>
                    </div>

                    <!-- Savings Projections -->
                    <div class="calc__savings">
                        <h3 class="calc__savings-title">What if you reduced turnover?</h3>
                        <div class="calc__savings-grid">
                            <div class="calc__savings-card">
                                <span class="calc__savings-pct">-15%</span>
                                <span class="calc__savings-amount" id="save15">$0</span>
                                <span class="calc__savings-label">saved per year</span>
                            </div>
                            <div class="calc__savings-card calc__savings-card--highlight">
                                <span class="calc__savings-badge">Typical with En Place</span>
                                <span class="calc__savings-pct">-30%</span>
                                <span class="calc__savings-amount" id="save30">$0</span>
                                <span class="calc__savings-label">saved per year</span>
                            </div>
                            <div class="calc__savings-card">
                                <span class="calc__savings-pct">-50%</span>
                                <span class="calc__savings-amount" id="save50">$0</span>
                                <span class="calc__savings-label">saved per year</span>
                            </div>
                        </div>
                    </div>

                    <!-- Share Button -->
                    <button class="calc__share" id="shareBtn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                        Copy Results
                    </button>
                </div>
            </div>
        </div>

        <!-- BOTTOM CTA -->
        <div class="calc__cta-section">
            <div class="calc__cta-inner">
                <h2 class="calc__cta-title">Stop bleeding. Start predicting.</h2>
                <p class="calc__cta-text">
                    En Place's Staff Stability Engine identifies flight-risk employees before
                    they resign — turning reactive scrambling into proactive retention.
                </p>
                <div class="calc__cta-buttons">
                    <a href="/contact" class="calc__cta-btn calc__cta-btn--primary">Book a Demo</a>
                    <a href="/pricing" class="calc__cta-btn calc__cta-btn--secondary">View Pricing</a>
                    <a href="/learn" class="calc__cta-btn calc__cta-btn--secondary">Learning Center</a>
                </div>
            </div>
        </div>
    `;

    // ─────────────────────────────────────
    // DOM REFERENCES
    // ─────────────────────────────────────

    const staffSlider = section.querySelector('#staffCount');
    const staffNum = section.querySelector('#staffCountNum');
    const turnoverSlider = section.querySelector('#turnoverRate');
    const turnoverNum = section.querySelector('#turnoverRateNum');
    const costSlider = section.querySelector('#costPer');
    const costNum = section.querySelector('#costPerNum');

    const totalCostEl = section.querySelector('#totalCost');
    const employeesLostEl = section.querySelector('#employeesLost');
    const monthlyCostEl = section.querySelector('#monthlyCost');
    const weeklyCostEl = section.querySelector('#weeklyCost');
    const perEmployeeEl = section.querySelector('#perEmployee');

    const save15El = section.querySelector('#save15');
    const save30El = section.querySelector('#save30');
    const save50El = section.querySelector('#save50');

    const shareBtn = section.querySelector('#shareBtn');

    // ─────────────────────────────────────
    // CALCULATION ENGINE
    // ─────────────────────────────────────

    function calculate() {
        const employeesLost = staffCount * (turnoverRate / 100);
        const totalCost = employeesLost * costPerReplacement;
        const monthly = totalCost / 12;
        const weekly = totalCost / 52;
        const perEmp = totalCost / staffCount;

        // Animate hero number
        animateValue(totalCostEl, previousTotal, totalCost, 400, formatCurrency);
        previousTotal = totalCost;

        // Static updates (these change fast enough that animation would be janky)
        employeesLostEl.textContent = formatNumber(employeesLost);
        monthlyCostEl.textContent = formatCurrency(monthly);
        weeklyCostEl.textContent = formatCurrency(weekly);
        perEmployeeEl.textContent = formatCurrency(perEmp);

        // Breakdown bars
        BREAKDOWN.forEach(b => {
            const value = totalCost * b.pct;
            const barEl = section.querySelector(`[data-key="${b.key}-bar"]`);
            const valEl = section.querySelector(`[data-key="${b.key}-value"]`);
            if (barEl) barEl.style.width = `${b.pct * 100}%`;
            if (valEl) valEl.textContent = formatCurrency(value);
        });

        // Savings
        const s15 = totalCost * 0.15;
        const s30 = totalCost * 0.30;
        const s50 = totalCost * 0.50;
        save15El.textContent = formatCurrency(s15);
        save30El.textContent = formatCurrency(s30);
        save50El.textContent = formatCurrency(s50);

        // Update slider fill (CSS custom property for styling)
        updateSliderFill(staffSlider);
        updateSliderFill(turnoverSlider);
        updateSliderFill(costSlider);
    }

    function updateSliderFill(slider) {
        const min = parseFloat(slider.min);
        const max = parseFloat(slider.max);
        const val = parseFloat(slider.value);
        const pct = ((val - min) / (max - min)) * 100;
        slider.style.setProperty('--fill', `${pct}%`);
    }

    // ─────────────────────────────────────
    // INPUT BINDINGS
    // ─────────────────────────────────────

    // Sync slider ↔ number input, then recalculate
    function bindSliderAndNumber(slider, numInput, setter) {
        slider.addEventListener('input', () => {
            const val = parseInt(slider.value);
            numInput.value = val;
            setter(val);
            setActivePreset('custom');
            calculate();
        });

        numInput.addEventListener('input', () => {
            let val = parseInt(numInput.value);
            if (isNaN(val)) return;
            val = Math.max(parseInt(slider.min), Math.min(parseInt(slider.max), val));
            slider.value = val;
            setter(val);
            setActivePreset('custom');
            calculate();
        });

        numInput.addEventListener('blur', () => {
            let val = parseInt(numInput.value);
            if (isNaN(val) || val < parseInt(slider.min)) val = parseInt(slider.min);
            if (val > parseInt(slider.max)) val = parseInt(slider.max);
            numInput.value = val;
            slider.value = val;
            setter(val);
            calculate();
        });
    }

    bindSliderAndNumber(staffSlider, staffNum, v => staffCount = v);
    bindSliderAndNumber(turnoverSlider, turnoverNum, v => turnoverRate = v);
    bindSliderAndNumber(costSlider, costNum, v => costPerReplacement = v);

    // ─────────────────────────────────────
    // PRESET BUTTONS
    // ─────────────────────────────────────

    function setActivePreset(key) {
        activePreset = key;
        section.querySelectorAll('.calc__preset').forEach(btn => {
            btn.classList.toggle('calc__preset--active', btn.dataset.preset === key);
        });
    }

    section.querySelectorAll('.calc__preset').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.preset;
            const preset = PRESETS.find(p => p.key === key);
            if (!preset || key === 'custom') {
                setActivePreset('custom');
                return;
            }

            staffCount = preset.staff;
            turnoverRate = preset.turnover;
            costPerReplacement = preset.cost;

            staffSlider.value = staffCount;
            staffNum.value = staffCount;
            turnoverSlider.value = Math.min(turnoverRate, parseInt(turnoverSlider.max));
            turnoverNum.value = turnoverRate;
            costSlider.value = costPerReplacement;
            costNum.value = costPerReplacement;

            setActivePreset(key);
            calculate();
        });
    });

    // ─────────────────────────────────────
    // SHARE / COPY RESULTS
    // ─────────────────────────────────────

    shareBtn.addEventListener('click', () => {
        const employeesLost = staffCount * (turnoverRate / 100);
        const totalCost = employeesLost * costPerReplacement;

        const text = [
            `🔢 Restaurant Turnover Cost Calculator Results`,
            ``,
            `Staff: ${staffCount} employees`,
            `Turnover Rate: ${turnoverRate}%`,
            `Replacement Cost: ${formatCurrency(costPerReplacement)}/employee`,
            ``,
            `📊 Annual Turnover Cost: ${formatCurrency(totalCost)}`,
            `   ${formatNumber(employeesLost)} employees replaced per year`,
            `   ${formatCurrency(totalCost / 12)}/month | ${formatCurrency(totalCost / 52)}/week`,
            ``,
            `💡 Potential savings with 30% reduction: ${formatCurrency(totalCost * 0.30)}/year`,
            ``,
            `Calculate yours → en-place.ai/calculator`,
        ].join('\n');

        navigator.clipboard.writeText(text).then(() => {
            const originalHTML = shareBtn.innerHTML;
            shareBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
                Copied!
            `;
            shareBtn.classList.add('calc__share--copied');
            setTimeout(() => {
                shareBtn.innerHTML = originalHTML;
                shareBtn.classList.remove('calc__share--copied');
            }, 2000);
        });
    });

    // ─────────────────────────────────────
    // INITIAL CALCULATION
    // ─────────────────────────────────────

    // Small delay to allow DOM to paint, then animate in
    setTimeout(() => {
        calculate();
    }, 100);

    return section;
}