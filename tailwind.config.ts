import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"]
      },
      colors: {
        primary: {
          300: "#FFA966",
          400: "#FF8A33",
          500: "#FF6B00",
          600: "#E05500",
          700: "#B84400"
        },
        dark: {
          600: "#3A3A3A",
          700: "#2A2A2A",
          800: "#1A1A1A",
          900: "#121212",
          950: "#0A0A0A"
        },
        whatsapp: "#25D366",
        success: "#00C853"
      },
      boxShadow: {
        glow: "0 0 44px rgba(255, 107, 0, 0.28)",
        "glow-strong": "0 0 80px rgba(255, 107, 0, 0.42)"
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        magnetic: "cubic-bezier(0.16, 1, 0.3, 1)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.82)", opacity: "0.9" },
          "80%, 100%": { transform: "scale(1.9)", opacity: "0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        }
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        "pulse-ring": "pulseRing 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        float: "float 5.5s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        shimmer: "shimmer 6s cubic-bezier(0.22, 1, 0.36, 1) infinite"
      }
    }
  },
  plugins: []
};

export default config;
