// src/components/osm.js
import "../styles/components/osm.scss";
import { openVideoModal } from './videoModal.js';
import { VIDEO_IDS } from './hero.js';

export default function OSM() {
  const section = document.createElement("section");
  section.className = "osm";
  section.id = "osm";

  section.innerHTML = `
    <div class="osm__container">

      <!-- HERO -->
      <header class="osm-hero">
        <p class="osm-hero__eyebrow">Open Shift Marketplace</p>
        <h1 class="osm-hero__title">DoorDash for shifts. Volunteers come to you.</h1>
      </header>

      <!-- THE PANIC (visceral storytelling) -->
      <section class="osm-panic">
        <div class="osm-panic__scene">
          <p class="osm-panic__time">3:47 p.m.</p>
          <p class="osm-panic__text">Billy texts: <span class="osm-panic__quote">"can't come in."</span></p>
          <p class="osm-panic__text">Friday.</p>
          <p class="osm-panic__text">400 covers.</p>
          <p class="osm-panic__text osm-panic__text--red">Chaos is coming.</p>
        </div>

        <div class="osm-panic__chaos">
          <p class="osm-panic__line">You fire off the group text.</p>
          <p class="osm-panic__line osm-panic__line--red">Nothing.</p>
          <p class="osm-panic__line">Three dots.</p>
          <p class="osm-panic__line osm-panic__line--red">Gone.</p>
          <p class="osm-panic__line">You call the usual heroes.</p>
          <p class="osm-panic__line osm-panic__line--red">Voicemail.</p>
          <p class="osm-panic__line osm-panic__line--muted">You're now in the walk-in, trying not to spiral, marinara running down your sleeve because you knocked over the bucket while attempting to breathe.</p>
        </div>

        <p class="osm-panic__universal">This is every restaurant on Earth.</p>
      </section>

      <!-- THE TURN -->
      <section class="osm-turn">
        <p class="osm-turn__hook">Now listen to this.</p>
        
        <div class="osm-turn__action">
          <p class="osm-turn__line">You open En Place.</p>
          <p class="osm-turn__line">Tap <span class="osm-turn__highlight">"Create Open Shift."</span></p>
        </div>
      </section>

      <!-- THE SOLUTION -->
      <section class="osm-solution">
        <div class="osm-card">
          <p class="osm-solution__lead">En Place works exactly like DoorDash,<br/>but for restaurant shifts.</p>
          
          <div class="osm-solution__flow">
            <p class="osm-solution__step">You post the shift.</p>
            <p class="osm-solution__step">We ping every qualified, available team member.</p>
            <p class="osm-solution__step">They raise their hands instantly.</p>
            <p class="osm-solution__step">You pick the best fit.</p>
            <p class="osm-solution__step">The shift gets "delivered" to the person who actually wants it.</p>
          </div>
        </div>
      </section>

      <!-- THE RESULT -->
      <section class="osm-result">
        <p class="osm-result__time">Less than a minute later:</p>
        
        <ul class="osm-result__list">
          <li>Three qualified volunteers.</li>
          <li>One wants the hours.</li>
          <li>One wants the $50 bonus you added.</li>
          <li>One genuinely loves saving the day.</li>
        </ul>

        <p class="osm-result__choice">You choose the stabilizer.</p>
        <p class="osm-result__win">Crisis over before the first ticket even prints.</p>
      </section>

      <!-- THE RELIEF -->
      <section class="osm-relief">
        <div class="osm-relief__grid">
          <p class="osm-relief__item">No begging.</p>
          <p class="osm-relief__item">No guilt.</p>
          <p class="osm-relief__item">No chaos.</p>
          <p class="osm-relief__item">No marinara on your hat.</p>
        </div>
      </section>

      <!-- TAGLINE + CTA -->
      <section class="osm-tagline">
        <h2 class="osm-tagline__title">Open Shift Marketplace</h2>
        <p class="osm-tagline__sub">Turns call-outs from nightmares into volunteers.</p>
        
        <div class="osm-tagline__buttons">
          <button class="osm-btn osm-btn--primary" type="button" id="osm-demo-cta">Experience Open Shift Marketplace</button>
          <a href="https://calendly.com/rob-en-place/en-place-demo" target="_blank" rel="noopener" class="osm-btn osm-btn--secondary">Book a Demo</a>
<a href="tel:+15134020611" class="osm-btn osm-btn--secondary">Call Now</a>
        </div>

        <!-- Manager / Staff screenshot comparison -->
<div class="osm-screenshots" id="osm-mockup-screenshot">
  <div class="osm-screenshots__panel">
    <p class="osm-screenshots__label">What managers see</p>
    <img src="/osm-hero.png" alt="Manager view - Open Shifts dashboard with Post buttons" class="osm-screenshots__img" />
  </div>
  <div class="osm-screenshots__panel">
    <p class="osm-screenshots__label">What staff see</p>
    <img src="/osm-staff.png" alt="Staff view - Available shifts with Grab Shift buttons" class="osm-screenshots__img" />
  </div>
</div>
      </section>

      <!-- CLOSING SECTION -->
      <section class="osm-cta">
        <p class="osm-cta__star">⭐</p>

        
        <div class="osm-cta__quote">
          <p>"Billy calls out sick.</p>
          <p>You click once.</p>
          <p>Three people fight for the shift.</p>
          <p>You go back to prep."</p>
        </div>

        <div class="osm-cta__buttons">
          <button class="osm-btn osm-btn--primary" type="button" id="osm-demo-cta-bottom">Experience Open Shift Marketplace</button>
          <a href="https://calendly.com/rob-en-place/en-place-demo" target="_blank" rel="noopener" class="osm-btn osm-btn--secondary">Book a Demo</a>
<a href="tel:+15134020611" class="osm-btn osm-btn--secondary">Call Now</a>
        </div>
      </section>

    </div>
  `;

  // Wire up video CTAs
  setTimeout(() => {
    const ctaTop = document.getElementById('osm-demo-cta');
    const ctaBottom = document.getElementById('osm-demo-cta-bottom');

    if (ctaTop) {
      ctaTop.addEventListener('click', () => openVideoModal(VIDEO_IDS.osm));
    }
    if (ctaBottom) {
      ctaBottom.addEventListener('click', () => openVideoModal(VIDEO_IDS.osm));
    }
  }, 0);

  return section;
}