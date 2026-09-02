/* ============================================================
   ALAMBIC · Datos del catálogo
   Editable: cambia textos, agrega productos o activa "próximamente".
   Los precios están ocultos por decisión de marca (Consultar por WhatsApp).
   ============================================================ */

window.ALAMBIC_DATA = {
  // --- Contacto / marca ---
  brand: {
    name: "ALAMBIC",
    tagline: "Recuerda tu esencia",
    whatsapp: "573136887616",            // PRUEBAS · oficial: 573137485109 (+57 313 748 5109)
    whatsappDisplay: "+57 313 688 7616",
    instagram: "alambic_byaura",
    instagramUrl: "https://instagram.com/alambic_byaura",
    facebookUrl: "https://facebook.com/alambic_byaura",
    location: "Roldanillo, Valle del Cauca · Colombia",
  },

  // --- Aceites esenciales 100% puros (5 ml) ---
  aceites: [
    {
      id: "ace-romero",
      nombre: "Romero",
      botanico: "Rosmarinus officinalis",
      beneficio: "Claridad · Concentración",
      chips: ["Claridad", "Concentración"],
      notas: "Herbal · Alcanforado · Amaderado",
      familia: "Herbal aromática",
      uso: "Difusor · cosmética natural · mezclas propias",
      img: "assets/img/ace-romero.jpg",
      medida: "5 ml",
      desc: "Aroma herbal y despierto. Ideal para difusor, estudio y foco mental.",
    },
    {
      id: "ace-lavanda",
      nombre: "Lavanda",
      botanico: "Lavandula sp.",
      beneficio: "Calma · Descanso",
      chips: ["Calma", "Descanso"],
      notas: "Floral · Suave · Balsámico",
      familia: "Floral",
      uso: "Difusor · rituales de descanso · almohada",
      img: "assets/img/ace-lavanda.jpg",
      medida: "5 ml",
      desc: "Floral y envolvente. Acompaña rituales de descanso y relajación.",
    },
    {
      id: "ace-citronella",
      nombre: "Citronella",
      botanico: "Cymbopogon nardus",
      beneficio: "Purificación · Serenidad",
      chips: ["Purificación", "Serenidad"],
      notas: "Cítrico · Fresco · Verde",
      familia: "Cítrica",
      uso: "Difusor · purificar espacios · exteriores",
      img: "assets/img/ace-citronella.jpg",
      medida: "5 ml",
      desc: "Cítrico y limpio. Refresca y purifica tus espacios.",
    },
    {
      id: "ace-eucalipto",
      nombre: "Eucalipto",
      botanico: "Eucalyptus cinerea",
      beneficio: "Respiración · Frescura",
      chips: ["Respiración", "Frescura"],
      notas: "Mentolado · Fresco · Limpio",
      familia: "Fresca mentolada",
      uso: "Difusor · vapores · momentos de resfriado",
      img: "assets/img/ace-eucalipto.jpg",
      medida: "5 ml",
      desc: "Fresco y expansivo. Favorece una respiración libre y despejada.",
    },
    {
      id: "ace-naranja",
      nombre: "Naranja",
      botanico: "Citrus sinensis",
      beneficio: "Alegría · Optimismo",
      chips: ["Alegría", "Optimismo"],
      notas: "Cítrico · Dulce · Luminoso",
      familia: "Cítrica dulce",
      uso: "Difusor · espacios sociales · mañanas",
      img: "assets/img/ace-naranja.jpg",
      medida: "5 ml",
      desc: "Dulce y luminoso. Enciende el buen ánimo y la vitalidad.",
    },
  ],

  // --- Roll-ons (5 ml, listos para aplicar) ---
  rollons: [
    {
      id: "roll-romero",
      nombre: "Roll-on Romero",
      botanico: "Rosmarinus officinalis",
      beneficio: "Claridad · Concentración",
      chips: ["Claridad", "Concentración"],
      notas: "Herbal · Alcanforado · Amaderado",
      familia: "Herbal aromática",
      uso: "Aplicar en muñecas y sienes",
      img: "assets/img/roll-romero.jpg",
      medida: "5 ml",
      desc: "Diluido y listo para usar sobre la piel de forma segura.",
    },
    {
      id: "roll-lavanda",
      nombre: "Roll-on Lavanda",
      botanico: "Lavandula sp.",
      beneficio: "Calma · Descanso",
      chips: ["Calma", "Descanso"],
      notas: "Floral · Suave · Balsámico",
      familia: "Floral",
      uso: "Aplicar antes de dormir",
      img: "assets/img/roll-lavanda.jpg",
      medida: "5 ml",
      desc: "Tu momento de calma, siempre a la mano.",
    },
    {
      id: "roll-citronella",
      nombre: "Roll-on Citronella",
      botanico: "Cymbopogon nardus",
      beneficio: "Purificación · Serenidad",
      chips: ["Purificación", "Serenidad"],
      notas: "Cítrico · Fresco · Verde",
      familia: "Cítrica",
      uso: "Aplicar y respirar profundo",
      img: "assets/img/roll-citronella.jpg",
      medida: "5 ml",
      desc: "Frescura cítrica que acompaña y serena.",
    },
    {
      id: "roll-eucalipto",
      nombre: "Roll-on Eucalipto",
      botanico: "Eucalyptus cinerea",
      beneficio: "Respiración · Frescura",
      chips: ["Respiración", "Frescura"],
      notas: "Mentolado · Fresco · Limpio",
      familia: "Fresca mentolada",
      uso: "Aplicar en pecho y muñecas",
      img: "assets/img/roll-eucalipto.jpg",
      medida: "5 ml",
      desc: "Aire fresco donde vayas, respira profundo.",
    },
    {
      id: "roll-naranja",
      nombre: "Roll-on Naranja",
      botanico: "Citrus sinensis",
      beneficio: "Alegría · Optimismo",
      chips: ["Alegría", "Optimismo"],
      notas: "Cítrico · Dulce · Luminoso",
      familia: "Cítrica dulce",
      uso: "Aplicar en las mañanas",
      img: "assets/img/roll-naranja.jpg",
      medida: "5 ml",
      desc: "Un toque de alegría cítrica para tu día.",
    },
  ],

  // --- Próximamente ---
  proximamente: [
    {
      id: "brumas",
      nombre: "Brumas",
      desc: "Aromas naturales para refrescar tus espacios y acompañar tus rituales de bienestar.",
      img: "assets/img/grupo-productos.jpg",
    },
    {
      id: "kits",
      nombre: "Kits",
      desc: "Selecciones diseñadas para acompañar diferentes momentos y necesidades de bienestar.",
      img: "assets/img/tonico-romero.jpg",
    },
  ],

  // --- Experiencias / Servicios ---
  experiencias: [
    {
      id: "exp-acompanamiento",
      nombre: "Acompañamientos 1:1",
      desc: "Un espacio personalizado para reconectar contigo, guiado con naturaleza, ciencia y presencia.",
      img: "assets/img/exp-terapia.jpg",
      disponible: true,
    },
    {
      id: "exp-taller",
      nombre: "Talleres de destilación artesanal",
      desc: "Aprende sobre plantas medicinales y el arte de destilar en alambique de cobre.",
      img: "assets/img/exp-taller.jpg",
      disponible: true,
    },
    {
      id: "exp-montana",
      nombre: "Experiencias sensoriales en la montaña",
      desc: "Reconecta con la naturaleza en un encuentro sensorial al aire libre.",
      img: "assets/img/exp-montana.jpg",
      disponible: false,
    },
  ],

  // --- Testimonios ---
  testimonios: [
    {
      texto: "Descubrir ALAMBIC cambió mi forma de usar la aromaterapia. Antes los usaba pero no era consciente del impacto que generaba en mi sistema nervioso. Hoy forman parte de mis rituales de bienestar.",
      autor: "Andrea",
      ciudad: "Cali",
    },
    {
      texto: "Me fascinó la calidad de los aceites, huelen bastante incluso en roll-on. Me encantó la pasión con la que Aura explica su función a profundidad. Se nota el cuidado y amor detrás de lo que hace.",
      autor: "Daniela",
      ciudad: "Pereira",
    },
  ],

  // --- Preguntas frecuentes ---
  faq: [
    {
      q: "¿Puedo usar los aceites esenciales directamente sobre la piel?",
      a: "Los aceites esenciales 100 % puros deben diluirse antes de aplicarlos sobre la piel. Si buscas una opción lista para usar, nuestros roll-on ya vienen diluidos en aceite vegetal y son aptos para aplicación tópica.",
    },
    {
      q: "¿Puedo consumir los aceites esenciales?",
      a: "Nuestros aceites esenciales son 100% puros y no contienen aditivos ni fragancias sintéticas. Sin embargo, debido a su alta concentración, la ingesta solo debe realizarse bajo la orientación de un profesional de la salud con formación en el uso de aceites esenciales. No recomendamos su consumo por cuenta propia.",
    },
    {
      q: "¿Cómo elegir el adecuado?",
      a: "Depende de tus necesidades y del uso que quieras darle. Puedes elegir según el aroma, sus propiedades o el formato (aceite esencial, roll-on, bruma o kit). Si tienes dudas, estaremos encantados de asesorarte para encontrar la opción más adecuada para ti.",
    },
  ],
};
