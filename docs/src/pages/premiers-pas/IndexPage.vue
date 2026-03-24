<template>
  <h1 class="bj-h1" style="margin-bottom: var(--bj-spacing-4v)">
    Premiers pas
  </h1>
  <p
    class="bj-text-lg"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 40rem"
  >
    Cette section présente les modalités d’intégration du Design Système
    du Bénin (DSBJ) dans vos projets numériques. Elle oriente les
    équipes des administrations et des portails de service vers une mise
    en œuvre conforme aux standards de l’État : installation des
    ressources, structure minimale des pages et bonnes pratiques
    d’utilisation des composants.
  </p>

  <h2 class="bj-h3" style="margin-bottom: var(--bj-spacing-3v)">
    Poursuivre la lecture
  </h2>
  <div class="docs-cards">
    <DocsCard
      to="/premiers-pas/installation"
      icon="ri-download-line"
      title="Installation"
      description="Paquet npm, réseau de distribution CDN et fichiers compilés du dossier dist."
    />
    <DocsCard
      to="/premiers-pas/utilisation"
      icon="ri-book-open-line"
      title="Utilisation"
      description="Modèle de page, préfixe CSS, thèmes, initialisation JavaScript et personnalisation."
    />
  </div>
</template>

<script setup lang="ts">
import DocsCard from '@docs/components/DocsCard.vue'
</script>
