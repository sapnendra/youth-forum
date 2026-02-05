import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: "#C8621F",
          light: "#E6955D",
          muted: "#D4A574",
          dark: "#A04C16", // Darker shade for accessible text/buttons
        },
        beige: {
          DEFAULT: "#F5F1E8",
          soft: "#FAF8F3",
        },
        forest: {
          DEFAULT: "#3A5A40",
          light: "#588157",
        },
        charcoal: {
          DEFAULT: "#2B2D2F",
          light: "#4A4C4E",
        },
        gold: "#B8860B",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
