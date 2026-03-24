import { register, queryNew } from './core';

function initSingleMarquee(wrapper: HTMLElement): void {
  const track = wrapper.querySelector<HTMLElement>('.bj-marquee__track');
  if (!track) return;

  // Duplicate content for seamless loop
  const clone = track.innerHTML;
  track.innerHTML += clone;

  const pauseBtn = wrapper.querySelector<HTMLButtonElement>('.bj-marquee__pause');
  let paused = false;

  wrapper.setAttribute('aria-live', 'off');

  function pause(): void {
    paused = true;
    wrapper.classList.add('bj-marquee--paused');
    wrapper.setAttribute('aria-live', 'polite');
    if (pauseBtn) {
      pauseBtn.setAttribute('aria-label', 'Reprendre le défilement');
      pauseBtn.innerHTML = '<i class="ri-play-line" aria-hidden="true"></i>';
    }
    wrapper.dispatchEvent(new CustomEvent('bj:marquee:pause', { bubbles: true }));
  }

  function resume(): void {
    paused = false;
    wrapper.classList.remove('bj-marquee--paused');
    wrapper.setAttribute('aria-live', 'off');
    if (pauseBtn) {
      pauseBtn.setAttribute('aria-label', 'Mettre en pause le défilement');
      pauseBtn.innerHTML = '<i class="ri-pause-line" aria-hidden="true"></i>';
    }
    wrapper.dispatchEvent(new CustomEvent('bj:marquee:resume', { bubbles: true }));
  }

  if (pauseBtn) {
    pauseBtn.setAttribute('aria-label', 'Mettre en pause le défilement');
    pauseBtn.addEventListener('click', () => {
      if (paused) resume(); else pause();
    });
  }

  // Auto-pause on hover for better UX
  wrapper.addEventListener('mouseenter', () => { if (!paused) wrapper.classList.add('bj-marquee--paused'); });
  wrapper.addEventListener('mouseleave', () => { if (!paused) wrapper.classList.remove('bj-marquee--paused'); });

  // Respect prefers-reduced-motion at JS level
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) pause();
  motionQuery.addEventListener('change', (e) => {
    if (e.matches) pause(); else resume();
  });
}

export function initMarquee(): void {
  queryNew<HTMLElement>('[data-bj-marquee]').forEach(initSingleMarquee);
}

register('marquee', initMarquee);
