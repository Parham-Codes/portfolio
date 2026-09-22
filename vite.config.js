import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

const base = process.env.BASE_PATH || './';

// Ensure 404.html for GitHub Pages SPA routing is present in dist
const copy404Plugin = () => ({
  name: 'copy-404-html',
  closeBundle() {
    const distDir = path.resolve(process.cwd(), 'dist');
    const public404 = path.resolve(process.cwd(), 'public', '404.html');
    const notFoundHtml = path.join(distDir, '404.html');

    if (fs.existsSync(public404)) {
      fs.copyFileSync(public404, notFoundHtml);
    } else {
      const indexHtml = path.join(distDir, 'index.html');
      if (fs.existsSync(indexHtml)) {
        fs.copyFileSync(indexHtml, notFoundHtml);
      }
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), copy404Plugin()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});

