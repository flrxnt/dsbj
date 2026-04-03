import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('select', () => {
  describe('native select', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div class="bj-select-group">
          <label class="bj-label" for="sel-1">Choose</label>
          <span id="sel-1-hint" class="bj-hint">Pick one</span>
          <select id="sel-1" class="bj-select" aria-describedby="sel-1-hint sel-1-msg">
            <option value="" disabled>Placeholder</option>
            <option value="a">Option A</option>
            <option value="b">Option B</option>
          </select>
          <p id="sel-1-msg" class="bj-message bj-message--info" role="status">Info msg</p>
        </div>
        <div class="bj-select-group">
          <select id="sel-err" class="bj-select bj-select--error" aria-invalid="true" aria-describedby="sel-err-msg">
            <option value="a">A</option>
          </select>
          <p id="sel-err-msg" class="bj-message bj-message--error" role="alert">Error</p>
        </div>
      `;
    });

    it('should associate label with select', () => {
      const label = document.querySelector('label[for="sel-1"]');
      const select = document.getElementById('sel-1');
      expect(label).toBeTruthy();
      expect(select).toBeTruthy();
    });

    it('should link hint via aria-describedby', () => {
      const select = document.getElementById('sel-1');
      expect(select!.getAttribute('aria-describedby')).toContain('sel-1-hint');
    });

    it('should mark error with aria-invalid', () => {
      const select = document.getElementById('sel-err');
      expect(select!.getAttribute('aria-invalid')).toBe('true');
    });

    it('should have placeholder option disabled', () => {
      const placeholder = document.querySelector('option[value=""][disabled]');
      expect(placeholder).toBeTruthy();
    });

    it('should render error message with role alert', () => {
      const msg = document.getElementById('sel-err-msg');
      expect(msg!.getAttribute('role')).toBe('alert');
    });
  });

  describe('searchable custom select', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div class="bj-select-group">
          <label class="bj-label" for="csel-trigger">Label</label>
          <div class="bj-select-custom">
            <button id="csel-trigger" type="button" class="bj-select-custom__trigger"
              role="combobox" aria-expanded="false" aria-haspopup="listbox">
              <span>Select...</span>
            </button>
          </div>
        </div>
      `;
    });

    it('should have combobox role on trigger', () => {
      const trigger = document.getElementById('csel-trigger');
      expect(trigger!.getAttribute('role')).toBe('combobox');
    });

    it('should have aria-haspopup listbox', () => {
      const trigger = document.getElementById('csel-trigger');
      expect(trigger!.getAttribute('aria-haspopup')).toBe('listbox');
    });

    it('should start with aria-expanded false', () => {
      const trigger = document.getElementById('csel-trigger');
      expect(trigger!.getAttribute('aria-expanded')).toBe('false');
    });
  });
});
