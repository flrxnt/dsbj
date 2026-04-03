export function pressKey(target: HTMLElement | Document, key: string, opts: Partial<KeyboardEventInit> = {}) {
  target.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, ...opts }))
}

export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const selector = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  return Array.from(container.querySelectorAll<HTMLElement>(selector))
}
