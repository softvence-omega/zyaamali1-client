// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enables dark mode with a class strategy
  content: [
    "./index.html", // Make sure to include HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all your React components
  ],
  theme: {
    extend: {
      // You can add your custom theme settings here if needed
    },
  },
  plugins: [],
};
