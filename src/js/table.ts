import { register } from './core';

type SortDir = 'ascending' | 'descending' | 'none';

function nextDir(current: SortDir): SortDir {
  if (current === 'none') return 'ascending';
  if (current === 'ascending') return 'descending';
  return 'none';
}

function naturalCompare(a: string, b: string): number {
  return a.localeCompare(b, 'fr', { numeric: true, sensitivity: 'base' });
}

function initSortableTable(wrapper: HTMLElement): void {
  const table = wrapper.querySelector<HTMLTableElement>('.bj-table');
  if (!table) return;

  const tbody = table.querySelector('tbody');
  if (!tbody) return;

  const filterInput = wrapper.querySelector<HTMLInputElement>('[data-bj-table-filter]');
  const countEl = wrapper.querySelector<HTMLElement>('.bj-table__count');
  const paginateAttr = wrapper.getAttribute('data-bj-table-paginate');
  const pageSize = paginateAttr ? parseInt(paginateAttr, 10) : 0;
  let currentPage = 1;
  let allRows = Array.from(tbody.querySelectorAll('tr'));
  let filteredRows = [...allRows];

  function getVisibleRows(): HTMLTableRowElement[] {
    return filteredRows;
  }

  function applyFilter(query: string): void {
    const q = query.toLowerCase().trim();
    filteredRows = q
      ? allRows.filter((row) => row.textContent?.toLowerCase().includes(q))
      : [...allRows];
    currentPage = 1;
    renderPage();
    wrapper.dispatchEvent(new CustomEvent('bj:table:filter', {
      detail: { query: q, count: filteredRows.length },
      bubbles: true,
    }));
  }

  function renderPage(): void {
    const rows = getVisibleRows();

    // Reorder DOM to match sorted/filtered order
    rows.forEach((r) => tbody.appendChild(r));

    allRows.forEach((r) => { r.style.display = 'none'; });

    if (pageSize > 0) {
      const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
      if (currentPage > totalPages) currentPage = totalPages;
      const start = (currentPage - 1) * pageSize;
      const pageRows = rows.slice(start, start + pageSize);
      pageRows.forEach((r) => { r.style.display = ''; });
      renderPagination(totalPages);
    } else {
      rows.forEach((r) => { r.style.display = ''; });
    }

    if (countEl) {
      countEl.textContent = `${rows.length} résultat${rows.length !== 1 ? 's' : ''}`;
    }
  }

  function renderPagination(totalPages: number): void {
    const footer = wrapper.querySelector('.bj-table__footer');
    if (!footer) return;

    let pag = footer.querySelector('.bj-pagination');
    if (!pag) {
      pag = document.createElement('nav');
      pag.className = 'bj-pagination';
      pag.setAttribute('aria-label', 'Pagination du tableau');
      footer.appendChild(pag);
    }

    let html = '';

    html += `<a class="bj-pagination__nav ${currentPage <= 1 ? 'bj-pagination__nav--disabled' : ''}" href="#" data-bj-table-page="${currentPage - 1}" aria-label="Page précédente"><i class="ri-arrow-left-s-line" aria-hidden="true"></i><span class="bj-pagination__label">Précédent</span></a>`;

    for (let p = 1; p <= totalPages; p++) {
      if (totalPages > 7 && p > 2 && p < totalPages - 1 && Math.abs(p - currentPage) > 1) {
        if (p === 3 || p === totalPages - 2) html += '<span class="bj-pagination__ellipsis">…</span>';
        continue;
      }
      html += `<a class="bj-pagination__link ${p === currentPage ? 'bj-pagination__link--active' : ''}" href="#" data-bj-table-page="${p}" ${p === currentPage ? 'aria-current="page"' : ''}>${p}</a>`;
    }

    html += `<a class="bj-pagination__nav ${currentPage >= totalPages ? 'bj-pagination__nav--disabled' : ''}" href="#" data-bj-table-page="${currentPage + 1}" aria-label="Page suivante"><span class="bj-pagination__label">Suivant</span><i class="ri-arrow-right-s-line" aria-hidden="true"></i></a>`;

    pag.innerHTML = html;

    pag.querySelectorAll<HTMLAnchorElement>('[data-bj-table-page]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = parseInt(link.getAttribute('data-bj-table-page')!, 10);
        if (page < 1 || page > totalPages || page === currentPage) return;
        currentPage = page;
        renderPage();
        wrapper.dispatchEvent(new CustomEvent('bj:table:page', {
          detail: { page: currentPage },
          bubbles: true,
        }));
      });
    });
  }

  // Sort
  table.querySelectorAll<HTMLTableCellElement>('th[data-bj-table-sort]').forEach((th) => {
    th.setAttribute('aria-sort', 'none');

    th.addEventListener('click', () => {
      const colIndex = th.cellIndex;
      const current = (th.getAttribute('aria-sort') || 'none') as SortDir;
      const dir = nextDir(current);

      table.querySelectorAll('th[data-bj-table-sort]').forEach((h) => {
        h.setAttribute('aria-sort', 'none');
      });

      th.setAttribute('aria-sort', dir);

      if (dir === 'none') {
        filteredRows = filterInput?.value
          ? allRows.filter((r) => r.textContent?.toLowerCase().includes(filterInput.value.toLowerCase().trim()))
          : [...allRows];
      } else {
        filteredRows.sort((a, b) => {
          const aVal = a.cells[colIndex]?.textContent?.trim() || '';
          const bVal = b.cells[colIndex]?.textContent?.trim() || '';
          const cmp = naturalCompare(aVal, bVal);
          return dir === 'ascending' ? cmp : -cmp;
        });
      }

      currentPage = 1;
      renderPage();
      wrapper.dispatchEvent(new CustomEvent('bj:table:sort', {
        detail: { column: colIndex, direction: dir },
        bubbles: true,
      }));
    });
  });

  // Filter
  if (filterInput) {
    let debounce: ReturnType<typeof setTimeout>;
    filterInput.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => applyFilter(filterInput.value), 200);
    });
  }

  renderPage();
}

export function initTable(): void {
  document.querySelectorAll<HTMLElement>('[data-bj-table]').forEach(initSortableTable);
}

register('table', initTable);
