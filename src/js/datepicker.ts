import { register, queryNew } from './core';

const DAYS_FR = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'];
const MONTHS_FR = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

function formatDate(d: Date): string {
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}

function parseDate(str: string): Date | null {
  const m = str.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!m) return null;
  const d = new Date(+m[3], +m[2] - 1, +m[1]);
  if (isNaN(d.getTime())) return null;
  return d;
}

function sameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function buildCalendar(wrapper: HTMLElement): void {
  const input = wrapper.querySelector<HTMLInputElement>('.bj-datepicker__input')!;
  const trigger = wrapper.querySelector<HTMLButtonElement>('.bj-datepicker__trigger');
  if (!input) return;

  const minAttr = wrapper.getAttribute('data-bj-datepicker-min');
  const maxAttr = wrapper.getAttribute('data-bj-datepicker-max');
  const minDate = minAttr ? parseDate(minAttr) : null;
  const maxDate = maxAttr ? parseDate(maxAttr) : null;

  let selectedDate: Date | null = input.value ? parseDate(input.value) : null;
  let viewYear = selectedDate ? selectedDate.getFullYear() : new Date().getFullYear();
  let viewMonth = selectedDate ? selectedDate.getMonth() : new Date().getMonth();

  const calendar = document.createElement('div');
  calendar.className = 'bj-datepicker__calendar';
  calendar.setAttribute('role', 'dialog');
  calendar.setAttribute('aria-label', 'Calendrier');
  wrapper.appendChild(calendar);

  function isDisabled(d: Date): boolean {
    if (minDate && d < minDate) return true;
    if (maxDate && d > maxDate) return true;
    return false;
  }

  function render(): void {
    const today = new Date();
    const dim = daysInMonth(viewYear, viewMonth);
    const firstDow = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7; // Monday=0

    let html = `<div class="bj-datepicker__nav">
      <button type="button" class="bj-datepicker__nav-btn" data-bj-dp-prev aria-label="Mois précédent"><i class="ri-arrow-left-s-line" aria-hidden="true"></i></button>
      <span class="bj-datepicker__month-year">${MONTHS_FR[viewMonth]} ${viewYear}</span>
      <button type="button" class="bj-datepicker__nav-btn" data-bj-dp-next aria-label="Mois suivant"><i class="ri-arrow-right-s-line" aria-hidden="true"></i></button>
    </div>`;

    html += '<div class="bj-datepicker__weekdays">';
    for (const d of DAYS_FR) {
      html += `<span class="bj-datepicker__weekday">${d}</span>`;
    }
    html += '</div>';

    html += '<div class="bj-datepicker__grid" role="grid">';

    const prevDim = daysInMonth(viewYear, viewMonth - 1);
    for (let i = firstDow - 1; i >= 0; i--) {
      const day = prevDim - i;
      const d = new Date(viewYear, viewMonth - 1, day);
      html += `<button type="button" class="bj-datepicker__day bj-datepicker__day--outside" ${isDisabled(d) ? 'disabled' : ''} data-bj-dp-day="${d.toISOString()}" tabindex="-1">${day}</button>`;
    }

    for (let day = 1; day <= dim; day++) {
      const d = new Date(viewYear, viewMonth, day);
      const cls = ['bj-datepicker__day'];
      if (sameDay(d, today)) cls.push('bj-datepicker__day--today');
      if (selectedDate && sameDay(d, selectedDate)) cls.push('bj-datepicker__day--selected');
      html += `<button type="button" class="${cls.join(' ')}" ${isDisabled(d) ? 'disabled' : ''} data-bj-dp-day="${d.toISOString()}" tabindex="-1">${day}</button>`;
    }

    const totalCells = firstDow + dim;
    const remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let i = 1; i <= remaining; i++) {
      const d = new Date(viewYear, viewMonth + 1, i);
      html += `<button type="button" class="bj-datepicker__day bj-datepicker__day--outside" ${isDisabled(d) ? 'disabled' : ''} data-bj-dp-day="${d.toISOString()}" tabindex="-1">${i}</button>`;
    }

    html += '</div>';
    calendar.innerHTML = html;

    calendar.querySelector('[data-bj-dp-prev]')?.addEventListener('click', () => {
      viewMonth--;
      if (viewMonth < 0) { viewMonth = 11; viewYear--; }
      render();
    });

    calendar.querySelector('[data-bj-dp-next]')?.addEventListener('click', () => {
      viewMonth++;
      if (viewMonth > 11) { viewMonth = 0; viewYear++; }
      render();
    });

    calendar.querySelectorAll<HTMLButtonElement>('[data-bj-dp-day]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const iso = btn.getAttribute('data-bj-dp-day')!;
        selectedDate = new Date(iso);
        input.value = formatDate(selectedDate);
        close();
        wrapper.dispatchEvent(new CustomEvent('bj:datepicker', {
          detail: { date: selectedDate, formattedDate: input.value },
          bubbles: true,
        }));
      });
    });
  }

  function open(): void {
    if (input.value) {
      const parsed = parseDate(input.value);
      if (parsed) {
        selectedDate = parsed;
        viewYear = parsed.getFullYear();
        viewMonth = parsed.getMonth();
      }
    }
    calendar.setAttribute('data-bj-expanded', '');
    render();
  }

  function close(): void {
    calendar.removeAttribute('data-bj-expanded');
  }

  function isOpen(): boolean {
    return calendar.hasAttribute('data-bj-expanded');
  }

  trigger?.addEventListener('click', () => {
    if (isOpen()) close(); else open();
  });

  input.addEventListener('focus', () => {
    if (!isOpen()) open();
  });

  document.addEventListener('click', (e) => {
    if (isOpen() && !wrapper.contains(e.target as Node)) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) close();
  });
}

export function initDatepicker(): void {
  queryNew<HTMLElement>('[data-bj-datepicker]').forEach(buildCalendar);
}

register('datepicker', initDatepicker);
