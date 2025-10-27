import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import portfolioData from '../data/portfolio.json';
import { 
  SiJavascript, SiPython, SiCplusplus,
  SiReact, SiNodedotjs, SiExpress, SiHtml5, SiCss3,
  SiTailwindcss, SiGit, SiGithub, 
  SiJest, SiVercel, SiMysql
} from 'react-icons/si';
import { TbApi, TbCode } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { RiKey2Fill } from 'react-icons/ri';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const iconMap = {
    'JavaScript': { icon: <SiJavascript />, color: 'from-yellow-400 to-yellow-600' },
    'Python': { icon: <SiPython />, color: 'from-blue-500 to-blue-700' },
    'C++': { icon: <SiCplusplus />, color: 'from-blue-600 to-purple-600' },
    'Java': { icon: <FaJava />, color: 'from-red-500 to-orange-600' },
    'SQL': { icon: <SiMysql />, color: 'from-cyan-500 to-blue-600' },
    'React.js': { icon: <SiReact />, color: 'from-cyan-400 to-blue-500' },
    'Node.js': { icon: <SiNodedotjs />, color: 'from-green-500 to-green-700' },
    'Express.js': { icon: <SiExpress />, color: 'from-gray-600 to-gray-800' },
    'HTML5': { icon: <SiHtml5 />, color: 'from-orange-500 to-red-600' },
    'CSS3': { icon: <SiCss3 />, color: 'from-blue-500 to-blue-700' },
    'TailwindCSS': { icon: <SiTailwindcss />, color: 'from-cyan-400 to-teal-500' },
    'Git': { icon: <SiGit />, color: 'from-orange-600 to-red-600' },
    'GitHub': { icon: <SiGithub />, color: 'from-gray-700 to-gray-900' },
    'VS Code': { icon: <VscCode />, color: 'from-blue-500 to-blue-700' },
    'JWT': { icon: <RiKey2Fill />, color: 'from-pink-500 to-purple-600' },
    'REST APIs': { icon: <TbApi />, color: 'from-green-500 to-emerald-600' },
    'Jest': { icon: <SiJest />, color: 'from-red-600 to-pink-600' },
    'Vercel': { icon: <SiVercel />, color: 'from-gray-900 to-black' },
    'Render': { icon: <TbCode />, color: 'from-purple-600 to-indigo-600' }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900">
      <motion.div 
        ref={ref}
        className="max-w-6xl w-full"
      >
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-white"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.skills.map((skill, index) => {
            const skillData = iconMap[skill.name] || { 
              icon: <TbCode />, 
              color: 'from-gray-400 to-gray-600' 
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skillData.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-xl`} />
                
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`flex-shrink-0 bg-gradient-to-br ${skillData.color} p-3 rounded-lg text-white text-3xl group-hover:scale-110 transition-transform`}>
                    {skillData.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Skills;
