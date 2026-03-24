import { register, focusTrap, queryNew } from './core';

let docListenersReady = false;

function openModal(id: string): void {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.setAttribute('data-bj-expanded', '');
  document.body.classList.add('bj-modal-open');
  focusTrap.trap(modal);
}

function closeModal(modal: HTMLElement | null): void {
  if (!modal) return;
  modal.removeAttribute('data-bj-expanded');
  document.body.classList.remove('bj-modal-open');
  focusTrap.release(modal);
  const opener = document.querySelector<HTMLElement>(`[data-bj-modal-open="${modal.id}"]`);
  opener?.focus();
}

export function initModal(): void {
  queryNew<HTMLElement>('[data-bj-modal-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-bj-modal-open');
      if (id) openModal(id);
    });
  });

  queryNew<HTMLElement>('[data-bj-modal-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      closeModal(btn.closest('.bj-modal'));
    });
  });

  if (!docListenersReady) {
    docListenersReady = true;

    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).classList.contains('bj-modal__overlay')) {
        closeModal((e.target as HTMLElement).closest('.bj-modal'));
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const open = document.querySelector<HTMLElement>('.bj-modal[data-bj-expanded]');
        if (open) closeModal(open);
      }
    });
  }
}

register('modal', initModal);
