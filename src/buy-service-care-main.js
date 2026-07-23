// src/buy-service-care-main.js

import Navbar from "./components/navbar.js";
import BuyServiceCare from "./components/buy-service-care.js";
import "./styles/globals.scss";

const app = document.getElementById("app");

const navbar = Navbar();
app.appendChild(navbar);

const page = BuyServiceCare();
app.appendChild(page);

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (!nav) return;
    if (window.scrollY > 20) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
