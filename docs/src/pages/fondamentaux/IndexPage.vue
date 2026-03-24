<script setup lang="ts">
import DocsCard from '@docs/components/DocsCard.vue'
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Fondamentaux
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 42rem; color: var(--bj-text-alt)"
  >
    Les fondamentaux du DSBJ définissent les couleurs, la typographie, la
    grille, l’espacement, les icônes et les règles d’usage pour construire
    des interfaces publiques cohérentes, sobres et accessibles au service
    des citoyens.
  </p>

  <div class="docs-cards">
    <DocsCard
      to="/fondamentaux/principes"
      icon="ri-shield-check-line"
      title="Principes"
      description="Accessibilité, cohérence, sobriété et adaptation responsive."
    />
    <DocsCard
      to="/fondamentaux/couleurs-palette"
      icon="ri-palette-line"
      title="Couleurs - Palette"
      description="Couleurs institutionnelles, étendues, fonctionnelles et neutres."
    />
    <DocsCard
      to="/fondamentaux/couleurs-utilisation"
      icon="ri-contrast-2-line"
      title="Couleurs - Utilisation"
      description="Jetons sémantiques pour texte, fonds, bordures et actions."
    />
    <DocsCard
      to="/fondamentaux/typographie"
      icon="ri-font-size"
      title="Typographie"
      description="Échelles, graisses, interlignes et classes d’affichage."
    />
    <DocsCard
      to="/fondamentaux/espacement"
      icon="ri-space"
      title="Espacement"
      description="Unité de base 4&nbsp;px, jetons et classes de marge et padding."
    />
    <DocsCard
      to="/fondamentaux/grille"
      icon="ri-layout-grid-line"
      title="Grille"
      description="Conteneur, 12 colonnes, gouttières et points de rupture."
    />
    <DocsCard
      to="/fondamentaux/icones"
      icon="ri-remixicon-line"
      title="Icônes"
      description="Remix Icon, tailles et variantes de couleur."
    />
    <DocsCard
      to="/fondamentaux/ombres-elevation"
      icon="ri-shadow-line"
      title="Ombres et élévation"
      description="Ombres, rayons, durées et courbes d’animation."
    />
    <DocsCard
      to="/fondamentaux/medias"
      icon="ri-image-line"
      title="Médias"
      description="Images et vidéos responsives, ratios d’aspect."
    />
    <DocsCard
      to="/fondamentaux/classes-utilitaires"
      icon="ri-braces-line"
      title="Classes utilitaires"
      description="Affichage, flexbox, texte, couleurs et visibilité."
    />
  </div>
</template>
