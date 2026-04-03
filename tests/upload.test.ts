import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('upload', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="bj-upload-group">
        <label class="bj-label" for="upload-1">Upload file</label>
        <span id="upload-1-hint" class="bj-hint">Max 5MB</span>
        <div class="bj-upload" role="button" tabindex="0"
          aria-label="Glissez un fichier ou cliquez pour parcourir"
          aria-describedby="upload-1-hint">
          <span class="bj-upload__text">Glissez un fichier ou cliquez pour parcourir</span>
          <input id="upload-1" type="file" accept=".pdf,.jpg" />
        </div>
        <div class="bj-upload__file">
          <span>file.pdf</span>
          <button type="button" class="bj-upload__file-remove" aria-label="Retirer file.pdf">X</button>
        </div>
      </div>
      <div class="bj-upload-group bj-upload-group--error">
        <div class="bj-upload" role="button" tabindex="0" aria-label="Drop file">
          <input type="file" />
        </div>
        <p id="upload-err" class="bj-message bj-message--error" role="alert">File too large</p>
      </div>
    `;
  });

  it('should have button role on drop zone', () => {
    const zones = document.querySelectorAll('.bj-upload[role="button"]');
    expect(zones.length).toBe(2);
  });

  it('should be keyboard focusable', () => {
    const zone = document.querySelector('.bj-upload');
    expect(zone!.getAttribute('tabindex')).toBe('0');
  });

  it('should have aria-label on drop zone', () => {
    const zone = document.querySelector('.bj-upload');
    expect(zone!.getAttribute('aria-label')).toBeTruthy();
  });

  it('should link hint via aria-describedby', () => {
    const zone = document.querySelector('.bj-upload[aria-describedby]');
    expect(zone!.getAttribute('aria-describedby')).toContain('upload-1-hint');
  });

  it('should have file input with accept', () => {
    const input = document.getElementById('upload-1') as HTMLInputElement;
    expect(input.type).toBe('file');
    expect(input.getAttribute('accept')).toBe('.pdf,.jpg');
  });

  it('should have remove button with descriptive aria-label', () => {
    const btn = document.querySelector('.bj-upload__file-remove');
    expect(btn!.getAttribute('aria-label')).toContain('file.pdf');
  });

  it('should show error with role alert', () => {
    const msg = document.getElementById('upload-err');
    expect(msg!.getAttribute('role')).toBe('alert');
  });

  it('should have error group class', () => {
    expect(document.querySelector('.bj-upload-group--error')).toBeTruthy();
  });
});
