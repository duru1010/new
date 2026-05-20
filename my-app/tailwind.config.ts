// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Excellent addition!
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🚀 ACETERNITY-STYLE ANIMATION ENGINE
      animation: {
        'vertical-marquee': 'vertical-marquee linear infinite',
      },
      keyframes: {
        'vertical-marquee': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;