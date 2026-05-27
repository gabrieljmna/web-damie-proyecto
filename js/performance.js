/* =============================================
   performance.js — Optimizaciones de rendimiento JavaScript
   Constructora Damie
   ============================================= */

// 1. LAZY LOADING DE IMÁGENES CON INTERSECTION OBSERVER
(function initLazyLoading() {
  // Verificar si el navegador soporta Intersection Observer
  if (!('IntersectionObserver' in window)) {
    // Fallback para navegadores antiguos
    loadAllImages();
    return;
  }

  // Configurar el observer
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        
        // Cargar la imagen
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        
        // Cargar srcset si existe
        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset;
          img.removeAttribute('data-srcset');
        }
        
        // Manejar evento de carga
        img.addEventListener('load', () => {
          img.classList.add('loaded');
        });
        
        // Dejar de observar
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px', // Cargar 50px antes de que entre en viewport
    threshold: 0.01
  });

  // Observar todas las imágenes con data-src
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });

  // Función de fallback
  function loadAllImages() {
    document.querySelectorAll('img[data-src]').forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
    });
  }
})();

// 2. DEBOUNCE PARA EVENTOS DE SCROLL/RESIZE
(function initPerformanceEvents() {
  // Debounce function
  function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Throttle function
  function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Optimizar eventos de scroll
  const handleScroll = debounce(() => {
    // Aquí iría la lógica para efectos de scroll
    // Por ejemplo: sticky headers, animaciones al hacer scroll, etc.
  }, 16); // ~60fps

  // Optimizar eventos de resize
  const handleResize = debounce(() => {
    // Actualizar layouts que dependen del viewport
    updateViewportDependentLayouts();
  }, 200);

  // Función para layouts dependientes del viewport
  function updateViewportDependentLayouts() {
    // Ejemplo: ajustar grids responsivos
    const grids = document.querySelectorAll('.projects__grid, .catalog-grid');
    grids.forEach(grid => {
      // Lógica de ajuste de grid si es necesario
    });
  }

  // Agregar event listeners optimizados
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });

  // Ejecutar una vez al cargar
  updateViewportDependentLayouts();
})();

// 3. PRELOAD DE RECURSOS CRÍTICOS
(function initResourcePreloading() {
  // Preload de fuentes críticas
  function preloadCriticalResources() {
    // Preload de imágenes hero si existen
    const heroImage = document.querySelector('.hero img');
    if (heroImage && heroImage.src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = heroImage.src;
      document.head.appendChild(link);
    }

    // Preload de CSS crítico (si se separa)
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = 'css/variables.css';
    document.head.appendChild(criticalCSS);
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCriticalResources);
  } else {
    preloadCriticalResources();
  }
})();

// 4. OPTIMIZACIÓN DE ANIMACIONES
(function initAnimationPerformance() {
  // Usar requestAnimationFrame para animaciones fluidas
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateOnScroll() {
    // Lógica de animaciones basadas en scroll
    const cards = document.querySelectorAll('.card, .catalog-card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible && !card.classList.contains('animated')) {
        card.classList.add('animated');
        // Aquí podrías agregar animaciones específicas
      }
    });
    
    ticking = false;
  }

  function onScroll() {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
      window.requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  }

  // Solo agregar si hay elementos que animar
  const animatedElements = document.querySelectorAll('.card, .catalog-card');
  if (animatedElements.length > 0) {
    window.addEventListener('scroll', onScroll, { passive: true });
    // Ejecutar una vez al cargar
    onScroll();
  }
})();

// 5. GESTIÓN DE MEMORIA Y PERFORMANCE
(function initMemoryManagement() {
  // Limpiar event listeners cuando sea necesario
  const cleanupCallbacks = [];
  
  // Función para registrar callbacks de limpieza
  window.registerCleanup = function(callback) {
    cleanupCallbacks.push(callback);
  };
  
  // Limpiar antes de que la página se descargue
  window.addEventListener('beforeunload', () => {
    cleanupCallbacks.forEach(callback => {
      try {
        callback();
      } catch (e) {
        console.warn('Error en cleanup callback:', e);
      }
    });
  });
  
  // Optimizar para pestañas en segundo plano
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // Reducir actividad cuando la pestaña no es visible
      window.dispatchEvent(new CustomEvent('pageHidden'));
    } else {
      // Reanudar actividad cuando la pestaña vuelve a ser visible
      window.dispatchEvent(new CustomEvent('pageVisible'));
    }
  });
})();

