import { describe, it, expect, beforeEach } from 'vitest';

describe('card', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <article class="bj-card">
        <div class="bj-card__img" role="img" aria-label="Card image" style="background: url(img.jpg)"></div>
        <div class="bj-card__body"><h3>Title</h3><p>Content</p></div>
        <div class="bj-card__footer"><button>Action</button></div>
      </article>
      <article class="bj-card bj-card--horizontal"><div class="bj-card__body">Horizontal</div></article>
      <article class="bj-card bj-card--flat"><div class="bj-card__body">Flat</div></article>
      <article class="bj-card bj-card--highlight"><div class="bj-card__body">Highlight</div></article>
      <a class="bj-card bj-card--link" href="/link"><div class="bj-card__body">Link card</div></a>
      <div class="bj-card__img" aria-hidden="true">Decorative</div>
    `;
  });

  it('should render as article', () => {
    const articles = document.querySelectorAll('article.bj-card');
    expect(articles.length).toBe(4);
  });

  it('should support horizontal layout', () => {
    expect(document.querySelector('.bj-card--horizontal')).toBeTruthy();
  });

  it('should support flat variant', () => {
    expect(document.querySelector('.bj-card--flat')).toBeTruthy();
  });

  it('should support highlight variant', () => {
    expect(document.querySelector('.bj-card--highlight')).toBeTruthy();
  });

  it('should render as anchor when link', () => {
    const link = document.querySelector('a.bj-card');
    expect(link).toBeTruthy();
    expect(link!.getAttribute('href')).toBe('/link');
  });

  it('should label card image', () => {
    const img = document.querySelector('.bj-card__img[role="img"]');
    expect(img!.getAttribute('aria-label')).toBe('Card image');
  });

  it('should support decorative images with aria-hidden', () => {
    const decorative = document.querySelector('.bj-card__img[aria-hidden="true"]');
    expect(decorative).toBeTruthy();
  });

  it('should render body and footer', () => {
    expect(document.querySelector('.bj-card__body')).toBeTruthy();
    expect(document.querySelector('.bj-card__footer')).toBeTruthy();
  });
});
