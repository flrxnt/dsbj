<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjPagination } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjPagination',
      desc: 'Pagination contrôlée : v-model (page 1-based), total, perPage (défaut 10), maxVisible (défaut 5). Émission update:modelValue à chaque changement de page valide.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-v-model': 'v-model interactif',
      'section-per-page': 'perPage',
      'section-max-visible': 'maxVisible',
      'section-events': 'Événement update:modelValue',
      'section-edge-first': 'Première page (précédent désactivé)',
      'section-edge-last': 'Dernière page (suivant désactivé)',
      'prop-modelValue': 'Page courante (1-based).',
      'prop-total': 'Nombre total d’éléments à paginer.',
      'prop-perPage': 'Nombre d’éléments par page (défaut : 10).',
      'prop-maxVisible': 'Nombre maximal de numéros de page affichés dans la fenêtre (défaut : 5).',
      'events-desc':
        'Utilisez <code>v-model</code> ou <code>{\'@\'}update:modelValue</code> pour réagir aux changements de page.',
      'label-per-page-5': 'perPage 5',
      'label-per-page-10': 'perPage 10',
      'label-per-page-25': 'perPage 25',
      'label-max-3': 'maxVisible 3',
      'label-max-5': 'maxVisible 5',
      'label-max-7': 'maxVisible 7',
      'aria-pagination': 'Pagination',
      'aria-prev': 'Page précédente',
      'aria-next': 'Page suivante',
    },
    en: {
      title: 'BjPagination',
      desc: 'Controlled pagination: v-model (1-based page), total, perPage (default 10), maxVisible (default 5). Emits update:modelValue on each valid page change.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-v-model': 'Interactive v-model',
      'section-per-page': 'perPage',
      'section-max-visible': 'maxVisible',
      'section-events': 'update:modelValue event',
      'section-edge-first': 'First page (prev disabled)',
      'section-edge-last': 'Last page (next disabled)',
      'prop-modelValue': 'Current page (1-based).',
      'prop-total': 'Total number of items to paginate.',
      'prop-perPage': 'Items per page (default: 10).',
      'prop-maxVisible': 'Maximum page numbers shown in the sliding window (default: 5).',
      'events-desc':
        'Use <code>v-model</code> or <code>{\'@\'}update:modelValue</code> to react to page changes.',
      'label-per-page-5': 'perPage 5',
      'label-per-page-10': 'perPage 10',
      'label-per-page-25': 'perPage 25',
      'label-max-3': 'maxVisible 3',
      'label-max-5': 'maxVisible 5',
      'label-max-7': 'maxVisible 7',
      'aria-pagination': 'Pagination',
      'aria-prev': 'Previous page',
      'aria-next': 'Next page',
    },
  },
})

const pageInteractive = ref(3)
const pageFirst = ref(1)
const pageLast = ref(9)

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjPagination } from '@flrxnt/dsbj/vue'

const page = ref(1)
<\/script>

<template>
  <BjPagination v-model="page" :total="87" :per-page="10" :max-visible="5" />
</template>`

const codeEmit = `<BjPagination
  :model-value="page"
  :total="100"
  @update:model-value="(p) => { page = p; log(p) }"
/>`

const codePerPage5 = `<BjPagination v-model="page" :total="100" :per-page="5" />`
const codePerPage25 = `<BjPagination v-model="page" :total="100" :per-page="25" />`
const codeMax3 = `<BjPagination v-model="page" :total="200" :per-page="10" :max-visible="3" />`
const codeMax7 = `<BjPagination v-model="page" :total="200" :per-page="10" :max-visible="7" />`

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
      <BjPagination v-model="pageInteractive" :total="87" :per-page="10" :max-visible="5" :aria-label="t('aria-pagination')" />
      <p class="bj-text-sm" style="margin-top: var(--bj-spacing-2v)">page = {{ pageInteractive }}</p>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-pagination-v-model" :title="t('section-v-model')">
    <DocsPreview>
      <BjPagination v-model="pageInteractive" :total="120" :per-page="10" :max-visible="5" />
      <p class="bj-text-sm" style="margin-top: var(--bj-spacing-2v)">page = {{ pageInteractive }}</p>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-pagination-per-page" :title="t('section-per-page')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v)">
      <div>
        <p class="bj-text-sm" style="margin-bottom: var(--bj-spacing-1v)">{{ t('label-per-page-5') }} — total 47</p>
        <BjPagination :model-value="2" :total="47" :per-page="5" @update:model-value="() => {}" />
      </div>
      <div>
        <p class="bj-text-sm" style="margin-bottom: var(--bj-spacing-1v)">{{ t('label-per-page-10') }} — total 47</p>
        <BjPagination :model-value="2" :total="47" :per-page="10" @update:model-value="() => {}" />
      </div>
      <div>
        <p class="bj-text-sm" style="margin-bottom: var(--bj-spacing-1v)">{{ t('label-per-page-25') }} — total 47</p>
        <BjPagination :model-value="1" :total="47" :per-page="25" @update:model-value="() => {}" />
      </div>
    </DocsPreview>
    <DocsCode :code="`${codePerPage5}\n${codePerPage25}`" lang="html" />
  </DocsSection>

  <DocsSection id="vue-pagination-max-visible" :title="t('section-max-visible')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v)">
      <div>
        <p class="bj-text-sm" style="margin-bottom: var(--bj-spacing-1v)">{{ t('label-max-3') }}, page 5, total 200</p>
        <BjPagination :model-value="5" :total="200" :per-page="10" :max-visible="3" @update:model-value="() => {}" />
      </div>
      <div>
        <p class="bj-text-sm" style="margin-bottom: var(--bj-spacing-1v)">{{ t('label-max-5') }}, page 5</p>
        <BjPagination :model-value="5" :total="200" :per-page="10" :max-visible="5" @update:model-value="() => {}" />
      </div>
      <div>
        <p class="bj-text-sm" style="margin-bottom: var(--bj-spacing-1v)">{{ t('label-max-7') }}, page 5</p>
        <BjPagination :model-value="5" :total="200" :per-page="10" :max-visible="7" @update:model-value="() => {}" />
      </div>
    </DocsPreview>
    <DocsCode :code="`${codeMax3}\n${codeMax7}`" lang="html" />
  </DocsSection>

  <DocsSection id="vue-pagination-events" :title="t('section-events')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)" v-html="t('events-desc')" />
    <DocsCode :code="codeEmit" lang="html" />
  </DocsSection>

  <DocsSection id="vue-pagination-edge-first" :title="t('section-edge-first')">
    <DocsPreview>
      <BjPagination v-model="pageFirst" :total="100" :per-page="10" />
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-pagination-edge-last" :title="t('section-edge-last')">
    <DocsPreview>
      <BjPagination v-model="pageLast" :total="87" :per-page="10" />
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-pagination-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
