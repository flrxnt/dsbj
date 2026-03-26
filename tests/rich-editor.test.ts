import { describe, it, expect, beforeEach } from 'vitest';

function makeFullEditor(opts: { disabled?: boolean; placeholder?: string } = {}): string {
  const disabledCls = opts.disabled ? ' bj-rich-editor--disabled' : '';
  const editable = opts.disabled ? 'false' : 'true';
  const placeholder = opts.placeholder || 'Saisissez votre texte...';

  return `<div class="bj-rich-editor${disabledCls}">
    <div class="bj-rich-editor__toolbar" role="toolbar" aria-label="Éditeur de texte riche">
      <div class="bj-rich-editor__toolbar-group">
        <select class="bj-rich-editor__toolbar-select" aria-label="Style de bloc">
          <option value="p">Paragraphe</option>
          <option value="h1">Titre 1</option>
          <option value="h2">Titre 2</option>
          <option value="h3">Titre 3</option>
        </select>
      </div>
      <div class="bj-rich-editor__toolbar-separator" aria-hidden="true"></div>
      <div class="bj-rich-editor__toolbar-group">
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Gras"><i class="ri-bold" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Italique"><i class="ri-italic" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Souligné"><i class="ri-underline" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Barré"><i class="ri-strikethrough" aria-hidden="true"></i></button>
      </div>
      <div class="bj-rich-editor__toolbar-separator" aria-hidden="true"></div>
      <div class="bj-rich-editor__toolbar-group">
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Liste à puces"><i class="ri-list-unordered" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Liste numérotée"><i class="ri-list-ordered" aria-hidden="true"></i></button>
      </div>
      <div class="bj-rich-editor__toolbar-group">
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Augmenter le retrait"><i class="ri-indent-increase" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Réduire le retrait"><i class="ri-indent-decrease" aria-hidden="true"></i></button>
      </div>
      <div class="bj-rich-editor__toolbar-separator" aria-hidden="true"></div>
      <div class="bj-rich-editor__toolbar-group">
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Aligner à gauche"><i class="ri-align-left" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Centrer"><i class="ri-align-center" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Aligner à droite"><i class="ri-align-right" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Justifier"><i class="ri-align-justify" aria-hidden="true"></i></button>
      </div>
      <div class="bj-rich-editor__toolbar-separator" aria-hidden="true"></div>
      <div class="bj-rich-editor__toolbar-group">
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Insérer un lien"><i class="ri-link" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Supprimer le lien"><i class="ri-link-unlink" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Insérer une image"><i class="ri-image-line" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Insérer une vidéo"><i class="ri-video-line" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Insérer un tableau"><i class="ri-table-line" aria-hidden="true"></i></button>
      </div>
      <div class="bj-rich-editor__toolbar-separator" aria-hidden="true"></div>
      <div class="bj-rich-editor__toolbar-group">
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Citation"><i class="ri-double-quotes-l" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Bloc de code"><i class="ri-code-line" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Ligne horizontale"><i class="ri-separator" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Effacer le formatage"><i class="ri-format-clear" aria-hidden="true"></i></button>
      </div>
      <div class="bj-rich-editor__toolbar-separator" aria-hidden="true"></div>
      <div class="bj-rich-editor__toolbar-group">
        <div class="bj-rich-editor__color-picker">
          <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Couleur du texte"><i class="ri-font-color" aria-hidden="true"></i></button>
          <input type="color" value="#000000" aria-label="Choisir la couleur du texte">
        </div>
        <div class="bj-rich-editor__color-picker">
          <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Couleur de fond"><i class="ri-paint-fill" aria-hidden="true"></i></button>
          <input type="color" value="#ffff00" aria-label="Choisir la couleur de fond">
        </div>
      </div>
      <div class="bj-rich-editor__toolbar-separator" aria-hidden="true"></div>
      <div class="bj-rich-editor__toolbar-group">
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Annuler"><i class="ri-arrow-go-back-line" aria-hidden="true"></i></button>
        <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Rétablir"><i class="ri-arrow-go-forward-line" aria-hidden="true"></i></button>
      </div>
    </div>
    <div class="bj-rich-editor__content"
         contenteditable="${editable}"
         role="textbox"
         aria-multiline="true"
         aria-label="${placeholder}"
         data-placeholder="${placeholder}">
    </div>
  </div>`;
}

describe('rich-editor: structure', () => {
  beforeEach(() => {
    document.body.innerHTML = makeFullEditor();
  });

  it('should render the editor container', () => {
    expect(document.querySelector('.bj-rich-editor')).toBeTruthy();
  });

  it('should render the toolbar with role="toolbar"', () => {
    const toolbar = document.querySelector('.bj-rich-editor__toolbar');
    expect(toolbar).toBeTruthy();
    expect(toolbar!.getAttribute('role')).toBe('toolbar');
    expect(toolbar!.getAttribute('aria-label')).toBe('Éditeur de texte riche');
  });

  it('should render the content area as contenteditable', () => {
    const content = document.querySelector('.bj-rich-editor__content');
    expect(content).toBeTruthy();
    expect(content!.getAttribute('contenteditable')).toBe('true');
    expect(content!.getAttribute('role')).toBe('textbox');
    expect(content!.getAttribute('aria-multiline')).toBe('true');
  });

  it('should have a placeholder via data attribute', () => {
    const content = document.querySelector('.bj-rich-editor__content');
    expect(content!.getAttribute('data-placeholder')).toBe('Saisissez votre texte...');
  });
});

