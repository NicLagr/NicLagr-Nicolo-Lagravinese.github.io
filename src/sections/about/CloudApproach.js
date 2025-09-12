import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CloudApproach = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const cloudsY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const sunY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const dolphinsY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-purple-900/20 to-blue-900/20"
    >
      {/* Vaporwave Horizon Border Separator */}
      <div className="absolute top-0 left-0 right-0 z-30">
        {/* Neon horizon line */}
        <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent neon-horizon"></div>
        
        {/* Grid pattern border */}
        <div 
          className="h-8 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 0%, rgba(255, 79, 216, 0.4) 50%, transparent 100%),
              linear-gradient(0deg, transparent 0%, rgba(100, 233, 255, 0.3) 100%)
            `,
            backgroundSize: '60px 2px, 100% 8px',
            backgroundRepeat: 'repeat-x, no-repeat'
          }}
        />
        
        {/* Glowing dots */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex space-x-8">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Retro scan line effect */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
          animate={{
            x: ['-100%', '200%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2
          }}
        />
      </div>

      {/* Windows XP Bliss background with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: cloudsY }}
        aria-hidden="true"
      >
        <img
          src="/vapor/bliss.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Vaporwave gradient tint overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 79, 216, 0.3) 0%, rgba(138, 125, 255, 0.4) 50%, rgba(100, 233, 255, 0.3) 100%)'
        }}
        aria-hidden="true"
      />

      {/* CRT scanline overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(
              transparent 0px,
              transparent 1px,
              rgba(255, 255, 255, 0.03) 1px,
              rgba(255, 255, 255, 0.03) 2px,
              transparent 2px,
              transparent 3px
            ),
            linear-gradient(
              90deg,
              transparent 0px,
              transparent 1px,
              rgba(0, 255, 255, 0.02) 1px,
              rgba(0, 255, 255, 0.02) 2px,
              transparent 2px,
              transparent 3px
            )
          `,
          backgroundSize: '3px 3px'
        }}
        aria-hidden="true"
      />

      {/* VHS distortion effect */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 0, 255, 0.1) 2px,
              rgba(255, 0, 255, 0.1) 4px,
              transparent 4px,
              transparent 6px,
              rgba(0, 255, 255, 0.1) 6px,
              rgba(0, 255, 255, 0.1) 8px
            )
          `,
          animation: 'vhsGlitch 8s linear infinite'
        }}
        aria-hidden="true"
      />

      {/* Enhanced ground grid with neon horizon */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-40"
        style={{ y: dolphinsY }}
        aria-hidden="true"
      >
        <div 
          className="w-full h-full relative"
          style={{
            background: `
              linear-gradient(
                0deg,
                rgba(13, 16, 38, 0.8) 0%,
                rgba(100, 233, 255, 0.2) 50%,
                transparent 100%
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 8px,
                rgba(100, 233, 255, 0.3) 8px,
                rgba(100, 233, 255, 0.3) 9px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 20px,
                rgba(255, 79, 216, 0.2) 20px,
                rgba(255, 79, 216, 0.2) 21px
              )
            `,
            transform: 'perspective(1000px) rotateX(75deg)',
            transformOrigin: 'bottom'
          }}
        >
          {/* Neon horizon glow */}
          <div 
            className="absolute top-0 left-0 right-0 h-1 neon-horizon opacity-80"
          />
        </div>
      </motion.div>

      {/* Mountains layer behind grid */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-64 opacity-20"
        style={{ y: dolphinsY }}
        aria-hidden="true"
      >
        <img
          src="/vapor/mountains.png"
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </motion.div>

      {/* Vaporwave striped sun in top third */}
      <motion.div
        className="absolute top-32 left-1/2 transform -translate-x-1/2 w-64 h-64 opacity-60"
        style={{ y: sunY }}
        aria-hidden="true"
      >
        <div className="relative w-full h-full">
          <img
            src="/vapor/sun.png"
            alt=""
            className="w-full h-full object-contain glow-pulse"
          />
          {/* Horizontal stripes overlay */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 8px,
                  rgba(255, 79, 216, 0.3) 8px,
                  rgba(255, 79, 216, 0.3) 12px,
                  transparent 12px,
                  transparent 20px,
                  rgba(100, 233, 255, 0.3) 20px,
                  rgba(100, 233, 255, 0.3) 24px
                )
              `,
              maskImage: 'radial-gradient(circle, black 70%, transparent 100%)'
            }}
          />
        </div>
      </motion.div>

      {/* Classical columns - larger and more prominent */}
      <motion.div
        className="absolute left-12 top-1/4 w-24 h-64 opacity-70 hidden lg:block float-slow"
        initial={{ opacity: 0, x: -100, rotateY: 45 }}
        whileInView={{ opacity: 0.7, x: 0, rotateY: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <img
          src="/vapor/column.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        className="absolute right-12 top-1/4 w-24 h-64 opacity-70 hidden lg:block float-slow"
        style={{ animationDelay: '3s' }}
        initial={{ opacity: 0, x: 100, rotateY: -45 }}
        whileInView={{ opacity: 0.7, x: 0, rotateY: 0 }}
        transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <img
          src="/vapor/column.png"
          alt=""
          className="w-full h-full object-contain scale-x-[-1]"
        />
      </motion.div>

      {/* Floating 3D wireframe elements - diagonal distribution */}
      {/* Upper-left wireframe sphere */}
      <motion.div
        className="absolute top-20 left-16 w-20 h-20 opacity-25 float-wireframe wireframe-glow"
        style={{ animationDelay: '0s' }}
        initial={{ opacity: 0, scale: 0, rotateX: -45 }}
        whileInView={{ opacity: 0.25, scale: 1, rotateX: 0 }}
        transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(100, 233, 255, 0.6)" strokeWidth="1"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(100, 233, 255, 0.4)" strokeWidth="1"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(100, 233, 255, 0.6)" strokeWidth="1"/>
            <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(100, 233, 255, 0.4)" strokeWidth="1"/>
            <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(100, 233, 255, 0.4)" strokeWidth="1"/>
          </svg>
        </div>
      </motion.div>

      {/* Mid-left wireframe pyramid */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-16 h-16 opacity-30 float-wireframe wireframe-glow"
        style={{ animationDelay: '2s' }}
        initial={{ opacity: 0, scale: 0, rotateY: -45 }}
        whileInView={{ opacity: 0.3, scale: 1, rotateY: 0 }}
        transition={{ delay: 1, duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 20,80 80,80" fill="none" stroke="rgba(255, 79, 216, 0.5)" strokeWidth="1"/>
            <line x1="50" y1="10" x2="35" y2="65" stroke="rgba(255, 79, 216, 0.3)" strokeWidth="1"/>
            <line x1="50" y1="10" x2="65" y2="65" stroke="rgba(255, 79, 216, 0.3)" strokeWidth="1"/>
            <line x1="35" y1="65" x2="65" y2="65" stroke="rgba(255, 79, 216, 0.3)" strokeWidth="1"/>
          </svg>
        </div>
      </motion.div>

      {/* Center-right wireframe torus */}
      <motion.div
        className="absolute top-2/5 right-1/3 w-18 h-18 opacity-20 float-wireframe wireframe-glow"
        style={{ animationDelay: '4s' }}
        initial={{ opacity: 0, scale: 0, rotateZ: 45 }}
        whileInView={{ opacity: 0.2, scale: 1, rotateZ: 0 }}
        transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <img
          src="/vapor/torus.png"
          alt=""
          className="w-full h-full object-contain opacity-60"
          style={{ filter: 'hue-rotate(180deg) brightness(1.2)' }}
        />
      </motion.div>

      {/* Bottom-right large wireframe sphere */}
      <motion.div
        className="absolute bottom-1/3 right-20 w-24 h-24 opacity-15 float-wireframe wireframe-glow"
        style={{ animationDelay: '6s' }}
        initial={{ opacity: 0, scale: 0, rotateX: 45 }}
        whileInView={{ opacity: 0.15, scale: 1, rotateX: 0 }}
        transition={{ delay: 2, duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(138, 125, 255, 0.4)" strokeWidth="1"/>
            <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="rgba(138, 125, 255, 0.6)" strokeWidth="1"/>
            <ellipse cx="50" cy="50" rx="45" ry="30" fill="none" stroke="rgba(138, 125, 255, 0.4)" strokeWidth="1"/>
            <ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke="rgba(138, 125, 255, 0.4)" strokeWidth="1"/>
            <ellipse cx="50" cy="50" rx="30" ry="45" fill="none" stroke="rgba(138, 125, 255, 0.6)" strokeWidth="1"/>
          </svg>
        </div>
      </motion.div>

      {/* VHS glitch effects */}
      <motion.div
        className="absolute top-1/4 right-12 w-32 h-8 opacity-30 hidden lg:block"
        animate={{
          scaleX: [1, 1.1, 0.9, 1],
          x: [0, -2, 2, 0]
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      >
        <div 
          className="w-full h-full"
          style={{
            background: `
              repeating-linear-gradient(
                90deg,
                rgba(255, 0, 255, 0.6),
                rgba(255, 0, 255, 0.6) 2px,
                rgba(0, 255, 255, 0.6) 2px,
                rgba(0, 255, 255, 0.6) 4px,
                transparent 4px,
                transparent 8px
              )
            `,
            filter: 'blur(1px)'
          }}
        />
      </motion.div>

      {/* Classical busts at grid edges */}
      <motion.div
        className="absolute bottom-16 left-8 w-16 h-24 opacity-35 hidden lg:block float-slow"
        style={{ animationDelay: '1s' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.35, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <img
          src="/vapor/statue.png"
          alt=""
          className="w-full h-full object-contain"
          style={{ 
            filter: 'contrast(1.2) hue-rotate(280deg)',
            imageRendering: 'pixelated'
          }}
        />
      </motion.div>

      {/* Vaporwave bust - left side */}
      <motion.div
        className="absolute top-1/3 left-4 w-12 h-16 opacity-25 hidden xl:block float-slow"
        style={{ animationDelay: '7s' }}
        initial={{ opacity: 0, x: -30, rotateY: -45 }}
        whileInView={{ opacity: 0.25, x: 0, rotateY: 0 }}
        transition={{ delay: 2, duration: 1.5 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <div className="w-full h-full relative">
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: `
                radial-gradient(
                  ellipse at 30% 30%,
                  rgba(255, 79, 216, 0.4) 0%,
                  rgba(138, 125, 255, 0.3) 50%,
                  rgba(100, 233, 255, 0.2) 100%
                ),
                linear-gradient(
                  135deg,
                  rgba(255, 255, 255, 0.1) 0%,
                  rgba(255, 255, 255, 0.05) 50%,
                  rgba(0, 0, 0, 0.1) 100%
                )
              `,
              border: '1px solid rgba(255, 79, 216, 0.3)',
              filter: 'drop-shadow(0 0 10px rgba(255, 79, 216, 0.2))'
            }}
          />
          {/* Abstract bust silhouette */}
          <div 
            className="absolute inset-2 opacity-60"
            style={{
              background: `
                radial-gradient(
                  ellipse at 50% 40%,
                  transparent 20%,
                  rgba(255, 79, 216, 0.3) 25%,
                  transparent 30%
                ),
                linear-gradient(
                  180deg,
                  transparent 40%,
                  rgba(255, 79, 216, 0.4) 50%,
                  transparent 60%
                )
              `
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-8 w-14 h-20 opacity-30 hidden lg:block float-slow"
        style={{ animationDelay: '3s' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <img
          src="/vapor/statue.png"
          alt=""
          className="w-full h-full object-contain scale-x-[-1]"
          style={{ 
            filter: 'contrast(1.2) hue-rotate(180deg) brightness(0.8)',
            imageRendering: 'pixelated'
          }}
        />
      </motion.div>

      {/* Floating geometric crystals for depth */}
      <motion.div
        className="absolute bottom-24 left-1/5 w-12 h-16 opacity-30 hidden md:block float-wireframe wireframe-glow"
        style={{ animationDelay: '2s' }}
        initial={{ opacity: 0, y: 50, rotateY: -45 }}
        whileInView={{ opacity: 0.3, y: 0, rotateY: 0 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 30,40 70,40" fill="none" stroke="rgba(138, 125, 255, 0.5)" strokeWidth="1.5"/>
            <polygon points="30,40 50,80 70,40" fill="none" stroke="rgba(138, 125, 255, 0.5)" strokeWidth="1.5"/>
            <line x1="30" y1="40" x2="70" y2="40" stroke="rgba(138, 125, 255, 0.3)" strokeWidth="1"/>
            <line x1="50" y1="10" x2="50" y2="80" stroke="rgba(138, 125, 255, 0.4)" strokeWidth="1"/>
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-28 right-1/5 w-14 h-18 opacity-25 hidden md:block float-wireframe wireframe-glow"
        style={{ animationDelay: '5s' }}
        initial={{ opacity: 0, y: 50, rotateZ: 45 }}
        whileInView={{ opacity: 0.25, y: 0, rotateZ: 0 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="rgba(100, 233, 255, 0.4)" strokeWidth="1"/>
            <rect x="30" y="30" width="40" height="40" fill="none" stroke="rgba(100, 233, 255, 0.6)" strokeWidth="1"/>
            <line x1="20" y1="20" x2="80" y2="80" stroke="rgba(100, 233, 255, 0.3)" strokeWidth="1"/>
            <line x1="80" y1="20" x2="20" y2="80" stroke="rgba(100, 233, 255, 0.3)" strokeWidth="1"/>
            <circle cx="50" cy="50" r="8" fill="none" stroke="rgba(100, 233, 255, 0.5)" strokeWidth="1"/>
          </svg>
        </div>
      </motion.div>

      {/* Main content - Windows 98 dialog style */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          className="max-w-3xl mx-auto bg-gray-200 border-2 border-gray-400 shadow-2xl"
          style={{
            borderTopColor: '#ffffff',
            borderLeftColor: '#ffffff',
            borderRightColor: '#808080',
            borderBottomColor: '#808080'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Dialog title bar */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 text-sm font-bold flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/xp-icons/lightbulb.png" 
                alt="Approach"
                className="w-4 h-4"
              />
              <span>My Approach</span>
            </div>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-gray-300 border border-gray-400 text-xs flex items-center justify-center">?</div>
            </div>
          </div>

          {/* Dialog content */}
          <div className="p-6 bg-gray-100">
            <div className="flex items-start gap-4">
              {/* Large icon */}
              <div className="flex-shrink-0">
                <img 
                  src="/assets/xp-icons/lightbulb.png" 
                  alt="Approach"
                  className="w-12 h-12"
                />
              </div>
              
              {/* Text content */}
              <div className="flex-1">
                <p className="text-gray-800 leading-relaxed font-mono text-sm mb-4">
                  I start with <span className="font-bold text-blue-600">curiosity</span>, sketching quick ideas and testing directions that feel a little unexpected. I like approaches that bring <span className="font-bold text-purple-600">personality and visual interest</span> into the work, even at the earliest stages.
                </p>
                <p className="text-gray-800 leading-relaxed font-mono text-sm mb-4">
                  From there I refine. I test often, adjust as I go, and keep iterating until the foundation feels solid. Once it is in place, I focus on the details that make an interface <span className="font-bold text-teal-600">smooth, clear, and enjoyable to use</span>.
                </p>
                <p className="text-gray-800 leading-relaxed font-mono text-sm">
                  I am drawn to projects that mix design and engineering in ways that are challenging and experimental. I make use of <span className="font-bold text-blue-600">new technologies</span> that let me work more efficiently and give me the freedom to build things that are more <span className="font-bold text-purple-600">ambitious and unconventional</span>. The goal is always the same: build <span className="font-bold text-teal-600">tools and experiences people actually want to use</span>, and that leave a strong impression without overcomplicating things.
                </p>
              </div>
            </div>

            {/* Dialog buttons */}
            <div className="flex justify-end mt-6 gap-2">
              <button 
                className="px-4 py-1 bg-gray-300 border border-gray-400 text-gray-800 text-sm font-mono hover:bg-gray-200 transition-colors"
                style={{
                  borderTopColor: '#ffffff',
                  borderLeftColor: '#ffffff',
                  borderRightColor: '#808080',
                  borderBottomColor: '#808080'
                }}
              >
                OK
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Three dolphins in bottom third */}
      <motion.div
        className="absolute bottom-20 left-0 right-0 flex justify-center items-center gap-16 md:gap-32"
        style={{ y: dolphinsY }}
        aria-hidden="true"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-16 h-16 md:w-20 md:h-20 opacity-70 float-slow"
            style={{ animationDelay: `${index * 2}s` }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 1 + index * 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/vaporwave/dolphin.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default CloudApproach;
