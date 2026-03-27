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
      title: 'Notification toast',
      'desc-before':
        'Messages éphémères pour confirmer une action ou signaler un événement. Disparaissent automatiquement après quelques secondes. API programmatique via ',
      'desc-after': ' ou déclencheurs déclaratifs.',
      'section-demo': 'Démonstration',
      'section-declarative': 'Usage déclaratif',
      'section-programmatic': 'Usage programmatique',
      'section-structure': 'Structure HTML (aperçu)',
      'structure-intro':
        'Pour la démo, le conteneur est forcé en position relative ; en production il reste fixe dans un coin de la fenêtre.',
      'section-positions': 'Positions du conteneur',
      'positions-intro':
        'Par défaut : coin supérieur droit. Modificateurs pour les trois autres coins :',
      'section-positions-preview': 'Aperçu des quatre coins',
      'positions-preview-intro':
        'Chaque vignette force le conteneur en',
      'positions-preview-intro-2':
        'pour l’aperçu ; en production le conteneur reste',
      'section-matrix': 'Positions × variantes',
      'matrix-intro':
        'Exemple statique : un type sémantique par coin pour illustrer',
      'matrix-intro-2':
        'avec',
      'matrix-intro-3':
        'sur le toast.',
      'section-classes-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'th-class-attr': 'Classe',
      'th-description': 'Description',
      'prop-container': 'Conteneur fixe empilant les toasts.',
      'prop-toast': 'Notification individuelle.',
      'prop-variant': 'Variante sémantique.',
      'prop-removing': 'Classe transitoire pendant la fermeture animée.',
      'prop-icon': 'Zone icône (décorative, aria-hidden sur l’icône).',
      'prop-body': 'Bloc texte (titre + message).',
      'prop-title': 'Titre optionnel.',
      'prop-text': 'Corps du message.',
      'prop-close': 'Bouton fermer.',
      'prop-progress': 'Barre de progression du délai.',
      'prop-pos-tl': 'Position coin supérieur gauche.',
      'prop-pos-br': 'Position coin inférieur droit.',
      'prop-pos-bl': 'Position coin inférieur gauche.',
      'a11y-1': 'Le conteneur utilise',
      'a11y-2': 'et',
      'a11y-3': '. Chaque toast a',
      'a11y-4':
        '. Le bouton de fermeture est accessible au clavier.',
    },
    en: {
      title: 'Toast notification',
      'desc-before':
        'Short-lived messages to confirm an action or report an event. They dismiss automatically after a few seconds. Use the programmatic ',
      'desc-after': ' API or declarative triggers.',
      'section-demo': 'Demo',
      'section-declarative': 'Declarative usage',
      'section-programmatic': 'Programmatic usage',
      'section-structure': 'HTML structure (preview)',
      'structure-intro':
        'For the demo the container uses relative positioning; in production it stays fixed in a viewport corner.',
      'section-positions': 'Container positions',
      'positions-intro': 'Default: top-right. Modifiers for the other three corners:',
      'section-positions-preview': 'Four-corner preview',
      'positions-preview-intro': 'Each tile forces the container to',
      'positions-preview-intro-2': 'for the preview; in production it stays',
      'section-matrix': 'Positions × variants',
      'matrix-intro': 'Static sample: one semantic type per corner showing',
      'matrix-intro-2': 'with',
      'matrix-intro-3': 'on the toast.',
      'section-classes-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'th-class-attr': 'Class',
      'th-description': 'Description',
      'prop-container': 'Fixed container stacking toasts.',
      'prop-toast': 'Individual notification.',
      'prop-variant': 'Semantic variant.',
      'prop-removing': 'Transient class while the exit animation runs.',
      'prop-icon': 'Icon slot (decorative; keep aria-hidden on the icon).',
      'prop-body': 'Text block (title + message).',
      'prop-title': 'Optional title line.',
      'prop-text': 'Message body.',
      'prop-close': 'Dismiss button.',
      'prop-progress': 'Timeout progress bar.',
      'prop-pos-tl': 'Top-left position.',
      'prop-pos-br': 'Bottom-right position.',
      'prop-pos-bl': 'Bottom-left position.',
      'a11y-1': 'The container uses',
      'a11y-2': 'and',
      'a11y-3': '. Each toast has',
      'a11y-4': '. The close button is keyboard accessible.',
    },
  },
})

