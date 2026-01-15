
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10 opacity-60"></div>
        {/* Primary Product Image - Red Hyper SSR */}
        <img 
          src="/images/SSR-Hero2.jpg" 
          alt="Hyper SSR" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 text-center px-4"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-red-600 font-bold uppercase tracking-[0.5em] mb-4 text-sm md:text-base"
        >
          Hi-tech artwork
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-7xl md:text-[12rem] font-black leading-none tracking-tighter uppercase"
        >
          Hyper SSR
        </motion.h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="h-[2px] bg-red-600 my-8 max-w-lg mx-auto"
        />
        <p className="text-xl md:text-3xl font-light tracking-widest text-gray-300">CHINA SUPERCAR</p>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.4em] mb-4 opacity-50">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-white/30 relative"
        >
            <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
