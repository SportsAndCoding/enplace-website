// src/components/hg.js
import "../styles/components/hg.scss";
import { openVideoModal } from './videoModal.js';
import { VIDEO_IDS } from './hero.js';

export default function HG() {
  const section = document.createElement("section");
  section.className = "hg";
  section.id = "hg";

  section.innerHTML = `
    <div class="hg__container">

      <!-- HERO -->
      <header class="hg-hero">
        <div class="hg-hero__image"></div>
        <h1 class="hg-hero__title">Catch the cancer before it spreads.</h1>
        <p class="hg-hero__subtitle">
          House Guardian watches anonymous shift notes. When multiple people report the same ugly pattern, it quietly puts it on leadership's desk.
        </p>
        <div class="hg-hero__buttons">
          <button class="hg-btn hg-btn--primary" type="button" id="hg-demo-cta">Experience En Place</button>
          <button class="hg-btn hg-btn--secondary" type="button">Talk to Sales</button>
        </div>
      </header>

      <!-- PROBLEM SECTION -->
      <section class="hg-problem">
        <div class="hg-glass-card">
          <h2 class="hg-problem__title">Real problems don't come with a memo.</h2>
          <p class="hg-problem__lead">They look like:</p>
          <ul class="hg-problem__list">
            <li>Someone disappearing into the bathroom for 20 minutes every shift</li>
            <li>A cook coming back from break wired or nodding off</li>
            <li>Female staff finding reasons to avoid certain closers</li>
            <li>The walk-in becoming a hookup spot</li>
            <li>A clique freezing out the new guy until he quits</li>
            <li>BOH and FOH ready to throw hands</li>
          </ul>
          <p class="hg-problem__footer">By the time you hear it out loud, you're already down three people and facing a lawyer.</p>
        </div>
      </section>

      <!-- HOUSE GUARDIAN DOESN'T WAIT -->
      <section class="hg-action">
        <div class="hg-glass-card hg-glass-card--centered">
          <h2 class="hg-action__title">House Guardian doesn't wait for a complaint.</h2>
          <p class="hg-action__text">It only speaks when multiple staff say the same thing, anonymously.</p>
          <p class="hg-action__text">No names. No drama. Just the signal:</p>
          <p class="hg-action__quote">"Fix this now or pay later."</p>
          <p class="hg-action__text hg-action__text--muted">Delivered straight to the SSE Action Board where you already live.</p>
        </div>
      </section>

      <!-- WHAT YOU'LL ACTUALLY SEE -->
      <section class="hg-dashboard">
        <div class="section-header">
          <h2 class="section-header__title">What You'll Actually See</h2>
        </div>

        <!-- House Guardian Alert Screenshot -->
        <div class="hg-dashboard__screenshot" id="hg-dashboard-mount">
          <img src="/hg-hero.png" alt="House Guardian detecting a harassment pattern from 4 independent sources" class="hg-dashboard__image" />
        </div>

        <!-- Animated Notes + Gauge -->
        <div class="hg-notes-animation">
          <div class="hg-notes-stack">
            <div class="hg-note hg-note--1"></div>
            <div class="hg-note hg-note--2"></div>
            <div class="hg-note hg-note--3"></div>
            <div class="hg-note hg-note--4"></div>
            <div class="hg-note hg-note--5"></div>
          </div>
          <div class="hg-gauge-burst">
            <div class="hg-gauge">
              <div class="hg-gauge__fill"></div>
            </div>
            <div class="hg-gauge__glow"></div>
          </div>
        </div>

        <!-- Severity Badges -->
        <div class="hg-severity-badges">
          <div class="hg-severity-badge">
            <span class="hg-severity-badge__dot"></span>
            <span class="hg-severity-badge__text">Multiple 20-minute bathroom breaks</span>
          </div>
          <div class="hg-severity-badge">
            <span class="hg-severity-badge__dot"></span>
            <span class="hg-severity-badge__text">Repeated discomfort around closer</span>
          </div>
          <div class="hg-severity-badge">
            <span class="hg-severity-badge__dot"></span>
            <span class="hg-severity-badge__text">Walk-in being used after hours</span>
          </div>
          <div class="hg-severity-badge">
            <span class="hg-severity-badge__dot"></span>
            <span class="hg-severity-badge__text">Targeted hostility toward one staff member</span>
          </div>
          <div class="hg-severity-badge">
            <span class="hg-severity-badge__dot"></span>
            <span class="hg-severity-badge__text">Supervisor making staff uncomfortable</span>
          </div>
        </div>
      </section>

      <!-- WHY OWNERS TURN IT ON -->
      <section class="hg-why">
        <div class="section-header">
          <h2 class="section-header__title">Why Owners Turn It On and Never Turn It Off</h2>
        </div>
        <div class="hg-why__list">
          <div class="hg-why__item">
            <span class="hg-why__icon">✓</span>
            <span class="hg-why__text">Stops walkouts before they happen</span>
          </div>
          <div class="hg-why__item">
            <span class="hg-why__icon">✓</span>
            <span class="hg-why__text">Protects good people who won't snitch</span>
          </div>
          <div class="hg-why__item">
            <span class="hg-why__icon">✓</span>
            <span class="hg-why__text">Keeps the lawyers away</span>
          </div>
          <div class="hg-why__item">
            <span class="hg-why__icon">✓</span>
            <span class="hg-why__text">Zero extra work for anyone</span>
          </div>
          <div class="hg-why__item">
            <span class="hg-why__icon">✓</span>
            <span class="hg-why__text">Sees the shit humans pretend isn't happening</span>
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS (4 Steps with Shield Icons) -->
      <section class="hg-how">
        <div class="section-header">
          <h2 class="section-header__title">How It Works</h2>
        </div>
        <div class="hg-how__steps">
          <!-- Step 1: Slate fill, no stroke -->
          <div class="hg-how__step">
            <div class="hg-shield hg-shield--slate">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <p class="hg-how__step-num">1</p>
            <p class="hg-how__step-text">Staff submit anonymous notes</p>
          </div>

          <!-- Step 2: Slate fill + bordeaux stroke + pulse -->
          <div class="hg-how__step">
            <div class="hg-shield hg-shield--pulse">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <p class="hg-how__step-num">2</p>
            <p class="hg-how__step-text">System spots repeated concerns</p>
          </div>

          <!-- Step 3: Cracked + gold inner glow -->
          <div class="hg-how__step">
            <div class="hg-shield hg-shield--cracked">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <svg class="hg-shield__crack" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75">
                <path d="M12 4 L11 8 L13 10 L10 14 L12 16 L11 20"/>
              </svg>
            </div>
            <p class="hg-how__step-num">3</p>
            <p class="hg-how__step-text">Matches network patterns</p>
          </div>

          <!-- Step 4: Full gold, bordeaux outline -->
          <div class="hg-how__step">
            <div class="hg-shield hg-shield--gold">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <p class="hg-how__step-num">4</p>
            <p class="hg-how__step-text">Alert in SSE Action Board</p>
          </div>
        </div>
      </section>

      <!-- ONE-LINE CLOSER -->
      <section class="hg-cta">
        <div class="hg-glass-card hg-glass-card--centered">
          <h2 class="hg-cta__title">House Guardian doesn't name names.</h2>
          <p class="hg-cta__subtitle">It just keeps the house from burning down.</p>
          <div class="hg-cta__buttons">
            <button class="hg-btn hg-btn--primary" type="button" id="hg-demo-cta-bottom">Experience En Place</button>
            <button class="hg-btn hg-btn--secondary" type="button">Talk to Sales</button>
          </div>
        </div>
      </section>

    </div>
  `;

  // Wire up video CTAs
  setTimeout(() => {
    const ctaTop = document.getElementById('hg-demo-cta');
    const ctaBottom = document.getElementById('hg-demo-cta-bottom');

    if (ctaTop) {
      ctaTop.addEventListener('click', () => openVideoModal(VIDEO_IDS.hg));
    }
    if (ctaBottom) {
      ctaBottom.addEventListener('click', () => openVideoModal(VIDEO_IDS.hg));
    }
  }, 0);

  return section;
}