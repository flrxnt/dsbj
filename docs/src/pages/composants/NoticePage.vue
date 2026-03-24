<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExemple = `<div class="bj-notice" role="status">
  <span class="bj-notice__icon" aria-hidden="true">…</span>
  <div class="bj-notice__body">…</div>
</div>`

const codeVariantes = `<div class="bj-notice bj-notice--info">…</div>
<div class="bj-notice bj-notice--warning">…</div>
<div class="bj-notice bj-notice--alert">…</div>`

const propsRows = [
  {
    name: 'bj-notice',
    description: 'Bandeau flex, fond alternatif, bordure basse.',
  },
  { name: 'bj-notice__icon', description: 'Icône à gauche.' },
  {
    name: 'bj-notice__body',
    description:
      'Texte principal (peut contenir un bj-notice__title en gras).',
  },
  { name: 'bj-notice__title', description: 'Préfixe ou intitulé court dans le corps.' },
  { name: 'bj-notice__close', description: 'Bouton de fermeture à droite.' },
  { name: 'bj-notice--info', description: 'Accent gauche information (bleu).' },
  { name: 'bj-notice--warning', description: 'Accent avertissement.' },
  { name: 'bj-notice--alert', description: 'Accent critique (erreur / urgence).' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Bandeau
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Bandeau horizontal pour annonces globales (maintenance, lien
    d’urgence, cookie). Plus compact que l’alerte encadrée ; s’intègre
    souvent sous l’en-tête.
  </p>

  <DocsSection id="exemple-notice" title="Exemple">
    <DocsPreview style="padding: 0">
      <div class="bj-notice" role="status">
        <span class="bj-notice__icon" aria-hidden="true"
          ><i class="ri-megaphone-line bj-icon"></i
        ></span>
        <div class="bj-notice__body">
          Le guichet physique est fermé le vendredi après-midi.
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemple" />
  </DocsSection>

  <DocsSection id="variantes-notice" title="Variantes">
    <DocsPreview
      style="
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0;
      "
    >
      <div class="bj-notice bj-notice--info" role="status">
        <span class="bj-notice__icon" aria-hidden="true"
          ><i class="ri-information-line bj-icon bj-icon--info"></i
        ></span>
        <div class="bj-notice__body">
          <span class="bj-notice__title">Info - </span>Nouvelle
          version du portail disponible.
        </div>
      </div>
      <div class="bj-notice bj-notice--warning" role="status">
        <span class="bj-notice__icon" aria-hidden="true"
          ><i class="ri-alert-line bj-icon bj-icon--warning"></i
        ></span>
        <div class="bj-notice__body">
          Délai de réponse allongé pendant les travaux.
        </div>
      </div>
      <div class="bj-notice bj-notice--alert" role="alert">
        <span class="bj-notice__icon" aria-hidden="true"
          ><i class="ri-error-warning-line bj-icon bj-icon--error"></i
        ></span>
        <div class="bj-notice__body">
          Interruption programmée ce soir de 22h à 2h.
        </div>
        <button
          type="button"
          class="bj-notice__close"
          aria-label="Fermer le bandeau"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeVariantes" />
  </DocsSection>

  <DocsSection id="classes-notice" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-notice" title="Accessibilité">
    <DocsA11yNote>
      Pour un message non critique et statique,
      <code>role="status"</code> convient. Pour une urgence
      immédiate, <code>role="alert"</code> peut être approprié. Le
      bouton « fermer » exige un libellé explicite ; si le bandeau
      disparaît, évitez de piéger le focus.
    </DocsA11yNote>
  </DocsSection>
</template>
