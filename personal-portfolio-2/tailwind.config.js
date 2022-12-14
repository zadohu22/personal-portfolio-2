/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f5985b",
        accent: "#d9cfcd",
        secondary: "#1E1E1E",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
