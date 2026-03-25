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
      title: 'BjStepper',
      desc:
        'Indicateur d’étapes : titre optionnel, liste de libellés, index courant, détail sous les étapes et variante verticale.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-title': 'Titre affiché dans l’en-tête du stepper (h2).',
      'prop-steps':
        'Tableau d’objets avec chaîne label et booléen done optionnel ; une étape est terminée si done est vrai ou si son index est strictement inférieur à current.',
      'prop-current': 'Index de l’étape courante (base 0).',
      'prop-vertical': 'Si vrai, ajoute la classe bj-stepper--vertical.',
      'prop-detail': 'Texte descriptif sous la rangée d’étapes.',
      'prop-children': 'Contenu rendu après l’en-tête (par ex. le formulaire de l’étape).',
      'prop-rest': 'Attributs natifs du conteneur div et className fusionnés sur l’élément racine.',
    },
    en: {
      title: 'BjStepper',
      desc:
        'Step indicator: optional title, step labels, current index, optional detail text, vertical layout flag, and children below the header.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-title': 'Title shown in the stepper header (h2).',
      'prop-steps':
        'Array of objects with string label and optional boolean done; steps before the current index show as done when done is true or by position.',
      'prop-current': 'Index of the current step (0-based).',
      'prop-vertical': 'When true, adds class bj-stepper--vertical.',
      'prop-detail': 'Descriptive text below the step row.',
      'prop-children': 'Content rendered after the header (e.g. the step form).',
      'prop-rest': 'Native div attributes and className merged on the root element.',
    },
  },
})

const codeUsage = `import { BjStepper } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjStepper
      title="Votre dossier"
      current={1}
      detail="Complétez les champs obligatoires avant la suite."
      steps={[
        { label: 'Identité', done: true },
        { label: 'Pièces' },
        { label: 'Validation' },
      ]}
    >
      <p>Contenu de l’étape courante…</p>
    </BjStepper>
  )
}`

const propsRows = computed(() => [
  { name: 'title', description: t('prop-title') },
  { name: 'steps', description: t('prop-steps') },
  { name: 'current', description: t('prop-current') },
  { name: 'vertical', description: t('prop-vertical') },
  { name: 'detail', description: t('prop-detail') },
  { name: 'children', description: t('prop-children') },
  { name: '…rest', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-stepper-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-stepper-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-stepper" role="navigation" aria-label="Étapes">
        <div class="bj-stepper__header">
          <h2 class="bj-stepper__title">Votre dossier</h2>
          <div class="bj-stepper__steps" role="list">
            <div class="bj-stepper__step bj-stepper__step--done" role="listitem">Identité</div>
            <div class="bj-stepper__step bj-stepper__step--current" role="listitem" aria-current="step">Pièces</div>
            <div class="bj-stepper__step" role="listitem">Validation</div>
          </div>
          <p class="bj-stepper__detail">Complétez les champs obligatoires avant la suite.</p>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-stepper-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
