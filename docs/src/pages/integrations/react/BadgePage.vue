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
      desc: 'Composant React pour le badge DSBJ. Rend un span avec classes bj-badge et variantes sémantiques.',
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
      'section-variants': 'Variantes',
      'section-sizes': 'Tailles',
      'section-variant-size-grid': 'Variantes × tailles',
      'section-no-icon': 'Sans icône',
      'section-with-icon': 'Avec icône',
      'section-callbacks': 'Callbacks',
      'desc-variants': 'Les six variantes sémantiques.',
      'desc-sizes': 'sm (compact) et md (défaut).',
      'desc-variant-size-grid': 'Grille 6×2 : chaque variante en sm et md.',
      'desc-no-icon': 'noIcon masque les .bj-icon enfants tout en conservant le texte.',
      'desc-with-icon': 'Chaque variante avec une icône Remix en enfant.',
      'desc-callbacks': 'Les attributs HTML du span (ex. onClick) sont transmis si besoin.',
    },
    en: {
      title: 'BjBadge',
      desc: 'React component for the DSBJ badge. Renders a span with bj-badge and semantic variants.',
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
      'section-variants': 'Variants',
      'section-sizes': 'Sizes',
      'section-variant-size-grid': 'Variants × sizes',
      'section-no-icon': 'No icon',
      'section-with-icon': 'With icon',
      'section-callbacks': 'Callbacks',
      'desc-variants': 'All six semantic variants.',
      'desc-sizes': 'sm (compact) and md (default).',
      'desc-variant-size-grid': '6×2 grid: each variant in sm and md.',
      'desc-noIcon': 'noIcon hides child .bj-icon elements while keeping text.',
      'desc-with-icon': 'Each variant with a Remix icon child.',
      'desc-callbacks': 'Native span attributes (e.g. onClick) are forwarded when needed.',
    },
  },
})

const codeUsage = `import { BjBadge } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjBadge>
        <i className="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden />
        En vigueur
      </BjBadge>
      <BjBadge variant="info">Info</BjBadge>
      <BjBadge variant="new" noIcon>
        Nouveau
      </BjBadge>
    </>
  )
}`

const codeVariants = `import { BjBadge } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjBadge variant="default">Default</BjBadge>
      <BjBadge variant="info">Info</BjBadge>
      <BjBadge variant="success">Success</BjBadge>
      <BjBadge variant="warning">Warning</BjBadge>
      <BjBadge variant="error">Error</BjBadge>
      <BjBadge variant="new">New</BjBadge>
    </>
  )
}`

const codeSizes = `import { BjBadge } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjBadge size="sm">Small badge</BjBadge>
      <BjBadge size="md">Medium badge</BjBadge>
    </>
  )
}`

const codeVariantSizeGrid = `import { BjBadge } from '@flrxnt/dsbj/react'

const variants = ['default', 'info', 'success', 'warning', 'error', 'new'] as const
const sizes = ['sm', 'md'] as const

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {variants.map((variant) => (
        <div key={variant} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {sizes.map((size) => (
            <BjBadge key={size} variant={variant} size={size}>
              {variant} {size}
            </BjBadge>
          ))}
        </div>
      ))}
    </div>
  )
}`

const codeNoIcon = `import { BjBadge } from '@flrxnt/dsbj/react'

const variants = ['default', 'info', 'success', 'warning', 'error', 'new'] as const

export default function App() {
  return (
    <>
      {variants.map((variant) => (
        <BjBadge key={variant} variant={variant} noIcon>
          <i className="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden />
          {variant} (icon hidden)
        </BjBadge>
      ))}
    </>
  )
}`

const codeWithIcons = `import { BjBadge } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjBadge variant="default">
        <i className="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden />
        Default
      </BjBadge>
      <BjBadge variant="info">
        <i className="ri-information-line bj-icon bj-icon--sm" aria-hidden />
        Info
      </BjBadge>
      <BjBadge variant="success">
        <i className="ri-checkbox-circle-line bj-icon bj-icon--sm" aria-hidden />
        Success
      </BjBadge>
      <BjBadge variant="warning">
        <i className="ri-error-warning-line bj-icon bj-icon--sm" aria-hidden />
        Warning
      </BjBadge>
      <BjBadge variant="error">
        <i className="ri-close-circle-line bj-icon bj-icon--sm" aria-hidden />
        Error
      </BjBadge>
      <BjBadge variant="new">
        <i className="ri-sparkling-line bj-icon bj-icon--sm" aria-hidden />
        New
      </BjBadge>
    </>
  )
}`

