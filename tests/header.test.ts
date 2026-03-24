import { describe, it, expect, beforeEach } from 'vitest';
import { initHeader } from '../src/js/header';

describe('header', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button data-bj-header-menu aria-controls="nav" aria-expanded="false">Menu</button>
      <nav id="nav" class="bj-header__nav">Links</nav>
    `;
    initHeader();
  });

  it('should toggle nav on click', () => {
    const btn = document.querySelector<HTMLButtonElement>('[data-bj-header-menu]')!;
    btn.click();
    expect(btn.getAttribute('aria-expanded')).toBe('true');
    expect(document.getElementById('nav')!.hasAttribute('data-bj-expanded')).toBe(true);
  });

  it('should close nav on second click', () => {
    const btn = document.querySelector<HTMLButtonElement>('[data-bj-header-menu]')!;
    btn.click();
    btn.click();
    expect(btn.getAttribute('aria-expanded')).toBe('false');
    expect(document.getElementById('nav')!.hasAttribute('data-bj-expanded')).toBe(false);
  });
});
