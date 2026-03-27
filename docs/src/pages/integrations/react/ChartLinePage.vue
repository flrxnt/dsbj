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
      title: 'BjChartLine',
      desc: 'Courbes React : props alignées sur Vue — <code class="bj-code">series</code>, <code class="bj-code">height</code>, <code class="bj-code">showArea</code>, <code class="bj-code">showDots</code>, <code class="bj-code">showGrid</code>.',
      'section-usage': 'Utilisation',
      'section-baseline': 'Courbe simple',
      'section-area': 'Aire (showArea)',
      'section-no-dots': 'Sans points',
      'section-no-grid': 'Sans grille',
      'section-height': 'Hauteur',
      'section-multi': 'Plusieurs séries',
      'section-cross': 'Combinaison',
      'section-props': 'Props',
      'desc-baseline': 'Points et grille activés par défaut.',
      'desc-area': 'Prop <code class="bj-code">showArea</code> pour le remplissage semi-transparent.',
      "desc-no-dots": "<code class=\"bj-code\">showDots={'{'}false{'}'}</code>.",
      "desc-no-grid": "<code class=\"bj-code\">showGrid={'{'}false{'}'}</code>.",
      "desc-height": "<code class=\"bj-code\">height={'{'}280{'}'}</code> (nombre, pixels du viewBox).",
      'desc-multi': 'Plusieurs <code class="bj-code">&lt;g&gt;</code> sont rendus ; même jeu de labels sur chaque série.',
      'desc-cross': 'Aire + hauteur 240 + deux séries.',
      'prop-series': 'Tableau de séries typées.',
      'prop-height': 'Hauteur SVG (défaut 200).',
      'prop-showArea': 'Aire sous les lignes.',
      'prop-showDots': 'Points (défaut true).',
      'prop-showGrid': 'Grille (défaut true).',
      'prop-div': 'Props supplémentaires sur le conteneur.',
    },
    en: {
      title: 'BjChartLine',
      desc: 'React line chart: same props as Vue — <code class="bj-code">series</code>, <code class="bj-code">height</code>, <code class="bj-code">showArea</code>, <code class="bj-code">showDots</code>, <code class="bj-code">showGrid</code>.',
      'section-usage': 'Usage',
      'section-baseline': 'Simple line',
      'section-area': 'Area (showArea)',
      'section-no-dots': 'No dots',
      'section-no-grid': 'No grid',
      'section-height': 'Height',
      'section-multi': 'Multiple series',
      'section-cross': 'Combination',
      'section-props': 'Props',
      'desc-baseline': 'Dots and grid default to on.',
      'desc-area': 'Use <code class="bj-code">showArea</code> for the translucent fill.',
      "desc-no-dots": "<code class=\"bj-code\">showDots={'{'}false{'}'}</code>.",
      "desc-no-grid": "<code class=\"bj-code\">showGrid={'{'}false{'}'}</code>.",
      "desc-height": "<code class=\"bj-code\">height={'{'}280{'}'}</code> (number, viewBox px).",
      'desc-multi': 'Each series renders as an SVG group; keep label arrays aligned.',
      'desc-cross': 'Area + 240px height + two series.',
      'prop-series': 'Typed series array.',
      'prop-height': 'SVG height (default 200).',
      'prop-showArea': 'Area fill under lines.',
      'prop-showDots': 'Point markers (default true).',
      'prop-showGrid': 'Horizontal guides (default true).',
      'prop-div': 'Extra props on the wrapper div.',
    },
  },
})

const codeUsage = `import { BjChart, BjChartLine } from '@flrxnt/dsbj/react'

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

export function Example() {
  return (
    <BjChart title="Tendances">
      <BjChartLine series={series} showArea />
    </BjChart>
  )
}`

const codeNoDots = `<BjChartLine series={series} showDots={false} />`
const codeNoGrid = `<BjChartLine series={series} showGrid={false} />`
const codeHeight = `<BjChartLine series={series} height={280} />`
const codeMulti = `<BjChartLine series={seriesMulti} />`
const codeCross = `<BjChartLine series={seriesMulti} showArea height={240} />`

const propsRows = computed(() => [
  { name: 'series', description: t('prop-series') },
  { name: 'height', description: t('prop-height') },
  { name: 'showArea', description: t('prop-showArea') },
  { name: 'showDots', description: t('prop-showDots') },
  { name: 'showGrid', description: t('prop-showGrid') },
  { name: '…', description: t('prop-div') },
])

const svgArea = `<path class="bj-chart-line__area" style="fill: #008751" d="M40,170 L40,60 L220,100 L400,40 L400,170 Z" />`

