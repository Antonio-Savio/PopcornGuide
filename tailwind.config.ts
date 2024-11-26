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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      screens: {
        'xs': '380px'
      },

      keyframes: {
        wave: {
          "0%, 80%, 100%": { transform: "translateY(0px)" }, //translate-y-0"
          "40%": { transform: "translateY(0.8rem)" }, //translate-y-0.5
        },
      },

      animation: {
        wave: "wave 0.8s infinite ease",
      }
    },
  },
  plugins: [],
};

export default config;
