<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeTooltip = `<span class="bj-tooltip">…
  <span class="bj-tooltip__content" role="tooltip">…</span>
</span>`

const propsRows = [
  { name: 'bj-tooltip', description: 'Conteneur.' },
  { name: 'bj-tooltip__content', description: 'Texte.' },
  {
    name: 'bj-tooltip--bottom / bj-tooltip--left / bj-tooltip--right',
    description: 'Position.',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">Infobulle</h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Texte court au survol ou au focus ; positions haut, bas, gauche, droite.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview
      style="
        display: flex;
        flex-wrap: wrap;
        gap: var(--bj-spacing-6v);
        align-items: center;
      "
    >
      <span class="bj-tooltip">
        Haut
        <span class="bj-tooltip__content" role="tooltip">Texte</span>
      </span>
      <span class="bj-tooltip bj-tooltip--bottom">
        Bas
        <span class="bj-tooltip__content" role="tooltip">Texte</span>
      </span>
      <span class="bj-tooltip bj-tooltip--left">
        Gauche
        <span class="bj-tooltip__content" role="tooltip">Texte</span>
      </span>
      <span class="bj-tooltip bj-tooltip--right">
        Droite
        <span class="bj-tooltip__content" role="tooltip">Texte</span>
      </span>
    </DocsPreview>
    <DocsCode :code="codeTooltip" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>data-bj-expanded</code> sur le contenu pour affichage
      programmatique.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Ne pas réserver une information critique au seul survol.
    </DocsA11yNote>
  </DocsSection>
</template>
