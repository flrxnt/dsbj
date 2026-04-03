import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initCarousel } from '../src/js/carousel';

describe('carousel', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-carousel" data-bj-carousel id="carousel-container">
        <div class="bj-carousel__track" id="carousel-track">
          <div class="bj-carousel__slide" id="slide-1">Slide 1</div>
          <div class="bj-carousel__slide" id="slide-2">Slide 2</div>
          <div class="bj-carousel__slide" id="slide-3">Slide 3</div>
        </div>
        <button data-bj-carousel-prev id="btn-prev">Prev</button>
        <button data-bj-carousel-next id="btn-next">Next</button>
        <div class="bj-carousel__indicators">
          <button class="bj-carousel__dot" id="dot-0"></button>
          <button class="bj-carousel__dot" id="dot-1"></button>
          <button class="bj-carousel__dot" id="dot-2"></button>
        </div>
      </div>
    `;
    initCarousel();
  });

  it('should initialise at the first slide', () => {
    const track = document.getElementById('carousel-track')!;
    expect(track.style.transform).toBe('translateX(-0%)');
  });

  it('should mark the first dot as active', () => {
    const dot0 = document.getElementById('dot-0')!;
    expect(dot0.classList.contains('bj-carousel__dot--active')).toBe(true);
  });

  it('should navigate to next slide on next button click', () => {
    const next = document.getElementById('btn-next')!;
    next.click();

    const track = document.getElementById('carousel-track')!;
    expect(track.style.transform).toBe('translateX(-100%)');
  });

  it('should navigate to previous slide on prev button click', () => {
    const next = document.getElementById('btn-next')!;
    const prev = document.getElementById('btn-prev')!;
    next.click();
    prev.click();

    const track = document.getElementById('carousel-track')!;
    expect(track.style.transform).toBe('translateX(-0%)');
  });

  it('should loop to last slide when pressing prev on first slide', () => {
    const prev = document.getElementById('btn-prev')!;
    prev.click();

    const track = document.getElementById('carousel-track')!;
    expect(track.style.transform).toBe('translateX(-200%)');
  });

  it('should loop to first slide when pressing next on last slide', () => {
    const next = document.getElementById('btn-next')!;
    next.click();
    next.click();
    next.click();

    const track = document.getElementById('carousel-track')!;
    expect(track.style.transform).toBe('translateX(-0%)');
  });

  it('should navigate via dot click', () => {
    const dot2 = document.getElementById('dot-2')!;
    dot2.click();

    const track = document.getElementById('carousel-track')!;
    expect(track.style.transform).toBe('translateX(-200%)');
  });

  it('should navigate on ArrowRight keydown', () => {
    const container = document.getElementById('carousel-container')!;
    container.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));

    const track = document.getElementById('carousel-track')!;
    expect(track.style.transform).toBe('translateX(-100%)');
  });

  it('should navigate on ArrowLeft keydown', () => {
    const next = document.getElementById('btn-next')!;
    next.click();

    const container = document.getElementById('carousel-container')!;
    container.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));

    const track = document.getElementById('carousel-track')!;
    expect(track.style.transform).toBe('translateX(-0%)');
  });

  it('should dispatch bj:carousel:change event', () => {
    const container = document.getElementById('carousel-container')!;
    let changeEvent: CustomEvent | null = null;
    container.addEventListener('bj:carousel:change', ((e: CustomEvent) => {
      changeEvent = e;
    }) as EventListener);

    const next = document.getElementById('btn-next')!;
    next.click();

    expect(changeEvent).not.toBeNull();
    expect(changeEvent!.detail.index).toBe(1);
    expect(changeEvent!.detail.total).toBe(3);
  });

  it('should set aria-hidden on non-active slides', () => {
    const slide1 = document.getElementById('slide-1')!;
    const slide2 = document.getElementById('slide-2')!;
    expect(slide1.getAttribute('aria-hidden')).toBe('false');
    expect(slide2.getAttribute('aria-hidden')).toBe('true');
  });
});
