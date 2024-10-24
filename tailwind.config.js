// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-shadow': "url('./src/assets/bg-shadow.png')", // Correct way to add the image
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};

export default config;
