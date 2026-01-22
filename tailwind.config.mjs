/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        colors: {
          brand: {
            // Lightest (Background)
            bone: 'var(--color-bone)',

            // Neutral / Utility (NEW)
            mist: 'var(--color-mist)', // #93998e (Great for borders)

            // Primary (The Core)
            olive: 'var(--color-dusty-olive-600)',
            'olive-dark': 'var(--color-dusty-olive-800)',

            // Accents
            orange: 'var(--color-fox-orange)',
            gunmetal: 'var(--color-gunmetal)', // Tech/Metal
            taupe: 'var(--color-taupe)',       // Earth/Sand

            // Darkest (Text/Contrast)
            loam: 'var(--color-loam)',
          }
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