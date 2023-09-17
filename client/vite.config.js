import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Using the proxy instance
      '/api': {
        target: 'http://localhost:8800',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // configure: (proxy, options) => {
        //   // proxy will be an instance of 'http-proxy'
        // },
      }
    }
  }
})
