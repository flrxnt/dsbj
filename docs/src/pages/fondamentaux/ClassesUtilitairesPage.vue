<script setup lang="ts">
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Classes utilitaires',
      desc:
        'Raccourcis pour la mise en page et le style sans écrire de CSS personnalisé. Préfixe {prefix} sur toutes les classes.',
      'section-display': 'Affichage',
      'display-note':
        'Variantes responsives : préfixe du breakpoint puis type d’affichage, par ex. {ex1}, {ex2} (à partir de SM, MD, LG ou XL).',
      'section-flex': 'Flexbox',
      'section-text': 'Texte',
      'section-colors': 'Couleurs (texte et fond)',
      'section-visibility': 'Visibilité',
      thClass: 'Classe',
      thRole: 'Rôle',
      'prop-d-block': 'display: block',
      'prop-d-inline-block': 'display: inline-block',
      'prop-d-inline': 'display: inline',
      'prop-d-flex': 'display: flex',
      'prop-d-inline-flex': 'display: inline-flex',
      'prop-d-grid': 'display: grid',
      'prop-d-none': 'display: none',
      'prop-flex-dir': 'Direction du conteneur flex',
      'prop-flex-wrap': 'Retour à la ligne',
      'prop-justify':
        'Axe principal',
      'prop-items': 'Axe transversal',
      'prop-self': 'Alignement d’un élément',
      'prop-flex-grow': 'Flexibilité',
      'prop-gap':
        'Écart entre enfants (jetons d’espacement)',
      'prop-text-align': 'Alignement',
      'prop-text-case': 'Casse',
      'prop-text-decoration': 'Décoration',
      'prop-text-truncate': 'Ellipse sur une ligne',
      'prop-text-break': 'Césure de mots longs',
      'prop-text-semantic': 'Couleurs de texte sémantiques',
      'prop-text-state': 'États et accent',
      'prop-bg-neutral': 'Fonds neutres',
      'prop-bg-state': 'Fonds d’état',
      'prop-sr-only':
        'Masqué visuellement, reste lu par les lecteurs d’écran',
      'prop-sr-only-focusable':
        'Pareil, visible au focus clavier (ex. « Aller au contenu »)',
      'prop-visible': 'visibility visible / hidden',
      'prop-hidden-bp': 'display: none à partir du breakpoint',
      'prop-visible-bp': 'display: revert à partir du breakpoint',
    },
    en: {
      title: 'Utility classes',
      desc:
        'Shortcuts for layout and styling without custom CSS. {prefix} on every class.',
      'section-display': 'Display',
      'display-note':
        'Responsive variants: breakpoint prefix then display type, e.g. {ex1}, {ex2} (from SM, MD, LG, or XL up).',
      'section-flex': 'Flexbox',
      'section-text': 'Text',
      'section-colors': 'Colors (text and background)',
      'section-visibility': 'Visibility',
      thClass: 'Class',
      thRole: 'Role',
      'prop-d-block': 'display: block',
      'prop-d-inline-block': 'display: inline-block',
      'prop-d-inline': 'display: inline',
      'prop-d-flex': 'display: flex',
      'prop-d-inline-flex': 'display: inline-flex',
      'prop-d-grid': 'display: grid',
      'prop-d-none': 'display: none',
      'prop-flex-dir': 'Flex container direction',
      'prop-flex-wrap': 'Wrapping',
      'prop-justify': 'Main axis',
      'prop-items': 'Cross axis',
      'prop-self': 'Single-item alignment',
      'prop-flex-grow': 'Flex growth/shrink',
      'prop-gap': 'Gap between children (spacing tokens)',
      'prop-text-align': 'Alignment',
      'prop-text-case': 'Casing',
      'prop-text-decoration': 'Decoration',
      'prop-text-truncate': 'Single-line ellipsis',
      'prop-text-break': 'Long word breaking',
      'prop-text-semantic': 'Semantic text colors',
      'prop-text-state': 'State and accent',
      'prop-bg-neutral': 'Neutral backgrounds',
      'prop-bg-state': 'State backgrounds',
      'prop-sr-only':
        'Visually hidden, still read by screen readers',
      'prop-sr-only-focusable':
        'Same, visible on keyboard focus (e.g. skip to content)',
      'prop-visible': 'visibility visible / hidden',
      'prop-hidden-bp': 'display: none from breakpoint up',
      'prop-visible-bp': 'display: revert from breakpoint up',
    },
  },
})

const colorTableHeaders = computed(
  (): [string, string] => [t('thClass'), t('thRole')],
)

