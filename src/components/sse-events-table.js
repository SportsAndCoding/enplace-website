// src/components/sse-events-table.js
// Interactive demo of the Active Events Overview table from the SSE platform
// Reskinned to match marketing site aesthetic

export default function SSEEventsTable() {
    const container = document.createElement("div");
    container.className = "sse-events";

    container.innerHTML = `
    <div class="sse-events__wrapper">
      <!-- Section Header -->
      <div class="sse-events__header">
        <h3 class="sse-events__title">Active Events Overview</h3>
      </div>

      <!-- Table -->
      <div class="sse-events__table-container">
        <table class="sse-events__table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Event Type</th>
              <th>Severity</th>
              <th>Current Ladder Step</th>
              <th>Next Action Deadline</th>
              <th>SMA Impact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- Row 1: Critical -->
            <tr class="sse-events__row">
              <td>
                <div class="sse-events__status">
                  <span class="sse-events__status-dot sse-events__status-dot--active"></span>
                  <span class="sse-events__status-label">Active</span>
                </div>
              </td>
              <td class="sse-events__event-type">Dishwashers: Burnout Crisis</td>
              <td>
                <span class="sse-events__severity sse-events__severity--critical">Critical</span>
              </td>
              <td>
                <div class="sse-events__ladder">
                  <span class="sse-events__ladder-step">4</span>
                  <span class="sse-events__ladder-text">1-on-1 Check-ins</span>
                </div>
              </td>
              <td>
                <span class="sse-events__deadline sse-events__deadline--urgent">Due Today</span>
              </td>
              <td>
                <div class="sse-events__sma">
                  <span class="sse-events__sma-icon sse-events__sma-icon--down">▼</span>
                  <span class="sse-events__sma-value">-8</span>
                </div>
              </td>
              <td>
                <button class="sse-events__btn" type="button">View Details</button>
              </td>
            </tr>

            <!-- Row 2: Serious -->
            <tr class="sse-events__row">
              <td>
                <div class="sse-events__status">
                  <span class="sse-events__status-dot sse-events__status-dot--escalated"></span>
                  <span class="sse-events__status-label">Escalated</span>
                </div>
              </td>
              <td class="sse-events__event-type">Runners: Turnover Risk</td>
              <td>
                <span class="sse-events__severity sse-events__severity--serious">Serious</span>
              </td>
              <td>
                <div class="sse-events__ladder">
                  <span class="sse-events__ladder-step">5</span>
                  <span class="sse-events__ladder-text">Support Plan</span>
                </div>
              </td>
              <td>
                <span class="sse-events__deadline sse-events__deadline--soon">Friday</span>
              </td>
              <td>
                <div class="sse-events__sma">
                  <span class="sse-events__sma-icon sse-events__sma-icon--down">▼</span>
                  <span class="sse-events__sma-value">-12</span>
                </div>
              </td>
              <td>
                <button class="sse-events__btn" type="button">View Details</button>
              </td>
            </tr>

            <!-- Row 3: Moderate -->
            <tr class="sse-events__row">
              <td>
                <div class="sse-events__status">
                  <span class="sse-events__status-dot sse-events__status-dot--active"></span>
                  <span class="sse-events__status-label">Active</span>
                </div>
              </td>
              <td class="sse-events__event-type">Servers: Fairness Drift</td>
              <td>
                <span class="sse-events__severity sse-events__severity--moderate">Moderate</span>
              </td>
              <td>
                <div class="sse-events__ladder">
                  <span class="sse-events__ladder-step">3</span>
                  <span class="sse-events__ladder-text">Soft Intervention</span>
                </div>
              </td>
              <td>
                <span class="sse-events__deadline sse-events__deadline--soon">Tomorrow</span>
              </td>
              <td>
                <div class="sse-events__sma">
                  <span class="sse-events__sma-icon sse-events__sma-icon--down">▼</span>
                  <span class="sse-events__sma-value">-5</span>
                </div>
              </td>
              <td>
                <button class="sse-events__btn" type="button">View Details</button>
              </td>
            </tr>

            <!-- Row 4: Mild (Monitoring) -->
            <tr class="sse-events__row">
              <td>
                <div class="sse-events__status">
                  <span class="sse-events__status-dot sse-events__status-dot--monitoring"></span>
                  <span class="sse-events__status-label">Monitoring</span>
                </div>
              </td>
              <td class="sse-events__event-type">Line Cooks: Perception Gap</td>
              <td>
                <span class="sse-events__severity sse-events__severity--mild">Mild</span>
              </td>
              <td>
                <div class="sse-events__ladder">
                  <span class="sse-events__ladder-step">3</span>
                  <span class="sse-events__ladder-text">Soft Intervention</span>
                </div>
              </td>
              <td>
                <span class="sse-events__deadline sse-events__deadline--normal">Monitoring until Friday</span>
              </td>
              <td>
                <div class="sse-events__sma">
                  <span class="sse-events__sma-icon sse-events__sma-icon--neutral">▶</span>
                  <span class="sse-events__sma-value">0</span>
                </div>
              </td>
              <td>
                <button class="sse-events__btn" type="button">View Details</button>
              </td>
            </tr>

            <!-- Row 5: Mild (Monitoring) -->
            <tr class="sse-events__row">
              <td>
                <div class="sse-events__status">
                  <span class="sse-events__status-dot sse-events__status-dot--monitoring"></span>
                  <span class="sse-events__status-label">Monitoring</span>
                </div>
              </td>
              <td class="sse-events__event-type">Bartenders: Schedule Friction</td>
              <td>
                <span class="sse-events__severity sse-events__severity--mild">Mild</span>
              </td>
              <td>
                <div class="sse-events__ladder">
                  <span class="sse-events__ladder-step">2</span>
                  <span class="sse-events__ladder-text">Manager Alert</span>
                </div>
              </td>
              <td>
                <span class="sse-events__deadline sse-events__deadline--normal">in 3 days</span>
              </td>
              <td>
                <div class="sse-events__sma">
                  <span class="sse-events__sma-icon sse-events__sma-icon--down">▼</span>
                  <span class="sse-events__sma-value">-2</span>
                </div>
              </td>
              <td>
                <button class="sse-events__btn" type="button">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Archive Toggle -->
      <div class="sse-events__archive">
        <span class="sse-events__archive-icon">▶</span>
        <span class="sse-events__archive-text">Resolved Events Archive</span>
        <span class="sse-events__archive-count">4</span>
      </div>
    </div>
  `;

    // Add click feedback to buttons (demo only - no actual functionality)
    const buttons = container.querySelectorAll(".sse-events__btn");
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            btn.classList.add("clicked");
            setTimeout(() => btn.classList.remove("clicked"), 200);
        });
    });

    // Archive toggle interaction
    const archive = container.querySelector(".sse-events__archive");
    if (archive) {
        archive.addEventListener("click", () => {
            archive.classList.toggle("expanded");
        });
    }

    return container;
}