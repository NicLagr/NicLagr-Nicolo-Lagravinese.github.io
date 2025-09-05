import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RetroWindow from './RetroWindow';

const DesktopOS = ({ children, onNavigate }) => {
  const [time, setTime] = useState(new Date());
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [showStartMenu, setShowStartMenu] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const desktopIcons = [
    { id: 'portfolio', name: 'Portfolio.exe', icon: '💼', x: 50, y: 100 },
    { id: 'about', name: 'About_Me.txt', icon: '📄', x: 50, y: 200 },
    { id: 'projects', name: 'My_Projects', icon: '📁', x: 50, y: 300 },
    { id: 'contact', name: 'Contact.exe', icon: '📧', x: 50, y: 400 },
    { id: 'resume', name: 'Resume.pdf', icon: '📋', x: 50, y: 500 },
  ];

  const openWindow = (iconId) => {
    if (!openWindows.find(w => w.id === iconId)) {
      const newWindow = {
        id: iconId,
        title: desktopIcons.find(i => i.id === iconId)?.name || 'Window',
        x: Math.random() * 200 + 100,
        y: Math.random() * 100 + 100,
        width: 600,
        height: 400,
        zIndex: openWindows.length + 1
      };
      setOpenWindows([...openWindows, newWindow]);
      setActiveWindow(iconId);
    }
  };

  const closeWindow = (windowId) => {
    setOpenWindows(openWindows.filter(w => w.id !== windowId));
    if (activeWindow === windowId) {
      const remaining = openWindows.filter(w => w.id !== windowId);
      setActiveWindow(remaining.length > 0 ? remaining[remaining.length - 1].id : null);
    }
  };

  const bringToFront = (windowId) => {
    setActiveWindow(windowId);
    setOpenWindows(windows => 
      windows.map(w => 
        w.id === windowId 
          ? { ...w, zIndex: Math.max(...windows.map(win => win.zIndex)) + 1 }
          : w
      )
    );
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-vw-deep via-purple-900 to-vw-deep overflow-hidden">
      {/* Desktop Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmY0ZmQ4IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      {/* Desktop Icons */}
      <div className="absolute inset-0 p-4">
        {desktopIcons.map((icon) => (
          <motion.div
            key={icon.id}
            className="absolute flex flex-col items-center cursor-pointer group"
            style={{ left: icon.x, top: icon.y }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onDoubleClick={() => openWindow(icon.id)}
          >
            <div className="text-4xl mb-2 filter drop-shadow-lg">
              {icon.icon}
            </div>
            <div className="text-xs text-white text-center px-2 py-1 rounded bg-black/20 backdrop-blur-sm border border-white/20 group-hover:bg-vw-pink/20 transition-colors">
              {icon.name}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Windows */}
      <AnimatePresence>
        {openWindows.map((window) => (
          <motion.div
            key={window.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute"
            style={{
              left: window.x,
              top: window.y,
              width: window.width,
              height: window.height,
              zIndex: window.zIndex
            }}
            onClick={() => bringToFront(window.id)}
          >
            <RetroWindow
              title={window.title}
              onClose={() => closeWindow(window.id)}
              isActive={activeWindow === window.id}
            >
              <WindowContent windowId={window.id} />
            </RetroWindow>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 border-t-2 border-gray-300 flex items-center px-2 shadow-lg">
        {/* Start Button */}
        <div className="relative">
          <motion.button
            className="px-4 py-1 bg-gradient-to-r from-gray-400 to-gray-500 border border-gray-300 rounded-sm text-black font-bold text-sm shadow-inner hover:from-gray-300 hover:to-gray-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowStartMenu(!showStartMenu)}
          >
            <span className="flex items-center gap-2">
              <span className="text-green-600">⊞</span>
              Start
            </span>
          </motion.button>

          {/* Start Menu */}
          <AnimatePresence>
            {showStartMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-full left-0 mb-2 bg-gray-200 border-2 border-gray-400 shadow-lg min-w-48 rounded-sm overflow-hidden"
              >
                {/* Start Menu Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-2 text-sm font-bold">
                  Nicolò OS 98
                </div>
                
                {/* Menu Items */}
                <div className="py-1">
                  <motion.button
                    className="w-full px-4 py-2 text-left text-sm hover:bg-blue-100 flex items-center gap-3"
                    whileHover={{ backgroundColor: '#dbeafe' }}
                    onClick={() => {
                      onNavigate && onNavigate('hero');
                      setShowStartMenu(false);
                    }}
                  >
                    <span>🏠</span>
                    <span>Return to Terminal</span>
                  </motion.button>
                  
                  <motion.button
                    className="w-full px-4 py-2 text-left text-sm hover:bg-blue-100 flex items-center gap-3"
                    whileHover={{ backgroundColor: '#dbeafe' }}
                    onClick={() => {
                      onNavigate && onNavigate('projects');
                      setShowStartMenu(false);
                    }}
                  >
                    <span>📁</span>
                    <span>Project Archive</span>
                  </motion.button>
                  
                  <div className="border-t border-gray-300 my-1"></div>
                  
                  <motion.button
                    className="w-full px-4 py-2 text-left text-sm hover:bg-blue-100 flex items-center gap-3"
                    whileHover={{ backgroundColor: '#dbeafe' }}
                    onClick={() => openWindow('about')}
                  >
                    <span>ℹ️</span>
                    <span>About Me</span>
                  </motion.button>
                  
                  <motion.button
                    className="w-full px-4 py-2 text-left text-sm hover:bg-blue-100 flex items-center gap-3"
                    whileHover={{ backgroundColor: '#dbeafe' }}
                    onClick={() => openWindow('contact')}
                  >
                    <span>📧</span>
                    <span>Contact</span>
                  </motion.button>
                  
                  <div className="border-t border-gray-300 my-1"></div>
                  
                  <motion.button
                    className="w-full px-4 py-2 text-left text-sm hover:bg-red-100 flex items-center gap-3 text-red-700"
                    whileHover={{ backgroundColor: '#fee2e2' }}
                    onClick={() => {
                      setShowStartMenu(false);
                      // Could add a shutdown animation here
                      setTimeout(() => onNavigate && onNavigate('hero'), 500);
                    }}
                  >
                    <span>⏻</span>
                    <span>Shut Down...</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Open Windows */}
        <div className="flex-1 flex gap-1 ml-2">
          {openWindows.map((window) => (
            <motion.button
              key={window.id}
              className={`px-3 py-1 text-xs border rounded-sm truncate max-w-32 ${
                activeWindow === window.id
                  ? 'bg-gray-300 border-gray-400 text-black'
                  : 'bg-gray-500 border-gray-600 text-white hover:bg-gray-400'
              }`}
              onClick={() => bringToFront(window.id)}
              whileHover={{ scale: 1.02 }}
            >
              {window.title}
            </motion.button>
          ))}
        </div>

        {/* System Tray */}
        <div className="flex items-center gap-2 text-xs text-white">
          <div className="flex gap-1">
            <span title="Volume">🔊</span>
            <span title="Network">📶</span>
          </div>
          <div className="border-l border-gray-400 pl-2">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>

      {/* Main Content Area (for non-desktop content) */}
      <div className="absolute inset-0 pointer-events-none">
        {children}
      </div>
    </div>
  );
};

// Window Content Component
const WindowContent = ({ windowId }) => {
  const content = {
    portfolio: <PortfolioWindow />,
    about: <AboutWindow />,
    projects: <ProjectsWindow />,
    contact: <ContactWindow />,
    resume: <ResumeWindow />
  };

  return content[windowId] || <div className="p-4">Window content for {windowId}</div>;
};

// Individual Window Components
const PortfolioWindow = () => (
  <div className="p-4 h-full bg-black text-green-400 font-mono text-sm overflow-auto">
    <div className="mb-4">
      <span className="text-vw-pink">C:\NICOLO></span> portfolio.exe
    </div>
    <div className="space-y-2">
      <div>Loading portfolio data...</div>
      <div className="text-vw-cyan">
        ████████████████████ 100% Complete
      </div>
      <div className="mt-4">
        <div className="text-white">NICOLÒ LAGRAVINESE</div>
        <div className="text-vw-pink">Full-Stack Engineer & IoT Specialist</div>
        <div className="mt-2 text-sm">
          > Building reliable, human-centered systems<br/>
          > React • Node.js • Kubernetes • IoT<br/>
          > DevOps • Cloud Infrastructure<br/>
        </div>
      </div>
    </div>
  </div>
);

const AboutWindow = () => (
  <div className="p-4 h-full bg-gradient-to-b from-blue-100 to-blue-50 overflow-auto">
    <div className="prose prose-sm">
      <h2 className="text-vw-purple font-bold mb-4">About Me</h2>
      <p className="text-gray-700 mb-4">
        Hey there! I'm a 20-year-old passionate full-stack engineer who loves building things that matter. 
        From web applications to IoT devices, I enjoy the entire journey from concept to deployment. 
        Currently studying at Northeastern University while working part-time at Tulip Interfaces.
      </p>
      <p className="text-gray-700 mb-4">
        I graduated high school in 2023 and have been diving deep into modern development practices, 
        from React and Node.js to Kubernetes and industrial hardware integration.
      </p>
      <div className="bg-white p-3 rounded border-l-4 border-vw-pink">
        <strong>Fun Fact:</strong> Despite being young, I have a soft spot for retro interfaces 
        and nostalgic design patterns - hence this vaporwave aesthetic!
      </div>
    </div>
  </div>
);

const ProjectsWindow = () => (
  <div className="p-4 h-full bg-gray-100 overflow-auto">
    <div className="grid grid-cols-2 gap-4">
      {[
        { name: "Mission Control 3.0", icon: "🎛️", status: "Active", company: "Tulip Interfaces", year: "2025" },
        { name: "TEC Demo Engineering", icon: "🏭", status: "Active", company: "Tulip Interfaces", year: "2025" },
        { name: "Jewelry Management Platform", icon: "💎", status: "Active", company: "Independent", year: "2025" },
        { name: "Nurture Nest", icon: "🏥", status: "Dev", company: "Social Impact", year: "2025" },
        { name: "Game Development Portfolio", icon: "🎮", status: "Live", company: "Personal", year: "2024" }
      ].map((project, i) => (
        <div key={i} className="bg-white p-3 rounded shadow border">
          <div className="text-2xl mb-2">{project.icon}</div>
          <div className="font-semibold text-sm mb-1">{project.name}</div>
          <div className="text-xs text-gray-600 mb-2">{project.company} • {project.year}</div>
          <div className={`text-xs px-2 py-1 rounded inline-block ${
            project.status === 'Live' ? 'bg-green-100 text-green-800' :
            project.status === 'Active' ? 'bg-blue-100 text-blue-800' :
            project.status === 'Dev' ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {project.status}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ContactWindow = () => (
  <div className="p-4 h-full bg-gradient-to-br from-vw-purple to-vw-pink text-white overflow-auto">
    <h2 className="text-xl font-bold mb-4 aberration">Get In Touch</h2>
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span>📧</span>
        <span>lagravinese.n@northeastern.edu</span>
      </div>
      <div className="flex items-center gap-3">
        <span>💼</span>
        <span>LinkedIn: /in/nicolo-lagravinese</span>
      </div>
      <div className="flex items-center gap-3">
        <span>🐙</span>
        <span>GitHub: @NicLagr</span>
      </div>
      <div className="flex items-center gap-3">
        <span>🎓</span>
        <span>Northeastern University - Class of 2027</span>
      </div>
      <div className="mt-6 p-3 bg-black/20 rounded border border-white/20">
        <div className="text-sm">Status: Open to co-ops and part-time opportunities</div>
        <div className="text-xs opacity-80 mt-1">Currently: Student + Part-time at Tulip Interfaces</div>
        <div className="text-xs opacity-80 mt-1">Last updated: {new Date().toLocaleDateString()}</div>
      </div>
    </div>
  </div>
);

const ResumeWindow = () => (
  <div className="p-4 h-full bg-white overflow-auto">
    <div className="text-center mb-4">
      <div className="text-2xl font-bold text-vw-purple">NICOLÒ LAGRAVINESE</div>
      <div className="text-sm text-gray-600">Full-Stack Engineer & IoT Specialist</div>
      <div className="text-xs text-gray-500 mt-1">Age 20 • Northeastern University Student</div>
    </div>
    <div className="space-y-4 text-sm">
      <section>
        <h3 className="font-bold text-vw-pink border-b border-gray-300 pb-1 mb-2">EXPERIENCE</h3>
        <div className="space-y-3">
          <div>
            <div className="font-semibold">Product Support Engineer (Part-Time)</div>
            <div className="text-gray-600">Tulip Interfaces • Jul 2025 – Present</div>
            <div className="text-xs text-gray-500 mt-1">Full-stack troubleshooting, internal tooling, TEC demos</div>
          </div>
          <div>
            <div className="font-semibold">TEC Hardware/Software Engineer Co-op</div>
            <div className="text-gray-600">Tulip Interfaces • Jan 2025 – Jun 2025</div>
            <div className="text-xs text-gray-500 mt-1">Mission Control 3.0, K8s deployment, hardware integration</div>
          </div>
          <div>
            <div className="font-semibold">IT Specialist</div>
            <div className="text-gray-600">Northeastern University (MIE) • Sep 2024 – Dec 2024</div>
            <div className="text-xs text-gray-500 mt-1">Technical support for Mechanical & Industrial Engineering</div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="font-bold text-vw-pink border-b border-gray-300 pb-1 mb-2">EDUCATION</h3>
        <div>
          <div className="font-semibold">Northeastern University</div>
          <div className="text-gray-600">Class of 2027 • Boston, MA</div>
          <div className="text-xs text-gray-500 mt-1">High School Graduate 2023</div>
        </div>
      </section>
      <section>
        <h3 className="font-bold text-vw-pink border-b border-gray-300 pb-1 mb-2">SKILLS</h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>• React & Node.js</div>
          <div>• Kubernetes & Helm</div>
          <div>• Hardware Integration</div>
          <div>• Industrial IoT</div>
          <div>• Unity 3D & Java</div>
          <div>• CI/CD & DevOps</div>
        </div>
      </section>
    </div>
  </div>
);

export default DesktopOS;
