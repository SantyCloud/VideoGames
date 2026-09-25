# Nuestra Partida: contexto del proyecto

Página web de regalo que Santy le hace a su novia. Tiene estilo de videojuego pixel art en rosa pastel. Su cumpleaños es el **1 de octubre**, y esa es la fecha límite.
Se publica con **GitHub Pages** desde el repo `SantyCloud/VideoGames` (rama `main`, carpeta raíz) → https://santycloud.github.io/VideoGames/ — ojo con las mayúsculas, Pages distingue el caso y la versión en minúsculas da 404

Santy es programador, así que puedes hablarle en términos técnicos. Escríbele en español.

## Estructura

```
index.html   → toda la app (HTML + CSS + JS inline, sin build, sin dependencias)
config.js    → TODO el contenido editable (window.CONFIG). Normalmente solo se toca este archivo
fotos/       → imágenes (.jpg recomendado)
audios/      → mensajes de voz (.m4a / .mp3)
```

No hay framework ni bundler. Para probar en local: `python3 -m http.server 8000` y abrir http://localhost:8000.
Abrirlo como `file://` también funciona, salvo el reproductor de YouTube, que necesita http.

## Flujo de la app

1. **Pantalla de título**: barra "PLAYER 1 ♥ PLAYER 2" con los nombres, título pixel, botón PRESS START, advertencia graciosa y dos sprites pixel (chico y chica) dibujados en canvas desde mapas de caracteres (`SPR` en el JS).
   PRESS START arranca la música. Los navegadores no permiten autoplay con sonido, así que tiene que ser con un toque.
2. **Menú de niveles** con HUD: días juntos (se calcula desde `juntosDesde`), un reloj en vivo h:m:s y "HP de amor".
3. **Nivel 1 Recuerdos**: galería de polaroids con lightbox.
4. **Nivel 2 Mensajes de voz**: casetes con play/pausa y barra de progreso. Mientras suena un audio, la música de fondo baja (`duck()`).
5. **Nivel 3 La carta**: sobre con sello de corazón. Al tocarlo, la carta se escribe letra por letra, con un botón "Mostrar todo".
6. **Nivel 4 Razones**: cápsulas "?" que se abren y muestran una razón cada una. Contador de abiertas y confeti al abrir todas.
7. **Nivel 5 Pide un deseo**: pastel con 5 velas que se apagan tocándolas. Al apagar todas, confeti + `tituloPastel` + `mensajePastel`.
   El micrófono no se usa a propósito.
8. **Final**: se desbloquea al visitar los 5 niveles (se guarda en localStorage con la clave `np-visited`). Muestra "¡Juego completado!", `mensajeFinal` y una ventana retro con la pregunta "¿Jugamos otra partida… para siempre?". El botón **No huye** del cursor o del dedo y el **Sí** crece. Con Sí salen corazones.

Hay un botón ♪ fijo arriba a la derecha que prende y apaga la música.
Se respeta `prefers-reduced-motion`: sin animaciones, sin confeti y la carta aparece completa.

## Música

- `CONFIG.youtube`: acepta links `youtu.be/`, `watch?v=`, `/shorts/`, `/embed/`, `/live/` y un `&t=SEGUNDOS` opcional para el inicio. Usa la YouTube IFrame API con un player oculto fuera de pantalla (`#yt-wrap`) en loop (`loop:1, playlist:VID`).
- `CONFIG.cancionMp3`: alternativa con un MP3 local. Solo se usa si `youtube` está vacío. Es más confiable en iPhone, donde YouTube puede no sonar si el celular está en modo silencio.
- La canción que quiere Santy: **"Video Games" de Lana Del Rey**. Él pasa el link.

## config.js (esquema)