const svgTwoSeries = `<!-- Deux couleurs de tracé -->
<g>
  <path class="bj-chart-line__path" style="stroke: #008751" d="M40,120 L220,80 L400,100" />
</g>
<g>
  <path class="bj-chart-line__path" style="stroke: #E8112D" d="M40,140 L220,130 L400,60" />
</g>`
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)" v-html="t('desc')" />

  <DocsSection id="react-chart-line-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-line-baseline" :title="t('section-baseline')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-baseline')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 32rem;">
        <div class="bj-chart__body" style="min-height: 10rem">
          <div class="bj-chart-line">
            <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
              <line class="bj-chart-line__grid" x1="40" y1="47.5" x2="390" y2="47.5" />
              <line class="bj-chart-line__grid" x1="40" y1="95" x2="390" y2="95" />
              <path class="bj-chart-line__path" style="stroke: #008751" d="M40,60 L220,100 L400,40" />
              <circle class="bj-chart-line__dot" cx="40" cy="60" style="stroke: #008751" />
              <circle class="bj-chart-line__dot" cx="220" cy="100" style="stroke: #008751" />
              <circle class="bj-chart-line__dot" cx="400" cy="40" style="stroke: #008751" />
              <text class="bj-chart-line__axis" x="40" y="192" text-anchor="middle">Jan</text>
              <text class="bj-chart-line__axis" x="220" y="192" text-anchor="middle">Mar</text>
              <text class="bj-chart-line__axis" x="390" y="192" text-anchor="middle">Mai</text>
            </svg>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-chart-line-area" :title="t('section-area')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-area')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 32rem;">
        <div class="bj-chart__body" style="min-height: 10rem">
          <div class="bj-chart-line">
            <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
              <line class="bj-chart-line__grid" x1="40" y1="95" x2="390" y2="95" />
              <path class="bj-chart-line__area" style="fill: #008751" d="M40,170 L40,60 L220,100 L400,40 L400,170 Z" />
              <path class="bj-chart-line__path" style="stroke: #008751" d="M40,60 L220,100 L400,40" />
            </svg>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="svgArea" lang="html" />
  </DocsSection>

  <DocsSection id="react-chart-line-no-dots" :title="t('section-no-dots')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-no-dots')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 32rem;">
        <div class="bj-chart__body" style="min-height: 10rem">
          <div class="bj-chart-line">
            <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
              <path class="bj-chart-line__path" style="stroke: #008751" d="M40,80 L220,40 L400,120" />
            </svg>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeNoDots" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-line-no-grid" :title="t('section-no-grid')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-no-grid')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 32rem;">
        <div class="bj-chart__body" style="min-height: 10rem">
          <div class="bj-chart-line">
            <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
              <path class="bj-chart-line__path" style="stroke: #008751" d="M40,100 L220,50 L400,90" />
              <circle class="bj-chart-line__dot" cx="40" cy="100" style="stroke: #008751" />
              <circle class="bj-chart-line__dot" cx="220" cy="50" style="stroke: #008751" />
              <circle class="bj-chart-line__dot" cx="400" cy="90" style="stroke: #008751" />
            </svg>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeNoGrid" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-line-height" :title="t('section-height')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-height')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 32rem;">
        <div class="bj-chart__body" style="min-height: 12rem">
          <div class="bj-chart-line">
            <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet">
              <line class="bj-chart-line__grid" x1="40" y1="70" x2="390" y2="70" />
              <path class="bj-chart-line__path" style="stroke: #008751" d="M40,100 L220,40 L400,80" />
            </svg>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeHeight" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-line-multi" :title="t('section-multi')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-multi')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 32rem;">
        <div class="bj-chart__body" style="min-height: 10rem">
          <div class="bj-chart-line">
            <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
              <line class="bj-chart-line__grid" x1="40" y1="95" x2="390" y2="95" />
              <path class="bj-chart-line__path" style="stroke: #008751" d="M40,120 L220,80 L400,100" />
              <path class="bj-chart-line__path" style="stroke: #E8112D" d="M40,140 L220,130 L400,60" />
            </svg>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMulti" lang="tsx" />
    <DocsCode :code="svgTwoSeries" lang="html" />
  </DocsSection>

  <DocsSection id="react-chart-line-cross" :title="t('section-cross')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-cross')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 32rem;">
        <div class="bj-chart__body" style="min-height: 11rem">
          <div class="bj-chart-line">
            <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet">
              <line class="bj-chart-line__grid" x1="40" y1="60" x2="390" y2="60" />
              <line class="bj-chart-line__grid" x1="40" y1="120" x2="390" y2="120" />
              <path class="bj-chart-line__area" style="fill: #008751; opacity: 0.35" d="M40,200 L40,100 L220,140 L400,80 L400,200 Z" />
              <path class="bj-chart-line__path" style="stroke: #008751" d="M40,100 L220,140 L400,80" />
              <path class="bj-chart-line__area" style="fill: #E8112D; opacity: 0.2" d="M40,200 L40,160 L220,170 L400,50 L400,200 Z" />
              <path class="bj-chart-line__path" style="stroke: #E8112D" d="M40,160 L220,170 L400,50" />
            </svg>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCross" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-line-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
