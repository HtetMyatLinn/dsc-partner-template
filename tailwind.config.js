/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,jsx,mdx,js,ts,tsx}"],
  theme: {
    fontFamily: {
      main: ['"Noto Sans JP"', "sans-serif"],
    },
    extend: {
      color: {
        "dsc-theme-primary": "#24B04B",
        "dsc-theme-accent": " #FB5F47 ",
        "dsc-theme-secondary": "#F9BE5A ",
        "dsc-theme-muted-500": "#262E32",
        "dsc-theme-muted-400": "#262E32",
        "dsc-theme-muted-300": "#e0e0e0",
        "dsc-theme-muted-200": "#f6f6f6",
        "dsc-theme-muted-100": "#fff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
