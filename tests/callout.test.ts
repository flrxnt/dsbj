import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('callout', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-callout">
        <i class="bj-callout__icon ri-info-line" aria-hidden="true"></i>
        <p class="bj-callout__title">Note</p>
        <div class="bj-callout__text">Callout text</div>
      </div>
      <div class="bj-callout bj-callout--green">
        <div class="bj-callout__text">Green callout</div>
      </div>
      <div class="bj-callout bj-callout--red" role="alert">
        <div class="bj-callout__text">Important</div>
      </div>
    `;
  });

  it('should render default callout', () => {
    expect(document.querySelector('.bj-callout')).toBeTruthy();
  });

  it('should hide icon from assistive tech', () => {
    const icon = document.querySelector('.bj-callout__icon');
    expect(icon!.getAttribute('aria-hidden')).toBe('true');
  });

  it('should support color variants', () => {
    expect(document.querySelector('.bj-callout--green')).toBeTruthy();
    expect(document.querySelector('.bj-callout--red')).toBeTruthy();
  });

  it('should support role alert when needed', () => {
    const red = document.querySelector('.bj-callout--red');
    expect(red!.getAttribute('role')).toBe('alert');
  });

  it('should render title', () => {
    expect(document.querySelector('.bj-callout__title')!.textContent).toBe('Note');
  });
});
