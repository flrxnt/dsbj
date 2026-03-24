import { describe, it, expect, beforeEach, vi } from 'vitest';
import { toast, initToast } from '../src/js/toast';

describe('toast', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should create a toast element in a container', () => {
    toast({ text: 'Test message', type: 'success' });
    const container = document.querySelector('.bj-toast-container');
    expect(container).toBeTruthy();
    const toastEl = container!.querySelector('.bj-toast');
    expect(toastEl).toBeTruthy();
    expect(toastEl!.textContent).toContain('Test message');
  });

  it('should apply the correct type class', () => {
    toast({ text: 'Error!', type: 'error' });
    const toastEl = document.querySelector('.bj-toast');
    expect(toastEl!.classList.contains('bj-toast--error')).toBe(true);
  });

  it('should render title when provided', () => {
    toast({ title: 'Titre', text: 'Contenu', type: 'info' });
    const titleEl = document.querySelector('.bj-toast__title');
    expect(titleEl).toBeTruthy();
    expect(titleEl!.textContent).toBe('Titre');
  });

  it('should auto-remove after duration', () => {
    toast({ text: 'Temp', type: 'info', duration: 3000 });
    expect(document.querySelector('.bj-toast')).toBeTruthy();

    vi.advanceTimersByTime(3100);
    const el = document.querySelector('.bj-toast');
    expect(el?.classList.contains('bj-toast--removing')).toBe(true);
  });

  it('should remove on close button click', () => {
    toast({ text: 'Closable', type: 'warning' });
    const closeBtn = document.querySelector<HTMLButtonElement>('.bj-toast__close')!;
    closeBtn.click();

    const el = document.querySelector('.bj-toast');
    expect(el?.classList.contains('bj-toast--removing')).toBe(true);
  });

  it('should dispatch bj:toast:show event', () => {
    const handler = vi.fn();
    document.addEventListener('bj:toast:show', handler);

    toast({ text: 'Event test', type: 'success' });
    expect(handler).toHaveBeenCalledTimes(1);

    document.removeEventListener('bj:toast:show', handler);
  });

  it('should enforce max 5 visible toasts', () => {
    for (let i = 0; i < 6; i++) {
      toast({ text: `Toast ${i}`, type: 'info', duration: 0 });
    }
    const toasts = document.querySelectorAll('.bj-toast:not(.bj-toast--removing)');
    expect(toasts.length).toBeLessThanOrEqual(5);
  });
});

describe('toast declarative triggers', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button data-bj-toast-trigger data-bj-toast-text="Notification" data-bj-toast-type="success" data-bj-toast-title="Succès">Trigger</button>
    `;
    initToast();
  });

  it('should create toast on trigger click', () => {
    document.querySelector<HTMLButtonElement>('[data-bj-toast-trigger]')!.click();
    const toastEl = document.querySelector('.bj-toast');
    expect(toastEl).toBeTruthy();
    expect(toastEl!.textContent).toContain('Notification');
  });
});
