import { defineConfig } from 'vite';

export default defineConfig({
  base: '/3D-art-gallery',
  build: {
    target: "ES2022" // <--------- ✅✅✅✅✅✅
  },
});
