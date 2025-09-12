import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RetroWindow from './RetroWindow';
import Win98ErrorDialog from './Win98ErrorDialog';
import { getImagePath } from '../utils/imagePath';

// Import XP icons
import controlPanelIcon from '../assets/xp-icons/control-panel.png';
import factoryIcon from '../assets/xp-icons/factory.png';
import diamondIcon from '../assets/xp-icons/diamond.png';
import hospitalIcon from '../assets/xp-icons/hospital.png';
import gamepadIcon from '../assets/xp-icons/gamepad.png';
import floppyIcon from '../assets/xp-icons/floppy.png';
import folderIcon from '../assets/xp-icons/folder.png';
import globeIcon from '../assets/xp-icons/globe.png';
import toolsIcon from '../assets/xp-icons/tools.png';
import briefcaseIcon from '../assets/xp-icons/briefcase.png';

const RetroProjectsGrid = ({ onBack, onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Mission Control 3.0',
      category: 'web',
      icon: controlPanelIcon,
      year: '2025',
      company: 'Tulip Interfaces',
      tech: ['React', 'Node.js', 'Express', 'AWS Redshift', 'Kubernetes', 'Helm', 'Argo CD', 'Docker'],
      description: 'Production monitoring platform with 3D-style visualization and analytics. Deployed to Garden 11 via Helm/Argo CD with GitHub Actions to AWS ECR; Vault secrets + TLS (cert-manager). Dashboards for WAU, editor minutes, event activity, and machine engagement.',
      status: 'ARCHIVED',
      image: '/api/placeholder/400/300',
      color: 'from-vw-pink to-vw-purple'
    },
    {
      id: 2,
      title: 'TEC Demo Engineering',
      category: 'hardware',
      icon: factoryIcon,
      year: '2025',
      company: 'Tulip Interfaces',
      tech: ['Industrial IoT', 'Node-RED', 'MQTT', 'OPC-UA', 'Cognex Vision', 'LandingAI'],
      description: 'Built live demos: conveyors, pick-to-lights, Andon lights, Cognex vision systems. Integrated industrial hardware via Node-RED and Tulip connectors; trained LandingAI models for OCR/defect detection. Developed reusable KPI widgets and demo UX components with docs.',
      status: 'ARCHIVED',
      image: '/api/placeholder/400/300',
      color: 'from-vw-cyan to-vw-pink'
    },
    {
      id: 3,
      title: 'Jewelry Management Platform',
      category: 'ecommerce',
      icon: diamondIcon,
      year: '2025',
      company: 'Independent Project',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'SMS/Email APIs'],
      description: 'CRM with repair workflow tracking, automated SMS/email notifications, QR/barcode receipts. Modular service design with clean UI for store operators.',
      status: 'ACTIVE',
      image: '/api/placeholder/400/300',
      color: 'from-vw-purple to-vw-cyan'
    },
    {
      id: 4,
      title: 'Nurture Nest',
      category: 'health',
      icon: hospitalIcon,
      year: '2025',
      company: 'Social Impact Project',
      tech: ['React', 'Figma', 'UX Design', 'Healthcare', 'Accessibility'],
      description: 'Maternal health app with UX and frontend for health information and monitoring. Focused on accessibility for communities in Ghana.',
      status: 'DEV',
      image: getImagePath('/projects/nurture-nest/hero.jpg'),
      color: 'from-vw-pink to-vw-cyan'
    },
    {
      id: 5,
      title: 'Game Development Portfolio',
      category: 'game',
      icon: gamepadIcon,
      year: '2024',
      company: 'Personal Projects',
      tech: ['Unity 3D', 'C#', 'Java', 'Game Design', 'Algorithm Recreation'],
      description: 'Multiple game projects including "Whispers of the Abyss" (dungeon-horror), "Hellfire at High Noon" (FPS), and Java recreations of NYT Spelling Bee and Red7.',
      status: 'LIVE',
      image: getImagePath('/games/wota/hero.png'),
      color: 'from-vw-cyan to-vw-purple'
    },
    {
      id: 6,
      title: 'Portfolio Webpage',
      category: 'web',
      icon: floppyIcon,
      year: '2025',
      company: 'Personal Projects',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', '98.css', 'Steam API', 'Retro UI'],
      description: 'Interactive retro portfolio with Windows 98 desktop OS interface, live Steam integration, CRT effects, and vaporwave aesthetics. Features boot sequence, draggable windows, and terminal-style navigation.',
      status: 'LIVE',
      image: '/api/placeholder/400/300',
      color: 'from-vw-pink to-vw-cyan'
    }
  ];

  const categories = [
    { id: 'all', label: 'ALL_PROJECTS.exe', icon: folderIcon },
    { id: 'web', label: 'WEB_APPS.dir', icon: globeIcon },
    { id: 'hardware', label: 'HARDWARE.dir', icon: toolsIcon },
    { id: 'ecommerce', label: 'BUSINESS.dir', icon: briefcaseIcon },
    { id: 'health', label: 'HEALTH.dir', icon: hospitalIcon },
    { id: 'game', label: 'GAMES.dir', icon: gamepadIcon }
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
      <div className="mb-8 pt-8 md:pt-0">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 pr-20 md:pr-0">
          {onBack && (
            <motion.button
              className="px-4 py-2 bg-gray-800 border border-gray-600 text-vw-cyan font-mono text-sm hover:bg-gray-700 transition-colors self-start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
            >
              ← BACK.exe
            </motion.button>
          )}
          <motion.h1 
            className="text-xl md:text-4xl font-bold font-mono aberration break-words"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <span className="md:hidden">PROJECTS</span>
            <span className="hidden md:inline">PROJECT_ARCHIVE.EXE</span>
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
              <img src={category.icon} alt={category.label} className="w-4 h-4 inline mr-1" /> {category.label}
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
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10">
                  <div className="mb-2 flex justify-center">
                    <img src={project.icon} alt={project.title} className="w-12 h-12" />
                  </div>
                  <div className="font-bold text-white text-shadow-sm">{project.title}</div>
                  <div className="text-sm text-white font-medium">{project.year}</div>
                  {project.company && (
                    <div className="text-xs text-white/90 font-medium mt-1">{project.company}</div>
                  )}
                </div>
                
                {/* Halftone Pattern Overlay */}
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:8px_8px]"></div>
              </div>

                {/* Project Body */}
                <div className="p-4 bg-gray-900/80 backdrop-blur-sm">
                  <div className={`inline-block px-2 py-1 rounded text-xs font-mono mb-3 ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                  
                  <p className="text-gray-50 text-sm mb-4 leading-relaxed font-medium">
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

                <div className="flex justify-between items-center text-xs text-gray-300 font-mono">
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
                      <div className="mb-4 flex justify-center">
                        <img src={selectedProject.icon} alt={selectedProject.title} className="w-20 h-20" />
                      </div>
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
                          <span className="ml-2 text-black">{selectedProject.year}</span>
                        </div>
                        
                        {selectedProject.company && (
                          <div>
                            <span className="text-vw-cyan">COMPANY:</span> 
                            <span className="ml-2 text-black">{selectedProject.company}</span>
                          </div>
                        )}
                        
                        <div>
                          <span className="text-vw-cyan">CATEGORY:</span> 
                          <span className="ml-2 uppercase text-black">{selectedProject.category}</span>
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
                        <p className="text-black leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="mt-6 flex gap-3 relative">
                        <motion.button
                          className="px-4 py-2 bg-vw-pink text-white font-bold rounded hover:bg-vw-pink/80 transition-colors relative"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            if (selectedProject.id === 1 && onNavigate) {
                              // Mission Control 3.0 - navigate to mission control view
                              onNavigate('missionControl');
                              setSelectedProject(null);
                            } else if (selectedProject.id === 2 && onNavigate) {
                              // TEC Demo Engineering - navigate to TEC demo engineering view
                              onNavigate('tecDemoEngineering');
                              setSelectedProject(null);
                            } else if (selectedProject.id === 5 && onNavigate) {
                              // Game Development Portfolio - navigate to games view
                              onNavigate('games');
                              setSelectedProject(null);
                            } else if (selectedProject.id === 4 && onNavigate) {
                              // Nurture Nest - navigate to nurture nest view
                              onNavigate('nurtureNest');
                              setSelectedProject(null);
                            } else if (selectedProject.id === 6 && onNavigate) {
                              // Portfolio Webpage - navigate to portfolio webpage view
                              onNavigate('portfolioWebpage');
                              setSelectedProject(null);
                            } else if (selectedProject.id === 3) {
                              // Jewelry Management Platform - show error dialog
                              setShowErrorDialog(true);
                            } else {
                              // Other projects - placeholder for now
                              console.log('View Live clicked for:', selectedProject.title);
                            }
                          }}
                        >
                          VIEW LIVE
                        </motion.button>
                        
                          {/* Animated Pointer Arrow */}
                          <motion.div
                            className="absolute -left-4 text-vw-cyan text-xl pointer-events-none"
                            style={{ top: 'calc(50% - 20px)' }}
                          animate={{
                            x: [0, -8, 0],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          ➤
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </RetroWindow>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Win98 Error Dialog */}
      <Win98ErrorDialog
        isOpen={showErrorDialog}
        onClose={() => setShowErrorDialog(false)}
        title="Jewelry Management Platform"
        message="This project is currently in production and will be available for showcase soon. Please check back later for the live demo."
        icon="construction"
      />
    </div>
  );
};

export default RetroProjectsGrid;
