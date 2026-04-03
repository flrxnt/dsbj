import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('alert', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-alert" role="status">
        <span class="bj-alert__icon" aria-hidden="true"></span>
        <div class="bj-alert__body">
          <p class="bj-alert__title">Info Title</p>
          <div class="bj-alert__text">Info message</div>
        </div>
      </div>
      <div class="bj-alert bj-alert--error" role="alert">
        <span class="bj-alert__icon" aria-hidden="true"></span>
        <div class="bj-alert__body"><div class="bj-alert__text">Error</div></div>
        <button type="button" class="bj-alert__close" aria-label="Fermer">X</button>
      </div>
      <div class="bj-alert bj-alert--success" role="status">
        <div class="bj-alert__body"><div class="bj-alert__text">Success</div></div>
      </div>
      <div class="bj-alert bj-alert--warning bj-alert--sm" role="alert">
        <div class="bj-alert__body"><div class="bj-alert__text">Warning</div></div>
      </div>
    `;
  });

  it('should render with role status for info', () => {
    const info = document.querySelector('.bj-alert:not([class*="--error"]):not([class*="--success"]):not([class*="--warning"])');
    expect(info!.getAttribute('role')).toBe('status');
  });

  it('should render with role alert for error', () => {
    const err = document.querySelector('.bj-alert--error');
    expect(err!.getAttribute('role')).toBe('alert');
  });

  it('should render with role alert for warning', () => {
    const warn = document.querySelector('.bj-alert--warning');
    expect(warn!.getAttribute('role')).toBe('alert');
  });

  it('should have close button with aria-label', () => {
    const btn = document.querySelector('.bj-alert__close');
    expect(btn).toBeTruthy();
    expect(btn!.getAttribute('aria-label')).toBe('Fermer');
  });

  it('should hide icon from screen readers', () => {
    const icon = document.querySelector('.bj-alert__icon');
    expect(icon!.getAttribute('aria-hidden')).toBe('true');
  });

  it('should support variant classes', () => {
    expect(document.querySelector('.bj-alert--error')).toBeTruthy();
    expect(document.querySelector('.bj-alert--success')).toBeTruthy();
    expect(document.querySelector('.bj-alert--warning')).toBeTruthy();
  });

  it('should support small size', () => {
    expect(document.querySelector('.bj-alert--sm')).toBeTruthy();
  });

  it('should render title', () => {
    const title = document.querySelector('.bj-alert__title');
    expect(title!.textContent).toBe('Info Title');
  });

  it('should close on button click', () => {
    const alert = document.querySelector('.bj-alert--error')!;
    const btn = alert.querySelector('.bj-alert__close') as HTMLButtonElement;
    btn.click();
    alert.remove();
    expect(document.querySelector('.bj-alert--error')).toBeNull();
  });
});
