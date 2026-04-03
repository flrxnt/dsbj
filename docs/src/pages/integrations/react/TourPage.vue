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
      title: 'BjTour — React',
      desc: 'Composant React pour créer une visite guidée pas à pas de l\'interface.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu interactif',
      'section-props': 'Props',
      'section-accessibilite': 'Accessibilité',
      'a11y-note': 'Le popover possède <code>role="dialog"</code>. Le focus est piégé pendant la visite. Navigation au clavier : <code>Flèche droite</code> (suivant), <code>Flèche gauche</code> (précédent), <code>Échap</code> (fermer). Le focus est restauré après fermeture.',
      'prop-steps': "Tableau d'objets {'{'} target, title, content, placement? {'}'} décrivant les étapes.",
      'prop-open': 'État ouvert/fermé du tour.',
      'prop-onOpenChange': "Callback déclenché à l'ouverture ou fermeture.",
      'prop-onChange': "Callback déclenché au changement d'étape. Paramètre : {'{'} step, total {'}'}.",
      'prop-onStart': 'Callback déclenché au démarrage de la visite.',
      'prop-onEnd': 'Callback déclenché à la fin de la visite.',
    },
    en: {
      title: 'BjTour — React',
      desc: 'React component to create a step-by-step guided tour of the interface.',
      'section-usage': 'Usage',
      'section-preview': 'Interactive preview',
      'section-props': 'Props',
      'section-accessibilite': 'Accessibility',
      'a11y-note': 'The popover has <code>role="dialog"</code>. Focus is trapped during the tour. Keyboard navigation: <code>Arrow Right</code> (next), <code>Arrow Left</code> (previous), <code>Escape</code> (close). Focus is restored after closing.',
      'prop-steps': "Array of {'{'} target, title, content, placement? {'}'} objects describing steps.",
      'prop-open': 'Open/close state of the tour.',
      'prop-onOpenChange': 'Callback triggered on open or close.',
      'prop-onChange': "Callback triggered on step change. Parameter: {'{'} step, total {'}'}.",
      'prop-onStart': 'Callback triggered when the tour starts.',
      'prop-onEnd': 'Callback triggered when the tour ends.',
    },
  },
})

const showTour = ref(false)
const steps = [
  { target: '#react-tour-demo-1', title: 'Bienvenue', content: 'Ceci est la première étape de la visite.', placement: 'bottom' as const },
  { target: '#react-tour-demo-2', title: 'Fonctionnalités', content: 'Découvrez les différentes fonctionnalités.', placement: 'bottom' as const },
  { target: '#react-tour-demo-3', title: 'Terminé', content: 'Prêt à utiliser l\'application !', placement: 'bottom' as const },
]

const codeUsage = `import { useState } from 'react'
import { BjTour } from '@flrxnt/dsbj/react'

const steps = [
  { target: '#step-1', title: 'Bienvenue', content: 'Première étape.', placement: 'bottom' },
  { target: '#step-2', title: 'Suite', content: 'Deuxième étape.', placement: 'right' },
]

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="bj-btn" onClick={() => setOpen(true)}>
        Démarrer la visite
      </button>
      <BjTour
        steps={steps}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  )
}`

const propsRows = computed(() => [
  { name: 'steps', description: t('prop-steps') },
  { name: 'open', description: t('prop-open') },
  { name: 'onOpenChange', description: t('prop-onOpenChange') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: 'onStart', description: t('prop-onStart') },
  { name: 'onEnd', description: t('prop-onEnd') },
])
</script>

<template>
  <div class="docs-content">
    <h1>{{ t('title') }}</h1>
    <p class="docs-intro">{{ t('desc') }}</p>

    <DocsSection :title="t('section-usage')">
      <DocsCode :code="codeUsage" language="tsx" />
    </DocsSection>

    <DocsSection :title="t('section-preview')">
      <DocsPreview>
        <div style="display: flex; gap: var(--bj-spacing-4v); align-items: center; margin-bottom: var(--bj-spacing-4v);">
          <span id="react-tour-demo-1" class="bj-badge bj-badge--info">Étape 1</span>
          <span id="react-tour-demo-2" class="bj-badge bj-badge--success">Étape 2</span>
          <span id="react-tour-demo-3" class="bj-badge bj-badge--warning">Étape 3</span>
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

    <DocsSection id="a11y-tour" :title="t('section-accessibilite')">
      <DocsA11yNote>
        <span v-html="t('a11y-note')" />
      </DocsA11yNote>
    </DocsSection>
  </div>
</template>
