import React from 'react';
import { motion } from 'framer-motion';

// Import XP icons
import emailIcon from '../assets/xp-icons/email.png';
import linkIcon from '../assets/xp-icons/link.png';
import briefcaseIcon from '../assets/xp-icons/briefcase.png';
import targetIcon from '../assets/xp-icons/target.png';
import globeIcon from '../assets/xp-icons/globe.png';
import clockIcon from '../assets/xp-icons/clock.png';
import computerIcon from '../assets/xp-icons/computer.png';

const Contact = () => {
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

  const contactMethods = [
    {
      name: "Email",
      value: "nicolo.lagravinese@example.com",
      href: "mailto:nicolo.lagravinese@example.com",
      icon: emailIcon,
      description: "Best for project inquiries and opportunities"
    },
    {
      name: "GitHub",
      value: "github.com/NicLagr",
      href: "https://github.com/NicLagr",
      icon: linkIcon,
      description: "Check out my code and contributions"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/nicololagravinese",
      href: "https://linkedin.com/in/nicololagravinese",
      icon: briefcaseIcon,
      description: "Professional network and experience"
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-vaporwave" />
      <div className="absolute inset-0 gradient-bg-modern opacity-0 transition-opacity duration-500 [data-theme='modern']_&:opacity-100" />
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
            Let's <span className="text-gradient-vaporwave">Connect</span>
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Interested in collaborating on a project or discussing opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.name}
                href={method.href}
                target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={method.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                className="card card-hover group text-center block"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <img src={method.icon} alt={method.name} className="w-12 h-12" />
                </div>
                <h3 className="heading-3 text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300">
                  {method.name}
                </h3>
                <p className="body-medium text-accent-primary font-mono mb-3 break-all">
                  {method.value}
                </p>
                <p className="text-sm text-text-secondary">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Availability notice */}
          <motion.div
            className="card bg-gradient-to-br from-vaporwave-pink/10 to-vaporwave-purple/10 border-vaporwave-pink/20 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-vaporwave-pink to-vaporwave-purple rounded-full flex items-center justify-center mr-4">
                <img src={targetIcon} alt="Target" className="w-6 h-6" />
              </div>
              <h3 className="heading-3 text-text-primary">
                Currently Available
              </h3>
            </div>
            <p className="body-large text-accent-primary font-medium mb-2">
              Available Jan–Aug 2026 (co-op)
            </p>
            <p className="body-medium text-text-secondary">
              Actively seeking co-op opportunities in full-stack development, 
              cloud infrastructure, and IoT integration. Open to remote and hybrid arrangements.
            </p>
          </motion.div>

          {/* Additional info */}
          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <p className="body-medium text-text-secondary mb-6">
              Response time: Usually within 24 hours
            </p>
            <div className="flex justify-center space-x-6 text-sm text-text-secondary">
              <span className="flex items-center"><img src={globeIcon} alt="Globe" className="w-4 h-4 mr-1" /> Boston, MA</span>
              <span className="flex items-center"><img src={clockIcon} alt="Clock" className="w-4 h-4 mr-1" /> EST Timezone</span>
              <span className="flex items-center"><img src={computerIcon} alt="Computer" className="w-4 h-4 mr-1" /> Remote Friendly</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
