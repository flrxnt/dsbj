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
      'section-single': 'Un seul segment',
      'section-multi': 'Plusieurs niveaux avec to',
      'section-last': 'Dernier segment (page courante)',
      'section-rest': 'Attributs natifs du nav',
      'desc-single': 'Un tableau à un élément : fil d’Ariane réduit à la page courante.',
      'desc-multi': 'Chaque entrée sauf la dernière peut avoir to pour rendre un lien.',
      'desc-last':
        'Le dernier item est toujours rendu en <span aria-current="page">, même si to est fourni (le lien ne s’applique qu’aux items dont l’index est strictement inférieur au dernier).',
      'desc-rest': 'className, id, aria-label, etc. sont fusionnés sur le <nav> racine.',
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
      'section-single': 'Single segment',
      'section-multi': 'Multiple levels with to',
      'section-last': 'Last segment (current page)',
      'section-rest': 'Native nav attributes',
      'desc-single': 'A one-item array: breadcrumb collapsed to the current page only.',
      'desc-multi': 'Every entry except the last may include to to render a link.',
      'desc-last':
        'The last item is always a <span aria-current="page">, even if to is set (links only apply when index < last).',
      'desc-rest': 'className, id, aria-label, etc. merge on the root <nav>.',
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

const codeSingle = `import { BjBreadcrumb } from '@flrxnt/dsbj/react'

export function SingleCrumb() {
  return <BjBreadcrumb items={[{ label: 'Tableau de bord' }]} />
}`

const codeMulti = `import { BjBreadcrumb } from '@flrxnt/dsbj/react'

export function DeepPath() {
  return (
    <BjBreadcrumb
      items={[
        { label: 'Accueil', to: '/' },
        { label: 'Ministères', to: '/ministeres' },
        { label: 'Éducation', to: '/ministeres/education' },
        { label: 'Inscription' },
      ]}
    />
  )
}`

const codeLast = `import { BjBreadcrumb } from '@flrxnt/dsbj/react'

/** Le dernier item reste un span courant même avec to (non cliquable). */
export function LastWithToIgnored() {
  return (
    <BjBreadcrumb
      items={[
        { label: 'Accueil', to: '/' },
        { label: 'Page actuelle', to: '/should-not-link' },
      ]}
    />
  )
}`

const codeRest = `import { BjBreadcrumb } from '@flrxnt/dsbj/react'

export function WithNativeAttrs() {
  return (
    <BjBreadcrumb
      className="page-breadcrumb"
      aria-label="Vous êtes ici"
      id="breadcrumb"
      items={[
        { label: 'Accueil', to: '/' },
        { label: 'Contact' },
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

  <DocsSection id="react-breadcrumb-single" :title="t('section-single')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-single') }}</p>
    <DocsCode :code="codeSingle" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-breadcrumb-multi" :title="t('section-multi')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-multi') }}</p>
    <DocsCode :code="codeMulti" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-breadcrumb-last" :title="t('section-last')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-last') }}</p>
    <DocsCode :code="codeLast" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-breadcrumb-rest" :title="t('section-rest')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-rest') }}</p>
    <DocsCode :code="codeRest" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-breadcrumb-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
