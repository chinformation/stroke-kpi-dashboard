import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/stroke-kpi-dashboard/',
  build: {
    outDir: 'docs'
  }
})
