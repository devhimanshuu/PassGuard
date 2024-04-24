/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#061b2f",
        "custom-orange": "#fd7d4e",
      },
      gradientColorStops: (theme) => ({
        "dark-blue-start": "#000080", // Dark Blue
        "dark-blue-end": "#000033", // Dark Blue (Darker shade)
      }),
    },
  },
  plugins: [],
};
