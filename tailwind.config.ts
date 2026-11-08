import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-text": "var(--accent-text)",
        "on-accent": "var(--on-accent)",
        link: "var(--link)",
        success: "var(--success)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["clamp(2.75rem, 1.9rem + 3.6vw, 4.5rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        h2: ["clamp(2.25rem, 2rem + 1vw, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
        h3: ["clamp(1.375rem, 1.3rem + 0.3vw, 1.625rem)", { lineHeight: "1.25" }],
        label: ["0.8125rem", { lineHeight: "1.4" }],
      },
      maxWidth: { content: "1120px" },
      borderRadius: { card: "16px" },
    },
  },
  plugins: [],
};

export default config;
