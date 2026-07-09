// src/components/buy.js
import "../styles/components/buy.scss";
import "../styles/components/pricing.scss"; // reuse .location-selector styling

const API_BASE = "https://enplace-api-v3-9101f20a30b4.herokuapp.com";

// Flat rate per tier (matches pricing.js)
const TIERS = [
  { min: 250, rate: 3 },
  { min: 100, rate: 4 },
  { min: 25,  rate: 5 },
  { min: 1,   rate: 7 },
];

function rateFor(staff) {
  const t = TIERS.find((t) => staff >= t.min);
  return t ? t.rate : 7;
}

export default function Buy() {
  const section = document.createElement("section");
  section.className = "buy";
  section.id = "buy";

  section.innerHTML = `
    <div class="buy__container">

      <!-- HERO -->
      <header class="buy-hero">
        <h1 class="buy-hero__title">Predictable teams start here.</h1>
        <p class="buy-hero__subtitle">One platform, one price per person — affordable whether you’re a team of 6 or an organization of 600.</p>
      </header>

      <!-- PRODUCT + HEADCOUNT -->
      <section class="buy-selector">

        <div class="buy-module buy-module--core buy-module--selected buy-module--locked">
          <div class="buy-module__checkbox buy-module__checkbox--checked">✓</div>
          <div class="buy-module__content">
            <div class="buy-module__header">
              <h3 class="buy-module__title">The LeanOn Platform</h3>
              <span class="buy-module__badge">Everything included</span>
            </div>
            <p class="buy-module__desc">Everything LeanOn does, in one platform — turnover prediction, hiring intelligence, smarter scheduling, and the tools that keep your team stable. Manager Portal, Staff Portal, Action Board, and Network Intelligence all included.</p>
          </div>
          <div class="buy-module__price">Per active staff</div>
        </div>

        <div class="location-selector">
          <label class="location-selector__label">How many active staff?</label>
          <div class="location-selector__controls">
            <input
              type="range"
              class="location-selector__slider"
              min="1"
              max="500"
              value="10"
              id="staffSlider"
            />
            <span class="location-selector__value" id="staffValue">10</span>
          </div>
          <p class="buy-tier-note">Pricing scales with your team — $7/mo per person, dropping to $3 as you grow.</p>
        </div>

      </section>

      <!-- STICKY TOTAL & CTA -->
      <div class="buy-checkout">
        <div class="buy-checkout__total">
          <span class="buy-checkout__label">Monthly Total</span>
          <span class="buy-checkout__amount"><span id="totalPrefix">$</span><span id="totalAmount">70</span><span id="totalSuffix">/mo</span></span>
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
          <h2 class="section-header__title">You’ll be live in under an hour.</h2>
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
        <h2 class="buy-cta__title">This isn’t software. It’s relief.</h2>
        <div class="buy-cta__buttons">
          <button class="buy-btn buy-btn--primary" type="button" onclick="startCheckout()">Buy Now</button>
        </div>
      </section>

    </div>
  `;

  // Wire the headcount slider
  const slider = section.querySelector("#staffSlider");
  if (slider) slider.addEventListener("input", updateTotal);

  // Expose checkout for inline onclick handlers
  window.startCheckout = startCheckout;

  return section;
}

// ============================================
// HEADCOUNT -> PRICE
// ============================================

function updateTotal() {
  const slider = document.getElementById("staffSlider");
  const staffValue = document.getElementById("staffValue");
  const totalAmount = document.getElementById("totalAmount");
  const totalPrefix = document.getElementById("totalPrefix");
  const totalSuffix = document.getElementById("totalSuffix");
  if (!slider) return;

  const staff = parseInt(slider.value, 10) || 1;
  staffValue.textContent = staff;

  const buyButtons = document.querySelectorAll(".buy-btn--primary");

  if (staff >= 500) {
    totalPrefix.style.display = "none";
    totalSuffix.style.display = "none";
    totalAmount.textContent = "Custom";
    buyButtons.forEach((b) => { b.textContent = "Get Custom Pricing"; });
    return;
  }

  totalPrefix.style.display = "";
  totalSuffix.style.display = "";
  totalAmount.textContent = (staff * rateFor(staff)).toLocaleString();
  buyButtons.forEach((b) => { b.textContent = "Buy Now"; });
}

// ============================================
// CHECKOUT
// ============================================

async function startCheckout() {
  const slider = document.getElementById("staffSlider");
  const staffCount = parseInt(slider?.value, 10) || 1;

  // Custom tier (500+) is not self-serve -> route to contact
  if (staffCount >= 500) {
    window.location.href = "/contact";
    return;
  }

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
      body: JSON.stringify({ staff_count: staffCount }),
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
