// src/components/careers.js
import "../styles/components/careers.scss";
import { createClient } from "@supabase/supabase-js";

// ──────── SAFE SUPABASE CLIENT (copy-paste this exactly) ────────
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "%cSupabase env vars missing!",
    "color: red; font-size: 16px; font-weight: bold;",
    "\nAdd these exact lines to your .env file (project root):\n\n" +
    "VITE_SUPABASE_URL=https://uclgflqwxdixbnylxmih.supabase.co\n" +
    "VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbGdmbHF3eGRpeGJueWx4bWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2NjQxOTYsImV4cCI6MjA3NDI0MDE5Nn0.bcD7KR1z8kkF3TwCNT5NOHunWgI6-JjB_PLIC6c6cWE\n\n" +
    "Then restart the dev server."
  );
  // Create a dummy client so the page still renders (form will just fail silently on submit)
  var supabase = { from: () => ({ insert: async () => ({ error: { message: "Supabase not configured" } }) }) };
} else {
  var supabase = createClient(supabaseUrl, supabaseAnonKey);
}
// ─────────────────────────────────────────────────────────────────────
export default function Careers() {
  const section = document.createElement("section");
  section.className = "careers";

  section.innerHTML = `
    <!-- HERO -->
    <div class="careers__hero">
      <div class="careers__hero-image"></div>
      <div class="careers__hero-content">
        <h1 class="careers__hero-title">
          Help Us Build the Future of Restaurant Work.
        </h1>
        <p class="careers__hero-subtitle">
          We’re expanding nationwide; one city, one team, one story at a time.<br/>
          If you believe restaurant staff deserve fairness and stability, you're already one of us.
        </p>
      </div>
    </div>

    <!-- ABOUT -->
    <div class="careers__about">
      <div class="careers__container">
        <h2 class="careers__about-title">Who We Are</h2>
        <div class="careers__about-text">
          <p>En Place is a people-first technology company reimagining the realities of restaurant work.</p>
          <p>We’re expanding rapidly into new regions and need mission-driven people to help us grow the movement.</p>
          <p>We pay way more than Doordash. And we value restaurant experience. Six-figure OTE uncapped commissions. Best product in restaurant tech</p>
          <p>No resume. No recruiter. No games. If you've got delivery hustle OR restaurant scars (or both), you're already ahead of 99%</p>
        </div>
      </div>
    </div>

    <!-- FORM -->
    <div class="careers__form-section">
      <div class="careers__container">
        <h2 class="careers__form-title">Tell Us About You</h2>

        <form class="careers__form" id="careersForm">
          <div class="careers__form-grid">

            <div class="careers__field">
              <label class="careers__label">Full Name</label>
              <input type="text" name="name" required />
            </div>

            <div class="careers__field">
              <label class="careers__label">Email</label>
              <input type="email" name="email" required />
            </div>

            <div class="careers__field">
              <label class="careers__label">City & State</label>
              <input type="text" name="city_state" required />
            </div>

            <div class="careers__field careers__field--full">
              <label class="careers__label">Background (select all that apply)</label>
              <div class="careers__checkbox-group">
                <label><input type="checkbox" name="background" value="FOH Staff"> FOH Staff</label>
                <label><input type="checkbox" name="background" value="BOH Staff"> BOH Staff</label>
                <label><input type="checkbox" name="background" value="Restaurant Manager / GM"> Restaurant Manager / GM</label>
                <label><input type="checkbox" name="background" value="Corporate Restaurant / Multi-Unit"> Corporate Restaurant / Multi-Unit</label>
                <label><input type="checkbox" name="background" value="Gig Work (DoorDash, UberEats, etc.)"> Gig Work (DoorDash, UberEats, etc.)</label>
                <label><input type="checkbox" name="background" value="Tech / Engineering"> Tech / Engineering</label>
                <label><input type="checkbox" name="background" value="Sales / Business Development"> Sales / Business Development</label>
                <label><input type="checkbox" name="background" value="Operations / Support"> Operations / Support</label>
                <label><input type="checkbox" name="background" value="Other"> Other</label>
              </div>
            </div>

            <div class="careers__field careers__field--full">
              <label class="careers__label">Motivation</label>
              <textarea name="motivation" rows="4" placeholder="Why do you want to help restaurant workers?" required></textarea>
            </div>

            <div class="careers__field careers__field--full">
              <label class="careers__label">Interest</label>
              <div class="careers__radio-group">
                <label><input type="radio" name="interest" value="Join the En Place Team" required> Join the En Place Team</label>
                <label><input type="radio" name="interest" value="Join the Movement"> Join the Movement</label>
                <label><input type="radio" name="interest" value="Not sure yet"> Not sure yet</label>
              </div>
            </div>

            <div class="careers__field">
              <label class="careers__label">Role Interest</label>
              <select name="role" required>
                <option value="Open to any">Open to any</option>
                <option value="Engineering">Engineering</option>
                <option value="Sales">Sales</option>
                <option value="Operations">Operations</option>
                <option value="Community">Community</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="careers__field">
              <label class="careers__label">Availability</label>
              <select name="availability" required>
                <option value="Immediate">Immediate</option>
                <option value="Within 30 days">Within 30 days</option>
                <option value="Within 90 days">Within 90 days</option>
                <option value="Exploring">Exploring</option>
              </select>
            </div>

            <div class="careers__field">
              <label class="careers__label">LinkedIn URL (optional)</label>
              <input type="url" name="linkedin" />
            </div>

            <div class="careers__field careers__field--full">
              <label class="careers__label">Extra Notes (optional)</label>
              <textarea name="extra" rows="3"></textarea>
            </div>

          </div>

          <button type="submit" class="careers__submit">Send Application</button>
        </form>

        <div class="careers__confirmation" hidden>
          <h3>You’re officially on our radar.</h3>
          <p>We review every submission personally and will reach out if there’s a regional fit.</p>
        </div>
      </div>
    </div>
  `;

  const form = section.querySelector("#careersForm");
  const confirmation = section.querySelector(".careers__confirmation");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const background = [];
      form.querySelectorAll('input[name="background"]:checked').forEach((cb) => {
        background.push(cb.value);
      });

      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        city_state: formData.get("city_state"),
        background,
        motivation: formData.get("motivation"),
        interest: formData.get("interest"),
        role: formData.get("role"),
        availability: formData.get("availability"),
        linkedin: formData.get("linkedin") || null,
        extra: formData.get("extra") || null,
        created_at: new Date().toISOString(),
      };

      const { error } = await supabase.from("careers_submissions").insert(data);

      if (!error) {
        // Fire off confirmation email (don't await - let it happen in background)
        fetch("https://uclgflqwxdixbnylxmih.supabase.co/functions/v1/career-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: data.name, email: data.email }),
        }).catch((emailErr) => console.warn("Email send failed:", emailErr));

        form.style.opacity = "0";
        setTimeout(() => {
          form.hidden = true;
          confirmation.hidden = false;
          confirmation.style.opacity = "1";
        }, 400);
      } else {
        alert("Something went wrong. Please try again.");
        console.error(error);
      }
    });
  }

  return section;
}