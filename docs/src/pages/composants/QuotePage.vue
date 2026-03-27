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
      desc: 'Citation longue : modificateur <code>bj-quote--accent</code> (bordure rouge Bénin), texte via contenu du <code>blockquote</code> (ou prop <code>text</code> en Vue), <code>bj-quote__author</code>, <code>bj-quote__source</code>, image optionnelle <code>bj-quote__image</code> (pas <code>bj-quote__img</code>) placée avant le <code>blockquote</code>, comme dans le composant Vue.',
      'section-example': 'Exemple complet',
      'section-text-only': 'Texte seul',
      'para-text-only':
        'Le <code>figcaption</code> n’apparaît que si auteur ou source est présent ; une citation peut n’avoir que le bloc de texte.',
      'section-author-source': 'Auteur et source',
      'para-author-source':
        'Utilisez <code>span.bj-quote__author</code> et <code>span.bj-quote__source</code> dans <code>figcaption</code> ; l’un ou l’autre peut être omis.',
      'section-accent': 'Variante accent',
      'section-image': 'Avec portrait',
      'para-image':
        'L’image précède le <code>blockquote</code> dans le <code>figure</code> ; fournissez un <code>alt</code> pertinent si l’image apporte une information.',
      'section-combo-accent-image': 'Accent × image',
      'para-combo':
        'Vous pouvez combiner <code>bj-quote--accent</code> et <code>bj-quote__image</code> pour un témoignage mis en avant avec portrait.',
      'section-accent-text-only': 'Accent × texte seul',
      'para-accent-text-only':
        'La variante <code>bj-quote--accent</code> s’applique sans auteur ni source : seul le <code>blockquote</code> est requis.',
      'section-classes': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'a11y-note':
        'Utilisez <code>&lt;blockquote&gt;</code> pour le contenu cité et <code>&lt;figcaption&gt;</code> pour l’attribution. Les guillemets ajoutés en CSS sont décoratifs côté rendu ; le texte dans le bloc doit rester compréhensible seul. Toute image d’auteur nécessite un <code>alt</code> pertinent lorsqu’elle n’est pas purement décorative.',
      'prop-bj-quote':
        'Conteneur <code>figure</code> avec bordure gauche verte action.',
      'prop-bj-quote-text':
        'Texte cité (Spectral italique, guillemets via CSS).',
      'prop-bj-quote-author':
        'Nom ou fonction de la personne citée.',
      'prop-bj-quote-source': 'Référence, date ou ouvrage.',
      'prop-bj-quote-accent': 'Modificateur : bordure gauche rouge Bénin.',
      'prop-bj-quote-image':
        'Avatar ou portrait au-dessus de la citation (classe <code>bj-quote__image</code> dans les feuilles de style — ne pas utiliser <code>bj-quote__img</code>).',
    },
    en: {
      title: 'Quote',
      desc: 'Long quotation: <code>bj-quote--accent</code> modifier (Benin red border), text inside <code>blockquote</code> (or <code>text</code> prop in Vue), <code>bj-quote__author</code>, <code>bj-quote__source</code>, optional <code>bj-quote__image</code> (not <code>bj-quote__img</code>) before <code>blockquote</code> (same order as the Vue component).',
      'section-example': 'Full example',
      'section-text-only': 'Text only',
      'para-text-only':
        '<code>figcaption</code> only renders when author or source exists; a quote can be just the blockquote.',
      'section-author-source': 'Author and source',
      'para-author-source':
        'Use <code>span.bj-quote__author</code> and <code>span.bj-quote__source</code> inside <code>figcaption</code>; either may be omitted.',
      'section-accent': 'Accent variant',
      'section-image': 'With portrait',
      'para-image':
        'Place the image before <code>blockquote</code> inside <code>figure</code>; use a meaningful <code>alt</code> when the image conveys information.',
      'section-combo-accent-image': 'Accent × image',
      'para-combo':
        'You can combine <code>bj-quote--accent</code> and <code>bj-quote__image</code> for an emphasised testimonial with a portrait.',
      'section-accent-text-only': 'Accent × text only',
      'para-accent-text-only':
        '<code>bj-quote--accent</code> works with no author or source—only the <code>blockquote</code> is required.',
      'section-classes': 'CSS classes',
      'section-a11y': 'Accessibility',
      'a11y-note':
        'Use <code>&lt;blockquote&gt;</code> for quoted content and <code>&lt;figcaption&gt;</code> for attribution. Quotes added in CSS are decorative in rendering; the text in the block must still make sense on its own. Author images need a meaningful <code>alt</code> when they are not purely decorative.',
      'prop-bj-quote':
        '<code>figure</code> container with action-green left border.',
      'prop-bj-quote-text':
        'Quoted text (Spectral italic, quotes via CSS).',
      'prop-bj-quote-author': 'Name or role of the quoted person.',
      'prop-bj-quote-source': 'Reference, date, or publication.',
      'prop-bj-quote-accent': 'Modifier: Benin red left border.',
      'prop-bj-quote-image':
        'Avatar or portrait above the quote (class <code>bj-quote__image</code> in CSS—not <code>bj-quote__img</code>).',
    },
  },
})

