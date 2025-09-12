import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { getImagePath } from '../../utils/imagePath';

const JourneyTimeline = () => {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  const journeyNodes = [
    {
      title: 'CS + Interaction Design',
      subtitle: 'Northeastern',
      description: 'Foundation in human-centered design and technical systems',
      icon: '/assets/xp-icons/graduation.png'
    },
    {
      title: 'Tulip Co-op → Product Support',
      subtitle: 'Hardware + IoT demos',
      description: 'Bridging physical and digital experiences',
      icon: '/assets/xp-icons/factory.png'
    },
    {
      title: 'Mission Control 3.0',
      subtitle: 'Redshift + React + 3D viz',
      description: 'Real-time data visualization for complex systems',
      icon: '/assets/xp-icons/rocket.png'
    },
    {
      title: 'Personal Projects',
      subtitle: 'Widgets, games, vaporwave experiments',
      description: 'Exploring playful interfaces and creative expression',
      icon: '/assets/xp-icons/tools.png'
    },
    {
      title: 'Next',
      subtitle: 'Build joyful systems that scale',
      description: 'Creating tools that feel magical at any size',
      icon: '/assets/xp-icons/target.png'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-vaporwave-dark to-black overflow-hidden">
      {/* Vaporwave city grid background */}
      <div className="absolute inset-0 opacity-15">
        <img 
          src={getImagePath('/vapor/grid.png')} 
          alt="" 
          className="w-full h-full object-cover"
          style={{ 
            transform: 'perspective(1000px) rotateX(75deg) translateZ(-300px)',
            filter: 'hue-rotate(280deg)'
          }}
        />
      </div>

      {/* Floating vaporwave car */}
      <motion.div
        className="absolute top-32 right-20 w-32 h-20 opacity-25 hidden lg:block"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      >
        <img
          src={getImagePath('/vapor/car.png')}
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-16 w-20 h-20 opacity-20 float-slow"
        aria-hidden="true"
      >
        <img src={getImagePath('/vapor/spheres.png')} alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* Classical vaporwave bust */}
      <motion.div
        className="absolute bottom-1/4 right-16 w-24 h-24 opacity-25 float-slow"
        style={{ animationDelay: '4s' }}
        aria-hidden="true"
      >
        <img src={getImagePath('/vapor/statue.png')} alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* Wireframe bust silhouette */}
      <motion.div
        className="absolute top-1/3 right-8 w-14 h-18 opacity-20 hidden xl:block float-wireframe wireframe-glow"
        style={{ animationDelay: '9s' }}
        initial={{ opacity: 0, x: 30, rotateY: 45 }}
        whileInView={{ opacity: 0.2, x: 0, rotateY: 0 }}
        transition={{ delay: 3, duration: 1.5 }}
        viewport={{ once: true }}
        aria-hidden="true"
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 120" className="w-full h-full">
            {/* Wireframe bust outline */}
            <path 
              d="M20,25 Q30,15 50,15 Q70,15 80,25 Q85,30 85,40 Q85,50 80,55 L80,80 Q80,90 75,95 L70,100 Q65,105 50,105 Q35,105 30,100 L25,95 Q20,90 20,80 L20,55 Q15,50 15,40 Q15,30 20,25 Z" 
              fill="none" 
              stroke="rgba(255, 79, 216, 0.5)" 
              strokeWidth="1.5"
            />
            {/* Wireframe grid on face */}
            <line x1="30" y1="25" x2="70" y2="25" stroke="rgba(255, 79, 216, 0.3)" strokeWidth="0.8"/>
            <line x1="30" y1="35" x2="70" y2="35" stroke="rgba(255, 79, 216, 0.3)" strokeWidth="0.8"/>
            <line x1="30" y1="45" x2="70" y2="45" stroke="rgba(255, 79, 216, 0.3)" strokeWidth="0.8"/>
            <line x1="40" y1="20" x2="40" y2="50" stroke="rgba(255, 79, 216, 0.3)" strokeWidth="0.8"/>
            <line x1="50" y1="15" x2="50" y2="55" stroke="rgba(255, 79, 216, 0.3)" strokeWidth="0.8"/>
            <line x1="60" y1="20" x2="60" y2="50" stroke="rgba(255, 79, 216, 0.3)" strokeWidth="0.8"/>
            {/* Base */}
            <rect x="30" y="105" width="40" height="8" fill="none" stroke="rgba(255, 79, 216, 0.4)" strokeWidth="1"/>
          </svg>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-20 text-white font-mono"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="text-neon-purple">Journey</span>
        </motion.h2>

        {/* Timeline container */}
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 hidden md:block">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-500"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Desktop timeline */}
          <div className="hidden md:flex justify-between items-center relative">
            {journeyNodes.map((node, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  delay: index * 0.3,
                  duration: 0.8,
                  ease: "easeOut"
                }}
              >
                {/* Node with Windows icon */}
                <motion.div
                  className="w-12 h-12 bg-gray-200 border-2 border-gray-400 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg"
                  style={{
                    borderTopColor: '#ffffff',
                    borderLeftColor: '#ffffff',
                    borderRightColor: '#808080',
                    borderBottomColor: '#808080'
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    delay: index * 0.3 + 0.5,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 150
                  }}
                >
                  <img 
                    src={node.icon} 
                    alt={node.title}
                    className="w-6 h-6"
                  />
                </motion.div>

                {/* Windows 98 style card */}
                <motion.div
                  className="bg-gray-200 border-2 border-gray-400 shadow-lg max-w-xs"
                  style={{
                    borderTopColor: '#ffffff',
                    borderLeftColor: '#ffffff',
                    borderRightColor: '#808080',
                    borderBottomColor: '#808080'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    delay: index * 0.3 + 0.7,
                    duration: 0.6
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Card title bar */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 text-xs font-bold flex items-center gap-2">
                    <img 
                      src={node.icon} 
                      alt={node.title}
                      className="w-3 h-3"
                    />
                    <span>{node.title}</span>
                  </div>
                  
                  {/* Card content */}
                  <div className="p-3 bg-gray-100 text-center">
                    <p className="text-xs font-bold text-blue-600 mb-1 font-mono">
                      {node.subtitle}
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed font-mono">
                      {node.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden space-y-8">
            {journeyNodes.map((node, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.6
                }}
                viewport={{ once: true }}
              >
                {/* Vertical line and Windows icon */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 bg-gray-200 border-2 border-gray-400 rounded-full flex items-center justify-center relative z-10 shadow-lg"
                    style={{
                      borderTopColor: '#ffffff',
                      borderLeftColor: '#ffffff',
                      borderRightColor: '#808080',
                      borderBottomColor: '#808080'
                    }}
                  >
                    <img 
                      src={node.icon} 
                      alt={node.title}
                      className="w-5 h-5"
                    />
                  </div>
                  {index < journeyNodes.length - 1 && (
                    <div className="w-[3px] h-16 bg-gradient-to-b from-blue-400/50 to-purple-400/50 mt-2 rounded-full" />
                  )}
                </div>

                {/* Windows 98 style card */}
                <div 
                  className="bg-gray-200 border-2 border-gray-400 shadow-lg flex-1"
                  style={{
                    borderTopColor: '#ffffff',
                    borderLeftColor: '#ffffff',
                    borderRightColor: '#808080',
                    borderBottomColor: '#808080'
                  }}
                >
                  {/* Card title bar */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 text-sm font-bold flex items-center gap-2">
                    <img 
                      src={node.icon} 
                      alt={node.title}
                      className="w-4 h-4"
                    />
                    <span>{node.title}</span>
                  </div>
                  
                  {/* Card content */}
                  <div className="p-4 bg-gray-100">
                    <p className="text-sm font-bold text-blue-600 mb-2 font-mono">
                      {node.subtitle}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed font-mono">
                      {node.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-6 h-6 rounded-full bg-gradient-to-br from-pink-400/20 to-purple-600/20 blur-sm float-slow" aria-hidden="true" />
        <div className="absolute bottom-10 left-20 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400/20 to-teal-500/20 blur-sm float-slow" style={{ animationDelay: '5s' }} aria-hidden="true" />
      </div>
    </section>
  );
};

export default JourneyTimeline;
