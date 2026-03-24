import { register, queryNew } from './core';

export function initToggle(): void {
  queryNew<HTMLElement>('[data-bj-toggle]').forEach((toggle) => {
    const input = toggle.querySelector<HTMLInputElement>('.bj-toggle__input');
    if (!input) return;

    input.addEventListener('change', () => {
      toggle.dispatchEvent(new CustomEvent('bj:toggle', {
        detail: { checked: input.checked },
        bubbles: true,
      }));
    });
  });
}

register('toggle', initToggle);
