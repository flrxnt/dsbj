<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const codeExemple = `<nav class="bj-pagination" aria-label="Pagination">…</nav>`

const propsRows = [
  { name: 'bj-pagination', description: 'Conteneur.' },
  {
    name: 'bj-pagination__link / bj-pagination__link--active / bj-pagination__link--disabled',
    description: 'Numéros.',
  },
  { name: 'bj-pagination__ellipsis', description: 'Ellipse.' },
  {
    name: 'bj-pagination__nav / bj-pagination__nav--disabled',
    description: 'Préc./suiv.',
  },
  { name: 'bj-pagination__label', description: 'Libellé texte.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Pagination
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Navigation entre pages de résultats avec états actif et désactivé.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <nav class="bj-pagination" aria-label="Pagination">
        <a
          class="bj-pagination__nav bj-pagination__nav--disabled"
          href="#"
          aria-disabled="true"
          ><span aria-hidden="true">←</span>
          <span class="bj-pagination__label">Précédent</span></a
        >
        <a class="bj-pagination__link" href="#">1</a>
        <a
          class="bj-pagination__link bj-pagination__link--active"
          href="#"
          aria-current="page"
          >2</a
        >
        <a class="bj-pagination__link" href="#">3</a>
        <span class="bj-pagination__ellipsis" aria-hidden="true">…</span>
        <a class="bj-pagination__link" href="#">12</a>
        <a class="bj-pagination__nav" href="#"
          >Suivant <span aria-hidden="true">→</span></a
        >
      </nav>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>bj-pagination__ellipsis</code>,
      <code>bj-pagination__nav--disabled</code>,
      <code>bj-pagination__label</code> (visible depuis breakpoint
      médian).
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      <code>aria-current="page"</code> sur la page active.
    </DocsA11yNote>
  </DocsSection>
</template>
