import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative w-full h-screen min-h-[800px] overflow-hidden flex items-center justify-center bg-obsidian">
      
      {/* Cinematic Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Abstract Brutalist Architecture */}
        <img 
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop" 
          alt="Abstract Structure" 
          className="w-full h-full object-cover grayscale opacity-60"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        
        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="mb-8 overflow-hidden"
        >
          <span className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-gold/80 border border-gold/30 px-4 py-2 rounded-full backdrop-blur-md">
            Pérez González Co.
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="max-w-6xl mx-auto overflow-hidden">
          <motion.h1 
            initial={{ y: "120%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="font-serif text-5xl md:text-8xl lg:text-[7rem] leading-[0.9] text-ivory tracking-tight"
          >
            LA EXCELENCIA LEGAL <br />
            <span className="italic text-gold font-light">REDEFINIDA</span>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-8 font-sans text-sm md:text-base text-gray-400 max-w-lg leading-relaxed tracking-wide"
        >
          Estrategia jurídica de alta precisión para corporativos y patrimonios. 
          Donde la ley se encuentra con la sofisticación.
        </motion.p>
      </div>

      {/* Floating Scroll CTA */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="pointer-events-auto"
        >
          <a href="#services" className="group flex flex-col items-center gap-4 cursor-pointer">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 group-hover:text-gold transition-colors">Descubrir</span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors duration-500 backdrop-blur-sm bg-white/5">
              <ArrowDown size={16} className="text-white group-hover:text-gold animate-bounce" />
            </div>
          </a>
        </motion.div>
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none z-30"></div>
    </section>
  );
};

export default Hero;