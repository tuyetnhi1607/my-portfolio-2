/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      "purple-to-green":
        "linear-gradient(180deg, #7C72FF 0%, #2DA44E 63.1%, #3FB950 83.6%, rgba(63, 185, 80, 0.00) 100%)",
      "transparent-to-purple":
        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #7C72FF 30%)",
    },
    extend: {},
  },
  plugins: [],
};
