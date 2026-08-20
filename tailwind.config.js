/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2f9",
          100: "#d6e0f0",
          200: "#aebfe0",
          300: "#7e96c9",
          400: "#4f6db0",
          500: "#2f4f96",
          600: "#1f3864",
          700: "#1a2f52",
          800: "#162642",
          900: "#101d35",
          950: "#0a1322",
        },
        accent: {
          50: "#eef3f8",
          100: "#d4e3ef",
          200: "#a8c5df",
          300: "#7ba6cf",
          400: "#4f86bd",
          500: "#3a6ba3",
          600: "#2d5687",
          700: "#25466e",
          800: "#1f3a59",
          900: "#1a3049",
          950: "#112234",
        },
        neutral: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
