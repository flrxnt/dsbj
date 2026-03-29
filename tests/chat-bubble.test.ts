import { describe, it, expect, beforeEach } from 'vitest';

function makeBubble(opts: { variant?: string; sender?: string; time?: string; status?: string } = {}): string {
  const variant = opts.variant || 'received';
  const errorCls = opts.status === 'error' ? ' bj-chat-bubble--error' : '';
  const senderHtml = opts.sender ? `<span class="bj-chat-bubble__sender">${opts.sender}</span>` : '';
  const timeHtml = opts.time ? `<span class="bj-chat-bubble__time">${opts.time}</span>` : '';
  const statusHtml = opts.status ? `<span class="bj-chat-bubble__status bj-chat-bubble__status--${opts.status}"><i class="ri-check-line" aria-hidden="true"></i></span>` : '';
  const metaHtml = (opts.time || opts.status) ? `<div class="bj-chat-bubble__meta">${timeHtml}${statusHtml}</div>` : '';

  return `<div class="bj-chat-bubble bj-chat-bubble--${variant}${errorCls}" role="listitem">
    <div class="bj-chat-bubble__content">
      ${senderHtml}
      <div class="bj-chat-bubble__text">Test message</div>
      ${metaHtml}
    </div>
  </div>`;
}

describe('chat-bubble: structure', () => {
  beforeEach(() => {
    document.body.innerHTML = makeBubble({ variant: 'received', sender: 'Amina', time: '10:32' });
  });

  it('should render the bubble container', () => {
    expect(document.querySelector('.bj-chat-bubble')).toBeTruthy();
  });

  it('should have the received variant class', () => {
    expect(document.querySelector('.bj-chat-bubble--received')).toBeTruthy();
  });

  it('should have role="listitem"', () => {
    const el = document.querySelector('.bj-chat-bubble');
    expect(el?.getAttribute('role')).toBe('listitem');
  });

  it('should render the sender', () => {
    expect(document.querySelector('.bj-chat-bubble__sender')?.textContent).toBe('Amina');
  });

  it('should render the text', () => {
    expect(document.querySelector('.bj-chat-bubble__text')?.textContent).toBe('Test message');
  });

  it('should render the time', () => {
    expect(document.querySelector('.bj-chat-bubble__time')?.textContent).toBe('10:32');
  });
});

describe('chat-bubble: sent variant', () => {
  beforeEach(() => {
    document.body.innerHTML = makeBubble({ variant: 'sent', time: '10:33', status: 'read' });
  });

  it('should have the sent class', () => {
    expect(document.querySelector('.bj-chat-bubble--sent')).toBeTruthy();
  });

  it('should render the status', () => {
    expect(document.querySelector('.bj-chat-bubble__status--read')).toBeTruthy();
  });
});

describe('chat-bubble: system variant', () => {
  beforeEach(() => {
    document.body.innerHTML = makeBubble({ variant: 'system' });
  });

  it('should have the system class', () => {
    expect(document.querySelector('.bj-chat-bubble--system')).toBeTruthy();
  });
});

describe('chat-bubble: error state', () => {
  beforeEach(() => {
    document.body.innerHTML = makeBubble({ variant: 'sent', status: 'error' });
  });

  it('should have the error class', () => {
    expect(document.querySelector('.bj-chat-bubble--error')).toBeTruthy();
  });
});
