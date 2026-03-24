import { register, queryNew } from './core';

export function initAccordion(): void {
  const btns = queryNew<HTMLButtonElement>('[data-bj-accordion-btn]');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const targetId = btn.getAttribute('aria-controls');
      if (!targetId) return;
      const body = document.getElementById(targetId);
      if (!body) return;

      const group = btn.closest('[data-bj-accordion-group]');
      if (group && !expanded) {
        group.querySelectorAll<HTMLButtonElement>('[data-bj-accordion-btn]').forEach((sib) => {
          if (sib !== btn) {
            sib.setAttribute('aria-expanded', 'false');
            const sid = sib.getAttribute('aria-controls');
            if (sid) document.getElementById(sid)?.removeAttribute('data-bj-expanded');
          }
        });
      }

      btn.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        body.setAttribute('data-bj-expanded', '');
      } else {
        body.removeAttribute('data-bj-expanded');
      }
    });
  });
}

register('accordion', initAccordion);
