import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        america: ["GTAmerica"],
        freight: ["Freight"],
      },
      colors: {
        primary: {
          100: '#177d34', // green
          110: '#5F9EA0', // foam green
          200: '#ffffff', // off white 
        },
      }
    }
  },

	plugins: [ typography, forms, containerQueries, aspectRatio]
} satisfies Config;