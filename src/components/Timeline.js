import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      period: 'Sep 2024 - Present',
      title: 'Product Support Engineer (Part-Time)',
      company: 'Tulip Interfaces',
      location: 'Boston, MA',
      description: 'Customer support, demo engineering, and technical troubleshooting for manufacturing platform.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      period: 'Jan 2024 - Aug 2024',
      title: 'Software Engineer Co-op',
      company: 'Tulip Interfaces',
      location: 'Boston, MA',
      description: 'Full-stack development, 3D visualization, and cloud infrastructure (K8s, Helm, Argo CD).',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      period: 'Sep 2022 - Present',
      title: 'Computer Science + Interaction Design',
      company: 'Northeastern University',
      location: 'Boston, MA',
      description: 'Combined major focusing on human-computer interaction, software engineering, and design thinking.',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      period: 'Jun 2023 - Dec 2023',
      title: 'Software Developer Co-op',
      company: 'Jewelry Television',
      location: 'Knoxville, TN',
      description: 'React/Node.js development for CRM platform with repair workflow and automated notifications.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-cyan-400 font-mono">Timeline</h3>
        <div className="flex items-center gap-4">
          <a
            href="/NICOLO_LAGRAVINESE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm px-3 py-1 rounded font-medium hover:from-pink-600 hover:to-purple-700 transition-all"
          >
            Download Resume
          </a>
          <a
            href="https://linkedin.com/in/nicolo-lagravinese"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <img 
              src="/assets/icons/Windows XP Icons/Network.png" 
              alt="LinkedIn" 
              className="w-5 h-5"
              title="LinkedIn Profile"
            />
          </a>
        </div>
      </div>

      <div className="bg-black/20 border border-cyan-500/30 rounded-lg p-6">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400"></div>
          
          <div className="space-y-6">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className={`
                  relative z-10 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} 
                  shadow-lg flex-shrink-0 mt-1
                `}>
                  <div className="absolute inset-0 rounded-full bg-white/20"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                      <span className="text-cyan-400 text-sm font-mono bg-cyan-400/10 px-2 py-1 rounded">
                        {item.period}
                      </span>
                    </div>
                    
                    {/* Company and location */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-pink-400 font-medium">{item.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-sm">{item.location}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
