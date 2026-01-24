import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Firma', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Certeza Jurídica', href: '#certainty' },
    { name: 'Testimonios', href: '#reviews' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-obsidian/80 backdrop-blur-md py-3 border-b border-white/5' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Image */}
        <a href="#home" className="block z-50 group relative">
          <img 
            src="https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Perez%20Gonzalez%20Co.%20Abogados/logo-gonzales.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQZXJleiBHb256YWxleiBDby4gQWJvZ2Fkb3MvbG9nby1nb256YWxlcy5wbmciLCJpYXQiOjE3NjkyNzg5MDcsImV4cCI6MTgwMDgxNDkwN30.uRkGpMw4Gfncw30tO4h22P32vEEIlCCYh0Nca6ZgHDg" 
            alt="Pérez González Co." 
            className="h-[60px] w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-sans text-gray-400 hover:text-gold transition-colors duration-300 relative group overflow-hidden"
            >
              <span className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-300">
                {link.name}
              </span>
              <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-gold">
                {link.name}
              </span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border border-white/20 text-[10px] uppercase tracking-widest text-ivory hover:bg-ivory hover:text-obsidian transition-all duration-500"
          >
            Agendar Cita
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ivory z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-obsidian flex flex-col justify-center items-center md:hidden z-40"
            >
              <div className="flex flex-col space-y-10 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-4xl text-ivory hover:text-gold italic transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;