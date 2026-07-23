// src/components/sh.js
import "../styles/components/sh.scss";
import SHReportDemo from "./sh-report-demo.js";
import { openVideoModal } from './videoModal.js';
import { VIDEO_IDS } from './hero.js';

export default function SH() {
  const section = document.createElement("section");
  section.className = "sh";
  section.id = "sh";

  section.innerHTML = `
    <div class="sh__container">

      <!-- HERO -->
      <header class="sh-hero">
        <div class="sh-hero__content">
          <p class="sh-hero__eyebrow">Stable Hire</p>
          <h1 class="sh-hero__title">Hire people who stay.</h1>
          <p class="sh-hero__subtitle">
            Stable Hire predicts who survives the 90-day cliff—using every shift, every team, every exit in the LeanOn network.
          </p>
          <div class="sh-hero__buttons">
            <button class="sh-btn sh-btn--primary" type="button" id="sh-demo-cta">Experience Stable Hire</button>
            <a href="/contact" class="sh-btn sh-btn--secondary">Book a Demo</a>
<a href="tel:+15134020611" class="sh-btn sh-btn--secondary">Call Now</a>
          </div>
        </div>

        <!-- Split View: Resume vs Report -->
        <div class="sh-hero__visual">
          <div class="sh-hero__split">
            <!-- Left: Plain Resume -->
            <div class="sh-resume">
              <div class="sh-resume__header">
                <div class="sh-resume__avatar"></div>
                <div class="sh-resume__name">Maria Santos</div>
                <div class="sh-resume__role">Server · 3 years experience</div>
              </div>
              <div class="sh-resume__section">
                <div class="sh-resume__label">Experience</div>
                <div class="sh-resume__item">
                  <span class="sh-resume__company">Olive Garden</span>
                  <span class="sh-resume__position">Server (2021–2024)</span>
                </div>
                <div class="sh-resume__item">
                  <span class="sh-resume__company">Chili's</span>
                  <span class="sh-resume__position">Host → Server (2019–2021)</span>
                </div>
              </div>
              <div class="sh-resume__section">
                <div class="sh-resume__label">Availability</div>
                <div class="sh-resume__text">Mon–Fri evenings, weekends flexible</div>
              </div>
              <div class="sh-resume__section">
                <div class="sh-resume__label">References</div>
                <div class="sh-resume__text sh-resume__text--muted">Available upon request</div>
              </div>
            </div>

            <!-- Divider -->
            <div class="sh-hero__divider">
              <span class="sh-hero__divider-icon">→</span>
            </div>

            <!-- Right: Predictive Report Preview -->
            <div class="sh-report-preview">
              <div class="sh-report-preview__header">
                <span class="sh-report-preview__badge">Stable Hire Report</span>
                <span class="sh-report-preview__score sh-report-preview__score--strong">89</span>
              </div>
              <div class="sh-report-preview__row">
                <span class="sh-report-preview__label">Stability Impact</span>
                <span class="sh-report-preview__value sh-report-preview__value--positive">Strengthens team</span>
              </div>
              <div class="sh-report-preview__row">
                <span class="sh-report-preview__label">90-Day Survival</span>
                <span class="sh-report-preview__value">93%</span>
              </div>
              <div class="sh-report-preview__row">
                <span class="sh-report-preview__label">Your location avg</span>
                <span class="sh-report-preview__value sh-report-preview__value--muted">58%</span>
              </div>
              <div class="sh-report-preview__row">
                <span class="sh-report-preview__label">Top match</span>
                <span class="sh-report-preview__value">Longest-tenured servers</span>
              </div>
              <div class="sh-report-preview__action">
                <button class="sh-report-preview__hire-btn" type="button">Hire Maria</button>
              </div>
            </div>
          </div>
          <div class="sh-hero__badge">Millions of shift-level data points · LeanOn Network</div>
        </div>
      </header>

      <!-- PROBLEM SECTION -->
      <section class="sh-problem">
        <h2 class="sh-problem__title">Most hires quit before week 12.</h2>
        <p class="sh-problem__line">"Gut-feel" can't see why.</p>
        <p class="sh-problem__line sh-problem__line--gold">The network can.</p>
      </section>

      <!-- HOW IT WORKS -->
      <section class="sh-how">
        <div class="section-header">
          <h2 class="section-header__title">How It Works</h2>
        </div>
        <div class="sh-how__steps">
          <div class="sh-how__step">
            <span class="sh-how__step-number">1</span>
            <p class="sh-how__step-text">Manager answers 8 questions during the interview</p>
          </div>
          <div class="sh-how__step">
            <span class="sh-how__step-number">2</span>
            <p class="sh-how__step-text">We run it through the network model</p>
            <p class="sh-how__step-note">Pattern-matched against 1.1 M+ shift signals across hundreds of frontline teams</p>
          </div>
          <div class="sh-how__step">
            <span class="sh-how__step-number">3</span>
            <p class="sh-how__step-text">Instant report: will they stay or won't they?</p>
          </div>
        </div>
      </section>

      <!-- THE REPORT -->
      <section class="sh-report-section">
        <div class="section-header">
          <h2 class="section-header__title">The Report</h2>
        </div>
        
        <!-- Interactive Report Demo (injected via JS) -->
        <div class="sh-report-section__demo" id="sh-report-mount"></div>

        <p class="sh-report-section__footer">Every metric trained on the largest frontline stability dataset in existence.</p>
      </section>

      <!-- WHY MANAGERS USE IT -->
      <section class="sh-why">
        <div class="section-header">
          <h2 class="section-header__title">Why Managers Use It Daily</h2>
        </div>
        <div class="sh-why__list">
          <div class="sh-why__item">
            <span class="sh-why__icon">✓</span>
            <span class="sh-why__text">Feels like a sixth sense, backed by hard data</span>
          </div>
          <div class="sh-why__item">
            <span class="sh-why__icon">✓</span>
            <span class="sh-why__text">Candidates never know they're being evaluated</span>
          </div>
          <div class="sh-why__item">
            <span class="sh-why__icon">✓</span>
            <span class="sh-why__text">Same standard from location 1 to location 50</span>
          </div>
          <div class="sh-why__item">
            <span class="sh-why__icon">✓</span>
            <span class="sh-why__text">Works day one, no calibration</span>
          </div>
          <div class="sh-why__item">
            <span class="sh-why__icon">✓</span>
            <span class="sh-why__text">Sees patterns no human ever could</span>
          </div>
        </div>
      </section>

      <!-- FOUR FEATURE CARDS -->
      <section class="sh-features">
        <div class="sh-features__grid">
          <div class="sh-feature-card">
            <h3 class="sh-feature-card__title">Stability Impact Score</h3>
            <p class="sh-feature-card__desc">Network-trained</p>
          </div>
          <div class="sh-feature-card">
            <h3 class="sh-feature-card__title">90-Day Survival Prediction</h3>
            <p class="sh-feature-card__desc">Based on over 50,000 trials</p>
          </div>
          <div class="sh-feature-card">
            <h3 class="sh-feature-card__title">Emotional Fingerprint</h3>
            <p class="sh-feature-card__desc">Comparisons to real people</p>
          </div>
          <div class="sh-feature-card">
            <h3 class="sh-feature-card__title">One-Tap Platform Onboarding</h3>
            <p class="sh-feature-card__desc">Roster + portal invite, instantly</p>
          </div>
        </div>
      </section>

      <!-- BOTTOM CTA -->
      <section class="sh-cta">
        <h2 class="sh-cta__title">The best hire you'll ever make is now the most predictable one.</h2>
        <div class="sh-cta__buttons">
          <button class="sh-btn sh-btn--primary" type="button" id="sh-demo-cta-bottom">Experience Stable Hire</button>
          <a href="/contact" class="sh-btn sh-btn--secondary">Book a Demo</a>
<a href="tel:+15134020611" class="sh-btn sh-btn--secondary">Call Now</a>
        </div>
      </section>

    </div>
  `;

  // Mount the interactive report demo
  const reportMount = section.querySelector("#sh-report-mount");
  if (reportMount) {
    const reportDemo = SHReportDemo();
    reportMount.appendChild(reportDemo);
  }

  // Wire up video CTAs
  setTimeout(() => {
    const ctaTop = document.getElementById('sh-demo-cta');
    const ctaBottom = document.getElementById('sh-demo-cta-bottom');

    if (ctaTop) {
      ctaTop.addEventListener('click', () => openVideoModal(VIDEO_IDS.sh));
    }
    if (ctaBottom) {
      ctaBottom.addEventListener('click', () => openVideoModal(VIDEO_IDS.sh));
    }
  }, 0);

  return section;
}