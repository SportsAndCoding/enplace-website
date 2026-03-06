// src/components/ssb.js
import "../styles/components/ssb.scss";
import { openVideoModal } from './videoModal.js';
import { VIDEO_IDS } from './hero.js';

export default function SSB() {
  const section = document.createElement("section");
  section.className = "ssb";
  section.id = "ssb";

  section.innerHTML = `
    <div class="ssb__container">

      <!-- HERO -->
      <header class="ssb-hero">
        <p class="ssb-hero__eyebrow">Stable Schedule Builder</p>
        <h1 class="ssb-hero__title">Your schedule is a weapon.</h1>
        <p class="ssb-hero__subtitle">
          Stable Schedule Builder tells you who it's about to hurt—before you publish.
        </p>
        <div class="ssb-hero__buttons">
          <button class="ssb-btn ssb-btn--primary" type="button" id="ssb-demo-cta">Experience Stable Schedule Builder</button>
          <a href="https://calendly.com/rob-en-place/en-place-demo" target="_blank" rel="noopener" class="ssb-btn ssb-btn--secondary">Book a Demo</a>
<a href="tel:+15134020611" class="ssb-btn ssb-btn--secondary">Call Now</a>
        </div>

        <!-- Placeholder for Stability Score Dashboard Screenshot -->
        <div class="ssb-hero__visual">
          <img src="/ssb-hero.png" alt="Schedule Stability Score dashboard showing a 74 stability rating with fairness, preference alignment, and fatigue risk metrics" class="ssb-hero__image" />
        </div>
      </header>

      <!-- PROBLEM / SOLUTION -->
      <section class="ssb-problem">
        <div class="ssb-card">
          <h2 class="ssb-problem__title">Managers don't need another scheduling tool.</h2>
          <p class="ssb-problem__lead">They need to know the human cost of the one they just built.</p>
          
          <div class="ssb-problem__flow">
            <p class="ssb-problem__action">Upload any draft.</p>
            <p class="ssb-problem__action">30 seconds later you see exactly:</p>
          </div>

          <ul class="ssb-problem__list">
            <li>Who's getting screwed</li>
            <li>Who's one step from burnout</li>
            <li>Where resentment will start</li>
            <li>Who's most likely to call out</li>
            <li>What happens if you hit "publish" right now</li>
          </ul>

          <p class="ssb-problem__footer">Then you get one-click fixes that actually work.</p>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="ssb-how">
        <div class="section-header">
          <h2 class="section-header__title">How It Works</h2>
        </div>
        <div class="ssb-how__steps">
          <div class="ssb-how__step">
            <span class="ssb-how__step-number">1</span>
            <p class="ssb-how__step-text">Drop in your schedule (Excel, 7Shifts, napkin scan—doesn't matter)</p>
          </div>
          <div class="ssb-how__step">
            <span class="ssb-how__step-number">2</span>
            <p class="ssb-how__step-text">We run it through the Stabilizer Engine</p>
          </div>
          <div class="ssb-how__step">
            <span class="ssb-how__step-number">3</span>
            <p class="ssb-how__step-text">You see the damage in plain English</p>
          </div>
          <div class="ssb-how__step">
            <span class="ssb-how__step-number">4</span>
            <p class="ssb-how__step-text">Accept the fixes or override and we log the context in SSE</p>
          </div>
        </div>
      </section>

      <!-- WHAT YOU ACTUALLY SEE -->
      <section class="ssb-results">
        <div class="section-header">
          <h2 class="section-header__title">What You Actually See</h2>
        </div>

        <!-- Placeholder for Analyzer Results Screenshot -->
        <img src="/ssb-results.png" alt="Top Priority Fixes showing recommended schedule changes with one-click fix buttons" class="ssb-results__image" />

        <div class="ssb-results__features">
          <div class="ssb-results__item">
            <span class="ssb-results__icon">✓</span>
            <span class="ssb-results__text">Schedule Stability Score (0–100)</span>
          </div>
          <div class="ssb-results__item">
            <span class="ssb-results__icon">✓</span>
            <span class="ssb-results__text">Fairness Heatmap – red = someone's getting shafted</span>
          </div>
          <div class="ssb-results__item">
            <span class="ssb-results__icon">✓</span>
            <span class="ssb-results__text">Burnout Risk flags</span>
          </div>
          <div class="ssb-results__item">
            <span class="ssb-results__icon">✓</span>
            <span class="ssb-results__text">"Top 3 moves to fix this week"</span>
          </div>
          <div class="ssb-results__item">
            <span class="ssb-results__icon">✓</span>
            <span class="ssb-results__text">Predicted staff reaction if you publish as-is</span>
          </div>
        </div>
      </section>

      <!-- WHAT STAFF SEE -->
      <section class="ssb-staff">
        <div class="ssb-card ssb-card--centered">
          <h2 class="ssb-staff__title">What Staff See</h2>
          <p class="ssb-staff__lead">Nothing emotional. Just one calm line:</p>
          <p class="ssb-staff__quote">"This week had some tough gaps. Management added context."</p>
        </div>
      </section>

      <!-- CLOSING CTA -->
      <section class="ssb-cta">
        <h2 class="ssb-cta__title">
          <span>We don't write your schedule.</span>
          <span>We just stop it from breaking your team.</span>
        </h2>
        <div class="ssb-cta__buttons">
          <button class="ssb-btn ssb-btn--primary" type="button" id="ssb-demo-cta-bottom">Experience Stable Schedule Builder</button>
          <a href="https://calendly.com/rob-en-place/en-place-demo" target="_blank" rel="noopener" class="ssb-btn ssb-btn--secondary">Book a Demo</a>
<a href="tel:+15134020611" class="ssb-btn ssb-btn--secondary">Call Now</a>
        </div>
      </section>

    </div>
  `;

  // Wire up video CTAs
  setTimeout(() => {
    const ctaTop = document.getElementById('ssb-demo-cta');
    const ctaBottom = document.getElementById('ssb-demo-cta-bottom');

    if (ctaTop) {
      ctaTop.addEventListener('click', () => openVideoModal(VIDEO_IDS.ssb));
    }
    if (ctaBottom) {
      ctaBottom.addEventListener('click', () => openVideoModal(VIDEO_IDS.ssb));
    }
  }, 0);

  return section;
}