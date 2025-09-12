import React from 'react';
import { motion } from 'framer-motion';

const WireframeGlobe = () => (
  <svg 
    className="absolute inset-0 w-full h-full opacity-20 glow-pulse"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Globe wireframe */}
    <defs>
      <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#ff4fd8', stopOpacity: 0.8 }} />
        <stop offset="50%" style={{ stopColor: '#64e9ff', stopOpacity: 0.6 }} />
        <stop offset="100%" style={{ stopColor: '#8a7dff', stopOpacity: 0.8 }} />
      </linearGradient>
    </defs>
    
    {/* Main circle */}
    <circle 
      cx="100" 
      cy="100" 
      r="80" 
      fill="none" 
      stroke="url(#globeGradient)" 
      strokeWidth="1.5"
    />
    
    {/* Horizontal lines */}
    <ellipse cx="100" cy="100" rx="80" ry="20" fill="none" stroke="url(#globeGradient)" strokeWidth="1" opacity="0.7" />
    <ellipse cx="100" cy="100" rx="80" ry="40" fill="none" stroke="url(#globeGradient)" strokeWidth="1" opacity="0.7" />
    <ellipse cx="100" cy="100" rx="80" ry="60" fill="none" stroke="url(#globeGradient)" strokeWidth="1" opacity="0.7" />
    
    {/* Vertical lines */}
    <ellipse cx="100" cy="100" rx="20" ry="80" fill="none" stroke="url(#globeGradient)" strokeWidth="1" opacity="0.7" />
    <ellipse cx="100" cy="100" rx="40" ry="80" fill="none" stroke="url(#globeGradient)" strokeWidth="1" opacity="0.7" />
    <ellipse cx="100" cy="100" rx="60" ry="80" fill="none" stroke="url(#globeGradient)" strokeWidth="1" opacity="0.7" />
    
    {/* Center dot */}
    <circle cx="100" cy="100" r="2" fill="url(#globeGradient)" />
  </svg>
);

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-vaporwave-gradient overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 97%, rgba(255, 255, 255, 0.3) 100%),
              linear-gradient(0deg, transparent 97%, rgba(255, 255, 255, 0.2) 100%)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Light Beams */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute opacity-30"
            style={{
              left: `${15 + (i * 20)}%`,
              top: `${10 + (i * 15)}%`,
              width: '2px',
              height: '120px',
              background: `linear-gradient(to bottom, 
                rgba(255, 79, 216, 0.8) 0%, 
                rgba(100, 233, 255, 0.6) 50%, 
                rgba(138, 125, 255, 0.4) 100%)`
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.3, 0.7, 0.3],
              scaleY: [1, 1.2, 1]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-white opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Geometric Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className={`absolute border-2 opacity-25 ${
              i % 3 === 0 ? 'border-white w-8 h-8' :
              i % 3 === 1 ? 'border-white w-6 h-12' :
              'border-white w-10 h-6'
            }`}
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 12)}%`,
              borderRadius: i % 2 === 0 ? '0' : '50%'
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 180, 360],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Subtle Scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.1) 2px,
            rgba(255, 255, 255, 0.1) 4px
          )`
        }}
      />

      {/* Enhanced Decorative orbs */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 opacity-60 blur-sm"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0.4, 0.8, 0.4], 
          scale: [1, 1.1, 1],
          y: [-5, 5, -5]
        }}
        transition={{ 
          delay: 1, 
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-32 right-24 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 opacity-50 blur-sm"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0.3, 0.7, 0.3], 
          scale: [0.8, 1.2, 0.8],
          x: [-8, 8, -8]
        }}
        transition={{ 
          delay: 1.5, 
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        aria-hidden="true"
      />

      {/* Subtle bust silhouette in corner */}
      <motion.div
        className="absolute bottom-32 left-12 w-8 h-12 opacity-15 hidden xl:block float-slow"
        style={{ animationDelay: '10s' }}
        initial={{ opacity: 0, scale: 0, rotateZ: -20 }}
        animate={{ opacity: 0.15, scale: 1, rotateZ: 0 }}
        transition={{ delay: 3, duration: 2 }}
        aria-hidden="true"
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 80 120" className="w-full h-full">
            {/* Minimalist bust outline */}
            <path 
              d="M15,20 Q25,10 40,10 Q55,10 65,20 Q70,25 70,35 Q70,45 65,50 L65,75 Q65,85 60,90 L55,95 Q50,100 40,100 Q30,100 25,95 L20,90 Q15,85 15,75 L15,50 Q10,45 10,35 Q10,25 15,20 Z" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.2)" 
              strokeWidth="1"
            />
            {/* Simple base */}
            <rect x="25" y="100" width="30" height="6" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.8"/>
          </svg>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="max-w-5xl mx-auto px-6 text-center pt-24 pb-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background globe */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 relative">
            <WireframeGlobe />
          </div>
        </div>

        {/* Headline */}
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg text-white relative z-10"
          variants={itemVariants}
        >
          Hey, I'm{' '}
          <span className="text-neon">
            Nicolò
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-4 text-lg md:text-xl opacity-90 text-white relative z-10"
          variants={itemVariants}
        >
          Exploring the humanist side of technology through design and code
        </motion.p>

        {/* Windows 98 style chips */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-3 flex-wrap relative z-10"
          variants={itemVariants}
        >
          {['Curious', 'Collaborative', 'Story-Driven'].map((chip, index) => (
            <motion.div
              key={chip}
              className="bg-gray-200 border-2 border-gray-400 px-4 py-2 text-sm font-mono text-gray-800 shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              style={{
                borderTopColor: '#ffffff',
                borderLeftColor: '#ffffff',
                borderRightColor: '#808080',
                borderBottomColor: '#808080'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
            >
              {chip}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
