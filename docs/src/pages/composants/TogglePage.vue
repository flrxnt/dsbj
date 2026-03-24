<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExample = `<label class="bj-toggle" data-bj-toggle>
  <input class="bj-toggle__input" type="checkbox" role="switch">
  <span class="bj-toggle__label">…</span>
</label>`

const propsRows = [
  { name: 'bj-toggle', description: 'Label conteneur.' },
  { name: 'bj-toggle__input', description: 'Entrée stylée.' },
  { name: 'bj-toggle__label', description: 'Texte.' },
  { name: 'bj-toggle__hint', description: 'Aide.' },
  { name: 'data-bj-toggle', description: 'Point d’ancrage JS.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Interrupteur
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Paramètre binaire présenté comme interrupteur ; le script émet
    l’événement <code>bj:toggle</code>.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <label class="bj-toggle" data-bj-toggle>
        <input
          class="bj-toggle__input"
          type="checkbox"
          role="switch"
          name="xt1"
          checked
        />
        <span class="bj-toggle__label">Notifications push</span>
      </label>
      <label class="bj-toggle" data-bj-toggle>
        <input
          class="bj-toggle__input"
          type="checkbox"
          role="switch"
          name="xt2"
        />
        <span class="bj-toggle__label">Mode renforcé</span>
        <span class="bj-toggle__hint"
          >Contrastes accrus sur certaines pages.</span
        >
      </label>
      <label class="bj-toggle bj-toggle--border" data-bj-toggle>
        <input
          class="bj-toggle__input"
          type="checkbox"
          role="switch"
          name="xt3"
        />
        <span class="bj-toggle__label">Option encadrée</span>
      </label>
      <label class="bj-toggle bj-toggle--label-left" data-bj-toggle>
        <input
          class="bj-toggle__input"
          type="checkbox"
          role="switch"
          name="xt4"
        />
        <span class="bj-toggle__label">Libellé à gauche</span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>bj-toggle--border</code>,
      <code>bj-toggle--label-left</code>. Conteneur avec
      <code>data-bj-toggle</code>.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      <code>role="switch"</code> lorsque pertinent ; libellé
      explicite sur l’état ou l’action.
    </DocsA11yNote>
  </DocsSection>
</template>
