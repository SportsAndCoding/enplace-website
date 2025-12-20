// src/components/buy.js
import "../styles/components/buy.scss";

export default function Buy() {
  const section = document.createElement("section");
  section.className = "buy";
  section.id = "buy";

  section.innerHTML = `
    <div class="buy__container">

      <!-- HERO -->
      <header class="buy-hero">
        <h1 class="buy-hero__title">Predictable teams start here.</h1>
        <p class="buy-hero__subtitle">One stability engine. Optional superpowers. Built for restaurants that refuse chaos.</p>
      </header>

      <!-- MODULE SELECTOR -->
      <section class="buy-selector">
        
        <!-- SSE CORE (Required) -->
        <div class="buy-module buy-module--core buy-module--selected buy-module--locked" data-module="sse" data-price="1500">
          <div class="buy-module__checkbox buy-module__checkbox--checked">✓</div>
          <div class="buy-module__content">
            <div class="buy-module__header">
              <h3 class="buy-module__title">Staff Stability Engine</h3>
              <span class="buy-module__badge">Required</span>
            </div>
            <p class="buy-module__desc">The core platform that detects turnover risk before it happens. Includes Manager Portal, Staff Portal, Action Board, 7-Step Escalation Ladder, and Network Intelligence.</p>
          </div>
          <div class="buy-module__price">$1,500<span>/mo</span></div>
        </div>

        <!-- PREMIUM ADD-ONS -->
        <div class="buy-selector__tier">
          <h4 class="buy-selector__tier-label">Premium Add-Ons</h4>
          <span class="buy-selector__tier-price">$500/month each</span>
        </div>

        <div class="buy-module" data-module="stable_hire" data-price="500" onclick="toggleModule(this)">
          <div class="buy-module__checkbox"></div>
          <div class="buy-module__content">
            <h3 class="buy-module__title">Stable Hire</h3>
            <p class="buy-module__desc">Predict which candidates will stay before you hire them. Psychological assessment that scores cultural fit and retention probability.</p>
          </div>
          <div class="buy-module__price">+$500<span>/mo</span></div>
        </div>

        <div class="buy-module" data-module="stable_schedule" data-price="500" onclick="toggleModule(this)">
          <div class="buy-module__checkbox"></div>
          <div class="buy-module__content">
            <h3 class="buy-module__title">Stable Schedule Builder</h3>
            <p class="buy-module__desc">See the human cost of your schedule before you publish. Emotional load analysis that prevents burnout before it starts.</p>
          </div>
          <div class="buy-module__price">+$500<span>/mo</span></div>
        </div>

        <div class="buy-module" data-module="house_guardian" data-price="500" onclick="toggleModule(this)">
          <div class="buy-module__checkbox"></div>
          <div class="buy-module__content">
            <h3 class="buy-module__title">House Guardian</h3>
            <p class="buy-module__desc">Early detection for high-risk issues hidden in team feedback. Continuously scans open-ended comments to quietly flag theft, harassment, substance use, or mutiny. Alerting leaders with context and guidance before problems escalate.</p>
          </div>
          <div class="buy-module__price">+$500<span>/mo</span></div>
        </div>

        <!-- OPERATIONAL ADD-ONS -->
        <div class="buy-selector__tier">
          <h4 class="buy-selector__tier-label">Operational Add-Ons</h4>
          <span class="buy-selector__tier-price">$200/month each</span>
        </div>

        <div class="buy-module" data-module="open_shift" data-price="200" onclick="toggleModule(this)">
          <div class="buy-module__checkbox"></div>
          <div class="buy-module__content">
            <h3 class="buy-module__title">Open Shift Marketplace</h3>
            <p class="buy-module__desc">Post open shifts. Staff claims them. No more phone tag, group texts, or begging.</p>
          </div>
          <div class="buy-module__price">+$200<span>/mo</span></div>
        </div>

        <div class="buy-module" data-module="shift_swap" data-price="200" onclick="toggleModule(this)">
          <div class="buy-module__checkbox"></div>
          <div class="buy-module__content">
            <h3 class="buy-module__title">Shift Swap</h3>
            <p class="buy-module__desc">Staff-initiated shift trades with manager approval. They handle the logistics, you just approve.</p>
          </div>
          <div class="buy-module__price">+$200<span>/mo</span></div>
        </div>

      </section>

      <!-- STICKY TOTAL & CTA -->
      <div class="buy-checkout">
        <div class="buy-checkout__total">
          <span class="buy-checkout__label">Monthly Total</span>
          <span class="buy-checkout__amount">$<span id="totalAmount">1,500</span>/mo</span>
        </div>
        <div class="buy-checkout__actions">
          <button class="buy-btn buy-btn--primary" type="button" onclick="startCheckout()">Buy Now</button>
          <button class="buy-btn buy-btn--secondary" type="button">Talk to Sales</button>
        </div>
        <p class="buy-checkout__reassurance">No long-term contracts. Cancel anytime.</p>
      </div>

      <!-- HOW ONBOARDING WORKS -->
      <section class="buy-onboarding">
        <div class="section-header">
          <h2 class="section-header__title">You'll be live in under an hour.</h2>
        </div>

        <div class="buy-onboarding__steps">
          <div class="buy-step">
            <span class="buy-step__number">1</span>
            <p class="buy-step__text">Purchase En Place</p>
          </div>
          <div class="buy-step">
            <span class="buy-step__number">2</span>
            <p class="buy-step__text">Complete guided onboarding in the Manager Portal</p>
          </div>
          <div class="buy-step">
            <span class="buy-step__number">3</span>
            <p class="buy-step__text">Import staff or scan QR code</p>
          </div>
          <div class="buy-step">
            <span class="buy-step__number">4</span>
            <p class="buy-step__text">Staff portals go live immediately</p>
          </div>
        </div>

        <p class="buy-onboarding__footer">No consultants. No setup calls. No chaos.</p>
      </section>

      <!-- TRUST & CONTROL -->
      <section class="buy-trust">
        <div class="buy-trust__card">
          <h3 class="buy-trust__title">You Stay in Control</h3>
          <ul class="buy-trust__list">
            <li>You control permissions</li>
            <li>You decide when staff are invited</li>
            <li>Nothing is shared publicly</li>
            <li>You can cancel anytime</li>
          </ul>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="buy-cta">
        <h2 class="buy-cta__title">This isn't software. It's relief.</h2>
        <div class="buy-cta__buttons">
          <button class="buy-btn buy-btn--primary" type="button" onclick="startCheckout()">Buy Now</button>
          <button class="buy-btn buy-btn--secondary" type="button">Talk to Sales</button>
        </div>
      </section>

    </div>
  `;

  // Initialize module selection logic
  initModuleSelector();

  return section;
}

