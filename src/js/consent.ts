import { register, queryNew } from './core';

const STORAGE_KEY = 'bj-consent';

function getConsent(): unknown {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null'); }
  catch { return null; }
}

function setConsent(value: Record<string, unknown>): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); }
  catch { /* noop */ }
}

export function initConsent(): void {
  const banners = queryNew<HTMLElement>('[data-bj-consent-banner]');
  const banner = banners[0] ?? null;
  if (!banner) return;

  if (!getConsent()) {
    banner.setAttribute('data-bj-expanded', '');
  }

  banner.querySelector('[data-bj-consent-accept]')?.addEventListener('click', () => {
    setConsent({ all: true, ts: Date.now() });
    banner.removeAttribute('data-bj-expanded');
  });

  banner.querySelector('[data-bj-consent-refuse]')?.addEventListener('click', () => {
    setConsent({ all: false, ts: Date.now() });
    banner.removeAttribute('data-bj-expanded');
  });

  banner.querySelector('[data-bj-consent-customize]')?.addEventListener('click', () => {
    const managerId = banner.querySelector('[data-bj-consent-customize]')?.getAttribute('data-bj-modal-open');
    if (managerId) {
      document.getElementById(managerId)?.setAttribute('data-bj-expanded', '');
    }
  });
}

register('consent', initConsent);
