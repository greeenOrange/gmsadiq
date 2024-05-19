import React from 'react';
import { useTheme } from '../context/themeContext';
import { IoMdSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <AnimatePresence mode='wait'
    key={theme}
    >
    <motion.button
    className={`${
      theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'
    } px-4 py-2 rounded`}
    onClick={toggleTheme}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    {theme === 'light' ? <IoMdSunny /> : < FaRegMoon />}
    </motion.button>
    </AnimatePresence>
  );
};

export default ThemeToggle;
