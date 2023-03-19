const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-kumbh-sans)", ...fontFamily.sans],
        serif: ["var(--font-roboto-slab)", ...fontFamily.serif],
        mono: ["var(--font-space-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
