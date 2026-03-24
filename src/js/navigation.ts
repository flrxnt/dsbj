import { register, queryNew } from './core';

let docListenersReady = false;

export function initNavigation(): void {
  queryNew<HTMLElement>('[data-bj-nav-btn]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('aria-controls');
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;

      const expanded = btn.getAttribute('aria-expanded') === 'true';

      const parent = btn.closest('.bj-nav__list, .bj-header__nav-list');
      if (parent) {
        parent.querySelectorAll<HTMLElement>('[data-bj-nav-btn]').forEach((sib) => {
          if (sib !== btn) {
            sib.setAttribute('aria-expanded', 'false');
            const sid = sib.getAttribute('aria-controls');
            if (sid) document.getElementById(sid)?.removeAttribute('data-bj-expanded');
          }
        });
      }

      btn.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        target.setAttribute('data-bj-expanded', '');
      } else {
        target.removeAttribute('data-bj-expanded');
      }
    });
  });

  if (!docListenersReady) {
    docListenersReady = true;

    document.addEventListener('click', () => {
      document.querySelectorAll<HTMLElement>('.bj-nav__mega[data-bj-expanded]').forEach((menu) => {
        menu.removeAttribute('data-bj-expanded');
        const relatedBtn = document.querySelector<HTMLElement>(`[aria-controls="${menu.id}"]`);
        relatedBtn?.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

register('navigation', initNavigation);
