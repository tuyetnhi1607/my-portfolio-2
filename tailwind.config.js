/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      "purple-to-green":
        "linear-gradient(180deg, #7C72FF 0%, #2DA44E 63.1%, #3FB950 83.6%, rgba(63, 185, 80, 0.00) 100%)",
      "transparent-to-purple":
        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #7C72FF 30%)",
      "green-to-transparent":
        "linear-gradient(180deg, #3FB950 0%, rgba(63, 185, 80, 0.00) 100%)",
      "transparent-to-green-to-transparent":
        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #3FB950 30%, rgba(63, 185, 80, 0.00) 100%)",
      "pink-to-transparent":
        "linear-gradient(180deg, #F778BA 0%, rgba(255, 124, 124, 0.00) 100%)",
      "transparent-to-pink":
        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #F778BA 30%)",
      "purple-to-orange": "linear-gradient(-250deg, #5e16ef 0%, #e66d2c 100%)",
    },

    extend: {
      transitionDuration: {
        3000: "3000ms",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-rotateY": "spinRotateY 10s linear infinite",
      },
      keyframes: {
        spinRotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
