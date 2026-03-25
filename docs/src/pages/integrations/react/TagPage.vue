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

  <DocsSection id="react-tag-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
