// src/components/navbar.js
import '../styles/components/navbar.scss';

export default function Navbar() {
  const nav = document.createElement('header');
  nav.className = 'navbar';

  nav.innerHTML = `
    <div class="navbar__inner">

      <!-- LEFT: Logo — clickable home -->
      <a href="/" class="navbar__logo">
        <img src="/assets/4_squares.png" onerror="this.src='/4_squares.png'" alt="En Place logo" class="navbar__logo-icon" />
        <span class="navbar__logo-text">En Place</span>
      </a>

      <!-- CENTER: Main nav links (V1 shipping state) -->
      <nav class="navbar__links" aria-label="Main navigation">

        <!-- Features Dropdown ONLY -->
        <div class="navbar__dropdown">
          <button class="navbar__link navbar__dropdown-toggle" type="button">
            Features
          </button>
          <div class="navbar__dropdown-menu">
            <a href="/sse">Staff Stability Engine (SSE)</a>
            <a href="/ssb">Stable Schedule</a>
            <a href="/sh">Stable Hire</a>
            <a href="/hg">House Guardian</a>
            <a href="/osm">Open Shift Marketplace</a>
            <a href="/ssp">Shift Swap Portal</a>
          </div>
        </div>

        <!-- Pricing — top-level, no dropdown -->
        <a href="/pricing" class="navbar__link">Pricing</a>
        <a href="/learn" class="navbar__link">Learn</a>
        <a href="/contact" class="navbar__link">Contact</a>
      </nav>

      <!-- RIGHT: Auth + CTA -->
      <div class="navbar__actions">
        <a href="https://app.en-place.ai/index.html" class="navbar__login">Login</a>
        <a href="/buy" class="navbar__cta">Buy Now</a>
      </div>

      <!-- Mobile hamburger -->
      <button class="navbar__hamburger" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- MOBILE MENU — stripped down -->
    <div class="navbar__mobile-menu" aria-label="Mobile navigation">

      <div class="navbar__mobile-dropdown">
        <button class="navbar__mobile-dropdown-title" type="button">Features</button>
        <div class="navbar__mobile-subnav">
          <a href="/sse" class="navbar__mobile-subitem">Staff Stability Engine (SSE)</a>
          <a href="/ssb" class="navbar__mobile-subitem">Stable Schedule</a>
          <a href="/sh" class="navbar__mobile-subitem">Stable Hire</a>
          <a href="/hg" class="navbar__mobile-subitem">House Guardian</a>
          <a href="/osm" class="navbar__mobile-subitem">Open Shift Marketplace</a>
          <a href="/ssp" class="navbar__mobile-subitem">Shift Swap Portal</a>
        </div>
      </div>

      <a href="/pricing" class="navbar__mobile-item">Pricing</a>
      <a href="/learn" class="navbar__mobile-item">Learn</a>
      <a href="/contact" class="navbar__mobile-item">Contact</a>
      
      <div class="navbar__mobile-divider"></div>
      
      <a href="https://app.en-place.ai/index.html" class="navbar__mobile-login">Login</a>
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

  // Mobile Features accordion (only one left)
  nav.querySelectorAll('.navbar__mobile-dropdown-title').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('open');
      button.nextElementSibling.classList.toggle('open');
    });
  });

  // Close mobile menu on link click
  nav.querySelectorAll('.navbar__mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.classList.remove('nav-open');
    });
  });

  return nav;
}