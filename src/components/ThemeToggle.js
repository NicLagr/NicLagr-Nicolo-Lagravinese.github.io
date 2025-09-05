import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('vaporwave');

  useEffect(() => {
    // Get theme from localStorage or default to vaporwave
    const savedTheme = localStorage.getItem('theme') || 'vaporwave';
    setTheme(savedTheme);
    
    // Apply theme to document
    if (savedTheme === 'modern') {
      document.documentElement.setAttribute('data-theme', 'modern');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'vaporwave' ? 'modern' : 'vaporwave';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'modern') {
      document.documentElement.setAttribute('data-theme', 'modern');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'vaporwave' ? 'modern minimal' : 'vaporwave'} theme`}
    >
      <motion.div
        className={`w-6 h-6 rounded-full shadow-md transform transition-all duration-300 ${
          theme === 'vaporwave' 
            ? 'bg-gradient-to-r from-vaporwave-pink to-vaporwave-purple translate-x-0' 
            : 'bg-gradient-to-r from-modern-blue-400 to-modern-blue-600 translate-x-8'
        }`}
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
      />
      
      {/* Theme icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <motion.div
          className={`text-xs transition-opacity duration-300 ${
            theme === 'vaporwave' ? 'opacity-100' : 'opacity-40'
          }`}
          animate={{ scale: theme === 'vaporwave' ? 1.2 : 1 }}
        >
          ✨
        </motion.div>
        <motion.div
          className={`text-xs transition-opacity duration-300 ${
            theme === 'modern' ? 'opacity-100' : 'opacity-40'
          }`}
          animate={{ scale: theme === 'modern' ? 1.2 : 1 }}
        >
          ☀️
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
