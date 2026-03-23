import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const DSA = () => {
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

  const platforms = [
    {
      name: 'Codeforces',
      stat: 'Pupil (1261)',
      detail: '208 Problems',
      href: 'https://codeforces.com/profile/aaditya_30',
      icon: '🏆',
      hoverBorder: 'group-hover:border-blue-500/50',
      hoverShadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
    },
    {
      name: 'LeetCode',
      stat: '1702',
      detail: '422 Problems',
      href: 'https://leetcode.com/u/aaditya_30/',
      icon: '⚡',
      hoverBorder: 'group-hover:border-amber-500/50',
      hoverShadow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]'
    },
    {
      name: 'GeeksforGeeks',
      stat: 'Active',
      detail: '70+ Problems',
      href: 'https://www.geeksforgeeks.org/profile/aaditya30',
      icon: '💻',
      hoverBorder: 'group-hover:border-emerald-500/50',
      hoverShadow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]'
    },
    {
      name: 'Codolio',
      stat: '750+ Total',
      detail: 'Cumulative Problems',
      href: 'https://codolio.com/profile/aaditya_30',
      icon: '🎯',
      hoverBorder: 'group-hover:border-purple-500/50',
      hoverShadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]'
    },
  ];

  return (
    <section id="dsa" className="min-h-screen flex items-center justify-center px-4 py-24 relative z-10 w-full max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white/90 mb-6">
            DSA & <span className="text-gradient">Logic</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
            Consistent practice across multiple competitive programming platforms to sharpen problem-solving skills and algorithmic thinking.
          </p>
        </motion.div>

        {/* Platform Cards - Bento Grid Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`glass-panel rounded-[2rem] p-8 flex flex-col justify-between transition-all duration-500 group border-t-white/10 ${platform.hoverShadow} ${platform.hoverBorder} aspect-square sm:aspect-auto`}
            >
              <div className="flex justify-between items-start mb-auto">
                <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-white/[0.06] transition-all duration-500`}>
                  {platform.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <svg className="w-3 h-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium text-white/40 mb-1 tracking-wide uppercase">{platform.name}</h4>
                <div className="text-2xl lg:text-3xl font-bold tracking-tight text-white/90 mb-1 group-hover:text-white transition-colors">{platform.stat}</div>
                <div className="text-sm text-white/50">{platform.detail}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DSA;
