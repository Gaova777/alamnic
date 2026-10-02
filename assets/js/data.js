/* ============================================================
   ALAMBIC · Datos del catálogo (fuente: Catálogo de Productos 2025)
   Edita aquí precios, textos, productos, servicios y contacto.
   Precios en pesos colombianos (COP), sin puntos.
   ============================================================ */

window.ALAMBIC_DATA = {
  // --- Contacto / marca ---
  brand: {
    name: "Alambic",
    tagline: "Recuerda tu esencia",
    whatsapp: "573137485109",            // Oficial +57 313 748 5109
    whatsappDisplay: "+57 313 748 5109",
    instagram: "alambic_byaura",
    instagramUrl: "https://instagram.com/alambic_byaura",
    facebookUrl: "https://facebook.com/alambic_byaura",
    address: "Calle 10 # 8-47",
    city: "Roldanillo, Valle del Cauca · Colombia",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Calle+10+%23+8-47+Roldanillo+Valle+del+Cauca",
  },

  // --- Presentaciones (filtros de la tienda) ---
  presentaciones: {
    roll: { nombre: "Roll-on", detalle: "Diluido en aceite vegetal, listo para la piel" },
    ae: { nombre: "Aceite esencial 100% puro", detalle: "Para difusor, inhalación y baños" },
    tonico: { nombre: "Tónico capilar", detalle: "Destilado de romero para el cabello" },
  },

  // --- Productos: una ficha por especie vegetal, con sus presentaciones ---
  productos: [
    {
      id: "lavanda",
      nombre: "Lavanda",
      botanico: "Lavandula angustifolia",
      parte: "Hojas y flores",
      chips: ["Calma", "Descanso"],
      resumen: "Calma los nervios, reduce la ansiedad y mejora la calidad del sueño.",
      accion: "Analgésico, antidepresivo, ansiolítico, sedante, antiséptico, antiinflamatorio, antioxidante y antiespasmódico.",
      usoPrincipal: "Especial para calmar los nervios y la tensión mental; reduce la ansiedad y el estrés y mejora la calidad del sueño.",
      usoEmocional: "Promueve la calma, la serenidad y el equilibrio emocional. Aliada para liberar emociones reprimidas en el corazón y llegar a un estado de paz interior.",
      chakra: { nombre: "Corona y corazón", desc: "Facilita la conexión espiritual y la integración de todo el ser. Ayuda a abrir el corazón para sanar heridas emocionales." },
      variantes: [
        { id: "roll", medida: "5 ml", precio: 25000, img: "assets/img/productos/roll-lavanda.webp" },
        { id: "ae", medida: "5 ml", precio: 50000, img: "assets/img/productos/ace-lavanda.webp" },
      ],
    },
    {
      id: "romero",
      nombre: "Romero",
      botanico: "Salvia rosmarinus",
      parte: "Hojas",
      chips: ["Claridad", "Memoria"],
      resumen: "Estimula la concentración y la memoria; fortalece y vigoriza el cabello.",
      accion: "Estimulante, antimicrobiano, antiséptico, antiinflamatorio, espasmolítico y antioxidante.",
      usoPrincipal: "Excelente para fortalecer y vigorizar el cabello. Estimula la actividad intelectual, la concentración y la memoria. En roll-on, para masajear y relajar los músculos.",
      usoEmocional: "En prácticas rituales se asocia con el refuerzo de la mente y la protección frente a energías densas. Su aroma ayuda a la intuición, a conectar con recuerdos y aporta claridad mental.",
      chakra: { nombre: "Tercer ojo", desc: "Favorece la intuición, la concentración y la percepción sutil de la realidad." },
      variantes: [
        { id: "roll", medida: "5 ml", precio: 25000, img: "assets/img/productos/roll-romero.webp" },
        { id: "ae", medida: "5 ml", precio: 40000, img: "assets/img/productos/ace-romero.webp" },
      ],
    },
    {
      id: "naranja",
      nombre: "Naranja",
      botanico: "Citrus × sinensis",
      parte: "Cáscara del fruto",
      chips: ["Alegría", "Ligereza"],
      resumen: "Levanta el ánimo y ayuda a aliviar el estrés, las náuseas y el insomnio.",
      accion: "Aromatizante, ansiolítico, antiséptico, antiinflamatorio, antibacteriano y antioxidante.",
      usoPrincipal: "Muy usado en aromaterapia como ansiolítico y antidepresivo leve, y para aliviar náuseas, estrés e insomnio.",
      usoEmocional: "Aporta alegría y ligereza; ideal para levantar el ánimo y despejar la energía densa del entorno. Aplaca olas de enojo e irritación y acompaña un enfoque positivo en momentos difíciles.",
      chakra: { nombre: "Sacro", desc: "Favorece la conexión con la creatividad y la liberación emocional." },
      variantes: [
        { id: "roll", medida: "5 ml", precio: 25000, img: "assets/img/productos/roll-naranja.webp" },
        { id: "ae", medida: "5 ml", precio: 45000, img: "assets/img/productos/ace-naranja.webp" },
      ],
    },
    {
      id: "eucalipto",
      nombre: "Eucalipto",
      botanico: "Eucalyptus cinerea",
      parte: "Hojas",
      chips: ["Respiración", "Frescura"],
      resumen: "Abre las vías respiratorias, descongestiona y relaja los músculos.",
      accion: "Expectorante, descongestionante, fluidificante, antitusivo, antimicrobiano y antiséptico.",
      usoPrincipal: "Abre las vías respiratorias, ayuda a descongestionar, relaja los músculos y calma dolores articulares e infecciones de la piel.",
      usoEmocional: "Su aroma fresco, renovador y vivificante despeja la mente, refresca los espacios, eleva la energía y acompaña procesos de limpieza emocional o mental.",
      chakra: { nombre: "Garganta", desc: "Facilita la comunicación clara, la expresión verbal y la fluidez energética." },
      variantes: [
        { id: "roll", medida: "5 ml", precio: 25000, img: "assets/img/productos/roll-eucalipto.webp" },
        { id: "ae", medida: "5 ml", precio: 45000, img: "assets/img/productos/ace-eucalipto.webp" },
      ],
    },
    {
      id: "citronella",
      nombre: "Citronella",
      botanico: "Cymbopogon nardus",
      parte: "Hojas",
      chips: ["Repelente", "Equilibrio"],
      resumen: "Potente repelente natural de insectos que equilibra las emociones.",
      accion: "Antimicrobiano, calmante, antiinflamatorio, antifúngico, antiséptico y antibacteriano.",
      usoPrincipal: "Es un potente repelente natural de insectos e insecticida biológico.",
      usoEmocional: "Su aroma ayuda a reducir los síntomas de ansiedad, equilibra las emociones y favorece la sensación de ligereza en ambientes cargados.",
      chakra: { nombre: "Plexo solar", desc: "Potencia la energía vital, apoyando la acción y el empoderamiento personal." },
      variantes: [
        { id: "roll", medida: "5 ml", precio: 25000, img: "assets/img/productos/roll-citronella.webp" },
        { id: "ae", medida: "5 ml", precio: 45000, img: "assets/img/productos/ace-citronella.webp" },
      ],
    },
    {
      id: "tonico-romero",
      nombre: "Tónico de Romero",
      botanico: "Salvia rosmarinus",
      parte: "Hojas · destilado",
      chips: ["Cabello", "Vitalidad"],
      resumen: "Destilado de romero para fortalecer y vigorizar el cabello.",
      accion: "Estimulante, antioxidante y antiinflamatorio.",
      usoPrincipal: "Tónico capilar a base de destilado de romero para fortalecer y vigorizar el cabello. Aplícalo sobre el cuero cabelludo con un suave masaje.",
      usoEmocional: "El aroma del romero aporta claridad mental y acompaña tus rituales de autocuidado.",
      chakra: { nombre: "Tercer ojo", desc: "Favorece la intuición, la concentración y la percepción sutil de la realidad." },
      variantes: [
        { id: "tonico", medida: "50 ml", precio: 10000, img: "assets/img/productos/tonico-romero.webp" },
      ],
    },
  ],

  // --- Próximamente ---
  proximamente: [
    {
      id: "brumas",
      nombre: "Brumas",
      desc: "Aromas naturales para refrescar tus espacios y acompañar tus rituales de bienestar.",
      img: "assets/img/marca/frascos.webp",
    },
    {
      id: "kits",
      nombre: "Kits",
      desc: "Selecciones diseñadas para acompañar diferentes momentos y necesidades de bienestar.",
      img: "assets/img/marca/empaques.webp",
    },
  ],

  // --- Servicios / experiencias ---
  servicios: [
    {
      id: "acompanamiento",
      nombre: "Acompañamientos 1:1",
      desc: "Un espacio personalizado para reconectar contigo, guiado con naturaleza, ciencia y presencia.",
      img: "assets/img/marca/velas.webp",
      disponible: true,
    },
    {
      id: "taller",
      nombre: "Talleres de destilación artesanal",
      desc: "Aprende sobre plantas medicinales y el arte de destilar en alambique de cobre.",
      img: "assets/img/fotos/aura-destilacion.webp",
      disponible: true,
    },
    {
      id: "montana",
      nombre: "Experiencias sensoriales en la montaña",
      desc: "Reconecta con la naturaleza en un encuentro sensorial al aire libre.",
      img: "assets/img/fotos/aura-cosecha.webp",
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

  // --- Formas de uso (catálogo, tabla 1) ---
  formasUso: [
    { forma: "Difusor", como: "Agrega de 4 a 6 gotas de aceite esencial 100% puro en un difusor con agua.", ideal: "Aromatizar, purificar y equilibrar" },
    { forma: "Inhalación directa", como: "Inhala directamente desde el frasco o desde la palma de tus manos.", ideal: "Elevar el ánimo, concentrarse y calmar" },
    { forma: "Uso tópico", como: "Ideal nuestra presentación en roll-on, preparada con aceite vegetal.", ideal: "Dolores, piel, chakras y puntos energéticos" },
    { forma: "Masaje", como: "Ideal nuestra presentación en roll-on, preparada con aceite vegetal.", ideal: "Relajar músculos y activar la circulación" },
    { forma: "Baños aromáticos", como: "Mezcla de 5 a 10 gotas en una cucharada de sal marina o aceite vegetal y dilúyelo en el agua de la tina.", ideal: "Relajación profunda y limpieza energética" },
    { forma: "Ritual / espiritual", como: "Aplica en los chakras, en clases de yoga o en meditación.", ideal: "Intención, conexión y limpieza áurica" },
  ],

  // --- Ritual de aromaterapia ---
  ritual: [
    "Elige tu aceite del día según cómo te sientes o lo que necesitas.",
    "Busca un espacio limpio y tranquilo, o al aire libre, donde puedas tener privacidad. Enciende una vela o pon música suave.",
    "Aplica el roll-on con una intención (paz, claridad, concentración) en la palma de tu mano. Frótalas suavemente, llévalas a tu nariz y respira profundo tres veces; repite durante al menos cinco minutos.",
    "Escucha tu cuerpo, conecta con tu respiración y el latido de tu corazón. Observa tus pensamientos y emociones.",
    "Escribe lo que sentiste y pensaste. Agradece a la planta por su medicina, y a ti por regalarte este momento.",
  ],

  // --- Precauciones ---
  precauciones: [
    "No apliques aceite esencial 100% puro directamente sobre la piel, ni sobre ojos, mucosas o zonas sensibles.",
    "No consumas aceites esenciales sin supervisión o receta de un profesional de la salud.",
    "No los uses durante el embarazo o la lactancia sin orientación.",
    "Para bebés y niñxs menores de 7 años, usa solo la versión en roll-on, con una concentración personalizada.",
    "Evita la exposición al sol después de aplicar aceites cítricos como naranja o limón.",
    "Consérvalos en un lugar fresco, seco y oscuro: así te pueden durar toda la vida.",
  ],

  // --- Preguntas frecuentes ---
  faq: [
    {
      q: "¿Puedo usar los aceites esenciales directamente sobre la piel?",
      a: "Los aceites esenciales 100% puros deben diluirse antes de aplicarlos sobre la piel. Si buscas una opción lista para usar, nuestros roll-on ya vienen diluidos en aceite vegetal y son aptos para aplicación tópica.",
    },
    {
      q: "¿Puedo consumir los aceites esenciales?",
      a: "Nuestros aceites esenciales son 100% puros y no contienen aditivos ni fragancias sintéticas. Sin embargo, debido a su alta concentración, la ingesta solo debe realizarse bajo la orientación de un profesional de la salud con formación en aceites esenciales. No recomendamos su consumo por cuenta propia.",
    },
    {
      q: "¿Cómo se elaboran?",
      a: "Por destilación simple. La mayoría los destilamos nosotros mismos en un alambique de cobre artesanal; los demás provienen de cultivos agroecológicos, sembrados y cuidados con amor por campesinos colombianos.",
    },
    {
      q: "¿Cómo elegir el adecuado?",
      a: "Depende de tus necesidades y del uso que quieras darle. Puedes elegir según el aroma, sus propiedades, el chakra con el que se relaciona o el formato (aceite esencial o roll-on). Si tienes dudas, escríbenos y te asesoramos.",
    },
    {
      q: "¿Cómo hago mi pedido?",
      a: "Elige tus productos y cantidades en la tienda y envía tu selección por WhatsApp. Allí confirmamos disponibilidad, forma de pago y envío.",
    },
  ],
};
