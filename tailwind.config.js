/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgc: "rgba(var(--color-bgc), <alpha-value>)",
        content: "rgba(var(--color-content), <alpha-value>)",
        accent: "rgba(var(--color-accent), <alpha-value>)",
        hvr: "rgba(var(--color-hvr), <alpha-value>)"
      },
      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
