
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference"
    >
      <div className="flex items-center space-x-2">
        <img src="/images/logo-icon.png" alt="Hyper Logo" className="w-8 h-8 object-contain" />
        <span className="text-2xl font-black tracking-tighter uppercase italic text-white">hyptec</span>
      </div>

      <div className="hidden md:flex space-x-12">
        {['Gallery', 'Performance', 'Engineering', 'Interior'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-xs uppercase tracking-[0.3em] font-bold text-white hover:text-red-500 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <button className="w-8 h-8 flex flex-col justify-between group cursor-pointer">
        <span className="w-full h-[2px] bg-white group-hover:bg-red-500 transition-colors"></span>
        <span className="w-2/3 h-[2px] bg-white group-hover:bg-red-500 transition-colors self-end"></span>
        <span className="w-full h-[2px] bg-white group-hover:bg-red-500 transition-colors"></span>
      </button>
    </motion.nav>
  );
};

export default Navbar;
