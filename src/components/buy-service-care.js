// src/components/buy-service-care.js
import "../styles/components/buy.scss";
import "../styles/components/pricing.scss";

export default function BuyServiceCare() {
  const section = document.createElement("section");
  section.className = "buy";
  section.id = "buy-service-care";

  section.innerHTML = `
    <div class="buy__container">

      <header class="buy-hero">
        <h1 class="buy-hero__title">LeanOn for Service Care Agencies.</h1>
        <p class="buy-hero__subtitle">Everything included. Priced per active DSP.</p>
      </header>

      <section class="buy-selector">
        <div class="buy-module buy-module--core buy-module--selected buy-module--locked">
          <div class="buy-module__checkbox buy-module__checkbox--checked">✓</div>
          <div class="buy-module__content">
            <div class="buy-module__header">
              <h3 class="buy-module__title">The LeanOn Platform</h3>
              <span class="buy-module__badge">Everything included</span>
            </div>
            <p class="buy-module__desc">Mandation risk detection, burnout radar, anonymous mood check-ins, predictive hiring, safety signal detection, and the full Manager Portal + Staff Portal + Action Board + Network Intelligence.</p>
          </div>
          <div class="buy-module__price">Per active DSP</div>
        </div>

        <div class="buy-included">
          <p class="buy-included__label">Pricing tiers:</p>
          <ul class="buy-included__list">
            <li><span class="buy-included__check">✓</span> 1–24 DSPs: $9/mo each</li>
            <li><span class="buy-included__check">✓</span> 25–99 DSPs: $7/mo each</li>
            <li><span class="buy-included__check">✓</span> 100–249 DSPs: $6/mo each</li>
            <li><span class="buy-included__check">✓</span> 250–499 DSPs: $5/mo each</li>
            <li><span class="buy-included__check">✓</span> 500+ DSPs: Custom</li>
          </ul>
        </div>

        <div class="buy-multi-location">
          <p><strong>Ready to get started?</strong> Contact us and we'll set up your account at the right tier for your team size.</p>
        </div>
      </section>

      <div class="buy-checkout">
        <div class="buy-checkout__actions">
          <a href="/contact" class="buy-btn buy-btn--primary">Contact Sales</a>
        </div>
        <p class="buy-checkout__reassurance">We'll get you set up within 1 business day.</p>
      </div>

      <section class="buy-onboarding">
        <div class="section-header">
          <h2 class="section-header__title">You'll be live in under an hour.</h2>
        </div>
        <div class="buy-onboarding__steps">
          <div class="buy-step">
            <span class="buy-step__number">1</span>
            <p class="buy-step__text">Contact sales</p>
          </div>
          <div class="buy-step">
            <span class="buy-step__number">2</span>
            <p class="buy-step__text">We set up your account at the right tier</p>
          </div>
          <div class="buy-step">
            <span class="buy-step__number">3</span>
            <p class="buy-step__text">Import your DSPs</p>
          </div>
          <div class="buy-step">
            <span class="buy-step__number">4</span>
            <p class="buy-step__text">Staff portals go live immediately</p>
          </div>
        </div>
        <p class="buy-onboarding__footer">No consultants. No long-term contracts.</p>
      </section>

    </div>
  `;

  return section;
}
