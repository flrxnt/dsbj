<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExample = '<form class="bj-search" role="search">…</form>'

const propsRows = [
  { name: 'bj-search', description: 'Conteneur.' },
  { name: 'bj-search__input', description: 'Champ.' },
  { name: 'bj-search__btn', description: 'Bouton.' },
  { name: 'bj-search--lg', description: 'Grande taille.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Recherche
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Champ de recherche jumelé à un bouton d’action pour les moteurs
    internes.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <form class="bj-search" role="search" action="#" method="get">
        <input
          class="bj-search__input"
          type="search"
          name="q"
          placeholder="Rechercher une démarche…"
          aria-label="Rechercher une démarche"
        />
        <button type="submit" class="bj-search__btn">
          <span class="bj-sr-only">Lancer la recherche</span>
          <i class="ri-search-line" aria-hidden="true"></i>
        </button>
      </form>
      <form
        class="bj-search bj-search--lg"
        role="search"
        action="#"
        method="get"
        style="margin-top: var(--bj-spacing-4v)"
      >
        <input
          class="bj-search__input"
          type="search"
          name="q2"
          placeholder="Recherche large"
          aria-label="Recherche large"
        />
        <button type="submit" class="bj-search__btn">
          Rechercher
        </button>
      </form>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>bj-search--lg</code> pour un gabarit plus haut.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      <code>role="search"</code> sur le <code>form</code>. Libellé
      accessible au champ ; <code>bj-sr-only</code> pour le texte du
      bouton icône.
    </DocsA11yNote>
  </DocsSection>
</template>
