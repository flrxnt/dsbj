<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import BjDraggable from '@dsbj/vue/components/BjDraggable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjDraggable — React',
      desc: 'Composant React pour créer des listes réordonnables par glisser-déposer.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu interactif',
      'section-props': 'Props',
      'section-accessibilite': 'Accessibilité',
      'a11y-note': 'Les éléments sont navigables au clavier avec les touches <code>Flèche haut</code> et <code>Flèche bas</code>. Chaque élément possède un <code>role="listitem"</code> et un <code>aria-label</code>.',
      'prop-items': 'Tableau de chaînes représentant les éléments.',
      'prop-handle': 'Affiche la poignée de glissement (défaut : true).',
      'prop-disabled': 'Désactive le glisser-déposer.',
      'prop-className': 'Classe CSS additionnelle.',
      'prop-renderItem': 'Fonction de rendu personnalisé : (item, index) => ReactNode.',
    },
    en: {
      title: 'BjDraggable — React',
      desc: 'React component for creating drag-and-drop reorderable lists.',
      'section-usage': 'Usage',
      'section-preview': 'Interactive preview',
      'section-props': 'Props',
      'section-accessibilite': 'Accessibility',
      'a11y-note': 'Items are keyboard-navigable using <code>Arrow Up</code> and <code>Arrow Down</code> keys. Each item has <code>role="listitem"</code> and an <code>aria-label</code>.',
      'prop-items': 'Array of strings representing items.',
      'prop-handle': 'Shows the drag handle (default: true).',
      'prop-disabled': 'Disables drag and drop.',
      'prop-className': 'Additional CSS class.',
      'prop-renderItem': 'Custom render function: (item, index) => ReactNode.',
    },
  },
})

const items = ref(['Élément A', 'Élément B', 'Élément C', 'Élément D'])

function onReorder({ from, to }: { from: number; to: number }) {
  const arr = [...items.value]
  const [moved] = arr.splice(from, 1)
  arr.splice(to, 0, moved)
  items.value = arr
}

const codeUsage = `import { useState } from 'react'
import { BjDraggable } from '@flrxnt/dsbj/react'

function App() {
  const [items, setItems] = useState(['Élément A', 'Élément B', 'Élément C'])

  return (
    <BjDraggable
      items={items}
      handle
    />
  )
}`

const propsRows = computed(() => [
  { name: 'items', description: t('prop-items') },
  { name: 'handle', description: t('prop-handle') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'className', description: t('prop-className') },
  { name: 'renderItem', description: t('prop-renderItem') },
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
        <BjDraggable :items="items" @reorder="onReorder" />
      </DocsPreview>
    </DocsSection>

    <DocsSection :title="t('section-props')">
      <DocsPropsTable :rows="propsRows" />
    </DocsSection>

    <DocsSection id="a11y-draggable" :title="t('section-accessibilite')">
      <DocsA11yNote>
        <span v-html="t('a11y-note')" />
      </DocsA11yNote>
    </DocsSection>
  </div>
</template>
