# Portfolio — Julián Borroni

Sitio estático (HTML/CSS/JS puro, sin build necesario). Para verlo, abrí `index.html`
en el navegador, o subilo tal cual a cualquier hosting (Vercel, Netlify, GitHub Pages,
Hostinger, etc.).

## Pendientes antes de publicar

### 1. Videos (4 links de YouTube/Vimeo no listados)
Abrí `script.js` y en las primeras líneas vas a ver el bloque `VIDEO_LINKS`.
Reemplazá cada `null` por el link de **embed** (no el link normal) una vez que subas
cada video como "no listado":

```js
const VIDEO_LINKS = {
  identityReel: "https://www.youtube.com/embed/TU_ID_AQUI",
  elProfe: "https://www.youtube.com/embed/TU_ID_AQUI",
  susanaMerli: "https://www.youtube.com/embed/TU_ID_AQUI",
  tresTV: "https://www.youtube.com/embed/TU_ID_AQUI",
};
```

Para sacar el link de embed desde un video de YouTube: `Compartir → Insertar` y copiá
solo la URL que está dentro de `src="..."`. Vimeo funciona igual con
`https://player.vimeo.com/video/ID`.

Mientras el valor sea `null`, la web muestra un cartel de "Video próximamente"
(o la carátula, en el caso de Media Punta).

### 2. CV en PDF
Falta el archivo `Cv_Borroni_Julian_2026.pdf`. Colocalo en:
```
assets/cv/Cv_Borroni_Julian_2026.pdf
```
El botón "Descargar CV" ya apunta a esa ruta exacta.

### 3. Reels sueltos de Susana Merli y 3TV
Sus cards de portada muestran un fondo negro con el texto "Reel inmobiliario" /
"Reel publicitario" hasta que subas los videos (paso 1). Si querés una imagen de
portada en vez de fondo negro, decime y la agrego.

## Estructura

```
index.html
styles.css
script.js
assets/
  img/        → imágenes ya optimizadas (WebP) de cada proyecto
  pdf/        → manuales de marca y dossiers completos (descargables)
  cv/         → poné acá el CV
  profile/    → tu foto
```

## Actualizar un proyecto a futuro
Todo el contenido de cada case study (texto, galería, links) vive en el objeto
`PROJECTS` dentro de `script.js`. Para agregar un proyecto nuevo:
1. Sumá las imágenes en `assets/img/`.
2. Agregá una entrada nueva en `PROJECTS` con el mismo formato que las existentes.
3. Agregá una card nueva en `index.html` dentro de `<section class="work">`,
   con `data-project="tu-clave"` apuntando a la clave que usaste en `PROJECTS`.

## Nota sobre "El Juicio"
Ya está embebido con tu link de YouTube. Como es contenido 360°, aclaré en el texto
del case study que para la experiencia inmersiva completa conviene verlo desde la
app de YouTube.
