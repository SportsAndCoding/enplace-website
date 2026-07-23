// src/components/buy.js
import "../styles/components/buy.scss";

const API_BASE = "https://enplace-api-v3-9101f20a30b4.herokuapp.com";

// Restaurant modular pricing — everything locked as included.
// SSE $1,500 + 3 premium modules $500 each + 2 operational modules $200 each = $3,400/mo
const MODULES = [
  { id: "SSE", name: "Staff Stability Engine",       price: 1500, tier: "core"        },
  { id: "SH",  name: "Stable Hire",                  price: 500,  tier: "premium"     },
  { id: "HG",  name: "House Guardian",               price: 500,  tier: "premium"     },
  { id: "OSM", name: "Open Shift Marketplace",       price: 500,  tier: "premium"     },
  { id: "SSB", name: "Stable Schedule Builder",      price: 200,  tier: "operational" },
  { id: "SSP", name: "Shift Swap Portal",            price: 200,  tier: "operational" },
];

const TOTAL = MODULES.reduce((sum, m) => sum + m.price, 0); // 3400

export default function Buy() {
  const section = document.createElement("section");
  section.className = "buy";
  section.id = "buy";

  section.innerHTML = `
    <div class="buy__container">

      <!-- HERO -->
      <header class="buy-hero">
        <h1 class="buy-hero__title">The LeanOn Platform for Restaurants.</h1>
        <p class="buy-hero__subtitle">Everything included. One flat price per location.</p>
      </header>

      <!-- INCLUDED FEATURES -->
      <section class="buy-selector">
        <div class="buy-module buy-module--core buy-module--selected buy-module--locked">
          <div class="buy-module__checkbox buy-module__checkbox--checked">✓</div>
          <div class="buy-module__content">
            <div class="buy-module__header">
              <h3 class="buy-module__title">The LeanOn Platform for Restaurants</h3>
              <span class="buy-module__badge">Everything included</span>
            </div>
            <p class="buy-module__desc">Turnover prediction, hiring intelligence, smarter scheduling, safety signal detection, and the tools that keep your team stable. Manager Portal, Staff Portal, Action Board, and Network Intelligence all included.</p>
          </div>
          <div class="buy-module__price">$${TOTAL.toLocaleString()}/mo per location</div>
        </div>

        <div class="buy-included">
          <p class="buy-included__label">What you get:</p>
          <ul class="buy-included__list">
            ${MODULES.map(m => `<li><span class="buy-included__check">✓</span> ${m.name}</li>`).join("")}
          </ul>
        </div>

        <div class="buy-multi-location">
          <p><strong>Running multiple locations?</strong> <a href="/contact">Contact us</a> for group pricing.</p>
        </div>
      </section>

      <!-- STICKY TOTAL & CTA -->
      <div class="buy-checkout">
        <div class="buy-checkout__total">
          <span class="buy-checkout__label">Monthly Total</span>
          <span class="buy-checkout__amount">$${TOTAL.toLocaleString()}/mo</span>
        </div>
        <div class="buy-checkout__terms" id="termsWrapper">
          <label class="buy-terms">
            <input type="checkbox" id="agreeTerms" class="buy-terms__checkbox">
            <span class="buy-terms__text">I agree to the <a href="/terms" target="_blank">Terms of Service</a> and <a href="/privacy" target="_blank">Privacy Policy</a></span>
          </label>
        </div>
        <div class="buy-checkout__actions">
          <button class="buy-btn buy-btn--primary" type="button" onclick="startCheckout()">Buy Now</button>
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
            <p class="buy-step__text">Purchase LeanOn</p>
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

      <!-- TRUST -->
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
        </div>
      </section>

    </div>
  `;

  window.startCheckout = startCheckout;
  return section;
}

// ============================================
// CHECKOUT — routes all locked modules to backend
// ============================================
async function startCheckout() {
  const termsCheckbox = document.getElementById("agreeTerms");
  const termsWrapper = document.getElementById("termsWrapper");

  if (!termsCheckbox || !termsCheckbox.checked) {
    termsWrapper?.classList.add("buy-checkout__terms--error");
    termsCheckbox?.focus();
    return;
  }
  termsWrapper?.classList.remove("buy-checkout__terms--error");

  document.querySelectorAll(".buy-btn--primary").forEach((btn) => {
    btn.disabled = true;
    btn.textContent = "Preparing checkout...";
  });

  try {
    const response = await fetch(`${API_BASE}/api/checkout/create-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modules: MODULES.map(m => m.id) }),
    });
    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error(data.detail || "Failed to create checkout");
    }
  } catch (error) {
    console.error("Checkout error:", error);
    alert("Something went wrong. Please try again.");
    document.querySelectorAll(".buy-btn--primary").forEach((btn) => {
      btn.disabled = false;
      btn.textContent = "Buy Now";
    });
  }
}
