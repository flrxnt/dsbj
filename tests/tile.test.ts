import { describe, it, expect, beforeEach } from 'vitest';

describe('tile', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <a class="bj-tile" href="/page">Vertical tile</a>
      <a class="bj-tile bj-tile--horizontal" href="/hor">Horizontal tile</a>
      <div class="bj-tile">Div tile</div>
    `;
  });

  it('should render as anchor by default', () => {
    const links = document.querySelectorAll('a.bj-tile');
    expect(links.length).toBe(2);
  });

  it('should support horizontal variant', () => {
    expect(document.querySelector('.bj-tile--horizontal')).toBeTruthy();
  });

  it('should support div tag', () => {
    const div = document.querySelector('div.bj-tile');
    expect(div).toBeTruthy();
  });
});
