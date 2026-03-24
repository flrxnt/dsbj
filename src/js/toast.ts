import { register, queryNew } from './core';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface ToastOptions {
  title?: string;
  text: string;
  type?: ToastType;
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const ICONS: Record<ToastType, string> = {
  info: 'ri-information-line',
  success: 'ri-check-line',
  warning: 'ri-alert-line',
  error: 'ri-close-circle-line',
};

const MAX_VISIBLE = 5;

function getContainer(position: string): HTMLElement {
  const posClass = position === 'top-right' ? '' : `bj-toast-container--${position}`;
  const selector = `.bj-toast-container${posClass ? `.${posClass}` : ':not([class*="--"])'}`;
  let container = document.querySelector<HTMLElement>(selector);

  if (!container) {
    container = document.createElement('div');
    container.className = `bj-toast-container${posClass ? ` ${posClass}` : ''}`;
    container.setAttribute('data-bj-toast-container', '');
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('role', 'status');
    document.body.appendChild(container);
  }

  return container;
}

function removeToast(el: HTMLElement): void {
  el.classList.add('bj-toast--removing');
  el.addEventListener('animationend', () => {
    el.remove();
    document.dispatchEvent(new CustomEvent('bj:toast:dismiss', { detail: { element: el }, bubbles: true }));
  }, { once: true });
}

export function toast(options: ToastOptions): HTMLElement {
  const {
    title,
    text,
    type = 'info',
    duration = 5000,
    position = 'top-right',
  } = options;

  const container = getContainer(position);

  // Enforce max visible
  const existing = container.querySelectorAll('.bj-toast:not(.bj-toast--removing)');
  if (existing.length >= MAX_VISIBLE) {
    removeToast(existing[0] as HTMLElement);
  }

  const el = document.createElement('div');
  el.className = `bj-toast bj-toast--${type}`;
  el.setAttribute('role', 'alert');

  const icon = ICONS[type] || ICONS.info;

  el.innerHTML = `
    <span class="bj-toast__icon" aria-hidden="true"><i class="${icon}"></i></span>
    <div class="bj-toast__body">
      ${title ? `<p class="bj-toast__title">${title}</p>` : ''}
      <p class="bj-toast__text">${text}</p>
    </div>
    <button type="button" class="bj-toast__close" aria-label="Fermer"><i class="ri-close-line" aria-hidden="true"></i></button>
    ${duration > 0 ? '<div class="bj-toast__progress"></div>' : ''}
  `;

  container.appendChild(el);

  const closeBtn = el.querySelector<HTMLButtonElement>('.bj-toast__close')!;
  closeBtn.addEventListener('click', () => removeToast(el));

  if (duration > 0) {
    const progress = el.querySelector<HTMLElement>('.bj-toast__progress');
    if (progress) {
      progress.style.width = '100%';
      requestAnimationFrame(() => {
        progress.style.transitionDuration = `${duration}ms`;
        progress.style.width = '0%';
      });
    }
    setTimeout(() => {
      if (el.parentNode) removeToast(el);
    }, duration);
  }

  document.dispatchEvent(new CustomEvent('bj:toast:show', { detail: { element: el, type }, bubbles: true }));

  return el;
}

export function initToast(): void {
  queryNew<HTMLElement>('[data-bj-toast-trigger]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-bj-toast-text') || '';
      const title = btn.getAttribute('data-bj-toast-title') || undefined;
      const type = (btn.getAttribute('data-bj-toast-type') || 'info') as ToastType;
      const duration = parseInt(btn.getAttribute('data-bj-toast-duration') || '5000', 10);
      toast({ title, text, type, duration });
    });
  });
}

register('toast', initToast);
