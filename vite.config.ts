import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      ignored: ['**/coverage/**'],
    },
  },
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    istanbul({
      requireEnv: true,
      cypress: true,
    }),
  ],
});
