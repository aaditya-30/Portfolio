import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
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

  const categories = [
    {
      title: 'Languages',
      color: 'from-gray-300 to-gray-400',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]',
      border: 'group-hover:border-emerald-500/50',
      skills: ['C++', 'Java', 'JavaScript', 'Python', 'SQL'],
    },
    {
      title: 'Frontend',
      color: 'from-gray-200 to-gray-400',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]',
      border: 'group-hover:border-cyan-500/50',
      skills: ['React.js', 'HTML', 'CSS', 'TailwindCSS'],
    },
    {
      title: 'Backend',
      color: 'from-gray-300 to-gray-500',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(129,140,248,0.2)]',
      border: 'group-hover:border-indigo-500/50',
      skills: ['Node.js', 'Express.js'],
    },
    {
      title: 'Tools & Platforms',
      color: 'from-gray-400 to-gray-600',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]',
      border: 'group-hover:border-amber-500/50',
      skills: ['Git', 'GitHub', 'VS Code', 'JIRA', 'Excel', 'Word'],
    },
    {
      title: 'Core Fundamentals',
      color: 'from-white to-gray-300',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(251,113,133,0.2)]',
      border: 'group-hover:border-rose-500/50',
      skills: ['Data Structures & Algorithms', 'System Design Base', 'OOP', 'DBMS', 'Operating Systems', 'Networking Core'],
    },
  ];

  return (
    <section id="skills" className="min-h-[90svh] flex flex-col items-center justify-center px-4 py-24 relative z-10 w-full max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white/90">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative glass-panel rounded-[2rem] p-8 md:p-10 flex-grow basis-[300px] max-w-full md:max-w-[48%] transition-all duration-500 group ${category.shadow} ${category.border} border-t-white/10`}
            >
              {/* Top ambient glow bar */}
              <div className={`absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <h3 className="text-2xl font-semibold tracking-tight text-white/90 mb-8 relative z-10 flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${category.color} shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-sm px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.05] text-white/60 hover:text-white/90 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 font-medium tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