const codeDeclarative = `<button data-bj-toast-trigger
        data-bj-toast-type="success"
        data-bj-toast-title="Succès"
        data-bj-toast-text="Opération terminée.">
  Valider
</button>`

const codeProgrammatic = `import { toast } from '@flrxnt/dsbj';

toast({
  title: 'Succès',
  text: 'Le dossier a été soumis.',
  type: 'success',
  duration: 5000,
  position: 'top-right',
});`

const codeToastMarkup = `<div class="bj-toast-container" aria-live="polite" role="status">
  <div class="bj-toast bj-toast--success" role="alert">
    <span class="bj-toast__icon" aria-hidden="true"><i class="ri-check-line"></i></span>
    <div class="bj-toast__body">
      <p class="bj-toast__title">Succès</p>
      <p class="bj-toast__text">Action enregistrée.</p>
    </div>
    <button type="button" class="bj-toast__close" aria-label="Fermer">…</button>
  </div>
</div>`

const codePositions = `<!-- défaut : haut-droite -->
<div class="bj-toast-container">…</div>
<div class="bj-toast-container bj-toast-container--top-left">…</div>
<div class="bj-toast-container bj-toast-container--bottom-right">…</div>
<div class="bj-toast-container bj-toast-container--bottom-left">…</div>`

const toastPreviewBox = {
  position: 'relative' as const,
  minHeight: '7rem',
  padding: 'var(--bj-spacing-2v)',
  background: 'var(--bj-bg-alt)',
  borderRadius: 'var(--bj-radius-sm)',
}

const toastContainerRel = {
  position: 'relative' as const,
  top: 'auto',
  right: 'auto',
  left: 'auto',
  bottom: 'auto',
  width: '100%',
  maxWidth: '18rem',
  pointerEvents: 'auto' as const,
}

const codeMatrix = `<!-- Matrice démo : combiner conteneur + variante -->
<div class="bj-toast-container bj-toast-container--top-left" aria-live="polite" role="status">
  <div class="bj-toast bj-toast--info" role="alert">…</div>
</div>
<div class="bj-toast-container" aria-live="polite" role="status">
  <div class="bj-toast bj-toast--success" role="alert">…</div>
</div>
<div class="bj-toast-container bj-toast-container--bottom-left" aria-live="polite" role="status">
  <div class="bj-toast bj-toast--warning" role="alert">…</div>
</div>
<div class="bj-toast-container bj-toast-container--bottom-right" aria-live="polite" role="status">
  <div class="bj-toast bj-toast--error" role="alert">…</div>
</div>`

const propsTableHeaders = computed((): [string, string] => [
  t('th-class-attr'),
  t('th-description'),
])

