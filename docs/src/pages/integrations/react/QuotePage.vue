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
      desc: 'Citation React : blockquote rendu avec children ?? text, auteur et source optionnels, image et accent.',
      'section-usage': 'Utilisation',
      'section-accent': 'accent',
      'section-text-children': 'text et children',
      'section-caption': 'Auteur et source',
      'section-image': 'Image',
      'section-full': 'Exemple complet',
      'section-props': 'Props',
      'prop-accent': 'Bordure gauche accent si vrai.',
      'prop-text': 'Texte utilisé lorsque children est absent ou null.',
      'prop-author': 'Nom dans figcaption.',
      'prop-source': 'Référence dans figcaption.',
      'prop-image': 'URL de l’image au-dessus du blockquote.',
      'children-desc':
        'Si vous passez des children, ils remplacent la prop <code>text</code> pour le contenu du blockquote.',
      'ex-quote': 'L’accessibilité et la clarté guident chaque service public numérique.',
      'ex-author': 'Ministère du numérique',
      'ex-source': 'Rapport annuel 2024',
    },
    en: {
      title: 'BjQuote',
      desc: 'React quote: blockquote uses children ?? text, optional author, source, image, and accent.',
      'section-usage': 'Usage',
      'section-accent': 'accent',
      'section-text-children': 'text and children',
      'section-caption': 'Author and source',
      'section-image': 'Image',
      'section-full': 'Full example',
      'section-props': 'Props',
      'prop-accent': 'Accent left border when true.',
      'prop-text': 'Used when children is omitted or null.',
      'prop-author': 'Name in figcaption.',
      'prop-source': 'Reference in figcaption.',
      'prop-image': 'Image URL above the blockquote.',
      'children-desc':
        'When you pass children, they replace the <code>text</code> prop for the blockquote body.',
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

const codeAccent = `<BjQuote accent text="Citation avec accent." author="Auteur" />
<BjQuote text="Citation sans accent." author="Auteur" />`

const codeChildren = `<!-- Children remplace text pour le blockquote -->
<BjQuote accent author="Auteur" source="Source">
  <em>Citation</em> avec <strong>markup</strong>.
</BjQuote>

<!-- text seul -->
<BjQuote text="Citation simple." author="Auteur" />`

const codeCaption = `<BjQuote text="…" author="Nom seul" />
<BjQuote text="…" author="Nom" source="Ouvrage, 2024" />`

const codeImage = `<BjQuote
  image="https://picsum.photos/96/96"
  text="Citation avec portrait."
  author="Prénom Nom"
/>`

const codeFull = `<BjQuote
  accent
  image="https://picsum.photos/96/96"
  text={text}
  author={author}
  source={source}
/>`

const propsRows = computed(() => [
  { name: 'accent', description: t('prop-accent') },
  { name: 'text', description: t('prop-text') },
  { name: 'author', description: t('prop-author') },
  { name: 'source', description: t('prop-source') },
  { name: 'image', description: t('prop-image') },
  { name: 'children', description: t('children-desc') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-quote-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-quote-accent" :title="t('section-accent')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v); max-width: 36rem">
      <figure class="bj-quote bj-quote--accent">
        <blockquote class="bj-quote__text">{{ t('ex-quote') }}</blockquote>
        <figcaption>
          <span class="bj-quote__author">{{ t('ex-author') }}</span>
          <span class="bj-quote__source">{{ t('ex-source') }}</span>
        </figcaption>
      </figure>
      <figure class="bj-quote">
        <blockquote class="bj-quote__text">{{ t('ex-quote') }}</blockquote>
        <figcaption>
          <span class="bj-quote__author">{{ t('ex-author') }}</span>
        </figcaption>
      </figure>
    </DocsPreview>
    <DocsCode :code="codeAccent" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-quote-text-children" :title="t('section-text-children')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)" v-html="t('children-desc')" />
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-quote-caption" :title="t('section-caption')">
    <DocsCode :code="codeCaption" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-quote-image" :title="t('section-image')">
    <DocsPreview style="max-width: 24rem">
      <figure class="bj-quote bj-quote--accent">
        <img class="bj-quote__image" src="https://picsum.photos/96/96" alt="" />
        <blockquote class="bj-quote__text">{{ t('ex-quote') }}</blockquote>
        <figcaption>
          <span class="bj-quote__author">{{ t('ex-author') }}</span>
          <span class="bj-quote__source">{{ t('ex-source') }}</span>
        </figcaption>
      </figure>
    </DocsPreview>
    <DocsCode :code="codeImage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-quote-full" :title="t('section-full')">
    <DocsCode :code="codeFull" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-quote-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