const codeCallbacks = `import { BjBadge } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjBadge
      variant="info"
      role="button"
      tabIndex={0}
      onClick={() => {
        console.log('badge click')
      }}
    >
      Clickable badge
    </BjBadge>
  )
}`

const reactBadgeVariantsForPreview = [
  { cls: '', previewKey: 'preview-default' as const, icon: 'ri-price-tag-3-line' },
  { cls: 'bj-badge--info', previewKey: 'preview-info' as const, icon: 'ri-information-line' },
  { cls: 'bj-badge--success', previewKey: 'preview-success' as const, icon: 'ri-checkbox-circle-line' },
  { cls: 'bj-badge--warning', previewKey: 'preview-warning' as const, icon: 'ri-error-warning-line' },
  { cls: 'bj-badge--error', previewKey: 'preview-error' as const, icon: 'ri-close-circle-line' },
  { cls: 'bj-badge--new', previewKey: 'preview-new' as const, icon: 'ri-sparkling-line' },
]

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: 'noIcon', description: t('prop-noIcon') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-badge-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-badge-preview" :title="t('section-preview')">
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

  <DocsSection id="react-badge-variants" :title="t('section-variants')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-variants') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center;">
      <template v-for="row in reactBadgeVariantsForPreview" :key="row.previewKey">
        <span class="bj-badge" :class="row.cls">
          <i :class="[row.icon, 'bj-icon', 'bj-icon--sm']" aria-hidden="true" />
          {{ t(row.previewKey) }}
        </span>
      </template>
    </DocsPreview>
    <DocsCode :code="codeVariants" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-badge-sizes" :title="t('section-sizes')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-sizes') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center;">
      <span class="bj-badge bj-badge--sm">
        <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-sm') }}
      </span>
      <span class="bj-badge">
        <i class="ri-price-tag-3-line bj-icon bj-icon--sm" aria-hidden="true" />
        {{ t('preview-default') }}
      </span>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-badge-variant-size-grid" :title="t('section-variant-size-grid')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-variant-size-grid') }}
    </p>
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v)">
      <div
        style="
          display: grid;
          grid-template-columns: minmax(4rem, auto) repeat(2, minmax(0, 1fr));
          gap: var(--bj-spacing-2v);
          align-items: center;
        "
      >
        <span />
        <span class="bj-text-sm" style="color: var(--bj-text-alt)">sm</span>
        <span class="bj-text-sm" style="color: var(--bj-text-alt)">md</span>
        <template v-for="row in reactBadgeVariantsForPreview" :key="'g-' + row.previewKey">
          <span class="bj-text-sm">{{ t(row.previewKey) }}</span>
          <span class="bj-badge bj-badge--sm" :class="row.cls">
            {{ t(row.previewKey) }}
          </span>
          <span class="bj-badge" :class="row.cls">
            {{ t(row.previewKey) }}
          </span>
        </template>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantSizeGrid" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-badge-no-icon" :title="t('section-no-icon')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-no-icon') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center;">
      <template v-for="row in reactBadgeVariantsForPreview" :key="'n-' + row.previewKey">
        <span class="bj-badge bj-badge--no-icon" :class="row.cls">
          <i :class="[row.icon, 'bj-icon', 'bj-icon--sm']" aria-hidden="true" />
          {{ t(row.previewKey) }}
        </span>
      </template>
    </DocsPreview>
    <DocsCode :code="codeNoIcon" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-badge-with-icon" :title="t('section-with-icon')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-with-icon') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center;">
      <template v-for="row in reactBadgeVariantsForPreview" :key="'w-' + row.previewKey">
        <span class="bj-badge" :class="row.cls">
          <i :class="[row.icon, 'bj-icon', 'bj-icon--sm']" aria-hidden="true" />
          {{ t(row.previewKey) }}
        </span>
      </template>
    </DocsPreview>
    <DocsCode :code="codeWithIcons" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-badge-callbacks" :title="t('section-callbacks')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-callbacks') }}
    </p>
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-badge-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
