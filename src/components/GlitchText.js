import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlitchText = ({ 
  words = [], 
  className = "",
  glitchDuration = 3000,
  transitionDuration = 500
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (words.length <= 1) return;

    const interval = setInterval(() => {
      setIsGlitching(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsGlitching(false);
      }, transitionDuration);
    }, glitchDuration);

    return () => clearInterval(interval);
  }, [words.length, glitchDuration, transitionDuration]);

  if (!words.length) return null;

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isGlitching ? [1, 0.3, 1, 0.1, 1] : 1,
            y: isGlitching ? [0, -2, 2, -1, 0] : 0,
            scaleX: isGlitching ? [1, 1.05, 0.95, 1.02, 1] : 1,
            filter: isGlitching ? [
              'hue-rotate(0deg)',
              'hue-rotate(90deg)', 
              'hue-rotate(180deg)',
              'hue-rotate(270deg)',
              'hue-rotate(0deg)'
            ] : 'hue-rotate(0deg)'
          }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: isGlitching ? 0.5 : 0.3,
            ease: "easeInOut"
          }}
          className={`
            ${isGlitching ? 'glitch-text' : ''}
            text-gradient-vaporwave
          `}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
      
      {/* Glitch overlay effects */}
      {isGlitching && (
        <>
          <motion.span
            className="absolute inset-0 text-vaporwave-pink opacity-70"
            initial={{ x: 0 }}
            animate={{ x: [-2, 2, -1, 1, 0] }}
            transition={{ duration: 0.5 }}
          >
            {words[currentIndex]}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-vaporwave-teal opacity-70"
            initial={{ x: 0 }}
            animate={{ x: [2, -2, 1, -1, 0] }}
            transition={{ duration: 0.5 }}
          >
            {words[currentIndex]}
          </motion.span>
        </>
      )}
    </span>
  );
};

export default GlitchText;
