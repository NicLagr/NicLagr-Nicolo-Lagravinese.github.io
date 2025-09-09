import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Win98ErrorDialog = ({ isOpen, onClose, title, message, icon = "error" }) => {
  const iconMap = {
    error: "❌",
    warning: "⚠️",
    info: "ℹ️",
    construction: "🚧"
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Dialog Window */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="window bg-c-bg-light border-2 border-c-border-dark shadow-lg max-w-md w-full"
              style={{ 
                fontFamily: 'MS Sans Serif, sans-serif',
                fontSize: '11px'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title Bar */}
              <div className="title-bar bg-gradient-to-r from-blue-600 to-blue-800 text-white px-2 py-1 flex items-center justify-between">
                <div className="title-bar-text font-bold text-white">
                  {title || "System Message"}
                </div>
                <div className="title-bar-controls">
                  <button 
                    className="title-bar-control"
                    onClick={onClose}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Dialog Content */}
              <div className="window-body p-4">
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="flex-shrink-0 text-2xl">
                    {iconMap[icon]}
                  </div>
                  
                  {/* Message */}
                  <div className="flex-1">
                    <p 
                      className="text-black leading-relaxed"
                      style={{ 
                        fontFamily: 'MS Sans Serif, Tahoma, sans-serif',
                        fontSize: '11px'
                      }}
                    >
                      {message}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-4 flex justify-center">
                  <button 
                    className="btn bg-c-bg-light border-2 border-c-border-dark px-6 py-1 text-black hover:bg-gray-100 active:border-inset"
                    onClick={onClose}
                    style={{ 
                      fontFamily: 'MS Sans Serif, sans-serif',
                      fontSize: '11px',
                      minWidth: '75px'
                    }}
                  >
                    OK
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Win98ErrorDialog;
