import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:"localhost",
    port: '5173',
    proxy: {
      '^/react/.*': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, '/api'),
      }
    }
  }
})
