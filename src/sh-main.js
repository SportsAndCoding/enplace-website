// src/sh-main.js

import Navbar from "./components/navbar.js";
import SH from "./components/sh.js";
import VideoModal, { initVideoModal } from "./components/videoModal.js";
import "./styles/globals.scss";

// Mount root
const app = document.getElementById("app");

// ---------------------
// COMPONENT MOUNT ORDER
// ---------------------

// 1) Navbar
const navbar = Navbar();
app.appendChild(navbar);

// 2) Stable Hire page
const sh = SH();
app.appendChild(sh);

// 3) Video Modal
app.appendChild(VideoModal());
initVideoModal();

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