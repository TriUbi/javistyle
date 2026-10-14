import React from "react";
import ContactModal from "./ContactModal.jsx";

export function Header({ overlay = false }) {
  return (
      <header className={`header${overlay ? ' header-overlay' : ''}`}>
        <a className="brand" href="/#inicio" aria-label="La Javi Paz, inicio">La Javi Paz<span> asesoría de imagen</span></a>
        <nav aria-label="Navegación principal">
          <a href="/servicios/">Servicios</a>
          <a href="/mi-historia/">Mi historia</a>
          <a href="/metodo/">Método</a>
          <a href="/testimonios/">Testimonios</a>
          <a href="/blog/">Blog</a>
          <a href="/#contacto">Empecemos <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
  );
}

export function Footer() {
  return (
      <>
      <footer><a className="brand" href="/#inicio">La Javi Paz<span> asesoría de imagen</span></a><p>Estocolmo y online · Un estilo que se siente tuyo.</p><a href="/#inicio">Volver arriba ↑</a></footer>
      <ContactModal />
      </>
  );
}
