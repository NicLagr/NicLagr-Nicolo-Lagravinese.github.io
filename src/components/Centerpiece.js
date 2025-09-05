import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Centerpiece = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 100,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 100,
    damping: 30
  });

  const projects = [
    {
      name: "Mission Control 3.0",
      angle: 0,
      link: "/portfolio",
      color: "from-vaporwave-pink to-vaporwave-purple"
    },
    {
      name: "TEC Demos",
      angle: 120,
      link: "/portfolio",
      color: "from-vaporwave-teal to-vaporwave-blue"
    },
    {
      name: "Jewelry Platform",
      angle: 240,
      link: "/portfolio",
      color: "from-vaporwave-purple to-vaporwave-teal"
    }
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Main Orb */}
      <motion.div
        ref={ref}
        className="relative w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={prefersReducedMotion ? {} : {
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
        animate={prefersReducedMotion ? { 
          boxShadow: [
            "0 0 20px rgba(255, 0, 255, 0.3)",
            "0 0 40px rgba(255, 0, 255, 0.6)",
            "0 0 20px rgba(255, 0, 255, 0.3)"
          ]
        } : {
          y: [-10, 10, -10],
          boxShadow: [
            "0 0 20px rgba(255, 0, 255, 0.3)",
            "0 0 40px rgba(255, 0, 255, 0.6)",
            "0 0 20px rgba(255, 0, 255, 0.3)"
          ]
        }}
        transition={prefersReducedMotion ? {
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        } : {
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Glass Orb */}
        <div className="w-64 h-64 mx-auto glass-card rounded-full flex items-center justify-center relative overflow-hidden group cursor-pointer">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-vaporwave-pink/20 via-vaporwave-purple/20 to-vaporwave-teal/20 rounded-full" />
          
          {/* Noise overlay */}
          <div className="absolute inset-0 noise-bg rounded-full" />
          
          {/* Inner glow */}
          <div className="absolute inset-4 bg-gradient-to-br from-vaporwave-pink/10 to-transparent rounded-full" />
          
          {/* Center content */}
          <div className="relative z-10 text-center">
            <motion.div
              className="text-2xl font-bold text-gradient-vaporwave mb-2"
              animate={prefersReducedMotion ? {} : {
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Explore
            </motion.div>
            <div className="text-sm text-text-secondary">
              Interactive Portfolio
            </div>
          </div>

          {/* Hover ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full border border-vaporwave-pink/30"
            initial={{ scale: 1, opacity: 0 }}
            animate={isHovered ? { 
              scale: [1, 1.2, 1.4], 
              opacity: [0.5, 0.2, 0] 
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>

        {/* Orbiting Project Chips */}
        {projects.map((project, index) => {
          const radius = 140;
          const angle = (project.angle + (prefersReducedMotion ? 0 : Date.now() * 0.0005)) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={project.name}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                x: prefersReducedMotion ? Math.cos(project.angle * (Math.PI / 180)) * radius : x,
                y: prefersReducedMotion ? Math.sin(project.angle * (Math.PI / 180)) * radius : y,
              }}
              animate={prefersReducedMotion ? {} : {
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }}
              whileHover={{ scale: 1.2 }}
            >
              <Link to={project.link}>
                <motion.div
                  className={`w-16 h-16 rounded-full glass-card bg-gradient-to-br ${project.color} flex items-center justify-center text-xs font-medium text-white text-center p-2 cursor-pointer shadow-lg`}
                  whileHover={{ 
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="leading-tight">
                    {project.name.split(' ').map((word, i) => (
                      <div key={i} className="text-[10px]">{word}</div>
                    ))}
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Instructions */}
      <motion.div
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center text-sm text-text-secondary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div>Hover to explore • Click chips for projects</div>
      </motion.div>
    </div>
  );
};

export default Centerpiece;
