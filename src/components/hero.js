// src/components/hero.js
import '../styles/components/hero.scss';

export default function Hero() {
  const hero = document.createElement('section');
  hero.className = 'hero';

  hero.innerHTML = `
    <div class="hero__overlay"></div>

    <div class="hero__content">
      <h1 class="hero__title">
        <span class="hero__title-line">Most scheduling tools optimize labor cost.</span>
        <span class="hero__title-line">En Place optimizes human cost.</span>
      </h1>

      <p class="hero__subheader">
        <span class="hero__subheader-line">The future of restaurants starts with how people feel at work.</span>
        <span class="hero__subheader-line">So En Place is building the nation's largest network of staff emotional intelligence</span>
        <span class="hero__subheader-line">to support teams and reduce burnout.</span>
      </p>

      <a href="/experience" class="hero__cta">Experience En Place</a>

      <div class="hero__credibility">
        <div class="hero__credibility-item">Powered by millions of emotional data points from restaurant teams nationwide.</div>
      </div>
    </div>
  `;

  return hero;
}
