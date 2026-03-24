<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExemple = `<figure class="bj-quote">
  <blockquote class="bj-quote__text">…</blockquote>
  <figcaption>
    <div class="bj-quote__author">…</div>
    <div class="bj-quote__source">…</div>
  </figcaption>
</figure>`

const codeVariantes = `<figure class="bj-quote bj-quote--accent">…</figure>
<img class="bj-quote__image" src="…" alt="…">`

const propsRows = [
  { name: 'bj-quote', description: 'Conteneur avec bordure gauche verte action.' },
  { name: 'bj-quote__text', description: 'Texte cité (Spectral italique, guillemets via CSS).' },
  { name: 'bj-quote__author', description: 'Nom ou fonction de la personne citée.' },
  { name: 'bj-quote__source', description: 'Référence, date ou ouvrage.' },
  { name: 'bj-quote--accent', description: 'Bordure gauche rouge Bénin.' },
  { name: 'bj-quote__image', description: 'Avatar ou portrait au-dessus de la citation.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Citation
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Citation longue en serif italique avec guillemets français générés
    en CSS, suivie de l’auteur et de la source. Variante d’accent
    color pour les témoignages ou citations officielles.
  </p>

  <DocsSection id="exemple-quote" title="Exemple">
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

  <DocsSection id="variantes-quote" title="Variantes">
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

  <DocsSection id="classes-quote" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-quote" title="Accessibilité">
    <DocsA11yNote>
      Utilisez <code>&lt;blockquote&gt;</code> pour le contenu cité
      et <code>&lt;figcaption&gt;</code> pour l’attribution. Les
      guillemets ajoutés en CSS sont décoratifs côté rendu ; le
      texte dans le bloc doit rester compréhensible seul. Toute
      image d’auteur nécessite un <code>alt</code> pertinent.
    </DocsA11yNote>
  </DocsSection>
</template>
