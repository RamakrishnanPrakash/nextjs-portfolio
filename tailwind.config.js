/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,css}", // for app directory (Next 13+)

    "./pages/**/*.{js,ts,jsx,tsx}", // for pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
