import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RetroHero from '../../components/RetroHero';
import RetroProjectsGrid from '../../components/RetroProjectsGrid';
import BootIntro from '../../components/BootIntro';
import CRTOverlay from '../../components/CRTOverlay';
import DesktopOS from '../../components/DesktopOS';
import GamesHub from '../games/GamesHub';
import GameDetail from '../games/GameDetail';
import NurtureNest from '../projects/NurtureNest';
import MissionControl from '../projects/MissionControl';
import TECDemoEngineering from '../projects/TECDemoEngineering';
import PortfolioWebpage from '../projects/PortfolioWebpage';
import AboutPage from '../about/AboutPage';

const RetroHome = () => {
  const [currentView, setCurrentView] = useState('hero');
  const [selectedGame, setSelectedGame] = useState(null);
  const [bootComplete, setBootComplete] = useState(false);
  const [showNavButtons, setShowNavButtons] = useState(true);

  const handleBootComplete = () => {
    setBootComplete(true);
  };

  // Handle scroll detection for navigation buttons
  useEffect(() => {
    const handleScroll = () => {
      // Hide buttons when in detail views and scrolled down
      if (currentView === 'gameDetail' || currentView === 'nurtureNest' || currentView === 'missionControl' || currentView === 'tecDemoEngineering' || currentView === 'portfolioWebpage' || currentView === 'about') {
        setShowNavButtons(window.scrollY < 100);
      } else {
        setShowNavButtons(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Reset button visibility when view changes
  useEffect(() => {
    if (currentView !== 'gameDetail' && currentView !== 'nurtureNest' && currentView !== 'missionControl' && currentView !== 'tecDemoEngineering' && currentView !== 'portfolioWebpage' && currentView !== 'about') {
      setShowNavButtons(true);
    }
  }, [currentView]);

  const views = {
    hero: <RetroHero onNavigate={setCurrentView} />,
    desktop: <DesktopOS onNavigate={setCurrentView} />,
    projects: <RetroProjectsGrid onBack={() => setCurrentView('hero')} onNavigate={setCurrentView} />,
    games: <GamesHub onBack={() => setCurrentView('projects')} onGameSelect={(gameSlug) => {
      setSelectedGame(gameSlug);
      setCurrentView('gameDetail');
    }} />,
    gameDetail: selectedGame && <GameDetail 
      gameSlug={selectedGame} 
      onBack={() => setCurrentView('games')} 
      onBackToProjects={() => setCurrentView('projects')}
    />,
    about: <AboutPage onBack={() => setCurrentView('hero')} />,
    nurtureNest: <NurtureNest onBack={() => setCurrentView('projects')} />,
    missionControl: <MissionControl onBack={() => setCurrentView('projects')} />,
    tecDemoEngineering: <TECDemoEngineering onBack={() => setCurrentView('projects')} />,
    portfolioWebpage: <PortfolioWebpage onBack={() => setCurrentView('projects')} />
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Debug Info */}
      <div className="fixed top-2 left-2 z-[9999] text-white text-xs bg-black/50 p-2 rounded">
        Boot Complete: {bootComplete.toString()} | Current View: {currentView}
      </div>
      
      {/* Global CRT Overlay */}
      <CRTOverlay />
      
      {/* Boot Intro */}
      {!bootComplete && <BootIntro onDone={handleBootComplete} />}
      
      {/* Fallback if boot intro fails */}
      {!bootComplete && (
        <div className="fixed inset-0 bg-red-900/20 flex items-center justify-center z-[9998]">
          <button 
            onClick={handleBootComplete}
            className="px-4 py-2 bg-white text-black rounded"
          >
            Skip Boot (Debug)
          </button>
        </div>
      )}
      
      {/* Main Content */}
      <AnimatePresence mode="wait">
        {bootComplete && (
          <motion.div
            key={currentView}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            {views[currentView]}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Overlay */}
      {bootComplete && currentView !== 'desktop' && showNavButtons && (
        <motion.div 
          className="fixed top-4 right-4 z-50"
          initial={{ opacity: 1, y: 0 }}
          animate={{ 
            opacity: showNavButtons ? 1 : 0,
            y: showNavButtons ? 0 : -20
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-2">
            <motion.button
              className="px-4 py-2 bg-vw-purple/80 backdrop-blur-sm text-white rounded border border-vw-pink/50 hover:bg-vw-pink/80 transition-colors font-mono text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('hero')}
            >
              HOME.exe
            </motion.button>
            <motion.button
              className="px-4 py-2 bg-vw-purple/80 backdrop-blur-sm text-white rounded border border-vw-pink/50 hover:bg-vw-pink/80 transition-colors font-mono text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('about')}
            >
              ABOUT.exe
            </motion.button>
            <motion.button
              className="px-4 py-2 bg-vw-purple/80 backdrop-blur-sm text-white rounded border border-vw-pink/50 hover:bg-vw-pink/80 transition-colors font-mono text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('projects')}
            >
              PROJECTS.exe
            </motion.button>
            <motion.button
              className="px-4 py-2 bg-vw-purple/80 backdrop-blur-sm text-white rounded border border-vw-pink/50 hover:bg-vw-pink/80 transition-colors font-mono text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView('desktop')}
            >
              DESKTOP.exe
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Retro System Info - only show when not on desktop */}
      {bootComplete && currentView !== 'desktop' && (
        <div className="fixed bottom-4 left-4 z-40 font-mono text-xs text-vw-cyan/60">
          <div className="bg-black/50 backdrop-blur-sm p-2 rounded border border-vw-cyan/30">
            <div>NICOLO OS v2.0.25</div>
            <div>MEM: 93% USED</div>
            <div>STATUS: OPERATIONAL</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RetroHome;
