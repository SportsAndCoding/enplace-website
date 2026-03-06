// src/components/webinars.js
import "../styles/components/webinars.scss";

const API_BASE = 'https://enplace-api-v3-9101f20a30b4.herokuapp.com';

export default function Webinars() {
  const section = document.createElement("section");
  section.className = "webinars";
  section.id = "webinars";

  section.innerHTML = `
    <div class="webinars__container">

      <!-- HERO -->
      <header class="webinars-hero">
        <p class="webinars-hero__eyebrow">Free Live Sessions</p>
        <h1 class="webinars-hero__title">The math behind ending<br>restaurant turnover.</h1>
        <p class="webinars-hero__subtitle">60-minute live sessions for restaurant operators who are done accepting 80% annual turnover as a cost of doing business. No fluff. Real data. Actionable frameworks.</p>
      </header>

      <!-- UPCOMING WEBINAR FEATURE -->
      <div class="webinars__featured" id="featuredWebinar">
        <div class="webinars__featured-loading">
          <div class="webinars__spinner"></div>
          <p>Loading upcoming sessions...</p>
        </div>
      </div>

      <!-- WHAT YOU'LL LEARN -->
      <section class="webinars-learn">
        <div class="webinars-learn__header">
          <h2 class="webinars-learn__title">What every session covers</h2>
          <p class="webinars-learn__subtitle">Built around the same framework that reduced network-wide turnover from 91% to 51%.</p>
        </div>
        <div class="webinars-learn__grid">
          <div class="webinars-learn__item">
            <span class="webinars-learn__icon">📊</span>
            <h3>The Real Cost of Turnover</h3>
            <p>Why your P&L is missing $420K–$720K in annual turnover costs — and how to calculate your restaurant's exact number.</p>
          </div>
          <div class="webinars-learn__item">
            <span class="webinars-learn__icon">🧠</span>
            <h3>Behavioral Fingerprinting</h3>
            <p>How En Place tracks six behavioral dimensions to identify flight risk 2–6 weeks before anyone hands in their notice.</p>
          </div>
          <div class="webinars-learn__item">
            <span class="webinars-learn__icon">🔒</span>
            <h3>Anonymous by Architecture</h3>
            <p>Why anonymity is the product — and how building trust with staff is the single most important driver of data quality.</p>
          </div>
          <div class="webinars-learn__item">
            <span class="webinars-learn__icon">📈</span>
            <h3>Network Intelligence</h3>
            <p>How the En Place network turns shared anonymized data into benchmarks that benefit every operator from day one.</p>
          </div>
        </div>
      </section>

      <!-- REGISTRATION MODAL -->
      <div class="webinar-modal-overlay" id="registrationOverlay" onclick="closeRegistrationModal(event)">
        <div class="webinar-modal" id="registrationModal">
          <button class="webinar-modal__close" type="button" onclick="closeRegistrationModal(null, true)">×</button>

          <div class="webinar-modal__header" id="modalHeader">
            <!-- Populated dynamically -->
          </div>

          <div id="registrationFormWrapper">
            <form class="webinar-form" id="webinarForm" onsubmit="submitRegistration(event)">
              <div class="webinar-form__row">
                <div class="webinar-form__field">
                  <label class="webinar-form__label">First Name *</label>
                  <input type="text" id="regFirstName" class="webinar-form__input" required autocomplete="given-name" />
                </div>
                <div class="webinar-form__field">
                  <label class="webinar-form__label">Last Name *</label>
                  <input type="text" id="regLastName" class="webinar-form__input" required autocomplete="family-name" />
                </div>
              </div>
              <div class="webinar-form__field">
                <label class="webinar-form__label">Work Email *</label>
                <input type="email" id="regEmail" class="webinar-form__input" required autocomplete="email" placeholder="you@yourrestaurant.com" />
              </div>
              <div class="webinar-form__field">
                <label class="webinar-form__label">Restaurant Name</label>
                <input type="text" id="regRestaurant" class="webinar-form__input" autocomplete="organization" placeholder="Optional" />
              </div>
              <div class="webinar-form__field">
                <label class="webinar-form__label">Your Role *</label>
                <select id="regRole" class="webinar-form__select" required>
                  <option value="" disabled selected>Select your role</option>
                  <option value="GM">General Manager</option>
                  <option value="Owner">Owner / Operator</option>
                  <option value="Multi-Unit">Multi-Unit Operator</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="webinar-form__error" id="formError" style="display:none;"></div>
              <button type="submit" class="webinar-form__submit" id="submitBtn">
                <span id="submitBtnText">Reserve My Spot</span>
              </button>
              <p class="webinar-form__disclaimer">No spam. One confirmation email + reminders. That's it.</p>
            </form>
          </div>

          <!-- Success state -->
          <div class="webinar-success" id="registrationSuccess" style="display:none;">
            <div class="webinar-success__icon">✓</div>
            <h3 class="webinar-success__title">You're registered.</h3>
            <p class="webinar-success__message" id="successMessage"></p>
            <div class="webinar-success__details" id="successDetails"></div>
            <button class="webinar-success__dismiss" type="button" onclick="closeRegistrationModal(null, true)">Close</button>
          </div>

        </div>
      </div>

      <!-- PAST SESSIONS / RECORDINGS -->
      <section class="webinars-past" id="pastWebinars" style="display:none;">
        <div class="webinars-past__header">
          <h2 class="webinars-past__title">Past Sessions</h2>
          <p class="webinars-past__subtitle">Missed a live session? Watch the recording.</p>
        </div>
        <div class="webinars-past__grid" id="pastWebinarGrid"></div>
      </section>

      <!-- BOTTOM CTA -->
      <section class="webinars-cta">
        <div class="webinars-cta__card">
          <h2 class="webinars-cta__title">Ready to see it live in your data?</h2>
          <p class="webinars-cta__subtitle">Book a 1-on-1 demo and we'll run the numbers for your specific operation.</p>
          <div class="webinars-cta__actions">
            <a href="https://calendly.com/rob-en-place/en-place-demo" target="_blank" rel="noopener" class="webinars-btn webinars-btn--primary">Book a Demo</a>
            <a href="/faq" class="webinars-btn webinars-btn--secondary">Read the FAQ</a>
          </div>
        </div>
      </section>

    </div>
  `;

  initWebinars();
  return section;
}

