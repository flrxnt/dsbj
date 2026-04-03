<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Visite guidée (Tour)',
      desc: "Composant de visite guidée pour présenter les fonctionnalités d'une application pas à pas. Met en surbrillance les éléments cibles et affiche un popover explicatif avec navigation entre les étapes.",
      'section-base': 'Utilisation de base',
      'section-classes-css': 'Classes CSS',
      'section-attributs': 'Attributs data',
      'section-accessibilite': 'Accessibilité',
      'a11y-note': 'Le popover possède <code>role="dialog"</code> et <code>aria-label</code>. Le focus est piégé dans le popover pendant la visite. Les touches <code>Flèche droite</code>, <code>Flèche gauche</code> et <code>Échap</code> permettent de naviguer ou fermer. Le focus est restauré à l\'élément déclencheur à la fin de la visite.',
      'cls-overlay': 'Superposition couvrant la page pendant la visite',
      'cls-backdrop': "Fond semi-transparent de l'overlay",
      'cls-highlight': "Zone de surbrillance autour de l'élément cible",
      'cls-popover': 'Popover explicatif flottant',
      'cls-header': "En-tête du popover (titre + numéro d'étape)",
      'cls-title': "Titre de l'étape",
      'cls-step': "Indicateur du numéro d'étape",
      'cls-body': 'Corps du popover (description)',
      'cls-footer': 'Pied du popover (progression + actions)',
      'cls-progress': "Conteneur des points de progression",
      'cls-progress-dot': 'Point de progression individuel',
      'cls-progress-active': 'Point de progression actif',
      'cls-progress-done': 'Point de progression complété',
      'cls-actions': 'Conteneur des boutons Précédent / Suivant',
      'cls-close': 'Bouton de fermeture du popover',
      'attr-tour': "Active le comportement visite guidée sur l'élément déclencheur",
      'attr-steps': 'Tableau JSON décrivant les étapes de la visite',
    },
    en: {
      title: 'Guided Tour',
      desc: 'Step-by-step guided tour component to showcase application features. Highlights target elements and displays an explanatory popover with step navigation.',
      'section-base': 'Basic usage',
      'section-classes-css': 'CSS Classes',
      'section-attributs': 'Data attributes',
      'section-accessibilite': 'Accessibility',
      'a11y-note': 'The popover has <code>role="dialog"</code> and <code>aria-label</code>. Focus is trapped inside the popover during the tour. <code>Arrow Right</code>, <code>Arrow Left</code> and <code>Escape</code> keys allow navigation or closing. Focus is restored to the trigger element when the tour ends.',
      'cls-overlay': 'Overlay covering the page during the tour',
      'cls-backdrop': 'Semi-transparent overlay backdrop',
      'cls-highlight': 'Highlight zone around the target element',
      'cls-popover': 'Floating explanatory popover',
      'cls-header': 'Popover header (title + step number)',
      'cls-title': 'Step title',
      'cls-step': 'Step number indicator',
      'cls-body': 'Popover body (description)',
      'cls-footer': 'Popover footer (progress + actions)',
      'cls-progress': 'Progress dots container',
      'cls-progress-dot': 'Individual progress dot',
      'cls-progress-active': 'Active progress dot',
      'cls-progress-done': 'Completed progress dot',
      'cls-actions': 'Previous / Next buttons container',
      'cls-close': 'Popover close button',
      'attr-tour': 'Activates guided tour behavior on the trigger element',
      'attr-steps': 'JSON array describing the tour steps',
    },
  },
})

const codeBase = `<button
  class="bj-btn"
  data-bj-tour
  data-bj-tour-steps='[
    { "target": "#feature-1", "title": "Bienvenue", "content": "Découvrez les fonctionnalités principales.", "placement": "bottom" },
    { "target": "#feature-2", "title": "Tableau de bord", "content": "Visualisez vos données en un clin d\\u2019œil.", "placement": "right" },
    { "target": "#feature-3", "title": "Paramètres", "content": "Personnalisez votre expérience.", "placement": "left" }
  ]'
>
  Démarrer la visite
</button>`

const cssRows = computed(() => [
  { name: '.bj-tour-overlay', description: t('cls-overlay') },
  { name: '.bj-tour-overlay__backdrop', description: t('cls-backdrop') },
  { name: '.bj-tour-highlight', description: t('cls-highlight') },
  { name: '.bj-tour-popover', description: t('cls-popover') },
  { name: '.bj-tour-popover__header', description: t('cls-header') },
  { name: '.bj-tour-popover__title', description: t('cls-title') },
  { name: '.bj-tour-popover__step', description: t('cls-step') },
  { name: '.bj-tour-popover__body', description: t('cls-body') },
  { name: '.bj-tour-popover__footer', description: t('cls-footer') },
  { name: '.bj-tour-popover__progress', description: t('cls-progress') },
  { name: '.bj-tour-popover__progress-dot', description: t('cls-progress-dot') },
  { name: '.bj-tour-popover__progress-dot--active', description: t('cls-progress-active') },
  { name: '.bj-tour-popover__progress-dot--done', description: t('cls-progress-done') },
  { name: '.bj-tour-popover__actions', description: t('cls-actions') },
  { name: '.bj-tour-popover__close', description: t('cls-close') },
])

const attrRows = computed(() => [
  { name: 'data-bj-tour', description: t('attr-tour') },
  { name: 'data-bj-tour-steps', description: t('attr-steps') },
])

const demoSteps = [
  { target: '#tour-demo-1', title: 'Bienvenue', content: 'Découvrez les fonctionnalités principales.', placement: 'bottom' },
  { target: '#tour-demo-2', title: 'Navigation', content: 'Naviguez facilement entre les sections.', placement: 'bottom' },
  { target: '#tour-demo-3', title: 'Aide', content: 'Accédez à l\'aide à tout moment.', placement: 'bottom' },
]
</script>

<template>
  <div class="docs-content">
    <h1>{{ t('title') }}</h1>
    <p class="docs-intro">{{ t('desc') }}</p>

    <DocsSection :title="t('section-base')">
      <DocsPreview>
        <div style="display: flex; gap: var(--bj-spacing-4v); align-items: center; margin-bottom: var(--bj-spacing-4v);">
          <span id="tour-demo-1" class="bj-badge bj-badge--info">Fonctionnalité A</span>
          <span id="tour-demo-2" class="bj-badge bj-badge--success">Fonctionnalité B</span>
          <span id="tour-demo-3" class="bj-badge bj-badge--warning">Fonctionnalité C</span>
        </div>
        <button
          class="bj-btn"
          data-bj-tour
          :data-bj-tour-steps="JSON.stringify(demoSteps)"
        >
          Démarrer la visite
        </button>
      </DocsPreview>
      <DocsCode :code="codeBase" language="html" />
    </DocsSection>

    <DocsSection :title="t('section-classes-css')">
      <DocsPropsTable :rows="cssRows" />
    </DocsSection>

    <DocsSection :title="t('section-attributs')">
      <DocsPropsTable :rows="attrRows" />
    </DocsSection>

    <DocsSection id="a11y-tour" :title="t('section-accessibilite')">
      <DocsA11yNote>
        <span v-html="t('a11y-note')" />
      </DocsA11yNote>
    </DocsSection>
  </div>
</template>
