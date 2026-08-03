import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['react-icons'],
  },
  // No proxy needed — useGithubData hook falls back to simulated data
  // when /api/github is unavailable (plain `vite dev` without vercel).
  // For real local data, run: vercel dev (starts both vite + api functions)
})
