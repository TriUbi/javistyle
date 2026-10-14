import React, { useRef, useState } from "react";
import ContactModal from "./ContactModal.jsx";
import PageMotion from "./PageMotion.jsx";
import Icon from "./Icon.jsx";

const links = [
  ['/servicios/', 'Servicios'], ['/mi-historia/', 'Mi historia'],
  ['/metodo/', 'Método'], ['/testimonios/', 'Testimonios'], ['/blog/', 'Blog'],
];

function NavigationLinks({ onSelect }) {
  return <>{links.map(([url, label]) => <a key={url} href={url} onClick={onSelect}>{label}</a>)}<a href="/#contacto" onClick={onSelect}>Empecemos <Icon /></a></>;
}

export function Header({ overlay = false }) {
  const menu = useRef(null);
  const toggle = useRef(null);
  const [open, setOpen] = useState(false);
  const closeMenu = () => menu.current.close();
  return <header className={`header${overlay ? ' header-overlay' : ''}`}>
    <a className="brand" href="/#inicio" aria-label="La Javi Paz, inicio">La Javi Paz<span> asesoría de imagen</span></a>
    <nav className="desktop-nav" aria-label="Navegación principal"><NavigationLinks /></nav>
    <button className="menu-toggle" ref={toggle} type="button" aria-label="Abrir menú" aria-haspopup="dialog" aria-controls="mobile-menu" aria-expanded={open} onClick={() => { menu.current.showModal(); setOpen(true); }}><Icon name="menu" /></button>
    <dialog className="mobile-menu" id="mobile-menu" ref={menu} aria-labelledby="mobile-menu-title" onClose={() => { setOpen(false); toggle.current?.focus(); }} onClick={(event) => { if (event.target === menu.current) closeMenu(); }}>
      <div className="mobile-menu-panel">
        <div className="mobile-menu-heading"><span id="mobile-menu-title" className="brand">La Javi Paz<span> asesoría de imagen</span></span><button type="button" className="menu-close" aria-label="Cerrar menú" onClick={closeMenu}><Icon name="close" /></button></div>
        <p className="eyebrow">UN ESTILO QUE SE SIENTE TUYO</p>
        <nav aria-label="Navegación móvil"><NavigationLinks onSelect={closeMenu} /></nav>
        <p className="mobile-menu-note">Estocolmo y online</p>
      </div>
    </dialog>
  </header>;
}

export function Footer() {
  return <>
    <footer><a className="brand" href="/#inicio">La Javi Paz<span> asesoría de imagen</span></a><p>Estocolmo y online · Un estilo que se siente tuyo.</p><a href="/#inicio">Volver arriba <Icon name="arrow-up" /></a></footer>
    <ContactModal />
    <PageMotion />
  </>;
}
