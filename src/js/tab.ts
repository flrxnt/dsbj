import { register, queryNew } from './core';

let tabUid = 0;

export function initTab(): void {
  queryNew<HTMLElement>('[data-bj-tabs]').forEach((group) => {
    const tabs = group.querySelectorAll<HTMLElement>('[data-bj-tab]');
    const panels = group.querySelectorAll<HTMLElement>('[data-bj-tab-panel]');
    const groupId = group.id || `bj-tabs-${++tabUid}`;

    tabs.forEach((tab, i) => {
      if (!tab.id) tab.setAttribute('id', `${groupId}-tab-${i}`);
    });

    panels.forEach((panel, i) => {
      if (!panel.id) panel.setAttribute('id', `${groupId}-panel-${i}`);
    });

    tabs.forEach((tab, i) => {
      const panel = panels[i];
      if (panel) {
        tab.setAttribute('aria-controls', panel.id);
        panel.setAttribute('aria-labelledby', tab.id);
      }
    });

    function activate(index: number): void {
      tabs.forEach((t, i) => {
        t.setAttribute('aria-selected', String(i === index));
        t.setAttribute('tabindex', i === index ? '0' : '-1');
      });
      panels.forEach((p, i) => {
        if (i === index) {
          p.setAttribute('data-bj-expanded', '');
          p.setAttribute('tabindex', '0');
        } else {
          p.removeAttribute('data-bj-expanded');
          p.removeAttribute('tabindex');
        }
      });
    }

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => activate(idx));

      tab.addEventListener('keydown', (e: KeyboardEvent) => {
        let dir = 0;
        if (e.key === 'ArrowRight') dir = 1;
        if (e.key === 'ArrowLeft') dir = -1;
        if (e.key === 'Home') { e.preventDefault(); activate(0); tabs[0].focus(); return; }
        if (e.key === 'End') { e.preventDefault(); activate(tabs.length - 1); tabs[tabs.length - 1].focus(); return; }
        if (dir === 0) return;
        e.preventDefault();
        const next = (idx + dir + tabs.length) % tabs.length;
        activate(next);
        tabs[next].focus();
      });
    });

    activate(0);
  });
}

register('tab', initTab);
