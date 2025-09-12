import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RetroWindow from '../../components/RetroWindow';
import MediaGallery from '../../components/MediaGallery';
import { getImagePath } from '../../utils/imagePath';

const MissionControl = ({ onBack }) => {
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
    title: "Mission Control 3.0",
    subtitle: "Interactive 3D Manufacturing Dashboard",
    company: "Tulip Interfaces",
    role: "Lead Full-Stack Developer & Designer",
    timeframe: "Jan 2025 – Jun 2025",
    status: "Production Deployed",
    location: "Tulip Experience Center, Somerville MA",
    
    overview: "Designed and developed a visually stunning, interactive 3D dashboard for Tulip's flagship Experience Center. This high-impact showpiece demonstrates Tulip's global reach and technological capabilities to visitors, customers, and executives through real-time data visualization and immersive storytelling.",
    
    challenge: "Create a captivating centerpiece for the Tulip Experience Center that would immediately impress visitors while showcasing the company's global presence, technological prowess, and manufacturing impact in an engaging, cinema-quality experience.",
    
    solution: "Built a comprehensive full-stack solution featuring an interactive 3D globe, real-time data visualization, and F1-inspired dashboard aesthetics. Implemented robust infrastructure with self-healing capabilities and deployed using modern DevOps practices.",
    
    impact: [
      "Successfully deployed to production in Tulip's flagship Experience Center",
      "Eliminated system downtime through self-healing data pipeline architecture", 
      "Enhanced visitor engagement and sales demos with immersive 3D visualizations",
      "Streamlined deployment process using Kubernetes, Helm, and Argo CD",
      "Demonstrated technical leadership in end-to-end product development"
    ],

    keyFeatures: [
      {
        title: "Interactive 3D Globe",
        description: "Immersive 3D visualization of Tulip's global footprint with dynamic markers for Experience Centers, customer sites, and real-time activity",
        tech: ["Three.js", "WebGL", "Custom Shaders"]
      },
      {
        title: "F1-Inspired Dashboard",
        description: "High-tech, structured data visualization with real-time metrics, performance graphs, and predictive AI insights",
        tech: ["React", "D3.js", "Real-time WebSockets"]
      },
      {
        title: "Cinematic Storytelling",
        description: "Automated transitions between key insights with layered UI animations and smart-focus transitions",
        tech: ["Framer Motion", "Custom Animation Engine"]
      },
      {
        title: "Self-Healing Infrastructure", 
        description: "Robust data pipeline with automated failover systems and pre-rendered fallback views",
        tech: ["Node.js", "Express", "AWS Redshift", "Health Monitoring"]
      }
    ],

    techStack: {
      frontend: ["React", "Three.js", "D3.js", "Framer Motion", "WebGL", "Custom Shaders"],
      backend: ["Node.js", "Express", "AWS Redshift", "WebSocket APIs", "Health Monitoring"],
      infrastructure: ["Kubernetes", "Helm", "Argo CD", "GitHub Actions", "AWS ECR", "Docker"],
      security: ["Vault Secrets Management", "TLS/cert-manager", "CloudWatch Logging"],
      design: ["Figma", "3D Modeling", "Motion Graphics", "UI/UX Design"]
    },

    designProcess: [
      {
        phase: "Research & Inspiration",
        description: "Analyzed F1 Mission Control dashboards, OneWorldOneDollar's 3D globe, and Updata One's cinematic storytelling approaches",
        deliverables: ["Competitive Analysis", "Design References", "Technical Feasibility Study"]
      },
      {
        phase: "Conceptual Design",
        description: "Created high-fidelity mockups and motion concept prototypes in Figma with mentorship from Tulip's in-house design team",
        deliverables: ["Interactive Prototypes", "Motion Studies", "User Flow Diagrams"]
      },
      {
        phase: "Technical Architecture", 
        description: "Designed scalable full-stack architecture with emphasis on reliability and performance for live demonstrations",
        deliverables: ["System Architecture", "API Design", "Infrastructure Planning"]
      },
      {
        phase: "Development & Iteration",
        description: "Implemented features iteratively with continuous feedback from TEC team and stakeholder testing",
        deliverables: ["MVP Development", "Feature Iterations", "Performance Optimization"]
      }
    ],

    achievements: [
      "Sole developer responsible for end-to-end product development",
      "Successfully deployed to production environment in Tulip's flagship Experience Center",
      "Implemented modern DevOps practices with Kubernetes, Helm, and Argo CD",
      "Created self-healing data pipeline eliminating manual system restarts",
      "Collaborated with cross-functional teams including designers and TEC specialists",
      "Leveraged AI development tools and modern development practices for enhanced productivity"
    ],

      media: {
        demo: getImagePath('/projects/mission-control/demo-video.mp4'),
        designs: [
          getImagePath('/projects/mission-control/design-1.png'),
          getImagePath('/projects/mission-control/design-2.png'), 
          getImagePath('/projects/mission-control/design-3.png')
        ]
      }
  };

  const ProjectMeta = ({ project, layout = "grid" }) => {
    const metaItems = [
      { label: "Status", value: project.status, color: "text-green-400" },
      { label: "Company", value: project.company, color: "text-vw-cyan" },
      { label: "Role", value: project.role, color: "text-vw-pink" },
      { label: "Timeline", value: project.timeframe, color: "text-vw-purple" },
      { label: "Location", value: project.location, color: "text-yellow-400" }
    ];

    return (
      <div className={layout === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-4"}>
        {metaItems.map((item, index) => (
          <div key={index} className="bg-gray-800/50 border border-gray-600 p-3">
            <h4 className="text-vw-pink font-mono mb-1 text-xs uppercase tracking-wider">{item.label}</h4>
            <div className={`font-mono text-sm ${item.color}`}>{item.value}</div>
          </div>
        ))}
      </div>
    );
  };

  const sections = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'features', label: 'Key Features', icon: '⚡' },
    { id: 'tech', label: 'Technology', icon: '🔧' },
    { id: 'process', label: 'Design Process', icon: '🎨' },
    { id: 'impact', label: 'Impact', icon: '🚀' },
    { id: 'media', label: 'Media', icon: '🎥' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <motion.button
            onClick={onBack}
            className="px-4 py-2 bg-gray-800 border border-gray-600 text-vw-cyan font-mono text-sm hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Projects
          </motion.button>
        </div>

        <RetroWindow title={`${project.title} — Project Details`}>
          <div className="p-6 space-y-8">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Project Overview */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <h1 className="text-4xl font-bold text-vw-cyan font-mono">{project.title}</h1>
                    <div className="px-3 py-1 bg-green-400/20 border border-green-400 text-green-400 text-xs font-mono rounded">
                      {project.status}
                    </div>
                  </div>
                  <h2 className="text-xl text-vw-pink font-mono">{project.subtitle}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                    <span>{project.company}</span>
                    <span>•</span>
                    <span>{project.timeframe}</span>
                    <span>•</span>
                    <span>{project.role}</span>
                  </div>
                </div>

                <p className="text-black text-lg leading-relaxed">
                  {project.overview}
                </p>

                {/* Quick Navigation */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`px-3 py-1 rounded font-mono text-xs transition-colors ${
                        activeSection === section.id 
                          ? 'bg-vw-pink text-black' 
                          : 'bg-gray-800 text-gray-300 hover:text-vw-cyan'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {section.icon} {section.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Project Meta */}
              <div className="lg:col-span-1">
                <div className="bg-gray-800/50 border border-gray-600 p-4 space-y-4">
                  <ProjectMeta project={project} layout="sidebar" />
                </div>
              </div>
            </div>

            {/* Dynamic Content Sections */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeSection === 'overview' && (
                  <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-vw-cyan font-mono">Project Overview</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg text-vw-pink font-mono">The Challenge</h3>
                        <p className="text-black leading-relaxed">{project.challenge}</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg text-vw-pink font-mono">The Solution</h3>
                        <p className="text-black leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-vw-purple/20 to-vw-pink/20 border border-vw-pink/50 p-6 rounded">
                      <h3 className="text-lg text-vw-pink font-mono mb-4">Key Achievements</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-vw-cyan mt-1 flex-shrink-0">▶</span>
                            <span className="text-black text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {activeSection === 'features' && (
                  <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-vw-cyan font-mono">Key Features</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.keyFeatures.map((feature, index) => (
                        <div key={index} className="bg-gray-800/30 border border-gray-600 p-6 rounded">
                          <h3 className="text-lg text-vw-pink font-mono mb-3">{feature.title}</h3>
                          <p className="text-black mb-4 leading-relaxed">{feature.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {feature.tech.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-2 py-1 bg-vw-purple/20 border border-vw-purple text-vw-purple text-xs rounded font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {activeSection === 'tech' && (
                  <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-vw-cyan font-mono">Technology Stack</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Object.entries(project.techStack).map(([category, technologies]) => (
                        <div key={category} className="bg-gray-800/30 border border-gray-600 p-4 rounded">
                          <h3 className="text-vw-pink font-mono mb-3 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
                          <div className="space-y-2">
                            {technologies.map((tech, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-vw-cyan rounded-full"></span>
                                <span className="text-white text-sm font-mono">{tech}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-vw-cyan/20 to-vw-purple/20 border border-vw-cyan/50 p-6 rounded">
                      <h3 className="text-lg text-vw-cyan font-mono mb-3">Development Approach</h3>
                      <p className="text-black leading-relaxed mb-4">
                        Leveraged modern AI-assisted development tools and practices to enhance productivity and code quality. 
                        This included using advanced code completion, automated testing, and intelligent refactoring tools to 
                        accelerate development while maintaining high standards.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-vw-cyan/20 border border-vw-cyan text-vw-cyan text-sm rounded font-mono">AI-Assisted Development</span>
                        <span className="px-3 py-1 bg-vw-cyan/20 border border-vw-cyan text-vw-cyan text-sm rounded font-mono">Modern DevOps</span>
                        <span className="px-3 py-1 bg-vw-cyan/20 border border-vw-cyan text-vw-cyan text-sm rounded font-mono">Agile Methodology</span>
                      </div>
                    </div>
                  </section>
                )}

                {activeSection === 'process' && (
                  <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-vw-cyan font-mono">Design & Development Process</h2>
                    
                    <div className="space-y-6">
                      {project.designProcess.map((phase, index) => (
                        <div key={index} className="relative">
                          <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-vw-pink rounded-full flex items-center justify-center font-mono font-bold text-black">
                                {index + 1}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg text-vw-pink font-mono mb-2">{phase.phase}</h3>
                              <p className="text-black leading-relaxed mb-3">{phase.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {phase.deliverables.map((deliverable, delIndex) => (
                                  <span 
                                    key={delIndex}
                                    className="px-2 py-1 bg-gray-700 border border-gray-500 text-gray-300 text-xs rounded font-mono"
                                  >
                                    {deliverable}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          {index < project.designProcess.length - 1 && (
                            <div className="absolute left-5 top-12 w-px h-8 bg-vw-pink/30"></div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-vw-pink/20 to-vw-purple/20 border border-vw-pink/50 p-6 rounded">
                      <h3 className="text-lg text-vw-pink font-mono mb-3">Mentorship & Collaboration</h3>
                      <p className="text-black leading-relaxed">
                        Throughout the project, I received valuable mentorship from Tulip's experienced TEC team and in-house designers. 
                        This collaborative approach enhanced both the technical implementation and user experience design, 
                        ensuring the final product met the high standards expected for Tulip's flagship Experience Center.
                      </p>
                    </div>
                  </section>
                )}

                {activeSection === 'impact' && (
                  <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-vw-cyan font-mono">Project Impact</h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-green-400/10 border border-green-400/30 p-6 rounded text-center">
                        <div className="text-3xl font-bold text-green-400 font-mono mb-2">100%</div>
                        <div className="text-sm text-gray-300 font-mono">Uptime Achievement</div>
                        <div className="text-xs text-gray-400 mt-1">Self-healing infrastructure</div>
                      </div>
                      <div className="bg-vw-cyan/10 border border-vw-cyan/30 p-6 rounded text-center">
                        <div className="text-3xl font-bold text-vw-cyan font-mono mb-2">3D</div>
                        <div className="text-sm text-gray-300 font-mono">Interactive Globe</div>
                        <div className="text-xs text-gray-400 mt-1">Global data visualization</div>
                      </div>
                      <div className="bg-vw-pink/10 border border-vw-pink/30 p-6 rounded text-center">
                        <div className="text-3xl font-bold text-vw-pink font-mono mb-2">Live</div>
                        <div className="text-sm text-gray-300 font-mono">Production Deploy</div>
                        <div className="text-xs text-gray-400 mt-1">Tulip Experience Center</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg text-vw-pink font-mono">Business Impact</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.impact.map((impact, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-vw-cyan mt-1 flex-shrink-0">▶</span>
                            <span className="text-black text-sm">{impact}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {activeSection === 'media' && (
                  <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-vw-cyan font-mono">Project Media</h2>
                    
                      <div className="bg-gray-800/30 border border-gray-600 p-6 rounded">
                        <h3 className="text-lg text-vw-pink font-mono mb-4">Development Demo</h3>
                        <div className="aspect-video bg-gray-900 border border-gray-700 rounded overflow-hidden">
                          <video 
                            className="w-full h-full object-cover" 
                            controls
                            poster={getImagePath('/projects/mission-control/design-1.png')}
                          >
                            <source src={project.media.demo} type="video/mp4" />
                            <div className="flex items-center justify-center h-full">
                              <div className="text-center">
                                <div className="text-4xl mb-2">🎥</div>
                                <div className="text-vw-cyan font-mono text-sm">Video not supported</div>
                              </div>
                            </div>
                          </video>
                        </div>
                        <p className="text-gray-400 text-sm mt-2">
                          Interactive demonstration showcasing the 3D globe interface, real-time data visualization, and F1-inspired dashboard design
                        </p>
                      </div>

                    <div className="space-y-4">
                      <h3 className="text-lg text-vw-pink font-mono">Design & Development Process</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {project.media.designs.map((design, index) => (
                          <motion.div 
                            key={index} 
                            className="group cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="aspect-video bg-gray-900 border border-gray-700 rounded overflow-hidden relative">
                              <img 
                                src={design} 
                                alt={`Mission Control Design Process ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                              <div className="hidden absolute inset-0 items-center justify-center bg-gray-900">
                                <div className="text-center">
                                  <div className="text-2xl mb-2">🎨</div>
                                  <div className="text-vw-pink font-mono text-xs">Design Process {index + 1}</div>
                                  <div className="text-gray-400 text-xs mt-1">Figma prototypes</div>
                                </div>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                  <div className="text-white text-sm font-medium">Design Process {index + 1}</div>
                                  <div className="text-gray-300 text-xs mt-1">Figma prototypes and interface mockups</div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-vw-purple/20 to-vw-cyan/20 border border-vw-purple/50 p-6 rounded">
                      <h3 className="text-lg text-vw-purple font-mono mb-3">Note on Confidentiality</h3>
                      <p className="text-white text-sm leading-relaxed">
                        Due to the proprietary nature of this project and Tulip's confidentiality requirements, 
                        detailed code samples and production screenshots cannot be shared publicly. The demo video 
                        and design mockups shown represent development work and conceptual designs created during the project.
                        All numbers and data visualizations depicted are from development mockups and early development builds - 
                        accurate production data visualizations are confidential and cannot be shown. The images presented 
                        do not and cannot show the final product implementation.
                      </p>
                    </div>
                  </section>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </RetroWindow>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 bg-vw-pink text-black rounded-full shadow-lg hover:bg-vw-pink/80 transition-colors font-mono text-sm z-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ↑ TOP
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MissionControl;
