<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjChart, BjChartLine } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjChartLine',
      desc: 'Graphique en lignes Vue : plusieurs séries, hauteur SVG, aire sous courbe, points et grille optionnels. Les libellés d’axe proviennent de la première série.',
      'section-usage': 'Utilisation',
      'section-baseline': 'Courbe simple',
      'section-area': 'Aire sous la courbe (showArea)',
      'section-no-dots': 'Sans points (showDots)',
      'section-no-grid': 'Sans grille (showGrid)',
      'section-height': 'Hauteur personnalisée',
      'section-multi': 'Plusieurs séries',
      'section-cross': 'Combinaison : aire + grille + hauteur',
      'section-props': 'Props',
      'desc-baseline': 'Par défaut : points et grille visibles, pas d’aire.',
      'desc-area': '<code class="bj-code">show-area</code> remplit la zone sous chaque série (opacité CSS).',
      'desc-no-dots': '<code class="bj-code">:show-dots="false"</code> conserve le tracé sans cercles.',
      'desc-no-grid': '<code class="bj-code">:show-grid="false"</code> supprime les lignes horizontales de fond.',
      'desc-height': '<code class="bj-code">height</code> contrôle le viewBox vertical du SVG (défaut 200).',
      'desc-multi': 'Chaque série partage le même axe X : les tableaux <code class="bj-code">data</code> doivent avoir les mêmes <code class="bj-code">label</code> dans le même ordre.',
      'desc-cross': 'Exemple avec aire, grille active, hauteur 240 px et deux séries.',
      "prop-series": "<code class=\"bj-code\">{'{'} name, color?, data: {'{'} label, value {'}'}[] {'}'}[]</code>.",
      'prop-height': 'Hauteur du SVG en px (défaut : 200).',
      'prop-showArea': 'Affiche le remplissage sous la ligne.',
      'prop-showDots': 'Affiche les points (défaut : <code class="bj-code">true</code>).',
      'prop-showGrid': 'Affiche la grille (défaut : <code class="bj-code">true</code>).',
      'prop-attrs': 'Attributs sur le conteneur <code class="bj-code">.bj-chart-line</code>.',
    },
    en: {
      title: 'BjChartLine',
      desc: 'Vue line chart: multiple series, SVG height, optional area, dots and grid. X-axis labels come from the first series.',
      'section-usage': 'Usage',
      'section-baseline': 'Simple line',
      'section-area': 'Area under the line (showArea)',
      'section-no-dots': 'Without dots (showDots)',
      'section-no-grid': 'Without grid (showGrid)',
      'section-height': 'Custom height',
      'section-multi': 'Multiple series',
      'section-cross': 'Combo: area + grid + height',
      'section-props': 'Props',
      'desc-baseline': 'Defaults: dots and grid on, no area fill.',
      'desc-area': '<code class="bj-code">show-area</code> fills the region under each series (CSS opacity).',
      'desc-no-dots': '<code class="bj-code">:show-dots="false"</code> keeps paths without circles.',
      'desc-no-grid': '<code class="bj-code">:show-grid="false"</code> removes horizontal guide lines.',
      'desc-height': '<code class="bj-code">height</code> sets the SVG viewBox height (default 200).',
      'desc-multi': 'Series share one X axis: each <code class="bj-code">data</code> array should use the same <code class="bj-code">label</code> sequence.',
      'desc-cross': 'Example with area, grid on, 240px height, and two series.',
      "prop-series": "<code class=\"bj-code\">{'{'} name, color?, data: {'{'} label, value {'}'}[] {'}'}[]</code>.",
      'prop-height': 'SVG height in px (default: 200).',
      'prop-showArea': 'Renders the area fill under the line.',
      'prop-showDots': 'Renders point markers (default: <code class="bj-code">true</code>).',
      'prop-showGrid': 'Renders horizontal grid lines (default: <code class="bj-code">true</code>).',
      'prop-attrs': 'Attributes on the <code class="bj-code">.bj-chart-line</code> wrapper.',
    },
  },
})

const seriesOne = [
  {
    name: 'Visiteurs',
    color: '#008751',
    data: [
      { label: 'Jan', value: 120 },
      { label: 'Fév', value: 90 },
      { label: 'Mar', value: 150 },
      { label: 'Avr', value: 110 },
    ],
  },
]

const seriesTwo = [
  {
    name: 'Entrées',
    color: '#008751',
    data: [
      { label: 'Lun', value: 12 },
      { label: 'Mar', value: 28 },
      { label: 'Mer', value: 18 },
    ],
  },
  {
    name: 'Sorties',
    color: '#E8112D',
    data: [
      { label: 'Lun', value: 8 },
      { label: 'Mar', value: 22 },
      { label: 'Mer', value: 24 },
    ],
  },
]

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

const codeNoDots = `<BjChartLine :series="series" :show-dots="false" />`
const codeNoGrid = `<BjChartLine :series="series" :show-grid="false" />`
const codeHeight = `<BjChartLine :series="series" :height="280" />`
const codeMulti = `<BjChartLine :series="seriesMulti" />`
const codeCross = `<BjChartLine
  :series="seriesMulti"
  show-area
  :height="240"
/>`

const propsRows = computed(() => [
  { name: 'series', description: t('prop-series') },
  { name: 'height', description: t('prop-height') },
  { name: 'showArea', description: t('prop-showArea') },
  { name: 'showDots', description: t('prop-showDots') },
  { name: 'showGrid', description: t('prop-showGrid') },
  { name: '…', description: t('prop-attrs') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-chart-line-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-line-baseline" :title="t('section-baseline')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-baseline')" />
    <DocsPreview>
      <BjChart title="Série simple" style="max-width: 32rem">
        <BjChartLine :series="seriesOne" />
      </BjChart>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-chart-line-area" :title="t('section-area')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-area')" />
    <DocsPreview>
      <BjChart title="Avec aire" style="max-width: 32rem">
        <BjChartLine :series="seriesOne" show-area />
      </BjChart>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-chart-line-no-dots" :title="t('section-no-dots')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-no-dots')" />
    <DocsPreview>
      <BjChart title="Sans points" style="max-width: 32rem">
        <BjChartLine :series="seriesOne" :show-dots="false" />
      </BjChart>
    </DocsPreview>
    <DocsCode :code="codeNoDots" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-line-no-grid" :title="t('section-no-grid')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-no-grid')" />
    <DocsPreview>
      <BjChart title="Sans grille" style="max-width: 32rem">
        <BjChartLine :series="seriesOne" :show-grid="false" />
      </BjChart>
    </DocsPreview>
    <DocsCode :code="codeNoGrid" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-line-height" :title="t('section-height')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-height')" />
    <DocsPreview>
      <BjChart title="Hauteur 280" style="max-width: 32rem">
        <BjChartLine :series="seriesOne" :height="280" />
      </BjChart>
    </DocsPreview>
    <DocsCode :code="codeHeight" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-line-multi" :title="t('section-multi')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-multi')" />
    <DocsPreview>
      <BjChart
        title="Deux séries"
        :legend="[
          { label: 'Entrées', color: '#008751' },
          { label: 'Sorties', color: '#E8112D' },
        ]"
        style="max-width: 32rem"
      >
        <BjChartLine :series="seriesTwo" />
      </BjChart>
    </DocsPreview>
    <DocsCode :code="codeMulti" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-line-cross" :title="t('section-cross')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-cross')" />
    <DocsPreview>
      <BjChart title="Combo" style="max-width: 32rem">
        <BjChartLine :series="seriesTwo" show-area :height="240" />
      </BjChart>
    </DocsPreview>
    <DocsCode :code="codeCross" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-line-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
