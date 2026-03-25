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
      desc: 'Placeholder de chargement animé (shimmer) : variantes texte, titre, cercle ou rectangle, avec tailles sm, md (défaut) ou lg.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-variant': 'text (défaut), heading, circle ou rect — forme du bloc.',
      'prop-size': 'sm, md (défaut) ou lg — dimensions relatives.',
    },
    en: {
      title: 'BjSkeleton',
      desc: 'Animated loading placeholder (shimmer): text, heading, circle, or rect variants, with sm, md (default), or lg sizes.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-variant': 'text (default), heading, circle, or rect — block shape.',
      'prop-size': 'sm, md (default), or lg — relative dimensions.',
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

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
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

  <DocsSection id="vue-skeleton-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
