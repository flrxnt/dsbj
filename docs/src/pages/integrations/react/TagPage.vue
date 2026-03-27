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
      title: 'BjTag',
      desc: 'Composant React pour le tag DSBJ. forwardRef, variantes, taille, élément racine span, lien ou bouton, fermeture optionnelle.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-variant': 'Variante : default (défaut), action, info, success, warning ou error.',
      'prop-size': 'Taille : md (défaut) ou sm.',
      'prop-dismissible': 'Affiche le bouton de retrait à côté du libellé.',
      'prop-onDismiss': 'Callback invoqué au clic sur le bouton de retrait.',
      'prop-as': 'Élément racine : span (défaut), a ou button.',
      'section-variants': 'Variantes',
      'section-sizes': 'Tailles',
      'section-as': 'Éléments HTML',
      'section-dismissible': 'Tags fermables',
      'section-combinations': 'Combinaisons',
      'section-callbacks': 'Callbacks',
      'desc-variants': 'Les six variantes (default et action inclus).',
      'desc-sizes': 'sm et md (défaut).',
      'desc-as': 'as="span", as="a" (avec href) ou as="button".',
      'desc-dismissible': 'dismissible et onDismiss pour chaque variante.',
      'desc-combinations': 'size="sm" avec dismissible sur chaque variante.',
      'desc-callbacks': 'onDismiss est appelé au clic sur le bouton de fermeture.',
      'tag-label-default': 'Étiquette',
      'tag-label-action': 'Action',
      'tag-label-info': 'Info',
      'tag-label-success': 'Succès',
      'tag-label-warning': 'Attention',
      'tag-label-error': 'Erreur',
      'tag-close-label': 'Retirer',
    },
    en: {
      title: 'BjTag',
      desc: 'React component for the DSBJ tag. forwardRef, variants, size, root element span, link, or button, optional dismiss.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-variant': 'Variant: default, action, info, success, warning, or error.',
      'prop-size': 'Size: md (default) or sm.',
      'prop-dismissible': 'Shows a remove button next to the label.',
      'prop-onDismiss': 'Callback invoked when the remove button is clicked.',
      'prop-as': 'Root element: span (default), a, or button.',
      'section-variants': 'Variants',
      'section-sizes': 'Sizes',
      'section-as': 'HTML elements',
      'section-dismissible': 'Dismissible tags',
      'section-combinations': 'Combinations',
      'section-callbacks': 'Callbacks',
      'desc-variants': 'All six variants (including default and action).',
      'desc-sizes': 'sm and md (default).',
      'desc-as': 'as="span", as="a" (with href), or as="button".',
      'desc-dismissible': 'dismissible and onDismiss for each variant.',
      'desc-combinations': 'size="sm" with dismissible on each variant.',
      'desc-callbacks': 'onDismiss runs when the close button is clicked.',
      'tag-label-default': 'Label',
      'tag-label-action': 'Action',
      'tag-label-info': 'Info',
      'tag-label-success': 'Success',
      'tag-label-warning': 'Warning',
      'tag-label-error': 'Error',
      'tag-close-label': 'Remove',
    },
  },
})

const codeUsage = `import { BjTag } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjTag variant="default" size="md" as="span">
        Étiquette
      </BjTag>
      <BjTag variant="info" dismissible onDismiss={() => {}}>
        Fermable
      </BjTag>
    </>
  )
}`

const codeVariants = `import { BjTag } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjTag variant="default">Default</BjTag>
      <BjTag variant="action">Action</BjTag>
      <BjTag variant="info">Info</BjTag>
      <BjTag variant="success">Success</BjTag>
      <BjTag variant="warning">Warning</BjTag>
      <BjTag variant="error">Error</BjTag>
    </>
  )
}`

const codeSizes = `import { BjTag } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjTag size="sm">Small tag</BjTag>
      <BjTag size="md">Medium tag</BjTag>
    </>
  )
}`

const codeAs = `import { BjTag } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjTag as="span">Span tag</BjTag>
      <BjTag as="a" href="#tags">
        Link tag
      </BjTag>
      <BjTag as="button" type="button">
        Button tag
      </BjTag>
    </>
  )
}`

