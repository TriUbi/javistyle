import React, { useEffect, useRef } from "react";
import { Header, Footer } from "./components/Layout.jsx";

function StoryPhoto({ photo, alt, caption, className = '' }) {
  return (
    <figure className={`story-photo ${className}`} data-reveal>
      <div className="story-photo-frame">
        <img src={`/img/${photo}.jpg`} alt={alt} loading="lazy" decoding="async" onLoad={(event) => {
          const figure = event.currentTarget.closest('figure');
          if (figure.dataset.entered === 'true') figure.classList.add('photo-captured');
        }} />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function Historia() {
  const page = useRef(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const elements = [...page.current.querySelectorAll('[data-reveal]')];
    if (!('IntersectionObserver' in window)) return;
    let observer;
    const configure = () => {
      observer?.disconnect();
      elements.forEach((element) => { element.classList.remove('reveal-pending', 'photo-captured'); delete element.dataset.entered; });
      if (preference.matches) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending');
            if (entry.target.classList.contains('story-photo')) {
              entry.target.dataset.entered = 'true';
              const image = entry.target.querySelector('img');
              if (image.complete && image.naturalWidth > 0) entry.target.classList.add('photo-captured');
            }
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top >= window.innerHeight) {
          element.classList.add('reveal-pending');
          observer.observe(element);
        }
      });
    };
    configure();
    preference.addEventListener('change', configure);
    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', configure);
      elements.forEach((element) => { element.classList.remove('reveal-pending', 'photo-captured'); delete element.dataset.entered; });
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido" className="history-page" ref={page}>
        <div className="section history-back"><a className="text-link" href="/">← Volver al inicio</a></div>
        <section className="story-intro section" aria-labelledby="story-title">
          <div className="story-intro-copy">
            <p className="eyebrow">CONOCE A JAVI · MI HISTORIA</p>
            <h1 id="story-title">Crucé un océano<br />y, en el camino,<br /><em>me perdí de mí.</em></h1>
            <p className="story-lead">Soy Javiera Paz. Mi camino en la asesoría de imagen comenzó con una búsqueda personal: volver a reconocerme.</p>
            <p className="story-location">De Chile a Suecia · Una imagen con intención</p>
          </div>
          <img className="story-intro-portrait" src="/img/DSC02274.jpg" alt="Javiera sonriendo mientras comparte referencias de estilo durante una asesoría" width="1280" height="1600" fetchPriority="high" />
        </section>
        <section className="story-chapter section" aria-labelledby="story-origin-title">
          <div className="story-chapter-copy" data-reveal>
            <p className="eyebrow">01 / CAMBIAR DE LUGAR</p>
            <h2 id="story-origin-title">Otro idioma.<br />Otra luz.<br /><em>Otra manera de mirar.</em></h2>
            <p>Nací en Chile, donde mi color, mi manera de hablar y de vestirme tenían un eco familiar. Cuando emigré a Suecia, todo se volvió silencio: otro idioma, otra luz, otra manera de mirar.</p>
            <p>Durante meses no me reconocí en los espejos. Mi ropa se sentía prestada, mi rostro lejano. Entendí que había una crisis más profunda que la del idioma: una crisis de identidad.</p>
          </div>
          <div className="story-pair">
            <StoryPhoto photo="DSC02875" alt="Javiera entre plantas, con camisa blanca y chaleco negro" caption="Reconocer quién eres, también cuando todo cambia." className="story-pair-main" />
            <StoryPhoto photo="DSC02626" alt="Javiera tomando notas entre cartas de color y herramientas de asesoría" caption="Un camino que empezó por observar y escuchar." className="story-pair-detail" />
          </div>
        </section>
        <section className="story-quote" aria-label="La filosofía de Javiera" data-reveal>
          <p className="eyebrow">LO QUE DESCUBRÍ EN EL CAMINO</p>
          <blockquote>«La imagen personal es una forma silenciosa de <em>elegancia.</em>»</blockquote>
          <p className="story-signature">Javiera Paz</p>
        </section>
        <section className="story-discovery section" aria-labelledby="story-discovery-title">
          <div className="story-discovery-copy" data-reveal>
            <p className="eyebrow">02 / VOLVER A ENCONTRARME</p>
            <h2 id="story-discovery-title">Color, forma, presencia.<br />Una manera de <em>volver a mí.</em></h2>
            <p>Empecé a estudiar imagen casi por intuición —color, forma, presencia— y descubrí algo que nadie me había dicho: que la imagen no es vanidad, es poder.</p>
            <p>El poder silencioso de entrar a una sala y que tu presencia lo diga todo antes de que abras la boca.</p>
          </div>
          <div className="story-collage">
            <StoryPhoto photo="DSC02494" alt="Rueda de color, espejo y accesorios utilizados en una sesión de colorimetría" caption="Color · Aprender a mirar de otra manera." className="story-collage-color" />
            <StoryPhoto photo="DSC02443" alt="Javiera y una clienta sonriendo mientras prueban una muestra de color" caption="Conexión · Un espacio para descubrirte." className="story-collage-session" />
            <StoryPhoto photo="DSC02401" alt="Una clienta explorando un pendiente frente al espejo durante una asesoría" caption="Detalles · Tu identidad también está aquí." className="story-collage-detail" />
          </div>
        </section>
        <section className="story-today section" aria-labelledby="story-today-title">
          <StoryPhoto photo="DSC02566" alt="Javiera y una clienta seleccionando prendas juntas en un armario" className="story-today-photo" />
          <div className="story-chapter-copy" data-reveal>
            <p className="eyebrow">03 / HOY, TE ACOMPAÑO A TI</p>
            <h2 id="story-today-title">Tu historia es<br />nuestro <em>punto de partida.</em></h2>
            <p>Hoy acompaño a mujeres a construir ese poder desde adentro: una imagen con intención, coherente con quiénes son y con quiénes están eligiendo ser.</p>
            <p>Empezamos por una conversación sobre tu estilo, tu cotidiano y la imagen que quieres proyectar. Después exploramos las herramientas que mejor te acompañan: color, siluetas, rostro y armario.</p>
            <a className="button" href="/servicios/">Encuentra tu asesoría <span aria-hidden="true">↗</span></a>
          </div>
        </section>
        <section className="contact section" aria-labelledby="history-contact-title" data-reveal>
          <p className="eyebrow">AHORA QUIERO CONOCER TU HISTORIA</p>
          <h2 id="history-contact-title">¿En qué etapa estás <em>tú?</em></h2>
          <p>Una conversación inicial gratuita de 30 minutos para conocerte<br />y descubrir qué asesoría encaja con lo que necesitas hoy.</p>
          <a className="button" href="mailto:javipazsalinaspinto@gmail.com?subject=Quiero%20solicitar%20mi%20conversaci%C3%B3n%20inicial">Empecemos por una conversación <span aria-hidden="true">↗</span></a>
          <p className="contact-note">Presencial en Estocolmo · Online desde donde estés</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
