// src/components/pricing.js
import "../styles/components/pricing.scss";
import "../styles/components/_pricing-master.scss";

export default function Pricing() {
  const section = document.createElement("section");
  section.className = "pricing";
  section.id = "pricing";

  section.innerHTML = `
    <div class="pricing__container">

      <!-- Header -->
      <section class="pricing-header">
        <p class="pricing-header__eyebrow">Pricing</p>
        <h1 class="pricing-header__title">Predictable teams start here.</h1>
        <p class="pricing-header__subtitle">
          One platform. Everything included. Built for teams that refuse chaos.
        </p>
      </section>

      <!-- Core Product -->
      <div class="core-product">
        <span class="core-product__badge">One plan • Everything included</span>

        <div class="core-product__header">
          <div class="core-product__info">
            <h2>The LeanOn Platform</h2>
            <p class="core-product__tagline">The foundation of predictable operations.</p>
          </div>

          <div class="location-selector">
            <label class="location-selector__label">How many active staff?</label>
            <div class="location-selector__controls">
              <input
                type="range"
                class="location-selector__slider"
                min="1"
                max="500"
                value="10"
                id="staffSlider"
              />
              <span class="location-selector__value" id="staffValue">10</span>
            </div>
            <div class="location-selector__price">
              <p class="location-selector__price-label">Monthly price</p>
              <p class="location-selector__price-value">
                <span id="pricePrefix">$</span><span id="priceValue">70</span><span id="priceSuffix">/mo</span>
              </p>
            </div>
          </div>
        </div>

        <div class="core-product__features">
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Staff-Management Alignment Score
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Local Mood Heatmap
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Network-Wide Mood Heatmap
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Burnout Radar
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
            Stable Hire — predictive hiring
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            Stable Schedule Builder
          </div>
          <div class="feature-item">
            <span class="feature-item__icon"></span>
            House Guardian
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

        <a href="/buy" class="core-product__cta">
          Buy Now
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
          <p>One flat rate per active team member. The bigger your team, the lower the rate.</p>
        </div>

        <div class="operational-grid">
          <div class="operational-card">
            <span class="operational-card__name">1–24 staff</span>
            <span class="operational-card__price">$7/mo each</span>
          </div>
          <div class="operational-card">
            <span class="operational-card__name">25–99 staff</span>
            <span class="operational-card__price">$5/mo each</span>
          </div>
          <div class="operational-card">
            <span class="operational-card__name">100–249 staff</span>
            <span class="operational-card__price">$4/mo each</span>
          </div>
          <div class="operational-card">
            <span class="operational-card__name">250–499 staff</span>
            <span class="operational-card__price">$3/mo each</span>
          </div>
          <div class="operational-card">
            <span class="operational-card__name">500+ staff</span>
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
            <p class="faq-item__question">Is everything included, or are there add-ons?</p>
            <p class="faq-item__answer">
              Everything is included. One price per active team member covers the entire platform — every feature, no modules to bolt on later.
            </p>
          </div>
          <div class="faq-item">
            <p class="faq-item__question">What if I only have a small team?</p>
            <p class="faq-item__answer">
              LeanOn scales to you. You pay per active team member, so a 10-person team pays for 10 — and still gets the full platform.
            </p>
          </div>
          <div class="faq-item">
            <p class="faq-item__question">Are there long-term contracts?</p>
            <p class="faq-item__answer">
              We support month-to-month or annual agreements. Annual plans come with meaningful savings.
            </p>
          </div>
          <div class="faq-item">
            <p class="faq-item__question">Do you integrate with my existing tools?</p>
            <p class="faq-item__answer">
              Yes. We integrate with major payroll, scheduling, and HR systems—and we’ll work with you on anything custom.
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
    { min: 250, rate: 3 },
    { min: 100, rate: 4 },
    { min: 25,  rate: 5 },
    { min: 1,   rate: 7 },
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