describe('rich-editor: full toolbar', () => {
  beforeEach(() => {
    document.body.innerHTML = makeFullEditor();
  });

  it('should render all toolbar buttons', () => {
    const buttons = document.querySelectorAll('.bj-rich-editor__toolbar-btn');
    expect(buttons.length).toBeGreaterThanOrEqual(22);
  });

  it('every toolbar button should have aria-label', () => {
    const buttons = document.querySelectorAll('.bj-rich-editor__toolbar-btn');
    buttons.forEach((btn) => {
      expect(btn.getAttribute('aria-label')).toBeTruthy();
    });
  });

  it('should render heading select with 4 options', () => {
    const select = document.querySelector('.bj-rich-editor__toolbar-select');
    expect(select).toBeTruthy();
    const options = select!.querySelectorAll('option');
    expect(options.length).toBe(4);
    expect(options[0].value).toBe('p');
    expect(options[1].value).toBe('h1');
    expect(options[2].value).toBe('h2');
    expect(options[3].value).toBe('h3');
  });

  it('should render toolbar separators', () => {
    const separators = document.querySelectorAll('.bj-rich-editor__toolbar-separator');
    expect(separators.length).toBeGreaterThanOrEqual(5);
    separators.forEach((sep) => {
      expect(sep.getAttribute('aria-hidden')).toBe('true');
    });
  });

  it('should render toolbar groups', () => {
    const groups = document.querySelectorAll('.bj-rich-editor__toolbar-group');
    expect(groups.length).toBeGreaterThanOrEqual(8);
  });

  const expectedButtons = [
    'Gras', 'Italique', 'Souligné', 'Barré',
    'Liste à puces', 'Liste numérotée',
    'Augmenter le retrait', 'Réduire le retrait',
    'Aligner à gauche', 'Centrer', 'Aligner à droite', 'Justifier',
    'Insérer un lien', 'Supprimer le lien', 'Insérer une image', 'Insérer une vidéo', 'Insérer un tableau',
    'Citation', 'Bloc de code', 'Ligne horizontale', 'Effacer le formatage',
    'Couleur du texte', 'Couleur de fond',
    'Annuler', 'Rétablir',
  ];

  expectedButtons.forEach((label) => {
    it(`should have a "${label}" button`, () => {
      const btn = document.querySelector(`[aria-label="${label}"]`);
      expect(btn).toBeTruthy();
    });
  });
});

describe('rich-editor: color pickers', () => {
  beforeEach(() => {
    document.body.innerHTML = makeFullEditor();
  });

  it('should render 2 color picker containers', () => {
    const pickers = document.querySelectorAll('.bj-rich-editor__color-picker');
    expect(pickers.length).toBe(2);
  });

  it('should render color inputs inside pickers', () => {
    const inputs = document.querySelectorAll('.bj-rich-editor__color-picker input[type="color"]');
    expect(inputs.length).toBe(2);
  });

  it('text color input has default #000000', () => {
    const input = document.querySelector('[aria-label="Choisir la couleur du texte"]') as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.value).toBe('#000000');
  });

  it('bg color input has default #ffff00', () => {
    const input = document.querySelector('[aria-label="Choisir la couleur de fond"]') as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.value).toBe('#ffff00');
  });
});

describe('rich-editor: active state', () => {
  it('should apply active class to a button', () => {
    document.body.innerHTML = makeFullEditor();
    const btn = document.querySelector('.bj-rich-editor__toolbar-btn')!;
    btn.classList.add('bj-rich-editor__toolbar-btn--active');
    expect(btn.classList.contains('bj-rich-editor__toolbar-btn--active')).toBe(true);
  });
});

describe('rich-editor: disabled state', () => {
  beforeEach(() => {
    document.body.innerHTML = makeFullEditor({ disabled: true });
  });

  it('should have the disabled class', () => {
    const editor = document.querySelector('.bj-rich-editor');
    expect(editor!.classList.contains('bj-rich-editor--disabled')).toBe(true);
  });

  it('should have contenteditable=false when disabled', () => {
    const content = document.querySelector('.bj-rich-editor__content');
    expect(content!.getAttribute('contenteditable')).toBe('false');
  });
});

describe('rich-editor: custom placeholder', () => {
  it('should use a custom placeholder', () => {
    document.body.innerHTML = makeFullEditor({ placeholder: 'Écrivez ici...' });
    const content = document.querySelector('.bj-rich-editor__content');
    expect(content!.getAttribute('data-placeholder')).toBe('Écrivez ici...');
    expect(content!.getAttribute('aria-label')).toBe('Écrivez ici...');
  });
});
