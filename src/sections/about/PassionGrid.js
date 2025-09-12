import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '../../utils/imagePath';

const PassionGrid = () => {
  const passions = [
    {
      icon: getImagePath('/assets/xp-icons/Windows XP Icons/My Videos.png'),
      title: 'Movies',
      description: 'Letterboxd addict with 500+ logged films'
    },
    {
      icon: getImagePath('/assets/xp-icons/gamepad.png'),
      title: 'Games',
      description: 'Narrative and atmosphere first (Majora\'s Mask, RDR2)'
    },
    {
      icon: getImagePath('/assets/xp-icons/Windows XP Icons/My Music.png'),
      title: 'Music',
      description: 'Steely Dan on repeat while coding'
    },
    {
      icon: getImagePath('/assets/xp-icons/Windows XP Icons/Power.png'),
      title: 'Fitness',
      description: 'Tennis + lifting keep me sharp'
    },
    {
      icon: getImagePath('/assets/xp-icons/Windows XP Icons/My Pictures.png'),
      title: 'Photography',
      description: 'Composition and moments'
    },
    {
      icon: getImagePath('/assets/xp-icons/globe.png'),
      title: 'Exploration',
      description: 'History, design, and tech rabbit holes'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-20 bg-vaporwave-dark overflow-hidden">
      {/* Vaporwave grid background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={getImagePath('/vapor/grid.png')} 
          alt="" 
          className="w-full h-full object-cover"
          style={{ transform: 'perspective(1000px) rotateX(60deg) translateZ(-200px)' }}
        />
      </div>

      {/* Floating vaporwave elements */}
      <div className="absolute top-20 left-20 w-24 h-24 opacity-20 float-slow">
        <img src={getImagePath('/vapor/sphere.png')} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-40 right-32 w-16 h-16 opacity-15 float-slow" style={{ animationDelay: '3s' }}>
        <img src={getImagePath('/vapor/torus.png')} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 opacity-20 float-slow" style={{ animationDelay: '6s' }}>
        <img src={getImagePath('/vapor/column.png')} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Subtle MTV logo near music card */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-8 h-6 opacity-15 float-slow hidden lg:block"
        style={{ animationDelay: '4s' }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 60" className="w-full h-full">
            {/* MTV logo simplified */}
            <text x="10" y="35" fontSize="24" fontFamily="Arial Black, sans-serif" fontWeight="900" fill="rgba(255, 79, 216, 0.6)">M</text>
            <text x="35" y="35" fontSize="24" fontFamily="Arial Black, sans-serif" fontWeight="900" fill="rgba(100, 233, 255, 0.6)">T</text>
            <text x="55" y="35" fontSize="24" fontFamily="Arial Black, sans-serif" fontWeight="900" fill="rgba(138, 125, 255, 0.6)">V</text>
            <rect x="8" y="40" width="70" height="8" fill="rgba(255, 79, 216, 0.3)"/>
          </svg>
        </div>
      </motion.div>

      {/* Classical bust silhouettes */}
      <motion.div
        className="absolute top-24 left-8 w-10 h-14 opacity-20 hidden lg:block float-slow"
        style={{ animationDelay: '6s' }}
        initial={{ opacity: 0, scale: 0, rotateZ: -15 }}
        whileInView={{ opacity: 0.2, scale: 1, rotateZ: 0 }}
        transition={{ delay: 2, duration: 1.2 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 140" className="w-full h-full">
            {/* Classical bust silhouette */}
            <path 
              d="M30,20 Q50,10 70,20 Q75,25 75,35 Q75,45 70,50 L70,80 Q70,90 65,95 L60,100 Q55,105 50,105 Q45,105 40,100 L35,95 Q30,90 30,80 L30,50 Q25,45 25,35 Q25,25 30,20 Z" 
              fill="none" 
              stroke="rgba(138, 125, 255, 0.4)" 
              strokeWidth="1.5"
            />
            {/* Face details */}
            <circle cx="42" cy="35" r="1.5" fill="rgba(138, 125, 255, 0.3)"/>
            <circle cx="58" cy="35" r="1.5" fill="rgba(138, 125, 255, 0.3)"/>
            <path d="M45,42 Q50,45 55,42" stroke="rgba(138, 125, 255, 0.3)" strokeWidth="1" fill="none"/>
            {/* Base */}
            <rect x="35" y="105" width="30" height="10" fill="none" stroke="rgba(138, 125, 255, 0.3)" strokeWidth="1"/>
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-12 w-12 h-16 opacity-15 hidden lg:block float-slow"
        style={{ animationDelay: '8s' }}
        initial={{ opacity: 0, scale: 0, rotateZ: 15 }}
        whileInView={{ opacity: 0.15, scale: 1, rotateZ: 0 }}
        transition={{ delay: 2.5, duration: 1.2 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 130" className="w-full h-full">
            {/* More angular bust silhouette */}
            <path 
              d="M25,15 L35,10 L50,8 L65,10 L75,15 L80,25 L80,40 L75,50 L75,75 L70,85 L65,90 L60,95 L55,100 L45,100 L40,95 L35,90 L30,85 L25,75 L25,50 L20,40 L20,25 Z" 
              fill="none" 
              stroke="rgba(100, 233, 255, 0.4)" 
              strokeWidth="1.5"
            />
            {/* Geometric face */}
            <polygon points="40,30 45,35 40,40" fill="none" stroke="rgba(100, 233, 255, 0.3)" strokeWidth="1"/>
            <polygon points="60,30 55,35 60,40" fill="none" stroke="rgba(100, 233, 255, 0.3)" strokeWidth="1"/>
            <line x1="45" y1="45" x2="55" y2="45" stroke="rgba(100, 233, 255, 0.3)" strokeWidth="1"/>
            {/* Base */}
            <rect x="30" y="100" width="40" height="8" fill="none" stroke="rgba(100, 233, 255, 0.3)" strokeWidth="1"/>
          </svg>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-white font-mono"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What I'm <span className="text-neon">Passionate</span> About
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {passions.map((passion, index) => (
            <motion.div
              key={passion.title}
              className="group relative bg-gray-200 border-2 border-gray-400 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              style={{
                borderTopColor: '#ffffff',
                borderLeftColor: '#ffffff',
                borderRightColor: '#808080',
                borderBottomColor: '#808080'
              }}
            >
              {/* Windows 98 title bar */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 text-sm font-bold flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img 
                    src={passion.icon} 
                    alt={passion.title}
                    className="w-4 h-4"
                  />
                  <span>{passion.title}</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-gray-300 border border-gray-400 text-xs flex items-center justify-center">−</div>
                  <div className="w-3 h-3 bg-gray-300 border border-gray-400 text-xs flex items-center justify-center">□</div>
                  <div className="w-3 h-3 bg-red-500 border border-red-600 text-xs flex items-center justify-center text-white">×</div>
                </div>
              </div>

              {/* Window content */}
              <div className="p-4 bg-gray-100">
                {/* Large icon */}
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src={passion.icon} 
                    alt={passion.title}
                    className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-gray-800 leading-relaxed text-center font-mono">
                  {passion.description}
                </p>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-cyan-500/0 group-hover:from-pink-500/10 group-hover:to-cyan-500/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PassionGrid;
