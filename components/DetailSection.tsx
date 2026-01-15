
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface DetailSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alignment: 'left' | 'right';
}

const DetailSection: React.FC<DetailSectionProps> = ({ title, subtitle, description, image, alignment }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="min-h-screen py-24 px-8 md:px-24 flex items-center overflow-hidden">
      <div className={`flex flex-col ${alignment === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center w-full max-w-7xl mx-auto`}>
        <div className="w-full md:w-1/2 overflow-hidden relative aspect-square md:aspect-auto md:h-[700px]">
          <motion.img 
            style={{ y: imgY }}
            src={image} 
            alt={title} 
            className="w-full h-full object-cover scale-110"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h4 className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4">{subtitle}</h4>
            <h3 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">{title}</h3>
            <div className="w-24 h-1 bg-white mb-10"></div>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-md">
              {description}
            </p>
            <button className="mt-12 flex items-center group">
              <span className="text-xs uppercase tracking-widest font-bold group-hover:text-red-600 transition-colors">Read More</span>
              <div className="ml-4 w-12 h-[1px] bg-white group-hover:w-20 group-hover:bg-red-600 transition-all"></div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
