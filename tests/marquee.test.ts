import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initMarquee } from '../src/js/marquee';

describe('marquee', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-marquee" data-bj-marquee>
        <div class="bj-marquee__track">
          <span class="bj-marquee__item">Annonce 1</span>
          <span class="bj-marquee__item">Annonce 2</span>
        </div>
        <button class="bj-marquee__pause" type="button">
          <i class="ri-pause-line" aria-hidden="true"></i>
        </button>
      </div>
    `;
    // Mock matchMedia for prefers-reduced-motion
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
    initMarquee();
  });

  it('should duplicate track content for seamless loop', () => {
    const track = document.querySelector('.bj-marquee__track')!;
    const items = track.querySelectorAll('.bj-marquee__item');
    expect(items.length).toBe(4);
  });

  it('should set aria-live="off" initially', () => {
    const wrapper = document.querySelector('[data-bj-marquee]')!;
    expect(wrapper.getAttribute('aria-live')).toBe('off');
  });

  it('should pause on button click', () => {
    const pauseBtn = document.querySelector<HTMLButtonElement>('.bj-marquee__pause')!;
    pauseBtn.click();

    const wrapper = document.querySelector('[data-bj-marquee]')!;
    expect(wrapper.classList.contains('bj-marquee--paused')).toBe(true);
    expect(wrapper.getAttribute('aria-live')).toBe('polite');
  });

  it('should resume on second button click', () => {
    const pauseBtn = document.querySelector<HTMLButtonElement>('.bj-marquee__pause')!;
    pauseBtn.click();
    pauseBtn.click();

    const wrapper = document.querySelector('[data-bj-marquee]')!;
    expect(wrapper.classList.contains('bj-marquee--paused')).toBe(false);
    expect(wrapper.getAttribute('aria-live')).toBe('off');
  });

  it('should dispatch bj:marquee:pause event', () => {
    const wrapper = document.querySelector<HTMLElement>('[data-bj-marquee]')!;
    const handler = vi.fn();
    wrapper.addEventListener('bj:marquee:pause', handler);

    const pauseBtn = document.querySelector<HTMLButtonElement>('.bj-marquee__pause')!;
    pauseBtn.click();

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('should set pause button aria-label', () => {
    const pauseBtn = document.querySelector<HTMLButtonElement>('.bj-marquee__pause')!;
    expect(pauseBtn.getAttribute('aria-label')).toBe('Mettre en pause le défilement');

    pauseBtn.click();
    expect(pauseBtn.getAttribute('aria-label')).toBe('Reprendre le défilement');
  });
});
