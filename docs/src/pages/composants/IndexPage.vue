<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DocsCard from '@docs/components/DocsCard.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Composants',
      desc:
        'Bibliothèque de 41 composants HTML/CSS du Design Système du Bénin : navigation, formulaires, contenu, éléments interactifs et blocs réglementaires. Chaque fiche détaille les variantes, les classes et les bonnes pratiques d’accessibilité.',
      'sec-nav': 'Navigation',
      'sec-base': 'Base',
      'sec-form': 'Formulaires',
      'sec-content': 'Contenu',
      'sec-interactive': 'Interactifs',
      'sec-legal': 'Réglementaire',
      'card-header-title': 'Header',
      'card-header-desc':
        'En-tête institutionnel avec marque, service et menu principal.',
      'card-footer-title': 'Footer',
      'card-footer-desc': 'Pied de page avec liens et mentions légales.',
      'card-navigation-title': 'Navigation',
      'card-navigation-desc': 'Menus et listes de liens de navigation.',
      'card-breadcrumb-title': 'Breadcrumb',
      'card-breadcrumb-desc':
        'Fil d’Ariane pour situer la page dans l’arborescence.',
      'card-sidemenu-title': 'Sidemenu',
      'card-sidemenu-desc':
        'Menu latéral pour sous-sections et pages liées.',
      'card-skiplink-title': 'Skiplink',
      'card-skiplink-desc': 'Lien d’évitement vers le contenu principal.',
      'card-pagination-title': 'Pagination',
      'card-pagination-desc': 'Parcours de listes paginées.',
      'card-summary-title': 'Sommaire',
      'card-summary-desc': 'Sommaire de page ou d’article avec ancres.',
      'card-logo-title': 'Logo',
      'card-logo-desc':
        'Signature République du Bénin avec bande tricolore.',
      'card-button-title': 'Bouton',
      'card-button-desc':
        'Actions primaires, secondaires et tertiaires.',
      'card-link-title': 'Lien',
      'card-link-desc': 'Liens de texte, tailles et liens externes.',
      'card-badge-title': 'Badge',
      'card-badge-desc': 'Pastilles de statut et d’étiquette courte.',
      'card-tag-title': 'Tag',
      'card-tag-desc':
        'Étiquettes cliquables, filtres et listes de tags.',
      'card-input-title': 'Champ de saisie',
      'card-input-desc': 'Champs texte, zones et états de validation.',
      'card-select-title': 'Liste déroulante',
      'card-select-desc': 'Sélecteur natif stylé.',
      'card-checkbox-title': 'Case à cocher',
      'card-checkbox-desc':
        'Choix multiples et cases indéterminées.',
      'card-radio-title': 'Bouton radio',
      'card-radio-desc': 'Choix exclusif dans un groupe.',
      'card-toggle-title': 'Interrupteur',
      'card-toggle-desc': 'Activation binaire on/off.',
      'card-upload-title': 'Téléversement',
      'card-upload-desc': 'Envoi de fichiers et pièces jointes.',
      'card-search-title': 'Recherche',
      'card-search-desc': 'Champ et bouton de recherche.',
      'card-datepicker-title': 'Sélecteur de date',
      'card-datepicker-desc':
        'Calendrier intégré au format jj/mm/aaaa.',
      'card-alert-title': 'Alerte',
      'card-alert-desc':
        'Messages contextuels dans le flux de page.',
      'card-notice-title': 'Bandeau',
      'card-notice-desc':
        'Annonces en tête de page ou de section.',
      'card-callout-title': 'Mise en avant',
      'card-callout-desc':
        'Bloc d’information ou d’appel à l’action.',
      'card-highlight-title': 'Mise en exergue',
      'card-highlight-desc': 'Paragraphe ou extrait mis en valeur.',
      'card-quote-title': 'Citation',
      'card-quote-desc': 'Citation avec auteur et source.',
      'card-card-title': 'Carte',
      'card-card-desc': 'Cartes média, liens et grilles de cartes.',
      'card-tile-title': 'Tuile',
      'card-tile-desc': 'Accès rapide avec icône ou image.',
      'card-table-title': 'Tableau',
      'card-table-desc': 'Tableaux de données accessibles.',
      'card-content-title': 'Contenu éditorial',
      'card-content-desc':
        'Typographie et blocs pour articles et pages.',
      'card-banner-title': 'Bannière',
      'card-banner-desc':
        'Section hero avec image de fond, titre et appel à l\'action.',
      'card-accordion-title': 'Accordéon',
      'card-accordion-desc': 'Sections repliables.',
      'card-tab-title': 'Onglet',
      'card-tab-desc': 'Panneaux accessibles par onglets.',
      'card-modal-title': 'Modale',
      'card-modal-desc': 'Fenêtres dialog et focus piégé.',
      'card-tooltip-title': 'Infobulle',
      'card-tooltip-desc':
        'Aide contextuelle au survol ou au focus.',
      'card-stepper-title': 'Indicateur d’étapes',
      'card-stepper-desc':
        'Parcours multi-étapes et formulaires.',
      'card-toast-title': 'Notification toast',
      'card-toast-desc':
        'Messages éphémères de confirmation ou d\'alerte.',
      'card-dropdown-title': 'Menu déroulant',
      'card-dropdown-desc':
        'Menu contextuel d\'actions déclenché par un bouton.',
      'card-marquee-title': 'Bandeau défilant',
      'card-marquee-desc':
        'Annonces en défilement continu avec pause.',
      'card-gallery-title': 'Galerie d\'images',
      'card-gallery-desc':
        'Grille d\'images avec visionneuse plein écran.',
      'card-chat-bubble-title': 'Bulle de chat',
      'card-chat-bubble-desc': 'Bulle de message pour conversations.',
      'card-drawer-title': 'Tiroir',
      'card-drawer-desc': 'Panneau latéral glissant depuis le bord de l\'écran.',
      'card-consent-title': 'Consentement',
      'card-consent-desc':
        'Bandeau cookies et choix utilisateur.',
      'sec-dashboard': 'Dashboard',
      'card-dashboard-sidebar-title': 'Dashboard Sidebar',
      'card-dashboard-sidebar-desc':
        'Barre latérale de navigation pour tableaux de bord.',
      'card-chart-title': 'Charts',
      'card-chart-desc':
        'Graphiques barres, lignes et camemberts en SVG natif.',
    },
    en: {
      title: 'Components',
      desc:
        'A library of 41 HTML/CSS components from the Benin Design System: navigation, forms, content, interactive patterns and regulatory blocks. Each page covers variants, classes and accessibility guidance.',
      'sec-nav': 'Navigation',
      'sec-base': 'Foundations',
      'sec-form': 'Forms',
      'sec-content': 'Content',
      'sec-interactive': 'Interactive',
      'sec-legal': 'Regulatory',
      'card-header-title': 'Header',
      'card-header-desc':
        'Institutional header with brand, service and main menu.',
      'card-footer-title': 'Footer',
      'card-footer-desc': 'Footer with links and legal notices.',
      'card-navigation-title': 'Navigation',
      'card-navigation-desc': 'Menus and navigation link lists.',
      'card-breadcrumb-title': 'Breadcrumb',
      'card-breadcrumb-desc':
        'Breadcrumb trail to show the page in the site hierarchy.',
      'card-sidemenu-title': 'Sidemenu',
      'card-sidemenu-desc':
        'Side menu for subsections and related pages.',
      'card-skiplink-title': 'Skiplink',
      'card-skiplink-desc': 'Skip link to main content.',
      'card-pagination-title': 'Pagination',
      'card-pagination-desc': 'Paging through lists.',
      'card-summary-title': 'Summary',
      'card-summary-desc': 'In-page or article summary with anchors.',
      'card-logo-title': 'Logo',
      'card-logo-desc':
        'Republic of Benin signature with tricolor band.',
      'card-button-title': 'Button',
      'card-button-desc': 'Primary, secondary and tertiary actions.',
      'card-link-title': 'Link',
      'card-link-desc': 'Text links, sizes and external links.',
      'card-badge-title': 'Badge',
      'card-badge-desc': 'Status and short label chips.',
      'card-tag-title': 'Tag',
      'card-tag-desc': 'Clickable tags, filters and tag lists.',
      'card-input-title': 'Input',
      'card-input-desc': 'Text fields, text areas and validation states.',
      'card-select-title': 'Select',
      'card-select-desc': 'Styled native select.',
      'card-checkbox-title': 'Checkbox',
      'card-checkbox-desc': 'Multiple choice and indeterminate states.',
      'card-radio-title': 'Radio',
      'card-radio-desc': 'Exclusive choice within a group.',
      'card-toggle-title': 'Toggle',
      'card-toggle-desc': 'Binary on/off control.',
      'card-upload-title': 'Upload',
      'card-upload-desc': 'File upload and attachments.',
      'card-search-title': 'Search',
      'card-search-desc': 'Search field and button.',
      'card-datepicker-title': 'Date picker',
      'card-datepicker-desc': 'Embedded calendar in dd/mm/yyyy style.',
      'card-alert-title': 'Alert',
      'card-alert-desc': 'Contextual messages in the page flow.',
      'card-notice-title': 'Notice',
      'card-notice-desc': 'Announcements at page or section top.',
      'card-callout-title': 'Callout',
      'card-callout-desc': 'Information or call-to-action block.',
      'card-highlight-title': 'Highlight',
      'card-highlight-desc': 'Emphasized paragraph or excerpt.',
      'card-quote-title': 'Quote',
      'card-quote-desc': 'Quote with author and source.',
      'card-card-title': 'Card',
      'card-card-desc': 'Media cards, links and card grids.',
      'card-tile-title': 'Tile',
      'card-tile-desc': 'Quick access with icon or image.',
      'card-table-title': 'Table',
      'card-table-desc': 'Accessible data tables.',
      'card-content-title': 'Editorial content',
      'card-content-desc': 'Typography and blocks for articles and pages.',
      'card-banner-title': 'Banner',
      'card-banner-desc':
        'Hero section with background image, title and call to action.',
      'card-accordion-title': 'Accordion',
      'card-accordion-desc': 'Collapsible sections.',
      'card-tab-title': 'Tabs',
      'card-tab-desc': 'Tabbed, accessible panels.',
      'card-modal-title': 'Modal',
      'card-modal-desc': 'Dialog windows and focus trap.',
      'card-tooltip-title': 'Tooltip',
      'card-tooltip-desc': 'Contextual help on hover or focus.',
      'card-stepper-title': 'Stepper',
      'card-stepper-desc': 'Multi-step flows and forms.',
      'card-toast-title': 'Toast',
      'card-toast-desc': 'Transient confirmation or alert messages.',
      'card-dropdown-title': 'Dropdown',
      'card-dropdown-desc':
        'Contextual action menu opened from a button.',
      'card-marquee-title': 'Marquee',
      'card-marquee-desc': 'Scrolling announcements with pause.',
      'card-gallery-title': 'Image gallery',
      'card-gallery-desc': 'Image grid with fullscreen viewer.',
      'card-chat-bubble-title': 'Chat Bubble',
      'card-chat-bubble-desc': 'Message bubble for conversations.',
      'card-drawer-title': 'Drawer',
      'card-drawer-desc': 'Sliding side panel from the screen edge.',
      'card-consent-title': 'Consent',
      'card-consent-desc': 'Cookie banner and user choices.',
      'sec-dashboard': 'Dashboard',
      'card-dashboard-sidebar-title': 'Dashboard Sidebar',
      'card-dashboard-sidebar-desc':
        'Sidebar navigation for dashboards.',
      'card-chart-title': 'Charts',
      'card-chart-desc':
        'Bar, line and pie charts in native SVG.',
    },
  },
})
</script>

