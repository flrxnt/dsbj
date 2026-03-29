<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCard from '@docs/components/DocsCard.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Vue 3',
      desc: 'Tous les composants DSBJ disponibles en tant que composants Vue 3 réactifs. Installez le package et importez uniquement ce dont vous avez besoin.',
      'section-base': 'Base',
      'section-form': 'Formulaires',
      'section-content': 'Contenu',
      'section-interactive': 'Interactifs',
      'section-nav': 'Navigation',
      'section-dashboard': 'Dashboard',
      'card-chat-bubble-title': 'BjChatBubble',
      'card-chat-bubble-desc': 'Bulle de message.',
    },
    en: {
      title: 'Vue 3',
      desc: 'All DSBJ components available as reactive Vue 3 components. Install the package and import only what you need.',
      'section-base': 'Base',
      'section-form': 'Forms',
      'section-content': 'Content',
      'section-interactive': 'Interactive',
      'section-nav': 'Navigation',
      'section-dashboard': 'Dashboard',
      'card-chat-bubble-title': 'BjChatBubble',
      'card-chat-bubble-desc': 'Chat bubble component.',
    },
  },
})
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <h2 class="bj-h3" style="margin-top: var(--bj-spacing-8v)">{{ t('section-base') }}</h2>
  <div class="docs-cards">
    <DocsCard to="/integrations/vue/button" icon="ri-cursor-line" title="BjButton" description="Bouton avec variantes, tailles et icônes." />
    <DocsCard to="/integrations/vue/link" icon="ri-link" title="BjLink" description="Lien stylé avec icônes optionnelles." />
    <DocsCard to="/integrations/vue/badge" icon="ri-notification-badge-line" title="BjBadge" description="Badge avec variantes sémantiques." />
    <DocsCard to="/integrations/vue/tag" icon="ri-price-tag-3-line" title="BjTag" description="Tag avec suppression et variantes." />
    <DocsCard to="/integrations/vue/avatar" icon="ri-user-line" title="BjAvatar" description="Avatar avec image, initiales ou icône." />
  </div>

  <h2 class="bj-h3" style="margin-top: var(--bj-spacing-8v)">{{ t('section-form') }}</h2>
  <div class="docs-cards">
    <DocsCard to="/integrations/vue/input" icon="ri-input-field" title="BjInput" description="Champ de saisie avec validation." />
    <DocsCard to="/integrations/vue/select" icon="ri-list-check" title="BjSelect" description="Liste déroulante." />
    <DocsCard to="/integrations/vue/checkbox" icon="ri-checkbox-line" title="BjCheckbox" description="Case à cocher." />
    <DocsCard to="/integrations/vue/radio" icon="ri-radio-button-line" title="BjRadio" description="Bouton radio." />
    <DocsCard to="/integrations/vue/toggle" icon="ri-toggle-line" title="BjToggle" description="Interrupteur." />
    <DocsCard to="/integrations/vue/datepicker" icon="ri-calendar-line" title="BjDatepicker" description="Sélecteur de date avec calendrier." />
    <DocsCard to="/integrations/vue/upload" icon="ri-upload-2-line" title="BjUpload" description="Zone de téléversement." />
    <DocsCard to="/integrations/vue/search" icon="ri-search-line" title="BjSearch" description="Barre de recherche." />
  </div>

  <h2 class="bj-h3" style="margin-top: var(--bj-spacing-8v)">{{ t('section-content') }}</h2>
  <div class="docs-cards">
    <DocsCard to="/integrations/vue/alert" icon="ri-alarm-warning-line" title="BjAlert" description="Alerte avec variantes et fermeture." />
    <DocsCard to="/integrations/vue/card" icon="ri-layout-2-line" title="BjCard" description="Carte avec image, corps et pied." />
    <DocsCard to="/integrations/vue/callout" icon="ri-megaphone-line" title="BjCallout" description="Mise en avant." />
    <DocsCard to="/integrations/vue/quote" icon="ri-double-quotes-l" title="BjQuote" description="Citation avec auteur." />
    <DocsCard to="/integrations/vue/highlight" icon="ri-mark-pen-line" title="BjHighlight" description="Mise en exergue." />
    <DocsCard to="/integrations/vue/notice" icon="ri-information-line" title="BjNotice" description="Bandeau d'information." />
    <DocsCard to="/integrations/vue/tile" icon="ri-grid-line" title="BjTile" description="Tuile de navigation." />
    <DocsCard to="/integrations/vue/table" icon="ri-table-line" title="BjTable" description="Tableau de données." />
    <DocsCard to="/integrations/vue/skeleton" icon="ri-loader-4-line" title="BjSkeleton" description="Placeholder de chargement." />
    <DocsCard to="/integrations/vue/content" icon="ri-article-line" title="BjContent" description="Contenu éditorial typographique." />
  </div>

  <h2 class="bj-h3" style="margin-top: var(--bj-spacing-8v)">{{ t('section-interactive') }}</h2>
  <div class="docs-cards">
    <DocsCard to="/integrations/vue/accordion" icon="ri-layout-row-line" title="BjAccordion" description="Accordéon avec ouverture exclusive." />
    <DocsCard to="/integrations/vue/modal" icon="ri-window-line" title="BjModal" description="Fenêtre modale avec v-model." />
    <DocsCard to="/integrations/vue/tab" icon="ri-folder-line" title="BjTab" description="Onglets avec navigation clavier." />
    <DocsCard to="/integrations/vue/dropdown" icon="ri-arrow-down-s-line" title="BjDropdown" description="Menu déroulant." />
    <DocsCard to="/integrations/vue/toast" icon="ri-notification-3-line" title="BjToast" description="Notifications toast." />
    <DocsCard to="/integrations/vue/tooltip" icon="ri-chat-1-line" title="BjTooltip" description="Infobulle au survol." />
    <DocsCard to="/integrations/vue/gallery" icon="ri-gallery-line" title="BjGallery" description="Galerie d'images avec lightbox." />
    <DocsCard to="/integrations/vue/marquee" icon="ri-text-wrap" title="BjMarquee" description="Bandeau défilant." />
    <DocsCard to="/integrations/vue/treeview" icon="ri-node-tree" title="BjTreeview" description="Arborescence interactive." />
    <DocsCard to="/integrations/vue/chat-bubble" icon="ri-chat-1-line" :title="t('card-chat-bubble-title')" :description="t('card-chat-bubble-desc')" />
    <DocsCard to="/integrations/vue/drawer" icon="ri-side-bar-line" title="BjDrawer" description="Tiroir latéral glissant." />
    <DocsCard to="/integrations/vue/consent" icon="ri-shield-check-line" title="BjConsent" description="Bannière et préférences cookies." />
  </div>

  <h2 class="bj-h3" style="margin-top: var(--bj-spacing-8v)">{{ t('section-nav') }}</h2>
  <div class="docs-cards">
    <DocsCard to="/integrations/vue/header" icon="ri-layout-top-line" title="BjHeader" description="En-tête institutionnel." />
    <DocsCard to="/integrations/vue/footer" icon="ri-layout-bottom-line" title="BjFooter" description="Pied de page." />
    <DocsCard to="/integrations/vue/breadcrumb" icon="ri-arrow-right-s-line" title="BjBreadcrumb" description="Fil d'Ariane." />
    <DocsCard to="/integrations/vue/pagination" icon="ri-more-line" title="BjPagination" description="Pagination avec v-model." />
    <DocsCard to="/integrations/vue/stepper" icon="ri-list-ordered" title="BjStepper" description="Indicateur d'étapes." />
    <DocsCard to="/integrations/vue/banner" icon="ri-image-line" title="BjBanner" description="Bannière hero." />
    <DocsCard to="/integrations/vue/logo" icon="ri-government-line" title="BjLogo" description="Logo institutionnel et tagline." />
    <DocsCard to="/integrations/vue/summary" icon="ri-list-unordered" title="BjSummary" description="Sommaire avec ancres." />
    <DocsCard to="/integrations/vue/sidemenu" icon="ri-menu-unfold-line" title="BjSidemenu" description="Menu latéral et sous-menus." />
    <DocsCard to="/integrations/vue/navigation" icon="ri-compass-3-line" title="BjNavigation" description="Liste de navigation principale." />
    <DocsCard to="/integrations/vue/skiplink" icon="ri-skip-forward-line" title="BjSkiplink" description="Liens d'évitement." />
  </div>

  <h2 class="bj-h3" style="margin-top: var(--bj-spacing-8v)">{{ t('section-dashboard') }}</h2>
  <div class="docs-cards">
    <DocsCard to="/integrations/vue/dashboard-sidebar" icon="ri-layout-left-line" title="BjDashboardSidebar" description="Barre latérale de navigation dashboard." />
    <DocsCard to="/integrations/vue/chart-bar" icon="ri-bar-chart-2-line" title="BjChartBar" description="Graphique en barres." />
    <DocsCard to="/integrations/vue/chart-line" icon="ri-line-chart-line" title="BjChartLine" description="Graphique en lignes." />
    <DocsCard to="/integrations/vue/chart-pie" icon="ri-pie-chart-2-line" title="BjChartPie" description="Graphique camembert / donut." />
  </div>
</template>
