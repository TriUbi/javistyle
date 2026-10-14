import { useEffect } from 'react';

export default function PageMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sections = [...document.querySelectorAll('main section')].filter((section) => !section.matches('.hero,[data-reveal]') && !section.closest('[data-reveal]'));
    let observer;
    const configure = () => {
      observer?.disconnect();
      sections.forEach((section) => section.classList.remove('section-pending', 'section-entered'));
      if (preference.matches || !('IntersectionObserver' in window)) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.classList.remove('section-pending');
          target.classList.add('section-entered');
          observer.unobserve(target);
        });
      }, { threshold: 0.04, rootMargin: '0px 0px -16px 0px' });
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top >= window.innerHeight) {
          section.classList.add('section-pending');
          observer.observe(section);
        }
      });
    };
    configure();
    preference.addEventListener('change', configure);
    return () => { observer?.disconnect(); preference.removeEventListener('change', configure); sections.forEach((section) => section.classList.remove('section-pending', 'section-entered')); };
  }, []);
  return null;
}
