// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Used for absolute URLs. The site lives at the root of kahjun.github.io.
  site: 'https://kahjun.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});
