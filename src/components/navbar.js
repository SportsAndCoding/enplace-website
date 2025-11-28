// src/components/navbar.js
import '../styles/components/navbar.scss';

export default function Navbar() {
  const nav = document.createElement('header');
  nav.className = 'navbar';

  nav.innerHTML = `
    <div class="navbar__inner">

      <!-- LEFT: Logo — NOW CLICKABLE HOME LINK -->
      <a href="/" class="navbar__logo">
        <img src="/4_squares.png" alt="En Place logo" class="navbar__logo-icon" />
        <span class="navbar__logo-text">En Place</span>
      </a>

      <!-- CENTER: Main nav links -->
      <nav class="navbar__links" aria-label="Main navigation">

        <!-- Features Dropdown -->
        <div class="navbar__dropdown">
          <button class="navbar__link navbar__dropdown-toggle" type="button">
            Features
          </button>
          <div class="navbar__dropdown-menu">
            <a href="#sse">Staff Stability Engine (SSE)</a>
            <a href="#stable-schedule">Stable Schedule</a>
            <a href="#stable-hire">Stable Hire</a>
            <a href="#house-guardian">House Guardian</a>
            <a href="#open-shift-market">Open Shift Marketplace</a>
            <a href="#shift-swap">Shift Swap Portal</a>
          </div>
        </div>

        <!-- Network Dropdown -->
        <div class="navbar__dropdown">
          <button class="navbar__link navbar__dropdown-toggle" type="button">
            Our Network
          </button>
          <div class="navbar__dropdown-menu">
            <a href="/affiliate">Affiliate</a>
            <a href="/movement">The Movement</a>
            <a href="/testimonials">Testimonials</a>
          </div>
        </div>

        <a href="/intelligence-hub" class="navbar__link">Intelligence Hub</a>
        <a href="/pricing" class="navbar__link">Pricing</a>
      </nav>

      <!-- RIGHT: Auth + CTA -->
      <div class="navbar__actions">
        <a href="/login" class="navbar__login">Login</a>
        <a href="/buy" class="navbar__cta">Buy Now</a>
      </div>

      <!-- Mobile hamburger -->
      <button class="navbar__hamburger" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <div class="navbar__mobile-menu" aria-label="Mobile navigation">

      <div class="navbar__mobile-group">
        <button class="navbar__mobile-section">Features</button>
        <a href="#sse" class="navbar__mobile-sub">Staff Stability Engine (SSE)</a>
        <a href="#stable-schedule" class="navbar__mobile-sub">Stable Schedule</a>
        <a href="#stable-hire" class="navbar__mobile-sub">Stable Hire</a>
        <a href="#house-guardian" class="navbar__mobile-sub">House Guardian</a>
        <a href="#open-shift-market" class="navbar__mobile-sub">Open Shift Marketplace</a>
        <a href="#shift-swap" class="navbar__mobile-sub">Shift Swap Portal</a>
      </div>

      <div class="navbar__mobile-group">
        <button class="navbar__mobile-section">Our Network</button>
        <a href="/affiliate" class="navbar__mobile-sub">Affiliate</a>
        <a href="/movement" class="navbar__mobile-sub">The Movement</a>
        <a href="/testimonials" class="navbar__mobile-sub">Testimonials</a>
      </div>

      <a href="/intelligence-hub" class="navbar__mobile-link">Intelligence Hub</a>
      <a href="/pricing" class="navbar__mobile-link">Pricing</a>
      <a href="/login" class="navbar__mobile-link">Login</a>
      <a href="/buy" class="navbar__cta-mobile">Buy Now</a>
    </div>
  `;

  // Mobile menu toggle
  const hamburger = nav.querySelector('.navbar__hamburger');
  const mobileMenu = nav.querySelector('.navbar__mobile-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('nav-open');
  });

  return nav;
}
