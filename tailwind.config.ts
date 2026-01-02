import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        azure: {
          DEFAULT: "#0078D4",
          dark: "#0063B1",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0, 120, 212, 0.15), 0 10px 30px rgba(0, 120, 212, 0.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
