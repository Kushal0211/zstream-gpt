/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    xtend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(5em)" },
        },
      },
      animation: {
        marquee: "marquee 1s linear infinite",
      },
    },
  },
  plugins: [],
}