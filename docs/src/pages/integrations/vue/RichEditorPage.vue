<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import DocsCode from "@docs/components/DocsCode.vue";
import DocsPreview from "@docs/components/DocsPreview.vue";
import DocsSection from "@docs/components/DocsSection.vue";
import DocsPropsTable from "@docs/components/DocsPropsTable.vue";
import DocsA11yNote from "@docs/components/DocsA11yNote.vue";
import BjRichEditor from "@dsbj/vue/components/BjRichEditor.vue";

const { t } = useI18n({
  messages: {
    fr: {
      title: "BjRichEditor",
      desc: "Composant Vue WYSIWYG pour la saisie de contenu riche. Basé sur contenteditable, sans dépendance externe. Supporte v-model, toolbar configurable et raccourcis clavier (Ctrl+B, Ctrl+I, Ctrl+U, Ctrl+Z, Ctrl+Y).",
      "section-usage": "Utilisation",
      "section-v-model": "v-model et contenu HTML",
      "section-preview": "Aperçu interactif (toolbar complète)",
      "section-markup": "Aperçu HTML (toolbar réduite)",
      "section-toolbar-height": "Toolbar × hauteur",
      "section-toolbar-custom": "Toolbar personnalisée",
      "section-disabled": "État désactivé",
      "section-prefilled": "Contenu pré-rempli",
      "section-height": "Hauteur personnalisée",
      "section-toolbar-list": "Outils disponibles",
      "section-props": "Props",
      "section-accessibilite": "Accessibilité",
      "a11y-note":
        'Le composant expose <code>role="textbox"</code> et <code>aria-multiline="true"</code> sur la zone éditable. La toolbar a <code>role="toolbar"</code> avec <code>aria-label</code>. Chaque bouton a un <code>aria-label</code> descriptif. En état <code>disabled</code>, le composant passe <code>contenteditable="false"</code> et réduit l\'opacité.',
      "prop-modelValue":
        "Contenu HTML (v-model) ; le composant émet update:modelValue à chaque modification.",
      "emit-desc":
        "Le contenu éditable déclenche <code>update:modelValue</code> avec le HTML interne (sanitisé côté lecture de la prop).",
      "markup-desc":
        "Structure principale : <code>bj-rich-editor</code>, <code>bj-rich-editor__toolbar</code>, <code>bj-rich-editor__content</code> avec <code>data-placeholder</code> quand vide.",
      "prop-placeholder": "Texte indicatif quand l'éditeur est vide.",
      "prop-disabled": "Désactive l'éditeur.",
      "prop-toolbar":
        "Liste des outils à afficher. Par défaut, tous sont affichés.",
      "prop-height": 'Hauteur minimale de la zone éditable (ex: "20rem").',
      "icons-prerequisite":
        "Tous les composants Vue du DSBJ embarquent leurs icônes en SVG inline : <strong>aucune dépendance à Remix Icon n'est requise</strong>.",
    },
    en: {
      title: "BjRichEditor",
      desc: "Vue WYSIWYG component for rich content editing. Based on contenteditable, no external dependency. Supports v-model, configurable toolbar and keyboard shortcuts (Ctrl+B, Ctrl+I, Ctrl+U, Ctrl+Z, Ctrl+Y).",
      "section-usage": "Usage",
      "section-v-model": "v-model and HTML content",
      "section-preview": "Interactive preview (full toolbar)",
      "section-markup": "HTML preview (reduced toolbar)",
      "section-toolbar-height": "Toolbar × height",
      "section-toolbar-custom": "Custom toolbar",
      "section-disabled": "Disabled state",
      "section-prefilled": "Pre-filled content",
      "section-height": "Custom height",
      "section-toolbar-list": "Available tools",
      "section-props": "Props",
      "section-accessibilite": "Accessibility",
      "a11y-note":
        'The component exposes <code>role="textbox"</code> and <code>aria-multiline="true"</code> on the editable area. The toolbar has <code>role="toolbar"</code> with <code>aria-label</code>. Each button has a descriptive <code>aria-label</code>. When <code>disabled</code>, the component sets <code>contenteditable="false"</code> and reduces opacity.',
      "prop-modelValue":
        "HTML content (v-model); emits update:modelValue on edits.",
      "emit-desc":
        "The editable area emits <code>update:modelValue</code> with inner HTML (sanitized when the prop is applied).",
      "markup-desc":
        "Main structure: <code>bj-rich-editor</code>, <code>bj-rich-editor__toolbar</code>, <code>bj-rich-editor__content</code> with <code>data-placeholder</code> when empty.",
      "prop-placeholder": "Placeholder text when the editor is empty.",
      "prop-disabled": "Disables the editor.",
      "prop-toolbar": "List of toolbar tools to display. All shown by default.",
      "prop-height": 'Minimum height of the editable area (e.g. "20rem").',
      "icons-prerequisite":
        "All Vue DSBJ components embed their icons as inline SVGs: <strong>no Remix Icon dependency is needed</strong>.",
    },
  },
});

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjRichEditor } from '@flrxnt/dsbj/vue'

const content = ref('<p>Contenu initial</p>')
<\/script>

<template>
  <BjRichEditor v-model="content" placeholder="Saisissez votre texte..." />
</template>`;

const codeVModel = `<script setup lang="ts">
import { ref, watch } from 'vue'
import { BjRichEditor } from '@flrxnt/dsbj/vue'

const html = ref('<p>Départ</p>')
watch(html, (v) => console.log('update:modelValue', v))
<\/script>

<template>
  <BjRichEditor v-model="html" placeholder="Éditez ici…" />
</template>`;

const codeToolbarHeight = `<BjRichEditor
  v-model="content"
  :toolbar="['bold', 'italic', 'link', 'undo', 'redo']"
  height="18rem"
  placeholder="Toolbar minimale + zone haute…"
