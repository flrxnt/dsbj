import { describe, it, expect, beforeEach } from 'vitest';
import { register, boot, focusTrap } from '../src/js/core';

describe('core', () => {
  describe('register / boot', () => {
    it('should execute registered handlers on boot', () => {
      let called = false;
      register('test-core', () => { called = true; });
      boot();
      expect(called).toBe(true);
    });
  });

  describe('focusTrap', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="trap">
          <button id="first">First</button>
          <input id="middle" />
          <button id="last">Last</button>
        </div>
      `;
    });

    it('should focus the first focusable element on trap', () => {
      const el = document.getElementById('trap')!;
      focusTrap.trap(el);
      expect(document.activeElement?.id).toBe('first');
    });

    it('should release without error', () => {
      const el = document.getElementById('trap')!;
      focusTrap.trap(el);
      expect(() => focusTrap.release(el)).not.toThrow();
    });
  });
});
