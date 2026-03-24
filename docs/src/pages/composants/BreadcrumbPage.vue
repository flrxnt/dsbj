<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const codeExemple = `<nav class="bj-breadcrumb" aria-label="Fil d'Ariane">
  <ol class="bj-breadcrumb__list">…</ol>
</nav>`

const propsRows = [
  { name: 'bj-breadcrumb', description: 'Conteneur.' },
  { name: 'bj-breadcrumb__list', description: 'Liste.' },
  { name: 'bj-breadcrumb__item', description: 'Étape.' },
  { name: 'bj-breadcrumb__link', description: 'Lien.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Fil d’Ariane
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Repères hiérarchiques et liens de retour vers les niveaux
    supérieurs.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <nav class="bj-breadcrumb" aria-label="Fil d'Ariane">
        <ol class="bj-breadcrumb__list">
          <li class="bj-breadcrumb__item">
            <a class="bj-breadcrumb__link" href="#">Accueil</a>
          </li>
          <li class="bj-breadcrumb__item">
            <a class="bj-breadcrumb__link" href="#">Démarches</a>
          </li>
          <li class="bj-breadcrumb__item" aria-current="page">
            Demande
          </li>
        </ol>
      </nav>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Dernier item sans lien (page courante).
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Préférez <code>ol</code> pour l’ordre des niveaux ;
      <code>aria-label</code> sur le <code>nav</code>.
    </DocsA11yNote>
  </DocsSection>
</template>
