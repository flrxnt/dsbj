import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initTour } from '../src/js/tour';

describe('tour', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="target-1">Feature 1</div>
      <div id="target-2">Feature 2</div>
      <button
        id="tour-trigger"
        data-bj-tour
        data-bj-tour-steps='[
          { "target": "#target-1", "title": "Step 1", "content": "Description 1", "placement": "bottom" },
          { "target": "#target-2", "title": "Step 2", "content": "Description 2", "placement": "right" }
        ]'
      >
        Start Tour
      </button>
    `;
    initTour();
  });

  it('should not create overlay before trigger click', () => {
    expect(document.querySelector('.bj-tour-overlay')).toBeNull();
  });

  it('should create overlay on trigger click', () => {
    const trigger = document.getElementById('tour-trigger')!;
    trigger.click();

    expect(document.querySelector('.bj-tour-overlay')).not.toBeNull();
    expect(document.querySelector('.bj-tour-popover')).not.toBeNull();
    expect(document.querySelector('.bj-tour-highlight')).not.toBeNull();
  });

  it('should display first step title after opening', () => {
    const trigger = document.getElementById('tour-trigger')!;
    trigger.click();

    const title = document.querySelector('.bj-tour-popover__title');
    expect(title?.textContent).toBe('Step 1');
  });

  it('should display step counter', () => {
    const trigger = document.getElementById('tour-trigger')!;
    trigger.click();

    const step = document.querySelector('.bj-tour-popover__step');
    expect(step?.textContent).toBe('1/2');
  });

  it('should navigate to next step on next button click', () => {
    const trigger = document.getElementById('tour-trigger')!;
    trigger.click();

    const nextBtn = document.querySelector<HTMLButtonElement>('[data-bj-tour-next]')!;
    nextBtn.click();

    const title = document.querySelector('.bj-tour-popover__title');
    expect(title?.textContent).toBe('Step 2');
  });

  it('should close on close button click', () => {
    const trigger = document.getElementById('tour-trigger')!;
    trigger.click();

    const closeBtn = document.querySelector<HTMLButtonElement>('[data-bj-tour-close]')!;
    closeBtn.click();

    expect(document.querySelector('.bj-tour-overlay')).toBeNull();
  });

  it('should hide prev button on first step', () => {
    const trigger = document.getElementById('tour-trigger')!;
    trigger.click();

    const prevBtn = document.querySelector<HTMLButtonElement>('[data-bj-tour-prev]')!;
    expect(prevBtn.style.display).toBe('none');
  });

  it('should show Terminer on last step', () => {
    const trigger = document.getElementById('tour-trigger')!;
    trigger.click();

    const nextBtn = document.querySelector<HTMLButtonElement>('[data-bj-tour-next]')!;
    nextBtn.click();

    expect(nextBtn.textContent).toBe('Terminer');
  });

  it('should close when clicking Terminer on last step', () => {
    const trigger = document.getElementById('tour-trigger')!;
    trigger.click();

    const nextBtn = document.querySelector<HTMLButtonElement>('[data-bj-tour-next]')!;
    nextBtn.click();
    nextBtn.click();

    expect(document.querySelector('.bj-tour-overlay')).toBeNull();
  });

  it('should dispatch bj:tour:change event', () => {
    const trigger = document.getElementById('tour-trigger')!;
    let changeEvent: CustomEvent | null = null;
    trigger.addEventListener('bj:tour:change', ((e: CustomEvent) => {
      changeEvent = e;
    }) as EventListener);

    trigger.click();

    expect(changeEvent).not.toBeNull();
    expect(changeEvent!.detail.step).toBe(0);
    expect(changeEvent!.detail.total).toBe(2);
  });

  it('should dispatch bj:tour:start event', () => {
    const trigger = document.getElementById('tour-trigger')!;
    let started = false;
    trigger.addEventListener('bj:tour:start', () => { started = true; });

    trigger.click();

    expect(started).toBe(true);
  });

  it('should create progress dots', () => {
    const trigger = document.getElementById('tour-trigger')!;
    trigger.click();

    const dots = document.querySelectorAll('.bj-tour-popover__progress-dot');
    expect(dots.length).toBe(2);
  });

  it('should add bj-modal-open class to body', () => {
    const trigger = document.getElementById('tour-trigger')!;
    trigger.click();

    expect(document.body.classList.contains('bj-modal-open')).toBe(true);
  });
});
