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
      'sec-bar': 'Barres verticales (BjChartBar)',
      'sec-bar-horiz': 'Barres horizontales',
      'sec-bar-horiz-desc':
        'Ajouter <code class="bj-code">bj-chart-bar--horizontal</code> : rangées <code class="bj-code">bj-chart-bar__row</code>, piste <code class="bj-code">bj-chart-bar__track</code>, remplissage <code class="bj-code">bj-chart-bar__fill</code>. Masquer <code class="bj-code">bj-chart-bar__value</code> si besoin.',
      'sec-line': 'Lignes (BjChartLine)',
      'sec-line-desc':
        'Grille <code class="bj-code">bj-chart-line__grid</code>, aire <code class="bj-code">bj-chart-line__area</code>, tracé <code class="bj-code">bj-chart-line__path</code>, points <code class="bj-code">bj-chart-line__dot</code>, libellés d’axe <code class="bj-code">bj-chart-line__axis</code>.',
      'sec-pie': 'Camembert (BjChartPie)',
      'sec-pie-desc': 'Tranches <code class="bj-code">bj-chart-pie__slice</code> avec attribut <code class="bj-code">fill</code>.',
      'sec-donut': 'Donut et texte central',
      'sec-donut-desc':
        'Classe <code class="bj-code">bj-chart-pie--donut</code> sur le conteneur ; texte <code class="bj-code">bj-chart-pie__center-text</code> centré dans le trou.',
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
      'class-bar-row': 'Rangée (mode horizontal)',
      'class-bar-track': 'Piste de fond (mode horizontal)',
      'class-bar-fill': 'Barre horizontale (largeur en %)',
      'class-line': 'Conteneur ligne',
      'class-line-grid': 'Ligne de grille',
      'class-line-path': 'Tracé de ligne',
      'class-line-area': 'Aire sous la ligne',
      'class-line-dot': 'Point sur la ligne',
      'class-line-axis': 'Libellé sous l’axe X',
      'class-pie': 'Conteneur camembert',
      'class-pie-slice': 'Tranche de camembert',
      'class-pie-donut': 'Modificateur : mode donut',
      'class-pie-center-text': 'Texte au centre (donut)',
    },
    en: {
      title: 'Charts',
      desc: 'Data visualization components: generic container, bars, lines and pie. Based on native SVG with no external dependency.',
      'sec-container': 'BjChart container',
      'sec-bar': 'Vertical bars (BjChartBar)',
      'sec-bar-horiz': 'Horizontal bars',
      'sec-bar-horiz-desc':
        'Add <code class="bj-code">bj-chart-bar--horizontal</code>: rows <code class="bj-code">bj-chart-bar__row</code>, track <code class="bj-code">bj-chart-bar__track</code>, fill <code class="bj-code">bj-chart-bar__fill</code>. Omit <code class="bj-code">bj-chart-bar__value</code> when values should be hidden.',
      'sec-line': 'Lines (BjChartLine)',
      'sec-line-desc':
        'Grid <code class="bj-code">bj-chart-line__grid</code>, area <code class="bj-code">bj-chart-line__area</code>, stroke <code class="bj-code">bj-chart-line__path</code>, dots <code class="bj-code">bj-chart-line__dot</code>, x-axis labels <code class="bj-code">bj-chart-line__axis</code>.',
      'sec-pie': 'Pie chart (BjChartPie)',
      'sec-pie-desc': 'Slices <code class="bj-code">bj-chart-pie__slice</code> with a <code class="bj-code">fill</code> attribute.',
      'sec-donut': 'Donut and center label',
      'sec-donut-desc':
        'Apply <code class="bj-code">bj-chart-pie--donut</code> on the wrapper; center copy uses <code class="bj-code">bj-chart-pie__center-text</code>.',
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
      'class-bar-row': 'Row (horizontal layout)',
      'class-bar-track': 'Track background (horizontal)',
      'class-bar-fill': 'Horizontal bar fill (width %)',
      'class-line': 'Line container',
      'class-line-grid': 'Grid line',
      'class-line-path': 'Line path',
      'class-line-area': 'Area under the line',
      'class-line-dot': 'Point on the line',
      'class-line-axis': 'X-axis tick label',
      'class-pie': 'Pie container',
      'class-pie-slice': 'Pie slice',
      'class-pie-donut': 'Modifier: donut mode',
      'class-pie-center-text': 'Center label (donut)',
    },
  },
})

const containerCode = `<div class="bj-chart">
  <div class="bj-chart__header">
    <div>
      <p class="bj-chart__title">Visiteurs mensuels</p>
      <p class="bj-chart__subtitle">Janvier – Mars 2026</p>
    </div>
    <button type="button" class="bj-btn bj-btn--tertiary bj-btn--sm">Exporter</button>
  </div>
  <div class="bj-chart__body">
    <!-- SVG ou contenu du graphique -->
  </div>
  <div class="bj-chart__legend">
    <span class="bj-chart__legend-item">
      <span class="bj-chart__legend-dot" style="background-color: #008751;"></span>
      Série A
    </span>
    <span class="bj-chart__legend-item">
      <span class="bj-chart__legend-dot" style="background-color: #FCD116;"></span>
      Série B
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
      <div class="bj-chart-bar__bar" style="height: 60%; background-color: #FCD116;"></div>
    </div>
    <span class="bj-chart-bar__label">Fév</span>
  </div>
</div>`

