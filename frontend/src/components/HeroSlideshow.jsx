import React, { useEffect, useState } from 'react';

const slides = [
  { photo: 'DSC02554', position: 'center 22%', mobilePosition: '42% 12%', alt: 'Javiera y una clienta compartiendo una sonrisa al explorar sus colores', caption: 'Descubrir tu estilo también se disfruta.' },
  { photo: 'DSC02261', position: 'center', mobilePosition: '66% center', alt: 'Javiera conversando con una clienta durante una asesoría de imagen', caption: 'Todo empieza por escucharte.' },
  { photo: 'DSC02390', position: 'center 25%', mobilePosition: '46% 18%', alt: 'Javiera asesorando a una clienta sobre los detalles que enmarcan su rostro', caption: 'Una mirada que pone el foco en ti.' },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updatePreference();
    updateVisibility();
    preference.addEventListener('change', updatePreference);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      preference.removeEventListener('change', updatePreference);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || !visible) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 4500);
    return () => window.clearInterval(timer);
  }, [reducedMotion, visible]);

  return (
    <div className="hero-slideshow" aria-hidden="true">
      {slides.map((slide, index) => (
        <div key={slide.photo} className={`hero-slide${index === active ? ' is-active' : ''}`} aria-hidden={index !== active}>
          <img src={`/img/${slide.photo}.jpg`} alt={slide.alt} style={{ '--slide-position': slide.position, '--slide-mobile-position': slide.mobilePosition }} width={slide.photo === 'DSC02261' ? 1600 : 1280} height={slide.photo === 'DSC02261' ? 1067 : 1600} fetchPriority={index === 0 ? 'high' : 'low'} decoding="async" />
        </div>
      ))}

    </div>
  );
}
