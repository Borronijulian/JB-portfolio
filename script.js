// ===========================================================================
// CONFIG DE VIDEOS PENDIENTES
// Reemplazá estos valores por los links de YouTube/Vimeo (no listados) cuando
// los tengas. Usá el formato de embed, por ejemplo:
// "https://www.youtube.com/embed/VIDEO_ID"  o  "https://player.vimeo.com/video/ID"
// Dejar en null muestra el placeholder "Video próximamente".
// ===========================================================================
const VIDEO_LINKS = {
  identityReel: 'https://www.youtube.com/embed/FmsoEsAvhv0',       // REEL iDENTITY CAMPUS.mp4
  elProfe: 'https://www.youtube.com/embed/3LdqjFJt7-g',            // El profe y el futbol video.mp4
  susanaMerli: 'https://www.youtube.com/embed/x6oWGLof2Nk',        // Susana merle.mp4
  tresTV: 'https://www.youtube.com/embed/WckaU_kO4Uk',
  paginasmg: 'https://www.youtube.com/embed/9DM5vr_3jnM',   // reel paginaswebmg
};

// ===========================================================================
// TRADUCCIONES (ES / EN)
// ===========================================================================
const I18N = {
  es: {
    nav_about: 'Sobre mí', nav_work: 'Trabajo', nav_experience: 'Experiencia', nav_contact: 'Contacto',
    badge: 'Disponible para nuevos proyectos y oportunidades',
    eyebrow: 'Diseño digital · Edición de video · Fotografía',
    hero_sub: 'Licenciado en Diseño Digital, editor audiovisual y fotógrafo, con un perfil creativo y multidisciplinario enfocado en la comunicación visual, el diseño y la creación de contenido digital.',
    stat_brands: 'Marcas', stat_projects: 'Proyectos', stat_years: 'Años',
    btn_view_projects: 'Ver proyectos', btn_talk: 'Hablemos', btn_cv: 'Descargar CV',
    clients_label: 'Marcas con las que trabajé',
    about_label: 'Sobre mí',
    about_title: 'Diseño con criterio, antes que con herramientas.',
    about_text: 'Soy Julián, Licenciado en Diseño Digital / Audiovisual por la Universidad de Palermo y fotógrafo formado en el Centro Fotográfico Quilmes. Mi perfil combina diseño gráfico, identidad visual, creación de contenido y edición audiovisual, con un enfoque creativo orientado a desarrollar soluciones visuales que comuniquen con claridad, coherencia y personalidad.',
    philosophy_label: 'Filosofía',
    philosophy_title: 'Cómo pienso el diseño',
    philosophy_intro: 'Antes de abrir Illustrator, primero entiendo qué necesita decir la marca.',
    philosophy_1_title: "Cada decisión tiene un propósito",
    philosophy_1_text: "El diseño no se trata únicamente de crear algo atractivo. Cada color, forma, composición y elemento visual debe tener una intención y contribuir a comunicar un mensaje.",
    philosophy_2_title: "Creatividad con identidad",
    philosophy_2_text: "Creo que cada proyecto necesita encontrar su propio lenguaje visual. Me interesa explorar diferentes ideas y recursos creativos para desarrollar piezas con personalidad, sin perder de vista su esencia y objetivo.",
    philosophy_3_title: "Los detalles hacen la diferencia",
    philosophy_3_text: "Desde una fotografía hasta una pieza gráfica o audiovisual, considero que los pequeños detalles construyen el resultado final. La composición, la iluminación, el ritmo y la estética son fundamentales para generar una experiencia visual coherente.",
    tools_label: 'Herramientas',
    work_label: 'Portafolio', work_title: 'Proyectos seleccionados',
    cat_design: 'Diseño gráfico', cat_web: 'Web', cat_reels: 'Reels', cat_shorts: 'Proyectos universitarios',
    p_mana_desc: 'Identidad de marca para un emprendimiento de cajas de regalo.',
    p_warner_desc: 'Sistema de marca para una tienda de accesorios para autos.',
    p_identity_desc: 'Dossiers y piezas gráficas para un campus de hockey internacional.',
    p_identityreel_desc: 'Reel institucional para redes del campus de hockey.',
    p_standtick_desc: 'Prototipo UX/UI para compra de entradas a eventos.',
    p_duki_desc: 'Sitio web inspirado en el artista Duki.',
    p_mediapunta_desc: 'Edición de un podcast de fútbol chileno para redes.',
    p_susana_desc: 'Reel promocional para una inmobiliaria.',
    p_tresTV_desc: 'Reel publicitario para la productora.',
    p_paginasmg_desc: 'Reel comparativo del antes y después de un diseño web.',
    p_creditos_title: 'Créditos: El apagón',
    p_creditos_desc: 'Motion graphics para los créditos de un cortometraje.',
    p_laciudad_desc: 'Cortometraje de stop motion con maqueta y modelado propios.',
    p_eljuicio_desc: 'Cortometraje de comedia en formato VR 360°.',
    tag_branding: 'Branding', tag_identity: 'Identidad', tag_brandsystem: 'Sistema de marca',
    tag_editorial: 'Editorial', tag_dossier: 'Dossier', tag_video: 'Video',
    tag_uxui: 'UX/UI', tag_prototype: 'Prototipo', tag_webdev: 'Desarrollo web', tag_ui: 'UI',
    tag_videoediting: 'Edición de video', tag_motion: 'Motion', tag_marketing: 'Marketing',
    tag_short: 'Cortometraje', tag_vr: 'VR 360°',
    exp_label: 'Experiencia', exp_title: 'Trayectoria',
    exp_photo_title: 'Fotógrafo freelance',
    exp_identity_b1: 'Diseño de 2 dossiers de promoción de punta a punta (Mundial 2026 y Tecnificación 2026)',
    exp_identity_b2: 'Edición del reel institucional para redes',
    exp_print_b1: 'A cargo del proceso de sublimación de piezas gráficas de producción',
    exp_print_b2: 'Preparación de artes para impresión sin errores',
    exp_mp_b1: 'Edición semanal de episodios de un podcast de fútbol chileno',
    exp_mp_b2: 'Diseño de carátulas y gráficos para cada entrega',
    exp_copi_b1: 'Preparación de archivos para preimpresión',
    exp_copi_b2: 'Soporte en diseño gráfico general del estudio',
    contact_label: 'Contacto', contact_title: 'Trabajemos juntos.',
    contact_email_label: 'Email',
    fab_contact: 'Contacto',
    fab_top: '↑ Volver arriba',
    level_basic: 'Nivel básico', level_intermediate: 'Nivel intermedio', level_advanced: 'Nivel avanzado',
  },
  en: {
    nav_about: 'About', nav_work: 'Work', nav_experience: 'Experience', nav_contact: 'Contact',
    badge: 'Open to new projects and opportunities',
    eyebrow: 'Digital Design · Video Editing · Photography',
    hero_sub: 'Digital Design graduate, audiovisual editor and photographer, with a creative, multidisciplinary profile focused on visual communication, design and digital content creation.',
    stat_brands: 'Brands', stat_projects: 'Projects', stat_years: 'Years',
    btn_view_projects: 'View projects', btn_talk: "Let's talk", btn_cv: 'Download CV',
    clients_label: 'Brands I\u2019ve worked with',
    about_label: 'About me',
    about_title: 'Design led by judgment, not just tools.',
    about_text: "I'm Julián, a graduate in Digital / Audiovisual Design from Universidad de Palermo and a photographer trained at Centro Fotográfico Quilmes. My profile combines graphic design, visual identity, content creation and audiovisual editing, with a creative approach focused on developing visual solutions that communicate with clarity, coherence and personality.",
    philosophy_label: 'Philosophy',
    philosophy_title: 'How I think about design',
    philosophy_intro: 'Before opening Illustrator, I first understand what the brand needs to say.',
    philosophy_1_title: "Every decision has a purpose",
    philosophy_1_text: "Design isn't only about making something attractive. Every color, shape, composition and visual element must have an intention and help communicate a message.",
    philosophy_2_title: "Creativity with identity",
    philosophy_2_text: "I believe every project needs to find its own visual language. I like exploring different ideas and creative resources to develop pieces with personality, without losing sight of their essence and goal.",
    philosophy_3_title: "Details make the difference",
    philosophy_3_text: "From a photograph to a graphic or audiovisual piece, I believe small details build the final result. Composition, lighting, rhythm and aesthetics are essential to create a coherent visual experience.",
    tools_label: 'Tools',
    work_label: 'Portfolio', work_title: 'Selected projects',
    cat_design: 'Graphic Design', cat_web: 'Web', cat_reels: 'Reels', cat_shorts: 'University projects',
    p_mana_desc: 'Brand identity for a gift-box venture.',
    p_warner_desc: 'Brand system for a car accessories store.',
    p_identity_desc: 'Dossiers and graphic pieces for an international hockey campus.',
    p_identityreel_desc: 'Institutional social media reel for the hockey campus.',
    p_standtick_desc: 'UX/UI prototype for buying event tickets.',
    p_duki_desc: 'Website inspired by artist Duki.',
    p_mediapunta_desc: 'Editing a Chilean football podcast for social media.',
    p_susana_desc: 'Promotional reel for a real estate agency.',
    p_tresTV_desc: 'Advertising reel for the production company.',
    p_paginasmg_desc: 'Before-and-after reel of a web design.',
    p_creditos_title: 'Credits: El apagón',
    p_creditos_desc: 'Motion graphics for a short film\'s end credits.',
    p_laciudad_desc: 'Stop motion short with handmade scale model and modeling.',
    p_eljuicio_desc: 'Comedy short film in 360° VR format.',
    tag_branding: 'Branding', tag_identity: 'Identity', tag_brandsystem: 'Brand system',
    tag_editorial: 'Editorial', tag_dossier: 'Dossier', tag_video: 'Video',
    tag_uxui: 'UX/UI', tag_prototype: 'Prototype', tag_webdev: 'Web development', tag_ui: 'UI',
    tag_videoediting: 'Video editing', tag_motion: 'Motion', tag_marketing: 'Marketing',
    tag_short: 'Short film', tag_vr: 'VR 360°',
    exp_label: 'Experience', exp_title: 'Timeline',
    exp_photo_title: 'Freelance photographer',
    exp_identity_b1: 'Designed 2 promotional dossiers end-to-end (World Cup 2026 and Technification 2026)',
    exp_identity_b2: 'Edited the institutional reel for social media',
    exp_print_b1: 'In charge of the sublimation process for production graphics',
    exp_print_b2: 'Prepared print-ready artwork with zero errors',
    exp_mp_b1: 'Weekly episode editing for a Chilean football podcast',
    exp_mp_b2: 'Designed covers and graphics for each episode',
    exp_copi_b1: 'Prepared files for prepress',
    exp_copi_b2: 'General graphic design support for the studio',
    contact_label: 'Contact', contact_title: "Let's work together.",
    contact_email_label: 'Email',
    fab_contact: 'Contact',
    fab_top: '↑ Back to top',
    level_basic: 'Basic level', level_intermediate: 'Intermediate level', level_advanced: 'Advanced level',
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang === 'es' ? 'es-AR' : 'en';
  const dict = I18N[lang];
  document.querySelectorAll('.tool-chip[data-level]').forEach(el => {
    el.setAttribute('data-tip', dict['level_' + el.dataset.level]);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  const toggleLabel = lang === 'es' ? 'EN' : 'ES';
  const t1 = document.getElementById('langToggle');
  const t2 = document.getElementById('langToggleMobile');
  if (t1) t1.textContent = toggleLabel;
  if (t2) t2.textContent = toggleLabel;
  localStorage.setItem('lang', lang);
}

function toggleLanguage(){
  applyLanguage(currentLang === 'es' ? 'en' : 'es');
}

document.getElementById('langToggle')?.addEventListener('click', toggleLanguage);
document.getElementById('langToggleMobile')?.addEventListener('click', toggleLanguage);

// ===========================================================================
// DATA DE PROYECTOS (bilingüe)
// ===========================================================================
const PROJECTS = {
  mana: {
    tag: { es: 'Branding', en: 'Branding' },
    title: 'Mana',
    year: '2026',
    desc: {
      es: 'Emprendimiento de venta de cajas de regalo. Desarrollé la identidad visual completa: logotipo, manual de marca, paleta de colores, tipografías, patrones de uso y mockups de aplicación.',
      en: 'A gift-box retail venture. I developed the full visual identity: logo, brand manual, color palette, typography, usage patterns and application mockups.'
    },
    gallery: [
      'assets/img/mana/mana-01-logo.webp',
      'assets/img/mana/mana-02-usos.webp',
      'assets/img/mana/mana-03-paleta.webp',
      'assets/img/mana/mana-04-mockup.webp',
      'assets/img/mana/mana-05-stickers.webp',
    ],
    pdf: 'assets/pdf/Mana - Identidad de marca.pdf',
    pdfLabel: { es: 'Ver manual de marca completo (PDF)', en: 'View full brand manual (PDF)' },
  },
  warner: {
    tag: { es: 'Branding', en: 'Branding' },
    title: 'Warner',
    year: '2025',
    desc: {
      es: 'Tienda de accesorios para autos. Identidad visual de marca completa: logotipo, manual de marca, paleta de colores, tipografías, patrones de uso y mockups de aplicación en fachada e indumentaria.',
      en: 'A car accessories store. Full brand visual identity: logo, brand manual, color palette, typography, usage patterns and application mockups on storefront and apparel.'
    },
    gallery: [
      'assets/img/warner/warner-01-logo.webp',
      'assets/img/warner/warner-02-tipografia.webp',
      'assets/img/warner/warner-03-paleta.webp',
      'assets/img/warner/warner-04-mockups.webp',
      'assets/img/warner/warner-05-fachada.webp',
    ],
    pdf: 'assets/pdf/Warner - identidad de marca.pdf',
    pdfLabel: { es: 'Ver manual de marca completo (PDF)', en: 'View full brand manual (PDF)' },
  },
  identity: {
    cover: 'assets/img/identity/identity-cover.webp',
    tag: { es: 'Diseño gráfico · Dossier', en: 'Graphic Design · Dossier' },
    title: 'Identity Campus',
    year: '2025 – 2026',
    desc: {
      es: 'Campus de hockey que organiza viajes y entrenamientos en el exterior. Realicé los dossiers de promoción para el Mundial 2026 y para el Campus de Tecnificación, además de flyers y piezas de comunicación interna y externa.',
      en: 'A hockey campus organizing trips and training abroad. I designed the promotional dossiers for the 2026 World Cup and the Technification Campus, plus flyers and internal and external communication pieces.'
    },
    gallery: [
      'assets/img/identity/identity-01-mundial-cover.webp',
      'assets/img/identity/identity-02-mundial-hockey.webp',
      'assets/img/identity/identity-03-mundial-team.webp',
      'assets/img/identity/identity-04-tecnif-cover.webp',
      'assets/img/identity/identity-05-tecnif-deporte.webp',
    ],
    pdfs: [
      { href: 'assets/pdf/Identity Campus - Mundial 2026 - dossier.pdf', label: { es: 'Dossier Mundial 2026 (PDF)', en: 'World Cup 2026 Dossier (PDF)' } },
      { href: 'assets/pdf/Dossier Tecnificacion 2026.pdf', label: { es: 'Dossier Tecnificación 2026 (PDF)', en: 'Technification 2026 Dossier (PDF)' } },
    ],
  },
  identityreel: {
    cover: 'assets/img/identity/identity-cover.webp',
    tag: { es: 'Reel · Edición de video', en: 'Reel · Video editing' },
    title: 'Identity Campus',
    year: '2025 – 2026',
    desc: {
      es: 'Reel institucional del campus de hockey para redes sociales. Me encargué de la edición del video.',
      en: 'Institutional reel for the hockey campus, made for social media. I handled the video editing.'
    },
    videoKey: 'identityReel',
    videoVertical: true,
  },
  mediapunta: {
    tag: { es: 'Edición de video', en: 'Video editing' },
    title: 'Media Punta',
    year: '2024',
    desc: {
      es: 'Canal tipo podcast de fútbol chileno. Mi rol incluyó selección de clips, edición, subtítulos, gráficos, diseño de carátulas y sincronización de audio, buscando un contenido dinámico y apto para redes.',
      en: 'A Chilean football podcast channel. My role included clip selection, editing, subtitles, graphics, cover design and audio sync, aiming for dynamic, social-ready content.'
    },
    videoKey: 'elProfe',
    videoVertical: true,
    poster: 'assets/img/mediapunta/el-profe-caratula.webp',
    extraVideos: [{ embed: 'https://www.youtube.com/embed/olZ4x8ZsFbs', vertical: true, poster: 'assets/img/mediapunta/mediapunta-cover.webp' }],
  },
  susana: {
    cover: 'assets/img/susana/susana-cover.webp',
    tag: { es: 'Video · Marketing inmobiliario', en: 'Video · Real estate marketing' },
    title: 'Susana Merle Propiedades',
    year: '2026',
    desc: {
      es: 'Reel promocional para publicar uno de los edificios disponibles de la inmobiliaria.',
      en: 'Promotional reel to showcase one of the agency\u2019s available buildings.'
    },
    videoKey: 'susanaMerli',
    videoVertical: true,
  },
  paginasmg: {
    cover: 'assets/img/paginasmg/paginasmg-cover.webp',
    tag: { es: 'Reel · Producción audiovisual', en: 'Reel · Video production' },
    title: 'paginaswebmg',
    year: '',
    desc: {
      es: 'Reel para paginaswebmg, diseñador web. El video muestra la comparativa del antes y el después del diseño que realizó para un cliente. Me encargué de la grabación y la edición del material.',
      en: 'Reel for paginaswebmg, a web designer. The video shows a before-and-after comparison of the design he created for a client. I handled the filming and editing of the footage.'
    },
    videoKey: 'paginasmg',
    videoVertical: true,
  },
  tresTV: {
    cover: 'assets/img/tresTV/tresTV-cover.webp',
    tag: { es: 'Video', en: 'Video' },
    title: '3TV',
    year: '2024',
    desc: {
      es: '3TV es la productora detrás de Media Punta. Este reel publicitario fue realizado para presentar a la productora en redes.',
      en: '3TV is the production company behind Media Punta. This advertising reel was made to introduce the company on social media.'
    },
    videoKey: 'tresTV',
    videoVertical: true,
  },
  standtick: {
    tag: { es: 'UX / UI', en: 'UX / UI' },
    title: 'Stand Tick',
    year: { es: 'Trabajo universitario', en: 'University project' },
    desc: {
      es: 'Proyecto de prototipado y diseño UX/UI para una plataforma de compra de entradas a eventos y publicación de eventos, pensada para web y mobile.',
      en: 'A UX/UI prototyping project for an event ticketing and event-publishing platform, designed for web and mobile.'
    },
    figmaEmbed: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/QtxSgWtSAWvBYqCoudYtMy/Stand-Tick?page-id=0%3A1&node-id=550-82&starting-point-node-id=550%3A82',
    externalLink: 'https://www.figma.com/proto/QtxSgWtSAWvBYqCoudYtMy/Stand-Tick?page-id=0%3A1&node-id=550-82&starting-point-node-id=550%3A82&t=1y3IvOZ3hvk0uc50-1',
    externalLabel: { es: 'Abrir prototipo en Figma', en: 'Open prototype in Figma' },
  },
  duki: {
    tag: { es: 'Desarrollo web · UI', en: 'Web development · UI' },
    title: 'Duki — TP Final',
    year: { es: 'Trabajo práctico final', en: 'Final coursework project' },
    desc: {
      es: 'Página web desarrollada como trabajo práctico final de la universidad, inspirada en el artista Duki. Proyecto de diseño y maquetación web.',
      en: 'A website built as a final university project, inspired by artist Duki. A web design and layout project.'
    },
    externalLink: 'https://borronijulian.github.io/BorronijulianTPFINAL/',
    externalLabel: { es: 'Ver sitio en vivo', en: 'View live site' },
    iframePreview: 'https://borronijulian.github.io/BorronijulianTPFINAL/',
  },
  eljuicio: {
    cover: 'assets/img/eljuicio/eljuicio-cover.webp',
    tag: { es: 'Cortometraje · VR 360°', en: 'Short film · VR 360°' },
    title: 'El Juicio',
    year: { es: 'Trabajo universitario', en: 'University project' },
    desc: {
      es: 'Cortometraje de comedia realizado en la universidad en formato VR 360°. Se muestra acá como video plano; para la experiencia inmersiva completa, lo ideal es verlo desde la app de YouTube con visor VR.',
      en: 'A comedy short film made at university in 360° VR format. Shown here as a flat video; for the full immersive experience, watch it from the YouTube app with a VR viewer.'
    },
    videoEmbed: 'https://www.youtube.com/embed/pOBqW1lEgTI',
  },
  creditos: {
    cover: 'assets/img/eljuicio/creditos-cover.webp',
    tag: { es: 'Motion graphics', en: 'Motion graphics' },
    title: { es: 'Créditos: El apagón', en: 'Credits: El apagón' },
    year: { es: 'Trabajo universitario', en: 'University project' },
    desc: {
      es: 'Motion graphics de los créditos de “El apagón”, un cortometraje realizado para la universidad.',
      en: 'Motion graphics for the end credits of “El apagón”, a short film made at university.'
    },
    videoEmbed: 'https://www.youtube.com/embed/YQ_6e_onjas',
  },
  laciudad: {
    cover: 'assets/img/eljuicio/laciudad-cover.webp',
    tag: { es: 'Cortometraje · Stop motion', en: 'Short film · Stop motion' },
    title: 'La ciudad que recuerda',
    year: { es: 'Trabajo universitario', en: 'University project' },
    desc: {
      es: 'Proyecto universitario de stop motion para la asignatura de Arte. Realicé la maqueta y el modelado de todos los elementos.',
      en: 'A university stop motion project for the Art course. I built the scale model and modeled every element.'
    },
    videoEmbed: 'https://www.youtube.com/embed/2IFr8kyv248',
  },
};

// ===========================================================================
// MODAL RENDER
// ===========================================================================
function videoBlock(project, extra){
  const link = extra ? extra.embed : (project.videoKey ? VIDEO_LINKS[project.videoKey] : project.videoEmbed);
  const pendingLabel = currentLang === 'es' ? 'Video próximamente' : 'Video coming soon';
  const watchLabel = currentLang === 'es' ? 'Ver en YouTube' : 'Watch on YouTube';
  const poster = (extra && extra.poster) || project.poster || project.cover;

  if (link) {
    const id = link.split('/embed/')[1].split('?')[0];
    const url = (extra ? extra.vertical : project.videoVertical) ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`;
    return `<a class="modal-project__video modal-project__video--link" href="${url}" target="_blank" rel="noopener" aria-label="${watchLabel}: ${pick(project.title)}">
      <img src="${poster}" alt="${pick(project.title)}">
      <span class="modal-project__play"><svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><span>${watchLabel}</span></span>
    </a>`;
  }
  return `<div class="modal-project__video"${poster ? ` style="background-image:url('${poster}');background-size:cover;background-position:center;"` : ''}>
    <div class="modal-project__pending" style="background:rgba(0,0,0,0.45);width:100%;height:100%;">${pendingLabel}</div>
  </div>`;
}

function pick(field){
  if (field === undefined || field === null) return '';
  if (typeof field === 'object') return field[currentLang] ?? field.es ?? '';
  return field;
}

function renderProject(key){
  const p = PROJECTS[key];
  if (!p) return '';

  let html = `<div class="modal-project">
    <span class="modal-project__tag">${pick(p.tag)}</span>
    <h2>${pick(p.title)}</h2>
    <span class="modal-project__year">${pick(p.year)}</span>
    <p class="modal-project__desc">${pick(p.desc)}</p>`;

  if (p.gallery){
    html += `<div class="modal-project__gallery">`;
    p.gallery.forEach((src, i) => {
      const cls = i === 0 ? ' class="full"' : '';
      html += `<img${cls} src="${src}" alt="${pick(p.title)} — ${i+1}" loading="lazy">`;
    });
    html += `</div>`;
  }

  if (p.videoKey || p.videoEmbed){
    html += videoBlock(p);
    (p.extraVideos || []).forEach(v => { html += videoBlock(p, v); });
  }

  if (p.figmaEmbed){
    html += `<div class="modal-project__video">
      <iframe src="${p.figmaEmbed}" allowfullscreen loading="lazy"></iframe>
    </div>`;
  }

  if (p.iframePreview && !p.figmaEmbed){
    html += `<div class="modal-project__video">
      <iframe src="${p.iframePreview}" loading="lazy"></iframe>
    </div>`;
  }

  if (p.pdf){
    html += `<a class="btn btn--ghost modal-project__link" href="${p.pdf}" target="_blank" rel="noopener">${pick(p.pdfLabel)}</a>`;
  }
  if (p.pdfs){
    p.pdfs.forEach(pdf => {
      html += `<a class="btn btn--ghost modal-project__link" style="margin-right:10px;" href="${pdf.href}" target="_blank" rel="noopener">${pick(pdf.label)}</a>`;
    });
  }
  if (p.externalLink){
    html += `<a class="btn btn--primary modal-project__link" href="${p.externalLink}" target="_blank" rel="noopener">${pick(p.externalLabel)}</a>`;
  }

  html += `</div>`;
  return html;
}

// ===========================================================================
// MODAL LOGIC
// ===========================================================================
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');

function openModal(key){
  modalContent.innerHTML = renderProject(key);
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  modalContent.innerHTML = '';
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.getAttribute('data-project');
    openModal(key);
  });
});

modalBackdrop.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===========================================================================
// MOBILE NAV
// ===========================================================================
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav__mobile a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===========================================================================
// PRELOADER + HERO REVEAL
// ===========================================================================
(function initIntro(){
  const preloader = document.getElementById('preloader');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const minDuration = reducedMotion ? 0 : 750;

  function reveal(){
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-revealed');
    if (preloader){
      preloader.classList.add('is-hidden');
      setTimeout(() => preloader.remove(), reducedMotion ? 0 : 550);
    }
  }

  window.addEventListener('load', () => {
    setTimeout(reveal, minDuration);
  });

  setTimeout(reveal, 3000);
})();

// ===========================================================================
// BACK TO TOP (mobile)
// ===========================================================================
const backToTop = document.getElementById('backToTop');
if (backToTop){
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500){
      backToTop.classList.add('is-visible');
    } else {
      backToTop.classList.remove('is-visible');
    }
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===========================================================================
// FAB: Contacto -> Volver arriba al llegar al final
// ===========================================================================
const fab = document.querySelector('.fab');
if (fab){
  let atBottom = false;
  const updateFab = () => {
    const nowBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 120;
    if (nowBottom === atBottom) return;
    atBottom = nowBottom;
    const key = atBottom ? 'fab_top' : 'fab_contact';
    fab.setAttribute('data-i18n', key);
    fab.textContent = I18N[currentLang][key];
    fab.setAttribute('aria-label', atBottom ? I18N[currentLang].fab_top : (currentLang === 'es' ? 'Ir a contacto' : 'Go to contact'));
  };
  window.addEventListener('scroll', updateFab, { passive: true });
  window.addEventListener('resize', updateFab);
  fab.addEventListener('click', (e) => {
    if (atBottom){
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

// ===========================================================================
// INIT
// ===========================================================================
document.getElementById('year').textContent = new Date().getFullYear();
applyLanguage(currentLang);
