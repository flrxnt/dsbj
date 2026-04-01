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
      desc: "Composant React WYSIWYG pour la saisie de contenu riche. Basé sur contenteditable, sans dépendance externe. Raccourcis clavier intégrés (Ctrl+B, Ctrl+I, Ctrl+U, Ctrl+Z, Ctrl+Y).",
      "section-usage": "Utilisation",
      "section-preview": "Aperçu (toolbar complète)",
      "section-toolbar-custom": "Toolbar personnalisée",
      "section-disabled": "État désactivé",
      "section-prefilled": "Contenu pré-rempli",
      "section-toolbar-list": "Outils disponibles",
      "section-props": "Props",
      "section-accessibilite": "Accessibilité",
      "a11y-note":
        'Le composant expose <code>role="textbox"</code> et <code>aria-multiline="true"</code> sur la zone éditable. La toolbar a <code>role="toolbar"</code> avec <code>aria-label</code>. Chaque bouton a un <code>aria-label</code> descriptif. En état <code>disabled</code>, le composant passe <code>contentEditable={false}</code> et réduit l\'opacité.',
      "prop-value": "Contenu HTML.",
      "prop-onChange":
        "Callback appelé à chaque modification avec le HTML mis à jour.",
      "prop-placeholder": "Texte indicatif quand l'éditeur est vide.",
      "prop-disabled": "Désactive l'éditeur.",
      "prop-toolbar":
        "Liste des outils à afficher. Par défaut, tous sont affichés.",
      "prop-height": "Hauteur minimale de la zone éditable.",
      "prop-className": "Classe CSS sur le conteneur bj-rich-editor.",
      "icons-prerequisite":
        "Tous les composants React du DSBJ embarquent leurs icônes en SVG inline : <strong>aucune dépendance à Remix Icon n'est requise</strong>.",
      "section-combinations": "Combinaisons",
      "section-callbacks": "Contenu contrôlé et onChange",
      "desc-combinations":
        "toolbar réduite, hauteur fixe, placeholder et valeur initiale ensemble.",
      "desc-callbacks":
        "value synchronise le HTML ; onChange(html) à chaque saisie ou action toolbar.",
    },
    en: {
      title: "BjRichEditor",
      desc: "React WYSIWYG component for rich content editing. Based on contenteditable, no external dependency. Built-in keyboard shortcuts (Ctrl+B, Ctrl+I, Ctrl+U, Ctrl+Z, Ctrl+Y).",
      "section-usage": "Usage",
      "section-preview": "Preview (full toolbar)",
      "section-toolbar-custom": "Custom toolbar",
      "section-disabled": "Disabled state",
      "section-prefilled": "Pre-filled content",
      "section-toolbar-list": "Available tools",
      "section-props": "Props",
      "section-accessibilite": "Accessibility",
      "a11y-note":
        'The component exposes <code>role="textbox"</code> and <code>aria-multiline="true"</code> on the editable area. The toolbar has <code>role="toolbar"</code> with <code>aria-label</code>. Each button has a descriptive <code>aria-label</code>. When <code>disabled</code>, the component sets <code>contentEditable={false}</code> and reduces opacity.',
      "prop-value": "HTML content.",
      "prop-onChange": "Callback fired on each change with the updated HTML.",
      "prop-placeholder": "Placeholder text when the editor is empty.",
      "prop-disabled": "Disables the editor.",
      "prop-toolbar": "List of toolbar tools to display. All shown by default.",
      "prop-height": "Minimum height of the editable area.",
      "prop-className": "CSS class on the bj-rich-editor wrapper.",
      "icons-prerequisite":
        "All React DSBJ components embed their icons as inline SVGs: <strong>no Remix Icon dependency is needed</strong>.",
      "section-combinations": "Combinations",
      "section-callbacks": "Controlled content and onChange",
      "desc-combinations":
        "Reduced toolbar, fixed height, placeholder, and initial value together.",
      "desc-callbacks":
        "value syncs HTML; onChange(html) on each edit or toolbar action.",
    },
  },
});

const codeUsage = `import { useState } from 'react'
import { BjRichEditor } from '@flrxnt/dsbj/react'

export default function App() {
  const [content, setContent] = useState('<p>Contenu initial</p>')

  return (
    <BjRichEditor
      value={content}
      onChange={setContent}
      placeholder="Saisissez votre texte..."
    />
  )
}`;

const codeToolbarCustom = `<BjRichEditor
  value={content}
  onChange={setContent}
  toolbar={['heading', 'bold', 'italic', 'underline', 'unorderedList', 'orderedList', 'link']}
  placeholder="Éditeur simplifié..."
/>`;

const codeDisabled = `<BjRichEditor
  value="<p>Ce contenu est en lecture seule.</p>"
  disabled
/>`;

const codePrefilled = `import { useState } from 'react'
import { BjRichEditor } from '@flrxnt/dsbj/react'

export default function Article() {
  const [content, setContent] = useState(\`
    <h2>Mon article</h2>
    <p>Texte avec du <strong>gras</strong> et de l'<em>italique</em>.</p>
    <ul>
      <li>Premier point</li>
      <li>Deuxième point</li>
    </ul>
    <blockquote>Une citation remarquable.</blockquote>
    <pre><code>console.log('Hello DSBJ')</code></pre>
  \`)

  return <BjRichEditor value={content} onChange={setContent} />
}`;

