import Icon from "./components/Icon.jsx";
import React from "react";
import { Header, Footer } from "./components/Layout.jsx";
import { services, contactLink } from "./data/services.js";

export default function Servicios() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido" className="services-page">
        <section className="services-intro section" aria-labelledby="services-page-title">
          <p className="eyebrow">LA JAVI PAZ · ESTOCOLMO Y ONLINE</p>
          <h1 id="services-page-title">Cinco caminos para<br />volver a <em>ti misma.</em></h1>
          <p>Color, forma, rostro y armario. Una asesoría que empieza por conocerte y te ayuda a expresar quién eres hoy, en Estocolmo y online.</p>
          <div className="services-hero-collage">
            <img src="/img/DSC02494.jpg" alt="Materiales y rueda de color para explorar tu paleta personal" width="1067" height="1600" decoding="async" />
            <img src="/img/DSC02261.jpg" alt="Javi escuchando a una clienta durante una asesoría" width="1600" height="1067" fetchPriority="high" />
            <img src="/img/DSC02566.jpg" alt="Selección de prendas junto a una clienta en su armario" width="1067" height="1600" decoding="async" />
          </div>
          <a className="button" href="#asesorias">Descubre las asesorías <Icon name="arrow-down" /></a>
        </section>
        <section className="services-belief" aria-labelledby="services-belief-title">
          <p className="eyebrow">TU IMAGEN CUENTA LO QUE ERES</p>
          <h2 id="services-belief-title">Un estilo que refleje tu identidad.<br />Una imagen que puedas <em>habitar.</em></h2>
          <p>Una nueva etapa, un cambio de país o las ganas de volver a reconocerte. Tu historia nos ayuda a entender la imagen que quieres proyectar y a construirla con intención.</p>
        </section>
        <section className="services-approach section" aria-labelledby="services-approach-title">
          <img src="/img/DSC02364.jpg" alt="Javi acompañando a una clienta en la elección de accesorios" width="1280" height="1600" loading="lazy" decoding="async" />
          <div>
            <p className="eyebrow">UNA MIRADA CERCANA Y PERSONAL</p>
            <h2 id="services-approach-title">Primero tu historia.<br />Después, <em>tu estilo.</em></h2>
            <p>Soy Javiera. Mi propio camino de Chile a Suecia me llevó a estudiar imagen y a descubrir una forma de volver a reconocerme. Hoy acompaño a otras mujeres en ese proceso.</p>
            <p>Empezamos por escucharte. Exploramos tus colores, tu silueta, tus rasgos y tu armario según lo que necesitas. Después, llevamos esas ideas a elecciones que tengan sentido en tu vida cotidiana.</p>
            <a className="text-link" href="/mi-historia/">Conoce a Javi <Icon name="arrow-up-right" /></a>
          </div>
        </section>
        <section className="services-selector section" id="asesorias" aria-labelledby="services-selector-title">
          <p className="eyebrow">ENCUENTRA TU PUNTO DE PARTIDA</p>
          <h2 id="services-selector-title">¿Qué necesitas <em>hoy?</em></h2>
          <p>Puedes empezar por un área concreta o explorar tu imagen de forma integral.</p>
          <nav className="services-index" aria-label="Explorar servicios">
            {services.map((service, index) => <a key={service.id} href={`#${service.id}`}><span>0{index + 1}</span>{service.name}<Icon name="arrow-down" /></a>)}
          </nav>
        </section>
        <div className="section services-details">
          {services.map((service, index) => (
            <section className="service-detail" key={service.id} id={service.id} aria-labelledby={`${service.id}-title`}>
              <img className="service-detail-photo" src={`/img/${service.photo}.jpg`} alt={service.alt} width={service.photo === 'DSC02503' ? 1067 : 1280} height="1600" loading="lazy" decoding="async" />
              <div className="service-detail-copy">
                <p className="eyebrow">0{index + 1} / TU PUNTO DE PARTIDA</p>
                <h2 id={`${service.id}-title`}>{service.name}</h2>
                <p className="service-detail-need">{service.need}</p>
                <h3 className="service-copy-label">Transformación</h3>
                <p>{service.description}</p>
                <h3 className="service-copy-label">Cómo te sientes</h3>
                <p className="service-detail-benefit">{service.benefit}</p>
                <a className="button" href={contactLink(service.subject)}>Quiero empezar <Icon name="arrow-up-right" /></a>
              </div>
            </section>
          ))}
        </div>
        <section className="services-process section" aria-labelledby="services-process-title">
          <p className="eyebrow">EL CAMINO, PASO A PASO</p>
          <h2 id="services-process-title">Conversamos. Descubrimos.<br /><em>Construimos.</em></h2>
          <div className="method-grid">
            <article><span className="service-number">01 / CONVERSACIÓN</span><h3>Partimos de ti.</h3><p>Conocemos tu estilo, tu cotidiano y la imagen que quieres proyectar.</p></article>
            <article><span className="service-number">02 / ANÁLISIS</span><h3>Una mirada personal.</h3><p>Estudiamos color, morfología, rostro o armario según la asesoría que elijas.</p></article>
            <article><span className="service-number">03 / CONSTRUCCIÓN</span><h3>Lo llevamos a tu vida.</h3><p>Construimos tu lenguaje de imagen con paleta, siluetas y prendas elegidas con intención.</p></article>
          </div>
          <a className="text-link" href="/metodo/">Descubre el método de Javi <Icon name="arrow-up-right" /></a>
        </section>
        <section className="services-faq section" aria-labelledby="services-faq-title">
          <div className="services-faq-heading"><p className="eyebrow">ANTES DE EMPEZAR</p><h2 id="services-faq-title">Tus preguntas.<br />Un primer paso <em>más claro.</em></h2></div>
          <img className="services-faq-photo" src="/img/DSC02626.jpg" alt="Notas de una sesión junto a cartas de color y accesorios" width="1280" height="1600" loading="lazy" decoding="async" />
          <div className="services-faq-list">
            <details><summary>¿Cómo sé qué asesoría elegir?</summary><p>Podemos empezar con una conversación gratuita de 30 minutos. Hablamos de tu estilo y tus objetivos para encontrar el servicio que mejor te acompaña.</p></details>
            <details><summary>¿Dónde podemos trabajar juntas?</summary><p>Javi ofrece atención presencial en Estocolmo y sesiones online. Escríbele para concretar la modalidad de la asesoría que te interesa.</p></details>
            <details><summary>¿Qué diferencia tiene la asesoría integral?</summary><p>La asesoría integral conecta color, forma, rostro, armario y presencia en un mismo acompañamiento. Las demás asesorías se centran en un área específica.</p></details>
            <details><summary>¿Puedo empezar por mi armario actual?</summary><p>Sí. La reconstrucción de armario parte de tu vestuario para organizarlo y darle propósito a cada prenda.</p></details>
            <details><summary>¿Cómo solicito una sesión?</summary><p>Elige «Quiero empezar» en la asesoría que te interesa o solicita una conversación inicial. Se abrirá tu correo con un asunto preparado para escribirle directamente a Javi.</p></details>
          </div>
        </section>
        <section className="services-help" aria-labelledby="services-help-title">
          <p className="eyebrow">NO TIENES QUE DECIDIRLO SOLA</p>
          <h2 id="services-help-title">¿Por dónde <em>empezar?</em></h2>
          <p>Cuéntame en qué momento estás y qué te gustaría cambiar. En una conversación inicial gratuita de 30 minutos, descubrimos qué servicio encaja contigo.</p>
          <a className="button button-free-consultation" href={contactLink('Quiero solicitar mi conversación inicial de 30 minutos')}>Hablemos de tu estilo <Icon name="arrow-up-right" /></a>
          <p className="services-help-note">Presencial en Estocolmo · Online desde donde estés</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
