import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    wasm(),
    sveltekit()
  ],
  optimizeDeps: {
    exclude: ['@rdkit/rdkit']
  },
  build: {
    target: 'esnext'
  }
});
