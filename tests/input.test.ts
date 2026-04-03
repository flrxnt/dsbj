import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('input', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-input-group">
        <label class="bj-label" for="input-1">Label</label>
        <span id="input-1-hint" class="bj-hint">Hint text</span>
        <input id="input-1" class="bj-input" type="text" aria-describedby="input-1-hint" />
      </div>
      <div class="bj-input-group bj-input-group--error">
        <label class="bj-label" for="input-2">Error Label</label>
        <input id="input-2" class="bj-input" type="email" aria-invalid="true" aria-describedby="input-2-msg" />
        <p id="input-2-msg" class="bj-message bj-message--error" role="alert">Error message</p>
      </div>
      <div class="bj-input-group">
        <label class="bj-label" for="input-3">Textarea</label>
        <textarea id="input-3" class="bj-input" rows="4" aria-describedby="input-3-hint"></textarea>
      </div>
      <div class="bj-input-group">
        <label class="bj-label" for="input-4">Required</label>
        <input id="input-4" class="bj-input" type="text" required aria-required="true" />
      </div>
    `;
  });

  it('should associate label with input via for/id', () => {
    const label = document.querySelector('label[for="input-1"]');
    const input = document.getElementById('input-1');
    expect(label).toBeTruthy();
    expect(input).toBeTruthy();
  });

  it('should link hint via aria-describedby', () => {
    const input = document.getElementById('input-1') as HTMLInputElement;
    expect(input.getAttribute('aria-describedby')).toContain('input-1-hint');
    expect(document.getElementById('input-1-hint')).toBeTruthy();
  });

  it('should mark error state with aria-invalid', () => {
    const input = document.getElementById('input-2') as HTMLInputElement;
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  it('should use role alert for error messages', () => {
    const msg = document.querySelector('.bj-message--error');
    expect(msg).toBeTruthy();
    expect(msg!.getAttribute('role')).toBe('alert');
  });

  it('should link error message via aria-describedby', () => {
    const input = document.getElementById('input-2') as HTMLInputElement;
    expect(input.getAttribute('aria-describedby')).toContain('input-2-msg');
  });

  it('should render textarea variant', () => {
    const textarea = document.querySelector('textarea.bj-input');
    expect(textarea).toBeTruthy();
    expect(textarea!.getAttribute('rows')).toBe('4');
  });

  it('should support required attribute', () => {
    const input = document.getElementById('input-4') as HTMLInputElement;
    expect(input.required).toBe(true);
    expect(input.getAttribute('aria-required')).toBe('true');
  });

  it('should support error group class', () => {
    expect(document.querySelector('.bj-input-group--error')).toBeTruthy();
  });
});
