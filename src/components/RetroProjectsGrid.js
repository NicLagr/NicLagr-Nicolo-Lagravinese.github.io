import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RetroWindow from './RetroWindow';

const RetroProjectsGrid = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Mission Control 3.0',
      category: 'web',
      icon: '🎛️',
      year: '2025',
      company: 'Tulip Interfaces',
      tech: ['React SPA', 'Node.js/Express', 'Redshift', 'Kubernetes', 'Helm', 'Argo CD'],
      description: 'Production monitoring platform with 3D-style visualization and analytics. Deployed to Garden 11 via Helm/Argo CD with GitHub Actions to AWS ECR; Vault secrets + TLS (cert-manager). Dashboards for WAU, editor minutes, event activity, and machine engagement.',
      status: 'ACTIVE',
      image: '/api/placeholder/400/300',
      color: 'from-vw-pink to-vw-purple'
    },
    {
      id: 2,
      title: 'TEC Demo Engineering',
      category: 'hardware',
      icon: '🏭',
      year: '2025',
      company: 'Tulip Interfaces',
      tech: ['Hardware', 'Node-RED', 'MQTT', 'OPC-UA', 'Cognex'],
      description: 'Built live demos: conveyors, pick-to-lights, Andon lights, Cognex vision systems. Integrated industrial hardware via Node-RED and Tulip connectors; trained LandingAI models for OCR/defect detection. Developed reusable KPI widgets and demo UX components with docs.',
      status: 'ACTIVE',
      image: '/api/placeholder/400/300',
      color: 'from-vw-cyan to-vw-pink'
    },
    {
      id: 3,
      title: 'Jewelry Management Platform',
      category: 'ecommerce',
      icon: '💎',
      year: '2025',
      company: 'Independent Project',
      tech: ['React', 'Node.js/Express', 'SQL', 'REST APIs'],
      description: 'CRM with repair workflow tracking, automated SMS/email notifications, QR/barcode receipts. Modular service design with clean UI for store operators.',
      status: 'ACTIVE',
      image: '/api/placeholder/400/300',
      color: 'from-vw-purple to-vw-cyan'
    },
    {
      id: 4,
      title: 'Nurture Nest',
      category: 'health',
      icon: '🏥',
      year: '2025',
      company: 'Social Impact Project',
      tech: ['Figma', 'Frontend', 'Health UX'],
      description: 'Maternal health app with UX and frontend for health information and monitoring. Focused on accessibility for communities in Ghana.',
      status: 'DEV',
      image: '/api/placeholder/400/300',
      color: 'from-vw-pink to-vw-cyan'
    },
    {
      id: 5,
      title: 'Game Development Portfolio',
      category: 'game',
      icon: '🎮',
      year: '2024',
      company: 'Personal Projects',
      tech: ['Unity 3D', 'Java', 'C#'],
      description: 'Multiple game projects including "Whispers of the Abyss" (dungeon-horror), "Hellfire at High Noon" (FPS), and Java recreations of NYT Spelling Bee and Red7.',
      status: 'LIVE',
      image: '/api/placeholder/400/300',
      color: 'from-vw-cyan to-vw-purple'
    },
    {
      id: 6,
      title: 'Portfolio Webpage',
      category: 'web',
      icon: '💾',
      year: '2025',
      company: 'Personal Projects',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', '98.css', 'Steam API'],
      description: 'Interactive retro portfolio with Windows 98 desktop OS interface, live Steam integration, CRT effects, and vaporwave aesthetics. Features boot sequence, draggable windows, and terminal-style navigation.',
      status: 'LIVE',
      image: '/api/placeholder/400/300',
      color: 'from-vw-pink to-vw-cyan'
    }
  ];

  const categories = [
    { id: 'all', label: 'ALL_PROJECTS.exe', icon: '📁' },
    { id: 'web', label: 'WEB_APPS.dir', icon: '🌐' },
    { id: 'hardware', label: 'HARDWARE.dir', icon: '🔧' },
    { id: 'ecommerce', label: 'BUSINESS.dir', icon: '💼' },
    { id: 'health', label: 'HEALTH.dir', icon: '🏥' },
    { id: 'game', label: 'GAMES.dir', icon: '🎮' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-900/30';
      case 'LIVE': return 'text-blue-400 bg-blue-900/30';
      case 'BETA': return 'text-yellow-400 bg-yellow-900/30';
      case 'DEV': return 'text-purple-400 bg-purple-900/30';
      case 'ARCHIVED': return 'text-gray-400 bg-gray-900/30';
      default: return 'text-gray-400 bg-gray-900/30';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          {onBack && (
            <motion.button
              className="px-4 py-2 bg-gray-800 border border-gray-600 text-vw-cyan font-mono text-sm hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
            >
              ← BACK.exe
            </motion.button>
          )}
          <motion.h1 
            className="text-4xl font-bold font-mono aberration"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            PROJECT_ARCHIVE.EXE
          </motion.h1>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 font-mono text-sm border-2 transition-all ${
                filter === category.id
                  ? 'border-vw-pink bg-vw-pink/20 text-vw-pink'
                  : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-vw-cyan hover:text-vw-cyan'
              }`}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon} {category.label}
            </motion.button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-gray-900 border border-gray-700 p-3 rounded font-mono text-sm">
          <div className="flex justify-between items-center">
            <span className="text-vw-cyan">
              LOADED: {filteredProjects.length} PROJECT(S)
            </span>
            <span className="text-vw-pink">
              MEMORY: {Math.round(Math.random() * 100)}% UTILIZED
            </span>
            <span className="text-green-400">
              STATUS: OPERATIONAL
            </span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border-2 border-gray-700 rounded-lg overflow-hidden cursor-pointer hover:border-vw-pink transition-colors"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-4 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-2">{project.icon}</div>
                  <div className="font-bold text-white">{project.title}</div>
                  <div className="text-sm opacity-90">{project.year}</div>
                </div>
                
                {/* Halftone Pattern Overlay */}
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:8px_8px]"></div>
              </div>

              {/* Project Body */}
              <div className="p-4">
                <div className={`inline-block px-2 py-1 rounded text-xs font-mono mb-3 ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-vw-purple/20 border border-vw-purple/50 text-vw-purple text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                  <span>CLICK TO EXPAND</span>
                  <span>SIZE: {Math.floor(Math.random() * 999)}KB</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="w-full max-w-4xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <RetroWindow
                title={`${selectedProject.title} - Project Details`}
                onClose={() => setSelectedProject(null)}
                showStatusBar={true}
              >
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Project Image */}
                    <div className={`bg-gradient-to-br ${selectedProject.color} rounded-lg p-8 text-center relative overflow-hidden`}>
                      <div className="text-8xl mb-4">{selectedProject.icon}</div>
                      <div className="text-white font-bold text-xl">{selectedProject.title}</div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:12px_12px] opacity-20"></div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-vw-pink">PROJECT SPECIFICATIONS</h3>
                      
                      <div className="space-y-3 font-mono text-sm">
                        <div>
                          <span className="text-vw-cyan">STATUS:</span> 
                          <span className={`ml-2 px-2 py-1 rounded ${getStatusColor(selectedProject.status)}`}>
                            {selectedProject.status}
                          </span>
                        </div>
                        
                        <div>
                          <span className="text-vw-cyan">YEAR:</span> 
                          <span className="ml-2">{selectedProject.year}</span>
                        </div>
                        
                        {selectedProject.company && (
                          <div>
                            <span className="text-vw-cyan">COMPANY:</span> 
                            <span className="ml-2">{selectedProject.company}</span>
                          </div>
                        )}
                        
                        <div>
                          <span className="text-vw-cyan">CATEGORY:</span> 
                          <span className="ml-2 uppercase">{selectedProject.category}</span>
                        </div>
                        
                        <div>
                          <span className="text-vw-cyan">TECH STACK:</span>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {selectedProject.tech.map((tech, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 bg-vw-purple/20 border border-vw-purple text-vw-purple rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-vw-pink font-bold mb-2">DESCRIPTION</h4>
                        <p className="text-gray-300 leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="mt-6 flex gap-3">
                        <motion.button
                          className="px-4 py-2 bg-vw-pink text-white font-bold rounded hover:bg-vw-pink/80 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          VIEW LIVE
                        </motion.button>
                        <motion.button
                          className="px-4 py-2 border-2 border-vw-cyan text-vw-cyan font-bold rounded hover:bg-vw-cyan hover:text-black transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          SOURCE CODE
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </RetroWindow>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RetroProjectsGrid;
