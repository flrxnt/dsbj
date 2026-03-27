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
      desc: 'Placeholder animé (shimmer) : variantes text, heading, circle et rect ; tailles sm, md (défaut) et lg. Le div racine a aria-hidden="true".',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-variants': 'Variantes',
      'section-sizes': 'Tailles',
      'section-matrix': 'Variantes × tailles',
      'section-layout': 'Mise en page',
      'section-props': 'Props',
      'prop-variant': 'text (défaut), heading, circle ou rect.',
      'prop-size': 'sm, md (défaut) ou lg — dimension relative.',
      'prop-attrs': 'Attributs div supplémentaires (style min-height sur rect, etc.).',
      'layout-desc': 'Composez plusieurs BjSkeleton pour imiter une carte ou un paragraphe.',
    },
    en: {
      title: 'BjSkeleton',
      desc: 'Animated placeholder: text, heading, circle, or rect variants; sm, md (default), or lg. Root div sets aria-hidden="true".',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-variants': 'Variants',
      'section-sizes': 'Sizes',
      'section-matrix': 'Variants × sizes',
      'section-layout': 'Layout',
      'section-props': 'Props',
      'prop-variant': 'text (default), heading, circle, or rect.',
      'prop-size': 'sm, md (default), or lg — relative scale.',
      'prop-attrs': 'Extra div attributes (e.g. min-height on rect).',
      'layout-desc': 'Combine several BjSkeleton nodes to mimic a card or paragraph.',
    },
  },
})

const codeUsage = `<script setup>
import { BjSkeleton } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 20rem">
    <BjSkeleton variant="heading" />
    <BjSkeleton variant="text" />
    <BjSkeleton variant="text" size="sm" />
    <div style="display: flex; align-items: center; gap: var(--bj-spacing-3v)">
      <BjSkeleton variant="circle" size="lg" />
      <BjSkeleton variant="rect" style="flex: 1; min-height: 3rem" />
    </div>
  </div>
</template>`

const codeVariants = `<BjSkeleton variant="text" />
<BjSkeleton variant="heading" />
<BjSkeleton variant="circle" />
<BjSkeleton variant="rect" style="min-height: 4rem" />`

const codeSizes = `<BjSkeleton variant="text" size="sm" />
<BjSkeleton variant="text" size="md" />
<BjSkeleton variant="text" size="lg" />`

const codeMatrix = `<!-- Exemples courants -->
<BjSkeleton variant="heading" size="sm" />
<BjSkeleton variant="heading" size="lg" />
<BjSkeleton variant="circle" size="sm" />
<BjSkeleton variant="rect" size="lg" style="width: 100%; min-height: 5rem" />`

const codeLayout = `<div class="bj-card" style="padding: var(--bj-spacing-4v); max-width: 22rem">
  <BjSkeleton variant="rect" style="min-height: 6rem; margin-bottom: var(--bj-spacing-3v)" />
  <BjSkeleton variant="heading" />
  <BjSkeleton variant="text" />
  <BjSkeleton variant="text" size="sm" />
</div>`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: '(div attrs)', description: t('prop-attrs') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-skeleton-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-skeleton-preview" :title="t('section-preview')">
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

  <DocsSection id="vue-skeleton-variants" :title="t('section-variants')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 22rem">
      <div class="bj-skeleton bj-skeleton--text" aria-hidden="true" />
      <div class="bj-skeleton bj-skeleton--heading" aria-hidden="true" />
      <div class="bj-skeleton bj-skeleton--circle bj-skeleton--lg" aria-hidden="true" />
      <div class="bj-skeleton bj-skeleton--rect" style="min-height: 4rem" aria-hidden="true" />
    </DocsPreview>
    <DocsCode :code="codeVariants" lang="html" />
  </DocsSection>

  <DocsSection id="vue-skeleton-sizes" :title="t('section-sizes')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v); max-width: 20rem">
      <div class="bj-skeleton bj-skeleton--text bj-skeleton--sm" aria-hidden="true" />
      <div class="bj-skeleton bj-skeleton--text" aria-hidden="true" />
      <div class="bj-skeleton bj-skeleton--text bj-skeleton--lg" aria-hidden="true" />
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-skeleton-matrix" :title="t('section-matrix')">
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
    <DocsCode :code="codeMatrix" lang="html" />
  </DocsSection>

  <DocsSection id="vue-skeleton-layout" :title="t('section-layout')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('layout-desc') }}</p>
    <DocsCode :code="codeLayout" lang="html" />
  </DocsSection>

  <DocsSection id="vue-skeleton-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
