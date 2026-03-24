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
      'section-classes-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-container': 'Conteneur fixe empilant les toasts.',
      'prop-toast': 'Notification individuelle.',
      'prop-variant': 'Variante sémantique.',
      'prop-progress': 'Barre de progression du délai.',
      'prop-pos-tl': 'Position coin supérieur gauche.',
      'prop-pos-br': 'Position coin inférieur droit.',
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
      'section-classes-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-container': 'Fixed container stacking toasts.',
      'prop-toast': 'Individual notification.',
      'prop-variant': 'Semantic variant.',
      'prop-progress': 'Timeout progress bar.',
      'prop-pos-tl': 'Top-left position.',
      'prop-pos-br': 'Bottom-right position.',
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

const propsRows = computed(() => [
  {
    name: 'bj-toast-container',
    description: t('prop-container'),
  },
  { name: 'bj-toast', description: t('prop-toast') },
  {
    name: 'bj-toast--info/success/warning/error',
    description: t('prop-variant'),
  },
  { name: 'bj-toast__progress', description: t('prop-progress') },
  {
    name: 'bj-toast-container--top-left',
    description: t('prop-pos-tl'),
  },
  {
    name: 'bj-toast-container--bottom-right',
    description: t('prop-pos-br'),
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

  <DocsSection id="sec-usage-html" :title="t('section-declarative')">
    <DocsCode :code="codeDeclarative" />
  </DocsSection>

  <DocsSection id="sec-usage-js" :title="t('section-programmatic')">
    <DocsCode :code="codeProgrammatic" />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
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
