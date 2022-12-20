import { defineConfig } from 'vite';
import * as path from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import routify from '@roxi/routify/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    routify(),
  ],
  resolve: {
    alias: {
      $src: path.resolve('./src'),
      $routes: path.resolve('./src/routes'),
      $lib: path.resolve('./src/lib'),
      $modules: path.resolve('./src/modules'),
      $assets: path.resolve('./src/assets'),
      $store: path.resolve('./src/store')
    }
  },
})
