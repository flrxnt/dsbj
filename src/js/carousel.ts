import { register, queryNew } from './core';

export interface CarouselChangeEvent {
  index: number;
  total: number;
}

function initSingleCarousel(el: HTMLElement): void {
  const track = el.querySelector<HTMLElement>('.bj-carousel__track');
  const slides = Array.from(el.querySelectorAll<HTMLElement>('.bj-carousel__slide'));
  if (!track || slides.length === 0) return;

  const dots = Array.from(el.querySelectorAll<HTMLElement>('.bj-carousel__dot'));
  const prevBtn = el.querySelector<HTMLElement>('[data-bj-carousel-prev]');
  const nextBtn = el.querySelector<HTMLElement>('[data-bj-carousel-next]');
  const autoplay = el.hasAttribute('data-bj-carousel-auto');
  const interval = parseInt(el.getAttribute('data-bj-carousel-interval') || '5000', 10);

  let current = 0;
  let timer: ReturnType<typeof setInterval> | null = null;

  function goTo(index: number): void {
    current = ((index % slides.length) + slides.length) % slides.length;
    track!.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('bj-carousel__dot--active', i === current);
    });

    slides.forEach((slide, i) => {
      slide.setAttribute('aria-hidden', i === current ? 'false' : 'true');
    });

    el.dispatchEvent(new CustomEvent<CarouselChangeEvent>('bj:carousel:change', {
      detail: { index: current, total: slides.length },
      bubbles: true,
    }));
  }

  function next(): void { goTo(current + 1); }
  function prev(): void { goTo(current - 1); }

  function startAutoplay(): void {
    if (!autoplay || timer) return;
    timer = setInterval(next, interval);
  }

  function stopAutoplay(): void {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  prevBtn?.addEventListener('click', () => { stopAutoplay(); prev(); });
  nextBtn?.addEventListener('click', () => { stopAutoplay(); next(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { stopAutoplay(); goTo(i); });
  });

  el.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); stopAutoplay(); prev(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); stopAutoplay(); next(); }
  });

  el.addEventListener('mouseenter', stopAutoplay);
  el.addEventListener('mouseleave', startAutoplay);
  el.addEventListener('focusin', stopAutoplay);
  el.addEventListener('focusout', startAutoplay);

  let touchStartX = 0;
  el.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  el.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      stopAutoplay();
      diff > 0 ? next() : prev();
    }
  }, { passive: true });

  goTo(0);
  startAutoplay();
}

export function initCarousel(): void {
  queryNew<HTMLElement>('[data-bj-carousel]').forEach(initSingleCarousel);
}

register('carousel', initCarousel);
