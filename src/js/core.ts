export type ComponentInit = () => void;

const registry: Record<string, ComponentInit> = {};

export function register(name: string, handler: ComponentInit): void {
  registry[name] = handler;
}

export function boot(): void {
  for (const name of Object.keys(registry)) {
    registry[name]();
  }
}

const INIT_ATTR = 'data-bj-ready';

export function queryNew<T extends HTMLElement>(selector: string): T[] {
  const elements = Array.from(
    document.querySelectorAll<T>(`${selector}:not([${INIT_ATTR}])`)
  );
  elements.forEach(el => el.setAttribute(INIT_ATTR, ''));
  return elements;
}

const FOCUSABLE = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface TrapEntry {
  el: HTMLElement;
  handler: (e: KeyboardEvent) => void;
}

const trapStack: TrapEntry[] = [];

export const focusTrap = {
  trap(el: HTMLElement): void {
    const focusable = el.querySelectorAll<HTMLElement>(FOCUSABLE);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    trapStack.push({ el, handler });
    el.addEventListener('keydown', handler);
    first.focus();
  },

  release(el: HTMLElement): void {
    for (let i = trapStack.length - 1; i >= 0; i--) {
      if (trapStack[i].el === el) {
        el.removeEventListener('keydown', trapStack[i].handler);
        trapStack.splice(i, 1);
        break;
      }
    }
  },
};
