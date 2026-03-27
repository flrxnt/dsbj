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
      title: 'Charts (Graphiques)',
      desc: 'Composants de visualisation de données : conteneur générique, barres, lignes et camembert. Basés sur SVG natif sans dépendance externe.',
      'sec-container': 'Conteneur BjChart',
      'sec-bar': 'Barres (BjChartBar)',
      'sec-line': 'Lignes (BjChartLine)',
      'sec-pie': 'Camembert (BjChartPie)',
      'sec-classes': 'Classes CSS',
      'class-chart': 'Conteneur générique de graphique',
      'class-header': 'En-tête avec titre et actions',
      'class-title': 'Titre du graphique',
      'class-subtitle': 'Sous-titre',
      'class-body': 'Corps du graphique',
      'class-legend': 'Légende',
      'class-legend-item': 'Élément de légende',
      'class-legend-dot': 'Pastille de couleur de légende',
      'class-bar': 'Conteneur barres verticales',
      'class-bar-horiz': 'Modificateur : barres horizontales',
      'class-bar-col': 'Colonne verticale (barre + label)',
      'class-bar-area': 'Zone flexible contenant la barre',
      'class-bar-bar': 'Barre individuelle',
      'class-bar-label': 'Libellé de barre',
      'class-bar-value': 'Valeur de barre',
      'class-line': 'Conteneur ligne',
      'class-line-path': 'Tracé de ligne',
      'class-line-area': 'Aire sous la ligne',
      'class-line-dot': 'Point sur la ligne',
      'class-pie': 'Conteneur camembert',
      'class-pie-slice': 'Tranche de camembert',
      'class-pie-donut': 'Modificateur : mode donut',
    },
    en: {
      title: 'Charts',
      desc: 'Data visualization components: generic container, bars, lines and pie. Based on native SVG with no external dependency.',
      'sec-container': 'BjChart container',
      'sec-bar': 'Bar chart (BjChartBar)',
      'sec-line': 'Line chart (BjChartLine)',
      'sec-pie': 'Pie chart (BjChartPie)',
      'sec-classes': 'CSS classes',
      'class-chart': 'Generic chart container',
      'class-header': 'Header with title and actions',
      'class-title': 'Chart title',
      'class-subtitle': 'Subtitle',
      'class-body': 'Chart body',
      'class-legend': 'Legend',
      'class-legend-item': 'Legend item',
      'class-legend-dot': 'Legend color dot',
      'class-bar': 'Vertical bar container',
      'class-bar-horiz': 'Modifier: horizontal bars',
      'class-bar-col': 'Vertical column (bar + label)',
      'class-bar-area': 'Flexible area containing the bar',
      'class-bar-bar': 'Individual bar',
      'class-bar-label': 'Bar label',
      'class-bar-value': 'Bar value',
      'class-line': 'Line container',
      'class-line-path': 'Line path',
      'class-line-area': 'Area under the line',
      'class-line-dot': 'Point on the line',
      'class-pie': 'Pie container',
      'class-pie-slice': 'Pie slice',
      'class-pie-donut': 'Modifier: donut mode',
    },
  },
})

const containerCode = `<div class="bj-chart">
  <div class="bj-chart__header">
    <p class="bj-chart__title">Visiteurs mensuels</p>
  </div>
  <div class="bj-chart__body">
    <!-- SVG ou contenu du graphique -->
  </div>
  <div class="bj-chart__legend">
    <span class="bj-chart__legend-item">
      <span class="bj-chart__legend-dot" style="background-color: #008751;"></span>
      Série A
    </span>
  </div>
</div>`

const barCode = `<div class="bj-chart-bar" role="img" style="height: 12rem;">
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
      <div class="bj-chart-bar__bar" style="height: 60%; background-color: #008751;"></div>
    </div>
    <span class="bj-chart-bar__label">Fév</span>
  </div>
</div>`

const classesRows = computed(() => [
  { name: 'bj-chart', description: t('class-chart') },
  { name: 'bj-chart__header', description: t('class-header') },
  { name: 'bj-chart__title', description: t('class-title') },
  { name: 'bj-chart__subtitle', description: t('class-subtitle') },
  { name: 'bj-chart__body', description: t('class-body') },
  { name: 'bj-chart__legend', description: t('class-legend') },
  { name: 'bj-chart__legend-item', description: t('class-legend-item') },
  { name: 'bj-chart__legend-dot', description: t('class-legend-dot') },
  { name: 'bj-chart-bar', description: t('class-bar') },
  { name: 'bj-chart-bar--horizontal', description: t('class-bar-horiz') },
  { name: 'bj-chart-bar__col', description: t('class-bar-col') },
  { name: 'bj-chart-bar__bar-area', description: t('class-bar-area') },
  { name: 'bj-chart-bar__bar', description: t('class-bar-bar') },
  { name: 'bj-chart-bar__label', description: t('class-bar-label') },
  { name: 'bj-chart-bar__value', description: t('class-bar-value') },
  { name: 'bj-chart-line', description: t('class-line') },
  { name: 'bj-chart-line__path', description: t('class-line-path') },
  { name: 'bj-chart-line__area', description: t('class-line-area') },
  { name: 'bj-chart-line__dot', description: t('class-line-dot') },
  { name: 'bj-chart-pie', description: t('class-pie') },
  { name: 'bj-chart-pie__slice', description: t('class-pie-slice') },
  { name: 'bj-chart-pie--donut', description: t('class-pie-donut') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="sec-container" :title="t('sec-container')">
    <DocsPreview>
      <div class="bj-chart" style="max-width: 32rem;">
        <div class="bj-chart__header">
          <div>
            <p class="bj-chart__title">Visiteurs mensuels</p>
            <p class="bj-chart__subtitle">Janvier – Mars 2026</p>
          </div>
        </div>
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
                <div class="bj-chart-bar__bar" style="height: 60%; background-color: #008751;"></div>
              </div>
              <span class="bj-chart-bar__label">Fév</span>
            </div>
            <div class="bj-chart-bar__col">
              <span class="bj-chart-bar__value">150</span>
              <div class="bj-chart-bar__bar-area">
                <div class="bj-chart-bar__bar" style="height: 100%; background-color: #008751;"></div>
              </div>
              <span class="bj-chart-bar__label">Mar</span>
            </div>
          </div>
        </div>
        <div class="bj-chart__legend">
          <span class="bj-chart__legend-item">
            <span class="bj-chart__legend-dot" style="background-color: #008751;"></span>
            Visiteurs
          </span>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="containerCode" />
  </DocsSection>

  <DocsSection id="sec-bar" :title="t('sec-bar')">
    <DocsPreview>
      <div class="bj-chart-bar" role="img" style="height: 10rem; max-width: 28rem;">
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
    </DocsPreview>
    <DocsCode :code="barCode" />
  </DocsSection>

  <DocsSection id="sec-classes" :title="t('sec-classes')">
    <DocsPropsTable :rows="classesRows" />
  </DocsSection>
</template>
