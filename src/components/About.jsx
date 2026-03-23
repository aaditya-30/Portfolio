import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="min-h-[100svh] flex flex-col items-center justify-center px-4 py-24 relative z-10 w-full max-w-7xl mx-auto">
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white/90">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          
          {/* Main Bio Box */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-8 md:p-10 rounded-[2rem] md:col-span-2 row-span-1 md:row-span-2 flex flex-col justify-center relative overflow-hidden group hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-semibold text-white/90 mb-6 font-display">
              {portfolioData.name} — <span className="text-white/50">{portfolioData.title}</span>
            </h3>
            <div className="space-y-4 text-base lg:text-lg text-white/60 leading-relaxed font-light">
              <p>
                My journey in software development started with curiosity and evolved into a deep passion for building scalable web applications. I specialize in modern JavaScript frameworks and backend technologies.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          {/* Specialization Box 1 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-panel p-8 rounded-[2rem] flex flex-col relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-500"
          >
            <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-auto border border-indigo-500/20 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white/90 mb-2 mt-4">Frontend</h4>
              <p className="text-sm text-white/50 font-light leading-relaxed">Responsive, interactive user interfaces with React and TailwindCSS.</p>
            </div>
          </motion.div>

          {/* Specialization Box 2 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-panel p-8 rounded-[2rem] flex flex-col relative overflow-hidden group hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500"
          >
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-auto border border-purple-500/20 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white/90 mb-2 mt-4">Backend & DB</h4>
              <p className="text-sm text-white/50 font-light leading-relaxed">Robust server logic, APIs, and efficient database architectures.</p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