// ─── State ───────────────────────────────────────────────────────────────────

let currentWebinarId = null;

// ─── Init ────────────────────────────────────────────────────────────────────

async function initWebinars() {
  window.openRegistrationModal = openRegistrationModal;
  window.closeRegistrationModal = closeRegistrationModal;
  window.submitRegistration = submitRegistration;

  await loadWebinars();
}

async function loadWebinars() {
  try {
    const response = await fetch(`${API_BASE}/api/webinars`);
    if (!response.ok) throw new Error('Failed to load');
    const data = await response.json();

    renderFeaturedWebinar(data.upcoming);
    if (data.past && data.past.length > 0) {
      renderPastWebinars(data.past);
    }
  } catch (err) {
    // Graceful fallback — show a placeholder if API not yet wired
    renderFallbackWebinar();
  }
}

function renderFeaturedWebinar(webinar) {
  const container = document.getElementById('featuredWebinar');
  if (!webinar) {
    container.innerHTML = `
      <div class="webinars__no-upcoming">
        <p>No upcoming sessions scheduled right now.</p>
        <p>Follow us on <a href="https://www.linkedin.com/company/en-place-ai" target="_blank" rel="noopener">LinkedIn</a> to be notified when the next session is announced.</p>
      </div>
    `;
    return;
  }

  const dateObj = new Date(webinar.scheduled_at);
  const dateStr = dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const timeStr = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' });

  container.innerHTML = `
    <div class="webinar-card webinar-card--featured">
      <div class="webinar-card__badge">Upcoming</div>
      <div class="webinar-card__body">
        <div class="webinar-card__meta">
          <span class="webinar-card__date">📅 ${dateStr}</span>
          <span class="webinar-card__time">🕐 ${timeStr}</span>
          <span class="webinar-card__duration">⏱ ${webinar.duration_minutes || 60} minutes</span>
        </div>
        <h2 class="webinar-card__title">${webinar.title}</h2>
        ${webinar.description ? `<p class="webinar-card__desc">${webinar.description}</p>` : ''}
        <div class="webinar-card__host">
          <span class="webinar-card__host-label">Hosted by</span>
          <span class="webinar-card__host-name">${webinar.host_name || 'En Place Team'}</span>
        </div>
      </div>
      <div class="webinar-card__actions">
        <button class="webinars-btn webinars-btn--primary" onclick="openRegistrationModal('${webinar.id}', ${JSON.stringify(webinar).replace(/"/g, '&quot;')})">
          Reserve My Spot
        </button>
        <p class="webinar-card__platform">Live on Zoom · Free</p>
      </div>
    </div>
  `;
}

