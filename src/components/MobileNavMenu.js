import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavMenu = ({ currentView, onNavigate, showNavButtons }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { id: 'hero', label: 'HOME.exe', icon: '🏠' },
    { id: 'about', label: 'ABOUT.exe', icon: '👤' },
    { id: 'projects', label: 'PROJECTS.exe', icon: '💼' },
    { id: 'desktop', label: 'DESKTOP.exe', icon: '🖥️' }
  ];

  const handleNavigation = (viewId) => {
    onNavigate(viewId);
    setIsOpen(false);
  };

  if (!showNavButtons) return null;

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <motion.button
        className="fixed top-4 right-4 z-50 w-12 h-12 bg-vw-purple/90 backdrop-blur-sm border-2 border-vw-pink/50 rounded-lg flex flex-col items-center justify-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
      >
        <motion.div 
          className="w-6 h-0.5 bg-vw-pink"
          animate={{ 
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 2 : 0
          }}
        />
        <motion.div 
          className="w-6 h-0.5 bg-vw-pink"
          animate={{ 
            opacity: isOpen ? 0 : 1
          }}
        />
        <motion.div 
          className="w-6 h-0.5 bg-vw-pink"
          animate={{ 
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -2 : 0
          }}
        />
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-vw-deep via-purple-900 to-vw-deep border-l-2 border-vw-pink/50 z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-vw-pink/30">
                <h2 className="text-vw-pink font-mono text-lg font-bold">NAVIGATION</h2>
                <p className="text-vw-cyan/60 text-sm font-mono mt-1">Current: {currentView}</p>
              </div>

              {/* Navigation Items */}
              <div className="p-6 space-y-3">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    className={`w-full p-4 rounded-lg border-2 font-mono text-left transition-all ${
                      currentView === item.id
                        ? 'bg-vw-pink/20 border-vw-pink text-vw-pink'
                        : 'bg-vw-purple/20 border-vw-purple/50 text-white hover:bg-vw-purple/30 hover:border-vw-pink/50'
                    }`}
                    onClick={() => handleNavigation(item.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="font-bold">{item.label}</div>
                        {currentView === item.id && (
                          <div className="text-xs text-vw-cyan/80">● ACTIVE</div>
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-vw-pink/30">
                <div className="text-vw-cyan/60 text-xs font-mono">
                  <div>NICOLO OS v2.0.25</div>
                  <div>MEM: 93% USED</div>
                  <div>STATUS: OPERATIONAL</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavMenu;
