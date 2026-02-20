// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    appType: 'mpa',

    build: {
        rollupOptions: {
            input: {
                // ─────────────────────────────────────
                // EXISTING PAGES
                // ─────────────────────────────────────
                main: './index.html',
                pricing: './pricing/index.html',
                careers: './careers/index.html',
                sse: './sse/index.html',
                sh: './sh/index.html',
                hg: './hg/index.html',
                ssb: './ssb/index.html',
                osm: './osm/index.html',
                ssp: './ssp/index.html',
                buy: './buy/index.html',
                register: './register/index.html',
                join: './join/index.html',
                contact: './contact/index.html',
                terms: './terms/index.html',
                privacy: './privacy/index.html',
                learn: './learn/index.html',
                learnHiddenHemorrhage: './learn/hidden-hemorrhage/index.html',
                calculator: './calculator/index.html',
                effect: './effect/index.html',

                // ─────────────────────────────────────
                // SALES REP BOOKING PAGES
                // Add new reps here as: repName: './rep-slug/index.html'
                // ─────────────────────────────────────
                kyleParker: './kyle-parker/index.html',
                // amandaNunnallee: './amanda-nunnallee/index.html',
                // juliaVanDorn: './julia-van-dorn/index.html',
            }
        }
    },

    plugins: [
        {
            name: 'mpa-directory-index',
            apply: 'serve',
            configureServer(server) {
                server.middlewares.use(async (req, res, next) => {
                    // ─────────────────────────────────────
                    // EXISTING PAGE REWRITES
                    // ─────────────────────────────────────
                    if (req.url === '/pricing' || req.url === '/pricing/') {
                        req.url = '/pricing/index.html';
                    }
                    if (req.url === '/careers' || req.url === '/careers/') {
                        req.url = '/careers/index.html';
                    }
                    if (req.url === '/sse' || req.url === '/sse/') {
                        req.url = '/sse/index.html';
                    }
                    if (req.url === '/sh' || req.url === '/sh/') {
                        req.url = '/sh/index.html';
                    }
                    if (req.url === '/hg' || req.url === '/hg/') {
                        req.url = '/hg/index.html';
                    }
                    if (req.url === '/ssb' || req.url === '/ssb/') {
                        req.url = '/ssb/index.html';
                    }
                    if (req.url === '/osm' || req.url === '/osm/') {
                        req.url = '/osm/index.html';
                    }
                    if (req.url === '/ssp' || req.url === '/ssp/') {
                        req.url = '/ssp/index.html';
                    }
                    if (req.url === '/buy' || req.url === '/buy/') {
                        req.url = '/buy/index.html';
                    }
                    if (req.url === '/register' || req.url === '/register/') {
                        req.url = '/register/index.html';
                    }
                    if (req.url.startsWith('/join')) {
                        req.url = '/join/index.html';
                    }
                    if (req.url === '/contact' || req.url === '/contact/') {
                        req.url = '/contact/index.html';
                    }
                    if (req.url === '/terms' || req.url === '/terms/') {
                        req.url = '/terms/index.html';
                    }
                    if (req.url === '/privacy' || req.url === '/privacy/') {
                        req.url = '/privacy/index.html';
                    }
                    if (req.url === '/learn' || req.url === '/learn/') {
                        req.url = '/learn/index.html';
                    }
                    if (req.url.startsWith('/learn/hidden-hemorrhage')) {
                        req.url = '/learn/hidden-hemorrhage/index.html';
                    }
                    if (req.url === '/calculator' || req.url === '/calculator/') {
                        req.url = '/calculator/index.html';
                    }
                    if (req.url === '/effect' || req.url === '/effect/') {
                        req.url = '/effect/index.html';
                    }

                    // ─────────────────────────────────────
                    // SALES REP BOOKING PAGE REWRITES
                    // Add new reps here
                    // ─────────────────────────────────────
                    if (req.url === '/kyle-parker' || req.url === '/kyle-parker/') {
                        req.url = '/kyle-parker/index.html';
                    }

                    next();
                });
            }
        }
    ]
});