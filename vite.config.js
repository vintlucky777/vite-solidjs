import { defineConfig } from 'vite'
import solidjs from 'vite-plugin-solid'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solidjs()],
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
    },
  },
})
