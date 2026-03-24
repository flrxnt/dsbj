import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initConsent } from '../src/js/consent';

const store: Record<string, string> = {};

const localStorageMock = {
  getItem: vi.fn((key: string) => store[key] ?? null),
  setItem: vi.fn((key: string, value: string) => { store[key] = value; }),
  removeItem: vi.fn((key: string) => { delete store[key]; }),
};

Object.defineProperty(globalThis, 'localStorage', { value: localStorageMock, writable: true });

describe('consent', () => {
  beforeEach(() => {
    for (const k of Object.keys(store)) delete store[k];
    vi.clearAllMocks();
    document.body.innerHTML = `
      <div data-bj-consent-banner class="bj-consent-banner">
        <button data-bj-consent-accept>Accepter</button>
        <button data-bj-consent-refuse>Refuser</button>
      </div>
    `;
    initConsent();
  });

  it('should show banner if no consent stored', () => {
    expect(document.querySelector('[data-bj-consent-banner]')!.hasAttribute('data-bj-expanded')).toBe(true);
  });

  it('should hide banner and store consent on accept', () => {
    document.querySelector<HTMLButtonElement>('[data-bj-consent-accept]')!.click();
    expect(document.querySelector('[data-bj-consent-banner]')!.hasAttribute('data-bj-expanded')).toBe(false);
    const stored = JSON.parse(store['bj-consent']);
    expect(stored.all).toBe(true);
  });

  it('should hide banner and store refusal on refuse', () => {
    document.querySelector<HTMLButtonElement>('[data-bj-consent-refuse]')!.click();
    expect(document.querySelector('[data-bj-consent-banner]')!.hasAttribute('data-bj-expanded')).toBe(false);
    const stored = JSON.parse(store['bj-consent']);
    expect(stored.all).toBe(false);
  });
});
