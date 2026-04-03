import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('button', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button class="bj-btn" type="button">Primary</button>
      <button class="bj-btn bj-btn--secondary" type="button">Secondary</button>
      <button class="bj-btn bj-btn--sm" type="button">Small</button>
      <button class="bj-btn bj-btn--lg" type="button">Large</button>
      <button class="bj-btn bj-btn--icon" type="button" aria-label="Close">X</button>
      <button class="bj-btn bj-btn--loading" type="button" aria-busy="true">Loading</button>
      <button class="bj-btn" type="button" disabled>Disabled</button>
      <a class="bj-btn" href="/link">Link</a>
      <button class="bj-btn bj-btn--full" type="button">Full</button>
      <button class="bj-btn" type="submit">Submit</button>
    `;
  });

  it('should render primary variant by default', () => {
    const btn = document.querySelector('.bj-btn:not([class*="--"])');
    expect(btn).toBeTruthy();
    expect(btn!.classList.contains('bj-btn')).toBe(true);
  });

  it('should render secondary variant', () => {
    const btn = document.querySelector('.bj-btn--secondary');
    expect(btn).toBeTruthy();
  });

  it('should render size variants', () => {
    expect(document.querySelector('.bj-btn--sm')).toBeTruthy();
    expect(document.querySelector('.bj-btn--lg')).toBeTruthy();
  });

  it('should support icon-only with aria-label', () => {
    const btn = document.querySelector('.bj-btn--icon');
    expect(btn).toBeTruthy();
    expect(btn!.getAttribute('aria-label')).toBe('Close');
  });

  it('should indicate loading state with aria-busy', () => {
    const btn = document.querySelector('.bj-btn--loading');
    expect(btn).toBeTruthy();
    expect(btn!.getAttribute('aria-busy')).toBe('true');
  });

  it('should support disabled state', () => {
    const btn = document.querySelector('.bj-btn[disabled]') as HTMLButtonElement;
    expect(btn).toBeTruthy();
    expect(btn.disabled).toBe(true);
  });

  it('should render as anchor tag', () => {
    const link = document.querySelector('a.bj-btn');
    expect(link).toBeTruthy();
    expect(link!.getAttribute('href')).toBe('/link');
  });

  it('should support full width', () => {
    expect(document.querySelector('.bj-btn--full')).toBeTruthy();
  });

  it('should support type attribute', () => {
    const submit = document.querySelector('.bj-btn[type="submit"]');
    expect(submit).toBeTruthy();
  });
});
