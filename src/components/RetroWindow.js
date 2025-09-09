import React, { useState } from "react";
import { motion } from "framer-motion";

export default function RetroWindow({ 
  title = "Window", 
  children, 
  className, 
  onClose, 
  onMinimize,
  isActive = true,
  showStatusBar = true,
  statusBar,
  onDragStart 
}) {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <motion.div 
      className={`window shadow-2xl ${className || ""} ${
        isActive ? 'ring-2 ring-vw-pink/50' : ''
      }`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: isMaximized ? 1.2 : 1, 
        opacity: 1 
      }}
      transition={{ duration: 0.3 }}
      style={{
        filter: isActive ? 'none' : 'brightness(0.8)',
        background: 'linear-gradient(135deg, #c0c0c0 0%, #808080 100%)'
      }}
    >
      <div 
        className="title-bar bg-gradient-to-r from-blue-600 to-blue-800 text-white cursor-move"
        onMouseDown={onDragStart}
      >
        <div className="title-bar-text font-bold text-sm flex items-center gap-2 pointer-events-none">
          <span className="text-yellow-300">●</span>
          {title}
        </div>
        <div className="title-bar-controls flex gap-1 pointer-events-auto">
          <motion.button 
            aria-label="Minimize"
            className="w-4 h-4 bg-gray-300 border border-gray-600 text-xs flex items-center justify-center hover:bg-gray-200 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onMinimize && onMinimize();
            }}
          >
          </motion.button>
          <motion.button 
            aria-label="Maximize"
            className="w-4 h-4 bg-gray-300 border border-gray-600 text-xs flex items-center justify-center hover:bg-gray-200 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsMaximized(!isMaximized);
            }}
          >
          </motion.button>
          <motion.button 
            aria-label="Close"
            className="w-4 h-4 bg-red-500 border border-red-700 text-white text-xs flex items-center justify-center hover:bg-red-400 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onClose && onClose();
            }}
          >
          </motion.button>
        </div>
      </div>
      
      <div className="window-body bg-gray-100 overflow-auto pointer-events-auto" style={{ minHeight: '200px' }}>
        {children}
      </div>
      
      {showStatusBar && (
        <div className="status-bar bg-gray-200 border-t border-gray-400">
          <p className="status-bar-field text-xs">
            {statusBar || 'Ready'}
          </p>
          <p className="status-bar-field text-xs">
            {new Date().toLocaleTimeString()}
          </p>
        </div>
      )}
    </motion.div>
  );
}
