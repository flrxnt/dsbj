import { register, focusTrap, queryNew } from './core';

export interface TourStep {
  target: string;
  title: string;
  content: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

export interface TourChangeEvent {
  step: number;
  total: number;
}

function createOverlay(): HTMLElement {
  const overlay = document.createElement('div');
  overlay.className = 'bj-tour-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', 'Visite guidée');
  document.body.appendChild(overlay);
  return overlay;
}

function createHighlight(): HTMLElement {
  const hl = document.createElement('div');
  hl.className = 'bj-tour-highlight';
  document.body.appendChild(hl);
  return hl;
}

function createPopover(): HTMLElement {
  const pop = document.createElement('div');
  pop.className = 'bj-tour-popover';
  pop.innerHTML = `
    <button class="bj-tour-popover__close" aria-label="Fermer la visite" data-bj-tour-close><i class="ri-close-line" aria-hidden="true"></i></button>
    <div class="bj-tour-popover__header">
      <h3 class="bj-tour-popover__title"></h3>
      <span class="bj-tour-popover__step"></span>
    </div>
    <div class="bj-tour-popover__body"></div>
    <div class="bj-tour-popover__footer">
      <div class="bj-tour-popover__progress"></div>
      <div class="bj-tour-popover__actions">
        <button class="bj-btn bj-btn--sm bj-btn--secondary" data-bj-tour-prev>Précédent</button>
        <button class="bj-btn bj-btn--sm" data-bj-tour-next>Suivant</button>
      </div>
    </div>
  `;
  document.body.appendChild(pop);
  return pop;
}

const PADDING = 8;

function positionPopover(popover: HTMLElement, targetRect: DOMRect, placement: string): void {
  const gap = 12;
  const pop = popover.getBoundingClientRect();

  let top = 0;
  let left = 0;

  switch (placement) {
    case 'bottom':
      top = targetRect.bottom + gap + PADDING;
      left = targetRect.left + targetRect.width / 2 - pop.width / 2;
      break;
    case 'left':
      top = targetRect.top + targetRect.height / 2 - pop.height / 2;
      left = targetRect.left - pop.width - gap - PADDING;
      break;
    case 'right':
      top = targetRect.top + targetRect.height / 2 - pop.height / 2;
      left = targetRect.right + gap + PADDING;
      break;
    default: // top
      top = targetRect.top - pop.height - gap - PADDING;
      left = targetRect.left + targetRect.width / 2 - pop.width / 2;
      break;
  }

  left = Math.max(8, Math.min(left, window.innerWidth - pop.width - 8));
  top = Math.max(8, Math.min(top, window.innerHeight - pop.height - 8));

  popover.style.top = `${top + window.scrollY}px`;
  popover.style.left = `${left + window.scrollX}px`;
}

function initSingleTour(triggerEl: HTMLElement): void {
  const stepsAttr = triggerEl.getAttribute('data-bj-tour-steps');
  if (!stepsAttr) return;

  let steps: TourStep[];
  try {
    steps = JSON.parse(stepsAttr);
  } catch { return; }
  if (!steps.length) return;

  let currentStep = 0;
  let overlay: HTMLElement | null = null;
  let highlight: HTMLElement | null = null;
  let popover: HTMLElement | null = null;
  let openerElement: HTMLElement | null = null;

  function renderStep(): void {
    if (!overlay || !highlight || !popover) return;
    const step = steps[currentStep];
    const targetEl = document.querySelector<HTMLElement>(step.target);

    popover.querySelector<HTMLElement>('.bj-tour-popover__title')!.textContent = step.title;
    popover.querySelector<HTMLElement>('.bj-tour-popover__step')!.textContent = `${currentStep + 1}/${steps.length}`;
    popover.querySelector<HTMLElement>('.bj-tour-popover__body')!.innerHTML = step.content;

    const prevBtn = popover.querySelector<HTMLButtonElement>('[data-bj-tour-prev]')!;
    const nextBtn = popover.querySelector<HTMLButtonElement>('[data-bj-tour-next]')!;
    prevBtn.style.display = currentStep === 0 ? 'none' : '';
    nextBtn.textContent = currentStep === steps.length - 1 ? 'Terminer' : 'Suivant';

    const progressContainer = popover.querySelector<HTMLElement>('.bj-tour-popover__progress')!;
    progressContainer.innerHTML = steps.map((_, i) => {
      let cls = 'bj-tour-popover__progress-dot';
      if (i === currentStep) cls += ' bj-tour-popover__progress-dot--active';
      else if (i < currentStep) cls += ' bj-tour-popover__progress-dot--done';
      return `<span class="${cls}"></span>`;
    }).join('');

    if (targetEl) {
      targetEl.scrollIntoView?.({ behavior: 'smooth', block: 'center' });
      requestAnimationFrame(() => {
        if (!highlight || !popover) return;
        const rect = targetEl.getBoundingClientRect();
        highlight.style.top = `${rect.top + window.scrollY - PADDING}px`;
        highlight.style.left = `${rect.left + window.scrollX - PADDING}px`;
        highlight.style.width = `${rect.width + PADDING * 2}px`;
        highlight.style.height = `${rect.height + PADDING * 2}px`;
        highlight.style.display = '';
        positionPopover(popover, rect, step.placement || 'bottom');
      });
    } else {
      highlight!.style.display = 'none';
      popover.style.top = '50%';
      popover.style.left = '50%';
      popover.style.transform = 'translate(-50%, -50%)';
    }

    triggerEl.dispatchEvent(new CustomEvent<TourChangeEvent>('bj:tour:change', {
      detail: { step: currentStep, total: steps.length },
      bubbles: true,
    }));
  }

  function open(): void {
    currentStep = 0;
    if (!overlay) overlay = createOverlay();
    if (!highlight) highlight = createHighlight();
    if (!popover) popover = createPopover();

    overlay.setAttribute('data-bj-expanded', '');
    document.body.classList.add('bj-modal-open');

    popover.querySelector('[data-bj-tour-close]')!.addEventListener('click', close);
    popover.querySelector('[data-bj-tour-prev]')!.addEventListener('click', prevStep);
    popover.querySelector('[data-bj-tour-next]')!.addEventListener('click', nextStep);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });

    renderStep();
    focusTrap.trap(popover);

    triggerEl.dispatchEvent(new CustomEvent('bj:tour:start', { bubbles: true }));
  }

  function close(): void {
    if (!overlay) return;
    overlay.removeAttribute('data-bj-expanded');
    highlight?.remove();
    popover?.remove();
    overlay.remove();
    document.body.classList.remove('bj-modal-open');
    if (popover) focusTrap.release(popover);
    overlay = null;
    highlight = null;
    popover = null;
    openerElement?.focus();

    triggerEl.dispatchEvent(new CustomEvent('bj:tour:end', { bubbles: true }));
  }

  function nextStep(): void {
    if (currentStep < steps.length - 1) {
      currentStep++;
      renderStep();
    } else {
      close();
    }
  }

  function prevStep(): void {
    if (currentStep > 0) {
      currentStep--;
      renderStep();
    }
  }

  document.addEventListener('keydown', (e) => {
    if (!overlay?.hasAttribute('data-bj-expanded')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') nextStep();
    else if (e.key === 'ArrowLeft') prevStep();
  });

  triggerEl.addEventListener('click', () => {
    openerElement = triggerEl;
    open();
  });
}

export function initTour(): void {
  queryNew<HTMLElement>('[data-bj-tour]').forEach(initSingleTour);
}

register('tour', initTour);
