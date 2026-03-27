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
      title: 'BjSummary',
      desc: "Sommaire de page React : titre et liens d'ancrage vers les sections.",
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-default-title': 'Titre par défaut',
      'section-custom-title': 'title personnalisé',
      'section-links': 'links (label + anchor)',
      'section-aria': 'aria-label du nav',
      'section-rest': 'Attributs natifs du nav',
      'desc-default-title':
        'Sans prop title, la valeur par défaut du composant est la chaîne « Sommaire » (titre visible et aria-label du nav).',
      'desc-custom-title': 'Un title personnalisé remplace le libellé du paragraphe .bj-summary__title et aria-label.',
      'desc-links': 'Chaque entrée produit un href égal à anchor (#section, #contact, etc.).',
      'desc-aria': 'aria-label du <nav> est égal à title (donc au défaut « Sommaire » ou à votre chaîne).',
      'desc-rest': 'className, id, autres attributs nav en plus du spread.',
      'prop-title': 'Titre du bloc (défaut dans le code : « Sommaire »).',
      'prop-links': 'Tableau de liens avec label et anchor (href = anchor).',
      'prop-nav': 'Attributs nav natifs supplémentaires.',
      'sum-title': 'Sommaire',
      'sum-title-custom': 'Sur cette page',
      'sum-a': 'Introduction',
      'sum-b': 'Détail',
      'sum-c': 'Contact',
    },
    en: {
      title: 'BjSummary',
      desc: 'React in-page summary: title and anchor links to sections.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-default-title': 'Default title',
      'section-custom-title': 'Custom title',
      'section-links': 'links (label + anchor)',
      'section-aria': 'nav aria-label',
      'section-rest': 'Native nav attributes',
      'desc-default-title':
        'Without a title prop, the component default is the string “Sommaire” (visible heading and nav aria-label).',
      'desc-custom-title': 'A custom title replaces the .bj-summary__title text and the nav aria-label.',
      'desc-links': 'Each entry renders href equal to anchor (#section, #contact, etc.).',
      'desc-aria': 'The nav aria-label matches title (default “Sommaire” or your string).',
      'desc-rest': 'className, id, and other nav attributes from the spread.',
      'prop-title': 'Block title (code default: “Sommaire”).',
      'prop-links': 'Array of links with label and anchor (href equals anchor).',
      'prop-nav': 'Extra native nav attributes are forwarded.',
      'sum-title': 'Sommaire',
      'sum-title-custom': 'On this page',
      'sum-a': 'Introduction',
      'sum-b': 'Details',
      'sum-c': 'Contact',
    },
  },
})

const codeUsage = `import { BjSummary } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjSummary
      title="Sommaire"
      links={[
        { label: 'Introduction', anchor: '#intro' },
        { label: 'Contact', anchor: '#contact' },
      ]}
    />
  )
}`

const codeDefaultTitle = `import { BjSummary } from '@flrxnt/dsbj/react'

/** title implicite : « Sommaire » (défaut du composant) */
export function DefaultTitle() {
  return (
    <BjSummary
      links={[
        { label: 'Partie 1', anchor: '#p1' },
        { label: 'Partie 2', anchor: '#p2' },
      ]}
    />
  )
}`

const codeCustomTitle = `import { BjSummary } from '@flrxnt/dsbj/react'

export function EnglishPage() {
  return (
    <BjSummary
      title="On this page"
      links={[
        { label: 'Overview', anchor: '#overview' },
        { label: 'API', anchor: '#api' },
      ]}
    />
  )
}`

const codeLinks = `import { BjSummary } from '@flrxnt/dsbj/react'

export function LongToc() {
  return (
    <BjSummary
      title="Table des matières"
      links={[
        { label: 'Contexte', anchor: '#contexte' },
        { label: 'Procédure', anchor: '#procedure' },
        { label: 'Pièces', anchor: '#pieces' },
        { label: 'FAQ', anchor: '#faq' },
      ]}
    />
  )
}`

const codeAria = `import { BjSummary } from '@flrxnt/dsbj/react'

/** aria-label du nav = valeur de title */
export function AccessibleToc() {
  return (
    <BjSummary
      title="Navigation dans la page"
      links={[{ label: 'Résumé', anchor: '#resume' }]}
    />
  )
}`

const codeRest = `import { BjSummary } from '@flrxnt/dsbj/react'

export function WithNativeAttrs() {
  return (
    <BjSummary
      className="article-toc"
      id="page-summary"
      data-testid="summary"
      title="Sommaire"
      links={[{ label: 'Haut', anchor: '#top' }]}
    />
  )
}`

const propsRows = computed(() => [
  { name: 'title', description: t('prop-title') },
  { name: 'links', description: t('prop-links') },
  { name: '(nav props)', description: t('prop-nav') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-summary-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-summary-preview" :title="t('section-preview')">
    <DocsPreview>
      <nav class="bj-summary" :aria-label="t('sum-title')">
        <p class="bj-summary__title">{{ t('sum-title') }}</p>
        <ul class="bj-summary__list">
          <li><a class="bj-summary__link" href="#">{{ t('sum-a') }}</a></li>
          <li><a class="bj-summary__link" href="#">{{ t('sum-b') }}</a></li>
          <li><a class="bj-summary__link" href="#">{{ t('sum-c') }}</a></li>
        </ul>
      </nav>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-summary-default-title" :title="t('section-default-title')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-default-title') }}</p>
    <DocsCode :code="codeDefaultTitle" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-summary-custom-title" :title="t('section-custom-title')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-custom-title') }}</p>
    <DocsCode :code="codeCustomTitle" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-summary-links" :title="t('section-links')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-links') }}</p>
    <DocsCode :code="codeLinks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-summary-aria" :title="t('section-aria')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-aria') }}</p>
    <DocsCode :code="codeAria" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-summary-rest" :title="t('section-rest')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-rest') }}</p>
    <DocsCode :code="codeRest" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-summary-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
