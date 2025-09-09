import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="card card-hover group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Project gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 rounded-xl`} />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="heading-3 text-text-primary group-hover:text-accent-primary transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-sm text-text-secondary font-mono">
              {project.timeframe}
            </span>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-accent-primary/20 text-accent-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Main bullets */}
        <div className="space-y-3 mb-4">
          {project.bullets.slice(0, 2).map((bullet, bulletIndex) => (
            <div key={bulletIndex} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
              <p className="body-medium text-text-secondary leading-relaxed">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {/* Expandable content */}
        <AnimatePresence>
          {isExpanded && project.bullets.length > 2 && (
            <motion.div
              variants={expandVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className="overflow-hidden"
            >
              <div className="space-y-3 mb-4 border-t border-border-color pt-4">
                {project.bullets.slice(2).map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-secondary rounded-full mt-2 flex-shrink-0" />
                    <p className="body-medium text-text-secondary leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border-color">
          {project.bullets.length > 2 && (
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors duration-300 focus-visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
              <motion.span
                className="ml-1 inline-block"
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </motion.button>
          )}
          
          <motion.a
            href={project.link}
            className="text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors duration-300 focus-visible"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {project.ctaLabel} →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
