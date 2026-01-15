/**
 * analytics.js
 * Centraliza eventos de rastreamento (GA4)
 * Otimizado para PageSpeed, INP e estabilidade
 * Nenhum listener pesado, nenhum loop contínuo
 */

(function () {
  if (typeof gtag !== 'function') return;

  /* =====================================================
     PAGE VIEW (manual fallback)
     GA4 normalmente já registra, mas garantimos
  ===================================================== */
  gtag('event', 'page_view', {
    page_path: window.location.pathname,
    page_title: document.title
  });

  /* =====================================================
     EVENTOS DE CONVERSÃO PRINCIPAIS
  ===================================================== */

  /* Clique em WhatsApp */
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: 'WhatsApp'
      });
    });
  });

  /* Clique em Agendamento */
  document.querySelectorAll('a[href*="agendamento"]').forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'click_agendamento', {
        event_category: 'conversion',
        event_label: 'Agendar Consulta'
      });
    });
  });

  /* Clique em Contato */
  document.querySelectorAll('a[href*="contato"]').forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'click_contato', {
        event_category: 'conversion',
        event_label: 'Contato'
      });
    });
  });

  /* =====================================================
     FORMULÁRIO DE CONTATO (se existir)
  ===================================================== */
  const contactForm = document.querySelector('form');

  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      gtag('event', 'submit_form', {
        event_category: 'conversion',
        event_label: 'Formulario Contato'
      });
    });
  }

  /* =====================================================
     LEITURA DE ARTIGO (BLOG)
     Dispara após 30s na página
  ===================================================== */
  if (window.location.pathname.includes('/blog/')) {
    setTimeout(() => {
      gtag('event', 'read_article', {
        event_category: 'engagement',
        event_label: document.title
      });
    }, 30000);
  }

  /* =====================================================
     SCROLL PROFUNDO (ENGAJAMENTO)
     Dispara apenas uma vez
  ===================================================== */
  let scrollTracked = false;

  window.addEventListener('scroll', () => {
    if (scrollTracked) return;

    const scrollPosition =
      window.scrollY + window.innerHeight;
    const pageHeight =
      document.documentElement.scrollHeight;

    if (scrollPosition / pageHeight > 0.75) {
      scrollTracked = true;

      gtag('event', 'scroll_75', {
        event_category: 'engagement',
        event_label: document.title
      });
    }
  }, { passive: true });

})();