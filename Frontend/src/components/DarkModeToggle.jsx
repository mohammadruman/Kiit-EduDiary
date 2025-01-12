import React, { useEffect, useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => 
    localStorage.getItem("darkMode") === "enabled"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full shadow-lg transition-colors duration-200"
      title="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <HiSun className="w-4 h-4 text-yellow-400 hover:text-yellow-500" />
      ) : (
        <HiMoon className="w-4 h-4 text-gray-600 hover:text-gray-700" />
      )}
    </button>
  );
};

export default DarkModeToggle;