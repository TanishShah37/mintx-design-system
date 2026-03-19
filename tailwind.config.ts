import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./apps/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: "#E6FBF5",
          100: "#BFFAE9",
          200: "#7DEFD2",
          300: "#3DDCBA",
          400: "#10C9A0",
          500: "#00B38A",
          600: "#008F6E",
          700: "#006B52",
          800: "#004736",
          900: "#00231A",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#F5F8F7",
          100: "#EBF0EE",
          150: "#D8E0DE",
          200: "#C2CECA",
          300: "#9BACA6",
          400: "#748A83",
          500: "#55706A",
          600: "#3A524D",
          700: "#253733",
          800: "#141F1D",
          850: "#0D1614",
          900: "#080E0D",
          950: "#040807",
        },
        brand: {
          DEFAULT: "var(--mint-400)",
          soft: "var(--mint-50)",
        },
        surface: {
          DEFAULT: "var(--bg-surface)",
          elevated: "var(--bg-elevated)",
          base: "var(--bg-base)",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        "2xl": "28px",
      },
      spacing: {
        "sp-1": "4px",
        "sp-2": "8px",
        "sp-3": "12px",
        "sp-4": "16px",
        "sp-5": "20px",
        "sp-6": "24px",
        "sp-8": "32px",
        "sp-10": "40px",
        "sp-12": "48px",
        "sp-16": "64px",
        "sp-20": "80px",
      },
      animation: {
        "pulse-live": "pulse-live 1.8s ease infinite",
        "gentle-pulse": "gentle-pulse 1.8s ease infinite",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        pulseLive: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.5)" },
          "50%": { boxShadow: "0 0 0 6px rgba(34, 197, 94, 0)" },
        },
        gentlePulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
