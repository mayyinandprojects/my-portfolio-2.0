// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: '/my-portfolio-2.0/', // replace with your exact GitHub Pages repository name
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsDir: 'assets',
  },
});

