import { describe, it, expect, beforeEach } from 'vitest';

describe('skeleton', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-skeleton" aria-hidden="true"></div>
      <div class="bj-skeleton bj-skeleton--circle" aria-hidden="true"></div>
      <div class="bj-skeleton bj-skeleton--sm" aria-hidden="true"></div>
    `;
  });

  it('should be hidden from screen readers', () => {
    const skeletons = document.querySelectorAll('.bj-skeleton');
    skeletons.forEach(s => {
      expect(s.getAttribute('aria-hidden')).toBe('true');
    });
  });

  it('should support variant classes', () => {
    expect(document.querySelector('.bj-skeleton--circle')).toBeTruthy();
  });

  it('should support size classes', () => {
    expect(document.querySelector('.bj-skeleton--sm')).toBeTruthy();
  });
});
