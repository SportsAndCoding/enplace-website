// src/careers-main.js

import Navbar from "./components/navbar.js";
import Careers from "./components/careers.js";
import "./styles/globals.scss";

// Mount root
const app = document.getElementById("app");

// ---------------------
// COMPONENT MOUNT ORDER
// ---------------------

// 1) Navbar — exactly like pricing page
const navbar = Navbar();
app.appendChild(navbar);

// 2) Careers page
const careers = Careers();
app.appendChild(careers);

// ---------------------
// NAVBAR SCROLL BEHAVIOR — identical to pricing page
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