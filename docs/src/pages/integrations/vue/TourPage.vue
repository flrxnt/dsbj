<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import BjTour from '@dsbj/vue/components/BjTour.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjTour — Vue',
      desc: "Composant Vue 3 pour créer une visite guidée pas à pas de l'interface.",
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu interactif',
      'section-props': 'Props',
      'section-events': 'Événements',
      'section-slots': 'Slots',
      'section-accessibilite': 'Accessibilité',
      'a11y-note': 'Le popover possède <code>role="dialog"</code>. Le focus est piégé pendant la visite. Navigation au clavier : <code>Flèche droite</code> (suivant), <code>Flèche gauche</code> (précédent), <code>Échap</code> (fermer). Le focus est restauré après fermeture.',
      'prop-steps': "Tableau d'objets {'{'} target, title, content, placement? {'}'} décrivant les étapes.",
      'prop-modelValue': 'État ouvert/fermé du tour (v-model).',
      'event-change': "Émis au changement d'étape. Payload : {'{'} step: number, total: number {'}'}.",
      'event-start': 'Émis au démarrage de la visite.',
      'event-end': 'Émis à la fin de la visite.',
      'slot-trigger': "Slot pour l'élément déclencheur. Prop : open (fonction).",
    },
    en: {
      title: 'BjTour — Vue',
      desc: 'Vue 3 component to create a step-by-step guided tour of the interface.',
      'section-usage': 'Usage',
      'section-preview': 'Interactive preview',
      'section-props': 'Props',
      'section-events': 'Events',
      'section-slots': 'Slots',
      'section-accessibilite': 'Accessibility',
      'a11y-note': 'The popover has <code>role="dialog"</code>. Focus is trapped during the tour. Keyboard navigation: <code>Arrow Right</code> (next), <code>Arrow Left</code> (previous), <code>Escape</code> (close). Focus is restored after closing.',
      'prop-steps': "Array of {'{'} target, title, content, placement? {'}'} objects describing steps.",
      'prop-modelValue': 'Open/close state of the tour (v-model).',
      'event-change': "Emitted on step change. Payload: {'{'} step: number, total: number {'}'}.",
      'event-start': 'Emitted when the tour starts.',
      'event-end': 'Emitted when the tour ends.',
      'slot-trigger': 'Slot for the trigger element. Prop: open (function).',
    },
  },
})

const showTour = ref(false)
const steps = [
  { target: '#vue-tour-demo-1', title: 'Bienvenue', content: 'Ceci est la première étape de la visite.', placement: 'bottom' as const },
  { target: '#vue-tour-demo-2', title: 'Fonctionnalités', content: 'Découvrez les différentes fonctionnalités disponibles.', placement: 'bottom' as const },
  { target: '#vue-tour-demo-3', title: 'Terminé', content: 'Vous êtes maintenant prêt à utiliser l\'application !', placement: 'bottom' as const },
]

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjTour } from '@flrxnt/dsbj/vue'

const showTour = ref(false)
const steps = [
  { target: '#step-1', title: 'Bienvenue', content: 'Première étape.', placement: 'bottom' },
  { target: '#step-2', title: 'Suite', content: 'Deuxième étape.', placement: 'right' },
]
<\/script>

<template>
  <BjTour v-model="showTour" :steps="steps">
    <template #trigger="{ open }">
      <button class="bj-btn" @click="open">Démarrer la visite</button>
    </template>
  </BjTour>
</template>`

const propsRows = computed(() => [
  { name: 'steps', description: t('prop-steps') },
  { name: 'modelValue', description: t('prop-modelValue') },
])

const eventsRows = computed(() => [
  { name: 'change', description: t('event-change') },
  { name: 'start', description: t('event-start') },
  { name: 'end', description: t('event-end') },
])

const slotsRows = computed(() => [
  { name: 'trigger', description: t('slot-trigger') },
])
</script>

<template>
  <div class="docs-content">
    <h1>{{ t('title') }}</h1>
    <p class="docs-intro">{{ t('desc') }}</p>

    <DocsSection :title="t('section-usage')">
      <DocsCode :code="codeUsage" language="vue" />
    </DocsSection>

    <DocsSection :title="t('section-preview')">
      <DocsPreview>
        <div style="display: flex; gap: var(--bj-spacing-4v); align-items: center; margin-bottom: var(--bj-spacing-4v);">
          <span id="vue-tour-demo-1" class="bj-badge bj-badge--info">Étape 1</span>
          <span id="vue-tour-demo-2" class="bj-badge bj-badge--success">Étape 2</span>
          <span id="vue-tour-demo-3" class="bj-badge bj-badge--warning">Étape 3</span>
        </div>
        <BjTour v-model="showTour" :steps="steps">
          <template #trigger="{ open }">
            <button class="bj-btn" @click="open">Démarrer la visite</button>
          </template>
        </BjTour>
      </DocsPreview>
    </DocsSection>

    <DocsSection :title="t('section-props')">
      <DocsPropsTable :rows="propsRows" />
    </DocsSection>

    <DocsSection :title="t('section-events')">
      <DocsPropsTable :rows="eventsRows" />
    </DocsSection>

    <DocsSection :title="t('section-slots')">
      <DocsPropsTable :rows="slotsRows" />
    </DocsSection>

    <DocsSection id="a11y-tour" :title="t('section-accessibilite')">
      <DocsA11yNote>
        <span v-html="t('a11y-note')" />
      </DocsA11yNote>
    </DocsSection>
  </div>
</template>
