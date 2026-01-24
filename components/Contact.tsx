import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CalendarCheck, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por contactarnos. Nos pondremos en contacto con usted a la brevedad.');
    setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-obsidian relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-2 block">Contáctanos</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Estamos para defender sus intereses</h2>
            
            <p className="text-gray-400 mb-10 leading-relaxed">
              Agende una cita para analizar su caso. Nuestros expertos en las dos sedes están listos para recibirle.
            </p>

            <div className="space-y-10">
              {/* Sedes */}
              <div className="space-y-6">
                 {CONTACT_INFO.locations.map((loc, idx) => (
                    <div key={idx} className="flex items-start p-4 border border-white/10 bg-white/5 rounded-sm hover:border-gold/30 transition-colors">
                        <div className="text-gold mr-4 mt-1">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h4 className="text-white font-serif text-lg mb-1">{loc.name}</h4>
                            <p className="text-gray-400 text-sm mb-2">{loc.address}</p>
                            <div className="flex items-center text-gold text-sm gap-2">
                                <Phone size={14} />
                                <span>{loc.phone}</span>
                            </div>
                        </div>
                    </div>
                 ))}
              </div>

              {/* General Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div className="flex items-start">
                    <div className="text-gray-500 mr-3"><MessageCircle size={20} /></div>
                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-1">WhatsApp</h4>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gold transition-colors text-sm">{CONTACT_INFO.whatsapp}</a>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="text-gray-500 mr-3"><Mail size={20} /></div>
                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-1">Email</h4>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-gold transition-colors text-sm">{CONTACT_INFO.email}</a>
                    </div>
                </div>

                 <div className="flex items-start col-span-1 md:col-span-2">
                    <div className="text-gray-500 mr-3"><Clock size={20} /></div>
                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-1">Horario de Atención</h4>
                        <p className="text-gray-400 text-sm">{CONTACT_INFO.schedule}</p>
                    </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-charcoal p-8 md:p-10 border border-white/5"
          >
            <h3 className="font-serif text-2xl text-white mb-6">Envíenos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Nombre</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-obsidian border border-white/10 text-white p-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Apellidos</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-obsidian border border-white/10 text-white p-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-obsidian border border-white/10 text-white p-3 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-obsidian border border-white/10 text-white p-3 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-obsidian border border-white/10 text-white p-3 focus:outline-none focus:border-gold transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="w-full bg-gold text-obsidian font-bold uppercase tracking-widest py-4 hover:bg-gold-light transition-all duration-300"
                >
                  Enviar Mensaje
                </button>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full border border-gold text-gold font-bold uppercase tracking-widest py-4 hover:bg-gold hover:text-obsidian transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <CalendarCheck size={18} />
                  Agendar Cita en Línea (Gratis)
                </a>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;