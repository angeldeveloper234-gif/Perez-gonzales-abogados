import React from 'react';
import { motion } from 'framer-motion';
import { FileSignature, ShieldAlert, Scale } from 'lucide-react';

const LegalCertainty: React.FC = () => {
  return (
    <section id="certainty" className="py-24 bg-ivory text-obsidian relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Col: High Impact Questions */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/3 pt-12"
            >
                <div className="border-l-4 border-gold pl-6 mb-8">
                    <h2 className="font-serif text-5xl md:text-6xl leading-none mb-4">
                        Certeza <br /><span className="italic text-gold-dim">Jurídica</span>
                    </h2>
                    <span className="font-sans text-xs tracking-[0.3em] uppercase text-charcoal/60">Anotaciones Marginales</span>
                </div>
                
                <div className="space-y-8 mt-12">
                    <div className="group">
                        <h3 className="font-serif text-2xl italic mb-2 group-hover:text-gold-dim transition-colors">¿Realmente ya se divorció?</h3>
                        <p className="font-sans text-charcoal/70 text-sm">Muchas personas creen estar legalmente separadas cuando, ante la ley, su estado civil permanece intacto.</p>
                    </div>
                    <div className="group">
                         <h3 className="font-serif text-2xl italic mb-2 group-hover:text-gold-dim transition-colors">¿Sus documentos reflejan su realidad?</h3>
                         <p className="font-sans text-charcoal/70 text-sm">La discrepancia entre su vida real y sus registros oficiales es la principal causa de disputas patrimoniales.</p>
                    </div>
                </div>
            </motion.div>

            {/* Right Col: Solutions */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-2/3 bg-white p-10 md:p-16 shadow-2xl border border-gray-100"
            >
                <p className="font-serif text-3xl leading-relaxed text-charcoal mb-12">
                    Gestionamos las modificaciones y adiciones en los <span className="text-gold-dim italic border-b border-gold-dim">márgenes de sus documentos legales</span> para garantizar su seguridad y blindar su futuro.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                        <div className="mt-1 text-gold-dim"><FileSignature size={24} /></div>
                        <div>
                            <h4 className="font-sans font-bold uppercase text-xs tracking-widest mb-2">Aclaraciones</h4>
                            <p className="text-sm text-gray-600">Rectificación de datos oficiales y corrección de errores en actas.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                        <div className="mt-1 text-gold-dim"><ShieldAlert size={24} /></div>
                        <div>
                            <h4 className="font-sans font-bold uppercase text-xs tracking-widest mb-2">Estado Civil</h4>
                            <p className="text-sm text-gray-600">Inscripción correcta de divorcio, matrimonio y defunción.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="mt-1 text-gold-dim"><Scale size={24} /></div>
                        <div>
                            <h4 className="font-sans font-bold uppercase text-xs tracking-widest mb-2">Propiedad</h4>
                            <p className="text-sm text-gray-600">Registro de gravámenes, herencias y sucesiones en escrituras.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
      
      {/* Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-multiply"></div>
    </section>
  );
};

export default LegalCertainty;