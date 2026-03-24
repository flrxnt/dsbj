<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const codeExemple = `<aside class="bj-summary">…</aside>`

const propsRows = [
  { name: 'bj-summary', description: 'Encadré.' },
  { name: 'bj-summary__title', description: 'Titre.' },
  { name: 'bj-summary__list', description: 'Liste.' },
  { name: 'bj-summary__link', description: 'Lien ancré.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Sommaire
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Table des matières numérotée pour les contenus longs.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <aside class="bj-summary" aria-labelledby="ex-sum-t">
        <p class="bj-summary__title" id="ex-sum-t">Dans cette page</p>
        <ul
          class="bj-summary__list"
          style="list-style: none; margin: 0; padding: 0"
        >
          <li><a class="bj-summary__link" href="#s1">Contexte</a></li>
          <li>
            <a class="bj-summary__link" href="#s2">Procédure</a>
          </li>
          <li><a class="bj-summary__link" href="#s3">Contacts</a></li>
        </ul>
      </aside>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Numérotation CSS automatique sur <code>bj-summary__link</code>.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      <code>aria-labelledby</code> ; ancres <code>id</code> stables.
    </DocsA11yNote>
  </DocsSection>
</template>
