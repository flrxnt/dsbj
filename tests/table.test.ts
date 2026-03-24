import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initTable } from '../src/js/table';

function makeTable(rows: string[][], paginate = 0): string {
  const pAttr = paginate ? `data-bj-table-paginate="${paginate}"` : '';
  let html = `<div data-bj-table ${pAttr}>
    <div class="bj-table__header">
      <input type="text" class="bj-table__search" data-bj-table-filter placeholder="Rechercher…" />
      <span class="bj-table__count"></span>
    </div>
    <table class="bj-table bj-table--sortable">
      <thead><tr>
        <th data-bj-table-sort>Nom</th>
        <th data-bj-table-sort>Âge</th>
      </tr></thead>
      <tbody>`;
  for (const [name, age] of rows) {
    html += `<tr><td>${name}</td><td>${age}</td></tr>`;
  }
  html += `</tbody></table>
    <div class="bj-table__footer"></div>
  </div>`;
  return html;
}

describe('table', () => {
  const DATA: string[][] = [
    ['Alice', '32'],
    ['Bob', '25'],
    ['Charlie', '41'],
    ['Diana', '28'],
    ['Eve', '35'],
  ];

  beforeEach(() => {
    document.body.innerHTML = makeTable(DATA);
    initTable();
  });

  it('should show all rows initially', () => {
    const visible = document.querySelectorAll('tbody tr:not([style*="display: none"])');
    expect(visible.length).toBe(5);
  });

  it('should sort ascending on first click', () => {
    const th = document.querySelector<HTMLTableCellElement>('th[data-bj-table-sort]')!;
    th.click();
    expect(th.getAttribute('aria-sort')).toBe('ascending');
    const first = document.querySelector('tbody tr td')!.textContent;
    expect(first).toBe('Alice');
  });

  it('should sort descending on second click', () => {
    const th = document.querySelector<HTMLTableCellElement>('th[data-bj-table-sort]')!;
    th.click();
    th.click();
    expect(th.getAttribute('aria-sort')).toBe('descending');
    const first = document.querySelector('tbody tr:not([style*="display: none"]) td')!.textContent;
    expect(first).toBe('Eve');
  });

  it('should filter rows by text', () => {
    vi.useFakeTimers();
    const input = document.querySelector<HTMLInputElement>('[data-bj-table-filter]')!;
    input.value = 'ali';
    input.dispatchEvent(new Event('input'));
    vi.advanceTimersByTime(300);

    const visible = document.querySelectorAll('tbody tr:not([style*="display: none"])');
    expect(visible.length).toBe(1);
    expect(visible[0].textContent).toContain('Alice');
    vi.useRealTimers();
  });

  it('should update count element', () => {
    const count = document.querySelector('.bj-table__count')!;
    expect(count.textContent).toBe('5 résultats');
  });

  it('should dispatch bj:table:sort event', () => {
    const wrapper = document.querySelector<HTMLElement>('[data-bj-table]')!;
    const handler = vi.fn();
    wrapper.addEventListener('bj:table:sort', handler);

    const th = document.querySelector<HTMLTableCellElement>('th[data-bj-table-sort]')!;
    th.click();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail.direction).toBe('ascending');
  });
});

describe('table pagination', () => {
  beforeEach(() => {
    const rows = Array.from({ length: 15 }, (_, i) => [`Item ${i + 1}`, `${i + 20}`]);
    document.body.innerHTML = makeTable(rows, 5);
    initTable();
  });

  it('should show only first page rows', () => {
    const visible = document.querySelectorAll('tbody tr:not([style*="display: none"])');
    expect(visible.length).toBe(5);
  });

  it('should create pagination controls', () => {
    const pag = document.querySelector('.bj-pagination');
    expect(pag).toBeTruthy();
  });

  it('should navigate to next page on click', () => {
    const page2 = document.querySelector<HTMLAnchorElement>('[data-bj-table-page="2"]')!;
    page2.click();

    const visible = document.querySelectorAll('tbody tr:not([style*="display: none"])');
    expect(visible.length).toBe(5);
    expect(visible[0].textContent).toContain('Item 6');
  });
});
