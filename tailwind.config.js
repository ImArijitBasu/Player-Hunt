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
        'bg-shadow': "url('./assets/bg-shadow.png')", 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};

export default config;
