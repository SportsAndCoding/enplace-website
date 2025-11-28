// vite.config.js — KEEP appType: 'mpa' + FIX PUBLIC ASSETS
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    appType: 'mpa',                     // ← KEEP THIS. Your other fixes depend on it.

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                pricing: resolve(__dirname, 'pricing/index.html'),
                careers: resolve(__dirname, 'careers/index.html'),
            },
        },
    },

    // THIS IS THE MISSING PIECE THAT FIXES PUBLIC ASSETS WITH appType: 'mpa'
    publicDir: 'public',   // ← forces Vite to copy the public folder even in MPA mode

    plugins: [
        {
            name: 'clean-urls-dev-only',
            apply: 'serve',
            configureServer(server) {
                server.middlewares.use((req, _, next) => {
                    if (req.url?.endsWith('/') || req.url === '/pricing' || req.url === '/careers') {
                        const clean = req.url.replace(/\/$/, '') || '/';
                        if (['/pricing', '/careers'].includes(clean)) {
                            req.url = `${clean}/index.html`;
                        }
                    }
                    next();
                });
            },
        },
    ],
});