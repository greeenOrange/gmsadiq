import React from 'react';
import { useTheme } from '../context/themeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
    className={`${
      theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'
    } px-4 py-2 rounded`}
    onClick={toggleTheme}
  >
    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
  </button>
  );
};

export default ThemeToggle;
