<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import DocsCode from "@docs/components/DocsCode.vue";
import DocsPreview from "@docs/components/DocsPreview.vue";
import DocsSection from "@docs/components/DocsSection.vue";
import DocsA11yNote from "@docs/components/DocsA11yNote.vue";
import DocsPropsTable from "@docs/components/DocsPropsTable.vue";

const { t } = useI18n({
  messages: {
    fr: {
      title: "Éditeur riche",
      desc: "L'éditeur riche WYSIWYG permet la saisie et la mise en forme de contenu textuel directement dans le navigateur. Il fournit une barre d'outils complète pour le formatage, l'insertion de médias, de tableaux, de blocs de code et plus encore.",
      "section-structure": "Structure complète",
      "section-toolbar": "Barre d'outils",
      "section-disabled": "État désactivé",
      "section-placeholder-height": "Placeholder et hauteur",
      "section-placeholder-height-body":
        "Le composant Vue fixe le texte fantôme via l’attribut <code>data-placeholder</code> sur <code>bj-rich-editor__content</code> (style CSS <code>::before</code>). La hauteur minimale éditable correspond à la prop <code>height</code>, rendue en <code>min-height</code> inline sur la même zone. Une barre d’outils réduite correspond à la prop <code>toolbar</code> (sous-ensemble de <code>TOOLBAR_ALL</code>).",
      "section-toolbar-subset": "Barre d’outils partielle",
      "section-toolbar-subset-body":
        "En HTML/CSS, reproduisez seulement les groupes nécessaires\u00a0; chaque bouton reste un <code>bj-rich-editor__toolbar-btn</code> dans un <code>bj-rich-editor__toolbar-group</code>.",
      "section-prefilled": "Contenu pré-rempli",
      "section-color-picker": "Sélecteur de couleur",
      "section-classes-css": "Classes CSS",
      "section-raccourcis": "Raccourcis clavier",
      "section-accessibilite": "Accessibilité",
      "a11y-note":
        'Le conteneur de la toolbar possède <code>role="toolbar"</code> et un <code>aria-label</code>. La zone éditable utilise <code>role="textbox"</code> et <code>aria-multiline="true"</code>. Chaque bouton de la toolbar expose un <code>aria-label</code> descriptif. L\'état désactivé utilise <code>pointer-events: none</code> et une opacité réduite. Le composant expose <code>aria-busy</code> si nécessaire lors de traitements asynchrones.',
      "cls-editor": "Conteneur principal de l'éditeur.",
      "cls-disabled":
        "État désactivé (opacité réduite, interactions bloquées).",
      "cls-toolbar": "Barre d'outils contenant les boutons de formatage.",
      "cls-toolbar-group": "Groupe de boutons dans la toolbar.",
      "cls-toolbar-btn": "Bouton individuel de la toolbar.",
      "cls-toolbar-btn-active": "État actif d'un bouton de toolbar.",
      "cls-toolbar-separator": "Séparateur vertical entre groupes.",
      "cls-toolbar-select": "Menu déroulant dans la toolbar (ex: titres).",
      "cls-content": "Zone de contenu éditable.",
      "cls-content-placeholder":
        "Attribut <code>data-placeholder</code> sur la zone éditable (texte vide).",
      "cls-content-height":
        "Hauteur\u00a0: <code>min-height</code> inline (équivalent prop <code>height</code> Vue).",
      "cls-color-picker": "Conteneur du sélecteur de couleur.",
      "icons-prerequisite":
        'Les icônes de la toolbar nécessitent <a href="https://remixicon.com/" class="bj-link" target="_blank" rel="noopener">Remix Icon</a>. Ajoutez-la via CDN (<code>&lt;link href="https://cdn.jsdelivr.net/npm/remixicon{\'@\'}4.9.1/fonts/remixicon.css" rel="stylesheet"&gt;</code>) ou via npm/bun (<code>import \'remixicon/fonts/remixicon.css\'</code>). Voir la page <a href="/premiers-pas/utilisation#icones" class="bj-link">Utilisation &gt; Icônes</a>.',
    },
    en: {
      title: "Rich Editor",
      desc: "The WYSIWYG rich editor allows rich-text input and formatting directly in the browser. It provides a full toolbar for formatting, media insertion, tables, code blocks, and more.",
      "section-structure": "Full structure",
      "section-toolbar": "Toolbar",
      "section-disabled": "Disabled state",
      "section-placeholder-height": "Placeholder and height",
      "section-placeholder-height-body":
        "The Vue component sets ghost text with the <code>data-placeholder</code> attribute on <code>bj-rich-editor__content</code> (styled via CSS <code>::before</code>). Minimum editable height comes from the <code>height</code> prop, applied as inline <code>min-height</code> on that node. A smaller toolbar mirrors the <code>toolbar</code> prop (subset of <code>TOOLBAR_ALL</code>).",
      "section-toolbar-subset": "Partial toolbar",
      "section-toolbar-subset-body":
        "In HTML/CSS, include only the groups you need; each control stays a <code>bj-rich-editor__toolbar-btn</code> inside a <code>bj-rich-editor__toolbar-group</code>.",
      "section-prefilled": "Pre-filled content",
      "section-color-picker": "Color picker",
      "section-classes-css": "CSS classes",
      "section-raccourcis": "Keyboard shortcuts",
      "section-accessibilite": "Accessibility",
      "a11y-note":
        'The toolbar container has <code>role="toolbar"</code> and an <code>aria-label</code>. The editable area uses <code>role="textbox"</code> and <code>aria-multiline="true"</code>. Each toolbar button exposes a descriptive <code>aria-label</code>. The disabled state uses <code>pointer-events: none</code> and reduced opacity.',
      "cls-editor": "Main editor container.",
      "cls-disabled": "Disabled state (reduced opacity, blocked interactions).",
      "cls-toolbar": "Toolbar containing formatting buttons.",
      "cls-toolbar-group": "Button group inside the toolbar.",
      "cls-toolbar-btn": "Individual toolbar button.",
      "cls-toolbar-btn-active": "Active state of a toolbar button.",
      "cls-toolbar-separator": "Vertical separator between groups.",
      "cls-toolbar-select": "Dropdown menu in the toolbar (e.g. headings).",
      "cls-content": "Editable content area.",
      "cls-content-placeholder":
        "<code>data-placeholder</code> on the editable region (empty state).",
      "cls-content-height":
        "Height: inline <code>min-height</code> (Vue <code>height</code> prop).",
      "cls-color-picker": "Color picker container.",
      "icons-prerequisite":
        'Toolbar icons require <a href="https://remixicon.com/" class="bj-link" target="_blank" rel="noopener">Remix Icon</a>. Add it via CDN (<code>&lt;link href="https://cdn.jsdelivr.net/npm/remixicon{\'@\'}4.9.1/fonts/remixicon.css" rel="stylesheet"&gt;</code>) or via npm/bun (<code>import \'remixicon/fonts/remixicon.css\'</code>). See <a href="/premiers-pas/utilisation#icones" class="bj-link">Usage &gt; Icons</a>.',
    },
  },
});

