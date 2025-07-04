import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const Theme = () => {
  const [darkMode, setDarkMode] = useState(false)

 useEffect(() => {
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
 }, [darkMode])
 
 const toggleDarkMode = () => {
    setDarkMode(!darkMode)
 }
   

  return (
    <button
      onClick={toggleDarkMode }
      className="fixed bottom-6 cursor-pointer right-6 p-3 rounded-full transition bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
    </button>
  );
};
