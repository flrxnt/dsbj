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
      desc: 'Citation en figure avec blockquote ; texte via prop text ou slot (le slot remplace text), auteur et source optionnels, image optionnelle, variante accent.',
      'section-usage': 'Utilisation',
      'section-accent': 'accent',
      'section-text-slot': 'Prop text et slot',
      'section-caption': 'Auteur et source',
      'section-image': 'Image',
      'section-full': 'Exemple complet',
      'section-props': 'Props',
      'prop-accent': 'Si vrai, bordure gauche accent (rouge Bénin).',
      'prop-text': 'Texte de citation si le slot par défaut est vide.',
      'prop-author': 'Nom dans figcaption.',
      'prop-source': 'Référence (publication, date) à côté de l’auteur.',
      'prop-image': 'URL de l’image affichée au-dessus du blockquote.',
      'slot-desc':
        'Si le slot par défaut contient du contenu, il remplace entièrement la prop <code>text</code> (le blockquote affiche le slot).',
      'ex-quote': 'L’accessibilité et la clarté guident chaque service public numérique.',
      'ex-author': 'Ministère du numérique',
      'ex-source': 'Rapport annuel 2024',
    },
    en: {
      title: 'BjQuote',
      desc: 'Quote as a figure with blockquote; text from text prop or default slot (slot overrides text), optional author, source, image, and accent variant.',
      'section-usage': 'Usage',
      'section-accent': 'accent',
      'section-text-slot': 'text prop and slot',
      'section-caption': 'Author and source',
      'section-image': 'Image',
      'section-full': 'Full example',
      'section-props': 'Props',
      'prop-accent': 'If true, accent (Benin red) left border.',
      'prop-text': 'Quote text when the default slot is empty.',
      'prop-author': 'Name in figcaption.',
      'prop-source': 'Reference next to the author.',
      'prop-image': 'Image URL shown above the blockquote.',
      'slot-desc':
        'If the default slot has content, it replaces the <code>text</code> prop (the blockquote renders the slot).',
      'ex-quote': 'Accessibility and clarity guide every digital public service.',
      'ex-author': 'Ministry of Digital Affairs',
      'ex-source': 'Annual report 2024',
    },
  },
})

const codeUsage = computed(() => {
  const q = t('ex-quote').replace(/"/g, '&quot;')
  const a = t('ex-author').replace(/"/g, '&quot;')
  const s = t('ex-source').replace(/"/g, '&quot;')
  return `<script setup>
import { BjQuote } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <BjQuote accent author="${a}" source="${s}" text="${q}" />
</template>`
})

const codeAccent = `<BjQuote accent text="Citation avec accent." author="Auteur" />
<BjQuote text="Citation sans accent." author="Auteur" />`

const codeSlot = `<!-- Slot remplace text -->
<BjQuote accent :author="author" :source="source">
  <em>Citation</em> avec <strong>markup</strong> dans le slot.
</BjQuote>

<!-- Prop text si slot vide -->
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
  :text="text"
  :author="author"
  :source="source"
/>`

const propsRows = computed(() => [
  { name: 'accent', description: t('prop-accent') },
  { name: 'text', description: t('prop-text') },
  { name: 'author', description: t('prop-author') },
  { name: 'source', description: t('prop-source') },
  { name: 'image', description: t('prop-image') },
  { name: '(default slot)', description: t('slot-desc') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-quote-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-quote-accent" :title="t('section-accent')">
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
    <DocsCode :code="codeAccent" lang="html" />
  </DocsSection>

  <DocsSection id="vue-quote-text-slot" :title="t('section-text-slot')">
    <p class="bj-text-md" style="max-width: 44rem; color: var(--bj-text-alt)" v-html="t('slot-desc')" />
    <DocsCode :code="codeSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-quote-caption" :title="t('section-caption')">
    <DocsCode :code="codeCaption" lang="html" />
  </DocsSection>

  <DocsSection id="vue-quote-image" :title="t('section-image')">
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
    <DocsCode :code="codeImage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-quote-full" :title="t('section-full')">
    <DocsCode :code="codeFull" lang="html" />
  </DocsSection>

  <DocsSection id="vue-quote-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop / slot', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
