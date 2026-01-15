/**
 * main.js
 * Interações globais leves do site institucional
 * Otimizado para INP < 80ms
 * Sem loops, sem timers recorrentes, sem dependências
 */

document.addEventListener('DOMContentLoaded', () => {

  /* =====================================================
     MENU MOBILE (caso exista)
  ===================================================== */
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menuNav = document.querySelector('[data-menu-nav]');

  if (menuToggle && menuNav) {
    menuToggle.addEventListener('click', () => {
      menuNav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active');
    });
  }

  /* =====================================================
     DROPDOWNS SIMPLES (ex: login / menu suspenso)
  ===================================================== */
  document.querySelectorAll('[data-dropdown]').forEach(wrapper => {
    const trigger = wrapper.querySelector('[data-dropdown-trigger]');
    const menu = wrapper.querySelector('[data-dropdown-menu]');

    if (!trigger || !menu) return;

    trigger.addEventListener('mouseenter', () => {
      menu.classList.add('is-visible');
    });

    wrapper.addEventListener('mouseleave', () => {
      menu.classList.remove('is-visible');
    });
  });

  /* =====================================================
     SCROLL SUAVE PARA ÂNCORAS
  ===================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');

      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  /* =====================================================
     HEADER SCROLL STATE (opcional / leve)
     Apenas adiciona classe após rolar a página
  ===================================================== */
  const header = document.querySelector('.hm-header');

  if (header) {
    let lastKnownScrollY = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
      lastKnownScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastKnownScrollY > 20) {
            header.classList.add('is-scrolled');
          } else {
            header.classList.remove('is-scrolled');
          }
          ticking = false;
        });

        ticking = true;
      }
    }, { passive: true });
  }

});