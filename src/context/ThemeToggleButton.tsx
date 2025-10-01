import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggleButton: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-12 h-6 rounded-full p-1 transition-all duration-300
        shadow-lg hover:shadow-xl
        ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}
        hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500
        border border-gray-300 dark:border-gray-600
      `}
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div
        className={`
          absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md
          transform transition-all duration-300 flex items-center justify-center
          ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}
        `}
      >
        {isDarkMode ? (
          <FaMoon className="text-gray-700 text-xs" />
        ) : (
          <FaSun className="text-amber-500 text-xs" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggleButton;