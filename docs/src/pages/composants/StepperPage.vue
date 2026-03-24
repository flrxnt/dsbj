<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Indicateur d’étapes',
      desc:
        'Progression d’une démarche multi-écrans ; variante verticale disponible.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-block': 'Bloc.',
      'prop-texts': 'Textes.',
      'prop-bars': 'Barres.',
      'prop-vertical': 'Disposition.',
      'a11y-1': 'sur les barres si l’étape est déjà décrite textuellement.',
    },
    en: {
      title: 'Step indicator',
      desc:
        'Progress through a multi-step flow; a vertical variant is available.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-block': 'Block.',
      'prop-texts': 'Text slots.',
      'prop-bars': 'Step bars.',
      'prop-vertical': 'Layout.',
      'a11y-1': 'on the bars if the step is already described in text.',
    },
  },
})

const codeStepper = `<div class="bj-stepper">…</div>`

const propsRows = computed(() => [
  { name: 'bj-stepper', description: t('prop-block') },
  {
    name: 'bj-stepper__header / bj-stepper__title / bj-stepper__detail',
    description: t('prop-texts'),
  },
  {
    name: 'bj-stepper__steps / bj-stepper__step',
    description: t('prop-bars'),
  },
  { name: 'bj-stepper--vertical', description: t('prop-vertical') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="sec-exemple" :title="t('section-example')">
    <DocsPreview>
      <div class="bj-stepper">
        <p class="bj-stepper__header">Étape 2 sur 4</p>
        <h2 class="bj-stepper__title">Vos informations</h2>
        <div class="bj-stepper__steps" role="presentation">
          <span class="bj-stepper__step bj-stepper__step--done"></span>
          <span class="bj-stepper__step bj-stepper__step--current"></span>
          <span class="bj-stepper__step"></span>
          <span class="bj-stepper__step"></span>
        </div>
        <p class="bj-stepper__detail">Champs obligatoires avant la suite.</p>
      </div>
      <div
        class="bj-stepper bj-stepper--vertical"
        style="margin-top: var(--bj-spacing-6v); max-width: 12rem"
      >
        <p class="bj-stepper__header">Vertical</p>
        <div class="bj-stepper__steps" role="presentation">
          <span class="bj-stepper__step bj-stepper__step--done"></span>
          <span class="bj-stepper__step bj-stepper__step--current"></span>
          <span class="bj-stepper__step"></span>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeStepper" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>bj-stepper__step--current</code>,
      <code>bj-stepper__step--done</code>, <code>bj-stepper--vertical</code>.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      <code>role="presentation"</code>
      {{ t('a11y-1') }}
    </DocsA11yNote>
  </DocsSection>
</template>
