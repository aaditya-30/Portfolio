import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Hero = () => {
  const { name, title, bio } = portfolioData;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-28 pb-20 relative z-10 px-4">
      
      {/* Main Typography Area (Outside Glass for Maximum Contrast) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center z-20 mb-12"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-white/60 font-medium text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Welcome to my portfolio
        </motion.p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4">
          <span className="text-white drop-shadow-2xl">I'm </span>
          <br className="md:hidden" />
          <span className="text-emerald-glow drop-shadow-2xl">
            {name}
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-semibold text-gradient-apple mt-4 max-w-3xl mx-auto leading-tight">
          {title}
        </h2>
      </motion.div>

      {/* Liquid Glass Panel for Bio and CTAs */}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel p-8 md:p-12 rounded-[2.5rem] max-w-3xl w-full text-center relative overflow-hidden group"
      >
        {/* Subtle internal glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light relative z-10">
          {bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-medium transition-all border border-white/20 hover:border-white/40 shadow-[0_4px_24px_-4px_rgba(255,255,255,0.1)] w-full sm:w-auto"
          >
            View Work
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent hover:bg-white/5 text-white/80 hover:text-white rounded-full font-medium transition-all w-full sm:w-auto"
          >
            Contact Me →
          </motion.button>
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
