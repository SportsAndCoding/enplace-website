// src/sse-main.js

import Navbar from "./components/navbar.js";
import SSE from "./components/sse.js";
import "./styles/globals.scss";

// Mount root
const app = document.getElementById("app");

// 1) Navbar
const navbar = Navbar();
app.appendChild(navbar);

// 2) SSE page
const sse = SSE();
app.appendChild(sse);

// Navbar scroll behavior
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 20);
});