const codeStructure = `<div class="bj-rich-editor">
  <div class="bj-rich-editor__toolbar" role="toolbar" aria-label="Éditeur">
    <!-- Titres -->
    <div class="bj-rich-editor__toolbar-group">
      <select class="bj-rich-editor__toolbar-select" aria-label="Style de bloc">
        <option value="p">Paragraphe</option>
        <option value="h1">Titre 1</option>
        <option value="h2">Titre 2</option>
        <option value="h3">Titre 3</option>
      </select>
    </div>
    <div class="bj-rich-editor__toolbar-separator"></div>
    <!-- Formatage -->
    <div class="bj-rich-editor__toolbar-group">
      <button class="bj-rich-editor__toolbar-btn" aria-label="Gras"><i class="ri-bold"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Italique"><i class="ri-italic"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Souligné"><i class="ri-underline"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Barré"><i class="ri-strikethrough"></i></button>
    </div>
    <div class="bj-rich-editor__toolbar-separator"></div>
    <!-- Listes -->
    <div class="bj-rich-editor__toolbar-group">
      <button class="bj-rich-editor__toolbar-btn" aria-label="Liste à puces"><i class="ri-list-unordered"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Liste numérotée"><i class="ri-list-ordered"></i></button>
    </div>
    <!-- Retrait -->
    <div class="bj-rich-editor__toolbar-group">
      <button class="bj-rich-editor__toolbar-btn" aria-label="Retrait +"><i class="ri-indent-increase"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Retrait -"><i class="ri-indent-decrease"></i></button>
    </div>
    <div class="bj-rich-editor__toolbar-separator"></div>
    <!-- Alignement -->
    <div class="bj-rich-editor__toolbar-group">
      <button class="bj-rich-editor__toolbar-btn" aria-label="Gauche"><i class="ri-align-left"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Centre"><i class="ri-align-center"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Droite"><i class="ri-align-right"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Justifié"><i class="ri-align-justify"></i></button>
    </div>
    <div class="bj-rich-editor__toolbar-separator"></div>
    <!-- Insertion -->
    <div class="bj-rich-editor__toolbar-group">
      <button class="bj-rich-editor__toolbar-btn" aria-label="Lien"><i class="ri-link"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Supprimer le lien"><i class="ri-link-unlink"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Image"><i class="ri-image-line"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Vidéo"><i class="ri-video-line"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Tableau"><i class="ri-table-line"></i></button>
    </div>
    <div class="bj-rich-editor__toolbar-separator"></div>
    <!-- Blocs -->
    <div class="bj-rich-editor__toolbar-group">
      <button class="bj-rich-editor__toolbar-btn" aria-label="Citation"><i class="ri-double-quotes-l"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Code"><i class="ri-code-line"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Ligne"><i class="ri-separator"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Effacer"><i class="ri-format-clear"></i></button>
    </div>
    <div class="bj-rich-editor__toolbar-separator"></div>
    <!-- Couleurs -->
    <div class="bj-rich-editor__toolbar-group">
      <div class="bj-rich-editor__color-picker">
        <button class="bj-rich-editor__toolbar-btn" aria-label="Couleur du texte"><i class="ri-font-color"></i></button>
        <input type="color" value="#000000" aria-label="Couleur du texte">
      </div>
      <div class="bj-rich-editor__color-picker">
        <button class="bj-rich-editor__toolbar-btn" aria-label="Couleur de fond"><i class="ri-paint-fill"></i></button>
        <input type="color" value="#ffff00" aria-label="Couleur de fond">
      </div>
    </div>
    <div class="bj-rich-editor__toolbar-separator"></div>
    <!-- Historique -->
    <div class="bj-rich-editor__toolbar-group">
      <button class="bj-rich-editor__toolbar-btn" aria-label="Annuler"><i class="ri-arrow-go-back-line"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Rétablir"><i class="ri-arrow-go-forward-line"></i></button>
    </div>
  </div>
  <div class="bj-rich-editor__content"
       contenteditable="true"
       role="textbox"
       aria-multiline="true"
       data-placeholder="Saisissez votre texte...">
  </div>
</div>`;

