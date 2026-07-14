import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Marketing single-page app for the Dap IN host features pitch.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
