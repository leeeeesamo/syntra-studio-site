/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./styles/**/*.{css}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          gradientStart: "var(--syntra-gradient-start)",
          gradientEnd: "var(--syntra-gradient-end)",
          soft: "var(--syntra-soft-bg)",
          deep: "var(--syntra-deep-bg)",
          heading: "var(--syntra-heading)",
          text: "var(--syntra-text-main)",
          muted: "var(--syntra-text-muted)",
          border: "var(--syntra-border-soft)",
        },
      },
      backgroundImage: {
        "syntra-gradient":
          "linear-gradient(to right, var(--syntra-gradient-start), var(--syntra-gradient-end))",
      },
    },
  },

  plugins: [],
};
