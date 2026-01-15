
import React from 'react';
import { motion } from 'framer-motion';

const IntroText: React.FC = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col justify-center px-8 md:px-24 py-24">
      <div className="max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-4xl md:text-7xl font-bold mb-12 leading-tight"
        >
          The era is calling. <br />
          <span className="text-red-600">Without supercar,</span> <br />
          China couldn't be a real <br />
          automobile powerhouse.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Supercar represents instinct to challenge the limit, as well as the top level of automotive design and manufacturing. For Chinese automakers, building supercars is a 70-year long-lasting dream.
          </p>
          <div className="relative group">
            <div className="aspect-video overflow-hidden">
                <img 
                    src="/images/SSR-Hero3.jpg" 
                    alt="Road through forest" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-red-600 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroText;
