/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Familjen Grotesk"', "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#e7e7eb",
        ink: "#12131a",
        muted: "#5c6070",
        line: "#c5c7d1",
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
