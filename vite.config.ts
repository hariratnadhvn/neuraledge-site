import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/neuraledge-site/', // 👈 This is required for GitHub Pages
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'CNAME',
          dest: '.', // Copy to the root of the dist directory
        }
      ]
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
