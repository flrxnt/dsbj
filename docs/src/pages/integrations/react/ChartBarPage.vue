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
      desc: 'Graphique en barres React : mêmes props que la version Vue (<code class="bj-code">data</code>, <code class="bj-code">horizontal</code>, <code class="bj-code">maxValue</code>, <code class="bj-code">showValues</code>).',
      'section-usage': 'Utilisation',
      'section-vertical': 'Barres verticales et couleurs',
      'section-horizontal': 'Barres horizontales',
      'section-show-values': 'Sans valeurs affichées',
      'section-max': 'Échelle maxValue',
      'section-cross': 'Combinaison : horizontal + maxValue + showValues',
      'section-props': 'Props',
      'desc-vertical': 'Passez un tableau d’objets avec <code class="bj-code">color</code> optionnel pour surcharger la couleur de thème.',
      'desc-horizontal': 'Prop booléenne <code class="bj-code">horizontal</code> pour la variante rangées / piste.',
      'desc-show-values': '<code class="bj-code">showValues={false}</code> masque les nombres.',
      'desc-max': '<code class="bj-code">maxValue</code> force le dénominateur des pourcentages.',
      'desc-cross': 'Les trois options peuvent se combiner sur un seul <code class="bj-code">&lt;BjChartBar /&gt;</code>.',
      'prop-data': 'Tableau <code class="bj-code">BjChartBarItem[]</code>.',
      'prop-horizontal': 'Barres horizontales.',
      'prop-maxValue': 'Maximum d’échelle (optionnel).',
      'prop-showValues': 'Affiche les valeurs (défaut <code class="bj-code">true</code>).',
      'prop-div': 'Autres attributs du <code class="bj-code">&lt;div&gt;</code> racine.',
    },
    en: {
      title: 'BjChartBar',
      desc: 'React bar chart: same props as Vue (<code class="bj-code">data</code>, <code class="bj-code">horizontal</code>, <code class="bj-code">maxValue</code>, <code class="bj-code">showValues</code>).',
      'section-usage': 'Usage',
      'section-vertical': 'Vertical bars and colors',
      'section-horizontal': 'Horizontal bars',
      'section-show-values': 'Hidden values',
      'section-max': 'maxValue scale',
      'section-cross': 'Combo: horizontal + maxValue + showValues',
      'section-props': 'Props',
      'desc-vertical': 'Pass items with optional <code class="bj-code">color</code> to override the theme fill.',
      'desc-horizontal': 'Boolean <code class="bj-code">horizontal</code> switches to row + track layout.',
      'desc-show-values': '<code class="bj-code">showValues={false}</code> hides numeric labels.',
      'desc-max': '<code class="bj-code">maxValue</code> fixes the percentage denominator.',
      'desc-cross': 'All three options can be set together on one <code class="bj-code">&lt;BjChartBar /&gt;</code>.',
      'prop-data': '<code class="bj-code">BjChartBarItem[]</code>.',
      'prop-horizontal': 'Horizontal layout.',
      'prop-maxValue': 'Optional scale cap.',
      'prop-showValues': 'Show numbers (default <code class="bj-code">true</code>).',
      'prop-div': 'Extra props on the root <code class="bj-code">&lt;div&gt;</code>.',
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

const codeHorizontal = `export function Example() {
  return (
    <BjChart title="Parts de marché">
      <BjChartBar data={data} horizontal />
    </BjChart>
  )
}`

const codeNoValues = `<BjChartBar data={data} showValues={false} />`
const codeMax = `<BjChartBar data={data} maxValue={200} />`
const codeCross = `<BjChartBar data={data} horizontal maxValue={120} />`

const propsRows = computed(() => [
  { name: 'data', description: t('prop-data') },
  { name: 'horizontal', description: t('prop-horizontal') },
  { name: 'maxValue', description: t('prop-maxValue') },
  { name: 'showValues', description: t('prop-showValues') },
  { name: '…', description: t('prop-div') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)" v-html="t('desc')" />

  <DocsSection id="react-chart-bar-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-bar-vertical" :title="t('section-vertical')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-vertical')" />
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

  <DocsSection id="react-chart-bar-horizontal" :title="t('section-horizontal')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-horizontal')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 28rem;">
        <div class="bj-chart__header"><p class="bj-chart__title">Parts</p></div>
        <div class="bj-chart__body" style="min-height: auto; padding-top: var(--bj-spacing-2v)">
          <div class="bj-chart-bar bj-chart-bar--horizontal" role="img" style="min-height: auto; height: auto;">
            <div class="bj-chart-bar__row">
              <span class="bj-chart-bar__label" style="min-width: 5rem">Jan</span>
              <div class="bj-chart-bar__track">
                <div class="bj-chart-bar__fill" style="width: 80%; background-color: #008751;"></div>
              </div>
              <span class="bj-chart-bar__value">120</span>
            </div>
            <div class="bj-chart-bar__row">
              <span class="bj-chart-bar__label" style="min-width: 5rem">Fév</span>
              <div class="bj-chart-bar__track">
                <div class="bj-chart-bar__fill" style="width: 60%; background-color: #FCD116;"></div>
              </div>
              <span class="bj-chart-bar__value">90</span>
            </div>
            <div class="bj-chart-bar__row">
              <span class="bj-chart-bar__label" style="min-width: 5rem">Mar</span>
              <div class="bj-chart-bar__track">
                <div class="bj-chart-bar__fill" style="width: 100%; background-color: #E8112D;"></div>
              </div>
              <span class="bj-chart-bar__value">150</span>
            </div>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeHorizontal" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-bar-show-values" :title="t('section-show-values')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-show-values')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 28rem;">
        <div class="bj-chart__header"><p class="bj-chart__title">Sans nombres</p></div>
        <div class="bj-chart__body">
          <div class="bj-chart-bar" role="img" style="height: 10rem;">
            <div class="bj-chart-bar__col">
              <div class="bj-chart-bar__bar-area">
                <div class="bj-chart-bar__bar" style="height: 80%; background-color: #008751;"></div>
              </div>
              <span class="bj-chart-bar__label">Jan</span>
            </div>
            <div class="bj-chart-bar__col">
              <div class="bj-chart-bar__bar-area">
                <div class="bj-chart-bar__bar" style="height: 60%; background-color: #FCD116;"></div>
              </div>
              <span class="bj-chart-bar__label">Fév</span>
            </div>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeNoValues" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-bar-max" :title="t('section-max')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-max')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 28rem;">
        <div class="bj-chart__header"><p class="bj-chart__title">Échelle 200</p></div>
        <div class="bj-chart__body">
          <div class="bj-chart-bar" role="img" style="height: 10rem;">
            <div class="bj-chart-bar__col">
              <span class="bj-chart-bar__value">120</span>
              <div class="bj-chart-bar__bar-area">
                <div class="bj-chart-bar__bar" style="height: 60%; background-color: #008751;"></div>
              </div>
              <span class="bj-chart-bar__label">Jan</span>
            </div>
            <div class="bj-chart-bar__col">
              <span class="bj-chart-bar__value">90</span>
              <div class="bj-chart-bar__bar-area">
                <div class="bj-chart-bar__bar" style="height: 45%; background-color: #FCD116;"></div>
              </div>
              <span class="bj-chart-bar__label">Fév</span>
            </div>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMax" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-bar-cross" :title="t('section-cross')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-cross')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 28rem;">
        <div class="bj-chart__header"><p class="bj-chart__title">Horizontal + max 120</p></div>
        <div class="bj-chart__body" style="min-height: auto; padding-top: var(--bj-spacing-2v)">
          <div class="bj-chart-bar bj-chart-bar--horizontal" role="img" style="min-height: auto; height: auto;">
            <div class="bj-chart-bar__row">
              <span class="bj-chart-bar__label" style="min-width: 5rem">A</span>
              <div class="bj-chart-bar__track">
                <div class="bj-chart-bar__fill" style="width: 33.33%; background-color: #008751;"></div>
              </div>
              <span class="bj-chart-bar__value">40</span>
            </div>
            <div class="bj-chart-bar__row">
              <span class="bj-chart-bar__label" style="min-width: 5rem">B</span>
              <div class="bj-chart-bar__track">
                <div class="bj-chart-bar__fill" style="width: 58.33%; background-color: #FCD116;"></div>
              </div>
              <span class="bj-chart-bar__value">70</span>
            </div>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCross" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chart-bar-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
