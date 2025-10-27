import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Hero = () => {
  const { name, title, bio, github, linkedin, Leetcode, Codeforces, Codolio } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full"
      >
        
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-lg text-gray-400 font-medium">Hi, I'm</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            {name}
          </span>
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-semibold text-gray-200 mb-8"
        >
          {title}
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
        >
          {bio}
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            GitHub
          </motion.a>

          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            LinkedIn
          </motion.a>

          <motion.a
            href={Leetcode}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-yellow-600 text-white rounded-lg font-medium hover:bg-yellow-700 transition-colors shadow-lg hover:shadow-xl"
          >
            LeetCode
          </motion.a>

          <motion.a
            href={Codeforces}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Codeforces
          </motion.a>

          <motion.a
            href={Codolio}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Codolio
          </motion.a>

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-gray-400 text-gray-300 rounded-lg font-medium hover:bg-gray-800 hover:border-gray-300 transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex justify-center"
          >
            <svg 
              className="w-6 h-6 text-gray-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
