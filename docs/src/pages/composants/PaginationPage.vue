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
        'Navigation entre pages de résultats avec états actif et désactivé.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-p':
        '<code>bj-pagination__ellipsis</code>, <code>bj-pagination__nav--disabled</code>, <code>bj-pagination__label</code> (visible depuis breakpoint médian).',
      'a11y-note': '<code>aria-current="page"</code> sur la page active.',
      'prop-bj-pagination': 'Conteneur.',
      'prop-bj-pagination-link':
        'Numéros.',
      'prop-bj-pagination-ellipsis': 'Ellipse.',
      'prop-bj-pagination-nav': 'Préc./suiv.',
      'prop-bj-pagination-label': 'Libellé texte.',
    },
    en: {
      title: 'Pagination',
      desc: 'Navigation across result pages with active and disabled states.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-p':
        '<code>bj-pagination__ellipsis</code>, <code>bj-pagination__nav--disabled</code>, <code>bj-pagination__label</code> (visible from the medium breakpoint).',
      'a11y-note': '<code>aria-current="page"</code> on the active page.',
      'prop-bj-pagination': 'Container.',
      'prop-bj-pagination-link': 'Page numbers.',
      'prop-bj-pagination-ellipsis': 'Ellipsis.',
      'prop-bj-pagination-nav': 'Prev / next.',
      'prop-bj-pagination-label': 'Text label.',
    },
  },
})

const codeExemple = `<nav class="bj-pagination" aria-label="Pagination">…</nav>`

const propsRows = computed(() => [
  { name: 'bj-pagination', description: t('prop-bj-pagination') },
  {
    name: 'bj-pagination__link / bj-pagination__link--active / bj-pagination__link--disabled',
    description: t('prop-bj-pagination-link'),
  },
  { name: 'bj-pagination__ellipsis', description: t('prop-bj-pagination-ellipsis') },
  {
    name: 'bj-pagination__nav / bj-pagination__nav--disabled',
    description: t('prop-bj-pagination-nav'),
  },
  { name: 'bj-pagination__label', description: t('prop-bj-pagination-label') },
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
        <a
          class="bj-pagination__nav bj-pagination__nav--disabled"
          href="#"
          aria-disabled="true"
          ><span aria-hidden="true">←</span>
          <span class="bj-pagination__label">Précédent</span></a
        >
        <a class="bj-pagination__link" href="#">1</a>
        <a
          class="bj-pagination__link bj-pagination__link--active"
          href="#"
          aria-current="page"
          >2</a
        >
        <a class="bj-pagination__link" href="#">3</a>
        <span class="bj-pagination__ellipsis" aria-hidden="true">…</span>
        <a class="bj-pagination__link" href="#">12</a>
        <a class="bj-pagination__nav" href="#"
          >Suivant <span aria-hidden="true">→</span></a
        >
      </nav>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
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
