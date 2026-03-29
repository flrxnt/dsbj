import { register, focusTrap, queryNew } from './core';

let docListenersReady = false;

function openDrawer(id: string): void {
  const drawer = document.getElementById(id);
  if (!drawer) return;
  drawer.setAttribute('data-bj-expanded', '');
  document.body.classList.add('bj-drawer-open');
  focusTrap.trap(drawer);
}

function closeDrawer(drawer: HTMLElement | null): void {
  if (!drawer) return;
  drawer.removeAttribute('data-bj-expanded');
  document.body.classList.remove('bj-drawer-open');
  focusTrap.release(drawer);
  const opener = document.querySelector<HTMLElement>(`[data-bj-drawer-open="${drawer.id}"]`);
  opener?.focus();
}

export function initDrawer(): void {
  queryNew<HTMLElement>('[data-bj-drawer-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-bj-drawer-open');
      if (id) openDrawer(id);
    });
  });

  queryNew<HTMLElement>('[data-bj-drawer-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      closeDrawer(btn.closest('.bj-drawer'));
    });
  });

  if (!docListenersReady) {
    docListenersReady = true;

    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).classList.contains('bj-drawer__overlay')) {
        closeDrawer((e.target as HTMLElement).closest('.bj-drawer'));
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const open = document.querySelector<HTMLElement>('.bj-drawer[data-bj-expanded]');
        if (open) closeDrawer(open);
      }
    });
  }
}

register('drawer', initDrawer);
