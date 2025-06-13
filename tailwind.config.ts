import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#f8f9fa", // Light mode
          dark: "#1c1c1e", // Dark mode
        },
        foreground: {
          light: "#2e2e2e", // Light mode
          dark: "#e5e5e7", // Dark mode
        },
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
      },
      transitionDuration: {
        "300": "300ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