<template>
  <h1
    class="bj-h1"
    style="
      margin-top: var(--bj-spacing-4v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="
      max-width: 44rem;
      color: var(--bj-text-alt);
      margin-bottom: var(--bj-spacing-2v);
    "
  >
    {{ t('desc') }}
  </p>

  <h2
    class="bj-h3"
    style="
      margin-top: var(--bj-spacing-8v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    {{ t('sec-nav') }}
  </h2>
  <div class="docs-cards">
    <DocsCard
      to="/composants/header"
      icon="ri-layout-top-line"
      :title="t('card-header-title')"
      :description="t('card-header-desc')"
    />
    <DocsCard
      to="/composants/footer"
      icon="ri-layout-bottom-line"
      :title="t('card-footer-title')"
      :description="t('card-footer-desc')"
    />
    <DocsCard
      to="/composants/navigation"
      icon="ri-menu-line"
      :title="t('card-navigation-title')"
      :description="t('card-navigation-desc')"
    />
    <DocsCard
      to="/composants/breadcrumb"
      icon="ri-git-branch-line"
      :title="t('card-breadcrumb-title')"
      :description="t('card-breadcrumb-desc')"
    />
    <DocsCard
      to="/composants/sidemenu"
      icon="ri-side-bar-line"
      :title="t('card-sidemenu-title')"
      :description="t('card-sidemenu-desc')"
    />
    <DocsCard
      to="/composants/skiplink"
      icon="ri-skip-forward-line"
      :title="t('card-skiplink-title')"
      :description="t('card-skiplink-desc')"
    />
    <DocsCard
      to="/composants/pagination"
      icon="ri-pages-line"
      :title="t('card-pagination-title')"
      :description="t('card-pagination-desc')"
    />
    <DocsCard
      to="/composants/summary"
      icon="ri-list-unordered"
      :title="t('card-summary-title')"
      :description="t('card-summary-desc')"
    />
  </div>

  <h2
    class="bj-h3"
    style="
      margin-top: var(--bj-spacing-8v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    {{ t('sec-base') }}
  </h2>
  <div class="docs-cards">
    <RouterLink to="/composants/logo" class="docs-card">
      <div class="docs-card__preview">
        <div class="bj-logo bj-logo--lg">
          <p>République<br />du Bénin</p>
        </div>
      </div>
      <div class="docs-card__body">
        <div class="docs-card__title">{{ t('card-logo-title') }}</div>
        <div class="docs-card__desc">
          {{ t('card-logo-desc') }}
        </div>
      </div>
      <div class="docs-card__arrow">
        <i class="ri-arrow-right-line"></i>
      </div>
    </RouterLink>
    <RouterLink to="/composants/button" class="docs-card">
      <div class="docs-card__preview">
        <span class="bj-btn bj-btn--sm">Bouton</span>
      </div>
      <div class="docs-card__body">
        <div class="docs-card__title">{{ t('card-button-title') }}</div>
        <div class="docs-card__desc">
          {{ t('card-button-desc') }}
        </div>
      </div>
      <div class="docs-card__arrow">
        <i class="ri-arrow-right-line"></i>
      </div>
    </RouterLink>
    <RouterLink to="/composants/link" class="docs-card">
      <div class="docs-card__preview">
        <span class="bj-link">Lien</span>
      </div>
      <div class="docs-card__body">
        <div class="docs-card__title">{{ t('card-link-title') }}</div>
        <div class="docs-card__desc">
          {{ t('card-link-desc') }}
        </div>
      </div>
      <div class="docs-card__arrow">
        <i class="ri-arrow-right-line"></i>
      </div>
    </RouterLink>
    <RouterLink to="/composants/badge" class="docs-card">
      <div class="docs-card__preview">
        <span class="bj-badge bj-badge--new">Nouveau</span>
      </div>
      <div class="docs-card__body">
        <div class="docs-card__title">{{ t('card-badge-title') }}</div>
        <div class="docs-card__desc">
          {{ t('card-badge-desc') }}
        </div>
      </div>
      <div class="docs-card__arrow">
        <i class="ri-arrow-right-line"></i>
      </div>
    </RouterLink>
    <RouterLink to="/composants/tag" class="docs-card">
      <div class="docs-card__preview">
        <span class="bj-tag bj-tag--action">Tag</span>
      </div>
      <div class="docs-card__body">
        <div class="docs-card__title">{{ t('card-tag-title') }}</div>
        <div class="docs-card__desc">
          {{ t('card-tag-desc') }}
        </div>
      </div>
      <div class="docs-card__arrow">
        <i class="ri-arrow-right-line"></i>
      </div>
    </RouterLink>
  </div>

  <h2
    class="bj-h3"
    style="
      margin-top: var(--bj-spacing-8v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    {{ t('sec-form') }}
  </h2>
  <div class="docs-cards">
    <DocsCard
      to="/composants/input"
      icon="ri-input-method-line"
      :title="t('card-input-title')"
      :description="t('card-input-desc')"
    />
    <DocsCard
      to="/composants/select"
      icon="ri-list-check-2"
      :title="t('card-select-title')"
      :description="t('card-select-desc')"
    />
    <DocsCard
      to="/composants/checkbox"
      icon="ri-checkbox-line"
      :title="t('card-checkbox-title')"
      :description="t('card-checkbox-desc')"
    />
    <DocsCard
      to="/composants/radio"
      icon="ri-radio-button-line"
      :title="t('card-radio-title')"
      :description="t('card-radio-desc')"
    />
    <DocsCard
      to="/composants/toggle"
      icon="ri-toggle-line"
      :title="t('card-toggle-title')"
      :description="t('card-toggle-desc')"
    />
    <DocsCard
      to="/composants/upload"
      icon="ri-upload-cloud-line"
      :title="t('card-upload-title')"
      :description="t('card-upload-desc')"
    />
    <DocsCard
      to="/composants/search"
      icon="ri-search-line"
      :title="t('card-search-title')"
      :description="t('card-search-desc')"
    />
    <DocsCard
      to="/composants/datepicker"
      icon="ri-calendar-line"
      :title="t('card-datepicker-title')"
      :description="t('card-datepicker-desc')"
    />
  </div>

  <h2
    class="bj-h3"
    style="
      margin-top: var(--bj-spacing-8v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    {{ t('sec-content') }}
  </h2>
  <div class="docs-cards">
    <DocsCard
      to="/composants/alert"
      icon="ri-alarm-warning-line"
      :title="t('card-alert-title')"
      :description="t('card-alert-desc')"
    />
    <DocsCard
      to="/composants/notice"
      icon="ri-notification-3-line"
      :title="t('card-notice-title')"
      :description="t('card-notice-desc')"
    />
    <DocsCard
      to="/composants/callout"
      icon="ri-megaphone-line"
      :title="t('card-callout-title')"
      :description="t('card-callout-desc')"
    />
    <DocsCard
      to="/composants/highlight"
      icon="ri-double-quotes-l"
      :title="t('card-highlight-title')"
      :description="t('card-highlight-desc')"
    />
    <DocsCard
      to="/composants/quote"
      icon="ri-chat-quote-line"
      :title="t('card-quote-title')"
      :description="t('card-quote-desc')"
    />
    <DocsCard
      to="/composants/card"
      icon="ri-layout-4-line"
      :title="t('card-card-title')"
      :description="t('card-card-desc')"
    />
    <DocsCard
      to="/composants/tile"
      icon="ri-apps-2-line"
      :title="t('card-tile-title')"
      :description="t('card-tile-desc')"
    />
    <DocsCard
      to="/composants/table"
      icon="ri-table-line"
      :title="t('card-table-title')"
      :description="t('card-table-desc')"
    />
    <DocsCard
      to="/composants/content"
      icon="ri-article-line"
      :title="t('card-content-title')"
      :description="t('card-content-desc')"
    />
    <DocsCard
      to="/composants/banner"
      icon="ri-slideshow-line"
      :title="t('card-banner-title')"
      :description="t('card-banner-desc')"
    />
  </div>

  <h2
    class="bj-h3"
    style="
      margin-top: var(--bj-spacing-8v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    {{ t('sec-interactive') }}
  </h2>
  <div class="docs-cards">
    <DocsCard
      to="/composants/accordion"
      icon="ri-arrow-down-s-line"
      :title="t('card-accordion-title')"
      :description="t('card-accordion-desc')"
    />
    <DocsCard
      to="/composants/tab"
      icon="ri-layout-column-line"
      :title="t('card-tab-title')"
      :description="t('card-tab-desc')"
    />
    <DocsCard
      to="/composants/modal"
      icon="ri-window-line"
      :title="t('card-modal-title')"
      :description="t('card-modal-desc')"
    />
    <DocsCard
      to="/composants/tooltip"
      icon="ri-chat-1-line"
      :title="t('card-tooltip-title')"
      :description="t('card-tooltip-desc')"
    />
    <DocsCard
      to="/composants/stepper"
      icon="ri-footprint-line"
      :title="t('card-stepper-title')"
      :description="t('card-stepper-desc')"
    />
    <DocsCard
      to="/composants/toast"
      icon="ri-notification-4-line"
      :title="t('card-toast-title')"
      :description="t('card-toast-desc')"
    />
    <DocsCard
      to="/composants/dropdown"
      icon="ri-arrow-down-s-fill"
      :title="t('card-dropdown-title')"
      :description="t('card-dropdown-desc')"
    />
    <DocsCard
      to="/composants/marquee"
      icon="ri-text-direction-l"
      :title="t('card-marquee-title')"
      :description="t('card-marquee-desc')"
    />
    <DocsCard
      to="/composants/gallery"
      icon="ri-image-2-line"
      :title="t('card-gallery-title')"
      :description="t('card-gallery-desc')"
    />
    <DocsCard
      to="/composants/chat-bubble"
      icon="ri-chat-1-line"
      :title="t('card-chat-bubble-title')"
      :description="t('card-chat-bubble-desc')"
    />
    <DocsCard
      to="/composants/drawer"
      icon="ri-side-bar-line"
      :title="t('card-drawer-title')"
      :description="t('card-drawer-desc')"
    />
  </div>

  <h2
    class="bj-h3"
    style="
      margin-top: var(--bj-spacing-8v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    {{ t('sec-legal') }}
  </h2>
  <div class="docs-cards">
    <DocsCard
      to="/composants/consent"
      icon="ri-shield-check-line"
      :title="t('card-consent-title')"
      :description="t('card-consent-desc')"
    />
  </div>

  <h2
    class="bj-h3"
    style="
      margin-top: var(--bj-spacing-8v);
      margin-bottom: var(--bj-spacing-3v);
    "
  >
    {{ t('sec-dashboard') }}
  </h2>
  <div class="docs-cards">
    <DocsCard
      to="/composants/dashboard-sidebar"
      icon="ri-layout-left-line"
      :title="t('card-dashboard-sidebar-title')"
      :description="t('card-dashboard-sidebar-desc')"
    />
    <DocsCard
      to="/composants/chart"
      icon="ri-bar-chart-2-line"
      :title="t('card-chart-title')"
      :description="t('card-chart-desc')"
    />
  </div>
</template>
