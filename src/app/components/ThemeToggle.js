import React from 'react';
import { useTheme } from '../context/themeContext';
import { IoMdSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <button
    className={`${
      theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'
    } px-4 py-2 rounded`}
    onClick={toggleTheme}
  >
    {theme === 'light' ? <IoMdSunny /> : < FaRegMoon />}
    </button>
  );
};

export default ThemeToggle;
