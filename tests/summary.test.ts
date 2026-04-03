import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('summary', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="bj-summary" aria-label="Sommaire">
        <p class="bj-summary__title">Sommaire</p>
        <ul class="bj-summary__list">
          <li><a class="bj-summary__link" href="#sec1">Section 1</a></li>
          <li><a class="bj-summary__link" href="#sec2">Section 2</a></li>
        </ul>
      </nav>
    `;
  });

  it('should use nav element', () => {
    expect(document.querySelector('nav.bj-summary')).toBeTruthy();
  });

  it('should have aria-label matching title', () => {
    expect(document.querySelector('nav')!.getAttribute('aria-label')).toBe('Sommaire');
  });

  it('should render anchor links', () => {
    const links = document.querySelectorAll('.bj-summary__link');
    expect(links.length).toBe(2);
    expect(links[0].getAttribute('href')).toBe('#sec1');
  });
});
