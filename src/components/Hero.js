import React from 'react';
import { motion } from 'framer-motion';
import Centerpiece from './Centerpiece';

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
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="main-content"
      className="min-h-screen flex items-center justify-center relative overflow-hidden noise-bg"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 gradient-bg-vaporwave" />
      <div className="absolute inset-0 gradient-bg-modern opacity-0 transition-opacity duration-500 [data-theme='modern']_&:opacity-100" />
      
      {/* Content */}
      <motion.div
        className="container-custom text-center relative z-10 section-padding"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main headline */}
        <motion.h1
          className="heading-1 mb-6 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          Building reliable,{' '}
          <span className="text-gradient-vaporwave">
            human-centered systems
          </span>
          {' '}for web, cloud, and hardware
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="body-large text-text-secondary mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Full-stack + DevOps + IoT • React, Node, Docker/K8s, Redshift, UX
        </motion.p>

        {/* Centerpiece */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <Centerpiece />
        </motion.div>

        {/* Call to action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          
          <motion.a
            href="/contact"
            className="btn-ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-1 h-3 bg-text-secondary rounded-full mt-2"
              animate={{
                scaleY: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
