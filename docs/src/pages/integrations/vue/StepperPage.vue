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
      desc: 'Indicateur d’étapes pour un parcours (formulaire, démarche) avec étape courante et états complétés.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-title': 'Titre affiché au-dessus de la liste d’étapes.',
      'prop-steps': 'Tableau d’étapes : label et done optionnel pour chaque entrée.',
      'prop-current': 'Index de l’étape courante (0-based).',
      'prop-vertical': 'Affichage vertical si true.',
      'prop-detail': 'Texte descriptif sous les étapes.',
      'step-1': 'Informations',
      'step-2': 'Pièces jointes',
      'step-3': 'Validation',
      'detail-text': 'Complétez les champs obligatoires avant de continuer.',
      'preview-flow-title': 'Démarche',
    },
    en: {
      title: 'BjStepper',
      desc: 'Step indicator for flows (forms, procedures) with current step and completed states.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-title': 'Title shown above the step list.',
      'prop-steps': 'Array of steps: label and optional done for each entry.',
      'prop-current': 'Index of the current step (0-based).',
      'prop-vertical': 'Vertical layout when true.',
      'prop-detail': 'Descriptive text below the steps.',
      'step-1': 'Information',
      'step-2': 'Attachments',
      'step-3': 'Review',
      'detail-text': 'Complete the required fields before continuing.',
    },
  },
})

const codeUsage = `<script setup>
import { BjStepper } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjStepper
    title="Démarche"
    :steps="[
      { label: 'Informations', done: true },
      { label: 'Pièces jointes' },
      { label: 'Validation' },
    ]"
    :current="1"
    detail="Texte d’aide sous les étapes."
  >
    <p>Contenu de l’étape courante</p>
  </BjStepper>
</template>`

const propsRows = computed(() => [
  { name: 'title', description: t('prop-title') },
  { name: 'steps', description: t('prop-steps') },
  { name: 'current', description: t('prop-current') },
  { name: 'vertical', description: t('prop-vertical') },
  { name: 'detail', description: t('prop-detail') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-stepper-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-stepper-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-stepper" role="navigation" aria-label="Étapes">
        <div class="bj-stepper__header">
          <h2 class="bj-stepper__title">{{ t('preview-flow-title') }}</h2>
          <div class="bj-stepper__steps" role="list">
            <div class="bj-stepper__step bj-stepper__step--done" role="listitem">{{ t('step-1') }}</div>
            <div class="bj-stepper__step bj-stepper__step--current" role="listitem" aria-current="step">{{ t('step-2') }}</div>
            <div class="bj-stepper__step" role="listitem">{{ t('step-3') }}</div>
          </div>
          <p class="bj-stepper__detail">{{ t('detail-text') }}</p>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-stepper-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