const codeDisabled = `<div class="bj-rich-editor bj-rich-editor--disabled">
  <div class="bj-rich-editor__toolbar" role="toolbar" aria-label="Éditeur">
    <div class="bj-rich-editor__toolbar-group">
      <button class="bj-rich-editor__toolbar-btn" aria-label="Gras"><i class="ri-bold"></i></button>
      <button class="bj-rich-editor__toolbar-btn" aria-label="Italique"><i class="ri-italic"></i></button>
    </div>
  </div>
  <div class="bj-rich-editor__content"
       contenteditable="false"
       role="textbox"
       aria-multiline="true">
    Contenu en lecture seule
  </div>
</div>`;

const codePrefilled = `<div class="bj-rich-editor">
  <div class="bj-rich-editor__toolbar" role="toolbar" aria-label="Éditeur">
    ...
  </div>
  <div class="bj-rich-editor__content"
       contenteditable="true"
       role="textbox"
       aria-multiline="true">
    <h2>Titre d'exemple</h2>
    <p>Un paragraphe avec du texte <strong>gras</strong> et <em>italique</em>.</p>
    <ul>
      <li>Premier élément</li>
      <li>Deuxième élément</li>
    </ul>
    <blockquote>Une citation importante.</blockquote>
  </div>
</div>`;

