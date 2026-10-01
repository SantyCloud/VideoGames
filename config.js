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
    { src: "fotos/1.jpg", caption: "Tus 22" },
    { src: "fotos/2.jpg", caption: "Esa sonrisa" },
  ],

  // Nivel 2 · audios (grábalos con el celular, archivos dentro de /audios)
  audios: [
    { src: "audios/1.m4a", title: "Recordatorio de lo especial que eres", date: "" },
    { src: "audios/2.m4a", title: "Eres el amor de mi vida", date: "" },
    { src: "audios/3.m4a", title: "Audio para animarte", date: "" },
    { src: "audios/4.m4a", title: "Audio por si estás pasando momentos difíciles", date: "" },
    { src: "audios/5.m4a", title: "Santy enojado", date: "" },
  ],

  // Nivel 6 · el video que hizo ella (déjalo vacío si no hay)
  video: { src: "video/nuestras-partidas.mp4", poster: "video/poster.jpg", caption: "" },

  // Nivel 3 · la carta (usa \n para saltos de línea, o `backticks` para escribir varias líneas)
  carta: `Mi vida:

Nunca estuve tan seguro de algo como de lo que siento por ti, escribir nuestra historia juntos ha sido la experiencia más bonita de mi vida.

Mi vida entera te la dedico a ti, eres alguien tan interesante por dentro y por fuera.

Eres una mujer tan única y especial, definitivamente la mujer de mis sueños

Te amo tanto amor de mi vida, mi alma gemela, mi único y gran amor, mi corazón de melón`,
  firma: "Tu Santy",

  // Nivel 4 · razones (una por línea de la lista)
  razones: [
    "Por ser mi primer y único amor",
    "Porque hasta lo más mínimo en ti es interesante",
    "Por tu personalidad tan única",
    "Por los momentos tan lindos que me haces vivir",
    "Por lo mucho que te esfuerzas día a día",
    "Por el respeto que tienes hacia otros",
    "Por lo inteligente y capaz que eres de todo",
    "Por tu amabilidad y carisma",
    "Porque quiero pasar toda mi vida a tu lado",
    "Porque a tu lado todo es tan seguro",
    "Por entenderme incluso cuando ni yo me entiendo",
    "Por tus enojos y berrinches bonitos",
    "Porque eres la mujer más perfecta del universo",
  ],

  // Nivel 5 · pastel
  tituloPastel: "¡Feliz cumpleaños, princesa!",
  mensajePastel: "Que este año nuestra relación se fortalezca más y que todo te salga bien",

  // Final
  mensajeFinal: "Te amo tanto mi amor, me esforzaré cada día más para ser el mejor para ti"
};
