// ==========================================================
//  NUESTRA PARTIDA · aquí editas todo
//  1. Pon tus fotos en la carpeta /fotos y tus audios en /audios
//  2. Agrégalos abajo con su nombre de archivo exacto
//  3. Guarda y sube los cambios
// ==========================================================
window.CONFIG = {
  titulo: "Nuestra Partida",
  p1: "Santy",            // Player 1 (tú)
  p2: "Mi princesa",      // Player 2 (ella)
  juntosDesde: "2025-08-01",  // 1 de agosto de 2025, el dia que se hicieron novios

  // Canción de fondo: pega el link de YouTube (acepta youtu.be, watch?v=, shorts)
  // Si quieres que empiece en un segundo específico, agrega &t=30 al link
  youtube: "https://youtu.be/cE6wxDqdOV0",
  // (opcional) en vez de YouTube, un mp3 propio: "cancion.mp3"
  cancionMp3: "",

  // Nivel 1 · fotos (archivos dentro de /fotos)
  fotos: [
    // { src: "fotos/1.jpg", caption: "Nuestra primera cita" },
  ],

  // Nivel 2 · audios (grábalos con el celular, archivos dentro de /audios)
  audios: [
    // { src: "audios/1.m4a", title: "Buenos días, mi amor", date: "25 de septiembre de 2026" },
  ],

  // Nivel 3 · la carta (usa \n para saltos de línea, o `backticks` para escribir varias líneas)
  carta: `Hola, mi amor:

Si estás leyendo esto, ya pasaste dos niveles. Te dije que eras buena en esto.

Esta página la hice línea por línea pensando en ti. Cada botón, cada color rosa, cada corazón pixelado. Porque tú eres mi persona favorita para jugar la vida.

(Santy: borra este texto y escribe tu carta aquí.)`,
  firma: "Tu Player 1",

  // Nivel 4 · razones (una por línea de la lista)
  razones: [
    "Tu risa arregla cualquier bug de mi día",
    "Me apoyas en todo, incluso en mis ideas locas",
    "Contigo hasta el silencio es cómodo",
    "Porque eres mi Player 2 favorita",
    "Por cómo me miras cuando crees que no me doy cuenta",
    "Porque haces que volver a casa se sienta bonito"
  ],

  // Nivel 5 · pastel
  tituloPastel: "¡Feliz cumpleaños, mi amor!",
  mensajePastel: "Que este año te traiga todo lo que te mereces, que es muchísimo. Yo me encargo de la parte de hacerte reír.",

  // Final
  mensajeFinal: "Llegaste al final… pero en realidad es apenas el nivel 1 de todo lo que nos falta vivir juntos."
};
