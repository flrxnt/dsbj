import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initGallery } from '../src/js/gallery';

describe('gallery', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-gallery" data-bj-gallery>
        <div class="bj-gallery__item">
          <img class="bj-gallery__img" src="https://picsum.photos/id/10/400/300" alt="Image 1" />
          <span class="bj-gallery__caption">Légende 1</span>
        </div>
        <div class="bj-gallery__item">
          <img class="bj-gallery__img" src="https://picsum.photos/id/20/400/300" alt="Image 2" />
          <span class="bj-gallery__caption">Légende 2</span>
        </div>
        <div class="bj-gallery__item">
          <img class="bj-gallery__img" src="https://picsum.photos/id/30/400/300" alt="Image 3" />
        </div>
      </div>
    `;
    initGallery();
  });

  it('should set tabindex and role on gallery items', () => {
    const items = document.querySelectorAll('.bj-gallery__item');
    items.forEach((item) => {
      expect(item.getAttribute('tabindex')).toBe('0');
      expect(item.getAttribute('role')).toBe('button');
    });
  });

  it('should open lightbox on item click', () => {
    const item = document.querySelector<HTMLElement>('.bj-gallery__item')!;
    item.click();

    const lightbox = document.querySelector('.bj-lightbox');
    expect(lightbox).toBeTruthy();
    expect(lightbox!.hasAttribute('data-bj-expanded')).toBe(true);
  });

  it('should show correct image in lightbox', () => {
    const items = document.querySelectorAll<HTMLElement>('.bj-gallery__item');
    items[1].click();

    const img = document.querySelector<HTMLImageElement>('.bj-lightbox__img')!;
    expect(img.src).toContain('id/20');
  });

  it('should show counter', () => {
    const item = document.querySelector<HTMLElement>('.bj-gallery__item')!;
    item.click();

    const counter = document.querySelector('.bj-lightbox__counter')!;
    expect(counter.textContent).toBe('1 / 3');
  });

  it('should navigate to next image', () => {
    const item = document.querySelector<HTMLElement>('.bj-gallery__item')!;
    item.click();

    const nextBtn = document.querySelector<HTMLButtonElement>('[data-bj-lightbox-next]')!;
    nextBtn.click();

    const counter = document.querySelector('.bj-lightbox__counter')!;
    expect(counter.textContent).toBe('2 / 3');
  });

  it('should close on close button', () => {
    const item = document.querySelector<HTMLElement>('.bj-gallery__item')!;
    item.click();

    const closeBtn = document.querySelector<HTMLButtonElement>('[data-bj-lightbox-close]')!;
    closeBtn.click();

    const lightbox = document.querySelector('.bj-lightbox')!;
    expect(lightbox.hasAttribute('data-bj-expanded')).toBe(false);
  });

  it('should close on Escape', () => {
    const item = document.querySelector<HTMLElement>('.bj-gallery__item')!;
    item.click();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    const lightbox = document.querySelector('.bj-lightbox')!;
    expect(lightbox.hasAttribute('data-bj-expanded')).toBe(false);
  });

  it('should dispatch bj:gallery:open event', () => {
    const gallery = document.querySelector<HTMLElement>('[data-bj-gallery]')!;
    const handler = vi.fn();
    gallery.addEventListener('bj:gallery:open', handler);

    const item = document.querySelector<HTMLElement>('.bj-gallery__item')!;
    item.click();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail.index).toBe(0);
  });

  it('should wrap around on navigation', () => {
    const items = document.querySelectorAll<HTMLElement>('.bj-gallery__item');
    items[2].click();

    const nextBtn = document.querySelector<HTMLButtonElement>('[data-bj-lightbox-next]')!;
    nextBtn.click();

    const counter = document.querySelector('.bj-lightbox__counter')!;
    expect(counter.textContent).toBe('1 / 3');
  });
});
