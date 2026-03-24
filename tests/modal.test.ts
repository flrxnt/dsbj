import { describe, it, expect, beforeEach } from 'vitest';
import { initModal } from '../src/js/modal';

describe('modal', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button data-bj-modal-open="demo-modal" id="opener">Open</button>
      <div class="bj-modal" id="demo-modal">
        <div class="bj-modal__overlay"></div>
        <div class="bj-modal__dialog">
          <button data-bj-modal-close class="bj-modal__close">X</button>
          <div class="bj-modal__body"><button id="inside">Inside</button></div>
        </div>
      </div>
    `;
    initModal();
  });

  it('should open modal on button click', () => {
    document.getElementById('opener')!.click();
    expect(document.getElementById('demo-modal')!.hasAttribute('data-bj-expanded')).toBe(true);
    expect(document.body.classList.contains('bj-modal-open')).toBe(true);
  });

  it('should close modal on close button click', () => {
    document.getElementById('opener')!.click();
    document.querySelector<HTMLButtonElement>('[data-bj-modal-close]')!.click();
    expect(document.getElementById('demo-modal')!.hasAttribute('data-bj-expanded')).toBe(false);
  });

  it('should close modal on Escape key', () => {
    document.getElementById('opener')!.click();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(document.getElementById('demo-modal')!.hasAttribute('data-bj-expanded')).toBe(false);
  });

  it('should close modal on overlay click', () => {
    document.getElementById('opener')!.click();
    document.querySelector<HTMLElement>('.bj-modal__overlay')!.click();
    expect(document.getElementById('demo-modal')!.hasAttribute('data-bj-expanded')).toBe(false);
  });
});
