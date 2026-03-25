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
      title: 'BjBadge',
      desc: 'Composant Vue pour le badge DSBJ. Rend un span avec les classes .bj-badge et variantes sémantiques.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'preview-default': 'En vigueur',
      'preview-info': 'Info',
      'preview-success': 'Validé',
      'preview-warning': 'Attention',
      'preview-error': 'Refusé',
      'preview-new': 'Nouveau',
      'preview-sm': 'Compact',
      'prop-variant': 'Variante : default (défaut), info, success, warning, error ou new.',
      'prop-size': 'Taille : md (défaut) ou sm.',
      'prop-noIcon': 'Masque les icônes enfants avec la classe bj-icon (bj-badge--no-icon).',
    },
    en: {
      title: 'BjBadge',
      desc: 'Vue component for the DSBJ badge. Renders a span with .bj-badge and semantic variants.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'preview-default': 'Active',
      'preview-info': 'Info',
      'preview-success': 'Approved',
      'preview-warning': 'Warning',
      'preview-error': 'Rejected',
      'preview-new': 'New',
      'preview-sm': 'Compact',
      'prop-variant': 'Variant: default, info, success, warning, error, or new.',
      'prop-size': 'Size: md (default) or sm.',
      'prop-noIcon': 'Hides child icons with the bj-icon class (bj-badge--no-icon).',
    },
  },
})

const codeUsage = `<script setup>
import { BjBadge } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjBadge>
    <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
    En vigueur
  </BjBadge>
  <BjBadge variant="info">Info</BjBadge>
  <BjBadge variant="new" :no-icon="true">Nouveau</BjBadge>
</template>`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: 'noIcon', description: t('prop-noIcon') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-badge-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-badge-preview" :title="t('section-preview')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center;">
      <span class="bj-badge">
        <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-default') }}
      </span>
      <span class="bj-badge bj-badge--info">
        <i class="ri-information-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-info') }}
      </span>
      <span class="bj-badge bj-badge--success">
        <i class="ri-checkbox-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-success') }}
      </span>
      <span class="bj-badge bj-badge--warning">
        <i class="ri-error-warning-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-warning') }}
      </span>
      <span class="bj-badge bj-badge--error">
        <i class="ri-close-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-error') }}
      </span>
      <span class="bj-badge bj-badge--new">{{ t('preview-new') }}</span>
      <span class="bj-badge bj-badge--sm">
        <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-sm') }}
      </span>
      <span class="bj-badge bj-badge--no-icon">
        <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-new') }}
      </span>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-badge-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
