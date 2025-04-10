import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'nav': '18px',
        "20px": "20px",
      },
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#000000",
          light: "#ffffff",
        },
        secondary: {
          DEFAULT: "#111111",
          pinkLight: "#FF9090",
          blackLight: "#595858",
          bg: "#F8F8F8",
          black2: "#222222",
          black3: "#f1f1f0",
        },
        neutral: {
          DEFAULT: "#F8F8F8",
          light: "#F5F5F5",
        },
        lightBlue: {
          DEFAULT: "#7f9aee",
          secondary: "#14c9ff",
        },
        border: {
          DEFAULT: "#E5E5E5",
        },
        fieldBg: {
          DEFAULT: "#f4f4f5",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
