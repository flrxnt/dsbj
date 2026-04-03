import { describe, it, expect, beforeEach } from 'vitest';
import { initTab } from '../src/js/tab';
import { pressKey } from './helpers';

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
    pressKey(document.getElementById('t1')!, 'ArrowRight');
    expect(document.getElementById('t2')!.getAttribute('aria-selected')).toBe('true');
  });

  it('should wrap around with ArrowLeft from first', () => {
    document.getElementById('t1')!.focus();
    pressKey(document.getElementById('t1')!, 'ArrowLeft');
    expect(document.getElementById('t3')!.getAttribute('aria-selected')).toBe('true');
  });

  it('should jump to first on Home', () => {
    document.getElementById('t2')!.click();
    pressKey(document.getElementById('t2')!, 'Home');
    expect(document.getElementById('t1')!.getAttribute('aria-selected')).toBe('true');
  });

  it('should jump to last on End', () => {
    document.getElementById('t1')!.focus();
    pressKey(document.getElementById('t1')!, 'End');
    expect(document.getElementById('t3')!.getAttribute('aria-selected')).toBe('true');
  });

  it('should have tablist role on container', () => {
    expect(document.querySelector('[role="tablist"]')).toBeTruthy();
  });

  it('should have tab role on each button', () => {
    const tabs = document.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBe(3);
  });

  it('should have tabpanel role on each panel', () => {
    const panels = document.querySelectorAll('[role="tabpanel"]');
    expect(panels.length).toBe(3);
  });

  it('should set tabindex 0 on active tab and -1 on others', () => {
    const t1 = document.getElementById('t1')!;
    const t2 = document.getElementById('t2')!;
    expect(t1.getAttribute('tabindex')).toBe('0');
    expect(t2.getAttribute('tabindex')).toBe('-1');
  });
});
