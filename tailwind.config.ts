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
        sk: ["Sim"],
      },
      colors: {
        primary: {
          100: '#177d34', // green
          110: '#7d1616',
          120: '#16167d',
          130: '#7d6c16',
          140: '#494949',
          200: '#ffffff', // white 
        },
      }
    }
  },

	plugins: [ typography, forms, containerQueries, aspectRatio]
} satisfies Config;