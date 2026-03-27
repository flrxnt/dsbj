<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Tag',
      desc:
        'Mot-clé ou filtre affiché comme une pastille ; peut être statique, lien ou bouton. Variantes sémantiques et tag fermable pour les facettes de recherche.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-elements-html': 'Éléments HTML',
      'section-tailles': 'Tailles',
      'section-tags-fermables': 'Tags fermables',
      'section-combinaisons': 'Combinaisons',
      'section-liste-tags': 'Liste de tags',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'a11y-note':
        'Le bouton de fermeture doit avoir un <code>aria-label</code> décrivant l’action et le filtre retiré. Pour une liste de tags, un rôle <code>list</code> / <code>listitem</code> ou une structure de groupe avec titre visible améliore la navigation au lecteur d’écran.',
      'prop-bj-tag': 'Tag neutre ; peut être span, a ou button.',
      'prop-bj-tag-action': 'Style lié à la couleur d’action.',
      'prop-bj-tag-semantic':
        'Variantes sémantiques (info, succès, avertissement, erreur).',
      'prop-bj-tag-sm': 'Tag compact.',
      'prop-bj-tag-dismiss':
        'Ajuste le padding pour accueillir le bouton de fermeture.',
      'prop-bj-tag-close': 'Bouton icône pour retirer le tag.',
      'prop-bj-tags': 'Conteneur flex wrap pour une liste de tags.',
    },
    en: {
      title: 'Tag',
      desc:
        'Keyword or filter shown as a pill; can be static, link or button. Semantic variants and dismissible tag for search facets.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-elements-html': 'HTML elements',
      'section-tailles': 'Sizes',
      'section-tags-fermables': 'Dismissible tags',
      'section-combinaisons': 'Combinations',
      'section-liste-tags': 'Tag list',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'a11y-note':
        'The close button needs an <code>aria-label</code> describing the action and the removed filter. For a tag list, <code>list</code> / <code>listitem</code> roles or a titled group improve screen reader navigation.',
      'prop-bj-tag': 'Neutral tag; may be span, a or button.',
      'prop-bj-tag-action': 'Style tied to the action color.',
      'prop-bj-tag-semantic':
        'Semantic variants (info, success, warning, error).',
      'prop-bj-tag-sm': 'Compact tag.',
      'prop-bj-tag-dismiss': 'Adjusts padding for the close button.',
      'prop-bj-tag-close': 'Icon button to remove the tag.',
      'prop-bj-tags': 'Flex wrap container for a list of tags.',
    },
  },
})

const codeExemple = `<span class="bj-tag">Administration</span>`

const codeVariantes = `<div class="bj-tags">
  <span class="bj-tag bj-tag--action">…</span>
</div>
<span class="bj-tag bj-tag--dismiss">
  Filtre
  <button type="button" class="bj-tag__close" aria-label="Retirer le filtre">…</button>
</span>`

const codeElementsHtml = `<span class="bj-tag">…</span>
<a href="#" class="bj-tag">…</a>
<button type="button" class="bj-tag">…</button>`

const codeTaillesTag = `<!-- sm puis md pour chaque variante -->
<span class="bj-tag bj-tag--sm">Défaut</span>
<span class="bj-tag">Défaut</span>`

const codeTagsFermables = `<span class="bj-tag bj-tag--dismiss">
  Filtre
  <button type="button" class="bj-tag__close" aria-label="Retirer le filtre">…</button>
</span>`

const codeCombinaisonsTag = `<span class="bj-tag bj-tag--sm bj-tag--dismiss bj-tag--info">
  …
  <button type="button" class="bj-tag__close" aria-label="…">…</button>
</span>`

const codeListeTags = `<div class="bj-tags" role="list">
  <span class="bj-tag" role="listitem">…</span>
  <span class="bj-tag bj-tag--action" role="listitem">…</span>
</div>`

