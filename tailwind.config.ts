import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      egg: '#F0EAD6',
      secondary: '#F0EAD6',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
