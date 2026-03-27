<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjChartPie',
      desc: 'Graphique camembert/donut React en SVG natif.',
      'section-usage': 'Utilisation',
      'section-props': 'Props',
      'prop-data': 'Tableau de tranches avec label, value et color.',
      'prop-donut': 'Mode donut (trou au centre).',
      'prop-centerText': 'Texte au centre (donut uniquement).',
      'prop-size': 'Taille SVG en pixels (défaut : 200).',
      'prop-div': 'Attributs div natifs supplémentaires.',
    },
    en: {
      title: 'BjChartPie',
      desc: 'React pie/donut chart in native SVG.',
      'section-usage': 'Usage',
      'section-props': 'Props',
      'prop-data': 'Array of slices with label, value and color.',
      'prop-donut': 'Donut mode (center hole).',
      'prop-centerText': 'Center text (donut only).',
      'prop-size': 'SVG size in pixels (default: 200).',
      'prop-div': 'Extra native div attributes are forwarded.',
    },
  },
})

const codeUsage = `import { BjChart, BjChartPie } from '@flrxnt/dsbj/react'

const data = [
  { label: 'Direct', value: 45, color: '#008751' },
  { label: 'Recherche', value: 30, color: '#FCD116' },
  { label: 'Réseaux', value: 25, color: '#E8112D' },
]

export function Example() {
  return (
    <BjChart title="Sources de trafic">
      <BjChartPie data={data} donut centerText="100%" />
    </BjChart>
  )
}`

const propsRows = computed(() => [
  { name: 'data', description: t('prop-data') },
  { name: 'donut', description: t('prop-donut') },
  { name: 'centerText', description: t('prop-centerText') },
  { name: 'size', description: t('prop-size') },
  { name: '(div props)', description: t('prop-div') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-chart-pie-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-pie-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
