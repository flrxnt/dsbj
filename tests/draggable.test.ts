import { describe, it, expect, beforeEach } from 'vitest';
import { initDraggable } from '../src/js/draggable';

describe('draggable', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-draggable" data-bj-draggable id="drag-container">
        <div class="bj-draggable__item" data-bj-draggable-item tabindex="0" role="listitem" id="item-1">
          <span class="bj-draggable__handle" aria-hidden="true"></span>
          <span class="bj-draggable__content">Élément 1</span>
        </div>
        <div class="bj-draggable__item" data-bj-draggable-item tabindex="0" role="listitem" id="item-2">
          <span class="bj-draggable__handle" aria-hidden="true"></span>
          <span class="bj-draggable__content">Élément 2</span>
        </div>
        <div class="bj-draggable__item" data-bj-draggable-item tabindex="0" role="listitem" id="item-3">
          <span class="bj-draggable__handle" aria-hidden="true"></span>
          <span class="bj-draggable__content">Élément 3</span>
        </div>
      </div>
    `;
    initDraggable();
  });

  it('should set draggable attribute on items', () => {
    const items = document.querySelectorAll('[data-bj-draggable-item]');
    items.forEach(item => {
      expect(item.getAttribute('draggable')).toBe('true');
    });
  });

  it('should have correct number of items', () => {
    const items = document.querySelectorAll('[data-bj-draggable-item]');
    expect(items.length).toBe(3);
  });

  it('should reorder items on ArrowDown keydown', () => {
    const container = document.getElementById('drag-container')!;
    const item1 = document.getElementById('item-1')!;

    item1.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));

    const items = container.querySelectorAll('[data-bj-draggable-item]');
    expect(items[0].id).toBe('item-2');
    expect(items[1].id).toBe('item-1');
  });

  it('should reorder items on ArrowUp keydown', () => {
    const container = document.getElementById('drag-container')!;
    const item2 = document.getElementById('item-2')!;

    item2.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));

    const items = container.querySelectorAll('[data-bj-draggable-item]');
    expect(items[0].id).toBe('item-2');
    expect(items[1].id).toBe('item-1');
  });

  it('should not reorder first item on ArrowUp', () => {
    const container = document.getElementById('drag-container')!;
    const item1 = document.getElementById('item-1')!;

    item1.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));

    const items = container.querySelectorAll('[data-bj-draggable-item]');
    expect(items[0].id).toBe('item-1');
  });

  it('should not reorder last item on ArrowDown', () => {
    const container = document.getElementById('drag-container')!;
    const item3 = document.getElementById('item-3')!;

    item3.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));

    const items = container.querySelectorAll('[data-bj-draggable-item]');
    expect(items[2].id).toBe('item-3');
  });

  it('should dispatch bj:reorder event on keyboard reorder', () => {
    const container = document.getElementById('drag-container')!;
    const item1 = document.getElementById('item-1')!;

    let reorderEvent: CustomEvent | null = null;
    container.addEventListener('bj:reorder', ((e: CustomEvent) => {
      reorderEvent = e;
    }) as EventListener);

    item1.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));

    expect(reorderEvent).not.toBeNull();
    expect(reorderEvent!.detail.from).toBe(0);
    expect(reorderEvent!.detail.to).toBe(1);
  });
});

describe('draggable: disabled', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-draggable bj-draggable--disabled" data-bj-draggable data-bj-draggable-disabled>
        <div class="bj-draggable__item" data-bj-draggable-item tabindex="0" role="listitem" id="dis-item-1">
          <span class="bj-draggable__content">Élément 1</span>
        </div>
        <div class="bj-draggable__item" data-bj-draggable-item tabindex="0" role="listitem" id="dis-item-2">
          <span class="bj-draggable__content">Élément 2</span>
        </div>
      </div>
    `;
    initDraggable();
  });

  it('should not set draggable attribute when disabled', () => {
    const items = document.querySelectorAll('[data-bj-draggable-item]');
    items.forEach(item => {
      expect(item.getAttribute('draggable')).not.toBe('true');
    });
  });
});
