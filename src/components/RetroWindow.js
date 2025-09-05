import React, { useState } from "react";
import { motion } from "framer-motion";

export default function RetroWindow({ 
  title = "Window", 
  children, 
  className, 
  onClose, 
  isActive = true,
  showStatusBar = true 
}) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <motion.div 
      className={`window shadow-2xl ${className || ""} ${
        isActive ? 'ring-2 ring-vw-pink/50' : ''
      }`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: isMinimized ? 0.1 : isMaximized ? 1.2 : 1, 
        opacity: isMinimized ? 0 : 1 
      }}
      transition={{ duration: 0.3 }}
      style={{
        filter: isActive ? 'none' : 'brightness(0.8)',
        background: 'linear-gradient(135deg, #c0c0c0 0%, #808080 100%)'
      }}
    >
      <div className="title-bar bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="title-bar-text font-bold text-sm flex items-center gap-2">
          <span className="text-yellow-300">●</span>
          {title}
        </div>
        <div className="title-bar-controls flex gap-1">
          <motion.button 
            aria-label="Minimize"
            className="w-4 h-4 bg-gray-300 border border-gray-600 text-xs flex items-center justify-center hover:bg-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMinimized(!isMinimized)}
          >
            _
          </motion.button>
          <motion.button 
            aria-label="Maximize"
            className="w-4 h-4 bg-gray-300 border border-gray-600 text-xs flex items-center justify-center hover:bg-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMaximized(!isMaximized)}
          >
            □
          </motion.button>
          <motion.button 
            aria-label="Close"
            className="w-4 h-4 bg-red-500 border border-red-700 text-white text-xs flex items-center justify-center hover:bg-red-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
          >
            ×
          </motion.button>
        </div>
      </div>
      
      {!isMinimized && (
        <>
          <div className="window-body bg-gray-100 overflow-auto" style={{ minHeight: '200px' }}>
            {children}
          </div>
          
          {showStatusBar && (
            <div className="status-bar bg-gray-200 border-t border-gray-400">
              <p className="status-bar-field text-xs">Ready</p>
              <p className="status-bar-field text-xs">
                {new Date().toLocaleTimeString()}
              </p>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}
