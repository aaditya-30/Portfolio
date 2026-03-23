import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-12 px-6 pb-32">
      <div className="max-w-7xl mx-auto">
        
        {/* Subtle separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white tracking-tight mb-1">
              {portfolioData.name}
            </h3>
            <p className="text-white/40 font-light text-sm tracking-wide">
              {portfolioData.title}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-white/40 font-light">
            <p className="tracking-wide">
              © {currentYear} {portfolioData.name}. All rights reserved.
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 hover:text-white transition-colors bg-white/[0.03] hover:bg-white/[0.08] px-5 py-2.5 rounded-full border border-white/[0.05] tracking-wide"
            >
              Back to top
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
