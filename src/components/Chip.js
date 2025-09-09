import React from 'react';
import { motion } from 'framer-motion';

const Chip = ({ 
  children, 
  variant = 'default', 
  className = '', 
  onClick,
  title,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 cursor-default";
  
  const variants = {
    default: "bg-gray-700 text-gray-300 border border-gray-600",
    neon: "bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-500/25",
    gradient: "bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-pink-300 border border-pink-500/50 shadow-lg shadow-pink-500/25",
    success: "bg-green-500/20 text-green-300 border border-green-500/50",
    warning: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/50",
    error: "bg-red-500/20 text-red-300 border border-red-500/50"
  };
  
  const hoverEffects = {
    default: "hover:bg-gray-600 hover:text-white",
    neon: "hover:bg-cyan-500/30 hover:shadow-cyan-500/40 hover:scale-105",
    gradient: "hover:bg-pink-500/40 hover:shadow-pink-500/40 hover:scale-105",
    success: "hover:bg-green-500/30 hover:scale-105",
    warning: "hover:bg-yellow-500/30 hover:scale-105",
    error: "hover:bg-red-500/30 hover:scale-105"
  };

  const chipClasses = `
    ${baseClasses}
    ${variants[variant] || variants.default}
    ${onClick ? `${hoverEffects[variant] || hoverEffects.default} cursor-pointer` : ''}
    ${className}
  `;

  const ChipComponent = onClick ? motion.button : motion.div;
  
  const motionProps = onClick ? {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    onClick
  } : {};

  return (
    <ChipComponent
      className={chipClasses}
      title={title}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      {...motionProps}
      {...props}
    >
      {children}
    </ChipComponent>
  );
};

export default Chip;
