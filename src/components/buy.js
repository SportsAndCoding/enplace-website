// src/components/buy.js
import "../styles/components/buy.scss";

export default function Buy() {
  const section = document.createElement("section");
  section.className = "buy";
  section.id = "buy";

  section.innerHTML = `
    <div class="buy__container">

      <!-- HERO -->
      <header class="buy-hero">
        <h1 class="buy-hero__title">Predictable teams start here.</h1>
        <p class="buy-hero__subtitle">One stability engine. Optional superpowers. Built for restaurants that refuse chaos.</p>
        <div class="buy-hero__buttons">
          <button class="buy-btn buy-btn--primary" type="button">Buy Now</button>
          <button class="buy-btn buy-btn--secondary" type="button">Talk to Sales</button>
        </div>
        <p class="buy-hero__reassurance">No long-term contracts. Cancel anytime.</p>
      </header>

      <!-- STAFF STABILITY ENGINE (CORE PRODUCT) -->
      <section class="buy-core">
        <div class="section-header">
          <h2 class="section-header__title">Staff Stability Engine</h2>
          <p class="section-header__subtitle">The core platform that detects turnover risk before it happens.</p>
        </div>

        <div class="buy-core__price">
          <span class="buy-core__amount">$1,500</span>
          <span class="buy-core__period">/month</span>
        </div>

        <div class="buy-core__includes">
          <p class="buy-core__includes-label">Everything you need to stabilize your team:</p>
          <div class="buy-included__grid">
            <div class="buy-card">
              <span class="buy-card__icon">✓</span>
              <h3 class="buy-card__title">Manager Portal</h3>
              <p class="buy-card__desc">Your command center for team health and stability metrics.</p>
            </div>
            <div class="buy-card">
              <span class="buy-card__icon">✓</span>
              <h3 class="buy-card__title">Staff Portal</h3>
              <p class="buy-card__desc">Where your team checks in and stays connected.</p>
            </div>
            <div class="buy-card">
              <span class="buy-card__icon">✓</span>
              <h3 class="buy-card__title">Action Board</h3>
              <p class="buy-card__desc">Every issue, every next step, zero guesswork.</p>
            </div>
            <div class="buy-card">
              <span class="buy-card__icon">✓</span>
              <h3 class="buy-card__title">7-Step Escalation Ladder</h3>
              <p class="buy-card__desc">Guided interventions that actually prevent turnover.</p>
            </div>
            <div class="buy-card">
              <span class="buy-card__icon">✓</span>
              <h3 class="buy-card__title">Network Intelligence</h3>
              <p class="buy-card__desc">Insights from thousands of restaurants powering your decisions.</p>
            </div>
            <div class="buy-card">
              <span class="buy-card__icon">✓</span>
              <h3 class="buy-card__title">Unlimited Staff</h3>
              <p class="buy-card__desc">No per-seat fees. Your whole team, one price.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- PREMIUM ADD-ONS -->
      <section class="buy-addons buy-addons--premium">
        <div class="section-header">
          <h2 class="section-header__title">Premium Add-Ons</h2>
          <p class="section-header__subtitle">$500/month each · Activate when you're ready</p>
        </div>

        <div class="buy-addons__grid">
          <div class="buy-addon">
            <div class="buy-addon__price">+$500<span>/mo</span></div>
            <h3 class="buy-addon__title">Stable Hire</h3>
            <p class="buy-addon__desc">Predict which candidates will stay before you hire them. Psychological assessment that scores cultural fit and retention probability.</p>
          </div>
          <div class="buy-addon">
            <div class="buy-addon__price">+$500<span>/mo</span></div>
            <h3 class="buy-addon__title">Stable Schedule Builder</h3>
            <p class="buy-addon__desc">See the human cost of your schedule before you publish. Emotional load analysis that prevents burnout before it starts.</p>
          </div>
          <div class="buy-addon">
            <div class="buy-addon__price">+$500<span>/mo</span></div>
            <h3 class="buy-addon__title">House Guardian</h3>
            <p class="buy-addon__desc">Early detection for high-risk issues hidden in team feedback. Continuously scans open-ended comments to quietly flag theft, harassment, substance use, or mutiny. Alerting leaders with context and guidance before problems escalate.</p>
          </div>
        </div>
      </section>

      <!-- OPERATIONAL ADD-ONS -->
      <section class="buy-addons buy-addons--operational">
        <div class="section-header">
          <h2 class="section-header__title">Operational Add-Ons</h2>
          <p class="section-header__subtitle">$200/month each · Streamline the daily grind</p>
        </div>

        <div class="buy-addons__grid">
          <div class="buy-addon">
            <div class="buy-addon__price">+$200<span>/mo</span></div>
            <h3 class="buy-addon__title">Open Shift Marketplace</h3>
            <p class="buy-addon__desc">Post open shifts. Staff claims them. No more phone tag, group texts, or begging.</p>
          </div>
          <div class="buy-addon">
            <div class="buy-addon__price">+$200<span>/mo</span></div>
            <h3 class="buy-addon__title">Shift Swap</h3>
            <p class="buy-addon__desc">Staff-initiated shift trades with manager approval. They handle the logistics, you just approve.</p>
          </div>
        </div>
      </section>

      <!-- HOW ONBOARDING WORKS -->
      <section class="buy-onboarding">
        <div class="section-header">
          <h2 class="section-header__title">You'll be live in under an hour.</h2>
        </div>

        <div class="buy-onboarding__steps">
          <div class="buy-step">
            <span class="buy-step__number">1</span>
            <p class="buy-step__text">Purchase En Place</p>
          </div>
          <div class="buy-step">
            <span class="buy-step__number">2</span>
            <p class="buy-step__text">Complete guided onboarding in the Manager Portal</p>
          </div>
          <div class="buy-step">
            <span class="buy-step__number">3</span>
            <p class="buy-step__text">Import staff or scan QR code</p>
          </div>
          <div class="buy-step">
            <span class="buy-step__number">4</span>
            <p class="buy-step__text">Staff portals go live immediately</p>
          </div>
        </div>

        <p class="buy-onboarding__footer">No consultants. No setup calls. No chaos.</p>
      </section>

      <!-- TRUST & CONTROL -->
      <section class="buy-trust">
        <div class="buy-trust__card">
          <h3 class="buy-trust__title">You Stay in Control</h3>
          <ul class="buy-trust__list">
            <li>You control permissions</li>
            <li>You decide when staff are invited</li>
            <li>Nothing is shared publicly</li>
            <li>You can cancel anytime</li>
          </ul>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="buy-cta">
        <h2 class="buy-cta__title">This isn't software. It's relief.</h2>
        <div class="buy-cta__buttons">
          <button class="buy-btn buy-btn--primary" type="button">Buy Now</button>
          <button class="buy-btn buy-btn--secondary" type="button">Talk to Sales</button>
        </div>
      </section>

    </div>
  `;

  return section;
}