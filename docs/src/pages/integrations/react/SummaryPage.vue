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
      desc: 'Sommaire de page React : titre et liens d'ancrage vers les sections.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-title': 'Titre du bloc (défaut : « Sommaire »).',
      'prop-links': 'Tableau de liens avec label et anchor (href = anchor).',
      'prop-nav': 'Attributs nav natifs supplémentaires.',
      'sum-title': 'Sommaire',
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
      'prop-title': 'Block title (default: "Summary").',
      'prop-links': 'Array of links with label and anchor (href equals anchor).',
      'prop-nav': 'Extra native nav attributes are forwarded.',
      'sum-title': 'On this page',
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

  <DocsSection id="react-summary-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
