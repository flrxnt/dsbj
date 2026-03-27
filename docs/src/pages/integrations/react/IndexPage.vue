<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCard from '@docs/components/DocsCard.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'React',
      desc: 'Composants React pour le DSBJ : hooks pour l’état, forwardRef pour le focus et props entièrement typées. Importez depuis le sous-chemin React du package.',
      'section-base': 'Base',
      'section-form': 'Formulaires',
      'section-content': 'Contenu',
      'section-interactive': 'Interactifs',
      'section-nav': 'Navigation',
      'section-dashboard': 'Dashboard',
    },
    en: {
      title: 'React',
      desc: 'React components for DSBJ: hooks for state, forwardRef for focus, and fully typed props. Import from the React subpath of the package.',
      'section-base': 'Base',
      'section-form': 'Forms',
      'section-content': 'Content',
      'section-interactive': 'Interactive',
      'section-nav': 'Navigation',
      'section-dashboard': 'Dashboard',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <h2 class="bj-h3" style="margin-top: var(--bj-spacing-8v)">{{ t('section-base') }}</h2>
  <div class="docs-cards">
    <DocsCard to="/integrations/react/button" icon="ri-cursor-line" title="Button" description="Bouton avec variantes, tailles et mode icône." />
    <DocsCard to="/integrations/react/link" icon="ri-link" title="Link" description="Lien stylé avec icônes optionnelles." />
    <DocsCard to="/integrations/react/badge" icon="ri-notification-badge-line" title="Badge" description="Badge avec variantes sémantiques." />
    <DocsCard to="/integrations/react/tag" icon="ri-price-tag-3-line" title="Tag" description="Tag avec suppression et variantes." />
    <DocsCard to="/integrations/react/avatar" icon="ri-user-line" title="Avatar" description="Avatar avec image, initiales ou icône." />
  </div>

  <h2 class="bj-h3" style="margin-top: var(--bj-spacing-8v)">{{ t('section-form') }}</h2>
  <div class="docs-cards">
    <DocsCard to="/integrations/react/input" icon="ri-input-field" title="Input" description="Champ contrôlé avec états de validation." />
    <DocsCard to="/integrations/react/select" icon="ri-list-check" title="Select" description="Liste déroulante accessible." />
    <DocsCard to="/integrations/react/checkbox" icon="ri-checkbox-line" title="Checkbox" description="Case à cocher." />
    <DocsCard to="/integrations/react/radio" icon="ri-radio-button-line" title="Radio" description="Bouton radio." />
    <DocsCard to="/integrations/react/toggle" icon="ri-toggle-line" title="Toggle" description="Interrupteur." />
    <DocsCard to="/integrations/react/datepicker" icon="ri-calendar-line" title="DatePicker" description="Sélecteur de date." />
    <DocsCard to="/integrations/react/upload" icon="ri-upload-2-line" title="Upload" description="Zone de téléversement." />
    <DocsCard to="/integrations/react/search" icon="ri-search-line" title="Search" description="Barre de recherche." />
  </div>

  <h2 class="bj-h3" style="margin-top: var(--bj-spacing-8v)">{{ t('section-content') }}</h2>
  <div class="docs-cards">
    <DocsCard to="/integrations/react/alert" icon="ri-alarm-warning-line" title="Alert" description="Alerte avec variantes et fermeture." />
    <DocsCard to="/integrations/react/card" icon="ri-layout-2-line" title="Card" description="Carte composable (image, corps, pied)." />
    <DocsCard to="/integrations/react/callout" icon="ri-megaphone-line" title="Callout" description="Mise en avant." />
    <DocsCard to="/integrations/react/quote" icon="ri-double-quotes-l" title="Quote" description="Citation avec auteur." />
    <DocsCard to="/integrations/react/highlight" icon="ri-mark-pen-line" title="Highlight" description="Mise en exergue." />
    <DocsCard to="/integrations/react/notice" icon="ri-information-line" title="Notice" description="Bandeau d’information." />
    <DocsCard to="/integrations/react/tile" icon="ri-grid-line" title="Tile" description="Tuile de navigation." />
    <DocsCard to="/integrations/react/table" icon="ri-table-line" title="Table" description="Tableau de données." />
  </div>

  <h2 class="bj-h3" style="margin-top: var(--bj-spacing-8v)">{{ t('section-interactive') }}</h2>
  <div class="docs-cards">
    <DocsCard to="/integrations/react/accordion" icon="ri-layout-row-line" title="Accordion" description="Accordéon avec mode exclusif." />
    <DocsCard to="/integrations/react/modal" icon="ri-window-line" title="Modal" description="Modale contrôlée (open + onClose)." />
    <DocsCard to="/integrations/react/tab" icon="ri-folder-line" title="Tabs" description="Onglets avec navigation clavier." />
    <DocsCard to="/integrations/react/dropdown" icon="ri-arrow-down-s-line" title="Dropdown" description="Menu déroulant." />
    <DocsCard to="/integrations/react/toast" icon="ri-notification-3-line" title="Toast" description="Notifications toast." />
    <DocsCard to="/integrations/react/tooltip" icon="ri-chat-1-line" title="Tooltip" description="Infobulle." />
    <DocsCard to="/integrations/react/gallery" icon="ri-gallery-line" title="Gallery" description="Galerie avec lightbox." />
    <DocsCard to="/integrations/react/marquee" icon="ri-text-wrap" title="Marquee" description="Bandeau défilant." />
    <DocsCard to="/integrations/react/treeview" icon="ri-node-tree" title="TreeView" description="Arborescence interactive." />
    <DocsCard to="/integrations/react/consent" icon="ri-shield-check-line" title="Consent" description="Bannière cookies et préférences." />
  </div>

  <h2 class="bj-h3" style="margin-top: var(--bj-spacing-8v)">{{ t('section-nav') }}</h2>
  <div class="docs-cards">
    <DocsCard to="/integrations/react/header" icon="ri-layout-top-line" title="Header" description="En-tête institutionnel." />
    <DocsCard to="/integrations/react/footer" icon="ri-layout-bottom-line" title="Footer" description="Pied de page." />
    <DocsCard to="/integrations/react/breadcrumb" icon="ri-arrow-right-s-line" title="Breadcrumb" description="Fil d’Ariane." />
    <DocsCard to="/integrations/react/pagination" icon="ri-more-line" title="Pagination" description="Pagination contrôlée." />
    <DocsCard to="/integrations/react/stepper" icon="ri-list-ordered" title="Stepper" description="Indicateur d’étapes." />
    <DocsCard to="/integrations/react/banner" icon="ri-image-line" title="Banner" description="Bannière hero." />
    <DocsCard to="/integrations/react/logo" icon="ri-government-line" title="Logo" description="Logo institutionnel." />
    <DocsCard to="/integrations/react/navigation" icon="ri-compass-3-line" title="Navigation" description="Liste de navigation principale." />
    <DocsCard to="/integrations/react/sidemenu" icon="ri-menu-unfold-line" title="Sidemenu" description="Menu latéral." />
    <DocsCard to="/integrations/react/skiplink" icon="ri-skip-forward-line" title="Skiplink" description="Liens d'évitement." />
    <DocsCard to="/integrations/react/summary" icon="ri-list-unordered" title="Summary" description="Sommaire avec ancres." />
    <DocsCard to="/integrations/react/content" icon="ri-article-line" title="Content" description="Contenu éditorial." />
  </div>

  <h2 class="bj-h3" style="margin-top: var(--bj-spacing-8v)">{{ t('section-dashboard') }}</h2>
  <div class="docs-cards">
    <DocsCard to="/integrations/react/dashboard-sidebar" icon="ri-layout-left-line" title="DashboardSidebar" description="Barre latérale de navigation dashboard." />
    <DocsCard to="/integrations/react/chart-bar" icon="ri-bar-chart-2-line" title="ChartBar" description="Graphique en barres." />
    <DocsCard to="/integrations/react/chart-line" icon="ri-line-chart-line" title="ChartLine" description="Graphique en lignes." />
    <DocsCard to="/integrations/react/chart-pie" icon="ri-pie-chart-2-line" title="ChartPie" description="Graphique camembert / donut." />
  </div>
</template>
