/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#10092D",
        backgroundDark: "#331E58", // Deep purple gradient end
        title: "#50E3C2", // Bright turquoise for headings
        text: "#EAEAEA", // Soft white for readability
        accent: "#00C3FF", // Neon blue for buttons & highlights
      },
      fontFamily: {
        metalMania: ["Metal Mania", "cursive"],
        inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
