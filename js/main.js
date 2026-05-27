// main.js — Interactividad global del sitio

// 1) Año en el pie de página
(function initFooterYear() {
  const yearEl = document.getElementById('year');
  if (!yearEl) return;
  yearEl.textContent = String(new Date().getFullYear());
})();

// 2) Menú móvil (botón hamburguesa)
(function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  function setOpen(isOpen) {
    nav.classList.toggle('main-nav--open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  }

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('main-nav--open');
    setOpen(!isOpen);
  });

  // Cerrar menú cuando el usuario elige una opción
  nav.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const link = target.closest('a');
    if (!link) return;
    setOpen(false);
  });
})();

// 3) Formulario de contacto (validación ligera sin backend)
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Como el form tiene novalidate, validamos manualmente
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Muestra un mensaje local para que el demo sea usable
    const existing = form.querySelector('.contact__success');
    if (existing) existing.remove();

    const success = document.createElement('p');
    success.className = 'contact__success';
    success.setAttribute('role', 'status');
    success.textContent = 'Gracias. Recibimos tu solicitud y te contactaremos pronto.';

    form.appendChild(success);
    form.reset();
  });
})();

// 4) Detectar scroll para mejorar visibilidad del header en móviles
(function initScrollHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function handleScroll() {
    const scrolled = window.scrollY > 20;
    header.classList.toggle('scrolled', scrolled);
  }

  // Ejecutar al cargar y al hacer scroll
  handleScroll();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
})();

