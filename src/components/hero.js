// src/components/hero.js
import '../styles/components/hero.scss';

export default function Hero() {
  const hero = document.createElement('section');
  hero.className = 'hero';

  hero.innerHTML = `
  <div class="hero__overlay"></div>

  <div class="hero__content">
    <h1 class="hero__title">
      <span class="hero__title-line">Stop losing money to burnout</span>
      <span class="hero__title-line">and staffing chaos.</span>
    </h1>

    <p class="hero__subheader">
      <span class="hero__subheader-line">
        En Place is the first Staffing Intelligence Platform for restaurants,
      </span>
      <span class="hero__subheader-line">
        cutting hidden turnover costs by up to <strong>60%</strong>.
      </span>
    </p>

    <div class="hero__pillars">
      <div class="hero__pillar">Predict problems early — spot burnout and flight risk before they walk out.</div>
      <div class="hero__pillar">Stabilize your team — keep core staff longer and reduce constant rehiring.</div>
      <div class="hero__pillar">Run smoother shifts — fewer call-ins, cleaner schedules, less overtime panic.</div>
    </div>

    <a href="/experience" class="hero__cta">Watch the Demo</a>

    <div class="hero__credibility">
      <div class="hero__credibility-item">
        Built on real emotional data patterns from thousands of restaurant shifts.
      </div>
    </div>
  </div>
`;

  return hero;
}
