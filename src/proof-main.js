// src/proof-main.js
// Proof Intelligence — standalone entry point
// Lives at proof.en-place.ai — no En Place navbar

import ProofLanding from "./components/proof-landing.js";
import "./styles/components/proof.scss";

const app = document.getElementById("app");
const page = ProofLanding();
app.appendChild(page);