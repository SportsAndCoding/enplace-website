// src/components/sh-report-demo.js
// Interactive demo of the Stable Hire Report from the actual platform
// Reskinned to match marketing site aesthetic

export default function SHReportDemo() {
    const container = document.createElement("div");
    container.className = "sh-report-demo";

    container.innerHTML = `
    <div class="sh-report-demo__grid">
      
      <!-- Section 1: Emotional Fingerprint -->
      <div class="sh-report-demo__card">
        <div class="sh-report-demo__header">
          <span class="sh-report-demo__section-num">Section 1</span>
          <h3 class="sh-report-demo__section-title">Emotional Fingerprint</h3>
        </div>
        <p class="sh-report-demo__desc">Behavior Signature based on similar in-network candidates</p>

        <div class="sh-fingerprint">
          <div class="sh-fingerprint__bar">
            <span class="sh-fingerprint__label">Autonomy</span>
            <div class="sh-fingerprint__track">
              <div class="sh-fingerprint__fill" style="width: 78%"></div>
            </div>
            <span class="sh-fingerprint__value">78%</span>
          </div>
          <div class="sh-fingerprint__bar">
            <span class="sh-fingerprint__label">Adaptability</span>
            <div class="sh-fingerprint__track">
              <div class="sh-fingerprint__fill sh-fingerprint__fill--high" style="width: 88%"></div>
            </div>
            <span class="sh-fingerprint__value">88%</span>
          </div>
          <div class="sh-fingerprint__bar">
            <span class="sh-fingerprint__label">Conflict Tolerance</span>
            <div class="sh-fingerprint__track">
              <div class="sh-fingerprint__fill sh-fingerprint__fill--warning" style="width: 62%"></div>
            </div>
            <span class="sh-fingerprint__value">62%</span>
          </div>
          <div class="sh-fingerprint__bar">
            <span class="sh-fingerprint__label">Authority Response</span>
            <div class="sh-fingerprint__track">
              <div class="sh-fingerprint__fill" style="width: 71%"></div>
            </div>
            <span class="sh-fingerprint__value">71%</span>
          </div>
          <div class="sh-fingerprint__bar">
            <span class="sh-fingerprint__label">Team Orientation</span>
            <div class="sh-fingerprint__track">
              <div class="sh-fingerprint__fill sh-fingerprint__fill--high" style="width: 85%"></div>
            </div>
            <span class="sh-fingerprint__value">85%</span>
          </div>
          <div class="sh-fingerprint__bar">
            <span class="sh-fingerprint__label">Feedback Reception</span>
            <div class="sh-fingerprint__track">
              <div class="sh-fingerprint__fill" style="width: 74%"></div>
            </div>
            <span class="sh-fingerprint__value">74%</span>
          </div>
        </div>

        <div class="sh-fingerprint__interpretation">
          <p>High adaptability. Strong team instinct. Moderate conflict tolerance — may avoid confrontation rather than address it. Responds well to direct feedback.</p>
        </div>
      </div>

      <!-- Section 2: Persona Probability -->
      <div class="sh-report-demo__card">
        <div class="sh-report-demo__header">
          <span class="sh-report-demo__section-num">Section 2</span>
          <h3 class="sh-report-demo__section-title">Persona Probability</h3>
        </div>
        <p class="sh-report-demo__desc">Which archetype does this candidate most resemble?</p>

        <div class="sh-persona">
          <div class="sh-persona__item sh-persona__item--primary">
            <div class="sh-persona__bar" style="width: 64%"></div>
            <div class="sh-persona__content">
              <div class="sh-persona__name">Steady Operator</div>
              <div class="sh-persona__desc">Shows up, does the work, doesn't create drama</div>
            </div>
            <div class="sh-persona__percent">64%</div>
          </div>
          <div class="sh-persona__item">
            <div class="sh-persona__bar sh-persona__bar--quiet" style="width: 22%"></div>
            <div class="sh-persona__content">
              <div class="sh-persona__name">Quiet Contributor</div>
              <div class="sh-persona__desc">Reliable but may not speak up when struggling</div>
            </div>
            <div class="sh-persona__percent">22%</div>
          </div>
          <div class="sh-persona__item">
            <div class="sh-persona__bar sh-persona__bar--social" style="width: 11%"></div>
            <div class="sh-persona__content">
              <div class="sh-persona__name">Social Navigator</div>
              <div class="sh-persona__desc">Reads the room well, may over-index on relationships</div>
            </div>
            <div class="sh-persona__percent">11%</div>
          </div>
          <div class="sh-persona__item">
            <div class="sh-persona__bar sh-persona__bar--risk" style="width: 3%"></div>
            <div class="sh-persona__content">
              <div class="sh-persona__name">Flight Risk</div>
              <div class="sh-persona__desc">Low probability of early departure pattern</div>
            </div>
            <div class="sh-persona__percent">3%</div>
          </div>
        </div>
      </div>

    </div>

    <!-- Section 3: Network Similarity (Full Width) -->
    <div class="sh-report-demo__card sh-report-demo__card--full">
      <div class="sh-report-demo__header">
        <span class="sh-report-demo__section-num">Section 3</span>
        <h3 class="sh-report-demo__section-title">Network Similarity</h3>
      </div>
      <p class="sh-report-demo__desc">How does this candidate compare to your existing staff?</p>

      <div class="sh-network">
        <div class="sh-network__item sh-network__item--positive">
          <div class="sh-network__group">Top Performers</div>
          <div class="sh-network__match">74% match</div>
          <div class="sh-network__insight">Strong overlap with your most stable staff</div>
        </div>
        <div class="sh-network__item sh-network__item--neutral">
          <div class="sh-network__group">Early Churners</div>
          <div class="sh-network__match">18% match</div>
          <div class="sh-network__insight">Low similarity to past quick departures</div>
        </div>
        <div class="sh-network__item sh-network__item--neutral">
          <div class="sh-network__group">Conflict-Prone</div>
          <div class="sh-network__match">12% match</div>
          <div class="sh-network__insight">Unlikely to generate interpersonal friction</div>
        </div>
      </div>

      <div class="sh-network__summary">
        <p>Maria patterns closely with your server veterans. Her fingerprint is 74% similar to employees who've stayed 12+ months.</p>
      </div>
    </div>
  `;

    // Add subtle hover interactions to bars
    const fingerprintBars = container.querySelectorAll(".sh-fingerprint__bar");
    fingerprintBars.forEach((bar) => {
        bar.addEventListener("mouseenter", () => {
            bar.classList.add("hovered");
        });
        bar.addEventListener("mouseleave", () => {
            bar.classList.remove("hovered");
        });
    });

    return container;
}