import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('combobox', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-combobox">
        <label class="bj-label" for="combo-input">Search</label>
        <span id="combo-hint" class="bj-hint">Type to filter</span>
        <div class="bj-combobox__input-wrap">
          <input id="combo-input" class="bj-combobox__input" type="text"
            role="combobox" autocomplete="off"
            aria-expanded="false" aria-autocomplete="list"
            aria-haspopup="listbox"
            aria-describedby="combo-hint" />
        </div>
        <ul id="combo-listbox" class="bj-combobox__listbox" role="listbox">
          <li id="opt-0" role="option" aria-selected="false">Apple</li>
          <li id="opt-1" role="option" aria-selected="true">Banana</li>
          <li id="opt-2" role="option" aria-disabled="true">Cherry</li>
        </ul>
      </div>
    `;
  });

  it('should have combobox role on input', () => {
    const input = document.getElementById('combo-input');
    expect(input!.getAttribute('role')).toBe('combobox');
  });

  it('should have aria-autocomplete list', () => {
    const input = document.getElementById('combo-input');
    expect(input!.getAttribute('aria-autocomplete')).toBe('list');
  });

  it('should have listbox with options', () => {
    const listbox = document.querySelector('[role="listbox"]');
    expect(listbox).toBeTruthy();
    const options = document.querySelectorAll('[role="option"]');
    expect(options.length).toBe(3);
  });

  it('should mark selected option', () => {
    const selected = document.querySelector('[aria-selected="true"]');
    expect(selected).toBeTruthy();
    expect(selected!.textContent).toBe('Banana');
  });

  it('should mark disabled option', () => {
    const disabled = document.querySelector('[aria-disabled="true"]');
    expect(disabled).toBeTruthy();
    expect(disabled!.textContent).toBe('Cherry');
  });

  it('should link label to input', () => {
    const label = document.querySelector('label[for="combo-input"]');
    expect(label).toBeTruthy();
  });

  it('should link hint via aria-describedby', () => {
    const input = document.getElementById('combo-input');
    expect(input!.getAttribute('aria-describedby')).toContain('combo-hint');
  });
});
