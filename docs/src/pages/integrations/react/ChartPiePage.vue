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
      title: 'BjChartPie',
      desc: 'Camembert / donut React : <code class="bj-code">data</code>, <code class="bj-code">donut</code>, <code class="bj-code">centerText</code>, <code class="bj-code">size</code> — aligné sur la version Vue.',
      'section-usage': 'Utilisation',
      'section-pie': 'Camembert plein',
      'section-donut': 'Donut + texte central',
      'section-size': 'Tailles',
      'section-colors': 'Couleurs',
      'section-cross': 'Combinaison',
      'section-props': 'Props',
      'desc-pie': 'Sans prop <code class="bj-code">donut</code>, disque plein.',
      'desc-donut': '<code class="bj-code">donut</code> et <code class="bj-code">centerText</code> ensemble pour le résumé au centre.',
      'desc-size': '<code class="bj-code">size</code> ajuste le viewBox carré.',
      'desc-colors': 'Chaque entrée fournit sa couleur de remplissage.',
      'desc-cross': 'Donut, libellé central et taille réduite.',
      'prop-data': 'Tranches avec <code class="bj-code">label</code>, <code class="bj-code">value</code>, <code class="bj-code">color</code>.',
      'prop-donut': 'Mode donut.',
      'prop-centerText': 'Texte central (donut).',
      'prop-size': 'Côté du viewBox (défaut 200).',
      'prop-div': 'Props sur le conteneur.',
    },
    en: {
      title: 'BjChartPie',
      desc: 'React pie / donut: <code class="bj-code">data</code>, <code class="bj-code">donut</code>, <code class="bj-code">centerText</code>, <code class="bj-code">size</code> — matches Vue.',
      'section-usage': 'Usage',
      'section-pie': 'Full pie',
      'section-donut': 'Donut + center text',
      'section-size': 'Sizes',
      'section-colors': 'Colors',
      'section-cross': 'Combination',
      'section-props': 'Props',
      'desc-pie': 'Omit <code class="bj-code">donut</code> for a solid pie.',
      'desc-donut': 'Pair <code class="bj-code">donut</code> with <code class="bj-code">centerText</code> for the inner label.',
      'desc-size': '<code class="bj-code">size</code> sets the square viewBox side.',
      'desc-colors': 'Each slice supplies its own fill color.',
      'desc-cross': 'Donut, center copy, and a smaller diameter.',
      'prop-data': 'Slices with <code class="bj-code">label</code>, <code class="bj-code">value</code>, <code class="bj-code">color</code>.',
      'prop-donut': 'Donut mode.',
      'prop-centerText': 'Center label (donut).',
      'prop-size': 'ViewBox side (default 200).',
      'prop-div': 'Extra wrapper props.',
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

const codePie = `<BjChartPie data={data} />`
const codeDonut = `<BjChartPie data={data} donut centerText="72%" />`
const codeSize = `<BjChartPie data={data} size={280} />`
const codeCross = `<BjChartPie data={data} donut centerText="Total" size={160} />`

const propsRows = computed(() => [
  { name: 'data', description: t('prop-data') },
  { name: 'donut', description: t('prop-donut') },
  { name: 'centerText', description: t('prop-centerText') },
  { name: 'size', description: t('prop-size') },
  { name: '…', description: t('prop-div') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)" v-html="t('desc')" />

  <DocsSection id="react-chart-pie-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-pie-pie" :title="t('section-pie')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-pie')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 22rem;">
        <div class="bj-chart__header"><p class="bj-chart__title">Camembert</p></div>
        <div class="bj-chart__body" style="min-height: 10rem">
          <div class="bj-chart-pie">
            <svg viewBox="0 0 200 200">
              <path class="bj-chart-pie__slice" fill="#008751" d="M100,100 L100,4 A96,96 0 0,1 178.4,148 Z" />
              <path class="bj-chart-pie__slice" fill="#FCD116" d="M100,100 L178.4,148 A96,96 0 0,1 21.6,148 Z" />
              <path class="bj-chart-pie__slice" fill="#E8112D" d="M100,100 L21.6,148 A96,96 0 1,1 100,4 Z" />
            </svg>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codePie" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-pie-donut" :title="t('section-donut')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-donut')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 22rem;">
        <div class="bj-chart__header"><p class="bj-chart__title">Donut</p></div>
        <div class="bj-chart__body" style="min-height: 10rem">
          <div class="bj-chart-pie bj-chart-pie--donut">
            <svg viewBox="0 0 200 200">
              <path class="bj-chart-pie__slice" fill="#008751" d="M100,100 L100,8 A92,92 0 0,1 184,100 L136,100 A44,44 0 0,0 100,56 Z" />
              <path class="bj-chart-pie__slice" fill="#FCD116" d="M100,100 L136,100 A44,44 0 0,0 136,144 L100,144 A44,44 0 0,1 100,100 Z" />
              <path class="bj-chart-pie__slice" fill="#E8112D" d="M100,100 L100,144 A44,44 0 0,0 64,100 L100,100 Z" />
              <text class="bj-chart-pie__center-text" x="100" y="100">100%</text>
            </svg>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDonut" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-pie-size" :title="t('section-size')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-size')" />
    <DocsPreview>
      <div style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-4v); align-items: flex-end;">
        <div class="bj-chart-pie" style="width: 8rem">
          <svg viewBox="0 0 120 120">
            <path class="bj-chart-pie__slice" fill="#008751" d="M60,60 L60,8 A52,52 0 0,1 108,60 L84,60 A28,28 0 0,0 60,36 Z" />
            <path class="bj-chart-pie__slice" fill="#E8112D" d="M60,60 L84,60 A28,28 0 0,0 60,96 L60,60 Z" />
          </svg>
        </div>
        <div class="bj-chart-pie" style="width: 14rem">
          <svg viewBox="0 0 200 200">
            <path class="bj-chart-pie__slice" fill="#008751" d="M100,100 L100,4 A96,96 0 0,1 178.4,148 Z" />
            <path class="bj-chart-pie__slice" fill="#FCD116" d="M100,100 L178.4,148 A96,96 0 0,1 21.6,148 Z" />
            <path class="bj-chart-pie__slice" fill="#E8112D" d="M100,100 L21.6,148 A96,96 0 1,1 100,4 Z" />
          </svg>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSize" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-pie-colors" :title="t('section-colors')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-colors')" />
    <DocsPreview>
      <div class="bj-chart-pie bj-chart-pie--donut" style="width: 12rem">
        <svg viewBox="0 0 200 200">
          <path class="bj-chart-pie__slice" fill="#0B5567" d="M100,100 L100,8 A92,92 0 0,1 184,100 L136,100 A44,44 0 0,0 100,56 Z" />
          <path class="bj-chart-pie__slice" fill="#C45C26" d="M100,100 L136,100 A44,44 0 0,0 136,144 L100,144 A44,44 0 0,1 100,100 Z" />
          <path class="bj-chart-pie__slice" fill="#6B4C9A" d="M100,100 L100,144 A44,44 0 0,0 64,100 L100,100 Z" />
          <text class="bj-chart-pie__center-text" x="100" y="100">100%</text>
        </svg>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-chart-pie-cross" :title="t('section-cross')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-cross')" />
    <DocsPreview>
      <div class="bj-chart-pie bj-chart-pie--donut" style="width: 10rem">
        <svg viewBox="0 0 160 160">
          <path class="bj-chart-pie__slice" fill="#008751" d="M80,80 L80,8 A72,72 0 0,1 146,80 L112,80 A36,36 0 0,0 80,48 Z" />
          <path class="bj-chart-pie__slice" fill="#FCD116" d="M80,80 L112,80 A36,36 0 0,0 112,116 L80,116 A36,36 0 0,1 80,80 Z" />
          <path class="bj-chart-pie__slice" fill="#E8112D" d="M80,80 L80,116 A36,36 0 0,0 48,80 L80,80 Z" />
          <text class="bj-chart-pie__center-text" x="80" y="80" style="font-size: 14px">Total</text>
        </svg>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCross" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-pie-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
