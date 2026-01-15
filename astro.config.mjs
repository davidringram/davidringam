// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// CHANGED: Import Netlify instead of Node
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',

  // CHANGED: Use the Netlify adapter
  adapter: netlify(),

  image: {
    domains: ["img.perceptpixel.com", "images.unsplash.com"],
  },

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});