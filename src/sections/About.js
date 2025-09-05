import React from 'react';
import { motion } from 'framer-motion';
import { skills, aboutText, availabilityText } from '../data/skills';

const About = () => {
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

  const skillCategories = [
    { title: "Core Technologies", skills: skills.core, color: "from-vaporwave-pink to-vaporwave-purple" },
    { title: "Integrations", skills: skills.integrations, color: "from-vaporwave-teal to-vaporwave-blue" },
    { title: "Design & Tooling", skills: [...skills.design, ...skills.tooling], color: "from-vaporwave-purple to-vaporwave-teal" }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-secondary" />
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
          variants={itemVariants}
        >
          <h2 className="heading-2 mb-6">
            About <span className="text-gradient-vaporwave">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio section */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="heading-3 mb-4 text-text-primary">
                Background
              </h3>
              <p className="body-large text-text-secondary leading-relaxed">
                {aboutText}
              </p>
            </div>

            {/* Hardware & IoT Callout */}
            <motion.div
              className="card bg-gradient-to-br from-vaporwave-teal/10 to-vaporwave-blue/10 border-vaporwave-teal/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-vaporwave-teal to-vaporwave-blue rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <h3 className="heading-3 text-text-primary">
                  Hardware & IoT
                </h3>
              </div>
              <p className="body-medium text-text-secondary">
                Specialized experience in industrial hardware integration, MQTT/OPC-UA protocols, 
                and building reliable IoT systems that bridge the physical and digital worlds.
              </p>
            </motion.div>

            {/* Availability */}
            <motion.div
              className="card bg-gradient-to-br from-vaporwave-pink/10 to-vaporwave-purple/10 border-vaporwave-pink/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-vaporwave-pink to-vaporwave-purple rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">📅</span>
                </div>
                <h3 className="heading-3 text-text-primary">
                  Availability
                </h3>
              </div>
              <p className="body-medium text-accent-primary font-medium">
                {availabilityText}
              </p>
              <p className="body-medium text-text-secondary mt-2">
                Open to co-op opportunities and collaborative projects.
              </p>
            </motion.div>

            {/* Resume download */}
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/NICOLO_LAGRAVINESE_Resume.pdf"
                download
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>📄</span>
                <span>Download Résumé (PDF)</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Skills section */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <h3 className="heading-3 text-text-primary mb-8">
              Technical Skills
            </h3>

            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                  <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full mr-3`} />
                  {category.title}
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-2 text-sm font-medium bg-bg-glass border border-border-color rounded-lg text-text-secondary hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
