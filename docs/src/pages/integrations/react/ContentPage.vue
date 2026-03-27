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
      title: 'BjContent',
      desc: 'Conteneur de contenu éditorial React : applique les styles typographiques DSBJ au HTML riche.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-children': 'Contenu HTML riche à styliser.',
      'prop-div': 'Attributs div natifs supplémentaires.',
      'preview-title': 'Titre de section',
      'preview-text': 'Ceci est un paragraphe de contenu éditorial stylisé automatiquement par le composant BjContent.',
    },
    en: {
      title: 'BjContent',
      desc: 'React editorial content wrapper: applies DSBJ typographic styles to rich HTML.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-children': 'Rich HTML content to style.',
      'prop-div': 'Extra native div attributes are forwarded.',
      'preview-title': 'Section title',
      'preview-text': 'This is an editorial content paragraph automatically styled by the BjContent component.',
    },
  },
})

const codeUsage = `import { BjContent } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjContent>
      <h2>Titre</h2>
      <p>Contenu éditorial avec styles typographiques DSBJ.</p>
    </BjContent>
  )
}`

const propsRows = computed(() => [
  { name: 'children', description: t('prop-children') },
  { name: '(div props)', description: t('prop-div') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-content-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-content-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-content">
        <h2>{{ t('preview-title') }}</h2>
        <p>{{ t('preview-text') }}</p>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-content-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
