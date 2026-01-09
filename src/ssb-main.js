// src/ssb-main.js

import Navbar from "./components/navbar.js";
import SSB from "./components/ssb.js";
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

// 2) Stable Schedule Builder page
const ssb = SSB();
app.appendChild(ssb);

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