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
      title: 'BjQuote',
      desc: 'Citation sous forme de figure avec blockquote ; texte via enfants ou prop text, auteur et source optionnels, image optionnelle, variante accent pour la bordure.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-accent': 'Si vrai, applique la bordure gauche accent.',
      'prop-text': 'Texte de la citation si les enfants sont absents.',
      'prop-author': 'Nom dans la légende.',
      'prop-source': 'Référence sous l’auteur.',
      'prop-image': 'URL de l’image ronde au-dessus du bloc.',
      'ex-quote': 'L’accessibilité et la clarté guident chaque service public numérique.',
      'ex-author': 'Ministère du numérique',
      'ex-source': 'Rapport annuel 2024',
    },
    en: {
      title: 'BjQuote',
      desc: 'Quote as a figure with blockquote; text from children or text prop, optional author, source, image, and accent border.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-accent': 'If true, applies the accent left border.',
      'prop-text': 'Quote text when children are omitted.',
      'prop-author': 'Name in the caption.',
      'prop-source': 'Reference below the author.',
      'prop-image': 'URL of the round image above the quote.',
      'ex-quote': 'Accessibility and clarity guide every digital public service.',
      'ex-author': 'Ministry of Digital Affairs',
      'ex-source': 'Annual report 2024',
    },
  },
})

const codeUsage = `import { BjQuote } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjQuote
      accent
      author="Ministère du numérique"
      source="Rapport annuel 2024"
      text="L’accessibilité et la clarté guident chaque service public numérique."
    />
  )
}`

const propsRows = computed(() => [
  { name: 'accent', description: t('prop-accent') },
  { name: 'text', description: t('prop-text') },
  { name: 'author', description: t('prop-author') },
  { name: 'source', description: t('prop-source') },
  { name: 'image', description: t('prop-image') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-quote-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-quote-preview" :title="t('section-preview')">
    <DocsPreview>
      <figure class="bj-quote bj-quote--accent">
        <blockquote class="bj-quote__text">{{ t('ex-quote') }}</blockquote>
        <figcaption>
          <span class="bj-quote__author">{{ t('ex-author') }}</span>
          <span class="bj-quote__source">{{ t('ex-source') }}</span>
        </figcaption>
      </figure>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-quote-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
