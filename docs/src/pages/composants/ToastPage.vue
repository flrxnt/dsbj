<script setup lang="ts">
import DocsA11yNote from "@docs/components/DocsA11yNote.vue";
import DocsCode from "@docs/components/DocsCode.vue";
import DocsPreview from "@docs/components/DocsPreview.vue";
import DocsPropsTable from "@docs/components/DocsPropsTable.vue";
import DocsSection from "@docs/components/DocsSection.vue";

const codeDeclarative = `<button data-bj-toast-trigger
        data-bj-toast-type="success"
        data-bj-toast-title="Succès"
        data-bj-toast-text="Opération terminée.">
  Valider
</button>`;

const codeProgrammatic = `import { toast } from '@flrxnt/dsbj';

toast({
  title: 'Succès',
  text: 'Le dossier a été soumis.',
  type: 'success',
  duration: 5000,
  position: 'top-right',
});`;

const propsRows = [
  {
    name: "bj-toast-container",
    description: "Conteneur fixe empilant les toasts.",
  },
  { name: "bj-toast", description: "Notification individuelle." },
  {
    name: "bj-toast--info/success/warning/error",
    description: "Variante sémantique.",
  },
  { name: "bj-toast__progress", description: "Barre de progression du délai." },
  {
    name: "bj-toast-container--top-left",
    description: "Position coin supérieur gauche.",
  },
  {
    name: "bj-toast-container--bottom-right",
    description: "Position coin inférieur droit.",
  },
];
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Notification toast
  </h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">
    Messages éphémères pour confirmer une action ou signaler un événement.
    Disparaissent automatiquement après quelques secondes. API programmatique
    via <code>toast()</code> ou déclencheurs déclaratifs.
  </p>

  <DocsSection id="sec-demo" title="Démonstration">
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

  <DocsSection id="sec-usage-html" title="Usage déclaratif">
    <DocsCode :code="codeDeclarative" />
  </DocsSection>

  <DocsSection id="sec-usage-js" title="Usage programmatique">
    <DocsCode :code="codeProgrammatic" />
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilite" title="Accessibilité">
    <DocsA11yNote>
      Le conteneur utilise <code>aria-live="polite"</code> et
      <code>role="status"</code>. Chaque toast a <code>role="alert"</code>. Le
      bouton de fermeture est accessible au clavier.
    </DocsA11yNote>
  </DocsSection>
</template>
