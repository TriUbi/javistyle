import Icon from "./Icon.jsx";
import React, { useEffect, useRef, useState } from 'react';
import { email, services } from '../data/services.js';

const initialService = 'Conversación inicial gratuita · 30 minutos';
const requestMessages = {
  'Colorimetría': 'Hola Javi, me gustaría solicitar una asesoría de colorimetría para descubrir mi paleta personal y los colores que me favorecen. ¿Podrías contarme cómo funciona y qué disponibilidad tienes?',
  'Morfología y estilo personal': 'Hola Javi, me interesa la asesoría de morfología y estilo personal. Quiero conocer las siluetas y prendas que acompañan mi cuerpo y expresan mi estilo. ¿Podrías contarme cómo funciona y qué disponibilidad tienes?',
  'Visajismo': 'Hola Javi, me gustaría solicitar una sesión de visajismo para descubrir qué cabello, accesorios y escotes acompañan mis rasgos. ¿Podrías contarme cómo funciona y qué disponibilidad tienes?',
  'Reconstrucción de armario': 'Hola Javi, me interesa reconstruir mi armario. Quiero revisar las prendas que ya tengo y encontrar combinaciones que encajen con mi día a día. ¿Podrías contarme cómo funciona y qué disponibilidad tienes?',
  'Asesoría integral': 'Hola Javi, me gustaría conocer tu asesoría integral para trabajar mis colores, siluetas, rostro y armario de forma conjunta. ¿Podrías contarme cómo funciona y qué disponibilidad tienes?',
  [initialService]: 'Hola Javi, me gustaría solicitar la conversación inicial gratuita de 30 minutos para hablar de mi estilo, mis objetivos y qué asesoría encaja conmigo. ¿Qué disponibilidad tienes?',
  'Quiero orientación para elegir': 'Hola Javi, quiero mejorar mi imagen, pero todavía no sé qué asesoría elegir. ¿Podrías ayudarme a encontrar el servicio que mejor encaje conmigo?',
};

export default function ContactModal() {
  const dialog = useRef(null);
  const opener = useRef(null);
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState(requestMessages[initialService]);
  const [prepared, setPrepared] = useState(false);
  const [mailLink, setMailLink] = useState('');

  useEffect(() => {
    const handleClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const isContact = href === '#contacto' || href === '/#contacto';
      const isRequest = href.startsWith(`mailto:${email}`) && link.classList.contains('button');
      if (!isContact && !isRequest) return;
      event.preventDefault();
      const subject = href.includes('?') ? new URLSearchParams(href.split('?')[1]).get('subject') : '';
      const chosen = services.find((item) => item.subject === subject);
      const selectedService = chosen?.name || initialService;
      setService(selectedService);
      setMessage(requestMessages[selectedService]);
      setPrepared(false);
      setMailLink('');
      dialog.current.querySelector('form').reset();
      opener.current = link;
      if (!dialog.current.open) dialog.current.showModal();
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const close = () => dialog.current.close();
  const submit = (event) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get('name')).trim();
    const address = String(fields.get('email')).trim();
    const message = String(fields.get('message')).trim();
    const subject = `Solicitud: ${service} · ${name}`;
    const body = `${message}\n\nServicio de interés: ${service}\nNombre: ${name}\nEmail de contacto: ${address}\nModalidad: ${fields.get('mode')}\n\nGracias,\n${name}`;
    const link = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailLink(link);
    setPrepared(true);
    window.location.href = link;
  };

  return (
    <dialog className="contact-modal" ref={dialog} aria-labelledby="contact-modal-title" aria-describedby="contact-modal-description"
      onClose={() => { const trigger = opener.current?.getClientRects().length ? opener.current : document.querySelector('.menu-toggle'); trigger?.focus(); }} onClick={(event) => { if (event.target === dialog.current) { const bounds = dialog.current.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close(); } }}>
      <button className="contact-modal-close" type="button" onClick={close} aria-label="Cerrar formulario"><Icon name="close" /></button>
      <p className="eyebrow">LA JAVI PAZ · EMPECEMOS POR TI</p>
      <h2 id="contact-modal-title">Cuéntame tu <em>momento.</em></h2>
      <p id="contact-modal-description">Completa tus datos y abriremos tu app de correo con el mensaje listo para revisar y enviar a Javi.</p>
      <form onSubmit={submit}>
        <div className="contact-form-row">
          <label htmlFor="request-name">Tu nombre<input id="request-name" name="name" autoComplete="name" required maxLength="100" /></label>
          <label htmlFor="request-email">Tu email<input id="request-email" name="email" type="email" autoComplete="email" required maxLength="254" /></label>
        </div>
        <label htmlFor="request-service">¿Qué te interesa?<select id="request-service" name="service" value={service} onChange={(event) => { setService(event.target.value); setMessage(requestMessages[event.target.value]); setPrepared(false); }}><option>{initialService}</option>{services.map((item) => <option key={item.id}>{item.name}</option>)}<option>Quiero orientación para elegir</option></select></label>
        <label htmlFor="request-mode">¿Cómo prefieres la asesoría?<select id="request-mode" name="mode"><option>Online</option><option>Presencial en Estocolmo</option><option>Por decidir</option></select></label>
        <label htmlFor="request-message">Cuéntame qué buscas<textarea id="request-message" name="message" value={message} onChange={(event) => { setMessage(event.target.value); setPrepared(false); }} rows="5" required maxLength="1500" placeholder="¿En qué etapa estás? ¿Qué te gustaría cambiar o descubrir de tu estilo?" /></label>
        <p className="contact-form-note">Tus datos se incluirán en el correo. El mensaje se envía cuando pulses «Enviar» en tu app de correo.</p>
        <button className={`button${service === initialService ? ' button-free-consultation' : ''}`} type="submit">Abrir mi correo <Icon name="arrow-up-right" /></button>
        {prepared && <div className="contact-form-status" role="status"><p>El mensaje está preparado. Si tu app no se abrió, comprueba que tienes una app de correo configurada o <a href={mailLink}>intenta abrirlo de nuevo</a>.</p><p>También puedes escribir directamente a <a href={`mailto:${email}`}>{email}</a>.</p></div>}
      </form>
    </dialog>
  );
}
