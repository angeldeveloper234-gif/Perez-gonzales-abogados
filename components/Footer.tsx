import React from 'react';
import { ArrowRight, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-obsidian pt-32 pb-12 overflow-hidden">
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Giant CTA */}
        <div className="mb-32 border-b border-white/10 pb-24">
          <span className="font-sans text-xs text-gold tracking-[0.4em] uppercase block mb-8">
            ¿Listo para el siguiente paso?
          </span>
          <a href="#contact" className="group block">
            <h2 className="font-serif text-[12vw] leading-[0.8] text-ivory group-hover:text-gold transition-colors duration-700">
              INICIE SU <br /> 
              <span className="ml-[10vw] italic opacity-50 group-hover:opacity-100 transition-opacity duration-700">DEFENSA</span>
            </h2>
            <div className="mt-8 flex items-center gap-4 group-hover:translate-x-4 transition-transform duration-500">
              <div className="h-[1px] w-24 bg-ivory group-hover:bg-gold"></div>
              <ArrowRight className="text-ivory group-hover:text-gold" size={32} />
            </div>
          </a>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Perez%20Gonzalez%20Co.%20Abogados/logo-gonzales.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQZXJleiBHb256YWxleiBDby4gQWJvZ2Fkb3MvbG9nby1nb256YWxlcy5wbmciLCJpYXQiOjE3NjkyNzg5MDcsImV4cCI6MTgwMDgxNDkwN30.uRkGpMw4Gfncw30tO4h22P32vEEIlCCYh0Nca6ZgHDg" 
              alt="Pérez y González Abogados" 
              className="h-[60px] w-auto object-contain mb-6 opacity-90"
            />
            <p className="font-sans text-gray-500 text-sm leading-relaxed max-w-sm">
              "La justicia se defiende con la razón y no con las armas."
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs text-white uppercase tracking-widest mb-6">Contacto</h4>
            <div className="flex flex-col gap-4 font-sans text-sm text-gray-500">
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold transition-colors">{CONTACT_INFO.email}</a>
              <p>{CONTACT_INFO.locations[0].phone}</p>
              <p>Guadalajara, Jalisco.</p>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs text-white uppercase tracking-widest mb-6">Social</h4>
            <div className="flex gap-6">
              <a 
                href="https://web.facebook.com/people/P%C3%A9rez-y-Gonz%C3%A1lez-abogados/61559029127246/?rdid=Y6uKHxTuOVjZ3kXa&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1ABg1vUrKe%2F%3F_rdc%3D1%26_rdr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end text-[10px] text-gray-700 uppercase tracking-widest font-sans">
          <p>© 2026 Pérez y González Abogados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;