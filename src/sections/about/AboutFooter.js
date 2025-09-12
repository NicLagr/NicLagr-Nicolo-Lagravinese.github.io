import React from 'react';
import { motion } from 'framer-motion';

const AboutFooter = () => {
  return (
    <footer className="relative py-16 bg-black text-center overflow-hidden">
      {/* Subtle neon grid background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 79, 216, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 79, 216, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
        aria-hidden="true"
      />

      {/* Decorative floating elements */}
      <div className="absolute top-8 left-1/4 w-3 h-3 rounded-full bg-gradient-to-br from-pink-400/40 to-purple-600/40 blur-sm float-slow" aria-hidden="true" />
      <div className="absolute bottom-8 right-1/4 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400/40 to-teal-500/40 blur-sm float-slow" style={{ animationDelay: '3s' }} aria-hidden="true" />
      
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Main Tagline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-neon glow-pulse bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Let's build something that glows
          </span>
        </motion.h1>

        {/* Social Links */}
        <motion.div
          className="flex justify-center items-center gap-8 mb-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="https://linkedin.com/in/nicolo-lagravinese"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg hover:border-cyan-400/60 hover:bg-cyan-400/10 transition-all duration-300"
          >
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300" />
            <span className="text-white group-hover:text-cyan-300 font-mono text-sm transition-colors duration-300">LinkedIn</span>
          </a>

          <a
            href="https://www.behance.net/nicololagravi2"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-purple-400/30 rounded-lg hover:border-purple-400/60 hover:bg-purple-400/10 transition-all duration-300"
          >
            <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-600 rounded group-hover:shadow-lg group-hover:shadow-purple-400/50 transition-all duration-300" />
            <span className="text-white group-hover:text-purple-300 font-mono text-sm transition-colors duration-300">Behance</span>
          </a>

          <a
            href="https://github.com/NicLagr"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-green-400/30 rounded-lg hover:border-green-400/60 hover:bg-green-400/10 transition-all duration-300"
          >
            <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-600 rounded group-hover:shadow-lg group-hover:shadow-green-400/50 transition-all duration-300" />
            <span className="text-white group-hover:text-green-300 font-mono text-sm transition-colors duration-300">GitHub</span>
          </a>

          <a
            href="/Resume_Fall_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-pink-400/30 rounded-lg hover:border-pink-400/60 hover:bg-pink-400/10 transition-all duration-300"
          >
            <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-orange-500 rounded group-hover:shadow-lg group-hover:shadow-pink-400/50 transition-all duration-300" />
            <span className="text-white group-hover:text-pink-300 font-mono text-sm transition-colors duration-300">Resume</span>
          </a>
        </motion.div>

        {/* Subtle flourish */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-400 to-cyan-400 glow-pulse" />
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-sm text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
        >
          © 2025 Nicolò Lagravinese
        </motion.p>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
    </footer>
  );
};

export default AboutFooter;
