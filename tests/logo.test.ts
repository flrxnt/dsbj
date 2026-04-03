import { describe, it, expect, beforeEach } from 'vitest';

describe('logo', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-logo">
        <a href="/" class="bj-logo__link">
          <img class="bj-logo__img" src="logo.svg" alt="Logo" />
        </a>
        <p class="bj-logo__motto">Motto</p>
        <p class="bj-logo__tagline">Tagline</p>
      </div>
      <div class="bj-logo bj-logo--lg">
        <img class="bj-logo__img" src="logo.svg" alt="Logo" />
      </div>
    `;
  });

  it('should render logo image with alt', () => {
    const imgs = document.querySelectorAll('.bj-logo__img');
    imgs.forEach(i => expect(i.getAttribute('alt')).toBeTruthy());
  });

  it('should wrap in link when href provided', () => {
    const link = document.querySelector('.bj-logo__link');
    expect(link!.getAttribute('href')).toBe('/');
  });

  it('should render motto', () => {
    expect(document.querySelector('.bj-logo__motto')!.textContent).toBe('Motto');
  });

  it('should render tagline', () => {
    expect(document.querySelector('.bj-logo__tagline')!.textContent).toBe('Tagline');
  });

  it('should support size variants', () => {
    expect(document.querySelector('.bj-logo--lg')).toBeTruthy();
  });
});
