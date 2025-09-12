import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWinXPCursor } from './WinXPCursor';
import GlitchText from './GlitchText';
import LoadingGlitch from './LoadingGlitch';

const RetroHero = ({ onNavigate }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [glitchText, setGlitchText] = useState('NICOLÒ LAGRAVINESE');
  const [isGlitching, setIsGlitching] = useState(false);
  const [steamGames, setSteamGames] = useState('???');
  const [isSteamLoading, setIsSteamLoading] = useState(true);
  const { showLoading, hideLoading } = useWinXPCursor();

  // Words that represent your multidisciplinary skills
  const disciplineWords = [
    'design',         // UX/UI Design (Figma, prototyping, human-centered)
    'engineer',       // Full-stack development (React, Node.js, TypeScript)
    'deploy',         // DevOps & Infrastructure (K8s, Docker, Helm, Argo CD)
    'integrate',      // Hardware/IoT (MQTT, OPC-UA, Node-RED, Cognex)
    'optimize',       // Data Engineering & Performance (Redshift, SQL, analytics)
    'innovate'        // Game Development & Creative Problem Solving
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      const originalText = 'NICOLÒ LAGRAVINESE';
      
      // Create glitch effect
      let glitched = originalText.split('').map(char => 
        Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
      ).join('');
      
      setGlitchText(glitched);
      
      setTimeout(() => {
        setGlitchText(originalText);
        setIsGlitching(false);
      }, 150);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Fetch Steam games count
  useEffect(() => {
    const fetchSteamGames = async () => {
      console.log('🎮 Attempting to fetch Steam games...');
      
      try {
        // Steam ID64: 76561198799203533 (VeggieStraw)
        const steamId = '76561198799203533';
        
        // Try a simpler approach with allorigins API
        const profileUrl = `https://steamcommunity.com/profiles/${steamId}`;
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(profileUrl)}`;
        
        console.log('🔗 Fetching from:', proxyUrl);
        
        const response = await fetch(proxyUrl);
        
        if (response.ok) {
          const data = await response.json();
          const html = data.contents;
          
          console.log('📄 Got HTML response, parsing...');
          
          // Look for various patterns that might indicate game count
          const patterns = [
            /(\d+)\s+games/i,
            /Games\s*:\s*(\d+)/i,
            /"game_count":(\d+)/i,
            /owned_games.*?(\d+)/i
          ];
          
          for (const pattern of patterns) {
            const match = html.match(pattern);
            if (match) {
              const gameCount = parseInt(match[1]);
              console.log('🎯 Found game count:', gameCount);
              setSteamGames(gameCount.toString());
              setIsSteamLoading(false);
              return;
            }
          }
          
          console.log('❌ No game count pattern found in HTML');
        } else {
          console.log('❌ Response not OK:', response.status);
        }
        
        // If that fails, try the games page specifically
        const gamesUrl = `https://steamcommunity.com/profiles/${steamId}/games/?tab=all`;
        const gamesProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(gamesUrl)}`;
        
        console.log('🔗 Trying games page:', gamesProxyUrl);
        
        const gamesResponse = await fetch(gamesProxyUrl);
        if (gamesResponse.ok) {
          const gamesData = await gamesResponse.json();
          const gamesHtml = gamesData.contents;
          
          const gameCountMatch = gamesHtml.match(/(\d+)\s+games/i);
          if (gameCountMatch) {
            const gameCount = parseInt(gameCountMatch[1]);
            console.log('🎯 Found game count on games page:', gameCount);
            setSteamGames(gameCount.toString());
            setIsSteamLoading(false);
            return;
          }
        }
        
        console.log('⚠️ All methods failed, using fallback');
        setSteamGames('100+');
        setIsSteamLoading(false);
        
      } catch (error) {
        console.error('💥 Steam API error:', error);
        setSteamGames('100+');
        setIsSteamLoading(false);
      }
    };

    // Add a small delay to make the loading feel more natural
    setTimeout(fetchSteamGames, 1000);
  }, []);

  const terminalLines = [
    { text: 'C:\\PORTFOLIO> dir', delay: 0 },
    { text: 'Loading user profile...', delay: 500 },
    { text: 'Initializing portfolio.exe...', delay: 1000 },
    { text: 'Welcome to the matrix.', delay: 1500, color: 'text-vw-cyan' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-vw-purple/20 via-transparent to-vw-pink/20"></div>
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 98%, #ff4fd8 100%),
              linear-gradient(0deg, transparent 98%, #6c59ff 100%)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-20 h-20 border-2 ${
              i % 3 === 0 ? 'border-vw-pink rotate-45' :
              i % 3 === 1 ? 'border-vw-cyan rounded-full' :
              'border-vw-purple'
            }`}
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 12)}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: i % 2 === 0 ? [0, 360] : [360, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Terminal Window */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 bg-black border-2 border-gray-600 rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-4 py-2 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-white text-sm font-mono">Terminal - {currentTime.toLocaleTimeString()}</div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 font-mono text-left">
            <AnimatePresence>
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: line.delay / 1000, duration: 0.5 }}
                  className={`${line.color || 'text-green-400'} mb-2`}
                >
                  <span className="text-gray-500">$</span> {line.text}
                </motion.div>
              ))}
            </AnimatePresence>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-4 text-vw-pink"
            >
              <span className="text-gray-500">$</span> whoami
              <div className="ml-4 text-white">
                Full-Stack Engineer & IoT Specialist
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Glitch Name Display */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className={`text-6xl md:text-8xl font-bold mb-6 ${
            isGlitching ? 'text-red-500' : 'text-white'
          } aberration font-mono tracking-wider`}
          style={{
            textShadow: isGlitching 
              ? '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000'
              : '0 0 20px #ff4fd8, 0 0 40px #6c59ff'
          }}
        >
          {glitchText}
        </motion.h1>

        {/* Subtitle with Glitch Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-xl md:text-2xl text-vw-cyan mb-8 font-mono"
        >
          I{' '}
          <GlitchText 
            words={disciplineWords}
            glitchDuration={3500}
            transitionDuration={500}
            className="text-vw-pink font-bold"
          />
          {' '}— bridging hardware, software, and human experience
        </motion.div>

        {/* Stats Display */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {[
            { label: 'Age', value: '20', color: 'text-vw-pink', isStatic: true },
            { label: 'Steam Games Owned', value: steamGames, color: 'text-vw-cyan', isLoading: isSteamLoading },
            { label: 'Late Night Commits', value: '∞', color: 'text-vw-purple', isStatic: true }
          ].map((stat, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className={`text-3xl font-bold ${stat.color} font-mono`}>
                {stat.isLoading ? (
                  <LoadingGlitch 
                    isLoading={stat.isLoading}
                    loadedValue={stat.value}
                    className={stat.color}
                    placeholder="???"
                  />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-vw-pink to-vw-purple text-white font-bold rounded-lg shadow-lg border border-white/20 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 79, 216, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              showLoading();
              setTimeout(() => {
                onNavigate && onNavigate('projects');
                hideLoading();
              }, 1000);
            }}
          >
            LAUNCH PORTFOLIO.EXE
          </motion.button>

          <motion.button
            className="px-8 py-3 bg-transparent border-2 border-vw-pink text-vw-pink font-bold rounded-lg hover:bg-vw-pink hover:text-black transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 79, 216, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              showLoading();
              setTimeout(() => {
                onNavigate && onNavigate('about');
                hideLoading();
              }, 800);
            }}
          >
            ABOUT ME.EXE
          </motion.button>
          
          <motion.button
            className="px-8 py-3 bg-transparent border-2 border-vw-cyan text-vw-cyan font-bold rounded-lg hover:bg-vw-cyan hover:text-black transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(51, 225, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              showLoading();
              setTimeout(() => {
                onNavigate && onNavigate('desktop');
                hideLoading();
              }, 800);
            }}
          >
            ENTER DESKTOP
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-vw-cyan text-2xl"
          >
            ⬇
          </motion.div>
        </motion.div>
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none crt opacity-30"></div>
    </div>
  );
};

// Typewriter Component
const TypewriterText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-vw-pink"
      >
        |
      </motion.span>
    </span>
  );
};

export default RetroHero;
