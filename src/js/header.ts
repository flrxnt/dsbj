import { register, queryNew } from './core';

export function initHeader(): void {
  queryNew<HTMLElement>('[data-bj-header-menu]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;

      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        target.setAttribute('data-bj-expanded', '');
      } else {
        target.removeAttribute('data-bj-expanded');
      }
    });
  });
}

register('header', initHeader);