/>`;

const codeToolbarCustom = `<BjRichEditor
  v-model="content"
  :toolbar="['heading', 'bold', 'italic', 'underline', 'unorderedList', 'orderedList', 'link']"
  placeholder="Éditeur simplifié..."
/>`;

const codeDisabled = `<BjRichEditor
  model-value="<p>Ce contenu est en lecture seule.</p>"
  :disabled="true"
/>`;

const codePrefilled = `<script setup>
import { ref } from 'vue'
import { BjRichEditor } from '@flrxnt/dsbj/vue'

const content = ref(\`
  <h2>Mon article</h2>
  <p>Un paragraphe avec du <strong>gras</strong> et de l'<em>italique</em>.</p>
  <ul>
    <li>Premier point</li>
    <li>Deuxième point</li>
  </ul>
  <blockquote>Une citation remarquable.</blockquote>
  <pre><code>console.log('Hello DSBJ')</code></pre>
\`)
<\/script>

<template>
  <BjRichEditor v-model="content" />
</template>`;

const codeHeight = `<BjRichEditor
  v-model="content"
  height="24rem"
  placeholder="Éditeur plus haut..."
/>`;

const codeToolbarList = `// Tous les outils disponibles :
const TOOLBAR_ALL = [
  'heading',        // Sélecteur H1/H2/H3/P
  'bold',           // Gras (Ctrl+B)
  'italic',         // Italique (Ctrl+I)
  'underline',      // Souligné (Ctrl+U)
  'strikethrough',  // Barré
  'unorderedList',  // Liste à puces
  'orderedList',    // Liste numérotée
  'indent',         // Augmenter le retrait
  'outdent',        // Réduire le retrait
  'alignLeft',      // Aligner à gauche
  'alignCenter',    // Centrer
  'alignRight',     // Aligner à droite
  'alignJustify',   // Justifier
  'link',           // Insérer un lien
  'unlink',         // Supprimer le lien
  'image',          // Insérer une image (URL)
  'video',          // Insérer une vidéo (embed)
  'table',          // Insérer un tableau
  'blockquote',     // Citation
  'codeBlock',      // Bloc de code
  'removeFormat',   // Effacer le formatage
  'textColor',      // Couleur du texte
  'bgColor',        // Couleur de fond
  'horizontalRule', // Ligne horizontale
  'undo',           // Annuler (Ctrl+Z)
  'redo',           // Rétablir (Ctrl+Y)
]`;

const propsRows = computed(() => [
  { name: "modelValue", description: t("prop-modelValue") },
  { name: "placeholder", description: t("prop-placeholder") },
  { name: "disabled", description: t("prop-disabled") },
  { name: "toolbar", description: t("prop-toolbar") },
  { name: "height", description: t("prop-height") },
]);
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t("title") }}
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    {{ t("desc") }}
  </p>

  <!-- <div class="bj-callout bj-callout--success" style="max-width: 44rem; margin-top: var(--bj-spacing-4v); margin-bottom: var(--bj-spacing-4v)">
    <i class="ri-checkbox-circle-line bj-icon bj-icon--md" aria-hidden="true"></i>
    <div>
      <span v-html="t('icons-prerequisite')" />
    </div>
  </div> -->

  <DocsSection id="vue-editor-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-editor-v-model" :title="t('section-v-model')">
    <p
      class="bj-text"
      style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)"
      v-html="t('emit-desc')"
    />
    <DocsCode :code="codeVModel" lang="html" />
  </DocsSection>

  <DocsSection id="vue-editor-preview" :title="t('section-preview')">
    <DocsPreview>
      <div style="max-width: 48rem; width: 100%">
        <BjRichEditor placeholder="Saisissez votre texte..." height="12rem" />
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-editor-toolbar" :title="t('section-toolbar-custom')">
    <DocsPreview>
      <div style="max-width: 44rem; width: 100%">
        <BjRichEditor
          :toolbar="[
            'heading',
            'bold',
            'italic',
            'underline',
            'unorderedList',
            'orderedList',
            'link',
          ]"
          placeholder="Éditeur simplifié..."
          height="8rem"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codeToolbarCustom" lang="html" />
  </DocsSection>

  <DocsSection id="vue-editor-disabled" :title="t('section-disabled')">
    <DocsPreview>
      <div style="max-width: 44rem; width: 100%">
        <BjRichEditor
          model-value="<p>Ce contenu est en lecture seule.</p>"
          :disabled="true"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="html" />
  </DocsSection>

  <DocsSection id="vue-editor-prefilled" :title="t('section-prefilled')">
    <DocsPreview>
      <div style="max-width: 44rem; width: 100%">
        <BjRichEditor
          model-value="<h2>Mon article</h2><p>Un paragraphe avec du <strong>gras</strong> et de l'<em>italique</em>.</p><ul><li>Premier point</li><li>Deuxième point</li></ul><blockquote>Une citation remarquable.</blockquote>"
          height="14rem"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codePrefilled" lang="html" />
  </DocsSection>

  <DocsSection id="vue-editor-height" :title="t('section-height')">
    <DocsPreview>
      <div style="max-width: 44rem; width: 100%">
        <BjRichEditor
          :toolbar="['bold', 'italic', 'underline']"
          height="24rem"
          placeholder="Éditeur plus haut..."
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codeHeight" lang="html" />
  </DocsSection>

  <DocsSection id="vue-editor-toolbar-list" :title="t('section-toolbar-list')">
    <DocsCode :code="codeToolbarList" lang="ts" />
  </DocsSection>

  <DocsSection id="vue-editor-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="vue-editor-a11y" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
