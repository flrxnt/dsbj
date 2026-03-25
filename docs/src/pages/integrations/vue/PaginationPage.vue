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
      desc: 'Pagination contrôlée par v-model (numéro de page), avec total d’éléments et taille de page.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-modelValue': 'Page courante (1-based).',
      'prop-total': 'Nombre total d’éléments à paginer.',
      'prop-perPage': 'Nombre d’éléments par page (défaut : 10).',
      'prop-maxVisible': 'Nombre maximal de numéros de page visibles (défaut : 5).',
      'aria-pagination': 'Pagination',
      'aria-prev': 'Page précédente',
      'aria-next': 'Page suivante',
    },
    en: {
      title: 'BjPagination',
      desc: 'Pagination controlled with v-model (page number), total item count, and page size.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-modelValue': 'Current page (1-based).',
      'prop-total': 'Total number of items to paginate.',
      'prop-perPage': 'Items per page (default: 10).',
      'prop-maxVisible': 'Maximum number of visible page numbers (default: 5).',
      'aria-pagination': 'Pagination',
      'aria-prev': 'Previous page',
      'aria-next': 'Next page',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjPagination } from '@flrxnt/dsbj/vue'

const page = ref(1)
<\/script>

<template>
  <BjPagination v-model="page" :total="87" :per-page="10" :max-visible="5" />
</template>`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'total', description: t('prop-total') },
  { name: 'perPage', description: t('prop-perPage') },
  { name: 'maxVisible', description: t('prop-maxVisible') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-pagination-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-pagination-preview" :title="t('section-preview')">
    <DocsPreview>
      <nav class="bj-pagination" :aria-label="t('aria-pagination')">
        <button type="button" class="bj-pagination__nav bj-pagination__nav--disabled" disabled :aria-label="t('aria-prev')">
          <i class="ri-arrow-left-s-line" aria-hidden="true" />
        </button>
        <button type="button" class="bj-pagination__link bj-pagination__link--active" aria-current="page">1</button>
        <button type="button" class="bj-pagination__link">2</button>
        <button type="button" class="bj-pagination__link">3</button>
        <span class="bj-pagination__ellipsis">...</span>
        <button type="button" class="bj-pagination__link">8</button>
        <button type="button" class="bj-pagination__nav" :aria-label="t('aria-next')">
          <i class="ri-arrow-right-s-line" aria-hidden="true" />
        </button>
      </nav>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-pagination-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
