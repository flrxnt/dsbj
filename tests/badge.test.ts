import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('badge', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <span class="bj-badge">Default</span>
      <span class="bj-badge bj-badge--info">Info</span>
      <span class="bj-badge bj-badge--success">Success</span>
      <span class="bj-badge bj-badge--warning">Warning</span>
      <span class="bj-badge bj-badge--error">Error</span>
      <span class="bj-badge bj-badge--new">New</span>
      <span class="bj-badge bj-badge--sm">Small</span>
      <span class="bj-badge bj-badge--no-icon">No icon</span>
    `;
  });

  it('should render default badge', () => {
    expect(document.querySelector('.bj-badge')).toBeTruthy();
  });

  it('should support all variants', () => {
    expect(document.querySelector('.bj-badge--info')).toBeTruthy();
    expect(document.querySelector('.bj-badge--success')).toBeTruthy();
    expect(document.querySelector('.bj-badge--warning')).toBeTruthy();
    expect(document.querySelector('.bj-badge--error')).toBeTruthy();
    expect(document.querySelector('.bj-badge--new')).toBeTruthy();
  });

  it('should support small size', () => {
    expect(document.querySelector('.bj-badge--sm')).toBeTruthy();
  });

  it('should support no-icon modifier', () => {
    expect(document.querySelector('.bj-badge--no-icon')).toBeTruthy();
  });

  it('should render as span', () => {
    const badge = document.querySelector('.bj-badge');
    expect(badge!.tagName).toBe('SPAN');
  });
});
