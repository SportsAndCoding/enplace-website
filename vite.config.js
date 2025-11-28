// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    appType: 'mpa',

    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                pricing: './pricing/index.html',
                careers: './careers/index.html'    // ← ADDED
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
                    next();
                });
            }
        }
    ]
});