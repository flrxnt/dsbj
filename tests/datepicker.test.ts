import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initDatepicker } from '../src/js/datepicker';

describe('datepicker', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-datepicker" data-bj-datepicker>
        <div class="bj-datepicker__field">
          <input type="text" class="bj-datepicker__input" placeholder="jj/mm/aaaa" />
          <button type="button" class="bj-datepicker__trigger" aria-label="Ouvrir le calendrier">
            <i class="ri-calendar-line" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    `;
    initDatepicker();
  });

  it('should create calendar element on init', () => {
    const calendar = document.querySelector('.bj-datepicker__calendar');
    expect(calendar).toBeTruthy();
  });

  it('should open calendar on trigger click', () => {
    const trigger = document.querySelector<HTMLButtonElement>('.bj-datepicker__trigger')!;
    trigger.click();
    const calendar = document.querySelector('.bj-datepicker__calendar');
    expect(calendar?.hasAttribute('data-bj-expanded')).toBe(true);
  });

  it('should close on Escape key', () => {
    const trigger = document.querySelector<HTMLButtonElement>('.bj-datepicker__trigger')!;
    trigger.click();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    const calendar = document.querySelector('.bj-datepicker__calendar');
    expect(calendar?.hasAttribute('data-bj-expanded')).toBe(false);
  });

  it('should dispatch bj:datepicker on day selection', () => {
    const wrapper = document.querySelector<HTMLElement>('[data-bj-datepicker]')!;
    const trigger = document.querySelector<HTMLButtonElement>('.bj-datepicker__trigger')!;
    trigger.click();

    const handler = vi.fn();
    wrapper.addEventListener('bj:datepicker', handler);

    const day = document.querySelector<HTMLButtonElement>('.bj-datepicker__day:not(.bj-datepicker__day--outside):not([disabled])');
    day?.click();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail.date).toBeInstanceOf(Date);
    expect(handler.mock.calls[0][0].detail.formattedDate).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
  });

  it('should set input value on day selection', () => {
    const trigger = document.querySelector<HTMLButtonElement>('.bj-datepicker__trigger')!;
    trigger.click();

    const day = document.querySelector<HTMLButtonElement>('.bj-datepicker__day:not(.bj-datepicker__day--outside):not([disabled])');
    day?.click();

    const input = document.querySelector<HTMLInputElement>('.bj-datepicker__input')!;
    expect(input.value).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
  });

  it('should navigate to next month', () => {
    const trigger = document.querySelector<HTMLButtonElement>('.bj-datepicker__trigger')!;
    trigger.click();

    const monthLabel = document.querySelector('.bj-datepicker__month-year')!;
    const initialText = monthLabel.textContent;

    const nextBtn = document.querySelector<HTMLButtonElement>('[data-bj-dp-next]')!;
    nextBtn.click();

    expect(document.querySelector('.bj-datepicker__month-year')!.textContent).not.toBe(initialText);
  });
});
