<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjChartLine',
      desc: 'Graphique en lignes Vue avec séries multiples, aire, points et grille optionnels.',
      'section-usage': 'Utilisation',
      'section-props': 'Props',
      'prop-series': 'Tableau de séries avec name, color et data (label + value).',
      'prop-height': 'Hauteur du SVG en pixels (défaut : 200).',
      'prop-showArea': 'Afficher l\'aire sous la courbe.',
      'prop-showDots': 'Afficher les points (défaut : true).',
      'prop-showGrid': 'Afficher la grille (défaut : true).',
    },
    en: {
      title: 'BjChartLine',
      desc: 'Vue line chart with multiple series, optional area, dots and grid.',
      'section-usage': 'Usage',
      'section-props': 'Props',
      'prop-series': 'Array of series with name, color and data (label + value).',
      'prop-height': 'SVG height in pixels (default: 200).',
      'prop-showArea': 'Show area under the curve.',
      'prop-showDots': 'Show dots (default: true).',
      'prop-showGrid': 'Show grid (default: true).',
    },
  },
})

const codeUsage = `<script setup>
import { BjChart, BjChartLine } from '@flrxnt/dsbj/vue'

const series = [
  {
    name: 'Visiteurs',
    color: '#008751',
    data: [
      { label: 'Jan', value: 120 },
      { label: 'Fév', value: 90 },
      { label: 'Mar', value: 150 },
    ],
  },
]
<\/script>

<template>
  <BjChart title="Tendances">
    <BjChartLine :series="series" show-area />
  </BjChart>
</template>`

const propsRows = computed(() => [
  { name: 'series', description: t('prop-series') },
  { name: 'height', description: t('prop-height') },
  { name: 'showArea', description: t('prop-showArea') },
  { name: 'showDots', description: t('prop-showDots') },
  { name: 'showGrid', description: t('prop-showGrid') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-chart-line-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-line-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
