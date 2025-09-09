import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RetroWindow from '../../components/RetroWindow';

const TECDemoEngineering = ({ onBack }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const project = {
    title: "TEC Demo Engineering",
    subtitle: "Industrial IoT Integration & Experience Design",
    company: "Tulip Interfaces",
    role: "Demo Engineer & Hardware Integration Specialist",
    timeframe: "Jan 2025 – Jun 2025",
    status: "Production Experience Center",
    location: "Tulip Experience Center, Somerville MA",
    
    overview: "Led the development, maintenance, and innovation of interactive manufacturing demos in Tulip's flagship Experience Center. Built cutting-edge hardware integrations, travel demo kits, and tradeshow experiences that showcase Industry 4.0 technologies to Fortune 500 companies, executives, and prospects worldwide.",
    
    challenge: "Create compelling, reliable, and scalable demo experiences that demonstrate Tulip's industrial IoT capabilities while maintaining 99%+ uptime for high-stakes executive tours from companies like Pfizer, Johnson & Johnson, Amazon Robotics, and Mitsubishi Electric.",
    
    solution: "Developed a comprehensive ecosystem of demos spanning discrete manufacturing, life sciences, and composable HMI solutions. Implemented robust hardware integrations using industrial protocols (OPC-UA, MQTT), computer vision systems, and AI-powered quality inspection workflows.",
    
    impact: [
      "Enabled sales team success through demo experiences viewed by 150-300 executives from Fortune 500 companies",
      "Achieved 99%+ uptime for critical customer tours through proactive monitoring",
      "Deployed portable demo kits to 5+ major tradeshows including Automate, ProveIt, and World Economic Forum",
      "Reduced demo setup time by 75% through standardized travel kit designs and automation",
      "Supported enterprise sales cycles by demonstrating ROI to prospects including Pfizer, J&J, Amazon Robotics",
      "Trained LandingAI computer vision models achieving 95%+ accuracy in defect detection",
      "Contributed to sales enablement infrastructure supporting $3-5M+ annual revenue pipeline through enhanced customer engagement"
    ],

    keyFeatures: [
      {
        title: "Automate 2025 Demo Benches",
        description: "Aided team in building comprehensive hardware wall with 15+ industrial devices, trained and integrated AI vision detection system, plus helped assemble mini cHMI demo bench with Ignition SCADA and UNS integration",
        tech: ["Mitsubishi PLC", "Cognex Vision", "LandingAI", "Ignition SCADA", "Unified Namespace", "HiveMQ", "Arduino Integration", "OPC-UA", "MQTT"],
        media: "/projects/tec-demos/automate-demo.jpg"
      },
      {
        title: "World Economic Forum cHMI Wall & Andon Assembly",
        description: "Aided team in building composable HMI wall for World Economic Forum at Tulip HQ, plus developed Andon assembly pop-up factory for executive demonstrations",
        tech: ["Composable HMI", "Multi-Screen Integration", "Andon Systems", "Executive Demos"],
        media: "/projects/tec-demos/hardware-wall.png"
      },
      {
        title: "TEC Clock Assembly Pop-up Factory",
        description: "Constructed interactive clock assembly demonstration with complete software and hardware integration using Node-RED, Andon lights, pick-to-lights, RFID readers, and assembly workflows",
        tech: ["Node-RED", "Andon Lights", "Pick-to-Light", "RFID Reader", "Assembly Workflows", "Hardware Integration", "Software Setup"],
        media: "/projects/tec-demos/tec-clock-assembly.jpg"
      },
      {
        title: "Discrete Manufacturing Demo Kit",
        description: "Portable demo kit for discrete manufacturing showcasing assembly workflows, quality tracking, and operator guidance systems with yellow bin organization",
        tech: ["Portable Hardware", "Assembly Tracking", "Quality Gates", "Operator Guidance", "Modular Design"],
        media: "/projects/tec-demos/discrete-demo-kit.jpg"
      },
      {
        title: "Pharma Travel Demo Kits",
        description: "Portable life sciences demo kits featuring Wave Bioreactor simulation and Lab Companion for major pharma tradeshows",
        tech: ["Portable Hardware", "Wave Bioreactor", "Lab Companion", "Modular Design"],
        media: "/projects/tec-demos/pharma-kit.png"
      },
      {
        title: "Coffee Brewlip Learning Project",
        description: "First project: Smart coffee tracking system with hardware integration and Slack notifications (learning experience)",
        tech: ["Node-RED", "EdgeIO", "Smart Plugs", "Slack API", "Scale Integration"],
        media: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7323366723900928001?compact=1"
      }
    ],

    techStack: {
      hardware: ["Mitsubishi PLC", "Cognex Vision Systems", "Banner PTL110s", "ProGlove Scanners", "EdgeIO Devices", "Smart Plugs", "Scales", "RFID Readers", "Torque Tools"],
      protocols: ["OPC-UA", "MQTT", "Modbus", "Ethernet/IP", "TCP/IP"],
      platforms: ["Node-RED", "Tulip Platform", "Ignition SCADA", "LandingAI", "HiveMQ"],
      cloud: ["AWS", "Snowflake", "HighByte", "Unified Namespace"],
      programming: ["JavaScript", "TypeScript", "SQL", "HTML/CSS", "Docker", "API Development"],
      design: ["Figma", "3D Printing", "Hardware Design", "UX/UI Design"]
    },

    recognitionQuotes: [
      {
        author: "Cailey Watson, Experiential Marketing Manager",
        quote: "Want to give a huge kudos to @Nicolo Lagravinese... for the collaboration to spec, build and execute our vision for demos at pharma shows. We would not be able to set ourselves apart at these events without you.",
        context: "Pharma MES USA Show 2025"
      },
      {
        author: "Jake Bohenko, Account Executive",
        quote: "Gotta throw in @Nicolo Lagravinese as a big part of the success as well. Had a few folks in last week to the TEC and everything went great",
        context: "Customer Tour Feedback"
      },
      {
        author: "Mark Freedman, Ecosystem Senior Lead",
        quote: "Great job @Nicolo Lagravinese! The response time to bugs and miscellaneous issues is second to none!",
        context: "TEC Operations Excellence"
      }
    ],

    tradeshowExperience: [
      {
        event: "Automate Show 2025",
        location: "Detroit, MI",
        role: "Demo Engineer/Developer",
        achievements: [
          "Aided team in building hardware wall with 15+ industrial devices, trained and integrated AI vision system",
          "Aided team in assembling mini cHMI demo bench with Ignition SCADA integration", 
          "Integrated Arduino partnership demo with Unified Namespace data flow",
          "Trained LandingAI computer vision models for Cognex camera integration",
          "Achieved flawless demo performance throughout 4-day show"
        ]
      },
      {
        event: "Pharma MES USA 2025",
        location: "Boston, MA",
        role: "Demo Kit Developer",
        achievements: [
          "Created pharma-specific travel kit with Wave Bioreactor simulation",
          "Integrated Lab Companion and Composable MES demonstrations",
          "Engaged with prospects from BMS, Bayer, Vertex, Moderna, Pfizer"
        ]
      },
      {
        event: "ProveIt, World Economic Forum, Honeywell World Tour",
        location: "Various",
        role: "Demo Engineer/Developer",
        achievements: [
          "Provided on-site (World Economic Forum) and remote technical support for developed demo systems",
          "Ensured 100% demo reliability across multiple concurrent events",
          "Trained field teams on demo operation and troubleshooting"
        ]
      }
    ],

    customerEngagements: [
      "Thermo-Fisher Scientific", "Smith & Nephew", "Mitsubishi Electric", 
      "Johnson and Johnson", "Pfizer", "COGNEX", "Stanley Black and Decker", 
      "Honeywell", "Amazon Robotics", "Bristol Myers Squibb", "Bayer", 
      "Vertex Pharmaceuticals", "Moderna", "AstraZeneca", "Schneider Electric", 
      "Avantor", "Sartorius", "DMG MORI", "HighByte", "Frontwell"
    ],

    technicalSkills: [
      {
        category: "Industrial Protocols",
        skills: ["OPC-UA troubleshooting with ICONICS", "MQTT with HiveMQ", "Unified Namespace (UNS) architecture", "HighByte data transformation"]
      },
      {
        category: "Hardware Integration",
        skills: ["PLC programming and connectivity", "Vision system configuration", "Sensor integration and calibration", "Industrial networking"]
      },
      {
        category: "AI & Computer Vision",
        skills: ["LandingAI model training", "OCR and defect detection", "Real-time image processing", "Quality inspection automation"]
      },
      {
        category: "Full-Stack Development",
        skills: ["Node.js/Express APIs", "React dashboard development", "Real-time data visualization", "Database design and optimization"]
      }
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ProjectMeta = ({ project, layout = 'sidebar' }) => (
    <motion.div 
      className={`bg-gray-900/50 backdrop-blur border border-vw-cyan/30 rounded-lg p-4 ${layout === 'inline' ? 'mb-6' : ''}`}
      initial={{ opacity: 0, x: layout === 'sidebar' ? 20 : 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="text-vw-cyan font-mono text-sm mb-3 aberration">PROJECT_META.DAT</h3>
      <div className="space-y-2 text-xs font-mono">
        <div><span className="text-vw-pink">COMPANY:</span> <span className="text-white">{project.company}</span></div>
        <div><span className="text-vw-pink">ROLE:</span> <span className="text-white">{project.role}</span></div>
        <div><span className="text-vw-pink">TIMELINE:</span> <span className="text-white">{project.timeframe}</span></div>
        <div><span className="text-vw-pink">STATUS:</span> <span className="text-green-400">{project.status}</span></div>
        <div><span className="text-vw-pink">LOCATION:</span> <span className="text-white">{project.location}</span></div>
      </div>
    </motion.div>
  );

  const TechStackGrid = ({ techStack }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {Object.entries(techStack).map(([category, technologies], index) => (
        <motion.div
          key={category}
          className="bg-gray-900/50 backdrop-blur border border-white/20 rounded-lg p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h4 className="text-vw-cyan font-mono text-sm mb-3 uppercase">{category.replace('_', ' ')}</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-vw-purple/20 border border-vw-purple/50 text-vw-purple text-xs rounded font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Back Button */}
      {onBack && (
        <motion.button
          className="fixed top-6 left-6 z-50 px-4 py-2 bg-gray-800 border border-gray-600 text-vw-cyan font-mono text-sm hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
        >
          ← BACK.exe
        </motion.button>
      )}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-vw-cyan text-black rounded-full flex items-center justify-center font-mono text-lg hover:bg-vw-pink transition-colors"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold font-mono mb-2 aberration text-vw-cyan">
                  {project.title}
                </h1>
                <p className="text-xl text-vw-pink font-mono">{project.subtitle}</p>
              </motion.div>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {project.overview}
              </motion.p>

              {/* Featured Demo Gallery */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-vw-cyan font-mono text-lg mb-4">Featured Demos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 backdrop-blur border border-vw-cyan/30 rounded-lg p-4">
                    <div className="w-full bg-gray-800 rounded mb-3 flex items-center justify-center overflow-hidden" style={{ minHeight: '160px', maxHeight: '200px' }}>
                      <img 
                        src="/projects/tec-demos/pharma-kit.png" 
                        alt="Pharma Travel Demo Kits"
                        className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                        style={{ maxHeight: '180px' }}
                        onError={(e) => {e.target.style.display = 'none'}}
                      />
                    </div>
                    <h4 className="text-vw-pink font-mono mb-2">Pharma Travel Demo Kits</h4>
                    <p className="text-sm text-gray-400 font-mono">
                      Portable life sciences demo kits with Wave Bioreactor simulation and Lab Companion
                    </p>
                  </div>
                  <div className="bg-gray-900/50 backdrop-blur border border-vw-cyan/30 rounded-lg p-4">
                    <div className="w-full bg-gray-800 rounded mb-3 flex items-center justify-center overflow-hidden" style={{ minHeight: '160px', maxHeight: '200px' }}>
                      <img 
                        src="/projects/tec-demos/tec-clock-assembly.jpg" 
                        alt="TEC Clock Assembly Pop-up Factory"
                        className="max-w-full max-h-full object-cover hover:scale-105 transition-transform duration-300"
                        style={{ maxHeight: '180px', transform: 'scale(1.62) translateY(20px)' }}
                        onError={(e) => {e.target.style.display = 'none'}}
                      />
                    </div>
                    <h4 className="text-vw-pink font-mono mb-2">TEC Clock Assembly Pop-up Factory</h4>
                    <p className="text-sm text-gray-400 font-mono">
                      Constructed with Node-RED, Andon lights, pick-to-lights, and RFID integration
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-80">
              <ProjectMeta project={project} />
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-wrap gap-2">
            {['overview', 'demos', 'tech', 'tradeshows', 'recognition'].map((section) => (
              <button
                key={section}
                className={`px-4 py-2 font-mono text-sm border transition-colors ${
                  activeSection === section
                    ? 'bg-vw-cyan text-black border-vw-cyan'
                    : 'bg-transparent text-vw-cyan border-vw-cyan/50 hover:border-vw-cyan'
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section.toUpperCase()}.EXE
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {activeSection === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-900/50 backdrop-blur border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-red-400 font-mono text-lg mb-4 aberration">CHALLENGE.LOG</h3>
                  <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-green-400 font-mono text-lg mb-4 aberration">SOLUTION.EXE</h3>
                  <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="bg-gray-900/50 backdrop-blur border border-vw-cyan/30 rounded-lg p-6">
                <h3 className="text-vw-cyan font-mono text-lg mb-4 aberration">IMPACT_METRICS.DAT</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.impact.map((impact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-vw-cyan rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300">{impact}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Customer Engagements */}
              <div className="bg-gray-900/50 backdrop-blur border border-vw-purple/30 rounded-lg p-6">
                <h3 className="text-vw-purple font-mono text-lg mb-4 aberration">CUSTOMER_ENGAGEMENTS.LOG</h3>
                <p className="text-gray-300 mb-4">Demonstrated technology solutions to executives from:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {project.customerEngagements.map((company, index) => (
                    <motion.div
                      key={index}
                      className="px-3 py-2 bg-vw-purple/20 border border-vw-purple/50 text-vw-purple text-sm rounded font-mono text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {company}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'demos' && (
            <motion.div
              key="demos"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-mono text-vw-cyan aberration mb-8">DEMO_SYSTEMS.EXE</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {project.keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur border border-white/20 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Media Section */}
                    {feature.media && (
                      <div className="w-full bg-gray-800 rounded-t-lg flex items-center justify-center overflow-hidden" style={{ minHeight: '240px', maxHeight: '420px' }}>
                        {feature.media.includes('linkedin.com') ? (
                          <iframe 
                            src={feature.media} 
                            width="504" 
                            height="399" 
                            frameBorder="0" 
                            allowFullScreen 
                            title={`${feature.title} Demo`}
                            className="max-w-full border-0"
                            style={{ height: '399px', maxWidth: '100%' }}
                          />
                        ) : (
                          <img 
                            src={feature.media} 
                            alt={feature.title}
                            className="max-w-full max-h-full object-cover hover:scale-105 transition-transform duration-300"
                            style={{ 
                              maxHeight: '300px',
                              transform: feature.title.includes('World Economic Forum') ? 'scale(1.4)' : 
                                         feature.title.includes('TEC Clock Assembly') ? 'scale(1.44) translateY(30px)' : 'none'
                            }}
                            onError={(e) => {e.target.style.display = 'none'}}
                          />
                        )}
                      </div>
                    )}
                    
                    <div className="p-6">
                      <h3 className="text-vw-pink font-mono text-lg mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-vw-cyan/20 border border-vw-cyan/50 text-vw-cyan text-xs rounded font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* TEC Links */}
              <div className="bg-gray-900/50 backdrop-blur border border-vw-cyan/30 rounded-lg p-6">
                <h3 className="text-vw-cyan font-mono text-lg mb-4 aberration">EXPERIENCE_CENTER.LINKS</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-vw-pink font-mono">Official TEC:</span>
                    <a href="https://tulip.co/tulip-experience-center/" target="_blank" rel="noopener noreferrer" 
                       className="ml-2 text-vw-cyan hover:text-white transition-colors underline">
                      tulip.co/tulip-experience-center/
                    </a>
                  </div>
                  <div>
                    <span className="text-vw-pink font-mono">Virtual Tour:</span>
                    <a href="https://tulip.co/tec-virtual-tour/" target="_blank" rel="noopener noreferrer"
                       className="ml-2 text-vw-cyan hover:text-white transition-colors underline">
                      tulip.co/tec-virtual-tour/
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'tech' && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-mono text-vw-cyan aberration mb-8">TECH_STACK.SYS</h2>
              
              <TechStackGrid techStack={project.techStack} />

              {/* Technical Skills Deep Dive */}
              <div className="space-y-6">
                <h3 className="text-xl font-mono text-vw-pink aberration">TECHNICAL_EXPERTISE.LOG</h3>
                {project.technicalSkills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur border border-white/20 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="text-vw-cyan font-mono text-lg mb-3">{skillGroup.category}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-vw-cyan rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'tradeshows' && (
            <motion.div
              key="tradeshows"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-mono text-vw-cyan aberration mb-8">TRADESHOW_DEPLOYMENTS.LOG</h2>
              
              <div className="space-y-6">
                {project.tradeshowExperience.map((show, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur border border-vw-pink/30 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-vw-pink font-mono text-xl">{show.event}</h3>
                        <p className="text-gray-400 font-mono">{show.location} • {show.role}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {show.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-vw-pink rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'recognition' && (
            <motion.div
              key="recognition"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-mono text-vw-cyan aberration mb-8">TEAM_RECOGNITION.DAT</h2>
              
              <div className="space-y-6">
                {project.recognitionQuotes.map((quote, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur border border-green-500/30 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <blockquote className="text-gray-300 text-lg leading-relaxed mb-4 italic">
                      "{quote.quote}"
                    </blockquote>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <cite className="text-green-400 font-mono not-italic">— {quote.author}</cite>
                      <span className="text-gray-500 font-mono text-sm">{quote.context}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Recognition Context */}
              <div className="bg-gray-900/50 backdrop-blur border border-vw-cyan/30 rounded-lg p-6">
                <h3 className="text-vw-cyan font-mono text-lg mb-4 aberration">KEY_CONTRIBUTIONS.SUM</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-vw-cyan rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Maintained 99%+ uptime for high-stakes executive tours</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-vw-cyan rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Built travel demo kits deployed to 10+ major tradeshows</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-vw-cyan rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Integrated 15+ industrial hardware devices with Tulip platform</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-vw-cyan rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">Trained AI models achieving 95%+ accuracy in defect detection</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TECDemoEngineering;
