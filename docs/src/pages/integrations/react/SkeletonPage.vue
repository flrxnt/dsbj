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
      desc: 'Placeholder React : variantes text, heading, circle, rect ; tailles sm, md, lg ; aria-hidden sur le div racine.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-variants': 'Variantes',
      'section-sizes': 'Tailles',
      'section-matrix': 'Variantes × tailles',
      'section-layout': 'Mise en page',
      'section-props': 'Props',
      'prop-variant': 'text (défaut), heading, circle ou rect.',
      'prop-size': 'sm, md (défaut) ou lg.',
      'prop-attrs': 'style, className, etc. fusionnés sur le div.',
      'layout-desc': 'Enchaînez plusieurs BjSkeleton pour simuler une carte.',
    },
    en: {
      title: 'BjSkeleton',
      desc: 'React placeholder: text, heading, circle, rect variants; sm, md, lg; aria-hidden on the root div.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-variants': 'Variants',
      'section-sizes': 'Sizes',
      'section-matrix': 'Variants × sizes',
      'section-layout': 'Layout',
      'section-props': 'Props',
      'prop-variant': 'text (default), heading, circle, or rect.',
      'prop-size': 'sm, md (default), or lg.',
      'prop-attrs': 'style, className, etc. merged on the div.',
      'layout-desc': 'Chain multiple BjSkeleton nodes to mimic a card.',
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

const codeVariants = `<BjSkeleton variant="text" />
<BjSkeleton variant="heading" />
<BjSkeleton variant="circle" />
<BjSkeleton variant="rect" style={{ minHeight: '4rem' }} />`

const codeSizes = `<BjSkeleton variant="text" size="sm" />
<BjSkeleton variant="text" size="md" />
<BjSkeleton variant="text" size="lg" />`

const codeMatrix = `<BjSkeleton variant="heading" size="sm" />
<BjSkeleton variant="heading" size="lg" />
<BjSkeleton variant="circle" size="sm" />
<BjSkeleton variant="rect" size="lg" style={{ width: '100%', minHeight: '5rem' }} />`

const codeLayout = `<div className="bj-card" style={{ padding: 'var(--bj-spacing-4v)', maxWidth: '22rem' }}>
  <BjSkeleton variant="rect" style={{ minHeight: '6rem', marginBottom: 'var(--bj-spacing-3v)' }} />
  <BjSkeleton variant="heading" />
  <BjSkeleton variant="text" />
  <BjSkeleton variant="text" size="sm" />
</div>`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: '(div props)', description: t('prop-attrs') },
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

  <DocsSection id="react-skeleton-variants" :title="t('section-variants')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 22rem">
      <div class="bj-skeleton bj-skeleton--text" aria-hidden="true" />
      <div class="bj-skeleton bj-skeleton--heading" aria-hidden="true" />
      <div class="bj-skeleton bj-skeleton--circle bj-skeleton--lg" aria-hidden="true" />
      <div class="bj-skeleton bj-skeleton--rect" style="min-height: 4rem" aria-hidden="true" />
    </DocsPreview>
    <DocsCode :code="codeVariants" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-skeleton-sizes" :title="t('section-sizes')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v); max-width: 20rem">
      <div class="bj-skeleton bj-skeleton--text bj-skeleton--sm" aria-hidden="true" />
      <div class="bj-skeleton bj-skeleton--text" aria-hidden="true" />
      <div class="bj-skeleton bj-skeleton--text bj-skeleton--lg" aria-hidden="true" />
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-skeleton-matrix" :title="t('section-matrix')">
    <DocsPreview
      style="
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
        gap: var(--bj-spacing-3v);
        max-width: 36rem;
      "
    >
      <div class="bj-skeleton bj-skeleton--heading bj-skeleton--sm" aria-hidden="true" />
      <div class="bj-skeleton bj-skeleton--heading bj-skeleton--lg" aria-hidden="true" />
      <div class="bj-skeleton bj-skeleton--circle bj-skeleton--sm" aria-hidden="true" />
      <div class="bj-skeleton bj-skeleton--rect bj-skeleton--lg" style="min-height: 5rem" aria-hidden="true" />
    </DocsPreview>
    <DocsCode :code="codeMatrix" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-skeleton-layout" :title="t('section-layout')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('layout-desc') }}</p>
    <DocsCode :code="codeLayout" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-skeleton-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
