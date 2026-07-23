// src/components/sse.js
import "../styles/components/sse.scss";
import SSEDemoCard from "./sse-demo-card.js";
import SSEEventsTable from "./sse-events-table.js";

export default function SSE() {
  const section = document.createElement("section");
  section.className = "sse";
  section.id = "sse";

  section.innerHTML = `
    <div class="sse__container">

      <!-- Header -->
      <header class="sse-header">
        <p class="sse-header__eyebrow">Staff Stability Engine</p>
        <h1 class="sse-header__title">Stability Command Center</h1>
        <p class="sse-header__subtitle">
          Your team's emotional heartbeat. Organized. Clear. Actionable.
          One place to lead from.
        </p>
      </header>

      <!-- Hero Card: Active Events Overview -->
      <div class="sse-hero-card">
        <div class="sse-hero-card__header">
          <h2 class="sse-hero-card__title">What We Surface</h2>
          <p class="sse-hero-card__tagline">
            The signals that predict turnover before it happens. Informed by millions of data points across the LeanOn network.
          </p>
        </div>

        <div class="sse-hero-card__signals">
          <div class="signal-item">
            <span class="signal-item__icon"></span>
            Burnout spikes
          </div>
          <div class="signal-item">
            <span class="signal-item__icon"></span>
            Fairness drift
          </div>
          <div class="signal-item">
            <span class="signal-item__icon"></span>
            Cross-team friction
          </div>
          <div class="signal-item">
            <span class="signal-item__icon"></span>
            Weekend chaos ripple effects
          </div>
          <div class="signal-item">
            <span class="signal-item__icon"></span>
            Role-level fatigue
          </div>
          <div class="signal-item">
            <span class="signal-item__icon"></span>
            Early turnover signals
          </div>
        </div>

        <!-- Interactive Demo Card (injected via JS) -->
        <div class="sse-hero-card__demo" id="sse-demo-mount"></div>

        <p class="sse-hero-card__footer">One table. One scroll. One place to lead from.</p>
      </div>

      <!-- Value Proposition Section -->
      <section class="sse-value-section">
        <div class="section-header">
          <h2 class="section-header__title">Every Issue. Every Next Step. Zero Guesswork.</h2>
          <p class="section-header__subtitle">Everything you need to act decisively.</p>
          <p class="section-header__subtitle">Powered by network-wide outcomes.</p>
          <p class="section-header__subtitle">Tuned to your team's unique fingerprint.</p>
        </div>

        <div class="value-grid">
          <div class="value-item">
            <span class="value-item__icon">✓</span>
            Severity level
          </div>
          <div class="value-item">
            <span class="value-item__icon">✓</span>
            Current step
          </div>
          <div class="value-item">
            <span class="value-item__icon">✓</span>
            Next action
          </div>
          <div class="value-item">
            <span class="value-item__icon">✓</span>
            Deadline
          </div>
          <div class="value-item">
            <span class="value-item__icon">✓</span>
            SMA impact
          </div>
        </div>

        <p class="value-section__footer">This is leadership simplified — not automated.</p>
      </section>

      <!-- Crisis Panel: Events Table -->
      <section class="sse-crisis-section">
        <div class="sse-crisis-content">
          <h2 class="sse-crisis-content__title">When things get critical, clarity gets sharper.</h2>
          <p class="sse-crisis-content__note">Managers with LeanOn don't panic. They execute.</p>
          <p class="sse-crisis-content__note sse-crisis-content__note--muted">Because the system already knows how these crises typically unfold across the network.</p>
        </div>
        
        <!-- Interactive Events Table (injected via JS) -->
        <div class="sse-crisis-section__table" id="sse-events-mount"></div>
      </section>

      <!-- 7-Step Ladder -->
      <section class="sse-ladder-section">
        <div class="sse-ladder-card">
          <h2 class="sse-ladder-card__title">The 7-Step Leadership Ladder</h2>
          
          <div class="ladder-track">
            <div class="ladder-step">
              <span class="ladder-step__number">1</span>
              <span class="ladder-step__label">Detection</span>
            </div>
            <div class="ladder-step">
              <span class="ladder-step__number">2</span>
              <span class="ladder-step__label">Alert</span>
            </div>
            <div class="ladder-step">
              <span class="ladder-step__number">3</span>
              <span class="ladder-step__label">Soft Touch</span>
            </div>
            <div class="ladder-step ladder-step--active">
              <span class="ladder-step__number">4</span>
              <span class="ladder-step__label">1-on-1</span>
            </div>
            <div class="ladder-step">
              <span class="ladder-step__number">5</span>
              <span class="ladder-step__label">Support</span>
            </div>
            <div class="ladder-step">
              <span class="ladder-step__number">6</span>
              <span class="ladder-step__label">Escalate</span>
            </div>
            <div class="ladder-step">
              <span class="ladder-step__number">7</span>
              <span class="ladder-step__label">Retention</span>
            </div>
          </div>

          <p class="sse-ladder-card__description">
            Structured guidance based on real outcomes from hundreds of frontline teams.
            Managers choose the step. LeanOn handles the organization.
          </p>
        </div>
      </section>

      <!-- Why It Works -->
      <section class="sse-why-section">
        <div class="section-header">
          <h2 class="section-header__title">Why It Works</h2>
          <p class="section-header__subtitle">The principles behind stable teams.</p>
        </div>

        <div class="why-grid">
          <div class="why-card">
            <h3 class="why-card__title">Early Warning</h3>
            <p class="why-card__description">
              Problems don't blindside you. You see the drift before it becomes damage.
            </p>
          </div>
          <div class="why-card">
            <h3 class="why-card__title">Human-First</h3>
            <p class="why-card__description">
              We guide decisions. We don't replace judgment. Your instincts, amplified by network-level intelligence.
            </p>
          </div>
          <div class="why-card">
            <h3 class="why-card__title">Scalable Leadership</h3>
            <p class="why-card__description">
              Every manager follows the same playbook. Every team becomes more stable. Every entry makes the network smarter.
            </p>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="sse-cta-section">
        <h2 class="sse-cta__title">
          <span>Most platforms manage labor.</span>
          <span>LeanOn manages the humans who run it.</span>
        </h2>
        <p class="sse-cta__subtitle">
          See the difference stability makes.
        </p>
        <a href="/pricing" class="sse-cta__button">
          Start Leading Better
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </section>

    </div>
  `;

  // Mount the interactive demo card
  const demoMount = section.querySelector("#sse-demo-mount");
  if (demoMount) {
    const demoCard = SSEDemoCard();
    demoMount.appendChild(demoCard);
  }

  // Mount the events table
  const eventsMount = section.querySelector("#sse-events-mount");
  if (eventsMount) {
    const eventsTable = SSEEventsTable();
    eventsMount.appendChild(eventsTable);
  }

  return section;
}