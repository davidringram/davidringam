// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from "@astrojs/node";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // 1. Enable Server-Side Rendering (Required for API routes)
  output: 'server',

  // 2. Configure the Node Adapter
  adapter: node({
    mode: "standalone"
  }),

  // 3. Your Tailwind Configuration (Vite Plugin method)
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});