```js
window.CONFIG = {
  titulo: "Nuestra Partida",   // la última palabra sale en rosa
  p1: "Santy", p2: "Mi amor",
  juntosDesde: "AAAA-MM-DD",
  youtube: "https://youtu.be/XXXXXXXXXXX",
  cancionMp3: "",
  fotos:  [{ src: "fotos/1.jpg", caption: "texto corto" }],
  audios: [{ src: "audios/1.m4a", title: "Título", date: "25 de septiembre de 2026" }],
  carta: `texto con saltos de línea`,
  firma: "Tu Player 1",
  razones: ["...", "..."],
  tituloPastel: "¡Feliz cumpleaños, mi amor!",
  mensajePastel: "...",
  mensajeFinal: "..."
};
```

La carta y las razones que vienen por defecto son de ejemplo. Santy tiene que escribir las suyas. Si no las ha cambiado, recuérdaselo.

## Diseño (mantenerlo consistente)

- Paleta (variables CSS en `:root`): `--bg #FFE3EE`, `--panel #FFF7FB`, `--ink #5B2A4A` (bordes y texto), `--accent #FF6FA8`, `--accent2 #FF9CC5`, `--mint #A8E6CF`, `--butter #FFE59A`, `--lilac #CDB4FF`, `--sky #BFE3FF`.
- Tipografías de Google Fonts: **Press Start 2P** para títulos y etiquetas (poco y pequeño), **Pixelify Sans** para el cuerpo y **VT323** para textos tipo terminal o números.
- Bordes gruesos de 3–4px en `--ink`, sombras sólidas hacia abajo (`box-shadow: 0 5px 0 var(--ink)`), sin degradados morados ni emojis de decoración.
- Tema único claro a propósito, sin modo oscuro. Tiene que verse bien en un celular de ~400px de ancho, que es donde ella lo va a abrir.

## Reglas al trabajar

- Las fotos se comprimen antes de subirlas: máximo ~1200px del lado largo, JPEG calidad ~80, idealmente menos de 300 KB cada una. Si Santy manda originales pesados, comprímelos (con `sharp`, `ffmpeg` o Pillow) antes del commit.
- Los audios deben pesar menos de 4 MB cada uno. Si pesan más, convertirlos a m4a/aac de 96 kbps.
- En `config.js` los nombres de archivo tienen que coincidir exactamente (mayúsculas incluidas; GitHub Pages distingue mayúsculas).
- Evitar nombres con espacios o tildes. Renombrar a `1.jpg`, `2.jpg`… o a algo como `playa-2025.jpg`.
- Después de cada cambio: commit con un mensaje claro en español y `git push` a `main`. GitHub Pages tarda ~1 minuto en actualizar.
- Las fotos de ella son privadas y el repo es público. Si Santy quiere privacidad, sugiérele hacer el repo privado (Pages en repos privados requiere GitHub Pro) o no subir fotos sensibles.
- No agregues frameworks, build steps ni dependencias. Tiene que seguir siendo HTML estático.

## Pendientes

- [ ] Poner el link de YouTube de "Video Games" en `config.js`
- [ ] Nombres reales (`p2` = cómo le dice Santy a ella) y la fecha `juntosDesde`
- [ ] Subir las fotos a `fotos/` y registrarlas en `CONFIG.fotos` con su pie de foto
- [ ] Subir los audios a `audios/` y registrarlos en `CONFIG.audios`
- [ ] Carta, razones y mensajes escritos por Santy
- [x] Activar GitHub Pages (rama `main` / root) — hecho, el sitio responde 200
- [ ] Verificar el link en el celular: https://santycloud.github.io/VideoGames/
- [ ] Probar en iPhone y Android: música, audios, velas y el botón "No"

## Ideas extra si Santy pide más

- Una pantalla de "cargando" tipo consola con la frase "Cargando recuerdos… 99%".
- Un "Nivel secreto" desbloqueable con un código, por ejemplo la fecha de aniversario.
- Una línea de tiempo de momentos importantes con fechas.
- Un "cupón canjeable" pixel (una cita, un masaje, elegir la película).
- Easter egg: el código Konami (↑↑↓↓←→←→BA) lanza corazones.
