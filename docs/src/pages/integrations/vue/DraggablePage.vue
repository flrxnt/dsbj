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
      title: 'BjDraggable — Vue',
      desc: 'Composant Vue 3 pour créer des listes réordonnables par glisser-déposer.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu interactif',
      'section-props': 'Props',
      'section-events': 'Événements',
      'section-slots': 'Slots',
      'section-accessibilite': 'Accessibilité',
      'a11y-note': 'Les éléments sont navigables au clavier avec les touches <code>Flèche haut</code> et <code>Flèche bas</code>. Chaque élément possède un <code>role="listitem"</code> et un <code>aria-label</code>.',
      'prop-items': 'Tableau de chaînes représentant les éléments à afficher.',
      'prop-handle': 'Affiche la poignée de glissement (défaut : true).',
      'prop-disabled': 'Désactive le glisser-déposer.',
      'prop-tag': 'Balise HTML du conteneur (défaut : "div").',
      'event-reorder': "Émis lors du réordonnancement. Payload : {'{'} from: number, to: number {'}'}.",
      'slot-default': 'Slot scopé pour personnaliser le rendu de chaque élément. Props : item, index.',
    },
    en: {
      title: 'BjDraggable — Vue',
      desc: 'Vue 3 component for creating drag-and-drop reorderable lists.',
      'section-usage': 'Usage',
      'section-preview': 'Interactive preview',
      'section-props': 'Props',
      'section-events': 'Events',
      'section-slots': 'Slots',
      'section-accessibilite': 'Accessibility',
      'a11y-note': 'Items are keyboard-navigable using <code>Arrow Up</code> and <code>Arrow Down</code> keys. Each item has <code>role="listitem"</code> and an <code>aria-label</code>.',
      'prop-items': 'Array of strings representing items to display.',
      'prop-handle': 'Shows the drag handle (default: true).',
      'prop-disabled': 'Disables drag and drop.',
      'prop-tag': 'HTML tag for the container (default: "div").',
      'event-reorder': "Emitted on reorder. Payload: {'{'} from: number, to: number {'}'}.",
      'slot-default': 'Scoped slot to customise each item rendering. Props: item, index.',
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

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjDraggable } from '@flrxnt/dsbj/vue'

const items = ref(['Élément A', 'Élément B', 'Élément C'])

function onReorder({ from, to }) {
  const arr = [...items.value]
  const [moved] = arr.splice(from, 1)
  arr.splice(to, 0, moved)
  items.value = arr
}
<\/script>

<template>
  <BjDraggable :items="items" @reorder="onReorder" />
</template>`

const codeSlot = `<BjDraggable :items="items" @reorder="onReorder">
  <template #default="{ item, index }">
    <strong>{{ index + 1 }}.</strong> {{ item }}
  </template>
</BjDraggable>`

const propsRows = computed(() => [
  { name: 'items', description: t('prop-items') },
  { name: 'handle', description: t('prop-handle') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'tag', description: t('prop-tag') },
])

const eventsRows = computed(() => [
  { name: 'reorder', description: t('event-reorder') },
])

const slotsRows = computed(() => [
  { name: 'default', description: t('slot-default') },
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
        <BjDraggable :items="items" @reorder="onReorder" />
      </DocsPreview>
    </DocsSection>

    <DocsSection :title="t('section-slots')">
      <DocsPreview>
        <BjDraggable :items="items" @reorder="onReorder">
          <template #default="{ item, index }">
            <strong>{{ index + 1 }}.</strong> {{ item }}
          </template>
        </BjDraggable>
      </DocsPreview>
      <DocsCode :code="codeSlot" language="vue" />
    </DocsSection>

    <DocsSection :title="t('section-props')">
      <DocsPropsTable :rows="propsRows" />
    </DocsSection>

    <DocsSection :title="t('section-events')">
      <DocsPropsTable :rows="eventsRows" />
    </DocsSection>

    <DocsSection id="a11y-draggable" :title="t('section-accessibilite')">
      <DocsA11yNote>
        <span v-html="t('a11y-note')" />
      </DocsA11yNote>
    </DocsSection>
  </div>
</template>
