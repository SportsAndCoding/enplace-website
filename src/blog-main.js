// src/blog-main.js

import Navbar from './components/navbar.js';
import BlogArticle from './components/blog-article.js';
import './styles/globals.scss';

// ─────────────────────────────────────
// RESOLVE ARTICLE SLUG FROM URL
// URL pattern: /learn/{slug}/
// Example: /learn/hidden-hemorrhage/ → slug = 'hidden-hemorrhage'
// ─────────────────────────────────────

function getSlugFromPath() {
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);
    // Expect: ['learn', 'slug-name']
    if (segments.length >= 2 && segments[0] === 'learn') {
        return segments[1];
    }
    return null;
}

// ─────────────────────────────────────
// MOUNT
// ─────────────────────────────────────

const app = document.getElementById('app');

// 1) Navbar
const navbar = Navbar();
app.appendChild(navbar);

// 2) Article
const slug = getSlugFromPath();
const article = BlogArticle(slug);
app.appendChild(article);

// ─────────────────────────────────────
// NAVBAR SCROLL BEHAVIOR
// ─────────────────────────────────────

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});