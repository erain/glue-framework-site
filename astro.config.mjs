// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// `site` is used to build absolute URLs for canonical, og:image, etc.
// Override at deploy time via `ASTRO_SITE` if a custom domain lands.
const site = process.env.ASTRO_SITE ?? 'https://glue-framework.vercel.app';

// https://astro.build/config
export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()]
  }
});
