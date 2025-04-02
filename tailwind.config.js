/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#2E1A47", // Deep purple gradient start
        backgroundDark: "#140D26", // Deep purple gradient end
        title: "#50E3C2", // Bright turquoise for headings
        text: "#EAEAEA", // Soft white for readability
        accent: "#00C3FF", // Neon blue for buttons & highlights
      },
    },
  },
  plugins: [],
};
