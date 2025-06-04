// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", 
        secondary: "#6B7280",
        accent: "#F59E0B",
        background: "#F3F4F6",
        textPrimary: "#111827", 
        textSecondary: "#374151", 
        border: "#D1D5DB", 
        success: "#10B981",
        error: "#EF4444",
        main: "#000000"
    },
  }
  },
  plugins: [],
};
