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
      'section-variants': 'Variantes',
      'section-sizes': 'Tailles',
      'section-variants-sizes': 'Variantes × tailles',
      'section-no-icon': 'Sans icône',
      'section-with-icon': 'Avec icône',
      'section-slot': 'Slot par défaut',
      'section-props': 'Props',
      'preview-default': 'En vigueur',
      'preview-info': 'Info',
      'preview-success': 'Validé',
      'preview-warning': 'Attention',
      'preview-error': 'Refusé',
      'preview-new': 'Nouveau',
      'preview-sm': 'Compact',
      'slot-desc':
        'Texte et icônes (classes <code>bj-icon</code>) passent par le slot par défaut.',
      'prop-variant': 'Variante : default (défaut), info, success, warning, error ou new.',
      'prop-size': 'Taille : md (défaut) ou sm.',
      'prop-noIcon': 'Masque les icônes enfants avec la classe bj-icon (bj-badge--no-icon).',
    },
    en: {
      title: 'BjBadge',
      desc: 'Vue component for the DSBJ badge. Renders a span with .bj-badge and semantic variants.',
      'section-usage': 'Usage',
      'section-variants': 'Variants',
      'section-sizes': 'Sizes',
      'section-variants-sizes': 'Variants × sizes',
      'section-no-icon': 'No icon',
      'section-with-icon': 'With icon',
      'section-slot': 'Default slot',
      'section-props': 'Props',
      'preview-default': 'Active',
      'preview-info': 'Info',
      'preview-success': 'Approved',
      'preview-warning': 'Warning',
      'preview-error': 'Rejected',
      'preview-new': 'New',
      'preview-sm': 'Compact',
      'slot-desc':
        'Text and icons (<code>bj-icon</code> class) go in the default slot.',
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

const codeVariantDefault = `<BjBadge variant="default">
  <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
  En vigueur
</BjBadge>`

const codeVariantInfo = `<BjBadge variant="info">
  <i class="ri-information-line bj-icon bj-icon--sm" aria-hidden="true" />
  Info
</BjBadge>`

const codeVariantSuccess = `<BjBadge variant="success">
  <i class="ri-checkbox-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
  Validé
</BjBadge>`

const codeVariantWarning = `<BjBadge variant="warning">
  <i class="ri-error-warning-line bj-icon bj-icon--sm" aria-hidden="true" />
  Attention
</BjBadge>`

const codeVariantError = `<BjBadge variant="error">
  <i class="ri-close-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
  Refusé
</BjBadge>`

const codeVariantNew = `<BjBadge variant="new">Nouveau</BjBadge>`

const codeSizes = `<BjBadge size="sm">
  <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
  Compact
</BjBadge>
<BjBadge size="md">
  <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
  Taille md
</BjBadge>`

const codeVariantesTailles = `<BjBadge variant="default" size="sm">
  <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
  Défaut sm
</BjBadge>
<BjBadge variant="default" size="md">
  <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
  Défaut md
</BjBadge>
<BjBadge variant="info" size="sm">
  <i class="ri-information-line bj-icon bj-icon--sm" aria-hidden="true" />
  Info sm
</BjBadge>
<BjBadge variant="info" size="md">
  <i class="ri-information-line bj-icon bj-icon--sm" aria-hidden="true" />
  Info md
</BjBadge>
<BjBadge variant="success" size="sm">
  <i class="ri-checkbox-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
  Succès sm
</BjBadge>
<BjBadge variant="success" size="md">
  <i class="ri-checkbox-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
  Succès md
</BjBadge>
<BjBadge variant="warning" size="sm">
  <i class="ri-error-warning-line bj-icon bj-icon--sm" aria-hidden="true" />
  Avert. sm
</BjBadge>
<BjBadge variant="warning" size="md">
  <i class="ri-error-warning-line bj-icon bj-icon--sm" aria-hidden="true" />
  Avert. md
</BjBadge>
<BjBadge variant="error" size="sm">
  <i class="ri-close-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
  Erreur sm
</BjBadge>
<BjBadge variant="error" size="md">
  <i class="ri-close-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
  Erreur md
</BjBadge>
<BjBadge variant="new" size="sm">Nouveau sm</BjBadge>
<BjBadge variant="new" size="md">Nouveau md</BjBadge>`

const codeNoIcon = `<BjBadge noIcon>
  <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
  Texte sans pictogramme visible
</BjBadge>
<BjBadge variant="info" noIcon>
  <i class="ri-information-line bj-icon bj-icon--sm" aria-hidden="true" />
  Info sans icône
</BjBadge>`

const codeWithIcons = `<BjBadge variant="default">
  <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
  Défaut
</BjBadge>
<BjBadge variant="info">
  <i class="ri-information-line bj-icon bj-icon--sm" aria-hidden="true" />
  Info
</BjBadge>
<BjBadge variant="success">
  <i class="ri-checkbox-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
  Succès
</BjBadge>
<BjBadge variant="warning">
  <i class="ri-error-warning-line bj-icon bj-icon--sm" aria-hidden="true" />
  Attention
</BjBadge>
<BjBadge variant="error">
  <i class="ri-close-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
  Erreur
</BjBadge>
<BjBadge variant="new">
  <i class="ri-sparkling-line bj-icon bj-icon--sm" aria-hidden="true" />
  Nouveau
</BjBadge>`

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

  <DocsSection id="vue-badge-variants" :title="t('section-variants')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center;">
      <span class="bj-badge">
        <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-default') }}
      </span>
    </DocsPreview>
    <DocsCode :code="codeVariantDefault" lang="html" />
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center; margin-top: var(--bj-spacing-4v)">
      <span class="bj-badge bj-badge--info">
        <i class="ri-information-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-info') }}
      </span>
    </DocsPreview>
    <DocsCode :code="codeVariantInfo" lang="html" />
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center; margin-top: var(--bj-spacing-4v)">
      <span class="bj-badge bj-badge--success">
        <i class="ri-checkbox-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-success') }}
      </span>
    </DocsPreview>
    <DocsCode :code="codeVariantSuccess" lang="html" />
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center; margin-top: var(--bj-spacing-4v)">
      <span class="bj-badge bj-badge--warning">
        <i class="ri-error-warning-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-warning') }}
      </span>
    </DocsPreview>
    <DocsCode :code="codeVariantWarning" lang="html" />
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center; margin-top: var(--bj-spacing-4v)">
      <span class="bj-badge bj-badge--error">
        <i class="ri-close-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-error') }}
      </span>
    </DocsPreview>
    <DocsCode :code="codeVariantError" lang="html" />
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center; margin-top: var(--bj-spacing-4v)">
      <span class="bj-badge bj-badge--new">{{ t('preview-new') }}</span>
    </DocsPreview>
    <DocsCode :code="codeVariantNew" lang="html" />
  </DocsSection>

  <DocsSection id="vue-badge-sizes" :title="t('section-sizes')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center;">
      <span class="bj-badge bj-badge--sm">
        <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-sm') }}
      </span>
      <span class="bj-badge">
        <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
        Taille md
      </span>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-badge-variants-sizes" :title="t('section-variants-sizes')">
    <DocsPreview
      style="
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
        gap: var(--bj-spacing-2v);
        align-items: center;
      "
    >
      <span class="bj-badge bj-badge--sm">
        <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
        Défaut sm
      </span>
      <span class="bj-badge">
        <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
        Défaut md
      </span>
      <span class="bj-badge bj-badge--info bj-badge--sm">
        <i class="ri-information-line bj-icon bj-icon--sm" aria-hidden="true" />
        Info sm
      </span>
      <span class="bj-badge bj-badge--info">
        <i class="ri-information-line bj-icon bj-icon--sm" aria-hidden="true" />
        Info md
      </span>
      <span class="bj-badge bj-badge--success bj-badge--sm">
        <i class="ri-checkbox-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
        Succès sm
      </span>
      <span class="bj-badge bj-badge--success">
        <i class="ri-checkbox-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
        Succès md
      </span>
      <span class="bj-badge bj-badge--warning bj-badge--sm">
        <i class="ri-error-warning-line bj-icon bj-icon--sm" aria-hidden="true" />
        Avert. sm
      </span>
      <span class="bj-badge bj-badge--warning">
        <i class="ri-error-warning-line bj-icon bj-icon--sm" aria-hidden="true" />
        Avert. md
      </span>
      <span class="bj-badge bj-badge--error bj-badge--sm">
        <i class="ri-close-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
        Erreur sm
      </span>
      <span class="bj-badge bj-badge--error">
        <i class="ri-close-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
        Erreur md
      </span>
      <span class="bj-badge bj-badge--new bj-badge--sm">Nouveau sm</span>
      <span class="bj-badge bj-badge--new">Nouveau md</span>
    </DocsPreview>
    <DocsCode :code="codeVariantesTailles" lang="html" />
  </DocsSection>

  <DocsSection id="vue-badge-no-icon" :title="t('section-no-icon')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center;">
      <span class="bj-badge bj-badge--no-icon">
        <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
        Texte sans pictogramme visible
      </span>
      <span class="bj-badge bj-badge--info bj-badge--no-icon">
        <i class="ri-information-line bj-icon bj-icon--sm" aria-hidden="true" />
        Info sans icône
      </span>
    </DocsPreview>
    <DocsCode :code="codeNoIcon" lang="html" />
  </DocsSection>

  <DocsSection id="vue-badge-with-icon" :title="t('section-with-icon')">
    <DocsPreview
      style="
        display: flex;
        flex-wrap: wrap;
        gap: var(--bj-spacing-2v);
        align-items: center;
      "
    >
      <span class="bj-badge">
        <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
        Défaut
      </span>
      <span class="bj-badge bj-badge--info">
        <i class="ri-information-line bj-icon bj-icon--sm" aria-hidden="true" />
        Info
      </span>
      <span class="bj-badge bj-badge--success">
        <i class="ri-checkbox-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
        Succès
      </span>
      <span class="bj-badge bj-badge--warning">
        <i class="ri-error-warning-line bj-icon bj-icon--sm" aria-hidden="true" />
        Attention
      </span>
      <span class="bj-badge bj-badge--error">
        <i class="ri-close-circle-line bj-icon bj-icon--sm" aria-hidden="true" />
        Erreur
      </span>
      <span class="bj-badge bj-badge--new">
        <i class="ri-sparkling-line bj-icon bj-icon--sm" aria-hidden="true" />
        Nouveau
      </span>
    </DocsPreview>
    <DocsCode :code="codeWithIcons" lang="html" />
  </DocsSection>

  <DocsSection id="vue-badge-slot" :title="t('section-slot')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('slot-desc')" />
    <DocsPreview>
      <span class="bj-badge bj-badge--info">
        <i class="ri-information-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-info') }}
      </span>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-badge-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
