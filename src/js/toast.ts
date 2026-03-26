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

  const iconSpan = document.createElement('span');
  iconSpan.className = 'bj-toast__icon';
  iconSpan.setAttribute('aria-hidden', 'true');
  const iconI = document.createElement('i');
  iconI.className = icon;
  iconSpan.appendChild(iconI);
  el.appendChild(iconSpan);

  const body = document.createElement('div');
  body.className = 'bj-toast__body';
  if (title) {
    const titleP = document.createElement('p');
    titleP.className = 'bj-toast__title';
    titleP.textContent = title;
    body.appendChild(titleP);
  }
  const textP = document.createElement('p');
  textP.className = 'bj-toast__text';
  textP.textContent = text;
  body.appendChild(textP);
  el.appendChild(body);

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'bj-toast__close';
  closeBtn.setAttribute('aria-label', 'Fermer');
  const closeIcon = document.createElement('i');
  closeIcon.className = 'ri-close-line';
  closeIcon.setAttribute('aria-hidden', 'true');
  closeBtn.appendChild(closeIcon);
  el.appendChild(closeBtn);

  if (duration > 0) {
    const progress = document.createElement('div');
    progress.className = 'bj-toast__progress';
    el.appendChild(progress);
  }

  container.appendChild(el);

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
