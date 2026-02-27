// src/components/join.js
import "../styles/components/join.scss";

export default function StaffJoin() {
  const section = document.createElement("section");
  section.className = "join";
  section.id = "join";

  section.innerHTML = `
    <div class="join__container">

      <!-- HERO -->
      <header class="join-hero">
        <h1 class="join-hero__title">Join Your Team</h1>
        <p class="join-hero__subtitle">Create your account to access your schedule and shifts.</p>
      </header>

      <!-- VIDEO EXPLAINER -->
      <div class="join-video" id="joinVideo">
        <div class="join-video__wrapper">
          <div class="join-video__placeholder" id="videoPlaceholder">
            <iframe 
              src="https://player.vimeo.com/video/1153778229?badge=0&autopause=0&player_id=0&app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="How to join your team on En Place"
            ></iframe>
          </div>
        </div>
        <p class="join-video__caption">Watch: How to get started (1 min)</p>
      </div>

      <!-- LOADING STATE -->
      <div class="join-loading" id="joinLoading">
        <div class="join-loading__spinner"></div>
        <p class="join-loading__text">Validating your join code...</p>
      </div>

      <!-- ERROR STATE (invalid code) -->
      <div class="join-error" id="joinError" hidden>
        <div class="join-card">
          <h2 class="join-error__title">Invalid Join Code</h2>
          <p class="join-error__message" id="errorMessage"></p>
          <p class="join-error__help">Please check the code or QR link from your manager and try again.</p>
        </div>
      </div>

      <!-- ENTER CODE STATE (no code in URL) -->
      <div class="join-enter-code" id="joinEnterCode" hidden>
        <div class="join-card">
          <h2 class="join-enter-code__title">Enter Your Join Code</h2>
          <p class="join-enter-code__subtitle">Your manager should have given you a 6-character code.</p>
          <form class="join-code-form" id="codeForm">
            <div class="join-form__field">
              <label class="join-form__label" for="manualCode">Join Code</label>
              <input 
                type="text" 
                id="manualCode" 
                name="manualCode" 
                class="join-form__input join-form__input--code" 
                required 
                maxlength="6"
                placeholder="ABC123"
                autocomplete="off"
                style="text-transform: uppercase; letter-spacing: 0.2em; text-align: center; font-size: 1.5rem;"
              />
            </div>
            <div class="join-form__error" id="codeError" hidden></div>
            <button type="submit" class="join-form__submit">Continue</button>
          </form>
          <!-- ═══ NEW: Link to soft wall for codeless visitors ═══ -->
          <div style="margin-top: 20px; text-align: center;">
            <button type="button" class="join-form__link" id="noCodeBtn" 
              style="background: none; border: none; color: rgba(212,175,55,0.8); cursor: pointer; font-size: 0.9rem; text-decoration: underline; padding: 8px;">
              Don't have a code? Your restaurant might not be on En Place yet.
            </button>
          </div>
          <!-- ═══ END NEW ═══ -->
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <!-- NEW: STAFF INTEREST FORM (Lane 2 & 3 - Soft Wall)        -->
      <!-- ═══════════════════════════════════════════════════════════ -->
      <div class="join-interest" id="joinInterest" hidden>
        <div class="join-card">
          <h2 class="join-enter-code__title">Your restaurant isn't on En Place yet.</h2>
          <p class="join-enter-code__subtitle">But you can change that. Tell us where you work and we'll reach out to bring En Place to your team.</p>
          
          <form class="join-form" id="interestForm">
            <input type="hidden" id="interestRef" name="ref" />

            <div class="join-form__field">
              <label class="join-form__label" for="interestFirstName">Your First Name</label>
              <input 
                type="text" 
                id="interestFirstName" 
                name="firstName" 
                class="join-form__input" 
                required 
                autocomplete="given-name"
              />
            </div>

            <div class="join-form__field">
              <label class="join-form__label" for="interestRestaurant">Restaurant Name</label>
              <input 
                type="text" 
                id="interestRestaurant" 
                name="restaurantName" 
                class="join-form__input" 
                required 
                placeholder="Where do you work?"
              />
            </div>

            <div class="join-form__field">
              <label class="join-form__label" for="interestGM">Manager or GM Name <span style="opacity:0.5;">(optional)</span></label>
              <input 
                type="text" 
                id="interestGM" 
                name="gmName" 
                class="join-form__input" 
                placeholder="Who should we talk to?"
              />
            </div>

            <div class="join-form__field">
              <label class="join-form__label" for="interestPhone">Your Phone Number</label>
              <input 
                type="tel" 
                id="interestPhone" 
                name="phone" 
                class="join-form__input" 
                placeholder="(555) 555-5555"
                autocomplete="tel"
              />
              <span class="join-form__hint">So we can let you know when your restaurant is live</span>
            </div>

            <div class="join-form__field">
              <label class="join-form__label" for="interestEmail">Your Email <span style="opacity:0.5;">(optional)</span></label>
              <input 
                type="email" 
                id="interestEmail" 
                name="email" 
                class="join-form__input" 
                autocomplete="email"
              />
            </div>

            <div class="join-form__error" id="interestError" hidden></div>

            <button type="submit" class="join-form__submit">
              Bring En Place to My Restaurant
            </button>
          </form>
        </div>
      </div>

      <!-- NEW: INTEREST THANK YOU STATE -->
      <div class="join-interest-thanks" id="joinInterestThanks" hidden>
        <div class="join-card join-card--success">
          <div class="join-success__icon">&#10003;</div>
          <h2 class="join-success__title">You've been heard.</h2>
          <p class="join-success__message" id="interestThanksMessage">
            We're going to reach out to your restaurant about getting En Place set up. 
            When they're on board, you'll be one of the first to know.
          </p>
          <p style="margin-top: 16px; font-size: 0.9rem; opacity: 0.7;">
            In the meantime, tell your coworkers. The more people who ask, the faster it happens.
          </p>
        </div>
      </div>
      <!-- ═══ END NEW SECTIONS ═══ -->

      <!-- NAME ENTRY (Step 1) -->
      <section class="join-name-section" id="joinNameSection" hidden>
        <div class="join-card">
          <div class="join-restaurant-badge" id="restaurantBadgeName">
            <span class="join-restaurant-badge__label">Joining</span>
            <span class="join-restaurant-badge__name" id="restaurantNameStep1"></span>
          </div>

          <form class="join-form" id="nameForm">
            <input type="hidden" id="joinCodeStep1" name="joinCode" />

            <div class="join-form__row">
              <div class="join-form__field">
                <label class="join-form__label" for="firstNameStep1">First Name</label>
                <input 
                  type="text" 
                  id="firstNameStep1" 
                  name="firstName" 
                  class="join-form__input" 
                  required 
                  autocomplete="given-name"
                />
              </div>

              <div class="join-form__field">
                <label class="join-form__label" for="lastNameStep1">Last Name</label>
                <input 
                  type="text" 
                  id="lastNameStep1" 
                  name="lastName" 
                  class="join-form__input" 
                  required 
                  autocomplete="family-name"
                />
              </div>
            </div>

            <div class="join-form__error" id="nameError" hidden></div>

            <button type="submit" class="join-form__submit">
              Find Me on the Roster
            </button>
          </form>
        </div>
      </section>

      <!-- CONFIRMATION SCREEN (Step 2) -->
      <section class="join-confirm-section" id="joinConfirmSection" hidden>
        <div class="join-card">
          <div class="join-confirm">
            <h2 class="join-confirm__title">Is this you?</h2>
            <div class="join-confirm__match">
              <span class="join-confirm__name" id="matchedName"></span>
              <span class="join-confirm__position" id="matchedPosition"></span>
            </div>
            <input type="hidden" id="matchedStaffId" />
            <div class="join-confirm__buttons">
              <button type="button" class="join-form__submit" id="confirmYes">Yes, that's me</button>
              <button type="button" class="join-form__submit join-form__submit--secondary" id="confirmNo">No, that's not me</button>
            </div>
          </div>
        </div>
      </section>

      <!-- NOT FOUND STATE -->
      <div class="join-not-found" id="joinNotFound" hidden>
        <div class="join-card">
          <h2 class="join-error__title">We couldn't find you</h2>
          <p class="join-error__message">Your name didn't match our records. Try a different spelling, or browse the roster to find yourself.</p>
          <div style="display:flex; gap:12px; margin-top:16px; flex-wrap:wrap;">
            <button type="button" class="join-form__submit join-form__submit--secondary" id="tryAgainBtn" style="flex:1; min-width:140px;">Try Different Name</button>
            <button type="button" class="join-form__submit" id="browseRosterBtn" style="flex:1; min-width:140px;">Browse Roster</button>
          </div>
        </div>
      </div>

      <!-- BROWSE ROSTER FALLBACK -->
      <div class="join-browse-roster" id="joinBrowseRoster" hidden>
        <div class="join-card">
          <h2 class="join-enter-code__title">Find Yourself</h2>
          <p class="join-enter-code__subtitle">Tap your name from the roster below.</p>
          <div class="join-form__field" style="margin-bottom:16px;">
            <input 
              type="text" 
              id="rosterSearch" 
              class="join-form__input" 
              placeholder="Filter by name or role..."
              autocomplete="off"
            />
          </div>
          <div id="rosterList" style="max-height:400px; overflow-y:auto; display:flex; flex-direction:column; gap:8px;"></div>
          <button type="button" class="join-form__submit join-form__submit--secondary" id="rosterBackBtn" style="margin-top:16px;">Back</button>
        </div>
      </div>

      <!-- REGISTRATION FORM (Step 3) -->
      <section class="join-form-section" id="joinFormSection" hidden>
        <div class="join-card">
          <div class="join-welcome-badge" id="welcomeBadge">
            <span class="join-welcome-badge__greeting">Welcome,</span>
            <span class="join-welcome-badge__name" id="confirmedName"></span>
          </div>

          <form class="join-form" id="joinForm">
            
            <!-- Hidden fields -->
            <input type="hidden" id="joinCode" name="joinCode" />
            <input type="hidden" id="staffId" name="staffId" />

            <div class="join-form__field">
              <label class="join-form__label" for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                class="join-form__input" 
                required 
                autocomplete="email"
              />
            </div>

            <div class="join-form__field">
              <label class="join-form__label" for="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                class="join-form__input" 
                required 
                autocomplete="tel"
                placeholder="(555) 555-5555"
              />
              <span class="join-form__hint">Required for shift notifications</span>
            </div>

            <div class="join-form__field">
              <label class="join-form__label" for="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                class="join-form__input" 
                required 
                autocomplete="new-password"
                minlength="8"
                placeholder="At least 8 characters"
              />
            </div>

            <div class="join-form__field">
              <label class="join-form__label" for="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                class="join-form__input" 
                required 
                autocomplete="new-password"
              />
            </div>

            <!-- SMS CONSENT - CRITICAL FOR TWILIO VERIFICATION -->
            <div class="join-form__consent">
              <label class="join-form__checkbox-label">
                <input 
                  type="checkbox" 
                  id="smsConsent" 
                  name="smsConsent" 
                  class="join-form__checkbox"
                  required
                />
                <span class="join-form__checkbox-text">
                  I consent to receive SMS notifications from En Place regarding shift updates, 
                  schedule changes, and coverage requests. Message frequency varies. Message and 
                  data rates may apply. Reply STOP to unsubscribe at any time.
                </span>
              </label>
              <a href="https://en-place.ai/privacy" target="_blank" class="join-form__privacy-link">
                View Privacy Policy
              </a>
            </div>

            <div class="join-form__error" id="formError" hidden></div>

            <button type="submit" class="join-form__submit">
              Create Account
            </button>

            <p class="join-form__helper">You'll get access to your schedule immediately.</p>
          </form>
        </div>
      </section>

      <!-- SUCCESS STATE -->
      <div class="join-success" id="joinSuccess" hidden>
        <div class="join-card join-card--success">
          <div class="join-success__icon">&#10003;</div>
          <h2 class="join-success__title">You're all set!</h2>
          <p class="join-success__message" id="successMessage"></p>
          <a href="https://app.en-place.ai/staff-portal" class="join-form__submit">
            Go to Staff Portal
          </a>
        </div>
      </div>

      <!-- TRUST FOOTER -->
      <footer class="join-trust" id="joinTrust" hidden>
        <ul class="join-trust__list">
          <li>Your data stays private</li>
          <li>Only your manager sees your schedule</li>
          <li>Unsubscribe from SMS anytime</li>
        </ul>
      </footer>

    </div>
  `;

  // API base URL
  const API_BASE = 'https://enplace-api-v3-9101f20a30b4.herokuapp.com';

  // DOM elements - EXISTING
  const loadingDiv = section.querySelector("#joinLoading");
  const errorDiv = section.querySelector("#joinError");
  const errorMessage = section.querySelector("#errorMessage");
  const enterCodeDiv = section.querySelector("#joinEnterCode");
  const nameSection = section.querySelector("#joinNameSection");
  const confirmSection = section.querySelector("#joinConfirmSection");
  const notFoundDiv = section.querySelector("#joinNotFound");
  const browseRosterDiv = section.querySelector("#joinBrowseRoster");
  const formSection = section.querySelector("#joinFormSection");
  const trustSection = section.querySelector("#joinTrust");
  const successDiv = section.querySelector("#joinSuccess");
  const successMessage = section.querySelector("#successMessage");
  const form = section.querySelector("#joinForm");
  const formError = section.querySelector("#formError");
  const codeForm = section.querySelector("#codeForm");
  const codeError = section.querySelector("#codeError");
  const nameForm = section.querySelector("#nameForm");
  const nameError = section.querySelector("#nameError");

  // ═══ NEW: DOM elements for Lane 2/3 ═══
  const interestDiv = section.querySelector("#joinInterest");
  const interestForm = section.querySelector("#interestForm");
  const interestError = section.querySelector("#interestError");
  const interestThanksDiv = section.querySelector("#joinInterestThanks");
  const noCodeBtn = section.querySelector("#noCodeBtn");
  // ═══ END NEW DOM ═══

  // Store state across steps
  let currentRestaurantName = '';
  let currentJoinCode = '';
  let matchedStaff = null;

  // ═══ NEW: Capture ref param early ═══
  const urlParams = new URLSearchParams(window.location.search);
  const refSource = urlParams.get("ref");
  // ═══ END NEW ═══

  // Get join code from URL path: /join/ABC123
  const pathParts = window.location.pathname.split('/');
  const codeIndex = pathParts.indexOf('join') + 1;
  let joinCode = pathParts[codeIndex] || null;

  // Also check query param as fallback: /join?code=ABC123
  if (!joinCode) {
    joinCode = urlParams.get("code");
  }

  // Validate join code
  async function validateCode(code) {
    try {
      const response = await fetch(`${API_BASE}/api/public/join/${code.toUpperCase()}`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Code validation error:", err);
      return { valid: false, error: "Unable to validate code. Please try again." };
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // MODIFIED: initialize() now detects Lane 2/3
  // ═══════════════════════════════════════════════════════════════
  async function initialize() {
    if (!joinCode) {
      loadingDiv.hidden = true;

      // ═══ NEW: If ref param present, go straight to soft wall ═══
      if (refSource) {
        showInterestForm();
        return;
      }
      // ═══ END NEW ═══

      // No code, no ref - show code entry (with "don't have a code?" link)
      enterCodeDiv.hidden = false;
      return;
    }

    // Validate the code (existing Lane 1 flow)
    const result = await validateCode(joinCode);

    if (result.valid) {
      showNameEntry(joinCode, result.restaurant_name);
    } else {
      showError(result.error || "Invalid join code");
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // MODIFIED: hideAll() includes new sections
  // ═══════════════════════════════════════════════════════════════
  function hideAll() {
    loadingDiv.hidden = true;
    enterCodeDiv.hidden = true;
    errorDiv.hidden = true;
    nameSection.hidden = true;
    confirmSection.hidden = true;
    notFoundDiv.hidden = true;
    browseRosterDiv.hidden = true;
    formSection.hidden = true;
    trustSection.hidden = true;
    successDiv.hidden = true;
    // ═══ NEW ═══
    interestDiv.hidden = true;
    interestThanksDiv.hidden = true;
    // ═══ END NEW ═══
  }

  function showError(message) {
    hideAll();
    errorMessage.textContent = message;
    errorDiv.hidden = false;
  }

  function showNameEntry(code, restName) {
    hideAll();
    currentJoinCode = code.toUpperCase();
    currentRestaurantName = restName;
    section.querySelector("#joinCodeStep1").value = currentJoinCode;
    section.querySelector("#restaurantNameStep1").textContent = restName;
    nameSection.hidden = false;
    trustSection.hidden = false;
  }

  function showConfirmation(staff) {
    hideAll();
    matchedStaff = staff;
    section.querySelector("#matchedName").textContent = staff.full_name;
    section.querySelector("#matchedPosition").textContent = staff.position || 'Team Member';
    section.querySelector("#matchedStaffId").value = staff.staff_id;
    confirmSection.hidden = false;
    trustSection.hidden = false;
  }

  function showNotFound() {
    hideAll();
    notFoundDiv.hidden = false;
  }

  function showCredentialsForm() {
    hideAll();
    section.querySelector("#joinCode").value = currentJoinCode;
    section.querySelector("#staffId").value = matchedStaff.staff_id;
    section.querySelector("#confirmedName").textContent = matchedStaff.full_name.split(' ')[0];
    formSection.hidden = false;
    trustSection.hidden = false;
  }

  function showSuccess(message) {
    hideAll();
    successMessage.textContent = message;
    successDiv.hidden = false;
  }

  // ═══════════════════════════════════════════════════════════════
  // NEW: Lane 2/3 functions
  // ═══════════════════════════════════════════════════════════════
  function showInterestForm() {
    hideAll();
    // Pre-fill the ref source
    section.querySelector("#interestRef").value = refSource || "organic";
    interestDiv.hidden = false;
    trustSection.hidden = false;
  }

  function showInterestThanks() {
    hideAll();
    interestThanksDiv.hidden = false;
  }
  // ═══ END NEW FUNCTIONS ═══

  // ═══════════════════════════════════════════════════════════════
  // NEW: "Don't have a code?" button handler
  // ═══════════════════════════════════════════════════════════════
  if (noCodeBtn) {
    noCodeBtn.addEventListener("click", () => {
      showInterestForm();
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // NEW: Interest form submission (Lane 2/3)
  // ═══════════════════════════════════════════════════════════════
  if (interestForm) {
    interestForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      interestError.hidden = true;

      const firstName = interestForm.firstName.value.trim();
      const restaurantName = interestForm.restaurantName.value.trim();
      const gmName = interestForm.gmName.value.trim();
      const phone = interestForm.phone.value.trim();
      const email = interestForm.email.value.trim();
      const ref = interestForm.ref.value;

      if (!firstName || !restaurantName) {
        interestError.textContent = "Please enter your name and restaurant.";
        interestError.hidden = false;
        return;
      }

      if (!phone && !email) {
        interestError.textContent = "Please provide a phone number or email so we can follow up.";
        interestError.hidden = false;
        return;
      }

      const submitBtn = interestForm.querySelector(".join-form__submit");
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";

      try {
        const response = await fetch(`${API_BASE}/api/public/join/interest`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: firstName,
            restaurant_name: restaurantName,
            gm_name: gmName || null,
            contact_phone: phone || null,
            contact_email: email || null,
            ref_source: ref || null
          })
        });

        const data = await response.json();

        if (data.success) {
          showInterestThanks();
        } else {
          interestError.textContent = data.error || "Something went wrong. Please try again.";
          interestError.hidden = false;
          submitBtn.disabled = false;
          submitBtn.textContent = "Bring En Place to My Restaurant";
        }
      } catch (err) {
        console.error("Interest form error:", err);
        interestError.textContent = "Something went wrong. Please try again.";
        interestError.hidden = false;
        submitBtn.disabled = false;
        submitBtn.textContent = "Bring En Place to My Restaurant";
      }
    });
  }
  // ═══ END NEW INTEREST FORM ═══

  // Manual code entry form
  if (codeForm) {
    codeForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      codeError.hidden = true;

      const code = codeForm.manualCode.value.trim().toUpperCase();

      if (code.length !== 6) {
        codeError.textContent = "Join code must be 6 characters.";
        codeError.hidden = false;
        return;
      }

      const submitBtn = codeForm.querySelector(".join-form__submit");
      submitBtn.disabled = true;
      submitBtn.textContent = "Checking...";

      const result = await validateCode(code);

      if (result.valid) {
        joinCode = code;
        showNameEntry(code, result.restaurant_name);
      } else {
        codeError.textContent = result.error || "Invalid join code";
        codeError.hidden = false;
        submitBtn.disabled = false;
        submitBtn.textContent = "Continue";
      }
    });
  }

  // Name form - Step 1
  if (nameForm) {
    nameForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      nameError.hidden = true;

      const firstName = nameForm.firstNameStep1.value.trim();
      const lastName = nameForm.lastNameStep1.value.trim();

      if (!firstName || !lastName) {
        nameError.textContent = "Please enter your full name.";
        nameError.hidden = false;
        return;
      }

      const submitBtn = nameForm.querySelector(".join-form__submit");
      submitBtn.disabled = true;
      submitBtn.textContent = "Searching...";

      try {
        const response = await fetch(`${API_BASE}/api/public/join/find-match`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            join_code: currentJoinCode,
            first_name: firstName,
            last_name: lastName
          })
        });

        const data = await response.json();

        if (data.success && data.match_found) {
          showConfirmation({
            staff_id: data.staff_id,
            full_name: data.full_name,
            position: data.position
          });
        } else {
          showNotFound();
        }
      } catch (err) {
        console.error("Find match error:", err);
        nameError.textContent = "Something went wrong. Please try again.";
        nameError.hidden = false;
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Find Me on the Roster";
      }
    });
  }

  // Confirmation handlers
  const confirmYes = section.querySelector("#confirmYes");
  const confirmNo = section.querySelector("#confirmNo");
  const tryAgainBtn = section.querySelector("#tryAgainBtn");

  if (confirmYes) {
    confirmYes.addEventListener("click", () => {
      showCredentialsForm();
    });
  }

  if (confirmNo) {
    confirmNo.addEventListener("click", () => {
      showNotFound();
    });
  }

  if (tryAgainBtn) {
    tryAgainBtn.addEventListener("click", () => {
      showNameEntry(currentJoinCode, currentRestaurantName);
    });
  }

  // Browse roster fallback
  const browseRosterBtn = section.querySelector("#browseRosterBtn");
  const rosterBackBtn = section.querySelector("#rosterBackBtn");
  const rosterSearch = section.querySelector("#rosterSearch");
  const rosterList = section.querySelector("#rosterList");
  let rosterData = [];

  if (browseRosterBtn) {
    browseRosterBtn.addEventListener("click", async () => {
      hideAll();
      browseRosterDiv.hidden = false;
      trustSection.hidden = false;
      rosterList.innerHTML = '<p style="text-align:center; opacity:0.6;">Loading roster...</p>';

      try {
        const response = await fetch(`${API_BASE}/api/public/join/browse-roster?code=${currentJoinCode}`);
        const data = await response.json();

        if (data.success && data.roster.length > 0) {
          rosterData = data.roster;
          renderRoster(rosterData);
        } else {
          rosterList.innerHTML = '<p style="text-align:center; opacity:0.6;">No unclaimed staff found. Contact your manager.</p>';
        }
      } catch (err) {
        console.error("Browse roster error:", err);
        rosterList.innerHTML = '<p style="text-align:center; color:#c0392b;">Failed to load roster. Please try again.</p>';
      }
    });
  }

  function renderRoster(list) {
    if (list.length === 0) {
      rosterList.innerHTML = '<p style="text-align:center; opacity:0.6;">No matches found.</p>';
      return;
    }

    rosterList.innerHTML = list.map(s => `
      <div class="roster-item" data-staff-id="${s.staff_id}" data-full-name="${s.full_name}" data-position="${s.position}" 
        style="display:flex; justify-content:space-between; align-items:center; padding:14px 18px; 
        background:rgba(255,255,255,0.04); border:1px solid rgba(212,175,55,0.15); border-radius:10px; 
        cursor:pointer; transition:all 0.2s ease;">
        <div>
          <div style="font-weight:600; font-size:1.05rem;">${s.display_name}</div>
          <div style="font-size:0.85rem; opacity:0.6;">${s.position}</div>
        </div>
        <div style="font-size:1.2rem; opacity:0.3;">›</div>
      </div>
    `).join('');

    // Add hover effect and click handlers
    rosterList.querySelectorAll('.roster-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.borderColor = 'rgba(212,175,55,0.5)';
        item.style.background = 'rgba(212,175,55,0.08)';
      });
      item.addEventListener('mouseleave', () => {
        item.style.borderColor = 'rgba(212,175,55,0.15)';
        item.style.background = 'rgba(255,255,255,0.04)';
      });
      item.addEventListener('click', () => {
        showConfirmation({
          staff_id: item.dataset.staffId,
          full_name: item.dataset.fullName,
          position: item.dataset.position
        });
      });
    });
  }

  if (rosterSearch) {
    rosterSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = rosterData.filter(s =>
        s.display_name.toLowerCase().includes(query) ||
        s.position.toLowerCase().includes(query)
      );
      renderRoster(filtered);
    });
  }

  if (rosterBackBtn) {
    rosterBackBtn.addEventListener("click", () => {
      rosterSearch.value = '';
      showNotFound();
    });
  }

  // Registration form - Step 3
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      formError.hidden = true;

      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;
      const smsConsent = form.smsConsent.checked;
      const code = form.joinCode.value;
      const staffId = form.staffId.value;

      // Validation
      if (password !== confirmPassword) {
        formError.textContent = "Passwords do not match.";
        formError.hidden = false;
        return;
      }

      if (password.length < 8) {
        formError.textContent = "Password must be at least 8 characters.";
        formError.hidden = false;
        return;
      }

      if (!phone) {
        formError.textContent = "Phone number is required for shift notifications.";
        formError.hidden = false;
        return;
      }

      if (!smsConsent) {
        formError.textContent = "Please agree to receive SMS notifications to continue.";
        formError.hidden = false;
        return;
      }

      // Disable button during submission
      const submitBtn = form.querySelector(".join-form__submit");
      submitBtn.disabled = true;
      submitBtn.textContent = "Creating account...";

      try {
        const response = await fetch(`${API_BASE}/api/public/join`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            join_code: code,
            staff_id: staffId,
            email: email,
            phone: phone,
            password: password,
            sms_consent: smsConsent
          })
        });

        const data = await response.json();

        if (data.success) {
          // Store JWT token
          if (data.token) {
            localStorage.setItem("enplace_token", data.token);
          }

          showSuccess(data.message || "Welcome to the team!");
        } else {
          formError.textContent = data.error || "Registration failed. Please try again.";
          formError.hidden = false;
          submitBtn.disabled = false;
          submitBtn.textContent = "Create Account";
        }
      } catch (err) {
        console.error("Registration error:", err);
        formError.textContent = "Something went wrong. Please try again.";
        formError.hidden = false;
        submitBtn.disabled = false;
        submitBtn.textContent = "Create Account";
      }
    });
  }

  // Initialize
  initialize();

  return section;
}