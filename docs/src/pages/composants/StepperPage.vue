<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeStepper = `<div class="bj-stepper">…</div>`

const propsRows = [
  { name: 'bj-stepper', description: 'Bloc.' },
  {
    name: 'bj-stepper__header / bj-stepper__title / bj-stepper__detail',
    description: 'Textes.',
  },
  {
    name: 'bj-stepper__steps / bj-stepper__step',
    description: 'Barres.',
  },
  { name: 'bj-stepper--vertical', description: 'Disposition.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Indicateur d’étapes
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Progression d’une démarche multi-écrans ; variante verticale disponible.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
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

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>bj-stepper__step--current</code>,
      <code>bj-stepper__step--done</code>, <code>bj-stepper--vertical</code>.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      <code>role="presentation"</code> sur les barres si l’étape est déjà
      décrite textuellement.
    </DocsA11yNote>
  </DocsSection>
</template>
