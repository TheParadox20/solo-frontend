import {  addDynamicIconSelectors } from "@iconify/tailwind"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-bg': 'radial-gradient(farthest-side circle at 50% 50%, rgba(0, 0, 0, 0.7) 0%, transparent 80%)',
      },
      colors: {
        primary: {
          light: "rgba(11, 123, 135, 1)",
          dark: "rgba(16, 31, 42, 1)",
          base:"rgba(16, 62, 71, 1)",
        },
        LightGray: "rgba(245, 240, 240, 1)",
        Grey:'rgba(201, 204, 206, 0.2)',
        Success: 'rgba(34, 220, 142, 1)',
        Warning: 'rgba(220, 156, 34, 1)',
        Error: 'rgba(220, 34, 34, 1)',
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
};
