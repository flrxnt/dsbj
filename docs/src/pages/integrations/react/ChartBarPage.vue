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
      title: 'BjChartBar',
      desc: 'Graphique en barres React avec mode vertical et horizontal.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-data': 'Tableau d\'items avec label, value et color optionnel.',
      'prop-horizontal': 'Mode barres horizontales.',
      'prop-maxValue': 'Valeur max de l\'échelle.',
      'prop-showValues': 'Afficher les valeurs (défaut : true).',
      'prop-div': 'Attributs div natifs supplémentaires.',
    },
    en: {
      title: 'BjChartBar',
      desc: 'React bar chart with vertical and horizontal mode.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-data': 'Array of items with label, value and optional color.',
      'prop-horizontal': 'Horizontal bars mode.',
      'prop-maxValue': 'Max scale value.',
      'prop-showValues': 'Show values (default: true).',
      'prop-div': 'Extra native div attributes are forwarded.',
    },
  },
})

const codeUsage = `import { BjChart, BjChartBar } from '@flrxnt/dsbj/react'

const data = [
  { label: 'Jan', value: 120, color: '#008751' },
  { label: 'Fév', value: 90, color: '#FCD116' },
  { label: 'Mar', value: 150, color: '#E8112D' },
]

export function Example() {
  return (
    <BjChart title="Visiteurs">
      <BjChartBar data={data} />
    </BjChart>
  )
}`

const propsRows = computed(() => [
  { name: 'data', description: t('prop-data') },
  { name: 'horizontal', description: t('prop-horizontal') },
  { name: 'maxValue', description: t('prop-maxValue') },
  { name: 'showValues', description: t('prop-showValues') },
  { name: '(div props)', description: t('prop-div') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-chart-bar-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-bar-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-chart" style="max-width: 28rem;">
        <div class="bj-chart__header"><p class="bj-chart__title">Visiteurs</p></div>
        <div class="bj-chart__body">
          <div class="bj-chart-bar" role="img" style="height: 10rem;">
            <div class="bj-chart-bar__col">
              <span class="bj-chart-bar__value">120</span>
              <div class="bj-chart-bar__bar-area">
                <div class="bj-chart-bar__bar" style="height: 80%; background-color: #008751;"></div>
              </div>
              <span class="bj-chart-bar__label">Jan</span>
            </div>
            <div class="bj-chart-bar__col">
              <span class="bj-chart-bar__value">90</span>
              <div class="bj-chart-bar__bar-area">
                <div class="bj-chart-bar__bar" style="height: 60%; background-color: #FCD116;"></div>
              </div>
              <span class="bj-chart-bar__label">Fév</span>
            </div>
            <div class="bj-chart-bar__col">
              <span class="bj-chart-bar__value">150</span>
              <div class="bj-chart-bar__bar-area">
                <div class="bj-chart-bar__bar" style="height: 100%; background-color: #E8112D;"></div>
              </div>
              <span class="bj-chart-bar__label">Mar</span>
            </div>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-chart-bar-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