const displayRows = computed(() => [
  { name: 'bj-d-block', description: t('prop-d-block') },
  { name: 'bj-d-inline-block', description: t('prop-d-inline-block') },
  { name: 'bj-d-inline', description: t('prop-d-inline') },
  { name: 'bj-d-flex', description: t('prop-d-flex') },
  { name: 'bj-d-inline-flex', description: t('prop-d-inline-flex') },
  { name: 'bj-d-grid', description: t('prop-d-grid') },
  { name: 'bj-d-none', description: t('prop-d-none') },
])

const flexRows = computed(() => [
  {
    name: 'bj-flex-row / bj-flex-col',
    description: t('prop-flex-dir'),
  },
  {
    name: 'bj-flex-wrap / bj-flex-nowrap',
    description: t('prop-flex-wrap'),
  },
  {
    name:
      'bj-justify-start, bj-justify-center, bj-justify-end, bj-justify-between, bj-justify-around',
    description: t('prop-justify'),
  },
  {
    name:
      'bj-items-start, bj-items-center, bj-items-end, bj-items-stretch',
    description: t('prop-items'),
  },
  {
    name: 'bj-self-start, bj-self-center, bj-self-end',
    description: t('prop-self'),
  },
  {
    name: 'bj-flex-1, bj-flex-auto, bj-flex-none',
    description: t('prop-flex-grow'),
  },
  {
    name: 'bj-gap-1v … bj-gap-8v',
    description: t('prop-gap'),
  },
])

const textRows = computed(() => [
  {
    name: 'bj-text-left, bj-text-center, bj-text-right',
    description: t('prop-text-align'),
  },
  {
    name:
      'bj-text-uppercase, bj-text-lowercase, bj-text-capitalize, bj-text-normal-case',
    description: t('prop-text-case'),
  },
  {
    name:
      'bj-text-underline, bj-text-no-underline, bj-text-line-through',
    description: t('prop-text-decoration'),
  },
  { name: 'bj-text-truncate', description: t('prop-text-truncate') },
  { name: 'bj-text-break', description: t('prop-text-break') },
])

const colorRows = computed(() => [
  {
    name:
      'bj-text-default, bj-text-title, bj-text-alt, bj-text-mention, bj-text-inverted',
    description: t('prop-text-semantic'),
  },
  {
    name:
      'bj-text-action, bj-text-info, bj-text-success, bj-text-warning, bj-text-error, bj-text-accent',
    description: t('prop-text-state'),
  },
  {
    name:
      'bj-bg-default, bj-bg-alt, bj-bg-contrast, bj-bg-elevated',
    description: t('prop-bg-neutral'),
  },
  {
    name:
      'bj-bg-action, bj-bg-info, bj-bg-success, bj-bg-warning, bj-bg-error',
    description: t('prop-bg-state'),
  },
])

const visibilityRows = computed(() => [
  {
    name: 'bj-sr-only',
    description: t('prop-sr-only'),
  },
  {
    name: 'bj-sr-only-focusable',
    description: t('prop-sr-only-focusable'),
  },
  {
    name: 'bj-visible / bj-invisible',
    description: t('prop-visible'),
  },
  {
    name:
      'bj-hidden-sm, bj-hidden-md, bj-hidden-lg, bj-hidden-xl',
    description: t('prop-hidden-bp'),
  },
  {
    name: 'bj-visible-sm, … bj-visible-xl',
    description: t('prop-visible-bp'),
  },
])
</script>

<template>
  <h1 class="bj-h1">{{ t('title') }}</h1>
  <p class="bj-text-md bj-text-alt">
    <i18n-t keypath="desc">
      <template #prefix>
        <code>bj-</code>
      </template>
    </i18n-t>
  </p>

  <DocsSection id="affichage" :title="t('section-display')">
    <DocsPropsTable :rows="displayRows" />
    <p class="bj-text-sm bj-text-alt">
      <i18n-t keypath="display-note">
        <template #ex1>
          <code>bj-d-md-flex</code>
        </template>
        <template #ex2>
          <code>bj-d-lg-none</code>
        </template>
      </i18n-t>
    </p>
  </DocsSection>

  <DocsSection id="flexbox" :title="t('section-flex')">
    <DocsPropsTable :rows="flexRows" />
    <DocsPreview
      class="bj-d-flex bj-justify-center bj-items-center bj-gap-4v bj-flex-wrap"
    >
      <span class="bj-bg-alt bj-p-2v">A</span>
      <span class="bj-bg-alt bj-p-2v">B</span>
      <span class="bj-bg-alt bj-p-2v">C</span>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="texte" :title="t('section-text')">
    <DocsPropsTable :rows="textRows" />
  </DocsSection>

  <DocsSection id="couleurs-texte-fond" :title="t('section-colors')">
    <DocsPropsTable
      :headers="colorTableHeaders"
      :rows="colorRows"
    />
  </DocsSection>

  <DocsSection id="visibilite" :title="t('section-visibility')">
    <DocsPropsTable :rows="visibilityRows" />
  </DocsSection>
</template>
