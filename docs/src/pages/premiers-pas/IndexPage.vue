<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    {{ t('desc') }}
  </p>

  <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-3v)">
    {{ t('continue-reading') }}
  </h2>
  <div class="docs-cards">
    <DocsCard
      to="/premiers-pas/installation"
      icon="ri-download-line"
      :title="t('card-install-title')"
      :description="t('card-install-desc')"
    />
    <DocsCard
      to="/premiers-pas/utilisation"
      icon="ri-book-open-line"
      :title="t('card-usage-title')"
      :description="t('card-usage-desc')"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCard from '@docs/components/DocsCard.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Premiers pas',
      desc:
        'Cette section présente les modalités d’intégration du Design Système du Bénin (DSBJ) dans vos projets numériques. Elle oriente les équipes des administrations et des portails de service vers une mise en œuvre conforme aux standards de l’État : installation des ressources, structure minimale des pages et bonnes pratiques d’utilisation des composants.',
      'continue-reading': 'Poursuivre la lecture',
      'card-install-title': 'Installation',
      'card-install-desc':
        'Paquet npm, réseau de distribution CDN et fichiers compilés du dossier dist.',
      'card-usage-title': 'Utilisation',
      'card-usage-desc':
        'Modèle de page, préfixe CSS, thèmes, initialisation JavaScript et personnalisation.',
    },
    en: {
      title: 'Getting started',
      desc:
        'This section explains how to integrate the Benin Design System (DSBJ) into your digital projects. It guides teams in public administrations and service portals toward implementation aligned with State standards: installing assets, minimal page structure, and sound practices for using components.',
      'continue-reading': 'Continue reading',
      'card-install-title': 'Installation',
      'card-install-desc':
        'npm package, CDN distribution network, and compiled files from the dist folder.',
      'card-usage-title': 'Usage',
      'card-usage-desc':
        'Page template, CSS prefix, themes, JavaScript initialization, and customization.',
    },
  },
})
</script>