function renderFallbackWebinar() {
  const container = document.getElementById('featuredWebinar');
  container.innerHTML = `
    <div class="webinar-card webinar-card--featured webinar-card--coming-soon">
      <div class="webinar-card__badge webinar-card__badge--soon">Coming Soon</div>
      <div class="webinar-card__body">
        <h2 class="webinar-card__title">The $720K Problem: Why Your Restaurant Is Hemorrhaging Money On Turnover</h2>
        <p class="webinar-card__desc">Our first live session is being scheduled now. Drop your email and we'll notify you the moment registration opens.</p>
      </div>
      <div class="webinar-card__actions">
        <button class="webinars-btn webinars-btn--primary" onclick="openNotifyModal()">
          Notify Me
        </button>
        <p class="webinar-card__platform">Free · Live on Zoom</p>
      </div>
    </div>
  `;
}

function renderPastWebinars(webinars) {
  const section = document.getElementById('pastWebinars');
  const grid = document.getElementById('pastWebinarGrid');
  section.style.display = '';

  grid.innerHTML = webinars.map(w => {
    const dateObj = new Date(w.scheduled_at);
    const dateStr = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    return `
      <div class="webinar-past-card">
        <div class="webinar-past-card__date">${dateStr}</div>
        <h3 class="webinar-past-card__title">${w.title}</h3>
        ${w.zoom_join_url ? `
          <a href="${w.zoom_join_url}" target="_blank" rel="noopener" class="webinar-past-card__link">
            Watch Recording →
          </a>
        ` : '<span class="webinar-past-card__unavailable">Recording coming soon</span>'}
      </div>
    `;
  }).join('');
}

// ─── Registration Modal ───────────────────────────────────────────────────────

function openRegistrationModal(webinarId, webinar) {
  currentWebinarId = webinarId;

  const overlay = document.getElementById('registrationOverlay');
  const header = document.getElementById('modalHeader');
  const formWrapper = document.getElementById('registrationFormWrapper');
  const successEl = document.getElementById('registrationSuccess');
  const formError = document.getElementById('formError');

  // Reset state
  formWrapper.style.display = '';
  successEl.style.display = 'none';
  formError.style.display = 'none';
  document.getElementById('webinarForm').reset();
  document.getElementById('submitBtn').disabled = false;
  document.getElementById('submitBtnText').textContent = 'Reserve My Spot';

  // Populate header
  if (webinar && webinar.title) {
    const dateObj = new Date(webinar.scheduled_at);
    const dateStr = dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' });
    const timeStr = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' });
    header.innerHTML = `
      <p class="webinar-modal__eyebrow">Register for Free</p>
      <h2 class="webinar-modal__title">${webinar.title}</h2>
      <p class="webinar-modal__when">📅 ${dateStr} · ${timeStr}</p>
    `;
  } else {
    header.innerHTML = `
      <p class="webinar-modal__eyebrow">Register for Free</p>
      <h2 class="webinar-modal__title">Reserve Your Spot</h2>
    `;
  }

  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeRegistrationModal(event, force = false) {
  if (!force && event && event.target !== document.getElementById('registrationOverlay')) return;
  document.getElementById('registrationOverlay').classList.remove('show');
  document.body.style.overflow = '';
  currentWebinarId = null;
}

async function submitRegistration(event) {
  event.preventDefault();

  const submitBtn = document.getElementById('submitBtn');
  const submitBtnText = document.getElementById('submitBtnText');
  const formError = document.getElementById('formError');

  const firstName = document.getElementById('regFirstName').value.trim();
  const lastName = document.getElementById('regLastName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const restaurantName = document.getElementById('regRestaurant').value.trim();
  const role = document.getElementById('regRole').value;

  if (!firstName || !lastName || !email || !role) {
    formError.textContent = 'Please fill in all required fields.';
    formError.style.display = 'block';
    return;
  }

  formError.style.display = 'none';
  submitBtn.disabled = true;
  submitBtnText.textContent = 'Registering...';

  try {
    const response = await fetch(`${API_BASE}/api/webinars/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        webinar_id: currentWebinarId,
        first_name: firstName,
        last_name: lastName,
        email: email,
        restaurant_name: restaurantName || null,
        role: role
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || 'Registration failed. Please try again.');
    }

    // Show success
    document.getElementById('registrationFormWrapper').style.display = 'none';
    const successEl = document.getElementById('registrationSuccess');
    document.getElementById('successMessage').textContent =
      `A confirmation has been sent to ${email}. You'll receive a reminder 24 hours before and 1 hour before the session.`;
    document.getElementById('successDetails').innerHTML = `
      <div class="webinar-success__zoom-note">
        <span>🎥</span>
        <span>Your Zoom join link will be in your confirmation email.</span>
      </div>
    `;
    successEl.style.display = '';

  } catch (err) {
    formError.textContent = err.message;
    formError.style.display = 'block';
    submitBtn.disabled = false;
    submitBtnText.textContent = 'Reserve My Spot';
  }
}