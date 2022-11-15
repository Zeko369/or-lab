/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-fast": "spin 0.5s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  safelist: [
    {
      pattern: /bg-\w*-\d*/,
      variants: ["active", "hover", "focus"],
    },
  ],
};
