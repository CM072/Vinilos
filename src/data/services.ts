export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  price: string;
}

export const services: Service[] = [
  {
    id: "vinilos-decorativos",
    title: "Vinilos Decorativos",
    description: "Personaliza tus espacios con diseños únicos y modernos para hogares y oficinas",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80",
    features: [
      "Diseños personalizados",
      "Material de alta calidad",
      "Instalación profesional",
      "Garantía de 2 años"
    ],
    price: "Desde 25€/m²"
  },
  {
    id: "tipo-de-lona",
    title: "Tipos de Lona",
    description: "Lonas de alta resistencia para exteriores e interiores con impresión de alta calidad",
    image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&q=80",
    features: [
      "Material resistente",
      "Impresión de alta calidad",
      "Instalación incluida",
      "Garantía de 3 años"
    ],
    price: "Desde 20€/m²"
  },
  {
    id: "vinilos-vehiculos",
    title: "Vinilos para Vehículos",
    description: "Transforma tu flota con rotulación vehicular profesional y duradera",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80",
    features: [
      "Vinilo de alta resistencia",
      "Diseño personalizado",
      "Instalación profesional",
      "Garantía de 5 años"
    ],
    price: "Desde 200€/vehículo"
  },
  {
    id: "senaletica-comercial",
    title: "Señalética Comercial",
    description: "Mejora la experiencia de tus clientes con señalización clara y profesional",
    image: "https://images.unsplash.com/photo-1579487785973-74d2ca7d74a2?auto=format&fit=crop&q=80",
    features: [
      "Diseño corporativo",
      "Materiales duraderos",
      "Instalación incluida",
      "Señalización normativa"
    ],
    price: "Desde 40€/unidad"
  },
  {
    id: "vinilos-escaparates",
    title: "Vinilos para Escaparates",
    description: "Maximiza el impacto visual de tu tienda con vinilos llamativos y elegantes",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    features: [
      "Vinilo microperforado",
      "Diseño personalizado",
      "Instalación profesional",
      "Fácil mantenimiento"
    ],
    price: "Desde 35€/m²"
  },
  {
    id: "impresion-gran-formato",
    title: "Impresión Gran Formato",
    description: "Destaca en eventos y ferias con impresiones de alta calidad en gran formato",
    image: "https://images.unsplash.com/photo-1588412079929-790b9f593d8e?auto=format&fit=crop&q=80",
    features: [
      "Alta resolución",
      "Colores vibrantes",
      "Múltiples materiales",
      "Acabados profesionales"
    ],
    price: "Desde 45€/m²"
  }
];