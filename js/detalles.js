// detalles.js — Carga dinámica del proyecto y lightbox

// =============================================
// Base de datos de proyectos
// =============================================
const PROYECTOS = {

  /* --- REMODELACIONES --- */
  'remo-01': {
    titulo: 'Casa Moderna — Zona Norte',
    tag: 'Remodelación',
    catalogo: 'remodelaciones.html',
    catalogoLabel: 'Remodelaciones',
    desc: 'Remodelación integral de vivienda unifamiliar con cocina abierta, baños renovados y fachada moderna.',
    descLarga: 'El proyecto consistió en transformar una vivienda de 220 m² con más de 20 años de antigüedad. Se eliminaron muros no estructurales para crear un espacio cocina-comedor-sala integrado con iluminación natural. Los materiales incluyen porcelanato de gran formato, carpintería en roble natural y herrajes europeos de cierre suave.',
    specs: { Área: '220 m²', Duración: '4 meses', Año: '2024', Servicio: 'Remodelación integral' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85', alt: 'Cocina principal con isla' },
      { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85', alt: 'Sala — comedor integrado' },
      { url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=85', alt: 'Baño principal' },
      { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=85', alt: 'Recámara principal' },
      { url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=85', alt: 'Fachada exterior' },
      { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=85', alt: 'Terraza trasera' },
    ]
  },
  'remo-02': {
    titulo: 'Suite Principal Residencial',
    tag: 'Remodelación',
    catalogo: 'remodelaciones.html',
    catalogoLabel: 'Remodelaciones',
    desc: 'Baño tipo spa con muros de mármol, ducha de lluvia y tina independiente.',
    descLarga: 'Renovación completa del baño principal en una residencia de lujo. Se instalaron muros de mármol Carrara, una ducha de lluvia empotrada con salida lateral y una tina exenta de piedra. La iluminación combina downlights empotrados y LED indirecto para crear un ambiente spa.',
    specs: { Área: '18 m²', Duración: '6 semanas', Año: '2024', Servicio: 'Renovación de baño' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=85', alt: 'Baño tipo spa' },
      { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85', alt: 'Detalle espejo iluminado' },
      { url: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=85', alt: 'Vista general del baño' },
    ]
  },
  'remo-03': {
    titulo: 'Sala — Comedor Integrado',
    tag: 'Remodelación',
    catalogo: 'remodelaciones.html',
    catalogoLabel: 'Remodelaciones',
    desc: 'Redistribución de planta baja para crear área social abierta y luminosa.',
    descLarga: 'Se demolieron dos muros divisorios no estructurales para unificar sala, comedor y cocina en un solo espacio de 80 m². Se instaló piso de porcelanato en formato 120×60, ventanas piso-techo y un sistema de iluminación por zonas con control inteligente.',
    specs: { Área: '160 m²', Duración: '10 semanas', Año: '2024', Servicio: 'Redistribución interior' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85', alt: 'Sala de estar' },
      { url: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1200&q=85', alt: 'Comedor integrado' },
      { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85', alt: 'Cocina abierta' },
    ]
  },
  'remo-04': {
    titulo: 'Renovación de Fachada',
    tag: 'Exterior',
    catalogo: 'remodelaciones.html',
    catalogoLabel: 'Remodelaciones',
    desc: 'Nueva imagen exterior con piedra laja, aluminio negro y jardín frontal.',
    descLarga: 'La fachada de esta vivienda de 30 años fue completamente renovada con revestimiento de piedra laja en tono gris, perfiles de aluminio negro anodizado y jardín frontal con riego automatizado. Se instaló iluminación arquitectónica LED en plafones y piso.',
    specs: { Área: 'Fachada 80 m²', Duración: '3 semanas', Año: '2023', Servicio: 'Renovación exterior' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=85', alt: 'Vista frontal renovada' },
      { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=85', alt: 'Detalle acceso principal' },
    ]
  },
  'remo-05': {
    titulo: 'Terraza Residencial Premium',
    tag: 'Terraza',
    catalogo: 'remodelaciones.html',
    catalogoLabel: 'Remodelaciones',
    desc: 'Terraza exterior con deck de madera tratada, pérgola y área lounge.',
    descLarga: 'Construcción y habilitación de terraza de 80 m² en planta alta. Incluye deck de madera ipe tratada, pérgola con cubierta policarbonato, zona de asador integrado, muebles de exterior y jardín vertical. El diseño permite uso en temporada de lluvia.',
    specs: { Área: '80 m²', Duración: '5 semanas', Año: '2023', Servicio: 'Construcción de terraza' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=85', alt: 'Terraza con deck' },
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85', alt: 'Área de jardín' },
    ]
  },
  'remo-06': {
    titulo: 'Cocina Minimalista Blanca',
    tag: 'Cocina',
    catalogo: 'remodelaciones.html',
    catalogoLabel: 'Remodelaciones',
    desc: 'Cocina con diseño escandinavo en blanco y detalles de madera natural.',
    descLarga: 'Remodelación de cocina de 16 m² con estética escandinava. Gabinetes de MDF lacado en blanco mate, tope de cuarzo blanco, electrodomésticos de acero inoxidable empotrados y estantes abiertos en pino natural. La iluminación combina downlights y tira LED bajo los muebles superiores.',
    specs: { Área: '16 m²', Duración: '3 semanas', Año: '2023', Servicio: 'Remodelación de cocina' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=85', alt: 'Cocina minimalista blanca' },
      { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85', alt: 'Detalle isla' },
    ]
  },
  'remo-07': {
    titulo: 'Recámara Principal',
    tag: 'Recámara',
    catalogo: 'remodelaciones.html',
    catalogoLabel: 'Remodelaciones',
    desc: 'Dormitorio adulto con cabecera tapizada, vestidor integrado y luz cálida.',
    descLarga: 'Rediseño completo de recámara principal de 22 m². Se construyó una cabecera tapizada en terciopelo gris con nicho iluminado, closet empotrado con puertas corredizas de espejo y piso laminado de madera de alto tráfico. La iluminación es cálida con control por dimmer.',
    specs: { Área: '22 m²', Duración: '4 semanas', Año: '2023', Servicio: 'Renovación de recámara' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=85', alt: 'Recámara con luz cálida' },
      { url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=85', alt: 'Closet integrado' },
    ]
  },
  'remo-08': {
    titulo: 'Remodelación Home Office',
    tag: 'Home Office',
    catalogo: 'remodelaciones.html',
    catalogoLabel: 'Remodelaciones',
    desc: 'Cuarto de trabajo convertido en espacio profesional con iluminación de calidad.',
    descLarga: 'Un cuarto de 10 m² se transformó en home office profesional con escritorio en L a medida, estantería de piso a techo, panel acústico textil, iluminación LED sin parpadeo y gestión de cables oculta. El acabado de paredes es pintura antireflejante gris claro.',
    specs: { Área: '10 m²', Duración: '2 semanas', Año: '2022', Servicio: 'Adecuación home office' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=85', alt: 'Home office terminado' },
      { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85', alt: 'Detalle estantería' },
    ]
  },
  'remo-09': {
    titulo: 'Patio Interior con Jardín',
    tag: 'Patio',
    catalogo: 'remodelaciones.html',
    catalogoLabel: 'Remodelaciones',
    desc: 'Patio interior con jardín vertical, piso de piedra y fuente de agua.',
    descLarga: 'Transformación de patio interior de 35 m² en jardín contemplativo. Se instaló jardín vertical con plantas de bajo mantenimiento, piso en piedra bola y laja intercalada, fuente de agua en concreto pulido e iluminación ambiental empotrada en piso.',
    specs: { Área: '35 m²', Duración: '3 semanas', Año: '2022', Servicio: 'Paisajismo interior' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85', alt: 'Patio con jardín vertical' },
      { url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=85', alt: 'Acceso al patio' },
    ]
  },

  /* --- CONSTRUCCIÓN --- */
  'const-01': {
    titulo: 'Residencia Familiar 3 Pisos',
    tag: 'Construcción',
    catalogo: 'construccion-casas.html',
    catalogoLabel: 'Construcción',
    desc: 'Edificación completa desde cimentación en 8 meses con estructura de concreto.',
    descLarga: 'Casa de 360 m² en tres niveles con sótano-garaje, planta baja social, primer piso de recámaras y azotea habitable. Estructura de concreto armado, fachada en piedra natural y cristal, acabados interiores premium. El proyecto incluyó proyecto ejecutivo, permisos y construcción llave en mano.',
    specs: { Área: '360 m²', Niveles: '3 pisos + sótano', Duración: '8 meses', Año: '2024' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85', alt: 'Vista frontal' },
      { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85', alt: 'Fachada lateral' },
      { url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85', alt: 'Acceso principal' },
      { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85', alt: 'Interior sala' },
    ]
  },
  'const-02': {
    titulo: 'Casa Contemporánea 180 m²',
    tag: 'Construcción',
    catalogo: 'construccion-casas.html',
    catalogoLabel: 'Construcción',
    desc: 'Diseño minimalista con amplios ventanales y jardín interior integrado.',
    descLarga: 'Vivienda de planta abierta con grandes ventanales de piso a techo que conectan el interior con el jardín. El diseño aprovecha la iluminación natural durante todo el día. Acabados en concreto aparente, madera y vidrio templado. Se integró domótica básica para control de luces y persianas.',
    specs: { Área: '180 m²', Niveles: '1 piso', Duración: '6 meses', Año: '2024' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85', alt: 'Vista exterior' },
      { url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85', alt: 'Jardín frontal' },
    ]
  },
  'const-03': {
    titulo: 'Vivienda Residencial Premium',
    tag: 'Construcción',
    catalogo: 'construccion-casas.html',
    catalogoLabel: 'Construcción',
    desc: 'Proyecto llave en mano con acabados de lujo, piscina y jardín paisajístico.',
    descLarga: 'Residencia de 420 m² con acceso en piedra natural, sala de doble altura, cocina gourmet, 4 recámaras con baño privado, gimnasio privado, piscina con área de descanso y jardín diseñado por paisajista. Domótica completa y sistema de seguridad integrado.',
    specs: { Área: '420 m²', Niveles: '2 pisos', Duración: '12 meses', Año: '2023' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85', alt: 'Acceso principal en piedra' },
      { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85', alt: 'Fachada posterior con piscina' },
    ]
  },
  'const-04': {
    titulo: 'Casa Minimalista con Azotea',
    tag: 'Construcción',
    catalogo: 'construccion-casas.html',
    catalogoLabel: 'Construcción',
    desc: 'Fachada blanca con cubierta plana habitable y terraza jardín.',
    descLarga: 'Casa minimalista de 200 m² con fachada enlucida en blanco puro, cubierta plana con terraza habitable, jardín en azotea y sala de doble altura. Los interiores en tonos blancos y grises con detalles en madera crean un ambiente limpio y contemporáneo.',
    specs: { Área: '200 m²', Niveles: '2 pisos', Duración: '7 meses', Año: '2023' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85', alt: 'Fachada minimalista' },
      { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=85', alt: 'Terraza azotea' },
    ]
  },
  'const-05': {
    titulo: 'Casa Campestre con Jardín',
    tag: 'Construcción',
    catalogo: 'construccion-casas.html',
    catalogoLabel: 'Construcción',
    desc: 'Vivienda campestre con techo de teja, madera y amplio jardín de 400 m².',
    descLarga: 'Casa campestre de 280 m² construida en lote de 800 m². Estructura de mampostería con acabados en teja roja, marcos de madera y balcones. El jardín incluye árboles frutales, zona de asador, sendero de piedra y sistema de riego automatizado.',
    specs: { Área: '280 m²', Niveles: '1 piso', Duración: '9 meses', Año: '2023' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85', alt: 'Vista campestre' },
      { url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=85', alt: 'Jardín frontal' },
    ]
  },
  'const-06': {
    titulo: 'Dúplex Familiar Moderno',
    tag: 'Construcción',
    catalogo: 'construccion-casas.html',
    catalogoLabel: 'Construcción',
    desc: 'Dúplex con fachada en concreto aparente y madera, dos unidades independientes.',
    descLarga: 'Proyecto de dúplex de 240 m² con dos unidades de 120 m² cada una. Fachada en concreto aparente con paneles de madera tratada. Cada unidad cuenta con sala-comedor abierto, cocina integral, 3 recámaras y 2.5 baños. Entregado con cocinas y clósets instalados.',
    specs: { Área: '240 m² (2 unidades)', Niveles: '2 pisos', Duración: '8 meses', Año: '2022' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=85', alt: 'Fachada dúplex' },
    ]
  },
  'const-07': {
    titulo: 'Bungalow Vacacional',
    tag: 'Construcción',
    catalogo: 'construccion-casas.html',
    catalogoLabel: 'Construcción',
    desc: 'Cabaña vacacional frente al mar con terraza de madera y cubierta palapa.',
    descLarga: 'Bungalow de 140 m² construido a 50 metros del litoral. La estructura es de madera dura con cimentación elevada antihumedad. Cubierta de palapa natural con impermeabilización interior, grandes ventanas con vista al mar y terraza perimetral de madera tratada para exterior.',
    specs: { Área: '140 m²', Niveles: '1 piso', Duración: '5 meses', Año: '2022' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85', alt: 'Bungalow frente al mar' },
    ]
  },
  'const-08': {
    titulo: 'Casa Urbana Compacta',
    tag: 'Construcción',
    catalogo: 'construccion-casas.html',
    catalogoLabel: 'Construcción',
    desc: 'Vivienda urbana en lote angosto aprovechando altura y espacios verticales.',
    descLarga: 'Casa de 120 m² en lote de 5×20 m², diseñada para aprovechar al máximo la verticalidad. Tres niveles: planta baja comercial arrendable, primer piso social y segundo piso privado. Fachada con celosía de madera y cristal templado que permite privacidad sin perder luz.',
    specs: { Área: '120 m²', Niveles: '3 pisos', Duración: '4 meses', Año: '2022' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=85', alt: 'Casa urbana compacta' },
    ]
  },

  /* --- MUEBLERÍA --- */
  'mueb-01': {
    titulo: 'Cocina Integral Minimalista',
    tag: 'Mueblería',
    catalogo: 'muebleria.html',
    catalogoLabel: 'Mueblería',
    desc: 'Cocina con gabinetes lacados, isla central y electrodomésticos empotrados.',
    descLarga: 'Cocina de 18 m² fabricada completamente a medida. Gabinetes superiores e inferiores en MDF lacado color lino con herrajes Blum de cierre suave. Tope de cuarzo blanco venato de 3 cm de espesor. Isla central con desayunador para 4 personas y campana extractora de diseño.',
    specs: { Área: '18 m²', Material: 'MDF lacado + cuarzo', Duración: '3 semanas', Año: '2024' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85', alt: 'Cocina integral con isla' },
      { url: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=85', alt: 'Detalle gabinetes' },
    ]
  },
  'mueb-02': {
    titulo: 'Vestidor Walk-in Principal',
    tag: 'Mueblería',
    catalogo: 'muebleria.html',
    catalogoLabel: 'Mueblería',
    desc: 'Closet walk-in de 12 m² con zona de ropa, zapateros y cajones.',
    descLarga: 'Vestidor completo fabricado en MDF enchapado en madera de roble natural con acabado mate. Sistema de iluminación LED por zona: barras de colgar con tira LED inferior, cajones con sensor de apertura y espejo de cuerpo completo empotrado. Puerta corrediza de cristal esmerilado.',
    specs: { Área: '12 m²', Material: 'MDF enchapado en roble', Duración: '2 semanas', Año: '2024' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=85', alt: 'Walk-in organizado' },
    ]
  },
  'mueb-03': {
    titulo: 'Home Office Personalizado',
    tag: 'Mueblería',
    catalogo: 'muebleria.html',
    catalogoLabel: 'Mueblería',
    desc: 'Escritorio en L, estantería de piso a techo y gestión de cables.',
    descLarga: 'Mueblería completa para home office profesional de 10 m². Escritorio en L de 240×180 cm en madera de roble con pasacables metálico, estantería de piso a techo en la pared principal, panel lateral de corcho para notas y módulo inferior con cajones y archivero con cerradura.',
    specs: { Área: '10 m²', Material: 'Madera de roble', Duración: '10 días', Año: '2024' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=85', alt: 'Home office terminado' },
    ]
  },
  'mueb-04': {
    titulo: 'Centro de Entretenimiento',
    tag: 'Mueblería',
    catalogo: 'muebleria.html',
    catalogoLabel: 'Mueblería',
    desc: 'Mueble empotrado de TV con nichos, cajoneras y led ambiental.',
    descLarga: 'Mueble de TV empotrado de 4 metros de ancho en sala principal. Fabricado en MDF lacado blanco con nichos abiertos, zona central para pantalla de 75", cajoneras con guías telescópicas, espacio para consolas y amplificador, y tira LED RGB en parte trasera de los nichos.',
    specs: { Dimensión: '4×2.4 m', Material: 'MDF lacado blanco', Duración: '10 días', Año: '2023' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=85', alt: 'Sala con mueble empotrado' },
    ]
  },
  'mueb-05': {
    titulo: 'Librero Empotrado de Pared',
    tag: 'Mueblería',
    catalogo: 'muebleria.html',
    catalogoLabel: 'Mueblería',
    desc: 'Librero de piso a techo con escalera rodante y combinación madera-metal.',
    descLarga: 'Librero de 5 metros de ancho por 2.8 de alto fabricado en madera de pino natural con estructura metálica negra. Incluye escalera rodante en carril empotrado, iluminación LED por repisa y zona de escritorio integrado en la parte inferior. Diseño inspirado en bibliotecas parisienses.',
    specs: { Dimensión: '5×2.8 m', Material: 'Pino + acero negro', Duración: '2 semanas', Año: '2023' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85', alt: 'Librero de piso a techo' },
    ]
  },
  'mueb-06': {
    titulo: 'Cocina Dark — Estilo Moderno',
    tag: 'Mueblería',
    catalogo: 'muebleria.html',
    catalogoLabel: 'Mueblería',
    desc: 'Gabinetes en color grafito mate con topes blancos y herrajes dorados.',
    descLarga: 'Cocina de 14 m² con estética dark-luxury. Gabinetes en MDF peinado grafito mate, tope de cuarzo blanco Calacatta, grifo dorado de cuello de ganso y campana extractora de acero inoxidable. Tira LED cálida bajo los muebles superiores crea un ambiente acogedor.',
    specs: { Área: '14 m²', Material: 'MDF peinado + cuarzo', Duración: '3 semanas', Año: '2023' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=85', alt: 'Cocina grafito mate' },
    ]
  },
  'mueb-07': {
    titulo: 'Vanity de Baño a Medida',
    tag: 'Mueblería',
    catalogo: 'muebleria.html',
    catalogoLabel: 'Mueblería',
    desc: 'Mueble de baño flotante con dos lavabos y espejo con luz perimetral.',
    descLarga: 'Vanity de baño flotante de 160 cm fabricado en MDF hidrófugo con acabado nogal cepillado. Dos cajones ocultos con guías Blum, dos ovalines de cerámica blanca, espejo retroiluminado perimetral y gabinete lateral con altura total para almacenamiento.',
    specs: { Dimensión: '160×50 cm', Material: 'MDF hidrófugo', Duración: '1 semana', Año: '2022' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=85', alt: 'Vanity flotante' },
    ]
  },
  'mueb-08': {
    titulo: 'Comedor en Madera Maciza',
    tag: 'Mueblería',
    catalogo: 'muebleria.html',
    catalogoLabel: 'Mueblería',
    desc: 'Mesa de nogal macizo para 8 personas con sillas tapizadas a juego.',
    descLarga: 'Mesa de comedor fabricada en madera de nogal macizo en una sola pieza de 2.4 metros. Acabado con aceite natural que resalta las vetas de la madera. Se acompañó de 8 sillas con estructura en madera de haya y asiento tapizado en lino natural, fabricadas en el mismo taller.',
    specs: { Dimensión: '240×90 cm', Material: 'Nogal macizo', Duración: '3 semanas', Año: '2022' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1200&q=85', alt: 'Comedor en madera maciza' },
    ]
  },
  'mueb-09': {
    titulo: 'Mueble de Recepción Corporativa',
    tag: 'Mueblería',
    catalogo: 'muebleria.html',
    catalogoLabel: 'Mueblería',
    desc: 'Mostrador de recepción con logo iluminado en madera y acero inoxidable.',
    descLarga: 'Mueble de recepción de 3 metros de largo para sede corporativa. Frente en madera de roble americano con logo de la empresa iluminado en retroiluminación LED blanca fría. Interior con cajones archiveros, zona de cómputo y tope de recepción en cuarzo gris.',
    specs: { Dimensión: '300×110 cm', Material: 'Roble + acero', Duración: '2 semanas', Año: '2022' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85', alt: 'Recepción corporativa' },
    ]
  },

  /* --- EMPRESAS --- */
  'emp-01': {
    titulo: 'Sede Corporativa 800 m²',
    tag: 'Empresas',
    catalogo: 'empresas.html',
    catalogoLabel: 'Empresas',
    desc: 'Adecuación integral de oficinas corporativas sin interrumpir operaciones.',
    descLarga: 'Proyecto de adecuación de 800 m² de oficinas en 3 meses de obra. Se trabajó en horario nocturno y de fin de semana para no interrumpir las operaciones del cliente. Incluye divisiones modulares, sala de juntas premium, área de coworking, cocina ejecutiva y recepción de diseño.',
    specs: { Área: '800 m²', Duración: '3 meses', Año: '2024', Tipo: 'Adecuación corporativa' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85', alt: 'Área colaborativa' },
      { url: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=1200&q=85', alt: 'Sala de juntas' },
    ]
  },
  'emp-02': {
    titulo: 'Showroom de Retail',
    tag: 'Empresas',
    catalogo: 'empresas.html',
    catalogoLabel: 'Empresas',
    desc: 'Local comercial con iluminación especializada, vitrinas y señalización de marca.',
    descLarga: 'Construcción de tienda retail de 320 m² desde obra gris. Incluye fachada con marquesina luminosa, interior con cielo raso de yeso e iluminación de acento tipo spot, vitrinas de cristal templado, sistema de rieles para exhibición flexible y piso de concreto pulido.',
    specs: { Área: '320 m²', Duración: '2 meses', Año: '2024', Tipo: 'Construcción comercial' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=85', alt: 'Interior showroom' },
    ]
  },
  'emp-03': {
    titulo: 'Nave Industrial Logística',
    tag: 'Empresas',
    catalogo: 'empresas.html',
    catalogoLabel: 'Empresas',
    desc: 'Bodega de 1,200 m² con estructura metálica, andenes y sistema contra incendios.',
    descLarga: 'Nave industrial de 1,200 m² construida en 5 meses. Estructura de acero con cubierta de panel sándwich, piso de concreto industrial f\'c=250 kg/cm², 4 andenes de carga con rampas hidráulicas, instalación eléctrica industrial trifásica, sistema automático contra incendios y cuarto de máquinas.',
    specs: { Área: '1,200 m²', Duración: '5 meses', Año: '2023', Tipo: 'Construcción industrial' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85', alt: 'Interior nave industrial' },
    ]
  },
  'emp-04': {
    titulo: 'Consultorio Médico Modular',
    tag: 'Empresas',
    catalogo: 'empresas.html',
    catalogoLabel: 'Empresas',
    desc: 'Tres consultorios médicos con sala de espera y área administrativa.',
    descLarga: 'Adecuación de local de 180 m² para clínica médica con 3 consultorios, sala de espera para 15 personas, área de enfermería, sanitarios diferenciados y administración. Todos los acabados cumplen normativa sanitaria: pintura anticontaminante, pisos de vinilo sin costuras y plafón lavable.',
    specs: { Área: '180 m²', Duración: '6 semanas', Año: '2023', Tipo: 'Adecuación sanitaria' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=85', alt: 'Consultorio médico' },
    ]
  },
  'emp-05': {
    titulo: 'Restaurante — Espacio Industrial',
    tag: 'Empresas',
    catalogo: 'empresas.html',
    catalogoLabel: 'Empresas',
    desc: 'Restaurante de 250 m² con diseño industrial: ladrillo, madera y acero.',
    descLarga: 'Construcción de restaurante temático en 10 semanas. Diseño industrial con muros de ladrillo aparente, vigas de acero a la vista, piso de concreto estampado, mesas de madera con base de caño negro y iluminación con focos Edison en jaulas metálicas. Capacidad para 90 comensales.',
    specs: { Área: '250 m²', Capacidad: '90 comensales', Duración: '10 semanas', Año: '2023' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=1200&q=85', alt: 'Interior del restaurante' },
    ]
  },
  'emp-06': {
    titulo: 'Gimnasio Comercial',
    tag: 'Empresas',
    catalogo: 'empresas.html',
    catalogoLabel: 'Empresas',
    desc: 'Gimnasio de 600 m² con zona de pesas, cardio, clases y vestidores.',
    descLarga: 'Construcción de gimnasio comercial en 3 meses. Piso de hule de alto impacto en área de pesas, tarima de madera en área de clases y cardio, espejo de piso a techo en frente de cada zona, ventilación forzada industrial, vestuarios con regaderas y lockers, y recepción con punto de venta.',
    specs: { Área: '600 m²', Duración: '3 meses', Año: '2022', Tipo: 'Construcción deportiva' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=85', alt: 'Área de cardio y pesas' },
    ]
  },
  'emp-07': {
    titulo: 'Sala de Conferencias Premium',
    tag: 'Empresas',
    catalogo: 'empresas.html',
    catalogoLabel: 'Empresas',
    desc: 'Sala ejecutiva para 20 personas con tecnología AV y acústica tratada.',
    descLarga: 'Sala de conferencias de 80 m² con capacidad para 20 personas. Paneles acústicos textiles en paredes y techo, sistema de videoconferencia doble pantalla 85", micrófonos de mesa inalámbricos, iluminación regulable por escenas y mesa de roble con gestión de cables empotrada.',
    specs: { Área: '80 m²', Capacidad: '20 personas', Duración: '4 semanas', Año: '2022' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=1200&q=85', alt: 'Sala de conferencias' },
    ]
  },
  'emp-08': {
    titulo: 'Hotel Boutique — 12 Habitaciones',
    tag: 'Empresas',
    catalogo: 'empresas.html',
    catalogoLabel: 'Empresas',
    desc: 'Remodelación completa de hotel boutique con 12 habitaciones y áreas comunes.',
    descLarga: 'Remodelación integral de hotel boutique de 900 m² en 8 meses. Las 12 habitaciones fueron rediseñadas con identidad propia, baños completos con terminados de lujo, recepción y lobby de nueva imagen, restaurante interior de 40 personas y terraza de relajación en azotea.',
    specs: { Área: '900 m²', Habitaciones: '12', Duración: '8 meses', Año: '2022' },
    imagenes: [
      { url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85', alt: 'Habitación boutique' },
    ]
  }
};

// =============================================
// Lógica principal
// =============================================
(function initDetalle() {
  // FUNCIÓN DE SANITIZACIÓN PARA SEGURIDAD
  // --------------------------------------
  function sanitizeProjectId(id) {
    // Solo permite letras, números y guiones (a-z, A-Z, 0-9, -)
    // Esto previene inyección de código a través del parámetro URL
    if (!id) return null;
    return id.replace(/[^a-zA-Z0-9\-]/g, '');
  }

  function sanitizeText(text) {
    // Escapa caracteres HTML para prevenir XSS
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function safeSetHTML(element, html) {
    // Método seguro para establecer HTML
    element.innerHTML = html;
  }

  // Obtener y sanitizar parámetro de URL
  const params = new URLSearchParams(window.location.search);
  const rawId = params.get('proyecto');
  const id = sanitizeProjectId(rawId);
  const proyecto = id ? PROYECTOS[id] : null;

  // Si no existe el id, muestra un mensaje genérico
  if (!proyecto) {
    document.getElementById('project-title').textContent = 'Proyecto no encontrado';
    document.getElementById('project-desc').textContent = 'Vuelve al catálogo y selecciona un proyecto.';
    return;
  }

  // Actualiza la cabecera
  document.title = proyecto.titulo + ' | Constructora Damie';
  document.getElementById('project-title').textContent = proyecto.titulo;
  document.getElementById('project-desc').textContent = proyecto.desc;
  document.getElementById('project-tag').textContent = proyecto.tag;
  document.getElementById('project-long-desc').textContent = proyecto.descLarga;

  // Breadcrumb dinámico (con sanitización)
  const breadcrumbHTML = `
    <li><a href="../index.html">Inicio</a> /</li>
    <li><a href="${sanitizeText(proyecto.catalogo)}">${sanitizeText(proyecto.catalogoLabel)}</a> /</li>
    <li>${sanitizeText(proyecto.titulo)}</li>
  `;
  document.getElementById('breadcrumb').innerHTML = breadcrumbHTML;

  // Enlace "volver al catálogo"
  document.getElementById('back-link').href = proyecto.catalogo;
  document.getElementById('back-link').textContent = `← Volver a ${proyecto.catalogoLabel}`;

  // Ficha técnica (con sanitización)
  const specsDL = document.getElementById('project-specs');
  Object.entries(proyecto.specs).forEach(([clave, valor]) => {
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.textContent = sanitizeText(clave);
    dd.textContent = sanitizeText(valor);
    specsDL.appendChild(dt);
    specsDL.appendChild(dd);
  });

  // Imagen de portada (la primera de la galería)
  const cover = document.getElementById('detail-cover');
  cover.style.backgroundImage = `url('${proyecto.imagenes[0].url}')`;
  cover.setAttribute('aria-label', proyecto.imagenes[0].alt);

  // Miniaturas de la galería (con sanitización de atributos)
  const thumbGrid = document.getElementById('thumb-grid');
  proyecto.imagenes.forEach((img, i) => {
    const btn = document.createElement('button');
    btn.className = 'thumb' + (i === 0 ? ' thumb--active' : '');
    btn.setAttribute('role', 'listitem');
    btn.setAttribute('aria-label', 'Ver imagen: ' + sanitizeText(img.alt));
    btn.dataset.index = String(i);
    
    // Crear imagen de forma segura
    const imgEl = document.createElement('img');
    imgEl.src = img.url.replace('w=1200', 'w=300');
    imgEl.alt = sanitizeText(img.alt);
    imgEl.loading = 'lazy';
    btn.appendChild(imgEl);
    
    thumbGrid.appendChild(btn);
  });

  // Al hacer clic en miniatura: cambia portada o abre lightbox
  thumbGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.thumb');
    if (!btn) return;
    const idx = Number(btn.dataset.index);

    // Actualiza portada
    cover.style.backgroundImage = `url('${proyecto.imagenes[idx].url}')`;
    thumbGrid.querySelectorAll('.thumb').forEach(t => t.classList.remove('thumb--active'));
    btn.classList.add('thumb--active');

    // Abre lightbox
    openLightbox(idx);
  });

  // Clic en portada también abre el lightbox
  cover.addEventListener('click', () => {
    const active = thumbGrid.querySelector('.thumb--active');
    const idx = active ? Number(active.dataset.index) : 0;
    openLightbox(idx);
  });

  // =============================================
  // Lightbox
  // =============================================
  let currentIdx = 0;
  const lightbox   = document.getElementById('lightbox');
  const lbImg      = document.getElementById('lightbox-img');
  const lbClose    = document.getElementById('lightbox-close');
  const lbPrev     = document.getElementById('lightbox-prev');
  const lbNext     = document.getElementById('lightbox-next');

  function openLightbox(idx) {
    currentIdx = idx;
    showLbImage();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  function showLbImage() {
    const img = proyecto.imagenes[currentIdx];
    lbImg.src = img.url;
    lbImg.alt = img.alt;
    lbPrev.style.display = proyecto.imagenes.length > 1 ? '' : 'none';
    lbNext.style.display = proyecto.imagenes.length > 1 ? '' : 'none';
  }

  lbClose.addEventListener('click', closeLightbox);

  lbPrev.addEventListener('click', () => {
    currentIdx = (currentIdx - 1 + proyecto.imagenes.length) % proyecto.imagenes.length;
    showLbImage();
  });

  lbNext.addEventListener('click', () => {
    currentIdx = (currentIdx + 1) % proyecto.imagenes.length;
    showLbImage();
  });

  // Cerrar con clic en fondo y tecla Escape
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lbPrev.click();
    if (e.key === 'ArrowRight') lbNext.click();
  });
})();
