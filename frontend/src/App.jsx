import Icon from "./components/Icon.jsx";
import React from "react";
import HeroSlideshow from "./components/HeroSlideshow.jsx";
import { Header, Footer } from "./components/Layout.jsx";

import { services, email, contactLink } from "./data/services.js";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header overlay />
      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <HeroSlideshow />
          <div className="hero-copy">
            <p className="eyebrow">ASESORÍA DE IMAGEN · ESTOCOLMO Y ONLINE</p>
            <h1 id="hero-title">Vuelve a<br />sentirte <em>tú.</em></h1>
            <p className="intro">¿Tu imagen ya no refleja quién eres hoy? Te acompaño a descubrir los colores, las prendas y los detalles que te representan, para vestirte con intención y sentirte más segura en tu día a día.</p>
            <a className="button" href="#contacto">Quiero encontrar mi estilo <Icon name="arrow-up-right" /></a>
            <p className="hero-note">Empecemos con una conversación gratuita de 30 minutos.</p>
          </div>
        </section>
        <section className="philosophy" aria-labelledby="philosophy-title">
          <div className="philosophy-collage" aria-hidden="true">
            {['DSC02261', 'DSC02278', 'DSC02299', 'DSC02503', 'DSC02649'].map((photo) => (
              <img key={photo} src={`/img/${photo}.jpg`} alt="" loading="lazy" decoding="async" />
            ))}
          </div>
          <div className="philosophy-content">
            <p className="eyebrow">UNA MIRADA MÁS PERSONAL</p>
            <h2 id="philosophy-title">No necesitas ser otra persona.<br />Necesitas reconocerte en lo que llevas.</h2>
            <hr className="philosophy-divider" />
            <p className="philosophy-description">Tu vida cambia. Tu imagen también puede acompañarte. Partimos de quién eres, de lo que te gusta y de cómo quieres sentirte para construir un estilo que tenga sentido para ti.</p>
            <a className="philosophy-link" href="/servicios/">ENCUENTRA TU PUNTO DE PARTIDA <Icon name="arrow-up-right" /></a>
          </div>
        </section>
        <section className="services services-preview section" id="servicios" aria-labelledby="services-title">
          <div className="section-heading">
            <div><p className="eyebrow">CINCO FORMAS DE EMPEZAR</p><h2 id="services-title">De «no sé qué ponerme»<br />a «esto se siente mío».</h2></div>
            <p>No tienes que saber qué necesitas.<br />Lo descubrimos en la primera conversación.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service" key={service.name}>
                <div className="service-visual">
                <img className="service-photo" src={`/img/${service.photo}.jpg`} alt={service.alt} width={service.photo === 'DSC02503' ? 1067 : 1280} height="1600" loading="lazy" decoding="async" />
                  <a className="service-image-button" href={`/servicios/#${service.id}`} aria-label={`Descubrir ${service.name}`}>{service.name}</a>
                </div>
                <span className="service-number">0{index + 1} / TU PUNTO DE PARTIDA</span>
                <h3>{service.name}</h3>
                <span className="service-tag">{service.benefit}</span>
              </article>
            ))}
          </div>
          <a className="button" href="/servicios/">Explora los servicios <Icon name="arrow-up-right" /></a>
        </section>
        <section className="meet-javi" aria-labelledby="meet-javi-title">
          <div className="meet-javi-inner">
            <img className="meet-javi-portrait" src="/img/DSC02274.jpg" alt="Javiera Paz sonriendo durante una asesoría de imagen" width="1280" height="1600" loading="lazy" decoding="async" />
            <div className="meet-javi-copy">
              <p className="eyebrow">LA PERSONA DETRÁS DE LA JAVI PAZ</p>
              <h2 id="meet-javi-title">Conoce a <em>Javi.</em></h2>
              <p>Soy Javiera, chilena y hoy en Suecia. Al cambiar de país, también cambió la manera en que me veía. Volver a reconocerme fue el comienzo de mi camino en la asesoría de imagen.</p>
              <p>Por eso, antes de hablar de colores o prendas, quiero conocerte. Entender tu historia, tu momento y lo que te hace sentir tú. Desde ahí construimos un estilo que te acompañe.</p>
              <a className="button" href="/mi-historia/">Descubre mi historia <Icon name="arrow-up-right" /></a>
            </div>
            <div className="meet-javi-moments" aria-hidden="true">
              <img src="/img/DSC02278.jpg" alt="" width="1280" height="1600" loading="lazy" decoding="async" />
              <img src="/img/DSC02554.jpg" alt="" width="1280" height="1600" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>
        <section className="method section" id="metodo" aria-labelledby="method-title">
          <p className="eyebrow">ASÍ VAMOS A TRABAJAR</p>
          <h2 id="method-title">Primero te escucho.<br />Después construimos tu estilo.</h2>
          <div className="method-grid">
            <article><span className="service-number">01 / CONVERSAMOS</span><h3>Tu vida, antes que tu ropa.</h3><p>Hablamos de tu rutina, de lo que te gusta y de lo que hoy no te representa. Ese es nuestro punto de partida.</p></article>
            <article><span className="service-number">02 / DESCUBRIMOS</span><h3>Entiende tus posibilidades.</h3><p>Según el servicio que elijas, exploramos tus colores, proporciones, rasgos o armario. Cada decisión tiene una razón que puedes comprender.</p></article>
            <article><span className="service-number">03 / LO LLEVAMOS A TU DÍA A DÍA</span><h3>Un estilo que puedes vivir.</h3><p>Traducimos lo que descubrimos en elecciones concretas de prendas, combinaciones y detalles. Para que sepas cómo seguir al terminar la asesoría.</p></article>
          </div>
          <a className="text-link" href="/metodo/">Conoce el método de Javi <Icon name="arrow-up-right" /></a>
        </section>
        <section className="contact section" id="contacto" aria-labelledby="contact-title">
          <p className="eyebrow">TU PRIMER PASO EMPIEZA AQUÍ</p>
          <h2 id="contact-title">Hagamos espacio<br />para quien eres <em>hoy.</em></h2>
          <p>Cuéntame qué te gustaría cambiar y cómo quieres sentirte.<br />En una conversación inicial gratuita de 30 minutos, exploramos qué asesoría encaja contigo.</p>
          <a className="button button-free-consultation" href={contactLink('Quiero solicitar mi conversación inicial de 30 minutos')}>Solicitar mi conversación gratuita <Icon name="arrow-up-right" /></a>
          <p className="contact-note">Presencial en Estocolmo · Online desde donde estés</p>
          <a className="contact-email" href={`mailto:${email}`}>{email}</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
