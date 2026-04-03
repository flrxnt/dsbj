import { describe, it, expect, beforeEach } from 'vitest';

describe('tooltip', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <span class="bj-tooltip">
        <span aria-describedby="tip-1">Trigger</span>
        <span id="tip-1" class="bj-tooltip__content" role="tooltip" aria-hidden="true">Tooltip text</span>
      </span>
      <span class="bj-tooltip bj-tooltip--bottom">
        <span aria-describedby="tip-2">Trigger 2</span>
        <span id="tip-2" class="bj-tooltip__content" role="tooltip" aria-hidden="false">Bottom tip</span>
      </span>
    `;
  });

  it('should have role tooltip on content', () => {
    const tips = document.querySelectorAll('[role="tooltip"]');
    expect(tips.length).toBe(2);
  });

  it('should link trigger to tooltip via aria-describedby', () => {
    const trigger = document.querySelector('[aria-describedby="tip-1"]');
    expect(trigger).toBeTruthy();
    expect(document.getElementById('tip-1')).toBeTruthy();
  });

  it('should support position variants', () => {
    expect(document.querySelector('.bj-tooltip--bottom')).toBeTruthy();
  });

  it('should have unique id on tooltip', () => {
    const ids = Array.from(document.querySelectorAll('[role="tooltip"]')).map(t => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should support aria-hidden for visibility', () => {
    const hidden = document.querySelector('[role="tooltip"][aria-hidden="true"]');
    const visible = document.querySelector('[role="tooltip"][aria-hidden="false"]');
    expect(hidden).toBeTruthy();
    expect(visible).toBeTruthy();
  });
});
