/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-main": "#FF8A00",
        "purple-main": "#6825C7",
      },
    },
  },
  plugins: [],
};
