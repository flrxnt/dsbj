import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('checkbox', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-checkbox-group">
        <label class="bj-checkbox" for="cb-1">
          <input id="cb-1" type="checkbox" aria-describedby="cb-1-hint" />
          <span class="bj-checkbox__label">
            Accept terms
            <span id="cb-1-hint" class="bj-checkbox__hint">Required</span>
          </span>
        </label>
      </div>
      <div class="bj-checkbox-group">
        <label class="bj-checkbox" for="cb-2">
          <input id="cb-2" type="checkbox" disabled />
          <span class="bj-checkbox__label">Disabled</span>
        </label>
      </div>
      <div class="bj-checkbox-group">
        <label class="bj-checkbox" for="cb-3">
          <input id="cb-3" type="checkbox" aria-invalid="true" aria-describedby="cb-3-msg" />
          <span class="bj-checkbox__label">Invalid</span>
        </label>
        <p id="cb-3-msg" class="bj-message bj-message--error" role="alert">Error</p>
      </div>
    `;
  });

  it('should associate label with checkbox via for/id', () => {
    const label = document.querySelector('label[for="cb-1"]');
    const input = document.getElementById('cb-1') as HTMLInputElement;
    expect(label).toBeTruthy();
    expect(input.type).toBe('checkbox');
  });

  it('should link hint via aria-describedby', () => {
    const input = document.getElementById('cb-1') as HTMLInputElement;
    expect(input.getAttribute('aria-describedby')).toContain('cb-1-hint');
  });

  it('should support disabled state', () => {
    const input = document.getElementById('cb-2') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('should toggle checked on click', () => {
    const input = document.getElementById('cb-1') as HTMLInputElement;
    expect(input.checked).toBe(false);
    input.click();
    expect(input.checked).toBe(true);
  });

  it('should support invalid state with aria-invalid', () => {
    const input = document.getElementById('cb-3') as HTMLInputElement;
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  it('should have error message with role alert', () => {
    const msg = document.getElementById('cb-3-msg');
    expect(msg!.getAttribute('role')).toBe('alert');
  });
});
