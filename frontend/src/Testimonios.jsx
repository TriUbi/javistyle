import Icon from "./components/Icon.jsx";
import React from "react";
import { Header, Footer } from "./components/Layout.jsx";
import { contactLink } from "./data/services.js";

const examples = [
  { name: 'Camila', photo: 'DSC02443', service: 'Colorimetría', quote: 'Compraba colores porque se veían bonitos en otras personas. En la sesión entendí cuáles quería llevar cerca del rostro y cómo combinarlos. Ahora entro a una tienda con una idea mucho más clara.' },
  { name: 'Valentina', photo: 'DSC02566', service: 'Reconstrucción de armario', quote: 'Mi clóset estaba lleno y siempre terminaba usando lo mismo. El mayor descubrimiento fue ver combinaciones con prendas que ya tenía. Vestirme por la mañana dejó de sentirse como una tarea pendiente.' },
  { name: 'Antonia', photo: 'DSC02390', service: 'Asesoría integral', quote: 'Después de una etapa de cambios, sentía que mi ropa hablaba de una versión de mí que había quedado atrás. Empezar por una conversación me ayudó a poner en palabras lo que buscaba. Encontré una dirección de estilo que se siente mía.' },
];

export default function Testimonios() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido" className="testimonials-page">
        <section className="testimonials-intro section" aria-labelledby="testimonials-title">
          <p className="eyebrow">TESTIMONIOS · LA JAVI PAZ</p>
          <h1 id="testimonials-title">Más que vestir.<br /><em>Sentirte tú.</em></h1>
          <p>Una mirada personal al acompañamiento de Javi, contada en palabras de quienes lo conocen.</p>
        </section>
        <section className="testimonial-section" aria-label="Testimonio de Selena Malvenda">
          <figure className="testimonial-quote section">
            <span className="testimonial-mark" aria-hidden="true">“</span>
            <blockquote>Tu trabajo va mucho más allá de ayudar a mejorar la forma de vestir. Tienes la capacidad de transmitir confianza, seguridad y bienestar, logrando que cada persona se sienta mejor consigo misma. Estoy convencida de que este es solo el comienzo de un camino lleno de éxito.</blockquote>
            <figcaption><strong>Selena Malvenda</strong><span>Viña del Mar</span></figcaption>
          </figure>
        </section>
        <section className="testimonial-examples section" aria-labelledby="testimonial-examples-title">
          <p className="eyebrow">EJEMPLOS FICTICIOS · VISTA DE DISEÑO</p>
          <h2 id="testimonial-examples-title">Así podrían contarse<br />las próximas <em>historias.</em></h2>
          <p className="testimonial-demo-notice">Los nombres, opiniones y valoraciones son ficticios. Las fotos son ilustrativas de sesiones de asesoría y no identifican a las autoras de estos ejemplos.</p>
          <div className="testimonial-cards">
            {examples.map((example) => (
              <figure className="testimonial-card" key={example.name}>
                <figcaption>
                  <img src={`/img/${example.photo}.jpg`} alt="Foto ilustrativa de una sesión; no corresponde al personaje ficticio" width="80" height="80" loading="lazy" />
                  <div><strong>{example.name}</strong><span>{example.service}</span><small>Personaje ficticio · Foto ilustrativa</small></div>
                </figcaption>
                <div className="testimonial-stars" aria-label="5 de 5 estrellas, valoración ficticia"><span className="star-icons" aria-hidden="true">{[1,2,3,4,5].map((star) => <Icon key={star} name="star" />)}</span><small>Valoración de ejemplo</small></div>
                <blockquote>«{example.quote}»</blockquote>
                <span className="testimonial-demo-tag">TESTIMONIO FICTICIO</span>
              </figure>
            ))}
          </div>
        </section>
        <section className="testimonials-next section" aria-labelledby="testimonials-next-title">
          <p className="eyebrow">HISTORIAS QUE CONTINÚAN</p>
          <h2 id="testimonials-next-title">Las próximas transformaciones<br />están <em>en camino.</em></h2>
          <p>Pronto aquí sus historias.</p>
        </section>
        <section className="contact section" aria-labelledby="testimonials-contact-title">
          <p className="eyebrow">AHORA, HABLEMOS DE TI</p>
          <h2 id="testimonials-contact-title">Tu historia puede empezar<br />con una <em>conversación.</em></h2>
          <p>Una sesión inicial gratuita de 30 minutos para conocer tu estilo,<br />tus objetivos y la asesoría que mejor te acompaña.</p>
          <a className="button button-free-consultation" href={contactLink('Quiero solicitar mi conversación inicial de 30 minutos')}>Solicitar mi conversación gratuita <Icon name="arrow-up-right" /></a>
          <p className="contact-note">Presencial en Estocolmo · Online desde donde estés</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
