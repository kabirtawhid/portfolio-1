/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-1": "#E6E6E6",
        "white-2": "#C0C0C0",
        "green-1": "#5DD9A3",
      },
    },
  },
  plugins: [],
};
