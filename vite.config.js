import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    root: '.',           // ← tells Vite the project root
    publicDir: 'public', // ← tells Vite where index.html lives
    build: {
        outDir: 'dist'
    },
    server: {
        port: 3000,
        host: true
    }
})