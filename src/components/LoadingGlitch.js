import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingGlitch = ({ 
  isLoading = true,
  loadedValue = '',
  className = '',
  placeholder = '???'
}) => {
  const [glitchChars, setGlitchChars] = useState(placeholder);
  const [isGlitching, setIsGlitching] = useState(false);

  // Vaporwave-style glitch characters
  const glitchCharSet = '█▓▒░▄▀■□▲▼◄►♦♠♣♥※∞';
  const originalChars = placeholder.split('');

  useEffect(() => {
    if (!isLoading) {
      // Stop glitching when loaded
      setIsGlitching(false);
      return;
    }

    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      
      // Create glitch effect
      const glitched = originalChars.map((char, index) => {
        // More aggressive glitching for loading state
        if (Math.random() < 0.7) {
          return glitchCharSet[Math.floor(Math.random() * glitchCharSet.length)];
        }
        return char;
      }).join('');
      
      setGlitchChars(glitched);
      
      // Reset to original after brief glitch
      setTimeout(() => {
        setGlitchChars(placeholder);
        setIsGlitching(false);
      }, 100);
      
    }, 200); // Fast glitching for loading effect

    return () => clearInterval(glitchInterval);
  }, [isLoading, placeholder]);

  if (!isLoading && loadedValue) {
    // Show the actual loaded value with a subtle entrance animation
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={className}
      >
        {loadedValue}
      </motion.span>
    );
  }

  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        animate={{
          opacity: isGlitching ? [1, 0.3, 1, 0.1, 1] : [1, 0.7, 1],
          scale: isGlitching ? [1, 1.05, 0.95, 1.02, 1] : [1, 1.02, 1],
          textShadow: isGlitching ? [
            '0 0 5px #ff4fd8',
            '0 0 10px #6c59ff, 2px 0 0 #ff4fd8',
            '0 0 15px #33e1ff, -2px 0 0 #ff4fd8',
            '0 0 10px #6c59ff, 1px 0 0 #33e1ff',
            '0 0 5px #ff4fd8'
          ] : '0 0 5px #ff4fd8'
        }}
        transition={{
          duration: isGlitching ? 0.1 : 2,
          ease: "easeInOut",
          repeat: isGlitching ? 0 : Infinity,
          repeatType: "reverse"
        }}
        className={`
          ${isGlitching ? 'text-vw-pink' : 'text-vw-cyan'}
          font-mono font-bold
        `}
        style={{
          filter: isGlitching ? `
            drop-shadow(2px 0 0 #ff4fd8) 
            drop-shadow(-2px 0 0 #33e1ff)
            hue-rotate(${Math.random() * 360}deg)
          ` : 'none'
        }}
      >
        {glitchChars}
      </motion.span>
      
      {/* Additional glitch overlay effects when actively glitching */}
      {isGlitching && (
        <>
          <motion.span
            className="absolute inset-0 text-vw-pink opacity-60 font-mono font-bold"
            initial={{ x: 0 }}
            animate={{ x: [-1, 2, -1, 1, 0] }}
            transition={{ duration: 0.1 }}
          >
            {glitchChars}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-vw-cyan opacity-60 font-mono font-bold"
            initial={{ x: 0 }}
            animate={{ x: [2, -1, 2, -1, 0] }}
            transition={{ duration: 0.1 }}
          >
            {glitchChars}
          </motion.span>
          
          {/* Scanline effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-vw-pink/30 to-transparent"
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{ duration: 0.1, ease: "linear" }}
            style={{ height: '2px' }}
          />
        </>
      )}
    </span>
  );
};

export default LoadingGlitch;
