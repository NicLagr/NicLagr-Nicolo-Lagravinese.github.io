import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Chip from './Chip';

const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState('languages');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const skillCategories = {
    languages: {
      title: 'Languages',
      icon: '/assets/icons/Windows XP Icons/Code.png',
      skills: [
        'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'SQL', 'HTML/CSS', 'GLSL'
      ]
    },
    frameworks: {
      title: 'Frameworks',
      icon: '/assets/icons/Windows XP Icons/Web.png',
      skills: [
        'React', 'Node.js', 'Express', 'Unity', 'Three.js', 'React Three Fiber', 
        'Framer Motion', 'Tailwind CSS', 'Bootstrap', 'Next.js'
      ]
    },
    devops: {
      title: 'DevOps/Cloud',
      icon: '/assets/icons/Windows XP Icons/Network.png',
      skills: [
        'Docker', 'Kubernetes', 'Helm', 'Argo CD', 'GitHub Actions', 'AWS', 'ECR', 
        'Vault', 'cert-manager', 'TLS', 'CI/CD'
      ]
    },
    data: {
      title: 'Data/Platforms',
      icon: '/assets/icons/Windows XP Icons/Database.png',
      skills: [
        'AWS Redshift', 'Snowflake', 'PostgreSQL', 'MongoDB', 'Redis', 
        'Elasticsearch', 'GraphQL', 'REST APIs', 'WebSockets'
      ]
    },
    industrial: {
      title: 'Industrial/IoT',
      icon: '/assets/icons/Windows XP Icons/Hardware.png',
      skills: [
        'Node-RED', 'MQTT', 'OPC-UA', 'Modbus', 'Cognex Vision', 'LandingAI', 
        'Ignition SCADA', 'PLC Integration', 'Arduino', 'Raspberry Pi'
      ]
    },
    design: {
      title: 'Design & UX',
      icon: '/assets/icons/Windows XP Icons/Accessibility.png',
      skills: [
        'Figma', 'Adobe Creative Suite', 'Blender', '3D Modeling', 
        'UI/UX Design', 'Prototyping', 'User Research', 'Accessibility (WCAG)'
      ]
    }
  };

  const tabs = Object.keys(skillCategories);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-cyan-400 font-mono">Skills</h3>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-400 hover:text-cyan-400 transition-colors"
          aria-label={isCollapsed ? 'Expand skills' : 'Collapse skills'}
        >
          {isCollapsed ? '▶' : '▼'}
        </button>
      </div>

      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            className="bg-black/20 border border-cyan-500/30 rounded-lg overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Tab Headers */}
            <div className="flex flex-wrap border-b border-gray-700 bg-gray-800/50">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200
                    border-b-2 hover:bg-gray-700/50
                    ${activeTab === tab 
                      ? 'text-cyan-400 border-cyan-400 bg-gray-700/30' 
                      : 'text-gray-400 border-transparent hover:text-gray-200'
                    }
                  `}
                >
                  <img 
                    src={skillCategories[tab].icon} 
                    alt="" 
                    className="w-4 h-4"
                  />
                  <span className="hidden sm:inline">
                    {skillCategories[tab].title}
                  </span>
                  <span className="sm:hidden">
                    {skillCategories[tab].title.split('/')[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={skillCategories[activeTab].icon} 
                      alt="" 
                      className="w-6 h-6"
                    />
                    <h4 className="text-lg font-bold text-white">
                      {skillCategories[activeTab].title}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillCategories[activeTab].skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Chip variant="default">
                          {skill}
                        </Chip>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillTabs;
