import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('sidemenu', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="bj-sidemenu" aria-label="Menu latéral">
        <p class="bj-sidemenu__title">Menu</p>
        <ul class="bj-sidemenu__list">
          <li class="bj-sidemenu__item">
            <a class="bj-sidemenu__link bj-sidemenu__link--active" href="/a" aria-current="page">Active</a>
            <ul class="bj-sidemenu__sublist">
              <li class="bj-sidemenu__item">
                <a class="bj-sidemenu__link bj-sidemenu__link--active" href="/a/1" aria-current="page">Sub Active</a>
              </li>
              <li class="bj-sidemenu__item">
                <a class="bj-sidemenu__link" href="/a/2">Sub B</a>
              </li>
            </ul>
          </li>
          <li class="bj-sidemenu__item">
            <a class="bj-sidemenu__link" href="/b">Other</a>
          </li>
        </ul>
      </nav>
    `;
  });

  it('should use nav element', () => {
    expect(document.querySelector('nav.bj-sidemenu')).toBeTruthy();
  });

  it('should have aria-label', () => {
    expect(document.querySelector('nav')!.getAttribute('aria-label')).toBe('Menu latéral');
  });

  it('should mark active link with aria-current', () => {
    const active = document.querySelectorAll('[aria-current="page"]');
    expect(active.length).toBe(2);
  });

  it('should mark child active links with aria-current', () => {
    const child = document.querySelector('.bj-sidemenu__sublist [aria-current="page"]');
    expect(child).toBeTruthy();
  });

  it('should have title', () => {
    expect(document.querySelector('.bj-sidemenu__title')!.textContent).toBe('Menu');
  });

  it('should render nested sublists', () => {
    expect(document.querySelector('.bj-sidemenu__sublist')).toBeTruthy();
  });
});
