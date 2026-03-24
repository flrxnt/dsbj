import { describe, it, expect, beforeEach } from 'vitest';
import { initTab } from '../src/js/tab';

describe('tab', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-bj-tabs>
        <div role="tablist">
          <button data-bj-tab role="tab" id="t1">Tab 1</button>
          <button data-bj-tab role="tab" id="t2">Tab 2</button>
          <button data-bj-tab role="tab" id="t3">Tab 3</button>
        </div>
        <div data-bj-tab-panel role="tabpanel" id="p1">Panel 1</div>
        <div data-bj-tab-panel role="tabpanel" id="p2">Panel 2</div>
        <div data-bj-tab-panel role="tabpanel" id="p3">Panel 3</div>
      </div>
    `;
    initTab();
  });

  it('should activate first tab by default', () => {
    expect(document.getElementById('t1')!.getAttribute('aria-selected')).toBe('true');
    expect(document.getElementById('p1')!.hasAttribute('data-bj-expanded')).toBe(true);
    expect(document.getElementById('p2')!.hasAttribute('data-bj-expanded')).toBe(false);
  });

  it('should switch tabs on click', () => {
    document.getElementById('t2')!.click();
    expect(document.getElementById('t2')!.getAttribute('aria-selected')).toBe('true');
    expect(document.getElementById('t1')!.getAttribute('aria-selected')).toBe('false');
    expect(document.getElementById('p2')!.hasAttribute('data-bj-expanded')).toBe(true);
    expect(document.getElementById('p1')!.hasAttribute('data-bj-expanded')).toBe(false);
  });

  it('should navigate with ArrowRight', () => {
    document.getElementById('t1')!.focus();
    document.getElementById('t1')!.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    expect(document.getElementById('t2')!.getAttribute('aria-selected')).toBe('true');
  });

  it('should wrap around with ArrowLeft from first', () => {
    document.getElementById('t1')!.focus();
    document.getElementById('t1')!.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    expect(document.getElementById('t3')!.getAttribute('aria-selected')).toBe('true');
  });

  it('should jump to first on Home', () => {
    document.getElementById('t2')!.click();
    document.getElementById('t2')!.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }));
    expect(document.getElementById('t1')!.getAttribute('aria-selected')).toBe('true');
  });
});
