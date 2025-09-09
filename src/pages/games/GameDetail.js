import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RetroWindow from '../../components/RetroWindow';
import MediaGallery from '../../components/MediaGallery';
import { games, getGameBySlug } from '../../data/games';

// Import XP icons
import playIcon from '../../assets/xp-icons/play.png';
import documentIcon from '../../assets/xp-icons/document-code.png';

const GameDetail = ({ gameSlug, onBack, onBackToProjects }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const game = getGameBySlug(gameSlug);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!game) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <RetroWindow title="404 - Game Not Found">
          <div className="text-center space-y-4 p-6">
            <h1 className="text-2xl text-red-400 font-mono">Game Not Found</h1>
            <p className="text-gray-300">The requested game could not be found.</p>
            <motion.button
              onClick={onBack}
              className="px-4 py-2 bg-gradient-to-b from-gray-300 to-gray-400 hover:from-gray-200 hover:to-gray-300 text-gray-900 font-mono text-sm border-2 border-gray-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Games
            </motion.button>
          </div>
        </RetroWindow>
      </div>
    );
  }

  const GameMeta = ({ game, layout = 'sidebar' }) => {
    const getStatusColor = (status) => {
      switch (status) {
        case 'LIVE': return 'bg-green-500/20 text-green-300 border-green-400/30';
        case 'WIP': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30';
        case 'ARCHIVED': return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
        default: return 'bg-blue-500/20 text-blue-300 border-blue-400/30';
      }
    };

    const MetaChip = ({ children, className = '' }) => (
      <span className={`inline-block px-2 py-1 text-xs font-mono border rounded-sm ${className}`}>
        {children}
      </span>
    );

    return (
      <div className="space-y-4 text-sm">
        <div>
          <h4 className="text-vw-pink font-mono mb-2 text-xs uppercase tracking-wider">Status</h4>
          <MetaChip className={getStatusColor(game.status)}>
            {game.status}
          </MetaChip>
        </div>

        <div>
          <h4 className="text-vw-pink font-mono mb-2 text-xs uppercase tracking-wider">Year</h4>
          <MetaChip className="bg-purple-500/20 text-purple-300 border-purple-400/30">
            {game.year}
          </MetaChip>
        </div>

        <div>
          <h4 className="text-vw-pink font-mono mb-2 text-xs uppercase tracking-wider">Engine</h4>
          <div className="flex flex-wrap gap-1">
            {game.engines.map((engine, index) => (
              <MetaChip key={index} className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30">
                {engine}
              </MetaChip>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-vw-pink font-mono mb-2 text-xs uppercase tracking-wider">Stack</h4>
          <div className="flex flex-wrap gap-1">
            {game.stack.map((tech, index) => (
              <MetaChip key={index} className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                {tech}
              </MetaChip>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-vw-pink font-mono mb-2 text-xs uppercase tracking-wider">Roles</h4>
          <div className="flex flex-wrap gap-1">
            {game.roles.map((role, index) => (
              <MetaChip key={index} className="bg-orange-500/20 text-orange-300 border-orange-400/30">
                {role}
              </MetaChip>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-vw-pink font-mono mb-2 text-xs uppercase tracking-wider">Genres</h4>
          <div className="flex flex-wrap gap-1">
            {game.genres.map((genre, index) => (
              <MetaChip key={index} className="bg-pink-500/20 text-pink-300 border-pink-400/30">
                {genre}
              </MetaChip>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const CTAButtons = ({ game, showBack = false }) => {
    return (
      <div className="flex flex-wrap gap-3 items-center">
        {/* Primary CTAs */}
        <div className="flex gap-2">
          {game.links.play && (
            <motion.a
              href={game.links.play}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-b from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 text-gray-900 font-mono text-sm border-2 border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-150 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={playIcon} alt="Play" className="w-4 h-4 inline mr-2" />
              Play WebGL
            </motion.a>
          )}
          
          {game.links.repo && (
            <motion.a
              href={game.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-gray-900 font-mono text-sm border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-150 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={documentIcon} alt="Repository" className="w-4 h-4 inline mr-2" />
              Repository
            </motion.a>
          )}
        </div>

        {/* Navigation */}
        {showBack && (
          <motion.button
            onClick={onBack}
            className="px-4 py-2 bg-gradient-to-b from-gray-300 to-gray-400 hover:from-gray-200 hover:to-gray-300 text-gray-900 font-mono text-sm border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-150 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Game Dev
          </motion.button>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <motion.button
            onClick={onBack}
            className="px-4 py-2 bg-gray-800 border border-gray-600 text-vw-cyan font-mono text-sm hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Game Dev
          </motion.button>
        </div>

        <RetroWindow title={`${game.title} — Project Details`}>
          <div className="p-6 space-y-8">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Hero Image */}
              <div className="lg:col-span-2 space-y-4">
                <div className="relative aspect-video bg-gray-900 border-2 border-gray-700 overflow-hidden">
                  <img
                    src={game.media.hero}
                    alt={`${game.title} hero image`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* CTAs */}
                <CTAButtons game={game} showBack />
              </div>

              {/* Specs Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-800/50 border border-gray-600 p-4 space-y-4">
                  <GameMeta game={game} layout="sidebar" />
                </div>
              </div>
            </div>

            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-vw-cyan font-mono">Overview</h2>
              <p className="text-black text-lg leading-relaxed">
                {game.summary}
              </p>
              <div className="space-y-2">
                {game.description.map((paragraph, index) => (
                  <p key={index} className="text-black leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Gameplay & Features */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-vw-cyan font-mono">Gameplay & Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/30 border border-gray-600 p-4">
                  <h3 className="text-lg text-vw-pink font-mono mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {game.features.map((feature, index) => (
                      <li key={index} className="text-black text-sm flex items-start">
                        <span className="text-vw-cyan mr-2 flex-shrink-0">▶</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Core Mechanics */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-vw-cyan font-mono">Core Mechanics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Player Mechanics */}
                <div className="bg-gray-800/30 border border-gray-600 p-4">
                  <h3 className="text-lg text-green-300 font-mono mb-3">Player</h3>
                  <ul className="space-y-1">
                    {game.mechanics.players.map((mechanic, index) => (
                      <li key={index} className="text-black text-sm flex items-start">
                        <span className="text-green-400 mr-2 flex-shrink-0">•</span>
                        {mechanic}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enemy Mechanics */}
                <div className="bg-gray-800/30 border border-gray-600 p-4">
                  <h3 className="text-lg text-red-300 font-mono mb-3">Enemies</h3>
                  <ul className="space-y-1">
                    {game.mechanics.enemies.map((enemy, index) => (
                      <li key={index} className="text-black text-sm flex items-start">
                        <span className="text-red-400 mr-2 flex-shrink-0">•</span>
                        {enemy}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Items */}
                <div className="bg-gray-800/30 border border-gray-600 p-4">
                  <h3 className="text-lg text-yellow-300 font-mono mb-3">Items</h3>
                  <ul className="space-y-1">
                    {game.mechanics.items.map((item, index) => (
                      <li key={index} className="text-black text-sm flex items-start">
                        <span className="text-yellow-400 mr-2 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Media Gallery */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-vw-cyan font-mono">Media Gallery</h2>
              <MediaGallery media={game.media} title={game.title} />
            </section>

            {/* Final CTAs */}
            <section className="border-t border-gray-600 pt-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <CTAButtons game={game} showBack />
                <div className="text-gray-400 font-mono text-sm">
                  Project completed in {game.year}
                </div>
              </div>
            </section>
          </div>
        </RetroWindow>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 px-4 py-2 bg-gradient-to-b from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-gray-900 font-mono text-sm border-2 border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-150 shadow-lg z-40"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          ↑ Top
        </motion.button>
      )}
    </div>
  );
};

export default GameDetail;
