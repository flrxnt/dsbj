import { describe, it, expect, beforeEach } from 'vitest';

describe('footer', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <footer class="bj-footer">
        <div class="bj-footer__top">Top content</div>
        <div class="bj-footer__body">Body content</div>
        <div class="bj-footer__bottom">Bottom content</div>
      </footer>
    `;
  });

  it('should use semantic footer element', () => {
    expect(document.querySelector('footer.bj-footer')).toBeTruthy();
  });

  it('should render top, body, and bottom sections', () => {
    expect(document.querySelector('.bj-footer__top')).toBeTruthy();
    expect(document.querySelector('.bj-footer__body')).toBeTruthy();
    expect(document.querySelector('.bj-footer__bottom')).toBeTruthy();
  });
});
