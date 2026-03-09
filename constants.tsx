
import { Review, ServiceItem, ContactInfo } from './types';
import { Briefcase, ScrollText, HeartHandshake, ShieldCheck, Scale } from 'lucide-react';

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Luis Alfonso Hernández Jiménez",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXtP9-u6fsevYFNVienRn8DwjpFBP4cdjeGTBzUN4PNArJDvqg=w100-h100-p-rp-mo-br100",
    comment: "Bueno para negociar, me ahorraron dinero, gracias a un convenio.",
    rating: 5
  },
  {
    id: 2,
    name: "Fletes y Mudanzas",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWEx4euDQ20N0bV1erCn7F1u-s7SsaB-HFA6gfMuIYE3kDGlSx5Cg=w100-h100-p-rp-mo-ba4-br100",
    comment: "Me gustó mucho la atención y la asesoría que me brindaron en mi problema, muchas gracias.",
    rating: 5
  },
  {
    id: 3,
    name: "Ara Gon",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVV615Grb92F0XE1lHWEmFG9dnPQvfKsljH96VcdQT-Ed7e_3zJ=w100-h100-p-rp-mo-br100",
    comment: "Muy profesionales, gracias!",
    rating: 5
  },
  {
    id: 4,
    name: "Eduardo Perez Ochoa",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJbuISrkSDskZ30v4pGdxxDVUO4kryUnXBvr_MrQNgh1QsPbQ=w100-h100-p-rp-mo-ba3-br100",
    comment: "Son muy amables y tienen una gran facilidad para ayudar. La explicación fue excelente, 9 de 10.",
    rating: 4
  },
  {
    id: 5,
    name: "Beatriz González",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJGcXykuh-sIrarhlbr5rs3atqfdSFJeavwwph9BfcThaHqrw=w100-h100-p-rp-mo-br100",
    comment: "Excelente servicio.",
    rating: 5
  },
  {
    id: 6,
    name: "Leonel Castañeda",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVKibGfb-Zqbv5E0e3o7woAMrg2NlfBcP2Y0XaEqRgcRdCCrXlo=w100-h100-p-rp-mo-br100",
    comment: "Excelente servicio.",
    rating: 5
  },
  {
    id: 7,
    name: "Rosa Isela Gonzalez",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJdWy3Q6Ww1pn-eNZY7qHyJNCSKNKH6YbxyC_YBcYb9W2-viQ=w100-h100-p-rp-mo-br100",
    comment: "Excelente servicio.",
    rating: 5
  }
];

export const SERVICES: (ServiceItem & { icon: any })[] = [
  {
    title: "Divorcio",
    description: "Asesoría estratégica para procesos de separación con enfoque en soluciones pacíficas y efectivas.",
    features: [
      { title: "Enfoque Jurídico", desc: "Especialistas en procesos de mutuo consentimiento y resolución de conflictos familiares." },
      { title: "Custodia y Convivencia", desc: "Diseño y negociación de convenios protectores para el bienestar de los menores." },
      { title: "Pensión Alimenticia", desc: "Gestión integral para la fijación y aseguramiento del sustento familiar." }
    ],
    icon: HeartHandshake
  },
  {
    title: "Juicios Sucesorios",
    description: "Regularización patrimonial y mediación experta para la transición ordenada de bienes.",
    features: [
      { title: "Intestados y Testamentos", desc: "Acompañamiento legal completo en la adjudicación de herencias y bienes raíces." },
      { title: "Regularización de Propiedades", desc: "Trámites legales para dar certeza jurídica a su patrimonio inmobiliario." },
      { title: "Mediación entre Herederos", desc: "Facilitamos acuerdos justos para evitar litigios prolongados y costosos." }
    ],
    icon: ScrollText
  },
  {
    title: "Seguridad Social",
    description: "Cumplimiento normativo y defensa estratégica en materia de seguridad social y laboral.",
    features: [
      { title: "Defensa IMSS", desc: "Atención especializada ante auditorías, multas y requerimientos injustificados." },
      { title: "Altas Patronales", desc: "Asesoría técnica para el correcto registro y gestión de sus obligaciones como empleador." },
      { title: "Estrategia de Seguridad", desc: "Diseño de modelos de cumplimiento para prevenir riesgos financieros y legales." }
    ],
    icon: ShieldCheck
  },
  {
    title: "Defensa Administrativa",
    description: "Protección legal contra actos de autoridad y resoluciones administrativas arbitrarias.",
    features: [
      { title: "Juicios de Nulidad", desc: "Impugnación efectiva de actos administrativos y fiscales ante tribunales competentes." },
      { title: "Amparo Administrativo", desc: "Protección constitucional contra leyes o actos que vulneren sus derechos." },
      { title: "Gestión ante Autoridades", desc: "Representación profesional en procedimientos y trámites de naturaleza administrativa." }
    ],
    icon: Scale
  },
];

export const CONTACT_INFO: ContactInfo = {
  locations: [
    {
      name: "Sede Jardines del Country",
      address: "Donceles 2298A, Col. Jardines del Country, 44210 Guadalajara, Jal., México",
      phone: "33 2154 5725"
    }
  ],
  email: "perezygonzalezabogados2@gmail.com",
  whatsapp: "33 1526 5755",
  schedule: "Lunes a Viernes: 09:00 a.m. – 05:00 p.m."
};

export const WHATSAPP_LINK = "https://wa.me/523315265755";
export const QUOTE = "“La justicia se defiende con la razón y no con las armas.”";
export const QUOTE_AUTHOR = "Pérez y González Abogados";
