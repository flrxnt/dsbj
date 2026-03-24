import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initDropdown } from '../src/js/dropdown';

describe('dropdown', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-dropdown" data-bj-dropdown>
        <button class="bj-btn bj-dropdown__trigger">Actions</button>
        <ul class="bj-dropdown__menu" role="menu">
          <li class="bj-dropdown__item"><button role="menuitem">Modifier</button></li>
          <li class="bj-dropdown__item"><button role="menuitem">Dupliquer</button></li>
          <li class="bj-dropdown__divider"></li>
          <li class="bj-dropdown__item"><button role="menuitem">Supprimer</button></li>
        </ul>
      </div>
    `;
    initDropdown();
  });

  it('should set aria-haspopup on trigger', () => {
    const trigger = document.querySelector('.bj-dropdown__trigger')!;
    expect(trigger.getAttribute('aria-haspopup')).toBe('true');
  });

  it('should open menu on trigger click', () => {
    const trigger = document.querySelector<HTMLButtonElement>('.bj-dropdown__trigger')!;
    trigger.click();
    const menu = document.querySelector('.bj-dropdown__menu')!;
    expect(menu.hasAttribute('data-bj-expanded')).toBe(true);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
  });

  it('should close menu on second click', () => {
    const trigger = document.querySelector<HTMLButtonElement>('.bj-dropdown__trigger')!;
    trigger.click();
    trigger.click();
    const menu = document.querySelector('.bj-dropdown__menu')!;
    expect(menu.hasAttribute('data-bj-expanded')).toBe(false);
  });

  it('should close on Escape', () => {
    const trigger = document.querySelector<HTMLButtonElement>('.bj-dropdown__trigger')!;
    trigger.click();

    const menu = document.querySelector<HTMLElement>('.bj-dropdown__menu')!;
    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(menu.hasAttribute('data-bj-expanded')).toBe(false);
  });

  it('should dispatch bj:dropdown:select on item click', () => {
    const wrapper = document.querySelector<HTMLElement>('[data-bj-dropdown]')!;
    const trigger = document.querySelector<HTMLButtonElement>('.bj-dropdown__trigger')!;
    trigger.click();

    const handler = vi.fn();
    wrapper.addEventListener('bj:dropdown:select', handler);

    const item = document.querySelector<HTMLButtonElement>('[role="menuitem"]')!;
    item.click();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail.value).toBe('Modifier');
  });

  it('should navigate items with ArrowDown', () => {
    const trigger = document.querySelector<HTMLButtonElement>('.bj-dropdown__trigger')!;
    trigger.click();

    const menu = document.querySelector<HTMLElement>('.bj-dropdown__menu')!;
    const items = menu.querySelectorAll('[role="menuitem"]');

    items[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    expect(document.activeElement).toBe(items[1]);
  });

  it('should dispatch bj:dropdown:open on open', () => {
    const wrapper = document.querySelector<HTMLElement>('[data-bj-dropdown]')!;
    const handler = vi.fn();
    wrapper.addEventListener('bj:dropdown:open', handler);

    const trigger = document.querySelector<HTMLButtonElement>('.bj-dropdown__trigger')!;
    trigger.click();

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
