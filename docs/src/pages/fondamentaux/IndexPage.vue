<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCard from '@docs/components/DocsCard.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Fondamentaux',
      desc:
        'Les fondamentaux du DSBJ définissent les couleurs, la typographie, la grille, l’espacement, les icônes et les règles d’usage pour construire des interfaces publiques cohérentes, sobres et accessibles au service des citoyens.',
      'card-principes-title': 'Principes',
      'card-principes-desc':
        'Accessibilité, cohérence, sobriété et adaptation responsive.',
      'card-couleurs-palette-title': 'Couleurs - Palette',
      'card-couleurs-palette-desc':
        'Couleurs institutionnelles, étendues, fonctionnelles et neutres.',
      'card-couleurs-utilisation-title': 'Couleurs - Utilisation',
      'card-couleurs-utilisation-desc':
        'Jetons sémantiques pour texte, fonds, bordures et actions.',
      'card-typographie-title': 'Typographie',
      'card-typographie-desc':
        'Échelles, graisses, interlignes et classes d’affichage.',
      'card-espacement-title': 'Espacement',
      'card-espacement-desc':
        'Unité de base 4&nbsp;px, jetons et classes de marge et padding.',
      'card-grille-title': 'Grille',
      'card-grille-desc':
        'Conteneur, 12 colonnes, gouttières et points de rupture.',
      'card-icones-title': 'Icônes',
      'card-icones-desc': 'Remix Icon, tailles et variantes de couleur.',
      'card-ombres-title': 'Ombres et élévation',
      'card-ombres-desc':
        'Ombres, rayons, durées et courbes d’animation.',
      'card-medias-title': 'Médias',
      'card-medias-desc':
        'Images et vidéos responsives, ratios d’aspect.',
      'card-classes-title': 'Classes utilitaires',
      'card-classes-desc':
        'Affichage, flexbox, texte, couleurs et visibilité.',
    },
    en: {
      title: 'Foundations',
      desc:
        'DSBJ foundations define colors, typography, grid, spacing, icons and usage rules to build coherent, restrained, accessible public interfaces for citizens.',
      'card-principes-title': 'Principles',
      'card-principes-desc':
        'Accessibility, consistency, restraint and responsive design.',
      'card-couleurs-palette-title': 'Colors - Palette',
      'card-couleurs-palette-desc':
        'Institutional, extended, functional and neutral colors.',
      'card-couleurs-utilisation-title': 'Colors - Usage',
      'card-couleurs-utilisation-desc':
        'Semantic tokens for text, backgrounds, borders and actions.',
      'card-typographie-title': 'Typography',
      'card-typographie-desc':
        'Scales, weights, line heights and display classes.',
      'card-espacement-title': 'Spacing',
      'card-espacement-desc':
        '4&nbsp;px base unit, tokens and margin/padding utilities.',
      'card-grille-title': 'Grid',
      'card-grille-desc':
        'Container, 12 columns, gutters and breakpoints.',
      'card-icones-title': 'Icons',
      'card-icones-desc': 'Remix Icon, sizes and color variants.',
      'card-ombres-title': 'Shadows and elevation',
      'card-ombres-desc':
        'Shadows, radii, durations and animation curves.',
      'card-medias-title': 'Media',
      'card-medias-desc':
        'Responsive images and videos, aspect ratios.',
      'card-classes-title': 'Utility classes',
      'card-classes-desc':
        'Layout, flexbox, text, colors and visibility.',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 42rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <div class="docs-cards">
    <DocsCard
      to="/fondamentaux/principes"
      icon="ri-shield-check-line"
      :title="t('card-principes-title')"
      :description="t('card-principes-desc')"
    />
    <DocsCard
      to="/fondamentaux/couleurs-palette"
      icon="ri-palette-line"
      :title="t('card-couleurs-palette-title')"
      :description="t('card-couleurs-palette-desc')"
    />
    <DocsCard
      to="/fondamentaux/couleurs-utilisation"
      icon="ri-contrast-2-line"
      :title="t('card-couleurs-utilisation-title')"
      :description="t('card-couleurs-utilisation-desc')"
    />
    <DocsCard
      to="/fondamentaux/typographie"
      icon="ri-font-size"
      :title="t('card-typographie-title')"
      :description="t('card-typographie-desc')"
    />
    <DocsCard
      to="/fondamentaux/espacement"
      icon="ri-space"
      :title="t('card-espacement-title')"
      :description="t('card-espacement-desc')"
    />
    <DocsCard
      to="/fondamentaux/grille"
      icon="ri-layout-grid-line"
      :title="t('card-grille-title')"
      :description="t('card-grille-desc')"
    />
    <DocsCard
      to="/fondamentaux/icones"
      icon="ri-remixicon-line"
      :title="t('card-icones-title')"
      :description="t('card-icones-desc')"
    />
    <DocsCard
      to="/fondamentaux/ombres-elevation"
      icon="ri-shadow-line"
      :title="t('card-ombres-title')"
      :description="t('card-ombres-desc')"
    />
    <DocsCard
      to="/fondamentaux/medias"
      icon="ri-image-line"
      :title="t('card-medias-title')"
      :description="t('card-medias-desc')"
    />
    <DocsCard
      to="/fondamentaux/classes-utilitaires"
      icon="ri-braces-line"
      :title="t('card-classes-title')"
      :description="t('card-classes-desc')"
    />
  </div>
</template>
