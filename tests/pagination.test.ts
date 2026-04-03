import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('pagination', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="bj-pagination" aria-label="Pagination">
        <button type="button" class="bj-pagination__nav" aria-label="Page précédente" disabled>Prev</button>
        <button type="button" class="bj-pagination__link bj-pagination__link--active" aria-current="page" aria-label="Page 1">1</button>
        <button type="button" class="bj-pagination__link" aria-label="Page 2">2</button>
        <span class="bj-pagination__ellipsis" aria-hidden="true">...</span>
        <button type="button" class="bj-pagination__link" aria-label="Page 10">10</button>
        <button type="button" class="bj-pagination__nav" aria-label="Page suivante">Next</button>
      </nav>
    `;
  });

  it('should use nav element with aria-label', () => {
    const nav = document.querySelector('nav.bj-pagination');
    expect(nav!.getAttribute('aria-label')).toBe('Pagination');
  });

  it('should mark current page with aria-current', () => {
    const current = document.querySelector('[aria-current="page"]');
    expect(current!.textContent).toBe('1');
  });

  it('should have prev/next buttons with aria-labels', () => {
    const prev = document.querySelector('[aria-label="Page précédente"]');
    const next = document.querySelector('[aria-label="Page suivante"]');
    expect(prev).toBeTruthy();
    expect(next).toBeTruthy();
  });

  it('should disable prev when on first page', () => {
    const prev = document.querySelector('.bj-pagination__nav[disabled]') as HTMLButtonElement;
    expect(prev).toBeTruthy();
    expect(prev.disabled).toBe(true);
  });

  it('should hide ellipsis from screen readers', () => {
    const dots = document.querySelector('.bj-pagination__ellipsis');
    expect(dots!.getAttribute('aria-hidden')).toBe('true');
  });

  it('should have page labels on buttons', () => {
    const pages = document.querySelectorAll('.bj-pagination__link');
    pages.forEach(p => {
      expect(p.getAttribute('aria-label')).toMatch(/Page \d+/);
    });
  });
});
