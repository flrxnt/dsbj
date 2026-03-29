import { describe, it, expect, beforeEach } from 'vitest';
import { initDrawer } from '../src/js/drawer';

describe('drawer', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button data-bj-drawer-open="demo-drawer" id="opener">Open</button>
      <div class="bj-drawer" id="demo-drawer">
        <div class="bj-drawer__overlay"></div>
        <div class="bj-drawer__panel">
          <header class="bj-drawer__header">
            <h2 class="bj-drawer__title">Titre</h2>
            <button data-bj-drawer-close class="bj-drawer__close">X</button>
          </header>
          <div class="bj-drawer__body"><p>Contenu</p></div>
        </div>
      </div>
    `;
    document.body.className = '';
    initDrawer();
  });

  it('should open drawer on button click', () => {
    document.getElementById('opener')!.click();
    expect(document.getElementById('demo-drawer')!.hasAttribute('data-bj-expanded')).toBe(true);
    expect(document.body.classList.contains('bj-drawer-open')).toBe(true);
  });

  it('should close drawer on close button click', () => {
    document.getElementById('opener')!.click();
    document.querySelector<HTMLButtonElement>('[data-bj-drawer-close]')!.click();
    expect(document.getElementById('demo-drawer')!.hasAttribute('data-bj-expanded')).toBe(false);
  });

  it('should close drawer on Escape key', () => {
    document.getElementById('opener')!.click();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(document.getElementById('demo-drawer')!.hasAttribute('data-bj-expanded')).toBe(false);
  });

  it('should close drawer on overlay click', () => {
    document.getElementById('opener')!.click();
    document.querySelector<HTMLElement>('.bj-drawer__overlay')!.click();
    expect(document.getElementById('demo-drawer')!.hasAttribute('data-bj-expanded')).toBe(false);
  });

  it('should remove body class on close', () => {
    document.getElementById('opener')!.click();
    expect(document.body.classList.contains('bj-drawer-open')).toBe(true);
    document.querySelector<HTMLButtonElement>('[data-bj-drawer-close]')!.click();
    expect(document.body.classList.contains('bj-drawer-open')).toBe(false);
  });
});

describe('drawer: right position', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button data-bj-drawer-open="right-drawer" id="opener-right">Open Right</button>
      <div class="bj-drawer bj-drawer--right" id="right-drawer">
        <div class="bj-drawer__overlay"></div>
        <div class="bj-drawer__panel">
          <button data-bj-drawer-close class="bj-drawer__close">X</button>
          <div class="bj-drawer__body"><p>Right content</p></div>
        </div>
      </div>
    `;
    document.body.className = '';
    initDrawer();
  });

  it('should have right modifier class', () => {
    const drawer = document.getElementById('right-drawer');
    expect(drawer!.classList.contains('bj-drawer--right')).toBe(true);
  });

  it('should open right drawer', () => {
    document.getElementById('opener-right')!.click();
    expect(document.getElementById('right-drawer')!.hasAttribute('data-bj-expanded')).toBe(true);
  });
});
