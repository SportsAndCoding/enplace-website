// src/components/register.js
import "../styles/components/register.scss";

export default function Register() {
  const section = document.createElement("section");
  section.className = "register";
  section.id = "register";

  section.innerHTML = `
    <div class="register__container">

      <!-- HERO -->
      <header class="register-hero">
        <h1 class="register-hero__title">Let's set up your account</h1>
        <p class="register-hero__subtitle">We'll use this to save your setup and give you access to the Manager Portal.</p>
      </header>

      <!-- LOADING STATE -->
      <div class="register-loading" id="registerLoading">
        <div class="register-loading__spinner"></div>
        <p class="register-loading__text">Validating your purchase...</p>
      </div>

      <!-- ERROR STATE (no valid session) -->
      <div class="register-error" id="registerError" hidden>
        <div class="register-card">
          <h2 class="register-error__title">Unable to Complete Registration</h2>
          <p class="register-error__message" id="errorMessage"></p>
          <a href="/buy" class="register-btn register-btn--primary">Return to Checkout</a>
        </div>
      </div>

      <!-- REGISTRATION FORM -->
      <section class="register-form-section" id="registerFormSection" hidden>
        <div class="register-card">
          <form class="register-form" id="registerForm">
            
            <!-- Hidden session ID -->
            <input type="hidden" id="checkoutSessionId" name="checkoutSessionId" />

            <div class="register-form__row">
              <div class="register-form__field">
                <label class="register-form__label" for="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  class="register-form__input" 
                  required 
                  autocomplete="given-name"
                />
              </div>

              <div class="register-form__field">
                <label class="register-form__label" for="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  class="register-form__input" 
                  required 
                  autocomplete="family-name"
                />
              </div>
            </div>

            <div class="register-form__field">
              <label class="register-form__label" for="restaurantName">Restaurant Name</label>
              <input 
                type="text" 
                id="restaurantName" 
                name="restaurantName" 
                class="register-form__input" 
                required 
                placeholder="e.g. The Golden Fork"
              />
            </div>

            <div class="register-form__field">
              <label class="register-form__label" for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                class="register-form__input" 
                required 
                autocomplete="email"
              />
            </div>

            <div class="register-form__field">
              <label class="register-form__label" for="phone">Phone <span class="register-form__optional">(optional)</span></label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                class="register-form__input" 
                autocomplete="tel"
              />
            </div>

            <div class="register-form__field">
              <label class="register-form__label" for="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                class="register-form__input" 
                required 
                autocomplete="new-password"
                minlength="8"
                placeholder="At least 8 characters"
              />
            </div>

            <div class="register-form__field">
              <label class="register-form__label" for="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                class="register-form__input" 
                required 
                autocomplete="new-password"
              />
            </div>

            <div class="register-form__error" id="formError" hidden></div>

            <button type="submit" class="register-form__submit">
              Create Account & Continue
            </button>

            <p class="register-form__helper">Takes less than a minute.</p>
          </form>
        </div>
      </section>

      <!-- WHAT HAPPENS NEXT -->
      <section class="register-next" id="registerNext" hidden>
        <h2 class="register-next__title">What happens next</h2>
        <ol class="register-next__list">
          <li>You'll complete a short guided onboarding</li>
          <li>Add hours and staff (or import a schedule)</li>
          <li>Generate your staff QR code</li>
          <li>Your Manager Portal goes live</li>
        </ol>
        <p class="register-next__footer">Most restaurants finish in under 20 minutes.</p>
      </section>

      <!-- TRUST FOOTER -->
      <footer class="register-trust" id="registerTrust" hidden>
        <ul class="register-trust__list">
          <li>Your data is private</li>
          <li>You control staff access</li>
          <li>Nothing is shared publicly</li>
        </ul>
      </footer>

    </div>
  `;

  // API base URL
  const API_BASE = 'https://enplace-api-v3-9101f20a30b4.herokuapp.com';

  // DOM elements
  const loadingDiv = section.querySelector("#registerLoading");
  const errorDiv = section.querySelector("#registerError");
  const errorMessage = section.querySelector("#errorMessage");
  const formSection = section.querySelector("#registerFormSection");
  const nextSection = section.querySelector("#registerNext");
  const trustSection = section.querySelector("#registerTrust");
  const form = section.querySelector("#registerForm");
  const formError = section.querySelector("#formError");

  // Get session_id from URL
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get("session_id");

  // Validate session on load
  async function validateSession() {
    if (!sessionId) {
      showError("No checkout session found. Please complete checkout first.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/register/validate-session/${sessionId}`);
      const data = await response.json();

      if (data.valid) {
        // Pre-fill email if available from Stripe
        if (data.customer_email) {
          section.querySelector("#email").value = data.customer_email;
        }
        // Pre-fill name if available
        if (data.customer_name) {
          const nameParts = data.customer_name.split(" ");
          if (nameParts.length >= 1) {
            section.querySelector("#firstName").value = nameParts[0];
          }
          if (nameParts.length >= 2) {
            section.querySelector("#lastName").value = nameParts.slice(1).join(" ");
          }
        }
        // Store session ID
        section.querySelector("#checkoutSessionId").value = sessionId;

        // Show form
        showForm();
      } else {
        if (data.error === "Already registered") {
          showError(`This checkout has already been registered for "${data.restaurant_name}". Please log in instead.`);
        } else {
          showError(data.error || "Invalid or expired checkout session.");
        }
      }
    } catch (err) {
      console.error("Session validation error:", err);
      showError("Unable to validate your purchase. Please try again or contact support.");
    }
  }

  function showError(message) {
    loadingDiv.hidden = true;
    errorMessage.textContent = message;
    errorDiv.hidden = false;
  }

  function showForm() {
    loadingDiv.hidden = true;
    formSection.hidden = false;
    nextSection.hidden = false;
    trustSection.hidden = false;
  }

  // Form submission
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      formError.hidden = true;

      const firstName = form.firstName.value.trim();
      const lastName = form.lastName.value.trim();
      const restaurantName = form.restaurantName.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim() || null;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;
      const checkoutSessionId = form.checkoutSessionId.value;

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

      // Disable button during submission
      const submitBtn = form.querySelector(".register-form__submit");
      submitBtn.disabled = true;
      submitBtn.textContent = "Creating account...";

      try {
        const response = await fetch(`${API_BASE}/api/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            checkout_session_id: checkoutSessionId,
            restaurant_name: restaurantName,
            owner_email: email,
            owner_password: password,
            owner_first_name: firstName,
            owner_last_name: lastName,
            owner_phone: phone
          })
        });

        const data = await response.json();

        if (response.ok && data.success) {
          // Store JWT token for authenticated session
          localStorage.setItem("enplace_token", data.token);

          // Redirect to onboarding
          window.location.href = "/onboarding";
        } else {
          formError.textContent = data.detail || data.error || "Registration failed. Please try again.";
          formError.hidden = false;
          submitBtn.disabled = false;
          submitBtn.textContent = "Create Account & Continue";
        }
      } catch (err) {
        console.error("Registration error:", err);
        formError.textContent = "Something went wrong. Please try again.";
        formError.hidden = false;
        submitBtn.disabled = false;
        submitBtn.textContent = "Create Account & Continue";
      }
    });
  }

  // Initialize
  validateSession();

  return section;
}