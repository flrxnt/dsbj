<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCard from '@docs/components/DocsCard.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Intégrations',
      desc: 'Utilisez les composants DSBJ dans vos projets Vue ou React. Ces wrappers encapsulent les classes CSS du design système et exposent des props typées, des slots et des événements natifs du framework.',
      'card-vue-title': 'Vue 3',
      'card-vue-desc': 'Composants Vue 3 avec Composition API, v-model, slots et TypeScript.',
      'card-react-title': 'React',
      'card-react-desc': 'Composants React avec hooks, forwardRef et TypeScript.',
    },
    en: {
      title: 'Integrations',
      desc: 'Use DSBJ components in your Vue or React projects. These wrappers encapsulate the design system CSS classes and expose typed props, slots, and framework-native events.',
      'card-vue-title': 'Vue 3',
      'card-vue-desc': 'Vue 3 components with Composition API, v-model, slots and TypeScript.',
      'card-react-title': 'React',
      'card-react-desc': 'React components with hooks, forwardRef and TypeScript.',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>
  <div class="docs-cards" style="margin-top: var(--bj-spacing-6v)">
    <DocsCard to="/integrations/vue" icon="ri-vuejs-fill" :title="t('card-vue-title')" :description="t('card-vue-desc')" />
    <DocsCard to="/integrations/react" icon="ri-reactjs-line" :title="t('card-react-title')" :description="t('card-react-desc')" />
  </div>
</template>