const barHorizCode = `<div class="bj-chart-bar bj-chart-bar--horizontal" role="img" style="min-height: auto;">
  <div class="bj-chart-bar__row">
    <span class="bj-chart-bar__label" style="min-width: 5rem">Alpha</span>
    <div class="bj-chart-bar__track">
      <div class="bj-chart-bar__fill" style="width: 75%; background-color: #008751;"></div>
    </div>
    <span class="bj-chart-bar__value">75</span>
  </div>
  <div class="bj-chart-bar__row">
    <span class="bj-chart-bar__label" style="min-width: 5rem">Beta</span>
    <div class="bj-chart-bar__track">
      <div class="bj-chart-bar__fill" style="width: 40%; background-color: #E8112D;"></div>
    </div>
    <span class="bj-chart-bar__value">40</span>
  </div>
</div>`

const barHorizNoValuesCode = `<!-- Sans valeurs : ne pas rendre .bj-chart-bar__value -->
<div class="bj-chart-bar__row">
  <span class="bj-chart-bar__label" style="min-width: 5rem">Gamma</span>
  <div class="bj-chart-bar__track">
    <div class="bj-chart-bar__fill" style="width: 55%; background-color: #FCD116;"></div>
  </div>
</div>`

const lineCode = `<div class="bj-chart-line">
  <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
    <line class="bj-chart-line__grid" x1="40" y1="47.5" x2="390" y2="47.5" />
    <line class="bj-chart-line__grid" x1="40" y1="95" x2="390" y2="95" />
    <line class="bj-chart-line__grid" x1="40" y1="142.5" x2="390" y2="142.5" />
    <path class="bj-chart-line__area" style="fill: #008751"
      d="M40,170 L40,60 L220,100 L400,40 L400,170 Z" />
    <path class="bj-chart-line__path" style="stroke: #008751"
      d="M40,60 L220,100 L400,40" />
    <circle class="bj-chart-line__dot" cx="40" cy="60" style="stroke: #008751" />
    <circle class="bj-chart-line__dot" cx="220" cy="100" style="stroke: #008751" />
    <circle class="bj-chart-line__dot" cx="400" cy="40" style="stroke: #008751" />
    <text class="bj-chart-line__axis" x="40" y="192" text-anchor="middle">Lun</text>
    <text class="bj-chart-line__axis" x="220" y="192" text-anchor="middle">Mer</text>
    <text class="bj-chart-line__axis" x="390" y="192" text-anchor="middle">Ven</text>
  </svg>
</div>`

const pieCode = `<div class="bj-chart-pie">
  <svg viewBox="0 0 200 200">
    <path class="bj-chart-pie__slice" fill="#008751"
      d="M100,100 L100,4 A96,96 0 0,1 178.4,148 Z" />
    <path class="bj-chart-pie__slice" fill="#FCD116"
      d="M100,100 L178.4,148 A96,96 0 0,1 21.6,148 Z" />
    <path class="bj-chart-pie__slice" fill="#E8112D"
      d="M100,100 L21.6,148 A96,96 0 1,1 100,4 Z" />
  </svg>
</div>`

