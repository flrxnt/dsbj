<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExample = `<div class="bj-select-group">
  <select class="bj-select">…</select>
</div>`

const propsRows = [
  { name: 'bj-select-group', description: 'Groupe label + select.' },
  { name: 'bj-select', description: 'Liste déroulante.' },
  { name: 'bj-select--error', description: 'Bordure d’erreur.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Liste déroulante
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Choix d’une option dans une liste fermée, avec styles homogènes
    aux autres champs.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <div class="bj-select-group">
        <label class="bj-label" for="ex-s1">Commune</label>
        <select id="ex-s1" class="bj-select">
          <option value="">Sélectionner…</option>
          <option value="cotonou">Cotonou</option>
          <option value="porto">Porto-Novo</option>
        </select>
      </div>
      <div class="bj-select-group">
        <label class="bj-label" for="ex-s2">Statut (erreur)</label>
        <select
          id="ex-s2"
          class="bj-select bj-select--error"
          aria-invalid="true"
          aria-describedby="ex-s2-e"
        >
          <option value="">Choisir…</option>
        </select>
        <p id="ex-s2-e" class="bj-message bj-message--error" role="alert">
          Champ obligatoire.
        </p>
      </div>
      <div class="bj-select-group">
        <label class="bj-label" for="ex-s3">Désactivé</label>
        <select id="ex-s3" class="bj-select" disabled>
          <option>Non modifiable</option>
        </select>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>bj-select--error</code> pour l’état d’erreur.
      Désactivation native <code>disabled</code>.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Liez le <code>label</code> au <code>select</code>. En
      erreur&nbsp;: <code>aria-invalid</code> et message relié par
      <code>aria-describedby</code>.
    </DocsA11yNote>
  </DocsSection>
</template>
