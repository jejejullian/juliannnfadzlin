import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['react-icons'],
  },
  server: {
    proxy: {
      // Proxy /api/* to the Vercel dev server when running `vercel dev`
      // If you run plain `vite`, the /api route will fail gracefully
      // (useGithubData falls back to simulated data automatically)
      '/api': {
        target:       'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
