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
          One stability engine. Optional superpowers. Built for restaurants that refuse chaos.
        </p>
      </section>

      <!-- Core Product -->
      <div class="core-product">
        <span class="core-product__badge">Most Popular • 87% of groups</span>

        <div class="core-product__header">
          <div class="core-product__info">
            <h2>Stable Staff Engine (SSE)</h2>
            <p class="core-product__tagline">The foundation of predictable operations.</p>
          </div>

          <div class="location-selector">
            <label class="location-selector__label">How many locations?</label>
            <div class="location-selector__controls">
              <input 
                type="range" 
                class="location-selector__slider" 
                min="1" 
                max="50" 
                value="1"
                id="locationSlider"
              />
              <span class="location-selector__value" id="locationValue">1</span>
            </div>
            <div class="location-selector__price">
              <p class="location-selector__price-label">Monthly investment</p>
              <p class="location-selector__price-value">
                $<span id="priceValue">1,500</span><span>/mo</span>
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

      <!-- Premium Add-Ons -->
      <section class="addons-section">
        <div class="section-header">
          <h3>Premium Add-Ons</h3>
          <p>Unlock next-level stability when you're ready.</p>
        </div>

        <div class="addons-grid">
          <div class="addon-card">
            <div class="addon-card__header">
              <h4 class="addon-card__name">Stable Hire</h4>
              <span class="addon-card__price">$500<span>/mo</span></span>
            </div>
            <p class="addon-card__description">
              Screen candidates against network-wide bad patterns and your team’s emotional profile before you hire.
            </p>
          </div>

          <div class="addon-card">
            <div class="addon-card__header">
              <h4 class="addon-card__name">Stable Schedule Builder</h4>
              <span class="addon-card__price">$500<span>/mo</span></span>
            </div>
            <p class="addon-card__description">
              The only scheduler that optimizes for people and profit, not one at the expense of the other.
            </p>
          </div>

          <div class="addon-card">
            <div class="addon-card__header">
              <h4 class="addon-card__name">House Guardian</h4>
              <span class="addon-card__price">$500<span>/mo</span></span>
            </div>
            <p class="addon-card__description">
              The system that surfaces the truths staff never say out loud, including misconduct, morale collapse, theft and drugs.
            </p>
          </div>
        </div>
      </section>

      <!-- Popular Bundles -->
      <section class="bundles-section">
        <div class="section-header">
          <h3>Most Popular Combinations</h3>
          <p>Pre-configured packages chosen by operators like you.</p>
        </div>

        <div class="bundles-grid">
          <div class="bundle-card bundle-card--featured">
            <span class="bundle-card__badge">Best Value</span>
            <h4 class="bundle-card__name">The Full Stability Suite</h4>
            <p class="bundle-card__price">$3,000<span>/mo</span></p>
            <p class="bundle-card__includes">SSE + all 3 Premium Add-Ons</p>
            <ul class="bundle-card__features">
              <li>Complete emotional intelligence coverage</li>
              <li>Predictive hiring that reduces 90-day turnover</li>
              <li>Stability-optimized scheduling engine</li>
              <li>Real-time friction monitoring & intervention</li>
            </ul>
          </div>

          <div class="bundle-card">
            <h4 class="bundle-card__name">Scheduling Chaos Fix</h4>
            <p class="bundle-card__price">$2,000<span>/mo</span></p>
            <p class="bundle-card__includes">SSE + Stable Schedule Builder</p>
            <ul class="bundle-card__features">
              <li>Full stability intelligence foundation</li>
              <li>Automated schedule generation</li>
              <li>Morale-aware shift assignments</li>
              <li>Burnout prevention baked in</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Operational Tools -->
      <section class="operational-section">
        <div class="section-header">
          <h3>Operational Tools</h3>
          <p>Standalone tools that work with or without SSE.</p>
        </div>

        <div class="operational-grid">
          <div class="operational-card">
            <span class="operational-card__name">Open Shift Marketplace</span>
            <span class="operational-card__price">$200/mo</span>
          </div>
          <div class="operational-card">
            <span class="operational-card__name">Shift Swap Portal</span>
            <span class="operational-card__price">$200/mo</span>
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
            <p class="faq-item__question">Can I add modules later?</p>
            <p class="faq-item__answer">
              Yes. Start with SSE and add premium modules whenever you're ready. Everything is modular.
            </p>
          </div>
          <div class="faq-item">
            <p class="faq-item__question">What if I only have one location?</p>
            <p class="faq-item__answer">
              Same price, same power. Single-location operators get the full stability engine and emotional data network.
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
              Yes. We integrate with major POS, scheduling, and HR systems—and we’ll work with you on anything custom.
            </p>
          </div>
        </div>
      </section>

    </div>
  `;

  // Slider logic
  const slider = section.querySelector("#locationSlider");
  const locationValue = section.querySelector("#locationValue");
  const priceValue = section.querySelector("#priceValue");
  const SSE_PRICE = 1500;

  if (slider && locationValue && priceValue) {
    slider.addEventListener("input", () => {
      const locations = parseInt(slider.value, 10) || 1;
      locationValue.textContent = locations;
      priceValue.textContent = (locations * SSE_PRICE).toLocaleString();
    });
  }

  return section;
}
