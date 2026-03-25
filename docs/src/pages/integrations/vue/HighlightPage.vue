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
      desc: 'Encadré de mise en exergue avec bordure gauche et taille de texte configurable.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-size': 'sm, md (défaut) ou lg — padding et taille de police.',
      'ex-p': 'Ce paragraphe est mis en exergue pour faciliter la lecture des points clés.',
      'code-p': 'Ce paragraphe est mis en exergue pour faciliter la lecture des points clés.',
    },
    en: {
      title: 'BjHighlight',
      desc: 'Emphasis block with a left border and configurable text size.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-size': 'sm, md (default), or lg — padding and font size.',
      'ex-p': 'This paragraph is highlighted to make key points easier to read.',
      'code-p': 'This paragraph is highlighted to make key points easier to read.',
    },
  },
})

const codeUsage = computed(() => {
  const p = t('code-p')
  return `<script setup>
import { BjHighlight } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <BjHighlight size="lg">
    <p>${p}</p>
  </BjHighlight>
</template>`
})

const propsRows = computed(() => [{ name: 'size', description: t('prop-size') }])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-highlight-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-highlight-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-highlight bj-highlight--lg">
        <p>{{ t('ex-p') }}</p>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-highlight-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