const codeExemple = `<figure class="bj-quote">
  <blockquote class="bj-quote__text">…</blockquote>
  <figcaption>
    <span class="bj-quote__author">…</span>
    <span class="bj-quote__source">…</span>
  </figcaption>
</figure>`

const codeTextOnly = `<figure class="bj-quote">
  <blockquote class="bj-quote__text">
    Citation sans attribution affichée.
  </blockquote>
</figure>`

const codeAuthorOnly = `<figure class="bj-quote">
  <blockquote class="bj-quote__text">…</blockquote>
  <figcaption>
    <span class="bj-quote__author">Prénom Nom</span>
  </figcaption>
</figure>`

const codeAccent = `<figure class="bj-quote bj-quote--accent">
  <blockquote class="bj-quote__text">…</blockquote>
  <figcaption>
    <span class="bj-quote__author">…</span>
    <span class="bj-quote__source">…</span>
  </figcaption>
</figure>`

const codeImage = `<figure class="bj-quote">
  <img class="bj-quote__image" src="…" width="48" height="48" alt="Portrait" />
  <blockquote class="bj-quote__text">…</blockquote>
  <figcaption>
    <span class="bj-quote__author">…</span>
  </figcaption>
</figure>`

const codeCombo = `<figure class="bj-quote bj-quote--accent">
  <img class="bj-quote__image" src="…" width="48" height="48" alt="Portrait" />
  <blockquote class="bj-quote__text">…</blockquote>
  <figcaption>
    <span class="bj-quote__author">…</span>
    <span class="bj-quote__source">…</span>
  </figcaption>
</figure>`

const codeAccentTextOnly = `<figure class="bj-quote bj-quote--accent">
  <blockquote class="bj-quote__text">
    Extrait mis en avant sans attribution affichée.
  </blockquote>
</figure>`

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
    <span v-html="t('desc')" />
  </p>

  <DocsSection id="exemple-quote" :title="t('section-example')">
    <DocsPreview>
      <figure class="bj-quote">
        <blockquote class="bj-quote__text">
          Le numérique doit rapprocher l’administration des citoyens,
          pas l’inverse.
        </blockquote>
        <figcaption>
          <span class="bj-quote__author">Prénom Nom</span>
          <span class="bj-quote__source">
            Discours d’inauguration - Cotonou, 2024
          </span>
        </figcaption>
      </figure>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="quote-text-only" :title="t('section-text-only')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-text-only')" />
    </p>
    <DocsPreview>
      <figure class="bj-quote">
        <blockquote class="bj-quote__text">
          Citation sans attribution affichée dans le flux éditorial.
        </blockquote>
      </figure>
    </DocsPreview>
    <DocsCode :code="codeTextOnly" />
  </DocsSection>

  <DocsSection id="quote-author-source" :title="t('section-author-source')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-author-source')" />
    </p>
    <DocsPreview>
      <figure class="bj-quote">
        <blockquote class="bj-quote__text">
          Les services en ligne réduisent les délais de traitement.
        </blockquote>
        <figcaption>
          <span class="bj-quote__author">Direction du numérique</span>
        </figcaption>
      </figure>
    </DocsPreview>
    <DocsCode :code="codeAuthorOnly" />
  </DocsSection>

  <DocsSection id="quote-accent-text-only" :title="t('section-accent-text-only')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-accent-text-only')" />
    </p>
    <DocsPreview>
      <figure class="bj-quote bj-quote--accent">
        <blockquote class="bj-quote__text">
          La simplification des démarches est un engagement fort du
          gouvernement.
        </blockquote>
      </figure>
    </DocsPreview>
    <DocsCode :code="codeAccentTextOnly" />
  </DocsSection>

  <DocsSection id="variantes-quote-accent" :title="t('section-accent')">
    <DocsPreview>
      <figure class="bj-quote bj-quote--accent">
        <blockquote class="bj-quote__text">
          La transparence des données est un levier de confiance.
        </blockquote>
        <figcaption>
          <span class="bj-quote__author">Rapport annuel</span>
          <span class="bj-quote__source">Chapitre 3 - Gouvernance</span>
        </figcaption>
      </figure>
    </DocsPreview>
    <DocsCode :code="codeAccent" />
  </DocsSection>

  <DocsSection id="variantes-quote-image" :title="t('section-image')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-image')" />
    </p>
    <DocsPreview>
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
          <span class="bj-quote__author">Usagère du portail</span>
        </figcaption>
      </figure>
    </DocsPreview>
    <DocsCode :code="codeImage" />
  </DocsSection>

  <DocsSection id="quote-combo-accent-image" :title="t('section-combo-accent-image')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-combo')" />
    </p>
    <DocsPreview>
      <figure class="bj-quote bj-quote--accent">
        <img
          class="bj-quote__image"
          src="https://picsum.photos/seed/accent/96/96"
          width="48"
          height="48"
          alt="Portrait du témoin"
        />
        <blockquote class="bj-quote__text">
          Le guichet unique nous a fait gagner plusieurs semaines.
        </blockquote>
        <figcaption>
          <span class="bj-quote__author">Chef d’entreprise</span>
          <span class="bj-quote__source">Enquête usagers 2025</span>
        </figcaption>
      </figure>
    </DocsPreview>
    <DocsCode :code="codeCombo" />
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
