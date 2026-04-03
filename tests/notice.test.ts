import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('notice', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-notice" role="status">
        <div class="bj-notice__body"><p class="bj-notice__title">Default</p></div>
      </div>
      <div class="bj-notice bj-notice--warning" role="alert">
        <span class="bj-notice__icon" aria-hidden="true"></span>
        <div class="bj-notice__body"><p class="bj-notice__title">Warning</p></div>
        <button type="button" class="bj-notice__close" aria-label="Fermer">X</button>
      </div>
      <div class="bj-notice bj-notice--alert" role="alert">
        <div class="bj-notice__body">Alert</div>
      </div>
    `;
  });

  it('should render with role status for default', () => {
    const notice = document.querySelector('.bj-notice:not([class*="--warning"]):not([class*="--alert"])');
    expect(notice!.getAttribute('role')).toBe('status');
  });

  it('should render with role alert for warning', () => {
    expect(document.querySelector('.bj-notice--warning')!.getAttribute('role')).toBe('alert');
  });

  it('should render with role alert for alert variant', () => {
    expect(document.querySelector('.bj-notice--alert')!.getAttribute('role')).toBe('alert');
  });

  it('should have closable button with aria-label', () => {
    const btn = document.querySelector('.bj-notice__close');
    expect(btn!.getAttribute('aria-label')).toBe('Fermer');
  });

  it('should hide icon from screen readers', () => {
    const icon = document.querySelector('.bj-notice__icon');
    expect(icon!.getAttribute('aria-hidden')).toBe('true');
  });
});
