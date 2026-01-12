// src/rep-main.js
// Entry point for rep booking pages
// Loads the rep config and initializes the booking component

import './styles/globals.scss';
import './styles/components/rep.scss';
import { RepBooking } from './components/rep.js';

// Wait for DOM and config
document.addEventListener('DOMContentLoaded', () => {
    // REP_CONFIG should be defined in the page's config.js
    if (window.REP_CONFIG) {
        new RepBooking(window.REP_CONFIG);
    } else {
        console.error('REP_CONFIG not defined. Make sure config.js is loaded before rep-main.js');

        // Show error state
        const app = document.getElementById('rep-booking-app');
        if (app) {
            app.innerHTML = `
                <div class="rep">
                    <div class="rep__container">
                        <div class="rep-notfound rep-notfound--active">
                            <h2 class="rep-notfound__title">Configuration Error</h2>
                            <p class="rep-notfound__text">This page is not configured correctly.</p>
                            <a href="https://www.en-place.ai" class="rep-btn rep-btn--primary">Visit En Place</a>
                        </div>
                    </div>
                </div>
            `;
        }
    }
});