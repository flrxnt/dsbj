import { describe, it, expect, beforeEach } from 'vitest';

describe('content', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-content" id="main" tabindex="-1">
        <p>Main content</p>
      </div>
    `;
  });

  it('should render content wrapper', () => {
    expect(document.querySelector('.bj-content')).toBeTruthy();
  });

  it('should typically have id for skip link target', () => {
    const content = document.querySelector('.bj-content');
    expect(content!.id).toBe('main');
  });
});
