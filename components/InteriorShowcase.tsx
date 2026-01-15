
import React from 'react';
import { motion } from 'framer-motion';

const InteriorShowcase: React.FC = () => {
  const images = [
    "public/images/SSR-Hero3.jpg",
    "public/images/interior-2.jpg",
    "public/images/SSR-Hero1.jpg",
    "public/images/airospace-2.jpg"
  ];

  return (
    <section className="bg-[#050505] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="max-w-2xl"
            >
                <h4 className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4">Cockpit Experience</h4>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Topspeed Mental Flow</h3>
            </motion.div>
            <p className="text-gray-500 max-w-xs text-sm uppercase tracking-widest font-bold">
                A 14.6-inch center console and an 8.8-inch dashboard equipped with a dedicated interface for racing.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {images.map((img, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                >
                    <img src={img} alt="Interior detail" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </motion.div>
            ))}
        </div>
        
        <div className="mt-24 h-[1px] bg-white/10 w-full relative">
            <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-red-600 -translate-y-full"></div>
        </div>
      </div>
    </section>
  );
};

export default InteriorShowcase;
