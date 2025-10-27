import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full"
      >
        
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-8 text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6 text-lg text-gray-300 leading-relaxed"
        >
          <p>
            I'm <span className="font-semibold text-white">{portfolioData.name}</span>, a passionate {portfolioData.title.toLowerCase()} focused on creating elegant solutions to complex problems.
          </p>

          <p>
            My journey in software development started with curiosity and evolved into a deep passion for building scalable web applications. I specialize in modern JavaScript frameworks and backend technologies, always staying current with industry best practices.
          </p>

          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>

          <div className="pt-8">
            <h3 className="text-2xl font-semibold text-white mb-4">What I Do</h3>
            <div className="grid md:grid-cols-2 gap-6">
              
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Frontend Development</h4>
                  <p className="text-gray-400 text-base">Building responsive, interactive user interfaces with React and modern CSS frameworks.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Backend Development</h4>
                  <p className="text-gray-400 text-base">Designing RESTful APIs and server-side logic with Node.js and Express.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Database Design</h4>
                  <p className="text-gray-400 text-base">Structuring efficient databases and writing optimized queries.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Security & Testing</h4>
                  <p className="text-gray-400 text-base">Implementing authentication, authorization, and comprehensive testing.</p>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;
