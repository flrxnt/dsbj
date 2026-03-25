<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjPagination',
      desc:
        'Pagination contrôlée : nombre total d’éléments, taille de page, page courante et rappel quand la page change. Fenêtre de numéros avec ellipses.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-page': 'Index de la page courante (base 1).',
      'prop-total': 'Nombre total d’éléments à paginer.',
      'prop-perPage': 'Taille de page utilisée pour calculer le nombre de pages (défaut 10).',
      'prop-maxVisible': 'Nombre maximal de numéros visibles dans la fenêtre glissante (défaut 5).',
      'prop-onChange': 'Fonction appelée avec le nouvel index de page lors d’un clic sur un numéro ou précédent / suivant.',
      'prop-rest': 'Attributs natifs du nav et className fusionnés sur l’élément racine (la prop DOM onChange du nav est exclue du typage).',
    },
    en: {
      title: 'BjPagination',
      desc:
        'Controlled pagination: total item count, page size, current page, and callback when the page changes. Sliding window of page numbers with ellipses.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-page': 'Current page index (1-based).',
      'prop-total': 'Total number of items to paginate.',
      'prop-perPage': 'Page size used to compute page count (default 10).',
      'prop-maxVisible': 'Maximum page numbers shown in the sliding window (default 5).',
      'prop-onChange': 'Handler called with the new page index when a number or prev/next is clicked.',
      'prop-rest':
        'Native nav attributes and className merged on the root (the nav DOM onChange prop is omitted from the type).',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjPagination } from '@flrxnt/dsbj/react'

export default function App() {
  const [page, setPage] = useState(1)

  return (
    <BjPagination page={page} total={240} perPage={10} onChange={setPage} />
  )
}`

const propsRows = computed(() => [
  { name: 'page', description: t('prop-page') },
  { name: 'total', description: t('prop-total') },
  { name: 'perPage', description: t('prop-perPage') },
  { name: 'maxVisible', description: t('prop-maxVisible') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: '…rest', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-pagination-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-pagination-preview" :title="t('section-preview')">
    <DocsPreview>
      <nav class="bj-pagination" aria-label="Pagination">
        <button type="button" class="bj-pagination__nav bj-pagination__nav--disabled" disabled aria-label="Page précédente">
          <i class="ri-arrow-left-s-line" aria-hidden="true"></i>
        </button>
        <button type="button" class="bj-pagination__link bj-pagination__link--active" aria-current="page">1</button>
        <button type="button" class="bj-pagination__link">2</button>
        <button type="button" class="bj-pagination__link">3</button>
        <span class="bj-pagination__ellipsis" aria-hidden="true">...</span>
        <button type="button" class="bj-pagination__link">12</button>
        <button type="button" class="bj-pagination__nav" aria-label="Page suivante">
          <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
        </button>
      </nav>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-pagination-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
