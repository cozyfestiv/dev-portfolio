import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cssCodeSplit: true,
  build: {
    assetsInlineLimit: 0 // Disable asset inlining to ensure proper MIME types
  }
})
