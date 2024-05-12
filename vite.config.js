import { defineConfig } from 'vite';

export default defineConfig({
  base: 'https://catherineagl.github.io/',
  build: {
    rollupOptions: {
      input: '/main.js',
    },
  },
});
