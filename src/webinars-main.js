// src/webinars-main.js

import Navbar from "./components/navbar.js";
import Webinars from "./components/webinars.js";
import "./styles/globals.scss";

const app = document.getElementById("app");

const navbar = Navbar();
app.appendChild(navbar);

const webinars = Webinars();
app.appendChild(webinars);

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 20);
});