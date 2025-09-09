import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const DesktopIcon = ({ icon, title, description, link, delay = 0 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (link && link.startsWith('http')) {
      // External link
      window.open(link, '_blank', 'noopener,noreferrer');
    } else if (link) {
      // Internal link - you might want to handle this with React Router
      window.location.href = link;
    } else {
      // No link, open modal
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {/* Desktop Icon */}
      <motion.div
        className="flex flex-col items-center cursor-pointer group select-none"
        style={{ width: '80px' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay }}
        whileHover={{ 
          scale: 1.05,
          rotate: [0, -2, 2, 0],
          transition: { rotate: { duration: 0.3 } }
        }}
        whileTap={{ scale: 0.95 }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
        aria-label={`${title}: ${description}`}
      >
        {/* Icon */}
        <div className={`
          relative mb-2 transition-all duration-200
          ${isPressed ? 'brightness-90 translate-y-0.5' : 'brightness-100'}
        `}>
          <img
            src={icon}
            alt={title}
            className="w-12 h-12 drop-shadow-lg"
            style={{
              filter: isPressed 
                ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.5)) inset 0 1px 1px rgba(255,255,255,0.1)' 
                : 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
            }}
          />
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
        </div>
        
        {/* Label */}
        <span className="text-white text-xs text-center leading-tight font-semibold drop-shadow-sm group-hover:text-cyan-300 transition-colors">
          {title}
        </span>
        
        {/* Selection highlight */}
        <div className={`
          absolute inset-0 border border-dotted border-white/50 rounded
          transition-opacity duration-150
          ${isPressed ? 'opacity-100' : 'opacity-0'}
        `} />
      </motion.div>

      {/* Modal Window */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-gray-800 border border-gray-600 rounded-lg shadow-2xl max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title Bar */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-t-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={icon} alt={title} className="w-4 h-4" />
                  <span className="text-white font-semibold text-sm">{title}</span>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:text-gray-300 transition-colors w-5 h-5 flex items-center justify-center text-lg leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={icon} alt={title} className="w-12 h-12" />
                  <div>
                    <h3 className="text-white font-bold text-lg">{title}</h3>
                    <p className="text-gray-300 text-sm">{description}</p>
                  </div>
                </div>
                
                {link && (
                  <div className="flex justify-end">
                    {link.startsWith('http') ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Visit →
                      </a>
                    ) : (
                      <Link
                        to={link}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                        onClick={() => setIsModalOpen(false)}
                      >
                        View →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DesktopIcon;
