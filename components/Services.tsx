import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';

// Images for 5 Categories
const SERVICES_WITH_IMAGES = SERVICES.map((s, i) => ({
  ...s,
  img: [
    "https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=1000&auto=format&fit=crop", // Divorcio (Family/Papers)
    "https://images.unsplash.com/photo-1582213726894-469b76779435?q=80&w=1000&auto=format&fit=crop", // Juicios Sucesorios (Antique Keys/Documents)
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop", // Seguridad Social (Planning/Future)
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000&auto=format&fit=crop"  // Defensa Administrativa (Pillars/Authority)
  ][i % 4]
}));

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="services"
      className="py-32 bg-obsidian relative overflow-hidden"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="container mx-auto px-6 relative z-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-ivory"
          >
            Áreas de <span className="text-gold italic">Práctica</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-sm text-gray-400 max-w-xs mt-6 md:mt-0 text-right leading-relaxed"
          >
            Grilla de Prestigio. Soluciones precisas para desafíos complejos.
          </motion.p>
        </div>

        {/* The List */}
        <div className="flex flex-col">
          {SERVICES_WITH_IMAGES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-white/10 py-12 cursor-pointer transition-colors duration-500 hover:border-gold/50"
            >
              <div className="flex justify-between items-start md:items-center relative z-10">
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
                  <span className="font-sans text-xs text-gold/50 tracking-widest">0{index + 1}</span>
                  <div className="flex flex-col">
                    <h3 className={`text-2xl md:text-5xl transition-all duration-500 font-medium ${hoveredIndex === index ? 'font-serif italic text-gold translate-x-4' : 'font-serif text-white'}`}>
                      {service.title}
                    </h3>
                  </div>
                </div>
                <ArrowUpRight
                  className={`transition-all duration-500 flex-shrink-0 ml-4 ${hoveredIndex === index ? 'text-gold scale-125 rotate-45' : 'text-gray-500'}`}
                  size={36}
                />
              </div>

              {/* Accordion Content */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8 md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-10 pb-4">
                      {/* Main Description */}
                      <div className="col-span-1 md:col-span-2 mb-4">
                        <p className="font-sans text-white text-lg md:text-xl leading-relaxed max-w-3xl border-l-2 border-gold pl-6 py-2 shadow-sm">
                          {service.description}
                        </p>
                      </div>

                      {/* Sub-services / Features */}
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="pl-6 pt-2 border-l border-white/5 md:border-none">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                            <h4 className="font-serif text-gold-light text-xl font-medium tracking-wide">{feature.title}</h4>
                          </div>
                          <p className="font-sans text-gray-300 text-base leading-relaxed tracking-wide pl-3.5">
                            {feature.desc}
                          </p>
                        </div>
                      ))}

                      {/* WhatsApp CTA */}
                      <div className="col-span-1 md:col-span-2 mt-4 pt-6 border-t border-white/5 flex justify-end">
                        <a
                          href={`https://wa.me/523315265755?text=${encodeURIComponent(`Hola, me interesa obtener asesoría sobre: ${service.title}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-8 py-3 bg-white/5 border border-gold/20 text-gold hover:bg-gold hover:text-black transition-all duration-500 font-sans tracking-[0.1em] text-xs rounded-sm group/btn"
                        >
                          CONTACTAR POR WHATSAPP
                          <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Floating Image Cursor Follower */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 0.2, // Changed to 20% opacity as requested
              scale: 1,
              x: mousePos.x - 200, // Center the image (width 400 / 2)
              y: mousePos.y - 150  // Center the image (height 300 / 2)
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed top-0 left-0 w-[400px] h-[300px] z-10 pointer-events-none hidden md:block overflow-hidden rounded-sm border border-gold/10"
          >
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10"></div>
              <img
                src={SERVICES_WITH_IMAGES[hoveredIndex].img}
                alt="Service Preview"
                className="w-full h-full object-cover grayscale brightness-90 contrast-110"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Services;