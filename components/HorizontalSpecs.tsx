
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalSpecs: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const specs = [
    { label: "Acceleration", value: "1.9s", unit: "0-100km/h", desc: "Superfast car on the ground." },
    { label: "Max Power", value: "1225", unit: "HP", desc: "Electric drive technology innovation." },
    { label: "Max Torque", value: "12000", unit: "N·m", desc: "Peak torque on the wheels." },
    { label: "Body", value: "100%", unit: "Carbon Fiber", desc: "Aerospace grade material usage." }
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-24 px-24">
          <div className="min-w-[40vw] flex flex-col justify-center">
            <h3 className="text-8xl font-black uppercase tracking-tighter text-red-600 mb-4 italic">Pinnacle</h3>
            <p className="text-2xl text-gray-500 uppercase tracking-widest">Performance Metrics</p>
          </div>
          
          {specs.map((spec, i) => (
            <div key={i} className="min-w-[60vw] md:min-w-[30vw] flex flex-col justify-center border-l border-white/10 pl-12">
              <span className="text-red-600 uppercase tracking-widest font-bold mb-8 text-sm">{spec.label}</span>
              <div className="flex items-baseline mb-4">
                <span className="text-8xl md:text-9xl font-black">{spec.value}</span>
                <span className="text-2xl ml-4 font-light text-gray-400 uppercase">{spec.unit}</span>
              </div>
              <p className="text-xl text-gray-500 max-w-xs">{spec.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalSpecs;
