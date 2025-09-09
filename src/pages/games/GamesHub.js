import React from 'react';
import { motion } from 'framer-motion';
import RetroWindow from '../../components/RetroWindow';
import { games } from '../../data/games';

// Import XP icons
import gamepadIcon from '../../assets/xp-icons/gamepad.png';
import playIcon from '../../assets/xp-icons/play.png';
import documentIcon from '../../assets/xp-icons/document-code.png';

const GamesHub = ({ onBack, onGameSelect }) => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          {onBack && (
            <motion.button
              className="px-4 py-2 bg-gray-800 border border-gray-600 text-vw-cyan font-mono text-sm hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
            >
              ← BACK.exe
            </motion.button>
          )}
          <motion.h1 
            className="text-4xl font-bold font-mono aberration"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            GAME_DEVELOPMENT.EXE
          </motion.h1>
        </div>

        {/* Intro */}
        <div className="bg-gray-900 border border-gray-700 p-4 rounded font-mono text-sm mb-6">
          <p className="text-vw-cyan mb-2">
            Crafting immersive experiences through Unity 3D development.
          </p>
          <p className="text-white">
            From dark fantasy dungeon crawlers to western horror shooters, each project explores unique mechanics and atmospheric storytelling.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
          <div className="bg-gray-800/50 border border-gray-600 p-3 text-center">
            <div className="text-2xl font-bold text-vw-cyan">{games.length}</div>
            <div className="text-xs text-gray-400 font-mono">Projects</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-600 p-3 text-center">
            <div className="text-xl font-bold text-green-400">Unity 3D</div>
            <div className="text-xs text-gray-400 font-mono">Engine</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-600 p-3 text-center">
            <div className="text-2xl font-bold text-purple-400">C#</div>
            <div className="text-xs text-gray-400 font-mono">Language</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-600 p-3 text-center">
            <div className="text-2xl font-bold text-vw-pink">2024</div>
            <div className="text-xs text-gray-400 font-mono">Year</div>
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {games.map((game, index) => (
          <motion.div
            key={game.slug}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 border-2 border-gray-700 rounded-lg overflow-hidden hover:border-vw-pink transition-colors"
          >
            {/* Window Title Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 border-b-2 border-gray-600">
              <div className="flex items-center justify-between">
                <span className="text-white font-mono text-sm font-bold">
                  {game.title}
                </span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-yellow-400 border border-yellow-600"></div>
                  <div className="w-4 h-4 bg-gray-400 border border-gray-600"></div>
                  <div className="w-4 h-4 bg-red-400 border border-red-600"></div>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
              {/* Hero Image */}
              <div className="relative mb-4 aspect-video bg-gray-800 border-2 border-gray-700 overflow-hidden">
                <img
                  src={game.media.hero}
                  alt={`${game.title} screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`inline-block px-2 py-1 text-xs font-mono border rounded-sm ${
                  game.status === 'LIVE' ? 'bg-green-500/20 text-green-300 border-green-400/30' : 
                  'bg-gray-500/20 text-gray-300 border-gray-400/30'
                }`}>
                  {game.status}
                </span>
                <span className="inline-block px-2 py-1 text-xs font-mono border rounded-sm bg-purple-500/20 text-purple-300 border-purple-400/30">
                  {game.year}
                </span>
                {game.genres.slice(0, 2).map((genre, index) => (
                  <span key={index} className="inline-block px-2 py-1 text-xs font-mono border rounded-sm bg-pink-500/20 text-pink-300 border-pink-400/30">
                    {genre}
                  </span>
                ))}
              </div>

        {/* Summary */}
        <p className="text-white text-sm leading-relaxed mb-4 font-mono">
          {game.summary}
        </p>

              {/* CTAs */}
              <div className="flex justify-between items-center">
                <motion.button
                  onClick={() => onGameSelect(game.slug)}
                  className="px-4 py-2 bg-gradient-to-b from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-gray-900 font-mono text-sm border-2 border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-150 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More →
                </motion.button>

                <div className="flex gap-2">
                  {game.links.play && (
                    <motion.a
                      href={game.links.play}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-gradient-to-b from-gray-300 to-gray-400 hover:from-gray-200 hover:to-gray-300 text-gray-900 font-mono text-xs border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-150 shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="Play Game"
                    >
                      <img src={playIcon} alt="Play" className="w-4 h-4" />
                    </motion.a>
                  )}
                  {game.links.repo && (
                    <motion.a
                      href={game.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-gradient-to-b from-gray-300 to-gray-400 hover:from-gray-200 hover:to-gray-300 text-gray-900 font-mono text-xs border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-150 shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="View Repository"
                    >
                      <img src={documentIcon} alt="Repository" className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <div className="bg-gray-800/30 border border-gray-600 p-4 max-w-2xl mx-auto">
          <p className="text-gray-400 font-mono text-sm">
            Interested in game development collaboration? 
            <a 
              href="https://www.linkedin.com/in/nicolo-lagravinese/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vw-cyan hover:text-vw-pink ml-1 cursor-pointer transition-colors duration-200"
            >
              Let's connect
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GamesHub;
