import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import html from '@rollup/plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    html(),
    react()
  ],
  optimizeDeps: {
    exclude: ['@mapbox/node-pre-gyp']
  }
})
