import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#080b14",
        midnight: "#0e1630",
        electric: "#3f86ff",
        gold: "#f4c06d",
        violet: "#6a5be2",
        emerald: "#3ec9a7",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(63, 134, 255, 0.35)",
      },
      backgroundImage: {
        "arc-gradient": "radial-gradient(circle at 15% 20%, rgba(63, 134, 255, 0.35), transparent 45%), radial-gradient(circle at 85% 30%, rgba(106, 91, 226, 0.25), transparent 42%), radial-gradient(circle at 50% 80%, rgba(62, 201, 167, 0.2), transparent 42%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
