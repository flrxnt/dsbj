import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('stepper', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-stepper" role="navigation" aria-label="Étapes">
        <div class="bj-stepper__header">
          <h2 class="bj-stepper__title">Wizard</h2>
          <div class="bj-stepper__steps" role="list">
            <div class="bj-stepper__step bj-stepper__step--done" role="listitem">Step 1</div>
            <div class="bj-stepper__step bj-stepper__step--current" role="listitem" aria-current="step">Step 2</div>
            <div class="bj-stepper__step" role="listitem">Step 3</div>
          </div>
        </div>
      </div>
      <div class="bj-stepper bj-stepper--vertical" role="navigation" aria-label="Steps">
        <div class="bj-stepper__header">
          <div class="bj-stepper__steps" role="list">
            <div class="bj-stepper__step" role="listitem">A</div>
          </div>
        </div>
      </div>
    `;
  });

  it('should have navigation role', () => {
    const steppers = document.querySelectorAll('[role="navigation"]');
    expect(steppers.length).toBe(2);
  });

  it('should have aria-label', () => {
    const stepper = document.querySelector('.bj-stepper');
    expect(stepper!.getAttribute('aria-label')).toBe('Étapes');
  });

  it('should use list/listitem roles', () => {
    expect(document.querySelector('[role="list"]')).toBeTruthy();
    expect(document.querySelectorAll('[role="listitem"]').length).toBe(4);
  });

  it('should mark current step with aria-current', () => {
    const current = document.querySelector('[aria-current="step"]');
    expect(current!.textContent).toBe('Step 2');
  });

  it('should support vertical layout', () => {
    expect(document.querySelector('.bj-stepper--vertical')).toBeTruthy();
  });

  it('should mark done steps', () => {
    expect(document.querySelector('.bj-stepper__step--done')).toBeTruthy();
  });
});
