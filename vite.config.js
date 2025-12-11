import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite picks up Tailwind and Autoprefixer from postcss.config.cjs automatically.
export default defineConfig({
  plugins: [react(),],
})
