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
          50: "#020a06",
          100: "#08160f",
          200: "#0f2418",
          300: "#163a26",
          400: "#1d6b3e",
          500: "#22c55e",
          600: "#4ade80",
          700: "#86efac",
          800: "#bbf7d0",
          900: "#ecfdf5",
        },
      },
      fontFamily: {
        sans: ["'Pretendard'", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
