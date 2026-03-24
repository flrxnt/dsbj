<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Citation',
      desc: 'Citation longue en serif italique avec guillemets français générés en CSS, suivie de l’auteur et de la source. Variante d’accent color pour les témoignages ou citations officielles.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-classes': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'a11y-note':
        'Utilisez <code>&lt;blockquote&gt;</code> pour le contenu cité et <code>&lt;figcaption&gt;</code> pour l’attribution. Les guillemets ajoutés en CSS sont décoratifs côté rendu ; le texte dans le bloc doit rester compréhensible seul. Toute image d’auteur nécessite un <code>alt</code> pertinent.',
      'prop-bj-quote':
        'Conteneur avec bordure gauche verte action.',
      'prop-bj-quote-text':
        'Texte cité (Spectral italique, guillemets via CSS).',
      'prop-bj-quote-author':
        'Nom ou fonction de la personne citée.',
      'prop-bj-quote-source': 'Référence, date ou ouvrage.',
      'prop-bj-quote-accent': 'Bordure gauche rouge Bénin.',
      'prop-bj-quote-image':
        'Avatar ou portrait au-dessus de la citation.',
    },
    en: {
      title: 'Quote',
      desc: 'Long quotation in italic serif with French quotation marks from CSS, followed by author and source. Accent variant for testimonials or official citations.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-classes': 'CSS classes',
      'section-a11y': 'Accessibility',
      'a11y-note':
        'Use <code>&lt;blockquote&gt;</code> for quoted content and <code>&lt;figcaption&gt;</code> for attribution. Quotes added in CSS are decorative in rendering; the text in the block must still make sense on its own. Any author image needs a meaningful <code>alt</code>.',
      'prop-bj-quote': 'Container with action-green left border.',
      'prop-bj-quote-text':
        'Quoted text (Spectral italic, quotes via CSS).',
      'prop-bj-quote-author': 'Name or role of the quoted person.',
      'prop-bj-quote-source': 'Reference, date, or publication.',
      'prop-bj-quote-accent': 'Benin red left border.',
      'prop-bj-quote-image': 'Avatar or portrait above the quote.',
    },
  },
})

const codeExemple = `<figure class="bj-quote">
  <blockquote class="bj-quote__text">…</blockquote>
  <figcaption>
    <div class="bj-quote__author">…</div>
    <div class="bj-quote__source">…</div>
  </figcaption>
</figure>`

const codeVariantes = `<figure class="bj-quote bj-quote--accent">…</figure>
<img class="bj-quote__image" src="…" alt="…">`

const propsRows = computed(() => [
  { name: 'bj-quote', description: t('prop-bj-quote') },
  {
    name: 'bj-quote__text',
    description: t('prop-bj-quote-text'),
  },
  {
    name: 'bj-quote__author',
    description: t('prop-bj-quote-author'),
  },
  {
    name: 'bj-quote__source',
    description: t('prop-bj-quote-source'),
  },
  {
    name: 'bj-quote--accent',
    description: t('prop-bj-quote-accent'),
  },
  {
    name: 'bj-quote__image',
    description: t('prop-bj-quote-image'),
  },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="exemple-quote" :title="t('section-example')">
    <DocsPreview>
      <figure class="bj-quote">
        <blockquote class="bj-quote__text">
          Le numérique doit rapprocher l’administration des citoyens,
          pas l’inverse.
        </blockquote>
        <figcaption>
          <div class="bj-quote__author">Prénom Nom</div>
          <div class="bj-quote__source">
            Discours d’inauguration - Cotonou, 2024
          </div>
        </figcaption>
      </figure>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-quote" :title="t('section-variants')">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-6v);
      "
    >
      <figure class="bj-quote bj-quote--accent">
        <blockquote class="bj-quote__text">
          La transparence des données est un levier de confiance.
        </blockquote>
        <figcaption>
          <div class="bj-quote__author">Rapport annuel</div>
          <div class="bj-quote__source">Chapitre 3 - Gouvernance</div>
        </figcaption>
      </figure>
      <figure class="bj-quote">
        <img
          class="bj-quote__image"
          src="https://picsum.photos/seed/portrait/96/96"
          width="48"
          height="48"
          alt="Portrait de l’autrice"
        />
        <blockquote class="bj-quote__text">
          Les services en ligne réduisent les déplacements et le temps
          d’attente.
        </blockquote>
        <figcaption>
          <div class="bj-quote__author">Usagère du portail</div>
        </figcaption>
      </figure>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-quote" :title="t('section-classes')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-quote" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
