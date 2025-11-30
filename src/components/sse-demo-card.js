// src/components/sse-demo-card.js
// Interactive demo of the Crisis Card from the actual SSE platform
// Reskinned to match marketing site aesthetic

export default function SSEDemoCard() {
  const demo = document.createElement("div");
  demo.className = "sse-demo";

  demo.innerHTML = `
    <div class="sse-demo-card">
      <!-- Header -->
      <div class="sse-demo-card__header">
        <div class="sse-demo-card__meta">
          <span class="sse-demo-card__id">EVT-2025-047</span>
          <h3 class="sse-demo-card__title">Burnout Crisis</h3>
          <p class="sse-demo-card__role">Dishwashers · Carlos M., Maria L.</p>
        </div>
        <span class="sse-demo-card__severity sse-demo-card__severity--critical">
          Critical · 81
        </span>
      </div>

      <!-- 7-Step Escalation Ladder -->
      <div class="sse-demo-ladder">
        <p class="sse-demo-ladder__label">7-Step Escalation Ladder</p>
        <div class="sse-demo-ladder__track">
          <div class="sse-demo-ladder__step sse-demo-ladder__step--completed">
            <div class="sse-demo-ladder__node">✓</div>
            <span class="sse-demo-ladder__name">Detection</span>
          </div>
          <div class="sse-demo-ladder__step sse-demo-ladder__step--completed">
            <div class="sse-demo-ladder__node">✓</div>
            <span class="sse-demo-ladder__name">Alert</span>
          </div>
          <div class="sse-demo-ladder__step sse-demo-ladder__step--completed">
            <div class="sse-demo-ladder__node">✓</div>
            <span class="sse-demo-ladder__name">Soft Touch</span>
          </div>
          <div class="sse-demo-ladder__step sse-demo-ladder__step--current">
            <div class="sse-demo-ladder__node">☕</div>
            <span class="sse-demo-ladder__name">1-on-1</span>
          </div>
          <div class="sse-demo-ladder__step sse-demo-ladder__step--future">
            <div class="sse-demo-ladder__node">📋</div>
            <span class="sse-demo-ladder__name">Support Plan</span>
          </div>
          <div class="sse-demo-ladder__step sse-demo-ladder__step--future">
            <div class="sse-demo-ladder__node">⬆️</div>
            <span class="sse-demo-ladder__name">Escalate</span>
          </div>
          <div class="sse-demo-ladder__step sse-demo-ladder__step--future">
            <div class="sse-demo-ladder__node">🛡️</div>
            <span class="sse-demo-ladder__name">Retention</span>
          </div>
        </div>
      </div>

      <!-- Info Rows -->
      <div class="sse-demo-info">
        <div class="sse-demo-info__row">
          <span class="sse-demo-info__label">Next Action</span>
          <span class="sse-demo-info__value">Schedule 1-on-1 with Carlos M.</span>
        </div>
        <div class="sse-demo-info__row">
          <span class="sse-demo-info__label">Deadline</span>
          <span class="sse-demo-info__value sse-demo-info__value--urgent">Today</span>
        </div>
        <div class="sse-demo-info__row">
          <span class="sse-demo-info__label">Observation Window</span>
          <span class="sse-demo-info__value">Day 4 of 7 · Next eval: Friday</span>
        </div>
        <div class="sse-demo-info__row">
          <span class="sse-demo-info__label">SMA Impact</span>
          <span class="sse-demo-info__value sse-demo-info__value--negative">▼ -8 points</span>
        </div>
      </div>

      <!-- Action Button -->
      <div class="sse-demo-actions">
        <button class="sse-demo-actions__btn" type="button">
          <span class="sse-demo-actions__icon">☕</span>
          Schedule Check-in
        </button>
      </div>
    </div>
  `;

  // Interactive hover states are handled via CSS
  // Add subtle click feedback for the button
  const btn = demo.querySelector(".sse-demo-actions__btn");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      // Pulse animation on click for demo purposes
      btn.classList.add("clicked");
      setTimeout(() => btn.classList.remove("clicked"), 300);
    });
  }

  return demo;
}