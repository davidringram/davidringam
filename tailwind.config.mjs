/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // The Core Identity
          olive: '#5F7150',      // Primary Brand Color
          orange: '#D94E1F',     // Main CTA / Action
          coyote: '#B0A184',     // Subtle Accents / Borders

          // Surfaces
          loam: '#2B2621',       // Dark backgrounds / Text
          bone: '#F5F5F0',       // Light backgrounds
        }
      },
      fontFamily: {
        // We'll configure fonts later, but reserving the slots
        sans: ['Inter', 'sans-serif'],
        display: ['Black Ops One', 'Roboto Slab', 'serif'],
      },
      backgroundImage: {
        // Setting up for your topographical motifs later
        'topo': "url('/assets/topo-pattern.svg')",
      }
    },
  },
  plugins: [],
}