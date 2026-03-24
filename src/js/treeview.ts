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
}

register('treeview', initTreeview);
