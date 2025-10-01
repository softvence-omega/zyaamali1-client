import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Define the type for the theme context
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Default value for the context
const defaultContextValue: ThemeContextType = {
  isDarkMode: false,
  toggleTheme: () => {},
};

// Create the ThemeContext
const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

interface ThemeProviderProps {
  children: ReactNode;
}

// Create a ThemeProvider component to wrap the app and manage the theme
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set default theme based on localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
