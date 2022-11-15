/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  safelist: [
    {
      pattern: /bg-\w*-\d*/,
      variants: ["active", "hover", "focus"],
    },
  ],
};
