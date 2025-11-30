// src/components/navbar.js
import '../styles/components/navbar.scss';

export default function Navbar() {
  const nav = document.createElement('header');
  nav.className = 'navbar';

  nav.innerHTML = `
    <div class="navbar__inner">

      <!-- LEFT: Logo — NOW CLICKABLE HOME LINK -->
      <a href="/" class="navbar__logo">
        <img src="/assets/4_squares.png" onerror="this.src='/4_squares.png'" alt="En Place logo" class="navbar__logo-icon" />
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
            <a href="/sse">Staff Stability Engine (SSE)</a>
            <a href="/ssb">Stable Schedule</a>
            <a href="/sh">Stable Hire</a>
            <a href="/hg">House Guardian</a>
            <a href="/osm">Open Shift Marketplace</a>
            <a href="/ssp">Shift Swap Portal</a>
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

      <div class="navbar__mobile-dropdown">
        <button class="navbar__mobile-dropdown-title" type="button">Features</button>
        <div class="navbar__mobile-subnav">
          <a href="/sse" class="navbar__mobile-subitem">Staff Stability Engine (SSE)</a>
          <a href="ssb" class="navbar__mobile-subitem">Stable Schedule</a>
          <a href="/sh" class="navbar__mobile-subitem">Stable Hire</a>
          <a href="/hg" class="navbar__mobile-subitem">House Guardian</a>
          <a href="/osm" class="navbar__mobile-subitem">Open Shift Marketplace</a>
          <a href="/ssp" class="navbar__mobile-subitem">Shift Swap Portal</a>
        </div>
      </div>

      <div class="navbar__mobile-dropdown">
        <button class="navbar__mobile-dropdown-title" type="button">Our Network</button>
        <div class="navbar__mobile-subnav">
          <a href="/affiliate" class="navbar__mobile-subitem">Affiliate</a>
          <a href="/movement" class="navbar__mobile-subitem">The Movement</a>
          <a href="/testimonials" class="navbar__mobile-subitem">Testimonials</a>
        </div>
      </div>

      <a href="/intelligence-hub" class="navbar__mobile-item">Intelligence Hub</a>
      <a href="/pricing" class="navbar__mobile-item">Pricing</a>
      
      <div class="navbar__mobile-divider"></div>
      
      <a href="/login" class="navbar__mobile-login">Login</a>
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

  // Mobile dropdown accordions
  nav.querySelectorAll('.navbar__mobile-dropdown-title').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('open');
      button.nextElementSibling.classList.toggle('open');
    });
  });

  // Close mobile menu when a link is clicked
  nav.querySelectorAll('.navbar__mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.classList.remove('nav-open');
    });
  });

  return nav;
}
