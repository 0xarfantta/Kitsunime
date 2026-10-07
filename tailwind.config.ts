import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        japanese: ['"Yuji Boku"', "serif"],
      },
      colors: {
        brand: {
          orange: "#FF5E0E",
          "orange-light": "#FF7A2F",
          "orange-dark": "#E04A00",
          yellow: "#FFB800",
          "yellow-light": "#FFCE38",
          "yellow-accent": "#FFE600",
          white: "#FFFFFF",
          cream: "#FFF9F2",
          dark: "#120F0C",
          "dark-card": "#1C1713",
          "dark-border": "#33271E",
          "dark-hover": "#2A2018",
        },
      },
      boxShadow: {
        "glow-orange": "0 0 25px -5px rgba(255, 94, 14, 0.5)",
        "glow-yellow": "0 0 25px -5px rgba(255, 184, 0, 0.5)",
        citrus: "0 10px 30px -10px rgba(255, 94, 14, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
