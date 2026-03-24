<script setup lang="ts">
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const displayRows = [
  { name: 'bj-d-block', description: 'display: block' },
  { name: 'bj-d-inline-block', description: 'display: inline-block' },
  { name: 'bj-d-inline', description: 'display: inline' },
  { name: 'bj-d-flex', description: 'display: flex' },
  { name: 'bj-d-inline-flex', description: 'display: inline-flex' },
  { name: 'bj-d-grid', description: 'display: grid' },
  { name: 'bj-d-none', description: 'display: none' },
]

const flexRows = [
  {
    name: 'bj-flex-row / bj-flex-col',
    description: 'Direction du conteneur flex',
  },
  {
    name: 'bj-flex-wrap / bj-flex-nowrap',
    description: 'Retour à la ligne',
  },
  {
    name:
      'bj-justify-start, bj-justify-center, bj-justify-end, bj-justify-between, bj-justify-around',
    description: 'Axe principal',
  },
  {
    name:
      'bj-items-start, bj-items-center, bj-items-end, bj-items-stretch',
    description: 'Axe transversal',
  },
  {
    name: 'bj-self-start, bj-self-center, bj-self-end',
    description: 'Alignement d’un élément',
  },
  {
    name: 'bj-flex-1, bj-flex-auto, bj-flex-none',
    description: 'Flexibilité',
  },
  {
    name: 'bj-gap-1v … bj-gap-8v',
    description: 'Écart entre enfants (jetons d’espacement)',
  },
]

const textRows = [
  {
    name: 'bj-text-left, bj-text-center, bj-text-right',
    description: 'Alignement',
  },
  {
    name:
      'bj-text-uppercase, bj-text-lowercase, bj-text-capitalize, bj-text-normal-case',
    description: 'Casse',
  },
  {
    name:
      'bj-text-underline, bj-text-no-underline, bj-text-line-through',
    description: 'Décoration',
  },
  { name: 'bj-text-truncate', description: 'Ellipse sur une ligne' },
  { name: 'bj-text-break', description: 'Césure de mots longs' },
]

const colorRows = [
  {
    name:
      'bj-text-default, bj-text-title, bj-text-alt, bj-text-mention, bj-text-inverted',
    description: 'Couleurs de texte sémantiques',
  },
  {
    name:
      'bj-text-action, bj-text-info, bj-text-success, bj-text-warning, bj-text-error, bj-text-accent',
    description: 'États et accent',
  },
  {
    name:
      'bj-bg-default, bj-bg-alt, bj-bg-contrast, bj-bg-elevated',
    description: 'Fonds neutres',
  },
  {
    name:
      'bj-bg-action, bj-bg-info, bj-bg-success, bj-bg-warning, bj-bg-error',
    description: 'Fonds d’état',
  },
]

const visibilityRows = [
  {
    name: 'bj-sr-only',
    description:
      'Masqué visuellement, reste lu par les lecteurs d’écran',
  },
  {
    name: 'bj-sr-only-focusable',
    description:
      'Pareil, visible au focus clavier (ex. « Aller au contenu »)',
  },
  {
    name: 'bj-visible / bj-invisible',
    description: 'visibility visible / hidden',
  },
  {
    name:
      'bj-hidden-sm, bj-hidden-md, bj-hidden-lg, bj-hidden-xl',
    description: 'display: none à partir du breakpoint',
  },
  {
    name: 'bj-visible-sm, … bj-visible-xl',
    description: 'display: revert à partir du breakpoint',
  },
]
</script>

<template>
  <h1 class="bj-h1">Classes utilitaires</h1>
  <p class="bj-text-md bj-text-alt">
    Raccourcis pour la mise en page et le style sans écrire de CSS
    personnalisé. Préfixe <code>bj-</code> sur toutes les classes.
  </p>

  <DocsSection id="affichage" title="Affichage">
    <DocsPropsTable :rows="displayRows" />
    <p class="bj-text-sm bj-text-alt">
      Variantes responsives : préfixe du breakpoint puis type
      d’affichage, par ex. <code>bj-d-md-flex</code>,
      <code>bj-d-lg-none</code> (à partir de SM, MD, LG ou XL).
    </p>
  </DocsSection>

  <DocsSection id="flexbox" title="Flexbox">
    <DocsPropsTable :rows="flexRows" />
    <DocsPreview
      class="bj-d-flex bj-justify-center bj-items-center bj-gap-4v bj-flex-wrap"
    >
      <span class="bj-bg-alt bj-p-2v">A</span>
      <span class="bj-bg-alt bj-p-2v">B</span>
      <span class="bj-bg-alt bj-p-2v">C</span>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="texte" title="Texte">
    <DocsPropsTable :rows="textRows" />
  </DocsSection>

  <DocsSection id="couleurs-texte-fond" title="Couleurs (texte et fond)">
    <DocsPropsTable
      :headers="['Classe', 'Rôle']"
      :rows="colorRows"
    />
  </DocsSection>

  <DocsSection id="visibilite" title="Visibilité">
    <DocsPropsTable :rows="visibilityRows" />
  </DocsSection>
</template>
