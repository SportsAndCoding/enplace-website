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
          <!-- REPLACE data-vimeo-id with actual ID when ready -->
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
        </div>
      </div>

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
          <div class="join-success__icon">✓</div>
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

  // DOM elements
  const loadingDiv = section.querySelector("#joinLoading");
  const errorDiv = section.querySelector("#joinError");
  const errorMessage = section.querySelector("#errorMessage");
  const enterCodeDiv = section.querySelector("#joinEnterCode");
  const nameSection = section.querySelector("#joinNameSection");
  const confirmSection = section.querySelector("#joinConfirmSection");
  const notFoundDiv = section.querySelector("#joinNotFound");
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

  // Store state across steps
  let currentRestaurantName = '';
  let currentJoinCode = '';
  let matchedStaff = null;

  // Get join code from URL path: /join/ABC123
  const pathParts = window.location.pathname.split('/');
  const codeIndex = pathParts.indexOf('join') + 1;
  let joinCode = pathParts[codeIndex] || null;

  // Also check query param as fallback: /join?code=ABC123
  if (!joinCode) {
    const urlParams = new URLSearchParams(window.location.search);
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

  // Show appropriate state based on code
  async function initialize() {
    if (!joinCode) {
      // No code provided - show code entry form
      loadingDiv.hidden = true;
      enterCodeDiv.hidden = false;
      return;
    }

    // Validate the code
    const result = await validateCode(joinCode);

    if (result.valid) {
      showNameEntry(joinCode, result.restaurant_name);
    } else {
      showError(result.error || "Invalid join code");
    }
  }

  function hideAll() {
    loadingDiv.hidden = true;
    enterCodeDiv.hidden = true;
    errorDiv.hidden = true;
    nameSection.hidden = true;
    confirmSection.hidden = true;
    notFoundDiv.hidden = true;
    formSection.hidden = true;
    trustSection.hidden = true;
    successDiv.hidden = true;
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

          showSuccess(data.message || `Welcome to the team, ${firstName}!`);
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