const propsRows = computed(() => [
  {
    name: 'bj-toast-container',
    description: t('prop-container'),
  },
  { name: 'bj-toast', description: t('prop-toast') },
  {
    name: 'bj-toast--info / success / warning / error',
    description: t('prop-variant'),
  },
  { name: 'bj-toast--removing', description: t('prop-removing') },
  { name: 'bj-toast__icon', description: t('prop-icon') },
  { name: 'bj-toast__body', description: t('prop-body') },
  { name: 'bj-toast__title', description: t('prop-title') },
  { name: 'bj-toast__text', description: t('prop-text') },
  { name: 'bj-toast__close', description: t('prop-close') },
  { name: 'bj-toast__progress', description: t('prop-progress') },
  {
    name: 'bj-toast-container--top-left',
    description: t('prop-pos-tl'),
  },
  {
    name: 'bj-toast-container--bottom-right',
    description: t('prop-pos-br'),
  },
  {
    name: 'bj-toast-container--bottom-left',
    description: t('prop-pos-bl'),
  },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    {{ t('desc-before') }}<code>toast()</code>{{ t('desc-after') }}
  </p>

  <DocsSection id="sec-demo" :title="t('section-demo')">
    <DocsPreview
      style="display: flex; gap: var(--bj-spacing-2v); flex-wrap: wrap"
    >
      <button
        class="bj-btn bj-btn--sm"
        type="button"
        data-bj-toast-trigger
        data-bj-toast-type="info"
        data-bj-toast-title="Information"
        data-bj-toast-text="Votre dossier a été enregistré."
      >
        Info
      </button>
      <button
        class="bj-btn bj-btn--sm"
        type="button"
        data-bj-toast-trigger
        data-bj-toast-type="success"
        data-bj-toast-title="Succès"
        data-bj-toast-text="Le document a été validé avec succès."
      >
        Succès
      </button>
      <button
        class="bj-btn bj-btn--sm"
        type="button"
        data-bj-toast-trigger
        data-bj-toast-type="warning"
        data-bj-toast-title="Attention"
        data-bj-toast-text="Votre session expire dans 5 minutes."
      >
        Alerte
      </button>
      <button
        class="bj-btn bj-btn--sm"
        type="button"
        data-bj-toast-trigger
        data-bj-toast-type="error"
        data-bj-toast-title="Erreur"
        data-bj-toast-text="Impossible de soumettre le formulaire."
      >
        Erreur
      </button>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="sec-structure" :title="t('section-structure')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('structure-intro') }}
    </p>
    <DocsPreview>
      <div
        style="
          position: relative;
          min-height: 8rem;
          padding: var(--bj-spacing-2v);
          background: var(--bj-bg-alt);
          border-radius: var(--bj-radius-sm);
        "
      >
        <div
          class="bj-toast-container"
          aria-live="polite"
          role="status"
          style="
            position: relative !important;
            top: auto !important;
            right: auto !important;
            left: auto !important;
            bottom: auto !important;
            width: 100%;
            max-width: 22rem;
            pointer-events: auto;
          "
        >
          <div class="bj-toast bj-toast--info" role="alert">
            <span class="bj-toast__icon" aria-hidden="true">
              <i class="ri-information-line"></i>
            </span>
            <div class="bj-toast__body">
              <p class="bj-toast__title">Information</p>
              <p class="bj-toast__text">Exemple de structure HTML.</p>
            </div>
            <button
              type="button"
              class="bj-toast__close"
              aria-label="Fermer"
            >
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </div>
          <div class="bj-toast bj-toast--warning" role="alert">
            <span class="bj-toast__icon" aria-hidden="true">
              <i class="ri-alert-line"></i>
            </span>
            <div class="bj-toast__body">
              <p class="bj-toast__text">Toast sans titre (avertissement).</p>
            </div>
            <button
              type="button"
              class="bj-toast__close"
              aria-label="Fermer"
            >
              <i class="ri-close-line" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeToastMarkup" />
  </DocsSection>

  <DocsSection id="sec-positions" :title="t('section-positions')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('positions-intro') }}
    </p>
    <DocsCode :code="codePositions" />
  </DocsSection>

  <DocsSection id="sec-positions-preview" :title="t('section-positions-preview')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('positions-preview-intro') }}
      <code>position: relative</code>
      {{ t('positions-preview-intro-2') }}
      <code>position: fixed</code>.
    </p>
    <DocsPreview>
      <div
        style="
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--bj-spacing-3v);
        "
      >
        <div :style="toastPreviewBox">
          <div
            class="bj-toast-container bj-toast-container--top-left"
            aria-live="polite"
            role="status"
            :style="toastContainerRel"
          >
            <div class="bj-toast bj-toast--info" role="alert">
              <span class="bj-toast__icon" aria-hidden="true">
                <i class="ri-information-line"></i>
              </span>
              <div class="bj-toast__body">
                <p class="bj-toast__title">Haut-gauche</p>
                <p class="bj-toast__text">Info</p>
              </div>
              <button
                type="button"
                class="bj-toast__close"
                aria-label="Fermer"
              >
                <i class="ri-close-line" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div :style="toastPreviewBox">
          <div
            class="bj-toast-container"
            aria-live="polite"
            role="status"
            :style="toastContainerRel"
          >
            <div class="bj-toast bj-toast--success" role="alert">
              <span class="bj-toast__icon" aria-hidden="true">
                <i class="ri-check-line"></i>
              </span>
              <div class="bj-toast__body">
                <p class="bj-toast__title">Haut-droite</p>
                <p class="bj-toast__text">Succès (défaut)</p>
              </div>
              <button
                type="button"
                class="bj-toast__close"
                aria-label="Fermer"
              >
                <i class="ri-close-line" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div :style="toastPreviewBox">
          <div
            class="bj-toast-container bj-toast-container--bottom-left"
            aria-live="polite"
            role="status"
            :style="toastContainerRel"
          >
            <div class="bj-toast bj-toast--warning" role="alert">
              <span class="bj-toast__icon" aria-hidden="true">
                <i class="ri-alert-line"></i>
              </span>
              <div class="bj-toast__body">
                <p class="bj-toast__title">Bas-gauche</p>
                <p class="bj-toast__text">Attention</p>
              </div>
              <button
                type="button"
                class="bj-toast__close"
                aria-label="Fermer"
              >
                <i class="ri-close-line" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div :style="toastPreviewBox">
          <div
            class="bj-toast-container bj-toast-container--bottom-right"
            aria-live="polite"
            role="status"
            :style="toastContainerRel"
          >
            <div class="bj-toast bj-toast--error" role="alert">
              <span class="bj-toast__icon" aria-hidden="true">
                <i class="ri-close-circle-line"></i>
              </span>
              <div class="bj-toast__body">
                <p class="bj-toast__title">Bas-droite</p>
                <p class="bj-toast__text">Erreur</p>
              </div>
              <button
                type="button"
                class="bj-toast__close"
                aria-label="Fermer"
              >
                <i class="ri-close-line" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codePositions" />
  </DocsSection>

  <DocsSection id="sec-matrix" :title="t('section-matrix')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('matrix-intro') }}
      <code>bj-toast-container--*</code>
      {{ t('matrix-intro-2') }}
      <code>bj-toast--info|success|warning|error</code>
      {{ t('matrix-intro-3') }}
    </p>
    <DocsPreview>
      <div
        style="
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--bj-spacing-3v);
        "
      >
        <div :style="toastPreviewBox">
          <div
            class="bj-toast-container bj-toast-container--top-left"
            aria-live="polite"
            role="status"
            :style="toastContainerRel"
          >
            <div class="bj-toast bj-toast--info" role="alert">
              <span class="bj-toast__icon" aria-hidden="true">
                <i class="ri-information-line"></i>
              </span>
              <div class="bj-toast__body">
                <p class="bj-toast__text">TL + info</p>
              </div>
              <button
                type="button"
                class="bj-toast__close"
                aria-label="Fermer"
              >
                <i class="ri-close-line" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div :style="toastPreviewBox">
          <div
            class="bj-toast-container"
            aria-live="polite"
            role="status"
            :style="toastContainerRel"
          >
            <div class="bj-toast bj-toast--success" role="alert">
              <span class="bj-toast__icon" aria-hidden="true">
                <i class="ri-check-line"></i>
              </span>
              <div class="bj-toast__body">
                <p class="bj-toast__text">TR + succès</p>
              </div>
              <button
                type="button"
                class="bj-toast__close"
                aria-label="Fermer"
              >
                <i class="ri-close-line" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div :style="toastPreviewBox">
          <div
            class="bj-toast-container bj-toast-container--bottom-left"
            aria-live="polite"
            role="status"
            :style="toastContainerRel"
          >
            <div class="bj-toast bj-toast--warning" role="alert">
              <span class="bj-toast__icon" aria-hidden="true">
                <i class="ri-alert-line"></i>
              </span>
              <div class="bj-toast__body">
                <p class="bj-toast__text">BL + avertissement</p>
              </div>
              <button
                type="button"
                class="bj-toast__close"
                aria-label="Fermer"
              >
                <i class="ri-close-line" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div :style="toastPreviewBox">
          <div
            class="bj-toast-container bj-toast-container--bottom-right"
            aria-live="polite"
            role="status"
            :style="toastContainerRel"
          >
            <div class="bj-toast bj-toast--error" role="alert">
              <span class="bj-toast__icon" aria-hidden="true">
                <i class="ri-close-circle-line"></i>
              </span>
              <div class="bj-toast__body">
                <p class="bj-toast__text">BR + erreur</p>
              </div>
              <button
                type="button"
                class="bj-toast__close"
                aria-label="Fermer"
              >
                <i class="ri-close-line" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMatrix" />
  </DocsSection>

  <DocsSection id="sec-usage-html" :title="t('section-declarative')">
    <DocsCode :code="codeDeclarative" />
  </DocsSection>

  <DocsSection id="sec-usage-js" :title="t('section-programmatic')">
    <DocsCode :code="codeProgrammatic" />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :headers="propsTableHeaders" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilite" :title="t('section-a11y')">
    <DocsA11yNote>
      {{ t('a11y-1') }}
      <code>aria-live="polite"</code>
      {{ t('a11y-2') }}
      <code>role="status"</code>
      {{ t('a11y-3') }}
      <code>role="alert"</code>
      {{ t('a11y-4') }}
    </DocsA11yNote>
  </DocsSection>
</template>
