// src/components/ssp.js
import "../styles/components/ssp.scss";
import { openVideoModal } from './videoModal.js';
import { VIDEO_IDS } from './hero.js';

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
          <button class="ssp-btn ssp-btn--primary" type="button" id="ssp-demo-cta">Experience Shift Swap Marketplace</button>
          <a href="/contact" class="ssp-btn ssp-btn--secondary">Book a Demo</a>
<a href="tel:+15134020611" class="ssp-btn ssp-btn--secondary">Call Now</a>
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
            <p class="ssp-how__step-text">Posts shift to team-wide Shift Swap Marketplace</p>
          </div>

          <!-- Step 3 -->
          <div class="ssp-how__step">
            <span class="ssp-how__step-number">3</span>
            <p class="ssp-how__step-text">Colleague accepts → swap request goes to manager</p>
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

      <!-- SCREENSHOT FLOW -->
      <section class="ssp-visual">
        <div class="ssp-visual__flow">
          <div class="ssp-visual__panel">
            <span class="ssp-visual__label">Staff Portal</span>
            <img src="/ss-staff.png" alt="Staff portal showing upcoming shifts with swap request options" class="ssp-visual__img" />
          </div>
          <div class="ssp-visual__panel">
            <span class="ssp-visual__label">Manager Portal</span>
            <img src="/ss-manager.png" alt="Manager portal showing pending swap requests with approve and deny buttons" class="ssp-visual__img" />
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
          <span>LeanOn handles the risk.</span>
          <span class="ssp-cta__title--gold">You just tap approve.</span>
        </h2>
        <div class="ssp-cta__buttons">
          <button class="ssp-btn ssp-btn--primary" type="button" id="ssp-demo-cta-bottom">Experience Shift Swap Portal</button>
          <a href="/contact" class="ssp-btn ssp-btn--secondary">Book a Demo</a>
<a href="tel:+15134020611" class="ssp-btn ssp-btn--secondary">Call Now</a>
        </div>
      </section>

    </div>
  `;

  // Wire up video CTAs
  setTimeout(() => {
    const ctaTop = document.getElementById('ssp-demo-cta');
    const ctaBottom = document.getElementById('ssp-demo-cta-bottom');

    if (ctaTop) {
      ctaTop.addEventListener('click', () => openVideoModal(VIDEO_IDS.ssp));
    }
    if (ctaBottom) {
      ctaBottom.addEventListener('click', () => openVideoModal(VIDEO_IDS.ssp));
    }
  }, 0);

  return section;
}