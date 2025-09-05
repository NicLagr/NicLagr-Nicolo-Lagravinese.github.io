import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
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

  const headerVariants = {
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
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 noise-bg" />
      
      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
        >
          <h2 className="heading-2 mb-6">
            Featured <span className="text-gradient-vaporwave">Projects</span>
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            A selection of recent work spanning full-stack development, cloud infrastructure, 
            and hardware integration projects.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="body-medium text-text-secondary mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/NicLagr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View GitHub Profile →
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