const codeDismissible = `import { BjTag } from '@flrxnt/dsbj/react'

const variants = ['default', 'action', 'info', 'success', 'warning', 'error'] as const

export default function App() {
  return (
    <>
      {variants.map((variant) => (
        <BjTag key={variant} variant={variant} dismissible onDismiss={() => {}}>
          {variant}
        </BjTag>
      ))}
    </>
  )
}`

const codeCombinations = `import { BjTag } from '@flrxnt/dsbj/react'

const variants = ['default', 'action', 'info', 'success', 'warning', 'error'] as const

export default function App() {
  return (
    <>
      {variants.map((variant) => (
        <BjTag key={variant} variant={variant} size="sm" dismissible onDismiss={() => {}}>
          {variant} sm
        </BjTag>
      ))}
    </>
  )
}`

const codeCallbacks = `import { BjTag } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjTag
      variant="info"
      dismissible
      onDismiss={() => {
        console.log('tag dismissed')
      }}
    >
      Closable
    </BjTag>
  )
}`

const reactTagVariantsForPreview = [
  { cls: '', labelKey: 'tag-label-default' as const },
  { cls: 'bj-tag--action', labelKey: 'tag-label-action' as const },
  { cls: 'bj-tag--info', labelKey: 'tag-label-info' as const },
  { cls: 'bj-tag--success', labelKey: 'tag-label-success' as const },
  { cls: 'bj-tag--warning', labelKey: 'tag-label-warning' as const },
  { cls: 'bj-tag--error', labelKey: 'tag-label-error' as const },
]

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: 'dismissible', description: t('prop-dismissible') },
  { name: 'onDismiss', description: t('prop-onDismiss') },
  { name: 'as', description: t('prop-as') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-tag-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tag-preview" :title="t('section-preview')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <span class="bj-tag">Étiquette</span>
      <span class="bj-tag bj-tag--info bj-tag--dismiss">
        Fermable
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-tag-variants" :title="t('section-variants')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-variants') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <template v-for="row in reactTagVariantsForPreview" :key="row.labelKey">
        <span class="bj-tag" :class="row.cls">{{ t(row.labelKey) }}</span>
      </template>
    </DocsPreview>
    <DocsCode :code="codeVariants" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tag-sizes" :title="t('section-sizes')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-sizes') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <span class="bj-tag bj-tag--sm">{{ t('tag-label-default') }}</span>
      <span class="bj-tag">{{ t('tag-label-default') }}</span>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tag-as" :title="t('section-as')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-as') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <span class="bj-tag">{{ t('tag-label-default') }}</span>
      <a href="#" class="bj-tag" @click.prevent>{{ t('tag-label-action') }}</a>
      <button type="button" class="bj-tag">{{ t('tag-label-info') }}</button>
    </DocsPreview>
    <DocsCode :code="codeAs" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tag-dismissible" :title="t('section-dismissible')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-dismissible') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <template v-for="row in reactTagVariantsForPreview" :key="'d-' + row.labelKey">
        <span class="bj-tag bj-tag--dismiss" :class="row.cls">
          {{ t(row.labelKey) }}
          <button type="button" class="bj-tag__close" :aria-label="t('tag-close-label')">
            <i class="ri-close-line" aria-hidden="true" />
          </button>
        </span>
      </template>
    </DocsPreview>
    <DocsCode :code="codeDismissible" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tag-combos" :title="t('section-combinations')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-combinations') }}
    </p>
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <template v-for="row in reactTagVariantsForPreview" :key="'c-' + row.labelKey">
        <span class="bj-tag bj-tag--sm bj-tag--dismiss" :class="row.cls">
          {{ t(row.labelKey) }}
          <button type="button" class="bj-tag__close" :aria-label="t('tag-close-label')">
            <i class="ri-close-line" aria-hidden="true" />
          </button>
        </span>
      </template>
    </DocsPreview>
    <DocsCode :code="codeCombinations" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tag-callbacks" :title="t('section-callbacks')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      {{ t('desc-callbacks') }}
    </p>
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tag-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
