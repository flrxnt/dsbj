import { register, queryNew } from './core';

function initSingleDropdown(wrapper: HTMLElement): void {
  const trigger = wrapper.querySelector<HTMLElement>('.bj-dropdown__trigger')!;
  const menu = wrapper.querySelector<HTMLElement>('.bj-dropdown__menu')!;
  if (!trigger || !menu) return;

  trigger.setAttribute('aria-haspopup', 'true');
  trigger.setAttribute('aria-expanded', 'false');

  function open(): void {
    menu.setAttribute('data-bj-expanded', '');
    trigger.setAttribute('aria-expanded', 'true');
    const first = menu.querySelector<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])');
    first?.focus();
    wrapper.dispatchEvent(new CustomEvent('bj:dropdown:open', { bubbles: true }));
  }

  function close(): void {
    menu.removeAttribute('data-bj-expanded');
    trigger.setAttribute('aria-expanded', 'false');
    wrapper.dispatchEvent(new CustomEvent('bj:dropdown:close', { bubbles: true }));
  }

  function isOpen(): boolean {
    return menu.hasAttribute('data-bj-expanded');
  }

  function getItems(): HTMLElement[] {
    return Array.from(menu.querySelectorAll<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])'));
  }

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isOpen()) close(); else open();
  });

  trigger.addEventListener('keydown', (e) => {
    if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
      e.preventDefault();
      if (!isOpen()) open();
    }
  });

  menu.addEventListener('keydown', (e) => {
    const items = getItems();
    const current = document.activeElement as HTMLElement;
    const idx = items.indexOf(current);

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const next = idx < items.length - 1 ? idx + 1 : 0;
        items[next]?.focus();
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const prev = idx > 0 ? idx - 1 : items.length - 1;
        items[prev]?.focus();
        break;
      }
      case 'Home': {
        e.preventDefault();
        items[0]?.focus();
        break;
      }
      case 'End': {
        e.preventDefault();
        items[items.length - 1]?.focus();
        break;
      }
      case 'Escape': {
        e.preventDefault();
        close();
        trigger.focus();
        break;
      }
      case 'Tab': {
        close();
        break;
      }
    }
  });

  menu.addEventListener('click', (e) => {
    const item = (e.target as HTMLElement).closest<HTMLElement>('[role="menuitem"]');
    if (item && item.getAttribute('aria-disabled') !== 'true') {
      close();
      trigger.focus();
      wrapper.dispatchEvent(new CustomEvent('bj:dropdown:select', {
        detail: { item, value: item.getAttribute('data-value') || item.textContent?.trim() },
        bubbles: true,
      }));
    }
  });

  document.addEventListener('click', (e) => {
    if (isOpen() && !wrapper.contains(e.target as Node)) close();
  });
}

export function initDropdown(): void {
  queryNew<HTMLElement>('[data-bj-dropdown]').forEach(initSingleDropdown);
}

register('dropdown', initDropdown);
