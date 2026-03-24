import { describe, it, expect, beforeEach } from 'vitest';
import { initAccordion } from '../src/js/accordion';

describe('accordion', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-bj-accordion-group>
        <div class="bj-accordion">
          <button data-bj-accordion-btn aria-expanded="false" aria-controls="acc-1">Title 1</button>
          <div id="acc-1" class="bj-accordion__body">Body 1</div>
        </div>
        <div class="bj-accordion">
          <button data-bj-accordion-btn aria-expanded="false" aria-controls="acc-2">Title 2</button>
          <div id="acc-2" class="bj-accordion__body">Body 2</div>
        </div>
      </div>
    `;
    initAccordion();
  });

  it('should expand on click', () => {
    const btn = document.querySelector<HTMLButtonElement>('[aria-controls="acc-1"]')!;
    btn.click();
    expect(btn.getAttribute('aria-expanded')).toBe('true');
    expect(document.getElementById('acc-1')!.hasAttribute('data-bj-expanded')).toBe(true);
  });

  it('should collapse on second click', () => {
    const btn = document.querySelector<HTMLButtonElement>('[aria-controls="acc-1"]')!;
    btn.click();
    btn.click();
    expect(btn.getAttribute('aria-expanded')).toBe('false');
    expect(document.getElementById('acc-1')!.hasAttribute('data-bj-expanded')).toBe(false);
  });

  it('should close siblings in exclusive group', () => {
    const btn1 = document.querySelector<HTMLButtonElement>('[aria-controls="acc-1"]')!;
    const btn2 = document.querySelector<HTMLButtonElement>('[aria-controls="acc-2"]')!;
    btn1.click();
    btn2.click();
    expect(btn1.getAttribute('aria-expanded')).toBe('false');
    expect(document.getElementById('acc-1')!.hasAttribute('data-bj-expanded')).toBe(false);
    expect(btn2.getAttribute('aria-expanded')).toBe('true');
  });
});
