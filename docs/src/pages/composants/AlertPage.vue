<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const codeExemples = `<div class="bj-alert bj-alert--info">
  <div class="bj-alert__body">
    <p class="bj-alert__title">Information</p>
    <p class="bj-alert__text">Votre demande a bien été prise en compte.</p>
  </div>
</div>
<div class="bj-alert bj-alert--success">
  <div class="bj-alert__body">
    <p class="bj-alert__title">Succès</p>
    <p class="bj-alert__text">Votre dossier a été enregistré avec succès.</p>
  </div>
</div>
<div class="bj-alert bj-alert--warning">
  <div class="bj-alert__body">
    <p class="bj-alert__title">Attention</p>
    <p class="bj-alert__text">Certaines pièces jointes ne sont pas au format attendu.</p>
  </div>
</div>
<div class="bj-alert bj-alert--error">
  <div class="bj-alert__body">
    <p class="bj-alert__title">Erreur</p>
    <p class="bj-alert__text">La soumission a échoué. Réessayez ultérieurement.</p>
  </div>
</div>`

const codeClose = `<div class="bj-alert bj-alert--info">
  <div class="bj-alert__body">
    <p class="bj-alert__title">Titre de l'alerte</p>
    <p class="bj-alert__text">Description détaillée.</p>
  </div>
  <button class="bj-alert__close" aria-label="Fermer"><i class="ri-close-line"></i></button>
</div>`

const codeSm = `<div class="bj-alert bj-alert--info bj-alert--sm">
  <div class="bj-alert__body">
    <p class="bj-alert__title">Rappel</p>
    <p class="bj-alert__text">Les guichets ferment à 17 h 00 les jours ouvrés.</p>
  </div>
</div>`

const propsRows = [
  { name: 'bj-alert', description: 'Conteneur de l’alerte (structure de base).' },
  { name: 'bj-alert__body', description: 'Zone titre + texte.' },
  { name: 'bj-alert__title', description: 'Titre du message.' },
  { name: 'bj-alert__text', description: 'Corps du message.' },
  { name: 'bj-alert__close', description: 'Bouton de fermeture aligné à droite.' },
  {
    name: 'bj-alert--info',
    description: 'Style information (par défaut si aucun modificateur).',
  },
  {
    name: 'bj-alert--success / bj-alert--warning / bj-alert--error',
    description: 'Couleurs sémantiques.',
  },
  { name: 'bj-alert--sm', description: 'Variante compacte.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Alerte
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Message structuré dans le flux de la page : titre, texte et
    modificateurs sémantiques (information, succès, attention,
    erreur). Ajoutez un bouton de fermeture ou la variante compacte
    selon le contexte.
  </p>

  <DocsSection id="sec-exemples-alert" title="Exemples">
    <DocsPreview
      style="
        display: flex;
        flex-direction: column;
        gap: var(--bj-spacing-4v);
      "
    >
      <div class="bj-alert bj-alert--info">
        <div class="bj-alert__body">
          <p class="bj-alert__title">Information</p>
          <p class="bj-alert__text">
            Votre demande a bien été prise en compte.
          </p>
        </div>
      </div>
      <div class="bj-alert bj-alert--success">
        <div class="bj-alert__body">
          <p class="bj-alert__title">Succès</p>
          <p class="bj-alert__text">
            Votre dossier a été enregistré avec succès.
          </p>
        </div>
      </div>
      <div class="bj-alert bj-alert--warning">
        <div class="bj-alert__body">
          <p class="bj-alert__title">Attention</p>
          <p class="bj-alert__text">
            Certaines pièces jointes ne sont pas au format attendu.
          </p>
        </div>
      </div>
      <div class="bj-alert bj-alert--error">
        <div class="bj-alert__body">
          <p class="bj-alert__title">Erreur</p>
          <p class="bj-alert__text">
            La soumission a échoué. Réessayez ultérieurement.
          </p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExemples" />
  </DocsSection>

  <DocsSection id="sec-alert-close" title="Alerte avec bouton de fermeture">
    <DocsPreview>
      <div class="bj-alert bj-alert--info">
        <div class="bj-alert__body">
          <p class="bj-alert__title">Titre de l'alerte</p>
          <p class="bj-alert__text">Description détaillée.</p>
        </div>
        <button
          type="button"
          class="bj-alert__close"
          aria-label="Fermer"
        >
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </div>
    </DocsPreview>
    <DocsCode :code="codeClose" />
  </DocsSection>

  <DocsSection id="sec-alert-sm" title="Alerte compacte">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      La classe <code>bj-alert--sm</code> réduit le padding et les
      tailles de texte pour les encarts ou colonnes étroites.
    </p>
    <DocsPreview>
      <div class="bj-alert bj-alert--info bj-alert--sm">
        <div class="bj-alert__body">
          <p class="bj-alert__title">Rappel</p>
          <p class="bj-alert__text">
            Les guichets ferment à 17 h 00 les jours ouvrés.
          </p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSm" />
  </DocsSection>

  <DocsSection id="classes-alert" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-alert" title="Accessibilité">
    <DocsA11yNote>
      Pour les messages importants ou injectés dynamiquement,
      utilisez <code>role="alert"</code> afin que les technologies
      d’assistance les annoncent sans délai. Pour une alerte
      statique dans le flux, <code>role="region"</code> avec
      <code>aria-labelledby</code> sur le titre permet de nommer la
      zone. Le bouton de fermeture doit porter un
      <code>aria-label</code> explicite ; après fermeture, gérez le
      focus en JavaScript pour éviter de le perdre.
    </DocsA11yNote>
  </DocsSection>
</template>
