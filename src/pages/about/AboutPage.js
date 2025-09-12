import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../../sections/about/Hero';
import CloudApproach from '../../sections/about/CloudApproach';
import PassionGrid from '../../sections/about/PassionGrid';
import JourneyTimeline from '../../sections/about/JourneyTimeline';
import AboutFooter from '../../sections/about/AboutFooter';

const AboutPage = ({ onBack }) => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-vaporwave-dark text-white relative overflow-hidden"
    >
      {/* CRT Overlay */}
      <div className="fixed inset-0 bg-scanlines pointer-events-none z-50" />
      
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-40 px-4 py-2 glass-card rounded-lg text-white/90 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
        aria-label="Go back"
      >
        ← Back
      </button>

      {/* Main Content */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <CloudApproach />
        <PassionGrid />
        <JourneyTimeline />
        <AboutFooter />
      </main>
    </motion.div>
  );
};

export default AboutPage;
