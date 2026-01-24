import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <section 
      ref={containerRef} 
      id="reviews" 
      className="py-40 bg-obsidian overflow-hidden border-b border-white/5"
    >
      <div className="container mx-auto px-6 mb-20">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-gray-500 block mb-4">
          La Voz de la Experiencia
        </span>
      </div>

      {/* Kinetic Strip 1 */}
      <div className="relative w-full whitespace-nowrap mb-12">
        <motion.div style={{ x: x1 }} className="flex gap-12 items-center">
          {REVIEWS.slice(0, 3).map((review, i) => (
            <div key={i} className="inline-block">
              <h3 className="font-serif text-6xl md:text-8xl text-transparent text-stroke-white opacity-30 hover:opacity-100 hover:text-ivory transition-all duration-500 cursor-default px-12">
                "{review.comment.split(' ').slice(0, 6).join(' ')}..."
              </h3>
              <p className="font-sans text-gold text-sm tracking-widest uppercase pl-14 mt-4 opacity-50">
                — {review.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Kinetic Strip 2 (Reverse) */}
      <div className="relative w-full whitespace-nowrap">
        <motion.div style={{ x: x2 }} className="flex gap-12 items-center justify-end">
          {REVIEWS.slice(3, 6).map((review, i) => (
            <div key={i} className="inline-block">
               <h3 className="font-serif text-6xl md:text-8xl text-ivory opacity-80 px-12 italic">
                {review.comment.length > 30 ? "Excelente servicio y atención" : review.comment}
              </h3>
              <p className="font-sans text-gold text-sm tracking-widest uppercase pl-14 mt-4 opacity-50">
                 — {review.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .text-stroke-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;