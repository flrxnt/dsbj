<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Alerte',
      desc: 'Message structuré dans le flux de la page : titre, texte et modificateurs sémantiques (information, succès, attention, erreur). Ajoutez un bouton de fermeture ou la variante compacte selon le contexte.',
      'section-examples': 'Exemples',
      'section-close': 'Alerte avec bouton de fermeture',
      'section-sm': 'Alerte compacte',
      'para-sm':
        'La classe <code>bj-alert--sm</code> réduit le padding et les tailles de texte pour les encarts ou colonnes étroites.',
      'section-classes': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'a11y-note':
        'Pour les messages importants ou injectés dynamiquement, utilisez <code>role="alert"</code> afin que les technologies d’assistance les annoncent sans délai. Pour une alerte statique dans le flux, <code>role="region"</code> avec <code>aria-labelledby</code> sur le titre permet de nommer la zone. Le bouton de fermeture doit porter un <code>aria-label</code> explicite ; après fermeture, gérez le focus en JavaScript pour éviter de le perdre.',
      'prop-bj-alert': 'Conteneur de l’alerte (structure de base).',
      'prop-bj-alert-body': 'Zone titre + texte.',
      'prop-bj-alert-title': 'Titre du message.',
      'prop-bj-alert-text': 'Corps du message.',
      'prop-bj-alert-close': 'Bouton de fermeture aligné à droite.',
      'prop-bj-alert-info': 'Style information (par défaut si aucun modificateur).',
      'prop-bj-alert-semantic': 'Couleurs sémantiques.',
      'prop-bj-alert-sm': 'Variante compacte.',
    },
    en: {
      title: 'Alert',
      desc: 'Structured message in the page flow: title, text, and semantic modifiers (info, success, warning, error). Add a close button or the compact variant depending on context.',
      'section-examples': 'Examples',
      'section-close': 'Alert with close button',
      'section-sm': 'Compact alert',
      'para-sm':
        'The <code>bj-alert--sm</code> class reduces padding and text sizes for sidebars or narrow columns.',
      'section-classes': 'CSS classes',
      'section-a11y': 'Accessibility',
      'a11y-note':
        'For important or dynamically injected messages, use <code>role="alert"</code> so assistive technologies announce them immediately. For a static in-flow alert, <code>role="region"</code> with <code>aria-labelledby</code> on the title names the region. The close button needs an explicit <code>aria-label</code>; after closing, manage focus in JavaScript so it is not lost.',
      'prop-bj-alert': 'Alert container (base structure).',
      'prop-bj-alert-body': 'Title + text area.',
      'prop-bj-alert-title': 'Message title.',
      'prop-bj-alert-text': 'Message body.',
      'prop-bj-alert-close': 'Close button aligned to the right.',
      'prop-bj-alert-info': 'Information style (default when no modifier is set).',
      'prop-bj-alert-semantic': 'Semantic colours.',
      'prop-bj-alert-sm': 'Compact variant.',
    },
  },
})

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

const propsRows = computed(() => [
  { name: 'bj-alert', description: t('prop-bj-alert') },
  { name: 'bj-alert__body', description: t('prop-bj-alert-body') },
  { name: 'bj-alert__title', description: t('prop-bj-alert-title') },
  { name: 'bj-alert__text', description: t('prop-bj-alert-text') },
  { name: 'bj-alert__close', description: t('prop-bj-alert-close') },
  {
    name: 'bj-alert--info',
    description: t('prop-bj-alert-info'),
  },
  {
    name: 'bj-alert--success / bj-alert--warning / bj-alert--error',
    description: t('prop-bj-alert-semantic'),
  },
  { name: 'bj-alert--sm', description: t('prop-bj-alert-sm') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="sec-exemples-alert" :title="t('section-examples')">
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

  <DocsSection id="sec-alert-close" :title="t('section-close')">
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

  <DocsSection id="sec-alert-sm" :title="t('section-sm')">
    <p
      class="bj-text-md"
      style="max-width: 44rem; color: var(--bj-text-alt)"
    >
      <span v-html="t('para-sm')" />
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

  <DocsSection id="classes-alert" :title="t('section-classes')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-alert" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
