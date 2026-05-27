# Guía de Accesibilidad - Constructora Damie

## 1. ATRIBUTOS ARIA IMPLEMENTADOS

### 1.1. Navegación Principal
```html
<nav id="main-nav" class="main-nav" role="navigation" aria-label="Menú principal">
```

### 1.2. Botón de Menú Móvil
```html
<button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="main-nav">
```

### 1.3. Enlaces de Navegación
```html
<a href="index.html" class="logo" aria-label="Inicio Constructora Damie">
```

### 1.4. Tarjetas y Elementos Interactivos
```html
<a href="detalles.html?proyecto=remo-01" class="catalog-card" aria-label="Ver proyecto: Casa Moderna Zona Norte">
```

### 1.5. Formularios
```html
<form class="contact__form" id="contact-form" novalidate aria-label="Formulario de contacto">
```

## 2. MEJORAS DE ACCESIBILIDAD RECOMENDADAS

### 2.1. Roles ARIA para Componentes Dinámicos
```html
<!-- Para modales -->
<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">

<!-- Para alertas -->
<div class="alert" role="alert" aria-live="polite">

<!-- Para regiones vivas -->
<div aria-live="polite" aria-atomic="true">
```

### 2.2. Atributos para Estados Dinámicos
```html
<!-- Menú expandido/colapsado -->
<button aria-expanded="true" aria-controls="submenu">

<!-- Pestañas activas -->
<button role="tab" aria-selected="true" aria-controls="tabpanel-1">

<!-- Acordeón -->
<button aria-expanded="false" aria-controls="accordion-content">
```

### 2.3. Etiquetas para Elementos de Formulario
```html
<label for="nombre">Nombre completo</label>
<input type="text" id="nombre" name="nombre" aria-required="true">

<!-- Para campos sin etiqueta visible -->
<input type="search" aria-label="Buscar proyectos">
```

## 3. CONTRASTE DE COLORES

### 3.1. Verificación de Contraste
- Texto normal: mínimo 4.5:1
- Texto grande (18px+): mínimo 3:1
- Elementos interactivos: mínimo 3:1

### 3.2. Colores del Proyecto
- Primario: `#0066cc` (verificar contraste con fondo blanco)
- Secundario: `#ff6600` (verificar contraste)
- Fondo: `#ffffff`
- Texto: `#333333`

## 4. NAVEGACIÓN POR TECLADO

### 4.1. Orden de Tabulación
```html
<!-- Asegurar orden lógico -->
<header>
  <a href="#main-content" class="skip-link">Saltar al contenido</a>
  <!-- resto del header -->
</header>
```

### 4.2. Focus Visible
```css
/* Estilos para focus */
:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* No eliminar outline */
*:focus:not(:focus-visible) {
  outline: none;
}

*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### 4.3. Skip Links
```html
<a href="#main-content" class="skip-link">
  Saltar al contenido principal
</a>
```

## 5. SEMÁNTICA HTML5

### 5.1. Estructura Semántica
```html
<header role="banner">
<nav role="navigation">
<main role="main" id="main-content">
<aside role="complementary">
<footer role="contentinfo">
```

### 5.2. Encabezados Jerárquicos
```html
<h1>Página principal</h1>
  <h2>Nuestros servicios</h2>
  <h2>Proyectos recientes</h2>
    <h3>Remodelaciones</h3>
    <h3>Construcción</h3>
```

## 6. IMÁGENES Y MULTIMEDIA

### 6.1. Texto Alternativo
```html
<img src="proyecto.jpg" alt="Casa moderna de dos pisos con jardín frontal">

<!-- Imágenes decorativas -->
<img src="decoracion.jpg" alt="" role="presentation">

<!-- Imágenes complejas -->
<img src="plano.jpg" alt="Plano arquitectónico de la casa" longdesc="plano-detallado.html">
```

### 6.2. SVG Accesibles
```html
<svg role="img" aria-labelledby="svg-title">
  <title id="svg-title">Logo Constructora Damie</title>
  <!-- paths -->
</svg>
```

## 7. FORMULARIOS ACCESIBLES

### 7.1. Validación y Mensajes de Error
```html
<input type="email" aria-invalid="true" aria-describedby="email-error">
<span id="email-error" role="alert">Por favor ingresa un email válido</span>
```

### 7.2. Agrupación de Campos
```html
<fieldset>
  <legend>Información de contacto</legend>
  <!-- campos -->
</fieldset>
```

## 8. COMPONENTES DINÁMICOS

### 8.1. Carruseles/Sliders
```html
<div role="region" aria-label="Galería de proyectos" aria-roledescription="carrusel">
  <div role="group" aria-label="1 de 5">
    <!-- slide -->
  </div>
  <button aria-label="Siguiente slide">
</div>
```

### 8.2. Modales
```html
<div role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
  <h2 id="modal-title">Título del modal</h2>
  <p id="modal-desc">Descripción del contenido</p>
</div>
```

## 9. TESTING DE ACCESIBILIDAD

### 9.1. Herramientas Recomendadas
- **Lighthouse** (Chrome DevTools)
- **axe DevTools** (extensión)
- **WAVE** (wave.webaim.org)
- **NVDA** (lector de pantalla para testing)

### 9.2. Checklist Rápido
- [ ] Todos los imágenes tienen `alt`
- [ ] Los formularios tienen `labels`
- [ ] El contraste de colores es adecuado
- [ ] Navegación por teclado funciona
- [ ] Los encabezados son jerárquicos
- [ ] Los elementos interactivos tienen estados ARIA
- [ ] No hay dependencia exclusiva del color
- [ ] El zoom hasta 200% funciona

## 10. RECURSOS ADICIONALES

### 10.1. Documentación
- [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Web Docs - ARIA](https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA)

### 10.2. Herramientas
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Screen Reader Testing](https://www.nvaccess.org/)
- [Accessibility Insights](https://accessibilityinsights.io/)

---

**Última actualización:** 2026-05-27  
**Responsable:** Equipo de Desarrollo - Constructora Damie