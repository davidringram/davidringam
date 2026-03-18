// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// CHANGED: Import Netlify instead of Node
import netlify from '@astrojs/netlify';
import partytown from '@astrojs/partytown';

export default defineConfig({
  output: 'server',

  // CHANGED: Use the Netlify adapter
  adapter: netlify(),

  image: {
    domains: ["img.perceptpixel.com", "images.unsplash.com"],
  },

  integrations: [
    react(), 
    partytown({
      config: {
        // Keeps these functions available in the main thread
        forward: ['dataLayer.push', 'posthog.capture', 'posthog.init'],
        lib: '/~partytown',
        // FIX: This function intercepts the blocked requests and proxies them
        resolveUrl: function (url, location, type) {
          if (type === 'script' && url.host !== location.host) {
            var proxyUrl = new URL('https://cdn.builder.io/api/v1/proxy-api');
            proxyUrl.searchParams.append('url', url.href);
            return proxyUrl;
          }
          return url;
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});