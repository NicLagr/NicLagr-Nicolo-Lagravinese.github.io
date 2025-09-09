import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RetroWindow from '../../components/RetroWindow';
import MediaGallery from '../../components/MediaGallery';

// Import XP icons
import playIcon from '../../assets/xp-icons/play.png';
import documentIcon from '../../assets/xp-icons/document-code.png';
import globeIcon from '../../assets/xp-icons/globe.png';

const NurtureNest = ({ onBack }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const project = {
    title: 'Nurture Nest — Maternal Health App',
    status: 'IN DEVELOPMENT',
    year: '2025',
    roles: ['UX Design', 'Frontend Development', 'Research', 'User Testing'],
    stack: ['React', 'Figma', 'Healthcare APIs', 'Local Storage', 'Push Notifications'],
    genres: ['Healthcare', 'Mobile App', 'Social Impact', 'Accessibility'],
    summary: 'A comprehensive maternal mental health support app designed for communities in Ghana, featuring wellness tracking, screening tools, and local resource connections.',
    description: [
      'Nurture Nest addresses the critical need for accessible maternal mental health support in Ghana.',
      'The app provides daily wellness tracking, mental health screening tools, and connections to local healthcare providers.',
      'Currently in development with plans for App Store release in 2025.'
    ],
    features: [
      'Daily wellness and mood tracking with calendar history',
      'Mental health screening tools (PHQ-9, EPDS, GAD-7)',
      'Emergency contacts and local resource directory',
      'Push notifications for self-care reminders',
      'Multilingual support including Twi translations',
      'Offline functionality with local data storage'
    ],
    sections: {
      pages: [
        'Home Page with user profile and wellness tracker',
        'Contacts page with local healthcare providers',
        'FAQ section with common maternal health questions',
        'Screening tools for mental health assessment',
        'Resource library with pre-loaded educational content'
      ],
      tracking: [
        'Daily mood scale (1-5 rating)',
        'Anxiety and mental health symptoms tracking',
        'Overall wellness assessment',
        'Calendar view of historical entries',
        'Progress visualization and trends'
      ],
      resources: [
        'Dwenase Health Centre contact integration',
        'Emergency hotlines and local mental health units',
        'Korle-bu and Accra Regional hospital connections',
        'MindIT Ghana free dial service (844555#)',
        'Nutritional advice for pregnancy stages'
      ]
    },
    links: {
      figma: 'https://www.figma.com/design/Wmpak0IXc9ifhoikoxJT3F/IGH-2%2F3?node-id=0-1&m=dev&t=vhEOihw0qJa52DHC-1'
    },
    media: {
      hero: '/projects/nurture-nest/hero.jpg',
      gallery: [
        '/projects/nurture-nest/research-poster.jpg'
      ]
    }
  };

  const ProjectMeta = ({ project, layout = 'sidebar' }) => {
    const getStatusColor = (status) => {
      switch (status) {
        case 'IN DEVELOPMENT': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30';
        case 'LIVE': return 'bg-green-500/20 text-green-300 border-green-400/30';
        case 'ARCHIVED': return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
        default: return 'bg-blue-500/20 text-blue-300 border-blue-400/30';
      }
    };

    const MetaChip = ({ children, className = '' }) => (
      <span className={`inline-block px-2 py-1 text-xs font-mono border rounded-sm ${className}`}>
        {children}
      </span>
    );

    return (
      <div className="space-y-4 text-sm">
        <div>
          <h4 className="text-vw-pink font-mono mb-2 text-xs uppercase tracking-wider">Status</h4>
          <MetaChip className={getStatusColor(project.status)}>
            {project.status}
          </MetaChip>
        </div>

        <div>
          <h4 className="text-vw-pink font-mono mb-2 text-xs uppercase tracking-wider">Year</h4>
          <MetaChip className="bg-purple-500/20 text-purple-300 border-purple-400/30">
            {project.year}
          </MetaChip>
        </div>

        <div>
          <h4 className="text-vw-pink font-mono mb-2 text-xs uppercase tracking-wider">Tech Stack</h4>
          <div className="flex flex-wrap gap-1">
            {project.stack.map((tech, index) => (
              <MetaChip key={index} className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                {tech}
              </MetaChip>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-vw-pink font-mono mb-2 text-xs uppercase tracking-wider">Roles</h4>
          <div className="flex flex-wrap gap-1">
            {project.roles.map((role, index) => (
              <MetaChip key={index} className="bg-orange-500/20 text-orange-300 border-orange-400/30">
                {role}
              </MetaChip>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-vw-pink font-mono mb-2 text-xs uppercase tracking-wider">Focus Areas</h4>
          <div className="flex flex-wrap gap-1">
            {project.genres.map((genre, index) => (
              <MetaChip key={index} className="bg-pink-500/20 text-pink-300 border-pink-400/30">
                {genre}
              </MetaChip>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const CTAButtons = ({ project, showBack = false }) => {
    return (
      <div className="flex flex-wrap gap-3 items-center">
        {/* Primary CTAs */}
        <div className="flex gap-2">
          <motion.div
            className="px-4 py-2 bg-gradient-to-b from-yellow-400 to-yellow-500 text-gray-900 font-mono text-sm border-2 border-yellow-600 focus:outline-none transition-all duration-150 shadow-md flex items-center"
          >
            <img src={playIcon} alt="In Development" className="w-4 h-4 inline mr-2" />
            Coming to App Store
          </motion.div>
          
          {project.links.figma && (
            <motion.a
              href={project.links.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-gray-900 font-mono text-sm border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-150 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={globeIcon} alt="Figma" className="w-4 h-4 inline mr-2" />
              View Design
            </motion.a>
          )}
        </div>

        {/* Navigation */}
        {showBack && (
          <motion.button
            onClick={onBack}
            className="px-4 py-2 bg-gradient-to-b from-gray-300 to-gray-400 hover:from-gray-200 hover:to-gray-300 text-gray-900 font-mono text-sm border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-150 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Projects
          </motion.button>
        )}
      </div>
    );
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
              {/* Hero Image */}
              <div className="lg:col-span-2 space-y-4">
                <div className="relative bg-gray-900 border-2 border-gray-700 overflow-hidden">
                  <img
                    src={project.media.hero}
                    alt={`${project.title} research poster`}
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                {/* CTAs */}
                <CTAButtons project={project} showBack />
              </div>

              {/* Specs Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-800/50 border border-gray-600 p-4 space-y-4">
                  <ProjectMeta project={project} layout="sidebar" />
                </div>
              </div>
            </div>

            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-vw-cyan font-mono">Overview</h2>
              <p className="text-black text-lg leading-relaxed font-medium">
                {project.summary}
              </p>
              <div className="space-y-2">
                {project.description.map((paragraph, index) => (
                  <p key={index} className="text-black leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* App Features */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-vw-cyan font-mono">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/30 border border-gray-600 p-4">
                  <h3 className="text-lg text-vw-pink font-mono mb-3">Core Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-black text-sm flex items-start font-medium">
                        <span className="text-vw-cyan mr-2 flex-shrink-0">▶</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* App Structure */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-vw-cyan font-mono">App Structure</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Pages */}
                <div className="bg-gray-800/30 border border-gray-600 p-4">
                  <h3 className="text-lg text-green-300 font-mono mb-3">Main Pages</h3>
                  <ul className="space-y-1">
                    {project.sections.pages.map((page, index) => (
                      <li key={index} className="text-black text-sm flex items-start font-medium">
                        <span className="text-green-400 mr-2 flex-shrink-0">•</span>
                        {page}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tracking Features */}
                <div className="bg-gray-800/30 border border-gray-600 p-4">
                  <h3 className="text-lg text-blue-100 font-mono mb-3">Wellness Tracking</h3>
                  <ul className="space-y-1">
                    {project.sections.tracking.map((track, index) => (
                      <li key={index} className="text-black text-sm flex items-start font-medium">
                        <span className="text-blue-400 mr-2 flex-shrink-0">•</span>
                        {track}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div className="bg-gray-800/30 border border-gray-600 p-4">
                  <h3 className="text-lg text-yellow-300 font-mono mb-3">Local Resources</h3>
                  <ul className="space-y-1">
                    {project.sections.resources.map((resource, index) => (
                      <li key={index} className="text-black text-sm flex items-start font-medium">
                        <span className="text-yellow-400 mr-2 flex-shrink-0">•</span>
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* My Contributions */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-vw-cyan font-mono">My Key Contributions</h2>
                <div className="bg-gradient-to-r from-vw-purple/20 to-vw-pink/20 border-2 border-vw-pink/50 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg text-vw-pink font-mono mb-3 flex items-center">
                        <span className="text-vw-pink mr-2">🔬</span>
                        Research & Analysis
                      </h3>
                      <ul className="space-y-2 text-black text-sm font-medium">
                        <li>• <strong className="text-black">Research Planning:</strong> Contributed to community needs assessment methodology and question development for Ghana study</li>
                        <li>• <strong className="text-black">Healthcare Analysis:</strong> Aided in identifying accessibility gaps in maternal mental health resources</li>
                        <li>• <strong className="text-black">Testing Support:</strong> Contributed to user experience testing design and demographic targeting</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg text-vw-pink font-mono mb-3 flex items-center">
                        <span className="text-vw-cyan mr-2">🎨</span>
                        Design & Development
                      </h3>
                      <ul className="space-y-2 text-black text-sm font-medium">
                        <li>• <strong className="text-black">UX Design:</strong> Created user flows and wireframes in Figma</li>
                        <li>• <strong className="text-black">UI Design:</strong> Developed accessible, culturally-sensitive interface</li>
                        <li>• <strong className="text-black">Frontend Development:</strong> Aided in React implementation and component architecture</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-vw-pink/30">
                    <p className="text-black font-mono text-sm">
                      <strong className="text-vw-cyan">Impact:</strong> Leading the end-to-end design process from user research to technical implementation, 
                      ensuring the app meets real community needs while maintaining technical feasibility.
                    </p>
                  </div>
                </div>
            </section>

            {/* Research & Design */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-vw-cyan font-mono">Project Methodology</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg text-vw-pink font-mono mb-3">Research Foundation</h3>
                  <ul className="space-y-2 text-black text-sm">
                    <li>• Community needs assessment in Ghana</li>
                    <li>• Healthcare accessibility research</li>
                    <li>• Mental health screening tool validation</li>
                    <li>• User experience testing with target demographic</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg text-vw-pink font-mono mb-3">Design Approach</h3>
                  <ul className="space-y-2 text-black text-sm">
                    <li>• Accessibility-first design principles</li>
                    <li>• Cultural sensitivity in UI/UX</li>
                    <li>• Offline-capable architecture</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Figma Embed */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-vw-cyan font-mono">Interactive Design Prototype</h2>
              <div className="bg-gray-800/30 border border-gray-600 p-4">
                <div className="aspect-video bg-gray-900 border border-gray-700 overflow-hidden">
                  <iframe 
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
                    width="100%" 
                    height="100%" 
                    src="https://embed.figma.com/design/Wmpak0IXc9ifhoikoxJT3F/IGH-2-3?node-id=0-1&embed-host=share" 
                    allowFullScreen
                    title="Nurture Nest Figma Design"
                  />
                </div>
                <p className="text-black text-sm mt-2 font-mono">
                  Interactive Figma prototype - Click and navigate through the app design
                </p>
              </div>
            </section>


            {/* Final CTAs */}
            <section className="border-t border-gray-600 pt-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <CTAButtons project={project} showBack />
                <div className="text-gray-400 font-mono text-sm">
                  Healthcare app in development • {project.year}
                </div>
              </div>
            </section>
          </div>
        </RetroWindow>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 px-4 py-2 bg-gradient-to-b from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-gray-900 font-mono text-sm border-2 border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-150 shadow-lg z-40"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          ↑ Top
        </motion.button>
      )}
    </div>
  );
};

export default NurtureNest;
