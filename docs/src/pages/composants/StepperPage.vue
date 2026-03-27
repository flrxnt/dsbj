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
      title: 'Indicateur d\u2019étapes',
      desc:
        'Progression d\u2019une démarche multi-écrans : en-tête, titre, barres d\u2019étapes, détail optionnel ; variante verticale <code>bj-stepper--vertical</code>.',
      'section-horizontal': 'Horizontal (par défaut)',
      'section-vertical': 'Vertical',
      'section-detail': 'Avec texte de détail',
      'section-combo': 'Combinaisons',
      'section-combo-p':
        'On peut combiner <code>bj-stepper--vertical</code> avec un <code>bj-stepper__detail</code> ; les modificateurs <code>bj-stepper__step--done</code> et <code>bj-stepper__step--current</code> s\u2019appliquent à chaque étape.',
      'section-classes-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-root': 'Conteneur principal.',
      'prop-vertical-mod': 'Barres d\u2019étapes en colonne (segments verticaux).',
      'prop-header': 'Bloc regroupant titre, liste d\u2019étapes et détail (comme <code>BjStepper</code>).',
      'prop-title': 'Titre de la démarche (<code>h2</code> recommandé).',
      'prop-steps': 'Conteneur flex des segments d\u2019étape.',
      'prop-step': 'Segment d\u2019une étape (barre).',
      'prop-step-current': 'Étape courante.',
      'prop-step-done': 'Étape terminée.',
      'prop-detail': 'Texte d\u2019aide sous les étapes.',
      'a11y-note':
        'Le composant Vue expose <code>role="navigation"</code> et <code>aria-label</code> ; pour une version HTML pure, utilisez <code>role="list"</code> sur <code>bj-stepper__steps</code> et <code>role="listitem"</code> sur chaque <code>bj-stepper__step</code> si le libellé est dans l\u2019élément.',
    },
    en: {
      title: 'Step indicator',
      desc:
        'Progress through a multi-step flow: header, title, step bars, optional detail; vertical variant <code>bj-stepper--vertical</code>.',
      'section-horizontal': 'Horizontal (default)',
      'section-vertical': 'Vertical',
      'section-detail': 'With detail text',
      'section-combo': 'Combinations',
      'section-combo-p':
        'You can combine <code>bj-stepper--vertical</code> with <code>bj-stepper__detail</code>; <code>bj-stepper__step--done</code> and <code>bj-stepper__step--current</code> apply per step.',
      'section-classes-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-root': 'Root container.',
      'prop-vertical-mod': 'Vertical step bars (column layout).',
      'prop-header': 'Wrapper for title, step list and detail (same as <code>BjStepper</code>).',
      'prop-title': 'Flow title (prefer <code>h2</code>).',
      'prop-steps': 'Flex container for step segments.',
      'prop-step': 'Single step segment (bar).',
      'prop-step-current': 'Current step.',
      'prop-step-done': 'Completed step.',
      'prop-detail': 'Helper text below the steps.',
      'a11y-note':
        'The Vue component sets <code>role="navigation"</code> and <code>aria-label</code>; for plain HTML, use <code>role="list"</code> on <code>bj-stepper__steps</code> and <code>role="listitem"</code> on each <code>bj-stepper__step</code> when the label lives inside the element.',
    },
  },
})

const codeHorizontal = `<div class="bj-stepper" role="navigation" aria-label="Étapes">
  <div class="bj-stepper__header">
    <h2 class="bj-stepper__title">Votre dossier</h2>
    <div class="bj-stepper__steps" role="list">
      <div class="bj-stepper__step bj-stepper__step--done" role="listitem">Pièces</div>
      <div class="bj-stepper__step bj-stepper__step--current" role="listitem" aria-current="step">Vérification</div>
      <div class="bj-stepper__step" role="listitem">Validation</div>
    </div>
  </div>
</div>`

const codeVertical = `<div class="bj-stepper bj-stepper--vertical" role="navigation" aria-label="Étapes">
  <div class="bj-stepper__header">
    <h2 class="bj-stepper__title">Étapes</h2>
    <div class="bj-stepper__steps" role="list">
      <div class="bj-stepper__step bj-stepper__step--done" role="listitem">1</div>
      <div class="bj-stepper__step bj-stepper__step--current" role="listitem" aria-current="step">2</div>
      <div class="bj-stepper__step" role="listitem">3</div>
    </div>
  </div>
</div>`

