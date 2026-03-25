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
      desc: 'Citation avec guillemets typographiques, auteur et source optionnels, image optionnelle, variante accent pour la bordure.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-accent': 'Si vrai, applique la bordure gauche accent (rouge Bénin).',
      'prop-text': 'Texte de la citation si le slot par défaut est vide.',
      'prop-author': 'Nom affiché dans la légende.',
      'prop-source': 'Référence (ouvrage, date) sous l’auteur.',
      'prop-image': 'URL de l’image ronde au-dessus du bloc de citation.',
      'ex-quote': 'L’accessibilité et la clarté guident chaque service public numérique.',
      'ex-author': 'Ministère du numérique',
      'ex-source': 'Rapport annuel 2024',
      'code-quote': 'L’accessibilité et la clarté guident chaque service public numérique.',
      'code-author': 'Ministère du numérique',
      'code-source': 'Rapport annuel 2024',
    },
    en: {
      title: 'BjQuote',
      desc: 'Quote with typographic quotation marks, optional author and source, optional image, and accent border variant.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-accent': 'If true, uses the accent (Benin red) left border.',
      'prop-text': 'Quote text when the default slot is empty.',
      'prop-author': 'Name shown in the caption.',
      'prop-source': 'Reference (publication, date) below the author.',
      'prop-image': 'URL of the round image above the quote.',
      'ex-quote': 'Accessibility and clarity guide every digital public service.',
      'ex-author': 'Ministry of Digital Affairs',
      'ex-source': 'Annual report 2024',
      'code-quote': 'Accessibility and clarity guide every digital public service.',
      'code-author': 'Ministry of Digital Affairs',
      'code-source': 'Annual report 2024',
    },
  },
})

const codeUsage = computed(() => {
  const q = t('code-quote').replace(/"/g, '&quot;')
  const a = t('code-author').replace(/"/g, '&quot;')
  const s = t('code-source').replace(/"/g, '&quot;')
  return `<script setup>
import { BjQuote } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <BjQuote accent author="${a}" source="${s}" text="${q}" />
</template>`
})

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

  <DocsSection id="vue-quote-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-quote-preview" :title="t('section-preview')">
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

  <DocsSection id="vue-quote-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>