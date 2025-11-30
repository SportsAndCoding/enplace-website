// src/components/ssp.js
import "../styles/components/ssp.scss";

export default function SSP() {
    const section = document.createElement("section");
    section.className = "ssp";
    section.id = "ssp";

    section.innerHTML = `
    <div class="ssp__container">

      <!-- HERO -->
      <header class="ssp-hero">
        <p class="ssp-hero__eyebrow">Shift Swap Portal</p>
        <h1 class="ssp-hero__title">Staff swap shifts. You just tap approve.</h1>
        <div class="ssp-hero__buttons">
          <button class="ssp-btn ssp-btn--primary" type="button">30-sec Demo</button>
          <button class="ssp-btn ssp-btn--secondary" type="button">Talk to Sales</button>
        </div>
      </header>

      <!-- MAIN SECTION: The Problem -->
      <section class="ssp-problem">
        <div class="ssp-card">
          <div class="ssp-problem__list">
            <p class="ssp-problem__item">No more "hey can you take my Friday" texts at 2 a.m.</p>
            <p class="ssp-problem__item">No more verbal deals that disappear.</p>
            <p class="ssp-problem__item">No more accidental overtime surprises.</p>
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="ssp-how">
        <div class="section-header">
          <h2 class="section-header__title">How it works – 4 taps total</h2>
        </div>

        <div class="ssp-how__steps">
          <!-- Step 1 -->
          <div class="ssp-how__step">
            <span class="ssp-how__step-number">1</span>
            <p class="ssp-how__step-text">Staff picks the shift they want to give away (inside their portal)</p>
          </div>

          <!-- Step 2 -->
          <div class="ssp-how__step">
            <span class="ssp-how__step-number">2</span>
            <p class="ssp-how__step-text">Offers it to another qualified person (or system suggests)</p>
          </div>

          <!-- Step 3 -->
          <div class="ssp-how__step">
            <span class="ssp-how__step-number">3</span>
            <div class="ssp-how__step-content">
              <p class="ssp-how__step-text">Both agree → En Place instantly checks:</p>
              <ul class="ssp-how__checks">
                <li>Overtime risk</li>
                <li>Burnout risk</li>
                <li>Fairness impact</li>
                <li>Turnaround rules</li>
                <li>Skill match</li>
              </ul>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="ssp-how__step">
            <span class="ssp-how__step-number">4</span>
            <div class="ssp-how__step-content">
              <p class="ssp-how__step-text">Clean request lands in your SSE Action Board with green/red flags</p>
              <p class="ssp-how__step-note">One-click approve or deny. Schedule updates automatically.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SPLIT SCREENSHOT PLACEHOLDER -->
      <section class="ssp-visual">
        <div class="ssp-placeholder" id="ssp-screenshot">
          <div class="ssp-placeholder__content">
            <span class="ssp-placeholder__icon">📱</span>
            <span class="ssp-placeholder__text">Split screenshot</span>
            <span class="ssp-placeholder__note">Left: Staff portal swap screen | Right: Manager Action Board request card with approve/deny buttons</span>
          </div>
        </div>
      </section>

      <!-- WHAT MANAGERS GET -->
      <section class="ssp-benefits">
        <div class="ssp-benefits__group">
          <h3 class="ssp-benefits__title">What managers actually get</h3>
          <div class="ssp-benefits__list">
            <div class="ssp-benefits__item">
              <span class="ssp-benefits__icon">✓</span>
              <span class="ssp-benefits__text">90% fewer interruptions</span>
            </div>
            <div class="ssp-benefits__item">
              <span class="ssp-benefits__icon">✓</span>
              <span class="ssp-benefits__text">Zero undocumented trades</span>
            </div>
            <div class="ssp-benefits__item">
              <span class="ssp-benefits__icon">✓</span>
              <span class="ssp-benefits__text">No surprise labor spikes</span>
            </div>
            <div class="ssp-benefits__item">
              <span class="ssp-benefits__icon">✓</span>
              <span class="ssp-benefits__text">Fairness and stability protected</span>
            </div>
          </div>
        </div>

        <div class="ssp-benefits__group">
          <h3 class="ssp-benefits__title">What staff get</h3>
          <p class="ssp-benefits__summary">A dead-simple way to trade shifts without begging or breaking rules.</p>
        </div>
      </section>

      <!-- CLOSING CTA -->
      <section class="ssp-cta">
        <h2 class="ssp-cta__title">
          <span>Staff handle the conversation.</span>
          <span>En Place handles the risk.</span>
          <span class="ssp-cta__title--gold">You just tap approve.</span>
        </h2>
        <div class="ssp-cta__buttons">
          <button class="ssp-btn ssp-btn--primary" type="button">Watch 30 seconds</button>
          <button class="ssp-btn ssp-btn--secondary" type="button">Talk to Sales</button>
        </div>
      </section>

    </div>
  `;

    return section;
}