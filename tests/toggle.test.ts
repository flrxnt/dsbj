import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initToggle } from '../src/js/toggle';

describe('toggle', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <label data-bj-toggle class="bj-toggle">
        <input type="checkbox" class="bj-toggle__input" />
        <span class="bj-toggle__label">Toggle</span>
      </label>
    `;
    initToggle();
  });

  it('should dispatch bj:toggle event on change', () => {
    const toggle = document.querySelector<HTMLElement>('[data-bj-toggle]')!;
    const input = toggle.querySelector<HTMLInputElement>('.bj-toggle__input')!;
    const handler = vi.fn();
    toggle.addEventListener('bj:toggle', handler);

    input.checked = true;
    input.dispatchEvent(new Event('change', { bubbles: true }));

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail.checked).toBe(true);
  });
});
