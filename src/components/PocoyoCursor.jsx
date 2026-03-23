import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PocoyoCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isIdle, setIsIdle] = useState(false);
  const [facingRight, setFacingRight] = useState(true);
  
  // Track cursor
  useEffect(() => {
    let idleTimer;
    
    const updateMousePosition = (e) => {
      // Check direction
      if (e.clientX > mousePosition.x) setFacingRight(true);
      else if (e.clientX < mousePosition.x) setFacingRight(false);
      
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsIdle(false);
      
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setIsIdle(true), 2000); // 2 seconds idle
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    idleTimer = setTimeout(() => setIsIdle(true), 2000);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearTimeout(idleTimer);
    };
  }, [mousePosition.x]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.5
      }}
    >
      {/* Simple pocoyo approximation using shapes */}
      <motion.div 
        className="relative"
        animate={{ 
          scaleX: facingRight ? 1 : -1,
          y: isIdle ? [0, -3, 0] : 0 
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 1, ease: "easeInOut" } 
        }}
      >
        {/* Head */}
        <div className="w-6 h-6 bg-blue-400 rounded-full relative">
          {/* Face */}
          <div className="absolute w-4 h-4 bg-[#fcd4b4] rounded-full bottom-1 right-1">
            {/* Eyes */}
            <div className="absolute w-[2px] h-[2px] bg-black rounded-full top-[6px] left-[3px]" />
            <div className="absolute w-[2px] h-[2px] bg-black rounded-full top-[6px] right-[4px]" />
            {/* Smile */}
            <div className="absolute w-2 h-1 border-b-[1px] border-black rounded-full bottom-1 left-1" />
          </div>
          {/* Hat flaps */}
          <div className="absolute w-2 h-3 bg-blue-400 -left-1 top-2 rounded-full rotate-12" />
        </div>
        
        {/* Body */}
        <div className="w-5 h-4 bg-blue-500 rounded-b-md mx-auto relative z-10" />
        
        {/* Legs - animating when not idle */}
        <div className="flex justify-between w-3 mx-auto -mt-1 relative z-0">
          <motion.div 
            className="w-1.5 h-3 bg-blue-600 rounded-full"
            animate={{ y: isIdle ? 0 : [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 0.3 }}
          />
          <motion.div 
            className="w-1.5 h-3 bg-blue-600 rounded-full"
            animate={{ y: isIdle ? 0 : [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 0.3, delay: 0.15 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PocoyoCursor;
