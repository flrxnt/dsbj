import { describe, it, expect, beforeEach } from 'vitest';

describe('avatar', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <span class="bj-avatar" role="img" aria-label="John Doe">
        <img class="bj-avatar__img" src="photo.jpg" alt="John Doe" />
      </span>
      <span class="bj-avatar bj-avatar--lg" role="img" aria-label="AB">
        <span class="bj-avatar__initials" aria-hidden="true">AB</span>
        <span class="bj-avatar__status bj-avatar__status--online" role="presentation">
          <span class="bj-sr-only">En ligne</span>
        </span>
      </span>
      <span class="bj-avatar bj-avatar--sm bj-avatar--square" role="img">
        <i class="bj-avatar__icon ri-user-line" aria-hidden="true"></i>
      </span>
    `;
  });

  it('should have role img', () => {
    const avatars = document.querySelectorAll('[role="img"]');
    expect(avatars.length).toBe(3);
  });

  it('should have aria-label for accessible name', () => {
    const avatar = document.querySelector('.bj-avatar');
    expect(avatar!.getAttribute('aria-label')).toBe('John Doe');
  });

  it('should support size variants', () => {
    expect(document.querySelector('.bj-avatar--lg')).toBeTruthy();
    expect(document.querySelector('.bj-avatar--sm')).toBeTruthy();
  });

  it('should support square variant', () => {
    expect(document.querySelector('.bj-avatar--square')).toBeTruthy();
  });

  it('should hide initials from screen readers', () => {
    const initials = document.querySelector('.bj-avatar__initials');
    expect(initials!.getAttribute('aria-hidden')).toBe('true');
  });

  it('should provide accessible status label', () => {
    const srOnly = document.querySelector('.bj-avatar__status .bj-sr-only');
    expect(srOnly!.textContent).toBe('En ligne');
  });

  it('should hide icon from screen readers', () => {
    const icon = document.querySelector('.bj-avatar__icon');
    expect(icon!.getAttribute('aria-hidden')).toBe('true');
  });
});