const codeToolbar = `<!-- Bouton normal -->
<button class="bj-rich-editor__toolbar-btn" aria-label="Gras">
  <i class="ri-bold"></i>
</button>

<!-- Bouton actif -->
<button class="bj-rich-editor__toolbar-btn bj-rich-editor__toolbar-btn--active" aria-label="Gras">
  <i class="ri-bold"></i>
</button>

<!-- Sélecteur de couleur -->
<div class="bj-rich-editor__color-picker">
  <button class="bj-rich-editor__toolbar-btn" aria-label="Couleur du texte">
    <i class="ri-font-color"></i>
  </button>
  <input type="color" value="#000000" aria-label="Choisir la couleur">
</div>`;

const codePlaceholderHeight = `<div class="bj-rich-editor" style="max-width: 40rem">
  <div class="bj-rich-editor__toolbar" role="toolbar" aria-label="Éditeur">
    <div class="bj-rich-editor__toolbar-group">
      <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Gras"><i class="ri-bold" aria-hidden="true"></i></button>
      <button type="button" class="bj-rich-editor__toolbar-btn" aria-label="Italique"><i class="ri-italic" aria-hidden="true"></i></button>
    </div>
  </div>
  <div class="bj-rich-editor__content"
       contenteditable="true"
       role="textbox"
       aria-multiline="true"
       data-placeholder="Saisissez votre message…"
       style="min-height: 12rem">
  </div>
</div>`;

const codeRaccourcis = `Ctrl/Cmd + B → Gras
Ctrl/Cmd + I → Italique
Ctrl/Cmd + U → Souligné
Ctrl/Cmd + Z → Annuler
Ctrl/Cmd + Shift + Z → Rétablir
Ctrl/Cmd + Y → Rétablir`;

