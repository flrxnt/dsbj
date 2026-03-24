<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const codeExemple = `<div class="bj-skiplinks">
  <a class="bj-skiplinks__link" href="#main">Aller au contenu</a>
</div>`

const propsRows = [
  { name: 'bj-skiplinks', description: 'Conteneur.' },
  { name: 'bj-skiplinks__list', description: 'Liste optionnelle.' },
  { name: 'bj-skiplinks__link', description: 'Lien hors écran jusqu’au focus.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Liens d’évitement
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Accès direct au contenu principal pour le clavier et les lecteurs
    d’écran.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <p
      class="bj-text-sm bj-text-mention"
      style="margin-bottom: var(--bj-spacing-3v)"
    >
      Appuyez sur <kbd>Tab</kbd> pour révéler le lien.
    </p>
    <DocsPreview>
      <div class="bj-skiplinks">
        <a class="bj-skiplinks__link" href="#main">Aller au contenu</a>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Liste <code>bj-skiplinks__list</code> pour plusieurs cibles.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Placez les liens en tête de document ; la cible
      <code>id</code> doit exister.
    </DocsA11yNote>
  </DocsSection>
</template>
