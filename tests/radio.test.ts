import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('radio', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <fieldset>
        <legend>Choose option</legend>
        <label class="bj-radio" for="r-1">
          <input id="r-1" type="radio" name="group" value="a" aria-describedby="r-1-hint" />
          <span class="bj-radio__label">
            Option A
            <span id="r-1-hint" class="bj-radio__hint">Hint A</span>
          </span>
        </label>
        <label class="bj-radio" for="r-2">
          <input id="r-2" type="radio" name="group" value="b" />
          <span class="bj-radio__label">Option B</span>
        </label>
        <label class="bj-radio" for="r-3">
          <input id="r-3" type="radio" name="group" value="c" disabled />
          <span class="bj-radio__label">Disabled</span>
        </label>
      </fieldset>
    `;
  });

  it('should be within fieldset with legend', () => {
    const fieldset = document.querySelector('fieldset');
    const legend = document.querySelector('legend');
    expect(fieldset).toBeTruthy();
    expect(legend).toBeTruthy();
  });

  it('should associate label with radio via for/id', () => {
    const label = document.querySelector('label[for="r-1"]');
    const input = document.getElementById('r-1') as HTMLInputElement;
    expect(label).toBeTruthy();
    expect(input.type).toBe('radio');
  });

  it('should share name attribute for grouping', () => {
    const radios = document.querySelectorAll('input[name="group"]');
    expect(radios.length).toBe(3);
  });

  it('should select on click', () => {
    const input = document.getElementById('r-1') as HTMLInputElement;
    input.click();
    expect(input.checked).toBe(true);
  });

  it('should deselect sibling on click', () => {
    const r1 = document.getElementById('r-1') as HTMLInputElement;
    const r2 = document.getElementById('r-2') as HTMLInputElement;
    r1.click();
    r2.click();
    expect(r1.checked).toBe(false);
    expect(r2.checked).toBe(true);
  });

  it('should support disabled', () => {
    const r3 = document.getElementById('r-3') as HTMLInputElement;
    expect(r3.disabled).toBe(true);
  });

  it('should link hint via aria-describedby', () => {
    const input = document.getElementById('r-1') as HTMLInputElement;
    expect(input.getAttribute('aria-describedby')).toContain('r-1-hint');
  });
});