const codeToolbarList = `// Tous les outils disponibles :
import { TOOLBAR_ALL } from '@flrxnt/dsbj/react'

// TOOLBAR_ALL = [
//   'heading',        // Sélecteur H1/H2/H3/P
//   'bold',           // Gras (Ctrl+B)
//   'italic',         // Italique (Ctrl+I)
//   'underline',      // Souligné (Ctrl+U)
//   'strikethrough',  // Barré
//   'unorderedList',  // Liste à puces
//   'orderedList',    // Liste numérotée
//   'indent',         // Augmenter le retrait
//   'outdent',        // Réduire le retrait
//   'alignLeft',      // Aligner à gauche
//   'alignCenter',    // Centrer
//   'alignRight',     // Aligner à droite
//   'alignJustify',   // Justifier
//   'link',           // Insérer un lien
//   'unlink',         // Supprimer le lien
//   'image',          // Insérer une image (URL)
//   'video',          // Insérer une vidéo (embed)
//   'table',          // Insérer un tableau
//   'blockquote',     // Citation
//   'codeBlock',      // Bloc de code
//   'removeFormat',   // Effacer le formatage
//   'textColor',      // Couleur du texte
//   'bgColor',        // Couleur de fond
//   'horizontalRule', // Ligne horizontale
//   'undo',           // Annuler (Ctrl+Z)
//   'redo',           // Rétablir (Ctrl+Y)
// ]`;

const codeCombinations = `import { useState } from 'react'
import { BjRichEditor } from '@flrxnt/dsbj/react'

export default function App() {
  const [html, setHtml] = useState('<p><strong>Brouillon</strong></p>')
  return (
    <BjRichEditor
      className="article-editor"
      value={html}
      onChange={setHtml}
      placeholder="Rédigez ici…"
      height="220px"
      toolbar={['bold', 'italic', 'unorderedList', 'orderedList', 'link', 'removeFormat']}
    />
  )
}`;

const codeCallbacks = `import { useState } from 'react'
import { BjRichEditor } from '@flrxnt/dsbj/react'

export default function App() {
  const [body, setBody] = useState('')
  return (
    <BjRichEditor
      value={body}
      onChange={(next) => {
        setBody(next)
        console.log('length', next.length)
      }}
      placeholder="Le HTML est mis à jour à chaque frappe."
    />
  )
}`;

const propsRows = computed(() => [
  { name: "value", description: t("prop-value") },
  { name: "onChange", description: t("prop-onChange") },
  { name: "placeholder", description: t("prop-placeholder") },
  { name: "disabled", description: t("prop-disabled") },
  { name: "toolbar", description: t("prop-toolbar") },
  { name: "height", description: t("prop-height") },
  { name: "className", description: t("prop-className") },
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

  <DocsSection id="react-editor-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-editor-preview" :title="t('section-preview')">
    <DocsPreview>
      <div style="max-width: 48rem; width: 100%">
        <BjRichEditor placeholder="Saisissez votre texte..." height="12rem" />
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-editor-toolbar" :title="t('section-toolbar-custom')">
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
    <DocsCode :code="codeToolbarCustom" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-editor-disabled" :title="t('section-disabled')">
    <DocsPreview>
      <div style="max-width: 44rem; width: 100%">
        <BjRichEditor
          model-value="<p>Ce contenu est en lecture seule.</p>"
          :disabled="true"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-editor-prefilled" :title="t('section-prefilled')">
    <DocsPreview>
      <div style="max-width: 44rem; width: 100%">
        <BjRichEditor
          model-value="<h2>Mon article</h2><p>Texte avec du <strong>gras</strong> et de l'<em>italique</em>.</p><ul><li>Premier point</li><li>Deuxième point</li></ul><blockquote>Une citation remarquable.</blockquote>"
          height="14rem"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codePrefilled" lang="tsx" />
  </DocsSection>

  <DocsSection
    id="react-editor-toolbar-list"
    :title="t('section-toolbar-list')"
  >
    <DocsCode :code="codeToolbarList" lang="tsx" />
  </DocsSection>

  <DocsSection
    id="react-editor-combinations"
    :title="t('section-combinations')"
  >
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">
      {{ t("desc-combinations") }}
    </p>
    <DocsPreview>
      <div
        class="bj-rich-editor article-editor"
        style="max-width: 48rem; width: 100%"
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
              <i class="ri-bold" aria-hidden="true" />
            </button>
            <button
              type="button"
              class="bj-rich-editor__toolbar-btn"
              aria-label="Italique"
            >
              <i class="ri-italic" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div
          class="bj-rich-editor__content"
          role="textbox"
          aria-multiline="true"
          style="min-height: 220px"
          data-placeholder="Rédigez ici…"
        >
          <p><strong>Brouillon</strong></p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombinations" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-editor-callbacks" :title="t('section-callbacks')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">
      {{ t("desc-callbacks") }}
    </p>
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-editor-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="react-editor-a11y" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
