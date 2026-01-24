import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Users, FileCheck } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative group"
          >
            <div className="absolute inset-0 border border-gold/20 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <div className="relative overflow-hidden h-[600px] w-full bg-obsidian">
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop" 
                alt="Oficina Legal Profesional" 
                className="w-full h-full object-cover grayscale brightness-75 contrast-125 transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
              Nuestra Esencia
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-8 leading-tight">
              Detrás de cada expediente, <br />
              <span className="italic text-gray-400">protegemos un futuro.</span>
            </h2>
            
            <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed mb-10 border-l-2 border-white/10 pl-6">
              En Pérez González Co., entendemos que el derecho no es solo técnica, es humanidad. 
              Ofrecemos soluciones jurídicas claras y efectivas, fusionando el rigor profesional 
              con un acompañamiento cercano. No solo resolvemos conflictos; construimos certeza.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {/* Feature 1 */}
              <div className="flex gap-4 group">
                <div className="mt-1 text-gold opacity-50 group-hover:opacity-100 transition-opacity"><Users size={24} /></div>
                <div>
                  <h3 className="font-serif text-xl text-ivory mb-2">Defensa Humana y Familiar</h3>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed uppercase tracking-wide">
                    Divorcios justos, pensiones alimenticias y procesos sucesorios. 
                    Damos orden y paz al patrimonio y a las relaciones familiares.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 group">
                <div className="mt-1 text-gold opacity-50 group-hover:opacity-100 transition-opacity"><FileCheck size={24} /></div>
                <div>
                  <h3 className="font-serif text-xl text-ivory mb-2">Gestión y Seguridad Social</h3>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed uppercase tracking-wide">
                    Desde corrección de actas hasta trámites ante AFORE e IMSS. 
                    Facilitamos el cumplimiento de obligaciones y la recuperación de derechos.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 group">
                <div className="mt-1 text-gold opacity-50 group-hover:opacity-100 transition-opacity"><Scale size={24} /></div>
                <div>
                  <h3 className="font-serif text-xl text-ivory mb-2">Ética y Compromiso</h3>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed uppercase tracking-wide">
                    Defendemos derechos con estrategias ágiles (multas, convenios). 
                    Representación legal con lealtad absoluta.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>
    </section>
  );
};

export default AboutUs;