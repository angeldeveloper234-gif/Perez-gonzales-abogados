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
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-[#25D366]/40 transition-shadow duration-300 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <MessageCircle size={32} className="text-white" />
      <span className="absolute right-full mr-4 bg-white text-navy-900 px-3 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden md:block">
        ¡Contáctanos!
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
