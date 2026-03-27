<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjChart, BjChartBar } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjChartBar',
      desc: 'Graphique en barres Vue : vertical par défaut, horizontal avec <code class="bj-code">horizontal</code>, échelle <code class="bj-code">maxValue</code>, valeurs <code class="bj-code">showValues</code>, couleurs par barre via <code class="bj-code">color</code>.',
      'section-usage': 'Utilisation',
      'section-vertical': 'Barres verticales et couleurs',
      'section-horizontal': 'Barres horizontales',
      'section-show-values': 'Sans valeurs affichées',
      'section-max': 'Échelle maxValue',
      'section-cross': 'Combinaison : horizontal + maxValue + showValues',
      'section-props': 'Props',
      'desc-vertical': 'Chaque entrée peut définir <code class="bj-code">color</code> ; sinon la couleur du thème s’applique via les styles CSS.',
      'desc-horizontal': 'Les libellés sont à gauche, la piste au centre, les valeurs à droite lorsque <code class="bj-code">show-values</code> est vrai.',
      'desc-show-values': '<code class="bj-code">:show-values="false"</code> masque les pastilles numériques au-dessus ou à droite des barres.',
      'desc-max': '<code class="bj-code">max-value</code> fixe le dénominateur des pourcentages (barres plus courtes si la valeur max dépasse les données).',
      'desc-cross': 'Exemple combinant barres horizontales, une échelle imposée et l’affichage des valeurs.',
      "prop-data": "Tableau <code class=\"bj-code\">{'{'} label, value, color? {'}'}</code> (obligatoire).",
      'prop-horizontal': 'Passe en disposition <code class="bj-code">bj-chart-bar--horizontal</code>.',
      'prop-maxValue': 'Maximum de l’échelle ; par défaut le max des <code class="bj-code">value</code>.',
      'prop-showValues': 'Affiche les nombres (défaut : <code class="bj-code">true</code>).',
      'prop-attrs': 'Attributs sur la racine <code class="bj-code">&lt;div&gt;</code> (ex. <code class="bj-code">aria-label</code>).',
    },
    en: {
      title: 'BjChartBar',
      desc: 'Vue bar chart: vertical by default, <code class="bj-code">horizontal</code> layout, <code class="bj-code">maxValue</code> scale, <code class="bj-code">showValues</code>, per-bar <code class="bj-code">color</code>.',
      'section-usage': 'Usage',
      'section-vertical': 'Vertical bars and colors',
      'section-horizontal': 'Horizontal bars',
      'section-show-values': 'Hidden values',
      'section-max': 'maxValue scale',
      'section-cross': 'Combo: horizontal + maxValue + showValues',
      'section-props': 'Props',
      'desc-vertical': 'Each item may set <code class="bj-code">color</code>; otherwise theme CSS fills apply.',
      'desc-horizontal': 'Labels on the left, track in the middle, values on the right when <code class="bj-code">show-values</code> is true.',
      'desc-show-values': '<code class="bj-code">:show-values="false"</code> hides numeric badges above or beside bars.',
      'desc-max': '<code class="bj-code">max-value</code> sets the percentage denominator (bars look shorter when data is below the cap).',
      'desc-cross': 'Example with horizontal bars, a fixed scale, and values visible.',
      "prop-data": "Array of <code class=\"bj-code\">{'{'} label, value, color? {'}'}</code> (required).",
      'prop-horizontal': 'Switches to <code class="bj-code">bj-chart-bar--horizontal</code> layout.',
      'prop-maxValue': 'Scale maximum; defaults to the largest <code class="bj-code">value</code>.',
      'prop-showValues': 'Renders numbers (default: <code class="bj-code">true</code>).',
      'prop-attrs': 'Attributes on the root <code class="bj-code">&lt;div&gt;</code> (e.g. <code class="bj-code">aria-label</code>).',
    },
  },
})

const dataColored = [
  { label: 'Jan', value: 120, color: '#008751' },
  { label: 'Fév', value: 90, color: '#FCD116' },
  { label: 'Mar', value: 150, color: '#E8112D' },
]

const dataPlain = [
  { label: 'A', value: 40 },
  { label: 'B', value: 70 },
  { label: 'C', value: 55 },
]

const codeUsage = `<script setup>
import { BjChart, BjChartBar } from '@flrxnt/dsbj/vue'

const data = [
  { label: 'Jan', value: 120, color: '#008751' },
  { label: 'Fév', value: 90, color: '#FCD116' },
  { label: 'Mar', value: 150, color: '#E8112D' },
]
<\/script>

<template>
  <BjChart title="Visiteurs">
    <BjChartBar :data="data" />
  </BjChart>
</template>`

const codeHorizontal = `<BjChart title="Parts de marché">
  <BjChartBar :data="data" horizontal />
</BjChart>`

const codeNoValues = `<BjChartBar :data="data" :show-values="false" />`

const codeMax = `<BjChartBar :data="data" :max-value="200" />`

const codeCross = `<BjChartBar
  :data="data"
  horizontal
  :max-value="120"
/>`

const propsRows = computed(() => [
  { name: 'data', description: t('prop-data') },
  { name: 'horizontal', description: t('prop-horizontal') },
  { name: 'maxValue', description: t('prop-maxValue') },
  { name: 'showValues', description: t('prop-showValues') },
  { name: '…', description: t('prop-attrs') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)" v-html="t('desc')" />

  <DocsSection id="vue-chart-bar-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-bar-vertical" :title="t('section-vertical')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-vertical')" />
    <DocsPreview>
      <BjChart title="Visiteurs" style="max-width: 28rem">
        <BjChartBar :data="dataColored" />
      </BjChart>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-chart-bar-horizontal" :title="t('section-horizontal')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-horizontal')" />
    <DocsPreview>
      <BjChart title="Parts" subtitle="Mode horizontal" style="max-width: 28rem">
        <BjChartBar :data="dataColored" horizontal />
      </BjChart>
    </DocsPreview>
    <DocsCode :code="codeHorizontal" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-bar-show-values" :title="t('section-show-values')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-show-values')" />
    <DocsPreview>
      <BjChart title="Sans nombres" style="max-width: 28rem">
        <BjChartBar :data="dataColored" :show-values="false" />
      </BjChart>
    </DocsPreview>
    <DocsCode :code="codeNoValues" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-bar-max" :title="t('section-max')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-max')" />
    <DocsPreview>
      <BjChart title="Échelle 200" style="max-width: 28rem">
        <BjChartBar :data="dataColored" :max-value="200" />
      </BjChart>
    </DocsPreview>
    <DocsCode :code="codeMax" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-bar-cross" :title="t('section-cross')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-cross')" />
    <DocsPreview>
      <BjChart title="Horizontal + max 120" style="max-width: 28rem">
        <BjChartBar :data="dataPlain" horizontal :max-value="120" />
      </BjChart>
    </DocsPreview>
    <DocsCode :code="codeCross" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chart-bar-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
