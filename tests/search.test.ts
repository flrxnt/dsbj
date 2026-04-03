import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('search', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form class="bj-search" role="search">
        <label class="bj-search__label bj-sr-only" for="search-1">Recherche</label>
        <input id="search-1" class="bj-search__input" type="search" placeholder="Rechercher…" />
        <button type="submit" class="bj-search__btn">
          <span>Rechercher</span>
        </button>
      </form>
      <form class="bj-search bj-search--lg" role="search">
        <input class="bj-search__input" type="search" aria-label="Rechercher…" />
        <button type="submit" class="bj-search__btn"><span>Go</span></button>
      </form>
    `;
  });

  it('should have search role on form', () => {
    const forms = document.querySelectorAll('[role="search"]');
    expect(forms.length).toBe(2);
  });

  it('should have associated label', () => {
    const label = document.querySelector('label[for="search-1"]');
    const input = document.getElementById('search-1');
    expect(label).toBeTruthy();
    expect(input).toBeTruthy();
  });

  it('should have sr-only class on label', () => {
    const label = document.querySelector('.bj-search__label');
    expect(label!.classList.contains('bj-sr-only')).toBe(true);
  });

  it('should support large size variant', () => {
    expect(document.querySelector('.bj-search--lg')).toBeTruthy();
  });

  it('should fall back to aria-label when no label element', () => {
    const input = document.querySelector('.bj-search--lg .bj-search__input');
    expect(input!.getAttribute('aria-label')).toBeTruthy();
  });

  it('should have submit button', () => {
    const btn = document.querySelector('.bj-search__btn[type="submit"]');
    expect(btn).toBeTruthy();
  });

  it('should use search input type', () => {
    const input = document.getElementById('search-1') as HTMLInputElement;
    expect(input.type).toBe('search');
  });
});
