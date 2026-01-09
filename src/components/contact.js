// src/components/contact.js
import "../styles/components/contact.scss";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

let supabase;
if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase not configured");
    supabase = { from: () => ({ insert: async () => ({ error: { message: "Supabase not configured" } }) }) };
} else {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
}

const US_STATES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
];

export default function Contact() {
    const section = document.createElement("section");
    section.className = "contact";
    section.id = "contact";

    const stateOptions = US_STATES.map(s => `<option value="${s}">${s}</option>`).join("");

    section.innerHTML = `
    <div class="contact__container">

      <header class="contact__header">
        <h1 class="contact__title">Let's Talk</h1>
        <p class="contact__subtitle">Have questions about En Place? We'd love to hear from you.</p>
      </header>

      <form class="contact__form" id="contact-form">
        <div class="contact__row">
          <div class="contact__field">
            <label for="contact-name">Name <span class="contact__required">*</span></label>
            <input type="text" id="contact-name" name="name" required />
          </div>
          <div class="contact__field">
            <label for="contact-email">Email <span class="contact__required">*</span></label>
            <input type="email" id="contact-email" name="email" required />
          </div>
        </div>

        <div class="contact__row">
          <div class="contact__field">
            <label for="contact-phone">Phone</label>
            <input type="tel" id="contact-phone" name="phone" />
          </div>
          <div class="contact__field">
            <label for="contact-restaurant">Restaurant Name</label>
            <input type="text" id="contact-restaurant" name="restaurant_name" />
          </div>
        </div>

        <div class="contact__row">
          <div class="contact__field">
            <label for="contact-city">City</label>
            <input type="text" id="contact-city" name="city" />
          </div>
          <div class="contact__field">
            <label for="contact-state">State</label>
            <select id="contact-state" name="state">
              <option value="">Select a state</option>
              ${stateOptions}
            </select>
          </div>
        </div>

        <div class="contact__field contact__field--full">
          <label for="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="4"></textarea>
        </div>

        <button type="submit" class="contact__submit" id="contact-submit">Send Message</button>
        
        <div class="contact__status" id="contact-status"></div>
      </form>

      <div class="contact__alt">
        <p>Prefer to talk now?</p>
        <a href="tel:+15134020611" class="contact__phone">Call (513) 402-0611</a>
      </div>

    </div>
  `;

    // Form submission handler
    setTimeout(() => {
        const form = document.getElementById("contact-form");
        const submitBtn = document.getElementById("contact-submit");
        const status = document.getElementById("contact-status");

        if (form) {
            form.addEventListener("submit", async (e) => {
                e.preventDefault();

                submitBtn.disabled = true;
                submitBtn.textContent = "Sending...";
                status.className = "contact__status";
                status.textContent = "";

                const formData = new FormData(form);
                const data = {
                    name: formData.get("name")?.trim(),
                    email: formData.get("email")?.trim(),
                    phone: formData.get("phone")?.trim() || null,
                    restaurant_name: formData.get("restaurant_name")?.trim() || null,
                    city: formData.get("city")?.trim() || null,
                    state: formData.get("state") || null,
                    message: formData.get("message")?.trim() || null,
                };

                const { error } = await supabase.from("contact_submissions").insert(data);

                if (error) {
                    status.className = "contact__status contact__status--error";
                    status.textContent = "Something went wrong. Please try again or call us directly.";
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Send Message";
                } else {
                    status.className = "contact__status contact__status--success";
                    status.textContent = "Thanks! We'll be in touch soon.";
                    form.reset();
                    submitBtn.textContent = "Sent!";
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.textContent = "Send Message";
                    }, 3000);
                }
            });
        }
    }, 0);

    return section;
}