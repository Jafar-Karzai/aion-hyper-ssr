
import React from 'react';
import { motion } from 'framer-motion';

const ButterflyDoors: React.FC = () => {
  return (
    <section className="relative h-[150vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-full h-full"
            >
                <img 
                    src="public/images/butterfly-doors3.jpg" 
                    alt="Butterfly Doors" 
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </div>

        <div className="relative z-10 px-8 md:px-24">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-2xl"
            >
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8">
                    Wind-suction <br />
                    <span className="text-red-600">Butterfly Wings</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                    Automatic opening and closing art. Since its birth 50 years ago, the butterfly doors can be opened and closed automatically with elegance.
                </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ButterflyDoors;
