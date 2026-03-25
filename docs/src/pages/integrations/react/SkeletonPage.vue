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
      title: 'BjSkeleton',
      desc: 'Placeholder de chargement animé : variantes text par défaut, heading, circle ou rect, avec tailles sm, md par défaut ou lg ; aria-hidden est défini sur le div racine.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-variant': 'text par défaut, heading, circle ou rect.',
      'prop-size': 'sm, md par défaut ou lg.',
    },
    en: {
      title: 'BjSkeleton',
      desc: 'Animated loading placeholder: text by default, heading, circle, or rect variants; sm, md by default, or lg; aria-hidden is set on the root div.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-variant': 'text by default, heading, circle, or rect.',
      'prop-size': 'sm, md by default, or lg.',
    },
  },
})

const codeUsage = `import { BjSkeleton } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--bj-spacing-3v)', maxWidth: '20rem' }}>
      <BjSkeleton variant="heading" />
      <BjSkeleton variant="text" />
      <BjSkeleton variant="text" size="sm" />
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--bj-spacing-3v)' }}>
        <BjSkeleton variant="circle" size="lg" />
        <BjSkeleton variant="rect" style={{ flex: 1, minHeight: '3rem' }} />
      </div>
    </div>
  )
}`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-skeleton-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-skeleton-preview" :title="t('section-preview')">
    <DocsPreview>
      <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 20rem">
        <div class="bj-skeleton bj-skeleton--heading" aria-hidden="true" />
        <div class="bj-skeleton bj-skeleton--text" aria-hidden="true" />
        <div class="bj-skeleton bj-skeleton--text bj-skeleton--sm" aria-hidden="true" />
        <div style="display: flex; align-items: center; gap: var(--bj-spacing-3v)">
          <div class="bj-skeleton bj-skeleton--circle bj-skeleton--lg" aria-hidden="true" />
          <div class="bj-skeleton bj-skeleton--rect" style="flex: 1; min-height: 3rem" aria-hidden="true" />
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-skeleton-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