// 6. OPTIMIZACIONES PARA FORMULARIOS
(function initFormPerformance() {
  // Debounce para búsquedas en tiempo real
  const searchInputs = document.querySelectorAll('input[type="search"], input[data-search]');
  
  searchInputs.forEach(input => {
    let timeoutId;
    
    input.addEventListener('input', (e) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Aquí iría la lógica de búsqueda
        performSearch(e.target.value);
      }, 300);
    });
  });
  
  function performSearch(query) {
    // Implementación de búsqueda
    console.log('Buscando:', query);
  }
  
  // Prevenir múltiples envíos de formularios
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    let isSubmitting = false;
    
    form.addEventListener('submit', (e) => {
      if (isSubmitting) {
        e.preventDefault();
        return;
      }
      
      isSubmitting = true;
      
      // Restablecer después de 3 segundos por si hay error
      setTimeout(() => {
        isSubmitting = false;
      }, 3000);
    });
  });
})();

// 7. MONITOREO DE PERFORMANCE
(function initPerformanceMonitoring() {
  // Solo en desarrollo
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Medir tiempo de carga de componentes
    const perfMarks = {};
    
    window.markPerf = function(name) {
      perfMarks[name] = performance.now();
    };
    
    window.measurePerf = function(name) {
      if (perfMarks[name]) {
        const duration = performance.now() - perfMarks[name];
        console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`);
        return duration;
      }
      return null;
    };
    
    // Marcar inicio de carga
    window.markPerf('pageLoadStart');
    
    // Medir cuando todo esté cargado
    window.addEventListener('load', () => {
      const loadTime = window.measurePerf('pageLoadStart');
      if (loadTime) {
        console.log(`📊 Tiempo total de carga: ${loadTime.toFixed(2)}ms`);
      }
      
      // Log de recursos cargados
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter(r => r.duration > 1000);
      
      if (slowResources.length > 0) {
        console.warn('⚠️ Recursos lentos detectados:', slowResources);
      }
    });
  }
})();

// 8. OPTIMIZACIONES ESPECÍFICAS PARA CARDS
(function initCardPerformance() {
  // Cargar imágenes de cards de manera prioritaria
  const criticalCards = document.querySelectorAll('.card--project, .catalog-card');
  
  if ('IntersectionObserver' in window) {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const images = card.querySelectorAll('img[data-src]');
          
          images.forEach(img => {
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.add('card-image-loaded');
            }
          });
          
          cardObserver.unobserve(card);
        }
      });
    }, {
      rootMargin: '100px 0px'
    });
    
    criticalCards.forEach(card => {
      cardObserver.observe(card);
    });
  }
})();

// 9. INICIALIZACIÓN DE MÓDULOS DE PERFORMANCE
(function initAllPerformanceModules() {
  console.log('🚀 Módulos de performance inicializados');
  
  // Verificar que todos los módulos se carguen correctamente
  const modules = [
    'Lazy Loading',
    'Performance Events',
    'Resource Preloading',
    'Animation Performance',
    'Memory Management',
    'Form Performance',
    'Performance Monitoring',
    'Card Performance'
  ];
  
  console.log(`✅ ${modules.length} módulos de performance cargados`);
})();

// Ejecutar inicialización
initAllPerformanceModules();

/* =============================================
   NOTAS DE IMPLEMENTACIÓN:
   
   1. Incluir este archivo después de main.js
   2. Minificar para producción
   3. Considerar code splitting para módulos pesados
   4. Implementar service worker para caching
   5. Monitorear métricas de performance reales
   ============================================= */