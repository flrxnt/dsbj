import { describe, it, expect, beforeEach } from 'vitest';
import { initNavigation } from '../src/js/navigation';

describe('navigation', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul class="bj-nav__list">
        <li>
          <button data-bj-nav-btn aria-controls="sub1" aria-expanded="false">Menu 1</button>
          <div id="sub1" class="bj-nav__mega">Sub 1</div>
        </li>
        <li>
          <button data-bj-nav-btn aria-controls="sub2" aria-expanded="false">Menu 2</button>
          <div id="sub2" class="bj-nav__mega">Sub 2</div>
        </li>
      </ul>
    `;
    initNavigation();
  });

  it('should open submenu on click', () => {
    const btn = document.querySelector<HTMLButtonElement>('[aria-controls="sub1"]')!;
    btn.click();
    expect(btn.getAttribute('aria-expanded')).toBe('true');
    expect(document.getElementById('sub1')!.hasAttribute('data-bj-expanded')).toBe(true);
  });

  it('should close other submenus when opening a new one', () => {
    const btn1 = document.querySelector<HTMLButtonElement>('[aria-controls="sub1"]')!;
    const btn2 = document.querySelector<HTMLButtonElement>('[aria-controls="sub2"]')!;
    btn1.click();
    btn2.click();
    expect(btn1.getAttribute('aria-expanded')).toBe('false');
    expect(document.getElementById('sub1')!.hasAttribute('data-bj-expanded')).toBe(false);
  });
});
