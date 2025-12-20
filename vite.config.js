// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    appType: 'mpa',

    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                pricing: './pricing/index.html',
                careers: './careers/index.html',
                sse: './sse/index.html',
                sh: './sh/index.html',
                hg: './hg/index.html',
                ssb: './ssb/index.html',
                osm: './osm/index.html',
                ssp: './ssp/index.html',
                buy: './buy/index.html'
            }
        }
    },

    plugins: [
        {
            name: 'mpa-directory-index',
            apply: 'serve',
            configureServer(server) {
                server.middlewares.use(async (req, res, next) => {
                    // Rewrite clean URLs in dev
                    if (req.url === '/pricing' || req.url === '/pricing/') {
                        req.url = '/pricing/index.html';
                    }
                    if (req.url === '/careers' || req.url === '/careers/') {   // ← ADDED
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
                    next();
                });
            }
        }
    ]
});