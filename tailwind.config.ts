import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf6f0",
          100: "#f8e6d3",
          200: "#efc8a0",
          300: "#e3a466",
          400: "#d18642",
          500: "#b56a2b",
          600: "#8f5121",
          700: "#6b3c19",
          800: "#4a2912",
          900: "#2d180b",
        },
      },
      fontFamily: {
        sans: ["'Pretendard'", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