const propsRows = computed(() => [
  { name: "bj-rich-editor", description: t("cls-editor") },
  { name: "bj-rich-editor--disabled", description: t("cls-disabled") },
  { name: "bj-rich-editor__toolbar", description: t("cls-toolbar") },
  {
    name: "bj-rich-editor__toolbar-group",
    description: t("cls-toolbar-group"),
  },
  { name: "bj-rich-editor__toolbar-btn", description: t("cls-toolbar-btn") },
  {
    name: "bj-rich-editor__toolbar-btn--active",
    description: t("cls-toolbar-btn-active"),
  },
  {
    name: "bj-rich-editor__toolbar-separator",
    description: t("cls-toolbar-separator"),
  },
  {
    name: "bj-rich-editor__toolbar-select",
    description: t("cls-toolbar-select"),
  },
  { name: "bj-rich-editor__content", description: t("cls-content") },
  {
    name: "data-placeholder (content)",
    description: t("cls-content-placeholder"),
  },
  {
    name: "min-height / height",
    description: t("cls-content-height"),
  },
  { name: "bj-rich-editor__color-picker", description: t("cls-color-picker") },
]);
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t("title") }}
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    {{ t("desc") }}
  </p>

  <!-- <div class="bj-callout bj-callout--info" style="max-width: 44rem; margin-top: var(--bj-spacing-4v); margin-bottom: var(--bj-spacing-4v)">
    <i class="ri-information-line bj-icon bj-icon--md" aria-hidden="true"></i>
    <div>
      <span v-html="t('icons-prerequisite')" />
    </div>
  </div> -->

  <DocsSection id="structure-editor" :title="t('section-structure')">
    <DocsPreview>
      <div class="bj-rich-editor" style="max-width: 48rem">
        <div
          class="bj-rich-editor__toolbar"
          role="toolbar"
          aria-label="Éditeur"
        >
          <div class="bj-rich-editor__toolbar-group">
            <select
              class="bj-rich-editor__toolbar-select"
              aria-label="Style de bloc"
            >
              <option value="p">Paragraphe</option>
              <option value="h1">Titre 1</option>
              <option value="h2">Titre 2</option>
              <option value="h3">Titre 3</option>
            </select>
          </div>
          <div class="bj-rich-editor__toolbar-separator" aria-hidden="true" />
          <div class="bj-rich-editor__toolbar-group">
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Gras"
            >
              <i class="ri-bold" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Italique"
            >
              <i class="ri-italic" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Souligné"
            >
              <i class="ri-underline" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Barré"
            >
              <i class="ri-strikethrough" aria-hidden="true"></i>
            </button>
          </div>
          <div class="bj-rich-editor__toolbar-separator" aria-hidden="true" />
          <div class="bj-rich-editor__toolbar-group">
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Liste à puces"
            >
              <i class="ri-list-unordered" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Liste numérotée"
            >
              <i class="ri-list-ordered" aria-hidden="true"></i>
            </button>
          </div>
          <div class="bj-rich-editor__toolbar-group">
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Retrait +"
            >
              <i class="ri-indent-increase" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Retrait -"
            >
              <i class="ri-indent-decrease" aria-hidden="true"></i>
            </button>
          </div>
          <div class="bj-rich-editor__toolbar-separator" aria-hidden="true" />
          <div class="bj-rich-editor__toolbar-group">
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Gauche"
            >
              <i class="ri-align-left" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Centre"
            >
              <i class="ri-align-center" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Droite"
            >
              <i class="ri-align-right" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Justifié"
            >
              <i class="ri-align-justify" aria-hidden="true"></i>
            </button>
          </div>
          <div class="bj-rich-editor__toolbar-separator" aria-hidden="true" />
          <div class="bj-rich-editor__toolbar-group">
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Lien"
            >
              <i class="ri-link" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Supprimer le lien"
            >
              <i class="ri-link-unlink" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Image"
            >
              <i class="ri-image-line" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Vidéo"
            >
              <i class="ri-video-line" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Tableau"
            >
              <i class="ri-table-line" aria-hidden="true"></i>
            </button>
          </div>
          <div class="bj-rich-editor__toolbar-separator" aria-hidden="true" />
          <div class="bj-rich-editor__toolbar-group">
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Citation"
            >
              <i class="ri-double-quotes-l" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Code"
            >
              <i class="ri-code-line" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Ligne horizontale"
            >
              <i class="ri-separator" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Effacer le formatage"
            >
              <i class="ri-format-clear" aria-hidden="true"></i>
            </button>
          </div>
          <div class="bj-rich-editor__toolbar-separator" aria-hidden="true" />
          <div class="bj-rich-editor__toolbar-group">
            <div class="bj-rich-editor__color-picker">
              <button
                type="button"
                class="bj-rich-editor__toolbar-btn"
                aria-label="Couleur du texte"
              >
                <i class="ri-font-color" aria-hidden="true"></i>
              </button>
              <input
                type="color"
                value="#000000"
                aria-label="Couleur du texte"
              />
            </div>
            <div class="bj-rich-editor__color-picker">
              <button
                type="button"
                class="bj-rich-editor__toolbar-btn"
                aria-label="Couleur de fond"
              >
                <i class="ri-paint-fill" aria-hidden="true"></i>
              </button>
              <input
                type="color"
                value="#ffff00"
                aria-label="Couleur de fond"
              />
            </div>
          </div>
          <div class="bj-rich-editor__toolbar-separator" aria-hidden="true" />
          <div class="bj-rich-editor__toolbar-group">
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Annuler"
            >
              <i class="ri-arrow-go-back-line" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Rétablir"
            >
              <i class="ri-arrow-go-forward-line" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div
          class="bj-rich-editor__content"
          contenteditable="true"
          role="textbox"
          aria-multiline="true"
          data-placeholder="Saisissez votre texte..."
          style="min-height: 10rem"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codeStructure" />
  </DocsSection>

  <DocsSection
    id="placeholder-height-editor"
    :title="t('section-placeholder-height')"
  >
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-placeholder-height-body')"
    />
    <DocsPreview>
      <div class="bj-rich-editor" style="max-width: 40rem">
        <div
          class="bj-rich-editor__toolbar"
          role="toolbar"
          aria-label="Éditeur"
        >
          <div class="bj-rich-editor__toolbar-group">
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Gras"
            >
              <i class="ri-bold" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Italique"
            >
              <i class="ri-italic" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div
          class="bj-rich-editor__content"
          contenteditable="true"
          role="textbox"
          aria-multiline="true"
          data-placeholder="Saisissez votre message…"
          style="min-height: 12rem"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codePlaceholderHeight" />
  </DocsSection>

  <DocsSection id="toolbar-subset-editor" :title="t('section-toolbar-subset')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-toolbar-subset-body')"
    />
  </DocsSection>

  <DocsSection id="toolbar-editor" :title="t('section-toolbar')">
    <DocsPreview
      style="
        display: flex;
        flex-wrap: wrap;
        gap: var(--bj-spacing-3v);
        align-items: center;
      "
    >
      <button
        type="button"
        class="bj-rich-editor__toolbar-btn"
        aria-label="Normal"
      >
        <i class="ri-bold" aria-hidden="true"></i>
      </button>
      <button
        type="button"
        class="bj-rich-editor__toolbar-btn bj-rich-editor__toolbar-btn--active"
        aria-label="Actif"
      >
        <i class="ri-bold" aria-hidden="true"></i>
      </button>
    </DocsPreview>
    <DocsCode :code="codeToolbar" />
  </DocsSection>

  <DocsSection id="disabled-editor" :title="t('section-disabled')">
    <DocsPreview>
      <div
        class="bj-rich-editor bj-rich-editor--disabled"
        style="max-width: 40rem"
      >
        <div
          class="bj-rich-editor__toolbar"
          role="toolbar"
          aria-label="Éditeur"
        >
          <div class="bj-rich-editor__toolbar-group">
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Gras"
            >
              <i class="ri-bold" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Italique"
            >
              <i class="ri-italic" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div
          class="bj-rich-editor__content"
          contenteditable="false"
          role="textbox"
          aria-multiline="true"
          style="min-height: 4rem"
        >
          Contenu en lecture seule
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabled" />
  </DocsSection>

  <DocsSection id="prefilled-editor" :title="t('section-prefilled')">
    <DocsPreview>
      <div class="bj-rich-editor" style="max-width: 40rem">
        <div
          class="bj-rich-editor__toolbar"
          role="toolbar"
          aria-label="Éditeur"
        >
          <div class="bj-rich-editor__toolbar-group">
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Gras"
            >
              <i class="ri-bold" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Italique"
            >
              <i class="ri-italic" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Souligné"
            >
              <i class="ri-underline" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div
          class="bj-rich-editor__content"
          contenteditable="true"
          role="textbox"
          aria-multiline="true"
          style="min-height: 8rem"
        >
          <h2>Titre d'exemple</h2>
          <p>
            Un paragraphe avec du texte <strong>gras</strong> et
            <em>italique</em>.
          </p>
          <ul>
            <li>Premier élément</li>
            <li>Deuxième élément</li>
          </ul>
          <blockquote>Une citation importante.</blockquote>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codePrefilled" />
  </DocsSection>

  <DocsSection id="raccourcis-editor" :title="t('section-raccourcis')">
    <DocsCode :code="codeRaccourcis" lang="text" />
  </DocsSection>

  <DocsSection id="classes-editor" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-editor" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
