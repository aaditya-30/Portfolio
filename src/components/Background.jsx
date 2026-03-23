import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden pointer-events-none">
      {/* Noise overlay for premium metallic/glass feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Aurora glowing orbs (Studio lighting effect) */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="aurora-blob bg-emerald-900/40 w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] -top-1/4 -left-1/4"
      />
      
      <motion.div
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 100, -30, 0],
          scale: [1, 1.05, 1.15, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 2 }}
        className="aurora-blob bg-teal-900/30 w-[50vw] h-[50vw] md:w-[600px] md:h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <motion.div
        animate={{
          x: [0, 40, -80, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear", delay: 1 }}
        className="aurora-blob bg-green-950/50 w-[40vw] h-[40vw] md:w-[700px] md:h-[700px] -bottom-1/4 -right-1/4"
      />
      
      {/* Dark vignette to center focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80" />
    </div>
  );
};

export default Background;
