// src/buy-small-business-main.js

import Navbar from "./components/navbar.js";
import BuySmallBusiness from "./components/buy-small-business.js";
import "./styles/globals.scss";

const app = document.getElementById("app");

const navbar = Navbar();
app.appendChild(navbar);

const page = BuySmallBusiness();
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
