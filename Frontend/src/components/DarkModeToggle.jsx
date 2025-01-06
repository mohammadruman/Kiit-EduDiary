import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';  // Importing React Icons

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode in localStorage or default to false
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-black-400 rounded-full shadow-lg"
      title="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <FaSun className="w-6 h-6 text-yellow-500" />  // Sun icon for dark mode
      ) : (
        <FaMoon className="w-6 h-6 text-blue-500" />  // Moon icon for light mode
      )}
    </button>
  );
};

export default DarkModeToggle;
