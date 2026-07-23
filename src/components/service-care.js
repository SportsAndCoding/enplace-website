// src/components/service-care.js
import "../styles/components/pricing.scss";
import "../styles/components/_pricing-master.scss";

export default function ServiceCare() {
  const section = document.createElement("section");
  section.className = "pricing";
  section.id = "service-care";

  section.innerHTML = `
    <div class="pricing__container">

      <!-- Hero — DSP/service-care specific -->
      <section class="pricing-hero">
        <p class="pricing-hero__eyebrow">For Service Care Agencies</p>
        <h1 class="pricing-hero__title">
          Your best DSP told you six weeks ago they were quitting. Two weeks ago, they hit the point of no return.
        </h1>
        <p class="pricing-hero__subtitle">
          LeanOn uncovers the burnout signals — mood, mandation fatigue, missed shifts — before you get the resignation. Built for agencies that can't afford another mandation event.
        </p>
      </section>

      <!-- Core Product -->
      <div class="core-product">
        <span class="core-product__badge">One plan • Everything included</span>

        <div class="core-product__header">
          <div class="core-product__info">
            <h2>The LeanOn Platform</h2>
            <p class="core-product__tagline">The full workforce intelligence stack, priced per active DSP.</p>
          </div>

          <div class="location-selector">
            <label class="location-selector__label">How many active DSPs?</label>
            <div class="location-selector__controls">
              <input
                type="range"
                class="location-selector__slider"
                min="1"
                max="500"
                value="30"
                id="staffSlider"
              />
              <span class="location-selector__value" id="staffValue">30</span>
            </div>
            <div class="location-selector__price">
              <p class="location-selector__price-label">Monthly price</p>
              <p class="location-selector__price-value">
                <span id="pricePrefix">$</span><span id="priceValue">210</span><span id="priceSuffix">/mo</span>
              </p>
            </div>
          </div>
        </div>

        <div class="core-product__features">
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Mandation risk detection
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Burnout Radar
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Anonymous mood check-ins
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Fairness Score
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Action Board / Manager Playbook
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Stable Hire — predictive DSP hiring
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Stable Schedule Builder
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            House Guardian — safety signal detection
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Open Shift Marketplace
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Shift Swap Portal
          </div>
        </div>

        <a href="/buy-service-care" class="core-product__cta">
          Contact Sales
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>

      <!-- Pricing Tiers -->
      <section class="operational-section">
        <div class="section-header">
          <h3>Pricing by team size</h3>
          <p>One flat rate per active DSP. The bigger your team, the lower the rate.</p>
        </div>

        <div class="operational-grid">
          <div class="operational-card">
            <span class="operational-card__name">1–24 DSPs</span>
            <span class="operational-card__price">$9/mo each</span>
          </div>
          <div class="operational-card">
            <span class="operational-card__name">25–99 DSPs</span>
            <span class="operational-card__price">$7/mo each</span>
          </div>
          <div class="operational-card">
            <span class="operational-card__name">100–249 DSPs</span>
            <span class="operational-card__price">$6/mo each</span>
          </div>
          <div class="operational-card">
            <span class="operational-card__name">250–499 DSPs</span>
            <span class="operational-card__price">$5/mo each</span>
          </div>
          <div class="operational-card">
            <span class="operational-card__name">500+ DSPs</span>
            <span class="operational-card__price">Custom</span>
          </div>
        </div>
      </section>

      <!-- ROI Section -->
      <section class="roi-section">
        <h3>Your return on stability</h3>
        <div class="roi-grid">
          <div class="roi-stat">
            <p class="roi-stat__value">8.4×</p>
            <p class="roi-stat__label">Average 90-day ROI</p>
          </div>
          <div class="roi-stat">
            <p class="roi-stat__value">61%</p>
            <p class="roi-stat__label">Reduction in turnover in year one</p>
          </div>
          <div class="roi-stat">
            <p class="roi-stat__value">$8K</p>
            <p class="roi-stat__label">Average cost of a single replacement hire</p>
          </div>
          <div class="roi-stat">
            <p class="roi-stat__value">Instant</p>
            <p class="roi-stat__label">ROI from preventing walkouts</p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div class="faq-grid">
          <div class="faq-item">
            <p class="faq-item__question">How is LeanOn priced for service care agencies?</p>
            <p class="faq-item__answer">
              Per active DSP, flat rate by tier. A 100-DSP agency pays 100 × $6/mo = $600/mo total. Every feature is included — no add-ons, no bundles.
            </p>
          </div>
          <div class="faq-item">
            <p class="faq-item__question">Do you handle HIPAA / regulated data?</p>
            <p class="faq-item__answer">
              LeanOn tracks mood, engagement, and behavioral patterns of your staff — not client PHI. Data is stored on encrypted infrastructure in the United States.
            </p>
          </div>
          <div class="faq-item">
            <p class="faq-item__question">How does mandation reduction work?</p>
            <p class="faq-item__answer">
              LeanOn flags fatigue, resentment, and flight-risk signals early, giving supervisors time to intervene before staff quit — reducing the vacancies that force mandation events.
            </p>
          </div>
          <div class="faq-item">
            <p class="faq-item__question">Are there long-term contracts?</p>
            <p class="faq-item__answer">
              Month-to-month by default. No annual commitment required. Annual plans available with meaningful savings.
            </p>
          </div>
        </div>
      </section>

    </div>
  `;

  // Headcount -> price logic (flat rate per tier)
  const slider = section.querySelector("#staffSlider");
  const staffValue = section.querySelector("#staffValue");
  const priceValue = section.querySelector("#priceValue");
  const pricePrefix = section.querySelector("#pricePrefix");
  const priceSuffix = section.querySelector("#priceSuffix");

  const TIERS = [
    { min: 250, rate: 5 },
    { min: 100, rate: 6 },
    { min: 25,  rate: 7 },
    { min: 1,   rate: 9 },
  ];

  function update() {
    const staff = parseInt(slider.value, 10) || 1;
    staffValue.textContent = staff;

    if (staff >= 500) {
      pricePrefix.style.display = "none";
      priceSuffix.style.display = "none";
      priceValue.textContent = "Custom";
      return;
    }

    const tier = TIERS.find((t) => staff >= t.min);
    pricePrefix.style.display = "";
    priceSuffix.style.display = "";
    priceValue.textContent = (staff * tier.rate).toLocaleString();
  }

  if (slider && staffValue && priceValue) {
    slider.addEventListener("input", update);
    update();
  }

  return section;
}
