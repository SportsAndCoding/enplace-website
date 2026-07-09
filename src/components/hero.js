// src/components/hero.js
import '../styles/components/hero.scss';
import { openVideoModal } from './videoModal.js';

// Vimeo video IDs
export const VIDEO_IDS = {
  home: '1152916924',      // LeanOn-Full-Platform-Demo
  sh: '1152916991',        // LeanOn-Stable-Hire-Demo
  hg: '1152916956',        // LeanOn-House-Guardian-Demo
  ssb: '1152916907',       // LeanOn-Stable-Schedule-Builder-Demo
  osm: '1152916886',       // LeanOn-Open-Shift-Marketplace-Demo
  ssp: '1152916974',       // LeanOn-Shift-Swap-Demo
};

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
        LeanOn is the first Staffing Intelligence Platform built to improve turnover,
      </span>
      <span class="hero__subheader-line">
        cutting hidden turnover costs by up to <strong>60%</strong>.
      </span>
    </p>

    <div class="hero__pillars">
      <div class="hero__pillar">Predict problems early. Stabilize your team. Run Smoother Shifts.</div>
    </div>

    <button class="hero__cta" id="hero-video-cta">Experience LeanOn</button>

    <div class="hero__credibility">
      <div class="hero__credibility-item">
        Built on real emotional data patterns from frontline teams.
      </div>
    </div>
  </div>
`;

  // Wire up the CTA button
  setTimeout(() => {
    const ctaBtn = document.getElementById('hero-video-cta');
    if (ctaBtn) {
      ctaBtn.addEventListener('click', () => {
        openVideoModal(VIDEO_IDS.home);
      });
    }
  }, 0);

  return hero;
}
