import React from "react";

export default function App() {
  return (
    <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Inicio">ESTILO<span> asesoría de moda</span></a>
      <nav aria-label="Navegación principal">
        <a href="#servicios">Servicios</a>
        <a href="#fundadora">La fundadora</a>
        <a href="#contacto">Hablemos <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
    <main id="contenido">
      <section className="hero section" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">ASESORÍA DE IMAGEN · ESTILO PERSONAL</p>
          <h1 id="hero-title">Tu estilo.<br />Tu <em>esencia.</em></h1>
          <p className="intro">Vestir bien empieza por conocerte. Encuentra un estilo que se sienta tuyo y un armario que acompañe tu vida.</p>
          <a className="button" href="#servicios">Descubre los servicios <span aria-hidden="true">↗</span></a>
        </div>
        <div className="style-study" role="img" aria-label="Composición de colores y formas inspirada en tejidos: crema, terracota y verde oliva">
          <div className="swatch swatch-cream"></div><div className="swatch swatch-clay"></div><div className="swatch swatch-olive"></div>
          <span className="study-label">MENOS RUIDO.<br />MÁS TÚ.</span>
          <span className="study-caption">Un estilo que habla de ti</span>
        </div>
      </section>
      <section className="philosophy section" aria-labelledby="philosophy-title">
        <p className="eyebrow">UNA MIRADA MÁS PERSONAL</p>
        <h2 id="philosophy-title">No necesitas ser otra persona.<br />Necesitas reconocerte en lo que llevas.</h2>
        <p>La moda puede ser una herramienta para expresarte. La propuesta: mirar lo que ya tienes, entender lo que necesitas y elegir con intención.</p>
      </section>
      <section className="services section" id="servicios" aria-labelledby="services-title">
        <div className="section-heading"><div><p className="eyebrow">ENCUENTRA TU PUNTO DE PARTIDA</p><h2 id="services-title">Un espacio para tu estilo.</h2></div><p>Servicios propuestos.<br />La oferta definitiva se publicará próximamente.</p></div>
        <div className="service-grid">
          <article className="service"><span className="service-number">01 / CONOCERTE</span><h3>Asesoría de<br />imagen personal</h3><p>Explora tus gustos, tu rutina y cómo quieres sentirte al vestir. Un punto de partida para definir una dirección de estilo propia.</p><span className="service-tag">Estilo · Identidad · Inspiración</span></article>
          <article className="service"><span className="service-number">02 / REDESCUBRIR</span><h3>Edición de<br />armario</h3><p>Mira tu armario con otros ojos. Descubre nuevas combinaciones y reconoce las prendas que encajan con tu día a día.</p><span className="service-tag">Combinaciones · Orden · Versatilidad</span></article>
          <article className="service"><span className="service-number">03 / ELEGIR</span><h3>Compras con<br />intención</h3><p>Una propuesta de acompañamiento para elegir prendas que complementen tu armario, tu estilo y tus necesidades.</p><span className="service-tag">Selección · Coherencia · Funcionalidad</span></article>
        </div>
      </section>
      <section className="founder section" id="fundadora" aria-labelledby="founder-title">
        <div className="portrait-placeholder"><span className="portrait-monogram" aria-hidden="true">E.</span><span>Espacio para el retrato de la fundadora</span></div>
        <div className="founder-copy"><p className="eyebrow">DETRÁS DEL PROYECTO</p><h2 id="founder-title">Una mirada cercana.<br />Un estilo <em>muy tuyo.</em></h2><p className="founder-name">[Nombre de la fundadora]</p><p>Próximamente conocerás a la persona detrás de este proyecto: su historia, su relación con la moda y su forma de acompañarte.</p><p>Este espacio se completará con su biografía y una fotografía personal.</p><a className="text-link" href="#contacto">Empecemos por conocernos <span aria-hidden="true">↗</span></a></div>
      </section>
      <section className="contact section" id="contacto" aria-labelledby="contact-title"><p className="eyebrow">EL PRIMER PASO</p><h2 id="contact-title">Hablemos de <em>ti.</em></h2><p>¿Quieres descubrir qué servicio encaja contigo?<br />Próximamente encontrarás aquí los datos de contacto.</p><span className="coming-soon">Contacto disponible próximamente</span></section>
    </main>
    <footer><a className="brand" href="#inicio">ESTILO<span> asesoría de moda</span></a><p>Tu estilo, a tu manera.</p><a href="#inicio">Volver arriba ↑</a></footer>
    </>
  );
}
