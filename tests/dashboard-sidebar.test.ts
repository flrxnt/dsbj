import { describe, it, expect, beforeEach } from 'vitest';

function makeSidebar(opts: { compact?: boolean } = {}): string {
  const compactCls = opts.compact ? ' bj-dashboard-sidebar--compact' : '';
  return `<aside class="bj-dashboard-sidebar${compactCls}" aria-label="Navigation du tableau de bord">
    <a href="/" class="bj-dashboard-sidebar__brand">
      <img class="bj-dashboard-sidebar__brand-img" src="/logo.svg" alt="">
      <span class="bj-dashboard-sidebar__brand-text">Mon App</span>
    </a>
    <nav class="bj-dashboard-sidebar__nav">
      <div class="bj-dashboard-sidebar__section">
        <p class="bj-dashboard-sidebar__section-title">Général</p>
        <ul class="bj-dashboard-sidebar__list">
          <li class="bj-dashboard-sidebar__item">
            <a href="#" class="bj-dashboard-sidebar__link bj-dashboard-sidebar__link--active" aria-current="page">
              <i class="ri-dashboard-line bj-dashboard-sidebar__link-icon" aria-hidden="true"></i>
              <span class="bj-dashboard-sidebar__link-label">Tableau de bord</span>
            </a>
          </li>
          <li class="bj-dashboard-sidebar__item">
            <button class="bj-dashboard-sidebar__btn" aria-expanded="false" aria-controls="sub-1">
              <i class="ri-settings-line bj-dashboard-sidebar__link-icon" aria-hidden="true"></i>
              <span class="bj-dashboard-sidebar__link-label">Paramètres</span>
            </button>
            <ul id="sub-1" class="bj-dashboard-sidebar__sublist">
              <li class="bj-dashboard-sidebar__item">
                <a href="#" class="bj-dashboard-sidebar__link">
                  <span class="bj-dashboard-sidebar__link-label">Profil</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <div class="bj-dashboard-sidebar__footer">Footer</div>
  </aside>`;
}

describe('dashboard-sidebar: structure', () => {
  beforeEach(() => {
    document.body.innerHTML = makeSidebar();
  });

  it('should render the sidebar container', () => {
    expect(document.querySelector('.bj-dashboard-sidebar')).toBeTruthy();
  });

  it('should have aria-label on the aside', () => {
    const aside = document.querySelector('.bj-dashboard-sidebar')!;
    expect(aside.getAttribute('aria-label')).toBe('Navigation du tableau de bord');
  });

  it('should render the brand section', () => {
    expect(document.querySelector('.bj-dashboard-sidebar__brand')).toBeTruthy();
    expect(document.querySelector('.bj-dashboard-sidebar__brand-img')).toBeTruthy();
    expect(document.querySelector('.bj-dashboard-sidebar__brand-text')).toBeTruthy();
  });

  it('should render navigation sections', () => {
    expect(document.querySelector('.bj-dashboard-sidebar__nav')).toBeTruthy();
    expect(document.querySelector('.bj-dashboard-sidebar__section')).toBeTruthy();
    expect(document.querySelector('.bj-dashboard-sidebar__section-title')).toBeTruthy();
  });

  it('should render links with icons and labels', () => {
    const link = document.querySelector('.bj-dashboard-sidebar__link')!;
    expect(link).toBeTruthy();
    expect(link.querySelector('.bj-dashboard-sidebar__link-icon')).toBeTruthy();
    expect(link.querySelector('.bj-dashboard-sidebar__link-label')).toBeTruthy();
  });

  it('should mark active link with aria-current', () => {
    const active = document.querySelector('.bj-dashboard-sidebar__link--active')!;
    expect(active.getAttribute('aria-current')).toBe('page');
  });

  it('should render collapsible button with aria-expanded', () => {
    const btn = document.querySelector('.bj-dashboard-sidebar__btn')!;
    expect(btn.getAttribute('aria-expanded')).toBe('false');
    expect(btn.getAttribute('aria-controls')).toBe('sub-1');
  });

  it('should render sublist', () => {
    expect(document.querySelector('.bj-dashboard-sidebar__sublist')).toBeTruthy();
  });

  it('should render footer', () => {
    expect(document.querySelector('.bj-dashboard-sidebar__footer')).toBeTruthy();
  });
});

describe('dashboard-sidebar: compact mode', () => {
  beforeEach(() => {
    document.body.innerHTML = makeSidebar({ compact: true });
  });

  it('should have the compact modifier class', () => {
    const el = document.querySelector('.bj-dashboard-sidebar')!;
    expect(el.classList.contains('bj-dashboard-sidebar--compact')).toBe(true);
  });
});
