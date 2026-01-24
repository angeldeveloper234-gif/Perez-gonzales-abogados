
import { Review, ServiceItem, ContactInfo } from './types';
import { Briefcase, ScrollText, HeartHandshake, ShieldCheck, Scale } from 'lucide-react';

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Beatriz González",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJGcXykuh-sIrarhlbr5rs3atqfdSFJeavwwph9BfcThaHqrw=w29-h29-p-rp-mo-br100",
    comment: "Excelente servicio, atención clara y profesional en todo momento.",
    rating: 5
  },
  {
    id: 2,
    name: "Eduardo Perez Ochoa",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJbuISrkSDskZ30v4pGdxxDVUO4kryUnXBvr_MrQNgh1QsPbQ=w29-h29-p-rp-mo-ba3-br100",
    comment: "Son muy amables y tienen una gran facilidad para ayudar. La explicación fue excelente.",
    rating: 5
  },
  {
    id: 3,
    name: "Luis Alfonso Hernández Jiménez",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXtP9-u6fsevYFNVienRn8DwjpFBP4cdjeGTBzUN4PNArJDvqg=w29-h29-p-rp-mo-br100",
    comment: "Buenos para negociar, me ahorraron dinero gracias a un convenio.",
    rating: 5
  },
  {
    id: 4,
    name: "Leonel Castañeda",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVKibGfb-Zqbv5E0e3o7woAMrg2NlfBcP2Y0XaEqRgcRdCCrXlo=w29-h29-p-rp-mo-br100",
    comment: "Excelente servicio.",
    rating: 5
  },
  {
    id: 5,
    name: "Fletes y Mudanzas",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWEx4euDQ20N0bV1erCn7F1u-s7SsaB-HFA6gfMuIYE3kDGlSx5Cg=w29-h29-p-rp-mo-ba4-br100",
    comment: "Me gustó mucho la atención y la asesoría.",
    rating: 5
  }
];

export const SERVICES: (ServiceItem & { icon: any })[] = [
  {
    title: "Sector Empresarial y Corporativo",
    description: "Estrategia preventiva y blindaje legal para el funcionamiento óptimo de su negocio.",
    features: [
      { title: "Asesoría Patronal", desc: "Decisiones legales blindadas para empresarios y prevención de riesgos laborales." },
      { title: "Compliance Normativo", desc: "Gestión integral de requerimientos legales y capacitación estratégica en RRHH." },
      { title: "Contratos de Arrendamiento", desc: "Instrumentos para blindar su patrimonio inmobiliario con rentas protegidas." }
    ],
    icon: Briefcase
  },
  {
    title: "Propiedad Industrial e Intelectual",
    description: "Protección de activos intangibles y defensa de la creatividad.",
    features: [
      { title: "Protección de Activos", desc: "Registro, seguimiento y mantenimiento de marcas y patentes (Nacional/Internacional)." },
      { title: "Derechos de Autor", desc: "Defensa y gestión de signos distintivos y mecanismos para patentes." }
    ],
    icon: ScrollText
  },
  {
    title: "Derecho Familiar y Ciclo de Vida",
    description: "Soluciones humanas y ágiles para momentos de transición personal.",
    features: [
      { title: "Divorcio Incausado", desc: "Gestión enfocada en la paz mental y la eficiencia del proceso." },
      { title: "Pensión Alimenticia", desc: "Fijación, modificación y cumplimiento de obligaciones." },
      { title: "Guardia y Custodia", desc: "Defensa del interés superior del menor y regulación de la patria potestad." },
      { title: "Procesos de Adopción", desc: "Acompañamiento experto en trámites ante el DIF para construir nuevas familias." }
    ],
    icon: HeartHandshake
  },
  {
    title: "Seguridad Social y Futuro",
    description: "Garantizando su bienestar médico y financiero a largo plazo.",
    features: [
      { title: "Afiliación al IMSS", desc: "Cobertura médica integral y cotización de semanas ($1,000 MXN/mes)." },
      { title: "Recuperación AFORE", desc: "Hacemos valer su derecho legal para recuperar sus fondos de retiro." },
      { title: "Asesoría por Desempleo", desc: "Gestión de apoyos y trámites específicos en transición laboral." }
    ],
    icon: ShieldCheck
  },
  {
    title: "Constitucional y Amparo",
    description: "Litigio de alto nivel para la defensa de derechos fundamentales.",
    features: [
      { title: "Juicio de Amparo", desc: "Defensa en materia laboral y administrativa." },
      { title: "Acciones de Inconstitucionalidad", desc: "Nulidad de multas, sanciones y controversias constitucionales." }
    ],
    icon: Scale
  },
];

export const CONTACT_INFO: ContactInfo = {
  locations: [
    {
      name: "Sede Jardines del Country",
      address: "Donceles 2298A, Col. Jardines del Country, Guadalajara, Jal.",
      phone: "33 2154 5725"
    },
    {
      name: "Sede Centro Corporativo",
      address: "Av. 16 de Septiembre #730, Piso 2, Despacho 203/205, Condominio Guadalajara.",
      phone: "33 2919 9200"
    }
  ],
  email: "perezygonzalezabogados2@gmail.com",
  whatsapp: "33 1526 5755",
  schedule: "Lunes a Viernes: 09:00 a.m. – 05:00 p.m."
};

export const WHATSAPP_LINK = "https://wa.me/523315265755";
export const QUOTE = "“La justicia se defiende con la razón y no con las armas.”";
export const QUOTE_AUTHOR = "Pérez y González Abogados";
