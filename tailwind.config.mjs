/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#ED2500",
        secondary: "#521575",
        tertiary: "#383838",
        "off-white": "#F0F0F0",
      },
      fontFamily: {
        manrope: "var(--font--manrope)",
        asap: "var(--font--asap)",
      },
    },
  },
  plugins: [],
};
