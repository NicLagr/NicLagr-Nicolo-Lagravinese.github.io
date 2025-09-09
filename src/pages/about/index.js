import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import VaporwaveBust from '../../components/VaporwaveBust';
import RetroWindow from '../../components/RetroWindow';
import DesktopIcon from '../../components/DesktopIcon';
import Chip from '../../components/Chip';
import SkillTabs from '../../components/SkillTabs';
import Timeline from '../../components/Timeline';

const AboutPage = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const passions = [
    {
      id: 'movies',
      icon: '/assets/icons/Windows XP Icons/Movie Maker.png',
      title: 'Movies',
      description: 'Forever chasing shots and cuts that change how you feel about the world.',
      link: 'https://letterboxd.com/nicoloLG/'
    },
    {
      id: 'games',
      icon: '/assets/icons/Windows XP Icons/Games.png',
      title: 'Games',
      description: 'Narrative and atmosphere first; give me stakes, space, and secrets.',
      link: '/projects'
    },
    {
      id: 'music',
      icon: '/assets/icons/Windows XP Icons/Windows Media Player.png',
      title: 'Music',
      description: 'Steely Dan on loop when I\'m deep in flow.',
      link: null
    },
    {
      id: 'fitness',
      icon: '/assets/icons/Windows XP Icons/Sports.png',
      title: 'Fitness',
      description: 'Tennis and lifting keep me honest.',
      link: null
    },
    {
      id: 'photography',
      icon: '/assets/icons/Windows XP Icons/Camera.png',
      title: 'Photography',
      description: 'Composition as problem-solving.',
      link: null
    },
    {
      id: 'cheese',
      icon: '/assets/icons/Windows XP Icons/Food.png',
      title: 'Cheese',
      description: 'Still ranking my top 5.',
      link: null
    }
  ];

  const quickStats = [
    { label: 'Currently', value: 'Product Support Engineer (Part-Time) @ Tulip Interfaces, Boston' },
    { label: 'Available', value: 'Jan–Aug 2026 co-op / internship' },
    { label: 'Based in', value: 'Boston, MA' },
    { label: 'Stack highlights', value: 'React, Node/Express, Unity, Docker/K8s/Helm, Argo CD, Redshift/Snowflake, MQTT/OPC-UA, GitHub Actions' }
  ];

  const whatIDo = [
    {
      title: 'Full-stack + Cloud',
      description: 'Build SPAs, APIs, and dashboards; deploy with Docker → K8s (Helm/Argo)',
      callout: 'Mission Control 3.0 (React + 3D viz + Redshift; G11 cluster)',
      icon: '/assets/icons/Windows XP Icons/Network.png'
    },
    {
      title: 'Hardware/IoT demos',
      description: 'Pick-to-lights, conveyors, vision systems; Node-RED; MQTT/OPC-UA',
      callout: 'TEC Demo Engineering',
      icon: '/assets/icons/Windows XP Icons/Hardware.png'
    },
    {
      title: 'Design/UX',
      description: 'Prototyping, data viz, custom widgets, accessibility & polish',
      callout: 'NurtureNest Research Platform',
      icon: '/assets/icons/Windows XP Icons/Accessibility.png'
    },
    {
      title: 'Game dev',
      description: 'Unity 3D projects (dungeon-horror, FPS) + algorithmic recreations',
      callout: 'View Game Portfolio',
      icon: '/assets/icons/Windows XP Icons/Games.png',
      link: '/projects'
    }
  ];

  const traits = [
    { name: 'Curious', description: 'from console modding to new frameworks' },
    { name: 'Creative', description: 'marries aesthetics with engineering' },
    { name: 'Collaborative', description: 'happiest in cross-disciplinary teams' },
    { name: 'Adaptable', description: 'code, hardware, design, storytelling' },
    { name: 'Detail-oriented', description: 'ships polished, reliable systems' }
  ];

  const recentWork = [
    {
      title: 'Mission Control 3.0',
      description: 'React SPA + 3D + Redshift; Helm/Argo to K8s; CI/CD to AWS ECR',
      link: '/projects/missioncontrol'
    },
    {
      title: 'TEC Demo Engineering',
      description: 'Live demos (conveyors, pick-to-lights, Cognex); LandingAI OCR/defect models',
      link: '/projects/tecdemoengineering'
    },
    {
      title: 'Jewelry/Retail Platform',
      description: 'CRM + repair workflow, SMS/email, QR/barcodes (React + Node/Express)',
      link: '/projects/nurturenest'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <RetroWindow
        title="About: Nicolo Lagravinese"
        className="max-w-7xl mx-auto"
        statusBar="W = wireframe, M = matcap, Click = cycle materials"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Left Column - Interactive 3D Bust */}
          <div className="space-y-6">
            <VaporwaveBust />
            
            {/* Decorative Vaporwave Elements */}
            <div className="relative">
              <img 
                src="/assets/vaporwave/Extras/Palm Tree 1.png" 
                alt=""
                className="absolute -top-4 -right-4 w-16 h-16 opacity-60 pointer-events-none"
                style={{ filter: 'hue-rotate(280deg)' }}
              />
              <img 
                src="/assets/vaporwave/Extras/Scribble 1.png" 
                alt=""
                className="absolute -bottom-2 -left-2 w-12 h-12 opacity-40 pointer-events-none"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Hero Intro */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Hi, I'm Nicolo
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm Nicolo—CS + Interaction Design at Northeastern—who likes building things that feel as good as they look. 
                I move between React apps, Unity worlds, and hardware/IoT rigs, then obsess over the last 5% of polish. 
                I'm happiest when I can stitch design, data, and systems together into something humans actually enjoy using.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Chip variant="neon">CS + Interaction Design</Chip>
                <Chip variant="neon">Product Support & TEC</Chip>
                <Chip variant="neon">Game Dev</Chip>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="bg-black/20 border border-cyan-500/30 rounded-lg p-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-3 font-mono">Quick Stats</h3>
              <div className="space-y-2">
                {quickStats.map((stat, index) => (
                  <div key={index} className="flex flex-col sm:flex-row">
                    <span className="text-pink-400 font-mono text-sm w-24 flex-shrink-0">
                      {stat.label}:
                    </span>
                    <span className="text-gray-300 text-sm">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What I Do */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-cyan-400 font-mono">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whatIDo.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-black/20 border border-purple-500/30 rounded-lg p-4 hover:border-pink-500/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <img src={item.icon} alt="" className="w-6 h-6" />
                      <h4 className="font-bold text-pink-400">{item.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                    {item.link ? (
                      <Link 
                        to={item.link}
                        className="text-cyan-400 text-xs hover:text-pink-400 transition-colors"
                      >
                        {item.callout} →
                      </Link>
                    ) : (
                      <span className="text-cyan-400 text-xs">{item.callout}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Full Width Sections */}
        <div className="px-6 space-y-8">
          {/* Personality Traits */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-cyan-400 font-mono">Core Traits</h3>
            <div className="flex flex-wrap gap-3">
              {traits.map((trait, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  <Chip 
                    variant="gradient" 
                    className="cursor-help"
                    title={trait.description}
                  >
                    {trait.name}
                  </Chip>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black/90 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                    {trait.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Passions */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-xl font-bold text-cyan-400 font-mono">Passions</h3>
            <div className="flex flex-wrap gap-4">
              {passions.map((passion, index) => (
                <DesktopIcon
                  key={passion.id}
                  icon={passion.icon}
                  title={passion.title}
                  description={passion.description}
                  link={passion.link}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Values & Perspective */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-cyan-400 font-mono">Values & Perspective</h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="text-pink-400 font-semibold">Human-Centered:</span> tech should feel intuitive, humane.
                </p>
                <p>
                  <span className="text-pink-400 font-semibold">Exploration:</span> curiosity across history, design, and systems.
                </p>
                <p>
                  <span className="text-pink-400 font-semibold">Balance:</span> rigor + play.
                </p>
                <p>
                  <span className="text-pink-400 font-semibold">Storytelling:</span> connect through film, games, and interface narratives.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I care about human-centered tech, clear storytelling, and the kind of interfaces that invite exploration. 
                Whether I'm tuning a dashboard for ops, rigging a demo with pick-to-lights, or designing a game mechanic, 
                I aim for useful, approachable, and a little bit magical.
              </p>
            </div>
          </motion.div>

          {/* Recent Work Highlights */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className="text-xl font-bold text-cyan-400 font-mono">Recent Work Highlights</h3>
            <div className="bg-black/20 border border-cyan-500/30 rounded-lg p-4">
              {recentWork.map((work, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <img src="/assets/icons/Windows XP Icons/Folder.png" alt="" className="w-4 h-4" />
                    <div>
                      <span className="text-white font-medium">{work.title}</span>
                      <p className="text-gray-400 text-sm">{work.description}</p>
                    </div>
                  </div>
                  <Link 
                    to={work.link}
                    className="bg-gray-600 hover:bg-gray-500 text-white text-xs px-2 py-1 rounded transition-colors"
                  >
                    Open
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <SkillTabs />
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <Timeline />
          </motion.div>

          {/* Contact & CTA */}
          <motion.div
            className="space-y-6 pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <h3 className="text-xl font-bold text-cyan-400 font-mono">Let's Connect</h3>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:lagravinese.n@northeastern.edu"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Email
              </a>
              <a 
                href="https://linkedin.com/in/nicolo-lagravinese"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all transform hover:scale-105"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/NicLagr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-800 hover:to-black transition-all transform hover:scale-105"
              >
                GitHub
              </a>
              <Link 
                to="/"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                Portfolio Home
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              Open to collabs and co-ops (Jan–Aug 2026).
            </p>
          </motion.div>
        </div>
      </RetroWindow>

      {/* Easter Egg Window */}
      {showEasterEgg && (
        <motion.div
          className="fixed top-20 right-4 z-50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
        >
          <RetroWindow
            title="Secret Window"
            className="w-64"
            onClose={() => setShowEasterEgg(false)}
          >
            <div className="p-4 text-center">
              <p className="text-sm text-gray-300 mb-2">Now Playing:</p>
              <p className="text-cyan-400 font-mono text-xs">
                "Any Major Dude Will Tell You" - Steely Dan
              </p>
            </div>
          </RetroWindow>
        </motion.div>
      )}
    </div>
  );
};

export default AboutPage;
