import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('banner', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <section class="bj-banner bj-banner--dark" aria-label="Titre Banner">
        <div class="bj-banner__img" aria-hidden="true" style="background-image: url(img.jpg)"></div>
        <div class="bj-banner__overlay"></div>
        <div class="bj-banner__body">
          <h1 class="bj-banner__title">Titre Banner</h1>
          <p class="bj-banner__text">Description</p>
        </div>
      </section>
      <section class="bj-banner bj-banner--lg bj-banner--center bj-banner--green" aria-label="Custom">
        <div class="bj-banner__body">
          <h2 class="bj-banner__title">Custom</h2>
        </div>
      </section>
    `;
  });

  it('should use section element', () => {
    const banners = document.querySelectorAll('section.bj-banner');
    expect(banners.length).toBe(2);
  });

  it('should have aria-label', () => {
    const banner = document.querySelector('.bj-banner');
    expect(banner!.getAttribute('aria-label')).toBe('Titre Banner');
  });

  it('should hide decorative image', () => {
    const img = document.querySelector('.bj-banner__img');
    expect(img!.getAttribute('aria-hidden')).toBe('true');
  });

  it('should support size variants', () => {
    expect(document.querySelector('.bj-banner--lg')).toBeTruthy();
  });

  it('should support alignment', () => {
    expect(document.querySelector('.bj-banner--center')).toBeTruthy();
  });

  it('should support theme variants', () => {
    expect(document.querySelector('.bj-banner--dark')).toBeTruthy();
    expect(document.querySelector('.bj-banner--green')).toBeTruthy();
  });

  it('should support different heading levels', () => {
    expect(document.querySelector('h1.bj-banner__title')).toBeTruthy();
    expect(document.querySelector('h2.bj-banner__title')).toBeTruthy();
  });
});
