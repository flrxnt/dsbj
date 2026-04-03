import { register, queryNew } from './core';

export interface DraggableReorderEvent {
  from: number;
  to: number;
  element: HTMLElement;
}

function swapNodes(a: HTMLElement, b: HTMLElement): void {
  const parentA = a.parentNode!;
  const siblingA = a.nextSibling === b ? a : a.nextSibling;
  b.parentNode!.insertBefore(a, b);
  parentA.insertBefore(b, siblingA);
}

export function initDraggable(): void {
  const containers = queryNew<HTMLElement>('[data-bj-draggable]');

  containers.forEach((container) => {
    if (container.hasAttribute('data-bj-draggable-disabled')) return;

    const handleSelector = container.getAttribute('data-bj-draggable-handle');
    let dragItem: HTMLElement | null = null;

    const getItems = (): HTMLElement[] =>
      Array.from(container.querySelectorAll<HTMLElement>(':scope > [data-bj-draggable-item]'));

    function getIndex(item: HTMLElement): number {
      return getItems().indexOf(item);
    }

    function onDragStart(e: DragEvent): void {
      const item = (e.target as HTMLElement).closest<HTMLElement>('[data-bj-draggable-item]');
      if (!item || !container.contains(item)) return;

      dragItem = item;
      item.classList.add('bj-draggable__item--dragging');
      e.dataTransfer!.effectAllowed = 'move';
      e.dataTransfer!.setData('text/plain', '');
    }

    function onDragOver(e: DragEvent): void {
      e.preventDefault();
      e.dataTransfer!.dropEffect = 'move';

      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-bj-draggable-item]');
      if (!target || target === dragItem || !container.contains(target)) return;

      getItems().forEach(it => it.classList.remove('bj-draggable__item--over'));
      target.classList.add('bj-draggable__item--over');
    }

    function onDrop(e: DragEvent): void {
      e.preventDefault();
      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-bj-draggable-item]');
      if (!target || !dragItem || target === dragItem || !container.contains(target)) return;

      const fromIndex = getIndex(dragItem);
      swapNodes(dragItem, target);
      const toIndex = getIndex(dragItem);

      container.dispatchEvent(new CustomEvent<DraggableReorderEvent>('bj:reorder', {
        bubbles: true,
        detail: { from: fromIndex, to: toIndex, element: dragItem },
      }));
    }

    function onDragEnd(): void {
      getItems().forEach(it => {
        it.classList.remove('bj-draggable__item--dragging');
        it.classList.remove('bj-draggable__item--over');
      });
      dragItem = null;
    }

    getItems().forEach((item) => {
      item.setAttribute('draggable', 'true');

      if (handleSelector) {
        item.setAttribute('draggable', 'false');
        const handle = item.querySelector<HTMLElement>(handleSelector);
        if (handle) {
          handle.addEventListener('mousedown', () => item.setAttribute('draggable', 'true'));
          handle.addEventListener('mouseup', () => item.setAttribute('draggable', 'false'));
        }
      }
    });

    container.addEventListener('dragstart', onDragStart);
    container.addEventListener('dragover', onDragOver);
    container.addEventListener('drop', onDrop);
    container.addEventListener('dragend', onDragEnd);

    // Keyboard support: Arrow keys to reorder when item is focused
    container.addEventListener('keydown', (e) => {
      const item = (e.target as HTMLElement).closest<HTMLElement>('[data-bj-draggable-item]');
      if (!item || !container.contains(item)) return;

      const items = getItems();
      const idx = items.indexOf(item);
      if (idx < 0) return;

      let targetIdx = -1;
      if (e.key === 'ArrowUp' && idx > 0) targetIdx = idx - 1;
      if (e.key === 'ArrowDown' && idx < items.length - 1) targetIdx = idx + 1;

      if (targetIdx >= 0) {
        e.preventDefault();
        const target = items[targetIdx];
        swapNodes(item, target);
        item.focus();
        container.dispatchEvent(new CustomEvent<DraggableReorderEvent>('bj:reorder', {
          bubbles: true,
          detail: { from: idx, to: targetIdx, element: item },
        }));
      }
    });
  });
}

register('draggable', initDraggable);