// ============================================
// MODULE SELECTOR LOGIC
// ============================================

const API_BASE = 'https://enplace-api-v3-9101f20a30b4.herokuapp.com';

function initModuleSelector() {
  // Make functions globally available
  window.toggleModule = toggleModule;
  window.startCheckout = startCheckout;
  window.updateTotal = updateTotal;
}

function toggleModule(el) {
  // Don't toggle if locked (SSE core)
  if (el.classList.contains('buy-module--locked')) return;

  el.classList.toggle('buy-module--selected');

  const checkbox = el.querySelector('.buy-module__checkbox');
  if (el.classList.contains('buy-module--selected')) {
    checkbox.classList.add('buy-module__checkbox--checked');
    checkbox.textContent = '✓';
  } else {
    checkbox.classList.remove('buy-module__checkbox--checked');
    checkbox.textContent = '';
  }

  updateTotal();
}

function updateTotal() {
  let total = 0;

  document.querySelectorAll('.buy-module--selected').forEach(mod => {
    total += parseInt(mod.dataset.price) || 0;
  });

  document.getElementById('totalAmount').textContent = total.toLocaleString();
}

function getSelectedModules() {
  const modules = [];
  document.querySelectorAll('.buy-module--selected').forEach(mod => {
    modules.push(mod.dataset.module);
  });
  return modules;
}

async function startCheckout() {
  const modules = getSelectedModules();

  // Find all buy buttons and disable them
  document.querySelectorAll('.buy-btn--primary').forEach(btn => {
    btn.disabled = true;
    btn.textContent = 'Preparing checkout...';
  });

  try {
    const response = await fetch(`${API_BASE}/api/checkout/create-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ modules })
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error(data.detail || 'Failed to create checkout');
    }
  } catch (error) {
    console.error('Checkout error:', error);
    alert('Something went wrong. Please try again.');

    document.querySelectorAll('.buy-btn--primary').forEach(btn => {
      btn.disabled = false;
      btn.textContent = 'Buy Now';
    });
  }
}