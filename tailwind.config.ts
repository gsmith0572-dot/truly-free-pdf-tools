import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0058c3",
          light: "#0070f3",
        },
        surface: {
          base: "#f7fafc",
          low: "#f1f4f6",
          lowest: "#e5e9eb",
        },
        tx: {
          primary: "#181c1e",
          secondary: "#4a5568",
          muted: "#718096",
        },
        success: "#16a34a",
        error: "#dc2626",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.02em",
        tighter: "-0.03em",
        tightest: "-0.04em",
        label: "0.08em",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
      boxShadow: {
        float: "0px 8px 24px rgba(24,28,30,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
