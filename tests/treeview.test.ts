import { describe, it, expect, beforeEach } from 'vitest';
import { initTreeview } from '../src/js/treeview';

describe('treeview', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul class="bj-tree" role="tree" data-bj-tree>
        <li class="bj-tree__item" role="treeitem" tabindex="0" aria-expanded="false">
          <div class="bj-tree__item-content">
            <button type="button" class="bj-tree__toggle" data-bj-tree-toggle tabindex="-1" aria-label="Développer Root">Toggle</button>
            <span class="bj-tree__label">Root</span>
          </div>
          <ul class="bj-tree__branch" role="group" hidden>
            <li class="bj-tree__item" role="treeitem" tabindex="-1">
              <div class="bj-tree__item-content">
                <span class="bj-tree__label">Child 1</span>
              </div>
            </li>
            <li class="bj-tree__item" role="treeitem" tabindex="-1">
              <div class="bj-tree__item-content">
                <span class="bj-tree__label">Child 2</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="bj-tree__item" role="treeitem" tabindex="-1">
          <div class="bj-tree__item-content">
            <span class="bj-tree__label">Leaf</span>
          </div>
        </li>
      </ul>
    `;
    initTreeview();
  });

  it('should have tree role on root', () => {
    expect(document.querySelector('[role="tree"]')).toBeTruthy();
  });

  it('should have treeitem roles', () => {
    const items = document.querySelectorAll('[role="treeitem"]');
    expect(items.length).toBe(4);
  });

  it('should have group role for branches', () => {
    expect(document.querySelector('[role="group"]')).toBeTruthy();
  });

  it('should start with branch hidden', () => {
    const branch = document.querySelector('.bj-tree__branch');
    expect(branch!.hidden).toBe(true);
  });

  it('should have toggle buttons with accessible labels', () => {
    const toggle = document.querySelector('[data-bj-tree-toggle]');
    expect(toggle!.getAttribute('aria-label')).toBeTruthy();
  });

  it('should make first item focusable', () => {
    const first = document.querySelector('[role="treeitem"]');
    expect(first!.getAttribute('tabindex')).toBe('0');
  });

  it('should make non-first items tab unfocusable', () => {
    const items = document.querySelectorAll('[role="treeitem"]');
    for (let i = 1; i < items.length; i++) {
      expect(items[i].getAttribute('tabindex')).toBe('-1');
    }
  });
});
