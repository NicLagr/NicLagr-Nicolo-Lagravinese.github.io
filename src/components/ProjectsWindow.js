import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RetroWindow from './RetroWindow';

// Import XP icons
import rocketIcon from '../assets/xp-icons/rocket.png';
import diamondIcon from '../assets/xp-icons/diamond.png';
import lightbulbIcon from '../assets/xp-icons/lightbulb.png';
import lightningIcon from '../assets/xp-icons/lightning.png';

const ProjectsWindow = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const projects = [
    {
      name: "Mission Control 3.0",
      icon: rocketIcon,
      link: "/portfolio#mission-control",
      color: "text-vw-pink"
    },
    {
      name: "TEC Demos",
      icon: lightningIcon,
      link: "/portfolio#tec-demos", 
      color: "text-vw-cyan"
    },
    {
      name: "Jewelry Platform",
      icon: diamondIcon,
      link: "/portfolio#jewelry-platform",
      color: "text-vw-purple"
    }
  ];

  return (
    <motion.div
      className="absolute top-4 right-4 w-72 z-20"
      initial={{ opacity: 0, scale: 0.8, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      drag={!prefersReducedMotion}
      dragConstraints={{ left: -200, right: 200, top: -100, bottom: 100 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <RetroWindow title="Projects.exe" className="glass glow">
        <div className="p-3 space-y-3 font-mono text-sm">
          <div className="flex items-center gap-2 text-vw-ink mb-3">
            <span className="text-vw-pink">></span>
            <span className="aberration">Select project to explore</span>
          </div>
          
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 + (index * 0.2) }}
            >
              <Link 
                to={project.link}
                className="flex items-center gap-3 p-2 rounded hover:bg-white/5 transition-colors group"
              >
                <img src={project.icon} alt={`${project.name} icon`} className="w-5 h-5" />
                <div className="flex-1">
                  <div className={`font-medium ${project.color} group-hover:aberration transition-all`}>
                    {project.name}
                  </div>
                  <div className="text-xs text-vw-ink/60">
                    Click to view details
                  </div>
                </div>
                <motion.span 
                  className="text-vw-cyan opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={prefersReducedMotion ? {} : { x: [0, 3, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          ))}
          
          <div className="mt-4 pt-3 border-t border-white/10">
            <div className="text-xs text-vw-ink/50 flex items-center gap-2">
              <span className="w-2 h-2 bg-vw-pink rounded-full animate-pulse"></span>
              <span>3 projects loaded</span>
            </div>
          </div>
        </div>
      </RetroWindow>
      
      {/* Drag hint */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-vw-ink/40 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <img src={lightbulbIcon} alt="Tip" className="w-4 h-4 inline mr-1" /> Drag me around!
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectsWindow;
