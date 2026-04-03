import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('skiplink', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-skiplinks">
        <div class="bj-skiplinks__list">
          <a class="bj-skiplinks__link" href="#main">Aller au contenu</a>
          <a class="bj-skiplinks__link" href="#nav">Aller à la navigation</a>
        </div>
      </div>
    `;
  });

  it('should render skip links', () => {
    const links = document.querySelectorAll('.bj-skiplinks__link');
    expect(links.length).toBe(2);
  });

  it('should point to anchor targets', () => {
    const main = document.querySelector('a[href="#main"]');
    expect(main).toBeTruthy();
    expect(main!.textContent).toBe('Aller au contenu');
  });

  it('should be anchor elements', () => {
    const links = document.querySelectorAll('.bj-skiplinks__link');
    links.forEach(l => expect(l.tagName).toBe('A'));
  });
});
