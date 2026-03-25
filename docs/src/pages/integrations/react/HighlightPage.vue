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
      title: 'BjHighlight',
      desc: 'Encadré de mise en exergue avec bordure gauche ; taille sm, md par défaut ou lg pour le padding et la typographie.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-size': 'sm, md par défaut ou lg.',
      'ex-p': 'Ce paragraphe est mis en exergue pour faciliter la lecture des points clés.',
    },
    en: {
      title: 'BjHighlight',
      desc: 'Emphasis block with a left border; sm, md by default, or lg for padding and type scale.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-size': 'sm, md by default, or lg.',
      'ex-p': 'This paragraph is highlighted to make key points easier to read.',
    },
  },
})

const codeUsage = `import { BjHighlight } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjHighlight size="lg">
      <p>Ce paragraphe est mis en exergue pour faciliter la lecture des points clés.</p>
    </BjHighlight>
  )
}`

const propsRows = computed(() => [{ name: 'size', description: t('prop-size') }])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-highlight-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-highlight-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-highlight bj-highlight--lg">
        <p>{{ t('ex-p') }}</p>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-highlight-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
