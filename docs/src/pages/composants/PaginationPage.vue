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
      title: 'Pagination',
      desc:
        'Navigation entre pages de résultats : précédent / numéros / suivant, états actif et désactivé, ellipse.',
      'section-exemple': 'Exemple',
      'section-ellipsis': 'Avec ellipse',
      'section-ellipsis-p':
        'L\u2019ellipse <code>bj-pagination__ellipsis</code> sépare visuellement les plages de pages (comme le composant Vue avec beaucoup de pages).',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-p':
        '<code>bj-pagination__nav--disabled</code> sur les boutons préc./suiv. ; <code>bj-pagination__label</code> visible depuis le breakpoint médian. Les numéros utilisent <code>bj-pagination__link</code> et <code>bj-pagination__link--active</code> (ou <code>aria-current="page"</code>).',
      'a11y-note':
        '<code>aria-current="page"</code> sur la page active ; <code>aria-label</code> explicites sur les boutons précédent / suivant.',
      'prop-bj-pagination': 'Conteneur <code>nav</code>.',
      'prop-bj-pagination-link': 'Bouton (ou lien) pour un numéro de page.',
      'prop-bj-pagination-link-active': 'Page courante (style plein).',
      'prop-bj-pagination-link-disabled': 'Numéro non cliquable (liens statiques).',
      'prop-bj-pagination-ellipsis': 'Séparateur entre plages.',
      'prop-bj-pagination-nav': 'Bouton précédent ou suivant (icône).',
      'prop-bj-pagination-nav-disabled': 'État désactivé des boutons préc./suiv.',
      'prop-bj-pagination-label': 'Libellé texte Précédent / Suivant.',
    },
    en: {
      title: 'Pagination',
      desc:
        'Result page navigation: previous / page numbers / next, active and disabled states, ellipsis.',
      'section-exemple': 'Example',
      'section-ellipsis': 'With ellipsis',
      'section-ellipsis-p':
        'The <code>bj-pagination__ellipsis</code> span separates page ranges (same pattern as the Vue component with many pages).',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-p':
        '<code>bj-pagination__nav--disabled</code> on prev/next buttons; <code>bj-pagination__label</code> visible from the medium breakpoint. Page numbers use <code>bj-pagination__link</code> and <code>bj-pagination__link--active</code> (or <code>aria-current="page"</code>).',
      'a11y-note':
        '<code>aria-current="page"</code> on the active page; clear <code>aria-label</code> on previous / next buttons.',
      'prop-bj-pagination': '<code>nav</code> container.',
      'prop-bj-pagination-link': 'Button (or link) for a page number.',
      'prop-bj-pagination-link-active': 'Current page (filled style).',
      'prop-bj-pagination-link-disabled': 'Non-clickable page (static links).',
      'prop-bj-pagination-ellipsis': 'Ellipsis between ranges.',
      'prop-bj-pagination-nav': 'Previous or next control (icon).',
      'prop-bj-pagination-nav-disabled': 'Disabled prev/next state.',
      'prop-bj-pagination-label': 'Previous / Next text label.',
    },
  },
})

const codeExemple = `<nav class="bj-pagination" aria-label="Pagination">
  <button type="button" class="bj-pagination__nav bj-pagination__nav--disabled" disabled aria-label="Page précédente">
    <i class="ri-arrow-left-s-line" aria-hidden="true"></i>
  </button>
  <button type="button" class="bj-pagination__link" aria-label="Page 1">1</button>
  <button type="button" class="bj-pagination__link bj-pagination__link--active" aria-current="page" aria-label="Page 2">2</button>
  <button type="button" class="bj-pagination__link" aria-label="Page 3">3</button>
  <button type="button" class="bj-pagination__nav" aria-label="Page suivante">
    <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
  </button>
</nav>`

const codeEllipsis = `<nav class="bj-pagination" aria-label="Pagination">
  <button type="button" class="bj-pagination__nav" aria-label="Page précédente">
    <i class="ri-arrow-left-s-line" aria-hidden="true"></i>
  </button>
  <button type="button" class="bj-pagination__link">1</button>
  <span class="bj-pagination__ellipsis" aria-hidden="true">...</span>
  <button type="button" class="bj-pagination__link bj-pagination__link--active" aria-current="page">5</button>
  <span class="bj-pagination__ellipsis" aria-hidden="true">...</span>
  <button type="button" class="bj-pagination__link">20</button>
  <button type="button" class="bj-pagination__nav" aria-label="Page suivante">
    <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
  </button>
</nav>`

const propsRows = computed(() => [
  { name: 'bj-pagination', description: t('prop-bj-pagination') },
  {
    name: 'bj-pagination__link',
    description: t('prop-bj-pagination-link'),
  },
  {
    name: 'bj-pagination__link--active',
    description: t('prop-bj-pagination-link-active'),
  },
  {
    name: 'bj-pagination__link--disabled',
    description: t('prop-bj-pagination-link-disabled'),
  },
  {
    name: 'bj-pagination__ellipsis',
    description: t('prop-bj-pagination-ellipsis'),
  },
  {
    name: 'bj-pagination__nav',
    description: t('prop-bj-pagination-nav'),
  },
  {
    name: 'bj-pagination__nav--disabled',
    description: t('prop-bj-pagination-nav-disabled'),
  },
  {
    name: 'bj-pagination__label',
    description: t('prop-bj-pagination-label'),
  },
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

  <DocsSection id="sec-exemple" :title="t('section-exemple')">
    <DocsPreview>
      <nav class="bj-pagination" aria-label="Pagination">
        <button
          type="button"
          class="bj-pagination__nav bj-pagination__nav--disabled"
          disabled
          aria-label="Page précédente"
        >
          <i class="ri-arrow-left-s-line" aria-hidden="true"></i>
          <span class="bj-pagination__label">Précédent</span>
        </button>
        <button type="button" class="bj-pagination__link" aria-label="Page 1">
          1
        </button>
        <button
          type="button"
          class="bj-pagination__link bj-pagination__link--active"
          aria-current="page"
          aria-label="Page 2"
        >
          2
        </button>
        <button type="button" class="bj-pagination__link" aria-label="Page 3">
          3
        </button>
        <button type="button" class="bj-pagination__nav" aria-label="Page suivante">
          <span class="bj-pagination__label">Suivant</span>
          <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
        </button>
      </nav>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-ellipsis" :title="t('section-ellipsis')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-ellipsis-p')"
    />
    <DocsPreview>
      <nav class="bj-pagination" aria-label="Pagination">
        <button type="button" class="bj-pagination__nav" aria-label="Page précédente">
          <i class="ri-arrow-left-s-line" aria-hidden="true"></i>
        </button>
        <button type="button" class="bj-pagination__link">1</button>
        <span class="bj-pagination__ellipsis" aria-hidden="true">...</span>
        <button
          type="button"
          class="bj-pagination__link bj-pagination__link--active"
          aria-current="page"
        >
          5
        </button>
        <span class="bj-pagination__ellipsis" aria-hidden="true">...</span>
        <button type="button" class="bj-pagination__link">20</button>
        <button type="button" class="bj-pagination__nav" aria-label="Page suivante">
          <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
        </button>
      </nav>
    </DocsPreview>
    <DocsCode :code="codeEllipsis" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variantes')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('variantes-p')"
    />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
