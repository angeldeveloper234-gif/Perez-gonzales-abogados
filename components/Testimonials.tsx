import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  // Duplicate array for infinite scroll effect
  const reviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="py-32 bg-obsidian relative overflow-hidden">
      <div className="container mx-auto px-6 mb-20 relative z-10">
        <div className="flex flex-col items-center text-center">
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-6 block">
            Reputación & Confianza
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">
            La Voz de Nuestros <span className="italic text-gray-500">Aliados</span>
            </h2>
            <div className="h-[1px] w-24 bg-white/10 mt-4"></div>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden mask-gradient-horizontal">
        <motion.div 
            className="flex gap-8 px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
                duration: 60, 
                ease: "linear", 
                repeat: Infinity 
            }}
        >
          {reviews.map((review, i) => (
            <div 
                key={`${review.id}-${i}`} 
                className="flex-shrink-0 w-[350px] md:w-[450px] bg-white/5 border border-white/5 p-8 md:p-10 rounded-sm hover:border-gold/30 hover:bg-white/[0.07] transition-all duration-500 group"
            >
              <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                      <div className="relative">
                          <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-gold transition-colors">
                              <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute -bottom-1 -right-1 bg-gold rounded-full p-1">
                              <Quote size={8} className="text-obsidian fill-current" />
                          </div>
                      </div>
                      <div>
                          <h4 className="font-sans text-sm font-bold text-ivory">{review.name}</h4>
                          <div className="flex gap-0.5 mt-1">
                              {[...Array(5)].map((_, starIndex) => (
                                  <Star 
                                    key={starIndex} 
                                    size={12} 
                                    className={`${starIndex < review.rating ? "text-gold fill-gold" : "text-gray-700"} transition-colors`} 
                                  />
                              ))}
                          </div>
                      </div>
                  </div>
              </div>

              <p className="font-serif text-lg md:text-xl text-gray-300 italic leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                "{review.comment}"
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] uppercase tracking-widest text-gold">Verificado</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google Review" className="h-4 w-auto grayscale group-hover:grayscale-0 transition-all" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Masks for edges */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;