import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Label */}
      <span className="mr-4 bg-obsidian/80 backdrop-blur-md border border-gold/30 text-gold px-4 py-2 rounded-sm text-[10px] font-sans tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 pointer-events-none hidden md:block uppercase">
        ¿DUDA LEGAL URGENTE?
      </span>

      {/* Button Circle */}
      <div className="w-16 h-16 bg-gold flex items-center justify-center rounded-full shadow-2xl relative overflow-hidden group-hover:bg-white transition-colors duration-500">
        <MessageCircle size={28} className="text-black relative z-10" />
        {/* Shine animation */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