const codeDetail = `<div class="bj-stepper" role="navigation" aria-label="Étapes">
  <div class="bj-stepper__header">
    <h2 class="bj-stepper__title">Inscription</h2>
    <div class="bj-stepper__steps" role="list">
      <div class="bj-stepper__step bj-stepper__step--done" role="listitem"></div>
      <div class="bj-stepper__step bj-stepper__step--current" role="listitem" aria-current="step"></div>
      <div class="bj-stepper__step" role="listitem"></div>
    </div>
    <p class="bj-stepper__detail">Complétez les champs obligatoires avant de continuer.</p>
  </div>
</div>`

const codeCombo = `<div class="bj-stepper bj-stepper--vertical" role="navigation" aria-label="Étapes">
  <div class="bj-stepper__header">
    <h2 class="bj-stepper__title">Vertical + détail</h2>
    <div class="bj-stepper__steps" role="list">
      <div class="bj-stepper__step bj-stepper__step--done" role="listitem"></div>
      <div class="bj-stepper__step bj-stepper__step--current" role="listitem" aria-current="step"></div>
      <div class="bj-stepper__step" role="listitem"></div>
    </div>
    <p class="bj-stepper__detail">Dernière ligne droite.</p>
  </div>
</div>`

const propsRows = computed(() => [
  { name: 'bj-stepper', description: t('prop-root') },
  { name: 'bj-stepper--vertical', description: t('prop-vertical-mod') },
  { name: 'bj-stepper__header', description: t('prop-header') },
  { name: 'bj-stepper__title', description: t('prop-title') },
  { name: 'bj-stepper__steps', description: t('prop-steps') },
  { name: 'bj-stepper__step', description: t('prop-step') },
  { name: 'bj-stepper__step--current', description: t('prop-step-current') },
  { name: 'bj-stepper__step--done', description: t('prop-step-done') },
  { name: 'bj-stepper__detail', description: t('prop-detail') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
    v-html="t('desc')"
  />

  <DocsSection id="sec-horizontal" :title="t('section-horizontal')">
    <DocsPreview>
      <div class="bj-stepper" role="navigation" aria-label="Étapes">
        <div class="bj-stepper__header">
          <h2 class="bj-stepper__title">Votre dossier</h2>
          <div class="bj-stepper__steps" role="list">
            <div
              class="bj-stepper__step bj-stepper__step--done"
              role="listitem"
            >
              Pièces
            </div>
            <div
              class="bj-stepper__step bj-stepper__step--current"
              role="listitem"
              aria-current="step"
            >
              Vérification
            </div>
            <div class="bj-stepper__step" role="listitem">Validation</div>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeHorizontal" />
  </DocsSection>

  <DocsSection id="sec-vertical" :title="t('section-vertical')">
    <DocsPreview>
      <div
        class="bj-stepper bj-stepper--vertical"
        role="navigation"
        aria-label="Étapes"
        style="max-width: 14rem"
      >
        <div class="bj-stepper__header">
          <h2 class="bj-stepper__title">Étapes</h2>
          <div class="bj-stepper__steps" role="list">
            <div
              class="bj-stepper__step bj-stepper__step--done"
              role="listitem"
            >
              1
            </div>
            <div
              class="bj-stepper__step bj-stepper__step--current"
              role="listitem"
              aria-current="step"
            >
              2
            </div>
            <div class="bj-stepper__step" role="listitem">3</div>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVertical" />
  </DocsSection>

  <DocsSection id="sec-detail" :title="t('section-detail')">
    <DocsPreview>
      <div class="bj-stepper" role="navigation" aria-label="Étapes">
        <div class="bj-stepper__header">
          <h2 class="bj-stepper__title">Inscription</h2>
          <div class="bj-stepper__steps" role="list">
            <div
              class="bj-stepper__step bj-stepper__step--done"
              role="listitem"
            />
            <div
              class="bj-stepper__step bj-stepper__step--current"
              role="listitem"
              aria-current="step"
            />
            <div class="bj-stepper__step" role="listitem" />
          </div>
          <p class="bj-stepper__detail">
            Complétez les champs obligatoires avant de continuer.
          </p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDetail" />
  </DocsSection>

  <DocsSection id="sec-combo" :title="t('section-combo')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)" v-html="t('section-combo-p')" />
    <DocsPreview>
      <div
        class="bj-stepper bj-stepper--vertical"
        role="navigation"
        aria-label="Étapes"
        style="max-width: 14rem"
      >
        <div class="bj-stepper__header">
          <h2 class="bj-stepper__title">Vertical + détail</h2>
          <div class="bj-stepper__steps" role="list">
            <div
              class="bj-stepper__step bj-stepper__step--done"
              role="listitem"
            />
            <div
              class="bj-stepper__step bj-stepper__step--current"
              role="listitem"
              aria-current="step"
            />
            <div class="bj-stepper__step" role="listitem" />
          </div>
          <p class="bj-stepper__detail">Dernière ligne droite.</p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombo" />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
