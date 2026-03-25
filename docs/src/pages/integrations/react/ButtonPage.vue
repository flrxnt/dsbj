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
      title: 'BjButton',
      desc: 'Composant React pour le bouton DSBJ. Utilise forwardRef et des props typées.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-variant': 'Variante visuelle : primary, secondary, tertiary, accent ou contrast.',
      'prop-size': 'Taille : sm, md (défaut) ou lg.',
      'prop-icon': 'Mode bouton carré pour une icône seule (bj-btn--icon).',
      'prop-full': 'Largeur 100 % du conteneur (bj-btn--full).',
      'prop-as': 'Élément rendu : button (défaut) ou a pour un lien stylé comme bouton.',
    },
    en: {
      title: 'BjButton',
      desc: 'React component for the DSBJ button. Uses forwardRef and typed props.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-variant': 'Visual variant: primary, secondary, tertiary, accent, or contrast.',
      'prop-size': 'Size: sm, md (default), or lg.',
      'prop-icon': 'Square icon-only button (bj-btn--icon).',
      'prop-full': 'Full width of the container (bj-btn--full).',
      'prop-as': 'Rendered element: button (default) or a for a link styled as a button.',
    },
  },
})

const codeUsage = `import { BjButton } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjButton>Valider</BjButton>
      <BjButton variant="secondary">Annuler</BjButton>
    </>
  )
}`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: 'icon', description: t('prop-icon') },
  { name: 'full', description: t('prop-full') },
  { name: 'as', description: t('prop-as') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-btn-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-btn-preview" :title="t('section-preview')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <button type="button" class="bj-btn">Valider</button>
      <button type="button" class="bj-btn bj-btn--secondary">Annuler</button>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-btn-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
