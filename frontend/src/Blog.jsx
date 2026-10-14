import React, { useState } from "react";
import { Header, Footer } from "./components/Layout.jsx";
import { articles } from "./data/articles.js";
import { contactLink } from "./data/services.js";

const articleLink = (article) => `/blog/?articulo=${article.slug}`;

function ArticleCard({ article }) {
  return <article className="blog-card">
    <a href={articleLink(article)} className="blog-card-photo"><img src={`/img/${article.photo}.jpg`} alt={article.alt} width="1280" height="1600" loading="lazy" /></a>
    <p className="eyebrow">{article.category} · {article.time} de lectura</p>
    <h3><a href={articleLink(article)}>{article.title}</a></h3>
    <p>{article.excerpt}</p>
    <a className="text-link" href={articleLink(article)} aria-label={`Leer: ${article.title}`}>Leer artículo <span aria-hidden="true">↗</span></a>
  </article>;
}

export default function Blog() {
  const [category, setCategory] = useState('Todas');
  const slug = new URLSearchParams(window.location.search).get('articulo');
  const selected = articles.find((article) => article.slug === slug);
  const categories = ['Todas', ...new Set(articles.map((article) => article.category))];
  const featured = articles[0];
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <Header />
    <main id="contenido" className="blog-page">
      {selected ? <>
        <article className="blog-article section">
          <a className="text-link" href="/blog/">← Volver a la revista</a>
          <p className="eyebrow">{selected.category} · {selected.time} de lectura · Borrador editorial</p>
          <h1>{selected.title}</h1>
          <p className="blog-article-lead">{selected.excerpt}</p>
          <img className="blog-article-cover" src={`/img/${selected.photo}.jpg`} alt={selected.alt} width="1280" height="1600" />
          <div className="blog-article-body">{selected.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}</div>
        </article>
        <section className="section blog-related"><p className="eyebrow">SIGUE EXPLORANDO</p><h2>Más ideas para <em>ti.</em></h2><div className="blog-grid">{articles.filter((article) => article.slug !== selected.slug).slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}</div></section>
      </> : <>
        <section className="blog-masthead section" aria-labelledby="blog-title"><p className="eyebrow">LA REVISTA DE LA JAVI PAZ</p><h1 id="blog-title">Estilo con <em>intención.</em></h1><p>Color, armario e identidad. Ideas para mirarte con otros ojos y encontrar un estilo que se sienta tuyo.</p><span className="blog-draft-label">Primera edición · Artículos de muestra para revisión</span></section>
        <section className="blog-feature section" aria-labelledby="blog-feature-title"><a href={articleLink(featured)}><img src={`/img/${featured.photo}.jpg`} alt={featured.alt} width="1067" height="1600" fetchPriority="high" /></a><div><p className="eyebrow">EN PORTADA · {featured.category}</p><h2 id="blog-feature-title"><a href={articleLink(featured)}>{featured.title}</a></h2><p>{featured.excerpt}</p><a className="button" href={articleLink(featured)}>Leer la historia <span aria-hidden="true">↗</span></a></div></section>
        <section className="blog-stories section" aria-labelledby="blog-stories-title"><div className="blog-stories-heading"><h2 id="blog-stories-title">Entre prendas y <em>preguntas.</em></h2><div className="blog-filters" aria-label="Filtrar artículos por tema">{categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div></div><div className="blog-grid">{articles.filter((article) => category === 'Todas' || article.category === category).map((article) => <ArticleCard key={article.slug} article={article} />)}</div></section>
        <section className="blog-editor section" aria-labelledby="blog-editor-title"><img src="/img/DSC02274.jpg" alt="Javiera Paz sonriendo" width="1280" height="1600" loading="lazy" /><div><p className="eyebrow">DETRÁS DE ESTA MIRADA</p><h2 id="blog-editor-title">Conoce a <em>Javi.</em></h2><p>De Chile a Suecia, una búsqueda de identidad que encontró en la imagen una forma de expresión. Conoce la historia que da sentido a este espacio.</p><a className="text-link" href="/mi-historia/">Lee mi historia <span aria-hidden="true">↗</span></a></div></section>
      </>}
      <section className="contact section" aria-labelledby="blog-contact-title"><p className="eyebrow">DE LA INSPIRACIÓN A TU PROPIO ESTILO</p><h2 id="blog-contact-title">Hablemos de lo que<br />te hace sentir <em>tú.</em></h2><p>Una conversación inicial gratuita de 30 minutos para explorar lo que necesitas.</p><a className="button button-free-consultation" href={contactLink('Quiero solicitar mi conversación inicial de 30 minutos')}>Solicitar mi conversación gratuita <span aria-hidden="true">↗</span></a></section>
    </main>
    <Footer />
  </>;
}
