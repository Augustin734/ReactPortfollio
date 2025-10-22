import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permet d’accéder depuis l’extérieur du conteneur
    port: 5173,
  },
  build: {
    outDir: 'dist'
  }
})
