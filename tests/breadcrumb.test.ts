import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('breadcrumb', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="bj-breadcrumb" aria-label="Fil d'Ariane">
        <ol class="bj-breadcrumb__list">
          <li class="bj-breadcrumb__item"><a class="bj-breadcrumb__link" href="/">Accueil</a></li>
          <li class="bj-breadcrumb__item"><a class="bj-breadcrumb__link" href="/cat">Catégorie</a></li>
          <li class="bj-breadcrumb__item"><span aria-current="page">Page actuelle</span></li>
        </ol>
      </nav>
    `;
  });

  it('should use nav element', () => {
    expect(document.querySelector('nav.bj-breadcrumb')).toBeTruthy();
  });

  it('should have aria-label', () => {
    const nav = document.querySelector('nav');
    expect(nav!.getAttribute('aria-label')).toBe("Fil d'Ariane");
  });

  it('should use ordered list', () => {
    expect(document.querySelector('ol.bj-breadcrumb__list')).toBeTruthy();
  });

  it('should have links for non-current items', () => {
    const links = document.querySelectorAll('.bj-breadcrumb__link');
    expect(links.length).toBe(2);
  });

  it('should mark last item with aria-current page', () => {
    const current = document.querySelector('[aria-current="page"]');
    expect(current).toBeTruthy();
    expect(current!.textContent).toBe('Page actuelle');
  });
});
