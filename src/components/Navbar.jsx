import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaEnvelope, FaProjectDiagram, FaPuzzlePiece } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'dsa', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', icon: <FaHome />, label: 'HOME' },
    { id: 'about', icon: <FaUser />, label: 'ABOUT' },
    { id: 'projects', icon: <FaProjectDiagram />, label: 'PROJECTS' },
    { id: 'skills', icon: <FaCode />, label: 'TECH STACK' },
    { id: 'dsa', icon: <FaPuzzlePiece />, label: 'DSA' },
    { id: 'contact', icon: <FaEnvelope />, label: 'MESSAGE' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center z-[100] pointer-events-none px-4">
      <motion.nav 
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="glass-panel px-4 py-3 rounded-full pointer-events-auto flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]"
      >
        <ul className="flex items-center gap-2 sm:gap-4">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ease-out ${
                  activeSection === item.id 
                    ? 'text-white scale-110' 
                    : 'text-white/40 hover:text-white/80 hover:scale-105 hover:bg-white/5'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-full -z-10 shadow-[0_0_15px_rgba(45,212,191,0.2)] border border-teal-500/20"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                  />
                )}
                <span className="text-[20px] relative z-10 transition-transform duration-300">
                  {item.icon}
                </span>
              </button>
              
              {/* Tooltip */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl transform translate-y-2 group-hover:translate-y-0 tracking-wide">
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
