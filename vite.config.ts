import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Ensures the correct path for assets
  plugins: [react()],
  build: {
    outDir: 'build',
  },
});
