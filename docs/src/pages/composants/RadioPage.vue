<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExample =
  '<fieldset class="bj-radio-group">…</fieldset>'

const propsRows = [
  { name: 'bj-radio-group', description: 'Groupe vertical.' },
  { name: 'bj-radio-group--inline', description: 'Groupe horizontal.' },
  { name: 'bj-radio-group__legend', description: 'Question posée.' },
  { name: 'bj-radio', description: 'Label englobant.' },
  { name: 'bj-radio__label', description: 'Texte du choix.' },
  { name: 'bj-radio__hint', description: 'Aide.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Bouton radio
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Choix unique parmi plusieurs options mutuellement exclusives.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <fieldset class="bj-radio-group">
        <legend class="bj-radio-group__legend">
          Type de demande
        </legend>
        <label class="bj-radio">
          <input type="radio" name="xr1" value="n" checked />
          <span class="bj-radio__label">Nouvelle demande</span>
        </label>
        <label class="bj-radio">
          <input type="radio" name="xr1" value="r" />
          <span class="bj-radio__label">Renouvellement</span>
        </label>
      </fieldset>
      <fieldset class="bj-radio-group bj-radio-group--inline">
        <legend class="bj-radio-group__legend">Civilité</legend>
        <label class="bj-radio"
          ><input type="radio" name="xr2" value="m" /><span
            class="bj-radio__label"
            >M.</span
          ></label
        >
        <label class="bj-radio"
          ><input type="radio" name="xr2" value="f" /><span
            class="bj-radio__label"
            >Mme</span
          ></label
        >
      </fieldset>
      <fieldset class="bj-radio-group">
        <legend class="bj-radio-group__legend">Tarif</legend>
        <label class="bj-radio">
          <input type="radio" name="xr3" value="1" />
          <span class="bj-radio__label">Réduit</span>
          <span class="bj-radio__hint">Sur justificatif.</span>
        </label>
        <label class="bj-radio">
          <input type="radio" name="xr3" value="2" disabled />
          <span class="bj-radio__label">Spécial (indisponible)</span>
        </label>
      </fieldset>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>bj-radio-group--inline</code> pour aligner les options sur
      une ligne lorsque les libellés sont courts.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      Même attribut <code>name</code> pour toutes les options d’un
      ensemble.
    </DocsA11yNote>
  </DocsSection>
</template>
