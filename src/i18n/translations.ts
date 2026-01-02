export const translations = {
  es: {
    nav: {
      collection: "Colección",
      help: "Ayuda",
      contact: "Contacto",
    },
    hero: {
      pill: "Artículos nuevos",
      title: "De fanáticos de los relojes,<br />para ti.",
      description: "<b>Piezas nuevas</b> con el <b>visto bueno de coleccionistas</b>. Pasión por los <b>buenos detalles</b>. Encuentra tu próximo reloj favorito aquí",
      viewCatalog: "Ver Catálogo Privado",
      whyUs: "Por qué nosotros",
      instagram: "monet.label",
    },
    catalog: {
      title: "Curaduría Selecta",
      subtitle: "Piezas destacadas",
      stockAvailable: "STOCK DISPONIBLE",
      viewDetails: "Ver Detalles",
      auto: "Auto",
      mostWanted: "Más Buscado",
      cultPiece: "Pieza de Culto",
      bestValue: "Best Value",
    },
    findWatch: {
      title: "¿No encuentras lo que buscas?",
      description: "Tenemos acceso a una red exclusiva de distribuidores. Si hay un reloj específico que deseas, lo buscamos y conseguimos para ti. Mismo servicio, misma garantía.",
      cta: "Cuéntanos qué buscas",
    },
    values: {
      title: "¿Por qué comprar con nosotros?",
      subtitle: "Calidad, confianza y experiencia de fanáticos",
      authenticity: {
        title: "Autenticidad verificada",
        description: "Cada pieza es 100% original certificado con tarjeta de la marca",
      },
      fullSet: {
        title: "Full set completo",
        description: "Caja, papeles, tarjeta de garantía del fabricante. Todo incluido",
      },
      shipping: {
        title: "Envío asegurado",
        description: "Póliza de seguro por el valor total. Rastreo completo de principio a fin",
      },
    },
    darkMode: {
      toggle: "Cambiar tema",
    },
  },
  en: {
    nav: {
      collection: "Collection",
      help: "Help",
      contact: "Contact",
    },
    hero: {
      pill: "New arrivals",
      title: "From watch enthusiasts,<br />for you.",
      description: "<b>New pieces</b> approved by <b>collectors</b>. Passion for <b>fine details</b>. Find your next favorite watch here",
      viewCatalog: "View Private Catalog",
      whyUs: "Why us",
      instagram: "monet.label",
    },
    catalog: {
      title: "Select Curation",
      subtitle: "Featured pieces",
      stockAvailable: "IN STOCK",
      viewDetails: "View Details",
      auto: "Auto",
      mostWanted: "Most Wanted",
      cultPiece: "Cult Classic",
      bestValue: "Best Value",
    },
    findWatch: {
      title: "Can't find what you're looking for?",
      description: "We have access to an exclusive network of distributors. If there's a specific watch you want, we'll find it for you. Same service, same guarantee.",
      cta: "Tell us what you're looking for",
    },
    values: {
      title: "Why buy from us?",
      subtitle: "Quality, trust and enthusiast expertise",
      authenticity: {
        title: "Verified authenticity",
        description: "Every piece is 100% original certified with brand warranty card",
      },
      fullSet: {
        title: "Complete full set",
        description: "Box, papers, manufacturer warranty card. Everything included",
      },
      shipping: {
        title: "Insured shipping",
        description: "Insurance policy for full value. Complete tracking from start to finish",
      },
    },
    darkMode: {
      toggle: "Toggle theme",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.es;
