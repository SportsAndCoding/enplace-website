// src/ssp-main.js

import Navbar from "./components/navbar.js";
import SSP from "./components/ssp.js";
import "./styles/globals.scss";

// Mount root
const app = document.getElementById("app");

// ---------------------
// COMPONENT MOUNT ORDER
// ---------------------

// 1) Navbar
const navbar = Navbar();
app.appendChild(navbar);

// 2) Shift Swap Portal page
const ssp = SSP();
app.appendChild(ssp);

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