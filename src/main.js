// src/main.js

import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";
import "./styles/globals.scss";

// Mount root
const app = document.getElementById("app");

// ---------------------
// COMPONENT MOUNT ORDER
// ---------------------

// 1) Navbar (always first)
app.appendChild(Navbar());

// 2) Hero section (homepage only)
app.appendChild(Hero());

// ---------------------
// HERO FADE-IN ON LOAD
// ---------------------
window.addEventListener("load", () => {
  const heroEl = document.querySelector(".hero");
  if (heroEl) heroEl.classList.add("hero--loaded");
});

// ---------------------
// NAVBAR SCROLL BEHAVIOR
// ---------------------
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (!nav) return;

  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
