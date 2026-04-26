import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0908",
          subtle: "#121110",
          raised: "#1A1816",
        },
        ink: {
          DEFAULT: "#F5EFE6",
          muted: "#A89B8C",
          dim: "#6B6158",
          faint: "#3A332D",
        },
        accent: {
          DEFAULT: "#D96C3A",
          hover: "#E27846",
          dim: "#A2502B",
        },
        rule: "rgba(245, 239, 230, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tight: "-0.02em",
        wider: "0.14em",
        widest: "0.22em",
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 9vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
