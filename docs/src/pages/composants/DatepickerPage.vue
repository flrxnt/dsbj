<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExample = `<div class="bj-datepicker" data-bj-datepicker>
  <div class="bj-datepicker__field">
    <input type="text" class="bj-datepicker__input" placeholder="jj/mm/aaaa" />
    <button type="button" class="bj-datepicker__trigger" aria-label="Ouvrir le calendrier">
      <i class="ri-calendar-line" aria-hidden="true"></i>
    </button>
  </div>
</div>`

const codeMinMax = `<div class="bj-datepicker" data-bj-datepicker
     data-bj-datepicker-min="01/01/2024"
     data-bj-datepicker-max="31/12/2026">
  …
</div>`

const propsRows = [
  { name: 'bj-datepicker', description: 'Conteneur principal.' },
  {
    name: 'bj-datepicker__input',
    description: 'Champ de saisie de la date.',
  },
  {
    name: 'bj-datepicker__trigger',
    description: 'Bouton d\'ouverture du calendrier.',
  },
  {
    name: 'bj-datepicker__calendar',
    description: 'Panneau calendrier (généré par JS).',
  },
  { name: 'bj-datepicker__day--today', description: 'Jour actuel.' },
  {
    name: 'bj-datepicker__day--selected',
    description: 'Jour sélectionné.',
  },
  { name: 'bj-datepicker--sm', description: 'Variante compacte.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Sélecteur de date
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Champ de saisie de date avec calendrier intégré, adapté au format
    administratif <code>jj/mm/aaaa</code>. Émet l'événement
    <code>bj:datepicker</code>.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <div class="bj-datepicker" data-bj-datepicker>
        <div class="bj-datepicker__field">
          <input
            type="text"
            class="bj-datepicker__input"
            placeholder="jj/mm/aaaa"
          />
          <button
            type="button"
            class="bj-datepicker__trigger"
            aria-label="Ouvrir le calendrier"
          >
            <i class="ri-calendar-line" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-bornes" title="Avec bornes min/max">
    <DocsPreview>
      <div
        class="bj-datepicker"
        data-bj-datepicker
        data-bj-datepicker-min="01/01/2024"
        data-bj-datepicker-max="31/12/2026"
      >
        <div class="bj-datepicker__field">
          <input
            type="text"
            class="bj-datepicker__input"
            placeholder="jj/mm/aaaa"
          />
          <button
            type="button"
            class="bj-datepicker__trigger"
            aria-label="Ouvrir le calendrier"
          >
            <i class="ri-calendar-line" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMinMax" />
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilite" title="Accessibilité">
    <DocsA11yNote>
      Le calendrier a <code>role="dialog"</code>. Navigation clavier
      complète : flèches, Entrée pour sélectionner, Échap pour fermer.
      Le champ accepte la saisie manuelle au format
      <code>jj/mm/aaaa</code>.
    </DocsA11yNote>
  </DocsSection>
</template>
