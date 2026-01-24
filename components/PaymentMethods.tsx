import React from 'react';
import { CreditCard, Banknote, Landmark, CalendarClock } from 'lucide-react';

const PaymentMethods: React.FC = () => {
  return (
    <section className="py-20 bg-charcoal border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
             <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold block mb-2">Transparencia y Facilidad</span>
             <h2 className="font-serif text-3xl text-ivory">Métodos de Pago Aceptados</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {/* Method 1 */}
            <div className="flex flex-col items-center justify-center p-6 border border-white/5 hover:border-gold/30 transition-colors bg-white/5 rounded-sm group">
                <Landmark className="text-gray-400 group-hover:text-gold transition-colors mb-4" size={32} />
                <span className="text-xs uppercase tracking-widest text-gray-300">Transferencia (SPEI)</span>
            </div>

            {/* Method 2 */}
            <div className="flex flex-col items-center justify-center p-6 border border-white/5 hover:border-gold/30 transition-colors bg-white/5 rounded-sm group">
                <CreditCard className="text-gray-400 group-hover:text-gold transition-colors mb-4" size={32} />
                <span className="text-xs uppercase tracking-widest text-gray-300">Tarjetas Crédito/Débito</span>
            </div>

            {/* Method 3 */}
            <div className="flex flex-col items-center justify-center p-6 border border-white/5 hover:border-gold/30 transition-colors bg-white/5 rounded-sm group">
                <Banknote className="text-gray-400 group-hover:text-gold transition-colors mb-4" size={32} />
                <span className="text-xs uppercase tracking-widest text-gray-300">Efectivo en Oficina</span>
            </div>

             {/* Method 4 */}
             <div className="flex flex-col items-center justify-center p-6 border border-white/5 hover:border-gold/30 transition-colors bg-white/5 rounded-sm group">
                <CalendarClock className="text-gray-400 group-hover:text-gold transition-colors mb-4" size={32} />
                <span className="text-xs uppercase tracking-widest text-gray-300">Suscripción (IMSS)</span>
            </div>
        </div>
        
        <p className="text-center text-gray-500 text-xs mt-8 font-sans">
            Política de claridad absoluta en honorarios. Sin letras chiquitas.
        </p>
      </div>
    </section>
  );
};

export default PaymentMethods;