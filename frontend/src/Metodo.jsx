import React from "react";
import { Header, Footer } from "./components/Layout.jsx";
import { contactLink } from "./data/services.js";

const steps = [
  { id: 'conversacion', title: 'Conversación', description: 'Una sesión inicial para conocer tu estilo, tu cotidiano y la imagen que quieres proyectar.', photo: 'DSC02261', alt: 'Javi conversando con una clienta durante una sesión de asesoría', detail: 'Tu historia y tu día a día son nuestro punto de partida.' },
  { id: 'analisis', title: 'Análisis', description: 'Estudio tu color, morfología, rostro y lenguaje visual. Una mirada precisa, sin fórmulas.', photo: 'DSC02704', alt: 'Javi utilizando una cinta métrica durante el análisis de proporciones', detail: 'Color, forma y presencia: herramientas para entender tu imagen.' },
  { id: 'construccion', title: 'Construcción', description: 'Construimos tu nuevo lenguaje de imagen: paleta, siluetas y armario aplicados con intención.', photo: 'DSC02830', alt: 'Javi trabajando con referencias de moda, notas y un esquema de siluetas', detail: 'Lo que descubrimos se convierte en elecciones con intención.' },
];

export default function Metodo() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido" className="method-page">
        <section className="method-page-intro section" aria-labelledby="method-page-title">
          <div>
            <p className="eyebrow">EL MÉTODO DE JAVI</p>
            <h1 id="method-page-title">Tres gestos para<br />revelar <em>tu imagen.</em></h1>
            <p className="method-page-lead">Un proceso pausado e íntimo.</p>
            <p>Conversación, análisis y construcción. Un recorrido que empieza en quién eres y toma forma en los colores, las siluetas y las prendas que eliges.</p>
            <a className="button" href="#conversacion">Conoce el proceso <span aria-hidden="true">↓</span></a>
          </div>
          <img src="/img/DSC02723.jpg" alt="Javi estudiando referencias de estilo con una revista, cuaderno y cinta métrica" width="1067" height="1600" fetchPriority="high" />
        </section>
        <nav className="method-page-nav section" aria-label="Pasos del método">
          {steps.map((step, index) => <a href={`#${step.id}`} key={step.id} style={{ '--button-photo': `url("/img/${step.photo}.jpg")` }}><span>0{index + 1}</span>{step.title}<span aria-hidden="true">↓</span></a>)}
        </nav>
        <div className="section method-page-steps">
          {steps.map((step, index) => (
            <section className="method-page-step" id={step.id} key={step.id} aria-labelledby={`${step.id}-title`}>
              <div className="method-page-step-copy">
                <p className="eyebrow">PASO 0{index + 1}</p>
                <h2 id={`${step.id}-title`}>{step.title}</h2>
                <p className="method-step-description">{step.description}</p>
                <p className="method-step-detail">{step.detail}</p>
              </div>
              <img src={`/img/${step.photo}.jpg`} alt={step.alt} width={step.photo === 'DSC02704' ? 1280 : 1600} height={step.photo === 'DSC02704' ? 1600 : 1067} loading="lazy" decoding="async" />
            </section>
          ))}
        </div>
        <section className="method-tools" aria-labelledby="method-tools-title">
          <div className="section">
            <p className="eyebrow">UNA MIRADA PRECISA</p>
            <h2 id="method-tools-title">Las herramientas.<br /><em>Tu identidad.</em></h2>
            <p>Cada herramienta nos ayuda a observar: cómo dialoga el color con tu rostro, cómo acompañan las prendas tu silueta y qué detalles expresan tu estilo.</p>
            <div className="method-tools-photos">
              <figure><img src="/img/DSC02643.jpg" alt="Detalle de Javi tomando medidas con una cinta métrica" width="1280" height="1600" loading="lazy" decoding="async" /><figcaption>Morfología · Proporciones y siluetas</figcaption></figure>
              <figure><img src="/img/DSC02494.jpg" alt="Javi mostrando una rueda de color junto a muestras de colorimetría" width="1067" height="1600" loading="lazy" decoding="async" /><figcaption>Colorimetría · Tu paleta personal</figcaption></figure>
              <figure><img src="/img/DSC02401.jpg" alt="Prueba de un pendiente frente al espejo durante una asesoría" width="1280" height="1600" loading="lazy" decoding="async" /><figcaption>Detalles · Rostro y accesorios</figcaption></figure>
            </div>
          </div>
        </section>
        <section className="contact section" aria-labelledby="method-contact-title">
          <p className="eyebrow">EMPECEMOS POR ESCUCHARNOS</p>
          <h2 id="method-contact-title">Tu primer paso:<br />una <em>conversación.</em></h2>
          <p>Una sesión introductoria gratuita de 30 minutos para conocer tu estilo,<br />tus objetivos y el servicio que mejor te acompaña.</p>
          <a className="button button-free-consultation" href={contactLink('Quiero solicitar mi conversación inicial de 30 minutos')}>Solicitar mi conversación gratuita <span aria-hidden="true">↗</span></a>
          <p className="contact-note">Presencial en Estocolmo · Online desde donde estés</p>
          <a className="text-link" href="/servicios/">Explora las asesorías <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <Footer />
    </>
  );
}
