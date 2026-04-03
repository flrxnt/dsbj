import { describe, it, expect, beforeEach } from 'vitest';

describe('tag', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <span class="bj-tag">Default</span>
      <span class="bj-tag bj-tag--info">Info</span>
      <span class="bj-tag bj-tag--success bj-tag--sm">Small Success</span>
      <span class="bj-tag bj-tag--dismiss">
        Dismissible
        <button type="button" class="bj-tag__close" aria-label="Retirer">X</button>
      </span>
      <a class="bj-tag bj-tag--action" href="/tag">Action Link</a>
      <button class="bj-tag" type="button">Button Tag</button>
    `;
  });

  it('should render default as span', () => {
    const tag = document.querySelector('.bj-tag:not([class*="--info"])');
    expect(tag!.tagName).toBe('SPAN');
  });

  it('should support variant classes', () => {
    expect(document.querySelector('.bj-tag--info')).toBeTruthy();
    expect(document.querySelector('.bj-tag--success')).toBeTruthy();
    expect(document.querySelector('.bj-tag--action')).toBeTruthy();
  });

  it('should support small size', () => {
    expect(document.querySelector('.bj-tag--sm')).toBeTruthy();
  });

  it('should have dismiss button with aria-label', () => {
    const btn = document.querySelector('.bj-tag__close');
    expect(btn!.getAttribute('aria-label')).toBe('Retirer');
  });

  it('should render as anchor', () => {
    expect(document.querySelector('a.bj-tag')).toBeTruthy();
  });

  it('should not nest button in button when dismissible and tag is button', () => {
    const buttonTag = document.querySelector('button.bj-tag');
    const nested = buttonTag?.querySelector('button');
    expect(nested).toBeNull();
  });
});
