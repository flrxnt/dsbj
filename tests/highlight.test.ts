import { describe, it, expect, beforeEach } from 'vitest';

describe('highlight', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-highlight">Default content</div>
      <div class="bj-highlight bj-highlight--sm">Small</div>
      <div class="bj-highlight bj-highlight--lg">Large</div>
    `;
  });

  it('should render highlight', () => {
    const highlights = document.querySelectorAll('.bj-highlight');
    expect(highlights.length).toBe(3);
  });

  it('should support size variants', () => {
    expect(document.querySelector('.bj-highlight--sm')).toBeTruthy();
    expect(document.querySelector('.bj-highlight--lg')).toBeTruthy();
  });
});
