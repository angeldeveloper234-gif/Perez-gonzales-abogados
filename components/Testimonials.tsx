import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';
import { Review } from '../types';

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div
    className="flex-shrink-0 w-[300px] md:w-[450px] bg-white/5 border border-white/5 p-6 md:p-10 rounded-sm hover:border-gold/30 hover:bg-white/[0.07] transition-all duration-500 group"
  >
    <div className="flex items-start justify-between mb-6 md:mb-8">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-gold transition-colors">
            <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-gold rounded-full p-1">
            <Quote size={8} className="text-obsidian fill-current" />
          </div>
        </div>
        <div>
          <h4 className="font-sans text-xs md:text-sm font-bold text-ivory">{review.name}</h4>
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

    <p className="font-serif text-base md:text-xl text-gray-300 italic leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity line-clamp-4 md:line-clamp-none">
      "{review.comment}"
    </p>

    <div className="mt-6 md:mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
      <span className="text-[10px] uppercase tracking-widest text-gold">Verificado</span>
      <img src="/google-brands-solid-full.svg" alt="Google Review" className="h-4 w-auto grayscale group-hover:grayscale-0 transition-all" />
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  // Duplicate array for infinite scroll effect
  const reviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-obsidian relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12 md:mb-20 relative z-10">
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

      {/* DESKTOP: Single Row (Standard) */}
      <div className="hidden md:block relative w-full overflow-hidden mask-gradient-horizontal">
        <motion.div
          className="flex gap-8 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {reviews.map((review, i) => (
            <ReviewCard key={`desktop-${i}`} review={review} />
          ))}
        </motion.div>
      </div>

      {/* MOBILE: Single Row */}
      <div className="md:hidden relative w-full overflow-hidden mask-gradient-horizontal">
        <motion.div
          className="flex gap-4 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {reviews.map((review, i) => (
            <ReviewCard key={`mobile-${i}`} review={review} />
          ))}
        </motion.div>
      </div>

      {/* Gradient Masks for edges */}
      <div className="absolute top-0 left-0 h-full w-12 md:w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-12 md:w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;