const donutCode = `<div class="bj-chart-pie bj-chart-pie--donut">
  <svg viewBox="0 0 200 200">
    <path class="bj-chart-pie__slice" fill="#008751" d="M100,100 L100,8 A92,92 0 0,1 184,100 L136,100 A44,44 0 0,0 100,56 Z" />
    <path class="bj-chart-pie__slice" fill="#FCD116" d="M100,100 L136,100 A44,44 0 0,0 136,144 L100,144 A44,44 0 0,1 100,100 Z" />
    <path class="bj-chart-pie__slice" fill="#E8112D" d="M100,100 L100,144 A44,44 0 0,0 64,100 L100,100 Z" />
    <text class="bj-chart-pie__center-text" x="100" y="100">72%</text>
  </svg>
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
  { name: 'bj-chart-bar__row', description: t('class-bar-row') },
  { name: 'bj-chart-bar__track', description: t('class-bar-track') },
  { name: 'bj-chart-bar__fill', description: t('class-bar-fill') },
  { name: 'bj-chart-line', description: t('class-line') },
  { name: 'bj-chart-line__grid', description: t('class-line-grid') },
  { name: 'bj-chart-line__path', description: t('class-line-path') },
  { name: 'bj-chart-line__area', description: t('class-line-area') },
  { name: 'bj-chart-line__dot', description: t('class-line-dot') },
  { name: 'bj-chart-line__axis', description: t('class-line-axis') },
  { name: 'bj-chart-pie', description: t('class-pie') },
  { name: 'bj-chart-pie__slice', description: t('class-pie-slice') },
  { name: 'bj-chart-pie--donut', description: t('class-pie-donut') },
  { name: 'bj-chart-pie__center-text', description: t('class-pie-center-text') },
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
          <button type="button" class="bj-btn bj-btn--tertiary bj-btn--sm">Exporter</button>
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

  <DocsSection id="sec-bar-horiz" :title="t('sec-bar-horiz')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('sec-bar-horiz-desc')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 28rem;">
        <div class="bj-chart__body" style="min-height: auto; padding-top: var(--bj-spacing-2v)">
          <div class="bj-chart-bar bj-chart-bar--horizontal" role="img" style="min-height: auto; height: auto;">
            <div class="bj-chart-bar__row">
              <span class="bj-chart-bar__label" style="min-width: 5rem">Alpha</span>
              <div class="bj-chart-bar__track">
                <div class="bj-chart-bar__fill" style="width: 75%; background-color: #008751;"></div>
              </div>
              <span class="bj-chart-bar__value">75</span>
            </div>
            <div class="bj-chart-bar__row">
              <span class="bj-chart-bar__label" style="min-width: 5rem">Beta</span>
              <div class="bj-chart-bar__track">
                <div class="bj-chart-bar__fill" style="width: 40%; background-color: #E8112D;"></div>
              </div>
              <span class="bj-chart-bar__value">40</span>
            </div>
            <div class="bj-chart-bar__row">
              <span class="bj-chart-bar__label" style="min-width: 5rem">Gamma</span>
              <div class="bj-chart-bar__track">
                <div class="bj-chart-bar__fill" style="width: 55%; background-color: #FCD116;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="barHorizCode" />
    <DocsCode :code="barHorizNoValuesCode" />
  </DocsSection>

  <DocsSection id="sec-line" :title="t('sec-line')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('sec-line-desc')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 32rem;">
        <div class="bj-chart__body" style="min-height: 10rem">
          <div class="bj-chart-line">
            <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
              <line class="bj-chart-line__grid" x1="40" y1="47.5" x2="390" y2="47.5" />
              <line class="bj-chart-line__grid" x1="40" y1="95" x2="390" y2="95" />
              <line class="bj-chart-line__grid" x1="40" y1="142.5" x2="390" y2="142.5" />
              <path class="bj-chart-line__area" style="fill: #008751" d="M40,170 L40,60 L220,100 L400,40 L400,170 Z" />
              <path class="bj-chart-line__path" style="stroke: #008751" d="M40,60 L220,100 L400,40" />
              <circle class="bj-chart-line__dot" cx="40" cy="60" style="stroke: #008751" />
              <circle class="bj-chart-line__dot" cx="220" cy="100" style="stroke: #008751" />
              <circle class="bj-chart-line__dot" cx="400" cy="40" style="stroke: #008751" />
              <text class="bj-chart-line__axis" x="40" y="192" text-anchor="middle">Lun</text>
              <text class="bj-chart-line__axis" x="220" y="192" text-anchor="middle">Mer</text>
              <text class="bj-chart-line__axis" x="390" y="192" text-anchor="middle">Ven</text>
            </svg>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="lineCode" />
  </DocsSection>

  <DocsSection id="sec-pie" :title="t('sec-pie')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('sec-pie-desc')" />
    <DocsPreview>
      <div class="bj-chart" style="max-width: 20rem;">
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
    <DocsCode :code="pieCode" />
  </DocsSection>

  <DocsSection id="sec-donut" :title="t('sec-donut')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('sec-donut-desc')" />
    <DocsPreview>
      <div style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-4v); align-items: flex-end;">
        <div class="bj-chart-pie bj-chart-pie--donut" style="width: 12rem">
          <svg viewBox="0 0 200 200">
            <path class="bj-chart-pie__slice" fill="#008751" d="M100,100 L100,8 A92,92 0 0,1 184,100 L136,100 A44,44 0 0,0 100,56 Z" />
            <path class="bj-chart-pie__slice" fill="#FCD116" d="M100,100 L136,100 A44,44 0 0,0 136,144 L100,144 A44,44 0 0,1 100,100 Z" />
            <path class="bj-chart-pie__slice" fill="#E8112D" d="M100,100 L100,144 A44,44 0 0,0 64,100 L100,100 Z" />
            <text class="bj-chart-pie__center-text" x="100" y="100">72%</text>
          </svg>
        </div>
        <div class="bj-chart-pie bj-chart-pie--donut" style="width: 8rem">
          <svg viewBox="0 0 120 120">
            <path class="bj-chart-pie__slice" fill="#008751" d="M60,60 L60,8 A52,52 0 0,1 108,60 L84,60 A28,28 0 0,0 60,36 Z" />
            <path class="bj-chart-pie__slice" fill="#E8112D" d="M60,60 L84,60 A28,28 0 0,0 60,96 L60,60 Z" />
            <text class="bj-chart-pie__center-text" x="60" y="60" style="font-size: 14px">12</text>
          </svg>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="donutCode" />
  </DocsSection>

  <DocsSection id="sec-classes" :title="t('sec-classes')">
    <DocsPropsTable :rows="classesRows" />
  </DocsSection>
</template>
