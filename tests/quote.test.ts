import { describe, it, expect, beforeEach } from 'vitest';

describe('quote', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <figure class="bj-quote">
        <blockquote class="bj-quote__text" cite="https://example.com">Quote text</blockquote>
        <figcaption>
          <span class="bj-quote__author">Author</span>
          <cite class="bj-quote__source">Source</cite>
        </figcaption>
      </figure>
      <figure class="bj-quote bj-quote--accent">
        <img class="bj-quote__image" src="img.jpg" alt="" />
        <blockquote class="bj-quote__text">Simple quote</blockquote>
      </figure>
    `;
  });

  it('should use figure element', () => {
    const figures = document.querySelectorAll('figure.bj-quote');
    expect(figures.length).toBe(2);
  });

  it('should use blockquote', () => {
    expect(document.querySelectorAll('blockquote').length).toBe(2);
  });

  it('should support cite attribute on blockquote', () => {
    const bq = document.querySelector('blockquote[cite]');
    expect(bq!.getAttribute('cite')).toBe('https://example.com');
  });

  it('should use cite element for source', () => {
    const cite = document.querySelector('cite.bj-quote__source');
    expect(cite).toBeTruthy();
    expect(cite!.textContent).toBe('Source');
  });

  it('should render author in figcaption', () => {
    const author = document.querySelector('.bj-quote__author');
    expect(author!.textContent).toBe('Author');
  });

  it('should support accent variant', () => {
    expect(document.querySelector('.bj-quote--accent')).toBeTruthy();
  });

  it('should treat decorative image as presentational', () => {
    const img = document.querySelector('.bj-quote__image');
    expect(img!.getAttribute('alt')).toBe('');
  });
});