const propsRows = computed(() => [
  {
    name: 'bj-tag',
    description: t('prop-bj-tag'),
  },
  { name: 'bj-tag--action', description: t('prop-bj-tag-action') },
  {
    name: 'bj-tag--info … bj-tag--error',
    description: t('prop-bj-tag-semantic'),
  },
  { name: 'bj-tag--sm', description: t('prop-bj-tag-sm') },
  {
    name: 'bj-tag--dismiss',
    description: t('prop-bj-tag-dismiss'),
  },
  { name: 'bj-tag__close', description: t('prop-bj-tag-close') },
  { name: 'bj-tags', description: t('prop-bj-tags') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="exemple-tag" :title="t('section-exemple')">
    <DocsPreview>
      <span class="bj-tag">Administration</span>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-tag" :title="t('section-variantes')">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-6v);
      "
    >
      <div class="bj-tags" role="list">
        <span class="bj-tag" role="listitem">Défaut</span>
        <a href="#" class="bj-tag bj-tag--action" role="listitem"
          >Action (lien)</a
        >
        <span class="bj-tag bj-tag--info" role="listitem">Info</span>
        <span class="bj-tag bj-tag--success" role="listitem">Succès</span>
        <span class="bj-tag bj-tag--warning" role="listitem">Attention</span>
        <span class="bj-tag bj-tag--error" role="listitem">Erreur</span>
        <span class="bj-tag bj-tag--sm" role="listitem">Petit</span>
      </div>
      <div>
        <span class="bj-tag bj-tag--dismiss bj-tag--info">
          Filtre actif
          <button
            type="button"
            class="bj-tag__close"
            aria-label="Retirer le filtre Filtre actif"
          >
            <i class="ri-close-line" aria-hidden="true"></i>
          </button>
        </span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="elements-html-tag" :title="t('section-elements-html')">
    <DocsPreview
      style="
        display: flex;
        flex-wrap: wrap;
        gap: var(--bj-spacing-3v);
        align-items: center;
      "
    >
      <span class="bj-tag">Span</span>
      <a href="#" class="bj-tag">Lien (a)</a>
      <button type="button" class="bj-tag">Bouton</button>
    </DocsPreview>
    <DocsCode :code="codeElementsHtml" />
  </DocsSection>

  <DocsSection id="tailles-tag" :title="t('section-tailles')">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
        align-items: flex-start;
      "
    >
      <div
        class="bj-text-sm"
        style="color: var(--bj-text-mention); margin: 0"
      >
        sm
      </div>
      <div class="bj-tags" role="list">
        <span class="bj-tag bj-tag--sm" role="listitem">Défaut</span>
        <span class="bj-tag bj-tag--action bj-tag--sm" role="listitem">Action</span>
        <span class="bj-tag bj-tag--info bj-tag--sm" role="listitem">Info</span>
        <span class="bj-tag bj-tag--success bj-tag--sm" role="listitem">Succès</span>
        <span class="bj-tag bj-tag--warning bj-tag--sm" role="listitem">Attention</span>
        <span class="bj-tag bj-tag--error bj-tag--sm" role="listitem">Erreur</span>
      </div>
      <div
        class="bj-text-sm"
        style="color: var(--bj-text-mention); margin: 0"
      >
        md (défaut)
      </div>
      <div class="bj-tags" role="list">
        <span class="bj-tag" role="listitem">Défaut</span>
        <span class="bj-tag bj-tag--action" role="listitem">Action</span>
        <span class="bj-tag bj-tag--info" role="listitem">Info</span>
        <span class="bj-tag bj-tag--success" role="listitem">Succès</span>
        <span class="bj-tag bj-tag--warning" role="listitem">Attention</span>
        <span class="bj-tag bj-tag--error" role="listitem">Erreur</span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeTaillesTag" />
  </DocsSection>

  <DocsSection id="tags-fermables-tag" :title="t('section-tags-fermables')">
    <DocsPreview class="bj-tags" role="list">
      <span class="bj-tag bj-tag--dismiss" role="listitem">
        Défaut
        <button
          type="button"
          class="bj-tag__close"
          aria-label="Retirer le tag Défaut"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
      <span class="bj-tag bj-tag--action bj-tag--dismiss" role="listitem">
        Action
        <button
          type="button"
          class="bj-tag__close"
          aria-label="Retirer le tag Action"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
      <span class="bj-tag bj-tag--info bj-tag--dismiss" role="listitem">
        Info
        <button
          type="button"
          class="bj-tag__close"
          aria-label="Retirer le tag Info"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
      <span class="bj-tag bj-tag--success bj-tag--dismiss" role="listitem">
        Succès
        <button
          type="button"
          class="bj-tag__close"
          aria-label="Retirer le tag Succès"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
      <span class="bj-tag bj-tag--warning bj-tag--dismiss" role="listitem">
        Attention
        <button
          type="button"
          class="bj-tag__close"
          aria-label="Retirer le tag Attention"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
      <span class="bj-tag bj-tag--error bj-tag--dismiss" role="listitem">
        Erreur
        <button
          type="button"
          class="bj-tag__close"
          aria-label="Retirer le tag Erreur"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
    </DocsPreview>
    <DocsCode :code="codeTagsFermables" />
  </DocsSection>

  <DocsSection id="combinaisons-tag" :title="t('section-combinaisons')">
    <DocsPreview class="bj-tags" role="list">
      <span class="bj-tag bj-tag--sm bj-tag--dismiss" role="listitem">
        Défaut
        <button
          type="button"
          class="bj-tag__close"
          aria-label="Retirer le tag Défaut"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
      <span class="bj-tag bj-tag--sm bj-tag--action bj-tag--dismiss" role="listitem">
        Action
        <button
          type="button"
          class="bj-tag__close"
          aria-label="Retirer le tag Action"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
      <span class="bj-tag bj-tag--sm bj-tag--info bj-tag--dismiss" role="listitem">
        Info
        <button
          type="button"
          class="bj-tag__close"
          aria-label="Retirer le tag Info"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
      <span class="bj-tag bj-tag--sm bj-tag--success bj-tag--dismiss" role="listitem">
        Succès
        <button
          type="button"
          class="bj-tag__close"
          aria-label="Retirer le tag Succès"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
      <span class="bj-tag bj-tag--sm bj-tag--warning bj-tag--dismiss" role="listitem">
        Attention
        <button
          type="button"
          class="bj-tag__close"
          aria-label="Retirer le tag Attention"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
      <span class="bj-tag bj-tag--sm bj-tag--error bj-tag--dismiss" role="listitem">
        Erreur
        <button
          type="button"
          class="bj-tag__close"
          aria-label="Retirer le tag Erreur"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
    </DocsPreview>
    <DocsCode :code="codeCombinaisonsTag" />
  </DocsSection>

  <DocsSection id="liste-tags-tag" :title="t('section-liste-tags')">
    <DocsPreview>
      <div class="bj-tags" role="list">
        <span class="bj-tag" role="listitem">Public</span>
        <span class="bj-tag bj-tag--action" role="listitem">Prioritaire</span>
        <span class="bj-tag bj-tag--info" role="listitem">Brouillon</span>
        <span class="bj-tag bj-tag--success" role="listitem">Validé</span>
        <span class="bj-tag bj-tag--warning" role="listitem">En attente</span>
        <span class="bj-tag bj-tag--error" role="listitem">Rejeté</span>
        <span class="bj-tag bj-tag--sm" role="listitem">Compact</span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeListeTags" />
  </DocsSection>

  <DocsSection id="classes-tag" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-tag" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
