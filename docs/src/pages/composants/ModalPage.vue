<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeModal = `<button data-bj-modal-open="id">…</button>
<div class="bj-modal" id="id" role="dialog" aria-modal="true">…</div>`

const propsRows = [
  { name: 'bj-modal', description: 'Conteneur plein écran.' },
  { name: 'bj-modal__overlay', description: 'Fond.' },
  { name: 'bj-modal__dialog', description: 'Boîte.' },
  {
    name: 'bj-modal__header / bj-modal__body / bj-modal__footer',
    description: 'Zones.',
  },
  {
    name: 'bj-modal--sm / bj-modal--lg / bj-modal--full',
    description: 'Largeurs.',
  },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Fenêtre modale
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Dialogue modal avec overlay, fermeture Échap et piège de focus.
  </p>

  <DocsSection id="sec-exemple" title="Exemple">
    <DocsPreview>
      <button type="button" class="bj-btn" data-bj-modal-open="ex-modal">
        Ouvrir
      </button>
      <div
        class="bj-modal"
        id="ex-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ex-modal-t"
      >
        <div
          class="bj-modal__overlay"
          data-bj-modal-close
          tabindex="-1"
        ></div>
        <div class="bj-modal__dialog">
          <header class="bj-modal__header">
            <h2 class="bj-modal__title" id="ex-modal-t">Confirmation</h2>
            <button
              type="button"
              class="bj-modal__close"
              data-bj-modal-close
              aria-label="Fermer"
            >
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </header>
          <div class="bj-modal__body">
            <p class="bj-text-sm">Confirmer l’envoi du dossier&nbsp;?</p>
          </div>
          <footer class="bj-modal__footer">
            <button type="button" class="bj-btn" data-bj-modal-close>
              Annuler
            </button>
            <button
              type="button"
              class="bj-btn bj-btn--secondary"
              data-bj-modal-close
            >
              Valider
            </button>
          </footer>
        </div>
      </div>
      <p
        class="bj-text-xs bj-text-mention"
        style="margin-top: var(--bj-spacing-3v)"
      >
        Tailles&nbsp;: <code>bj-modal--sm</code>, <code>bj-modal--lg</code>,
        <code>bj-modal--full</code>.
      </p>
    </DocsPreview>
    <DocsCode :code="codeModal" />
  </DocsSection>

  <DocsSection id="sec-variantes" title="Variantes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      <code>data-bj-modal-open</code> / <code>data-bj-modal-close</code> ;
      <code>bj-modal-open</code> sur le <code>body</code>.
    </p>
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      <code>aria-labelledby</code> vers le titre ; focus piégé dans la modale
      ouverte.
    </DocsA11yNote>
  </DocsSection>
</template>
