import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Win98ErrorDialog = ({ isOpen, onClose, title = "Error", message }) => {
  console.log('Win98ErrorDialog render - isOpen:', isOpen);
  
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Dialog Window */}
            <motion.div
              className="bg-gray-200 border-2 border-gray-400 shadow-lg max-w-md w-full"
              style={{
                borderStyle: 'outset',
                borderWidth: '2px',
                boxShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title Bar */}
              <div 
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-2 py-1 flex items-center justify-between"
                style={{
                  background: 'linear-gradient(90deg, #0080ff 0%, #004080 100%)',
                  borderBottom: '1px solid #000'
                }}
              >
                <div className="flex items-center space-x-2">
                  {/* Error Icon */}
                  <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                    !
                  </div>
                  <span className="text-sm font-bold">{title}</span>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="w-6 h-6 bg-gray-200 border border-gray-400 flex items-center justify-center text-black text-xs hover:bg-gray-300"
                  style={{
                    borderStyle: 'outset',
                    borderWidth: '1px'
                  }}
                >
                  ×
                </button>
              </div>

              {/* Dialog Content */}
              <div className="p-4">
                <div className="flex items-start space-x-3">
                  {/* Large Error Icon */}
                  <div className="w-8 h-8 bg-red-500 rounded-sm flex items-center justify-center text-white font-bold flex-shrink-0">
                    !
                  </div>
                  
                  {/* Message */}
                  <div className="flex-1">
                    <p className="text-black text-sm leading-relaxed">
                      {message}
                    </p>
                  </div>
                </div>
                
                {/* OK Button */}
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-gray-200 border-2 border-gray-400 text-black text-sm font-bold hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                    style={{
                      borderStyle: 'outset',
                      borderWidth: '2px',
                      minWidth: '75px'
                    }}
                    autoFocus
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
