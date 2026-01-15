
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroText from './components/IntroText';
import HorizontalSpecs from './components/HorizontalSpecs';
import DetailSection from './components/DetailSection';
import ButterflyDoors from './components/ButterflyDoors';
import InteriorShowcase from './components/InteriorShowcase';
import Footer from './components/Footer';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Overall scroll progress for global effects if needed
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative bg-black min-h-screen">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-[100]"
        style={{ scaleX: scaleProgress }}
      />

      <Navbar />
      
      <main>
        {/* Hero Section - The "Hook" */}
        <Hero />

        {/* The Era Is Calling - Deep Parallax Intro */}
        <IntroText />

        {/* 1.9s Performance - Horizontal Scroll Experience */}
        <HorizontalSpecs />

        {/* Tech Detail 1 - Carbon Fiber & Engineering */}
        <DetailSection 
          title="100% Carbon Fiber"
          subtitle="Movable ten million level collectible"
          description="The car body alone is worth ten million. Carbon fiber is the star of supercar manufacturing materials. Hyper SSR only chooses the optimal material, without consideration of price."
          image="/images/carbon-fiber.jpg"
          alignment="left"
        />

        {/* Feature: Butterfly Wings */}
        <ButterflyDoors />

        {/* Detail Section 2 - Aerospace Precision */}
        <DetailSection 
          title="Aerospace Precision"
          subtitle="Precision welding brings full body stiffness"
          description="A pioneering move not to compromise on materials. The birth of extraordinary works requires the creation of conditions even without proper conditions."
          image="/images/airospace-3.jpg"
          alignment="right"
        />

        {/* Interior Showreel */}
        <InteriorShowcase />

        {/* Final CTA / Summary */}
        <section className="h-screen flex items-center justify-center bg-black overflow-hidden relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center z-10 px-4"
          >
            <h2 className="text-6xl md:text-9xl font-black mb-6 uppercase tracking-tighter">Hyper SSR</h2>
            <p className="text-xl md:text-2xl text-red-600 font-bold uppercase tracking-[0.2em] mb-12">China's First Supercar Production Line</p>
            <button className="px-12 py-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 font-bold text-lg uppercase tracking-widest">
              Explore the Collection
            </button>
          </motion.div>
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img 
              src="/images/airospace-1.jpg" 
              className="w-full h-full object-cover"
              alt="Background" 
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
