// src/faq-main.js

import Navbar from "./components/navbar.js";
import Faq from "./components/faq.js";
import "./styles/globals.scss";

const app = document.getElementById("app");

const navbar = Navbar();
app.appendChild(navbar);

const faq = Faq();
app.appendChild(faq);

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 20);
});