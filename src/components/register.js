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

      <!-- REGISTRATION CARD -->
      <section class="register-form-section">
        <div class="register-card">
          <form class="register-form" id="registerForm">
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
              <label class="register-form__label" for="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                class="register-form__input" 
                required 
                autocomplete="new-password"
                minlength="8"
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
      <section class="register-next">
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
      <footer class="register-trust">
        <ul class="register-trust__list">
          <li>Your data is private</li>
          <li>You control staff access</li>
          <li>Nothing is shared publicly</li>
        </ul>
      </footer>

    </div>
  `;

    // Form handling
    const form = section.querySelector("#registerForm");
    const errorDiv = section.querySelector("#formError");
    const passwordInput = section.querySelector("#password");
    const confirmInput = section.querySelector("#confirmPassword");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            errorDiv.hidden = true;

            const email = form.email.value.trim();
            const password = form.password.value;
            const confirmPassword = form.confirmPassword.value;

            // Validation
            if (password !== confirmPassword) {
                errorDiv.textContent = "Passwords do not match.";
                errorDiv.hidden = false;
                return;
            }

            if (password.length < 8) {
                errorDiv.textContent = "Password must be at least 8 characters.";
                errorDiv.hidden = false;
                return;
            }

            // Disable button during submission
            const submitBtn = form.querySelector(".register-form__submit");
            submitBtn.disabled = true;
            submitBtn.textContent = "Creating account...";

            try {
                // TODO: Replace with actual registration endpoint
                const response = await fetch("/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    // Redirect to onboarding
                    window.location.href = "/onboarding";
                } else {
                    errorDiv.textContent = data.error || "Registration failed. Please try again.";
                    errorDiv.hidden = false;
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Create Account & Continue";
                }
            } catch (err) {
                errorDiv.textContent = "Something went wrong. Please try again.";
                errorDiv.hidden = false;
                submitBtn.disabled = false;
                submitBtn.textContent = "Create Account & Continue";
            }
        });
    }

    return section;
}