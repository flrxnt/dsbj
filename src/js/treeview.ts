import { register, queryNew } from './core';

function updateParentCheckbox(child: HTMLInputElement): void {
  const branch = child.closest('.bj-tree__branch');
  if (!branch) return;

  const parentItem = branch.closest('.bj-tree__item');
  if (!parentItem) return;

  const parentCb = parentItem.querySelector<HTMLInputElement>(
    ':scope > .bj-tree__item-content .bj-tree__checkbox',
  );
  if (!parentCb) return;

  const siblings = branch.querySelectorAll<HTMLInputElement>(':scope > .bj-tree__item > .bj-tree__item-content .bj-tree__checkbox');
  const total = siblings.length;
  let checked = 0;
  let indeterminate = 0;

  siblings.forEach((cb) => {
    if (cb.checked) checked++;
    if (cb.indeterminate) indeterminate++;
  });

  if (checked === total) {
    parentCb.checked = true;
    parentCb.indeterminate = false;
  } else if (checked === 0 && indeterminate === 0) {
    parentCb.checked = false;
    parentCb.indeterminate = false;
  } else {
    parentCb.checked = false;
    parentCb.indeterminate = true;
  }

  updateParentCheckbox(parentCb);
}

function setDescendants(item: HTMLElement, checked: boolean): void {
  const branch = item.querySelector<HTMLElement>(':scope > .bj-tree__branch');
  if (!branch) return;

  branch.querySelectorAll<HTMLInputElement>('.bj-tree__checkbox').forEach((cb) => {
    cb.checked = checked;
    cb.indeterminate = false;
  });
}

function getVisibleItems(tree: HTMLElement): HTMLElement[] {
  const items: HTMLElement[] = [];
  const walk = (parent: HTMLElement) => {
    const children = parent.querySelectorAll<HTMLElement>(':scope > .bj-tree__item');
    children.forEach((item) => {
      items.push(item);
      const toggle = item.querySelector<HTMLElement>(':scope > .bj-tree__item-content [data-bj-tree-toggle]');
      if (toggle && toggle.getAttribute('aria-expanded') === 'true') {
        const branch = item.querySelector<HTMLElement>(':scope > .bj-tree__branch');
        if (branch) walk(branch);
      }
    });
  };
  walk(tree);
  return items;
}

function focusItem(item: HTMLElement): void {
  const tree = item.closest<HTMLElement>('[role="tree"]');
  if (tree) {
    tree.querySelectorAll<HTMLElement>('[role="treeitem"]').forEach(
      (el) => el.setAttribute('tabindex', '-1'),
    );
  }
  item.setAttribute('tabindex', '0');
  item.focus();
}

export function initTreeview(): void {
  const toggles = queryNew<HTMLButtonElement>('[data-bj-tree-toggle]');

  toggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const item = btn.closest('.bj-tree__item');
      if (!item) return;
      const branch = item.querySelector<HTMLElement>(':scope > .bj-tree__branch');
      if (!branch) return;

      btn.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        branch.setAttribute('hidden', '');
      } else {
        branch.removeAttribute('hidden');
      }
    });
  });

  const checkboxes = queryNew<HTMLInputElement>('.bj-tree--checkbox .bj-tree__checkbox');

  checkboxes.forEach((cb) => {
    cb.addEventListener('change', () => {
      const item = cb.closest('.bj-tree__item');
      if (!item) return;

      setDescendants(item, cb.checked);
      updateParentCheckbox(cb);
    });
  });

  const trees = queryNew<HTMLElement>('[role="tree"]');
  trees.forEach((tree) => {
    const firstItem = tree.querySelector<HTMLElement>('[role="treeitem"]');
    if (firstItem) firstItem.setAttribute('tabindex', '0');

    tree.addEventListener('keydown', (e: KeyboardEvent) => {
      const focused = document.activeElement as HTMLElement;
      const item = focused?.closest<HTMLElement>('[role="treeitem"]');
      if (!item) return;

      const visible = getVisibleItems(tree);
      const idx = visible.indexOf(item);
      if (idx === -1) return;

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          if (idx < visible.length - 1) focusItem(visible[idx + 1]);
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          if (idx > 0) focusItem(visible[idx - 1]);
          break;
        }
        case 'ArrowRight': {
          e.preventDefault();
          const toggle = item.querySelector<HTMLElement>(':scope > .bj-tree__item-content [data-bj-tree-toggle]');
          if (toggle) {
            if (toggle.getAttribute('aria-expanded') === 'false') {
              toggle.click();
            } else {
              const branch = item.querySelector<HTMLElement>(':scope > .bj-tree__branch');
              const firstChild = branch?.querySelector<HTMLElement>(':scope > [role="treeitem"]');
              if (firstChild) focusItem(firstChild);
            }
          }
          break;
        }
        case 'ArrowLeft': {
          e.preventDefault();
          const toggle = item.querySelector<HTMLElement>(':scope > .bj-tree__item-content [data-bj-tree-toggle]');
          if (toggle && toggle.getAttribute('aria-expanded') === 'true') {
            toggle.click();
          } else {
            const parentBranch = item.closest<HTMLElement>('.bj-tree__branch');
            const parentItem = parentBranch?.closest<HTMLElement>('[role="treeitem"]');
            if (parentItem) focusItem(parentItem);
          }
          break;
        }
        case 'Home': {
          e.preventDefault();
          if (visible[0]) focusItem(visible[0]);
          break;
        }
        case 'End': {
          e.preventDefault();
          if (visible.length) focusItem(visible[visible.length - 1]);
          break;
        }
        case 'Enter':
        case ' ': {
          e.preventDefault();
          const cb = item.querySelector<HTMLInputElement>(':scope > .bj-tree__item-content .bj-tree__checkbox');
          if (cb) {
            cb.checked = !cb.checked;
            cb.dispatchEvent(new Event('change', { bubbles: true }));
          } else {
            const btn = item.querySelector<HTMLElement>(':scope > .bj-tree__item-content [data-bj-tree-toggle]');
            btn?.click();
          }
          break;
        }
      }
    });
  });
}

register('treeview', initTreeview);
