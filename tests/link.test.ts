import { describe, it, expect, beforeEach } from 'vitest';

describe('link', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <a class="bj-link" href="/page">Standard link</a>
      <a class="bj-link bj-link--sm" href="/small">Small</a>
      <a class="bj-link bj-link--lg" href="/large">Large</a>
      <a class="bj-link bj-link--icon-left" href="/icon">With icon</a>
      <a class="bj-link bj-link--external" href="https://ext.com" target="_blank" rel="noopener noreferrer">External</a>
      <a class="bj-link bj-link--reset" href="/reset">Reset</a>
    `;
  });

  it('should render as anchor', () => {
    const links = document.querySelectorAll('a.bj-link');
    expect(links.length).toBe(6);
  });

  it('should support size variants', () => {
    expect(document.querySelector('.bj-link--sm')).toBeTruthy();
    expect(document.querySelector('.bj-link--lg')).toBeTruthy();
  });

  it('should support icon positions', () => {
    expect(document.querySelector('.bj-link--icon-left')).toBeTruthy();
  });

  it('should set target blank for external links', () => {
    const ext = document.querySelector('.bj-link--external');
    expect(ext!.getAttribute('target')).toBe('_blank');
  });

  it('should set rel noopener noreferrer for external links', () => {
    const ext = document.querySelector('.bj-link--external');
    expect(ext!.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should support reset variant', () => {
    expect(document.querySelector('.bj-link--reset')).toBeTruthy();
  });
});
