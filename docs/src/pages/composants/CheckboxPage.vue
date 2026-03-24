<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExample = `<fieldset class="bj-checkbox-group">
  <legend class="bj-checkbox-group__legend">…</legend>
  <label class="bj-checkbox">…</label>
</fieldset>`

const propsRows = [
  { name: 'bj-checkbox-group', description: 'Conteneur.' },
  { name: 'bj-checkbox-group__legend', description: 'Titre de groupe.' },
  { name: 'bj-checkbox', description: 'Label englobant.' },
  { name: 'bj-checkbox__label', description: 'Texte.' },
  { name: 'bj-checkbox__hint', description: 'Aide.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Case à cocher
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Choix multiples ou consentement explicite, avec libellé et texte
    d’aide optionnel.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <div class="bj-checkbox-group">
        <label class="bj-checkbox">
          <input type="checkbox" name="xc1" checked />
          <span class="bj-checkbox__label"
            >Notifications par courriel</span
          >
        </label>
      </div>
      <fieldset class="bj-checkbox-group">
        <legend class="bj-checkbox-group__legend">
          Pièces fournies
        </legend>
        <label class="bj-checkbox">
          <input type="checkbox" name="xc2" value="id" />
          <span class="bj-checkbox__label">Pièce d’identité</span>
        </label>
        <label class="bj-checkbox">
          <input type="checkbox" name="xc2" value="dom" />
          <span class="bj-checkbox__label"
            >Justificatif de domicile</span
          >
          <span class="bj-checkbox__hint"
            >PDF ou image, 5&nbsp;Mo max.</span
          >
        </label>
        <label class="bj-checkbox">
          <input type="checkbox" name="xc2" value="x" disabled />
          <span class="bj-checkbox__label">Option indisponible</span>
        </label>
      </fieldset>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>bj-checkbox__hint</code> pour préciser contraintes ou
      formats.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Pour plusieurs cases liées, préférez <code>fieldset</code> et
      <code>legend</code>.
    </DocsA11yNote>
  </DocsSection>
</template>
