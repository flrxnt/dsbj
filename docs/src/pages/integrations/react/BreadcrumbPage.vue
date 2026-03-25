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
      title: 'BjBreadcrumb',
      desc:
        'Fil d’Ariane React : tableau d’entrées avec libellé et lien optionnel ; le dernier segment est la page courante sans lien.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-items':
        'Tableau d’objets BjBreadcrumbItem : chaîne label obligatoire, chaîne to optionnelle pour les niveaux avant le dernier.',
      'prop-rest': 'Attributs natifs du nav et className fusionnés sur l’élément racine.',
    },
    en: {
      title: 'BjBreadcrumb',
      desc:
        'React breadcrumb: array of entries with label and optional link; the last segment is the current page without a link.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-items':
        'Array of BjBreadcrumbItem objects: required string label, optional string to for every level except the last.',
      'prop-rest': 'Native nav attributes and className merged on the root element.',
    },
  },
})

const codeUsage = `import { BjBreadcrumb } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjBreadcrumb
      items={[
        { label: 'Accueil', to: '/' },
        { label: 'Démarches', to: '/demarches' },
        { label: 'Demande' },
      ]}
    />
  )
}`

const propsRows = computed(() => [
  { name: 'items', description: t('prop-items') },
  { name: '…rest', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-breadcrumb-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-breadcrumb-preview" :title="t('section-preview')">
    <DocsPreview>
      <nav class="bj-breadcrumb" aria-label="Fil d'Ariane">
        <ol class="bj-breadcrumb__list">
          <li class="bj-breadcrumb__item">
            <a class="bj-breadcrumb__link" href="#">Accueil</a>
          </li>
          <li class="bj-breadcrumb__item">
            <a class="bj-breadcrumb__link" href="#">Démarches</a>
          </li>
          <li class="bj-breadcrumb__item">
            <span aria-current="page">Demande</span>
          </li>
        </ol>
      </nav>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-breadcrumb-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
