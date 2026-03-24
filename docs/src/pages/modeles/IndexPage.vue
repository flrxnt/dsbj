<script setup lang="ts">
import DocsCard from '@docs/components/DocsCard.vue'
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Modèles de pages
  </h1>
  <p
    class="bj-text-lg"
    style="margin-bottom: var(--bj-spacing-6v); max-width: 44rem"
  >
    Les modèles ci-dessous proposent des structures types pour les sites et
    portails des administrations publiques de la République du Bénin. Ils
    s’appuient sur les composants du DSBJ afin d’assurer une présentation
    cohérente, accessible et conforme à l’identité de l’État : page d’accueil
    institutionnelle, page de contenu ou d’actualité, et page de démarche ou
    formulaire en ligne.
  </p>

  <div class="docs-cards">
    <DocsCard
      to="/modeles/page-accueil"
      icon="ri-home-4-line"
      title="Page d’accueil"
      description="Bande tricolore, en-tête, hero, actualités en cartes, accès rapides, mise en avant et pied de page."
    />
    <DocsCard
      to="/modeles/page-article"
      icon="ri-article-line"
      title="Page article"
      description="Fil d’Ariane, contenu éditorial structuré, sommaire et menu latéral des pages liées."
    />
    <DocsCard
      to="/modeles/page-formulaire"
      icon="ri-file-list-3-line"
      title="Page formulaire"
      description="Indicateur d’étapes, champs variés, pièces jointes et actions de validation pour les démarches."
    />
  </div>
</template>
