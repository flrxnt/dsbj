<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjChart, BjChartPie } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjChartPie',
      desc: 'Camembert ou donut Vue : parts proportionnelles, <code class="bj-code">centerText</code> uniquement avec <code class="bj-code">donut</code>, taille SVG <code class="bj-code">size</code>. Chaque tranche exige <code class="bj-code">color</code>.',
      'section-usage': 'Utilisation',
      'section-pie': 'Camembert plein',
      'section-donut': 'Donut et texte central',
      'section-size': 'Tailles différentes',
      'section-colors': 'Couleurs personnalisées',
      'section-cross': 'Combinaison : donut + centerText + size',
      'section-props': 'Props',
      'desc-pie': 'Sans <code class="bj-code">donut</code>, le graphique est un disque plein ; <code class="bj-code">centerText</code> n’est pas affiché.',
      'desc-donut': 'Avec <code class="bj-code">donut</code>, le trou intérieur apparaît et <code class="bj-code">center-text</code> peut résumer un total ou un pourcentage.',
      'desc-size': '<code class="bj-code">size</code> règle le viewBox du SVG (défaut 200) ; le rendu reste responsive via CSS.',
      'desc-colors': 'Les couleurs sont entièrement contrôlées par les données (palette métier ou design system).',
      'desc-cross': 'Exemple donut avec libellé central et <code class="bj-code">size="160"</code>.',
      "prop-data": "<code class=\"bj-code\">{'{'} label, value, color {'}'}[]</code> — <code class=\"bj-code\">color</code> requis pour le rendu.",
      'prop-donut': 'Active <code class="bj-code">bj-chart-pie--donut</code>.',
      'prop-centerText': 'Texte au centre (uniquement si <code class="bj-code">donut</code> est vrai).',
      'prop-size': 'Côté du viewBox carré (défaut : 200).',
      'prop-attrs': 'Attributs sur le conteneur <code class="bj-code">.bj-chart-pie</code>.',
    },
    en: {
      title: 'BjChartPie',
      desc: 'Vue pie or donut: proportional slices, <code class="bj-code">centerText</code> only with <code class="bj-code">donut</code>, SVG <code class="bj-code">size</code>. Each slice requires <code class="bj-code">color</code>.',
      'section-usage': 'Usage',
      'section-pie': 'Full pie',
      'section-donut': 'Donut and center label',
      'section-size': 'Different sizes',
      'section-colors': 'Custom colors',
      'section-cross': 'Combo: donut + centerText + size',
      'section-props': 'Props',
      'desc-pie': 'Without <code class="bj-code">donut</code>, the chart is a solid disk; <code class="bj-code">centerText</code> is ignored.',
      'desc-donut': 'With <code class="bj-code">donut</code>, the inner hole appears and <code class="bj-code">center-text</code> can show a total or share.',
      'desc-size': '<code class="bj-code">size</code> sets the square viewBox (default 200); CSS keeps it responsive.',
      'desc-colors': 'Colors are fully data-driven (brand or palette).',
      'desc-cross': 'Donut example with a center label and <code class="bj-code">size="160"</code>.',
      "prop-data": "<code class=\"bj-code\">{'{'} label, value, color {'}'}[]</code> — <code class=\"bj-code\">color</code> required.",
      'prop-donut': 'Enables <code class="bj-code">bj-chart-pie--donut</code>.',
      'prop-centerText': 'Center copy (only when <code class="bj-code">donut</code> is true).',
      'prop-size': 'Square viewBox side length (default: 200).',
      'prop-attrs': 'Attributes on the <code class="bj-code">.bj-chart-pie</code> wrapper.',
    },
  },
})

const dataTraffic = [
  { label: 'Direct', value: 45, color: '#008751' },
  { label: 'Recherche', value: 30, color: '#FCD116' },
  { label: 'Réseaux', value: 25, color: '#E8112D' },
]

const dataAlt = [
  { label: 'A', value: 50, color: '#0B5567' },
  { label: 'B', value: 30, color: '#C45C26' },
  { label: 'C', value: 20, color: '#6B4C9A' },
]

const codeUsage = `<script setup>
import { BjChart, BjChartPie } from '@flrxnt/dsbj/vue'

const data = [
  { label: 'Direct', value: 45, color: '#008751' },
  { label: 'Recherche', value: 30, color: '#FCD116' },
  { label: 'Réseaux', value: 25, color: '#E8112D' },
]
<\/script>

<template>
  <BjChart title="Sources de trafic">
    <BjChartPie :data="data" donut center-text="100%" />
  </BjChart>
</template>`

const codePie = `<BjChartPie :data="data" />`
const codeDonut = `<BjChartPie :data="data" donut center-text="72%" />`
const codeSize = `<BjChartPie :data="data" :size="280" />`
const codeCross = `<BjChartPie
  :data="data"
  donut
  center-text="Total"
  :size="160"
/>`

const propsRows = computed(() => [
  { name: 'data', description: t('prop-data') },
  { name: 'donut', description: t('prop-donut') },
  { name: 'centerText', description: t('prop-centerText') },
  { name: 'size', description: t('prop-size') },
  { name: '…', description: t('prop-attrs') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)" v-html="t('desc')" />

  <DocsSection id="vue-chart-pie-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-pie-pie" :title="t('section-pie')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-pie')" />
    <DocsPreview>
      <BjChart title="Camembert" style="max-width: 22rem">
        <BjChartPie :data="dataTraffic" />
      </BjChart>
    </DocsPreview>
    <DocsCode :code="codePie" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-pie-donut" :title="t('section-donut')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-donut')" />
    <DocsPreview>
      <BjChart title="Donut" style="max-width: 22rem">
        <BjChartPie :data="dataTraffic" donut center-text="100%" />
      </BjChart>
    </DocsPreview>
    <DocsCode :code="codeDonut" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-pie-size" :title="t('section-size')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-size')" />
    <DocsPreview>
      <div style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-4v); align-items: flex-end;">
        <BjChart title="size 120" style="max-width: 16rem">
          <BjChartPie :data="dataTraffic" :size="120" />
        </BjChart>
        <BjChart title="size 280" style="max-width: 22rem">
          <BjChartPie :data="dataTraffic" :size="280" />
        </BjChart>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSize" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-pie-colors" :title="t('section-colors')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-colors')" />
    <DocsPreview>
      <BjChart title="Palette alternative" style="max-width: 22rem">
        <BjChartPie :data="dataAlt" donut center-text="100%" />
      </BjChart>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-chart-pie-cross" :title="t('section-cross')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-cross')" />
    <DocsPreview>
      <BjChart title="Donut compact" style="max-width: 18rem">
        <BjChartPie :data="dataTraffic" donut center-text="Total" :size="160" />
      </BjChart>
    </DocsPreview>
    <DocsCode :code="codeCross" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-pie-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
