import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide_left: {
          "100%": { transform: "translateX(-100%)" },
        },
        slide_right: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        wiggle: {
          "0%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(5deg)" },
        },
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
      animation: {
        move: "move 5s linear infinite",
        slideLeft: "slide_left 15s linear infinite",
        slideRight: "slide_right 20s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
