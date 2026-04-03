export interface NavLink {
  label: string
  to: string
  i18nKey?: string
}

export interface SidebarGroup {
  title: string
  i18nKey?: string
  links: NavLink[]
}

export const mainNav: NavLink[] = [
  { label: 'Accueil', to: '/', i18nKey: 'nav.home' },
  { label: 'Premiers pas', to: '/premiers-pas', i18nKey: 'nav.getting-started' },
  { label: 'Fondamentaux', to: '/fondamentaux', i18nKey: 'nav.fundamentals' },
  { label: 'Composants', to: '/composants', i18nKey: 'nav.components' },
  { label: 'Intégrations', to: '/integrations', i18nKey: 'nav.integrations' },
  { label: 'Showcases', to: '/showcases', i18nKey: 'nav.showcases' },
  { label: 'Modèles', to: '/modeles', i18nKey: 'nav.templates' },
]

export const sidebars: Record<string, SidebarGroup[]> = {
  'premiers-pas': [
    {
      title: 'Premiers pas',
      i18nKey: 'nav.getting-started',
      links: [
        { label: 'Présentation', to: '/premiers-pas', i18nKey: 'link.presentation' },
        { label: 'Installation', to: '/premiers-pas/installation', i18nKey: 'link.installation' },
        { label: 'Utilisation', to: '/premiers-pas/utilisation', i18nKey: 'link.usage' },
        { label: 'Personnalisation', to: '/premiers-pas/personnalisation', i18nKey: 'link.customization' },
        { label: 'Utiliser avec l\'IA', to: '/premiers-pas/ia', i18nKey: 'link.ai' },
      ],
    },
  ],
  fondamentaux: [
    {
      title: 'Fondamentaux',
      i18nKey: 'nav.fundamentals',
      links: [
        { label: 'Principes', to: '/fondamentaux/principes', i18nKey: 'link.principles' },
        { label: 'Couleurs - Palette', to: '/fondamentaux/couleurs-palette', i18nKey: 'link.colors-palette' },
        { label: 'Couleurs - Utilisation', to: '/fondamentaux/couleurs-utilisation', i18nKey: 'link.colors-usage' },
        { label: 'Typographie', to: '/fondamentaux/typographie', i18nKey: 'link.typography' },
        { label: 'Espacement', to: '/fondamentaux/espacement', i18nKey: 'link.spacing' },
        { label: 'Grille', to: '/fondamentaux/grille', i18nKey: 'link.grid' },
        { label: 'Ombres et élévation', to: '/fondamentaux/ombres-elevation', i18nKey: 'link.shadows' },
        { label: 'Icônes', to: '/fondamentaux/icones', i18nKey: 'link.icons' },
        { label: 'Médias', to: '/fondamentaux/medias', i18nKey: 'link.media' },
        { label: 'Classes utilitaires', to: '/fondamentaux/classes-utilitaires', i18nKey: 'link.utility-classes' },
      ],
    },
  ],
  composants: [
    {
      title: 'Navigation',
      i18nKey: 'sidebar.navigation',
      links: [
        { label: 'Header', to: '/composants/header', i18nKey: 'link.header' },
        { label: 'Footer', to: '/composants/footer', i18nKey: 'link.footer' },
        { label: 'Navigation', to: '/composants/navigation', i18nKey: 'link.navigation' },
        { label: 'Breadcrumb', to: '/composants/breadcrumb', i18nKey: 'link.breadcrumb' },
        { label: 'Sidemenu', to: '/composants/sidemenu', i18nKey: 'link.sidemenu' },
        { label: 'Skiplink', to: '/composants/skiplink', i18nKey: 'link.skiplink' },
        { label: 'Pagination', to: '/composants/pagination', i18nKey: 'link.pagination' },
        { label: 'Sommaire', to: '/composants/summary', i18nKey: 'link.summary' },
      ],
    },
    {
      title: 'Base',
      i18nKey: 'sidebar.base',
      links: [
        { label: 'Logo', to: '/composants/logo', i18nKey: 'link.logo' },
        { label: 'Bouton', to: '/composants/button', i18nKey: 'link.button' },
        { label: 'Lien', to: '/composants/link', i18nKey: 'link.link' },
        { label: 'Badge', to: '/composants/badge', i18nKey: 'link.badge' },
        { label: 'Tag', to: '/composants/tag', i18nKey: 'link.tag' },
        { label: 'Avatar', to: '/composants/avatar', i18nKey: 'link.avatar' },
      ],
    },
    {
      title: 'Formulaires',
      i18nKey: 'sidebar.forms',
      links: [
        { label: 'Champ de saisie', to: '/composants/input', i18nKey: 'link.input' },
        { label: 'Liste déroulante', to: '/composants/select', i18nKey: 'link.select' },
        { label: 'Combobox', to: '/composants/combobox', i18nKey: 'link.combobox' },
        { label: 'Case à cocher', to: '/composants/checkbox', i18nKey: 'link.checkbox' },
        { label: 'Bouton radio', to: '/composants/radio', i18nKey: 'link.radio' },
        { label: 'Interrupteur', to: '/composants/toggle', i18nKey: 'link.toggle' },
        { label: 'Sélecteur de date', to: '/composants/datepicker', i18nKey: 'link.datepicker' },
        { label: 'Téléversement', to: '/composants/upload', i18nKey: 'link.upload' },
        { label: 'Recherche', to: '/composants/search', i18nKey: 'link.search' },
        { label: 'Éditeur riche', to: '/composants/rich-editor', i18nKey: 'link.rich-editor' },
      ],
    },
    {
      title: 'Contenu',
      i18nKey: 'sidebar.content',
      links: [
        { label: 'Alerte', to: '/composants/alert', i18nKey: 'link.alert' },
        { label: 'Bandeau', to: '/composants/notice', i18nKey: 'link.notice' },
        { label: 'Mise en avant', to: '/composants/callout', i18nKey: 'link.callout' },
        { label: 'Mise en exergue', to: '/composants/highlight', i18nKey: 'link.highlight' },
        { label: 'Citation', to: '/composants/quote', i18nKey: 'link.quote' },
        { label: 'Carte', to: '/composants/card', i18nKey: 'link.card' },
        { label: 'Tuile', to: '/composants/tile', i18nKey: 'link.tile' },
        { label: 'Tableau', to: '/composants/table', i18nKey: 'link.table' },
        { label: 'Contenu éditorial', to: '/composants/content', i18nKey: 'link.editorial-content' },
        { label: 'Bannière', to: '/composants/banner', i18nKey: 'link.banner' },
        { label: 'Skeleton', to: '/composants/skeleton', i18nKey: 'link.skeleton' },
      ],
    },
    {
      title: 'Interactifs',
      i18nKey: 'sidebar.interactive',
      links: [
        { label: 'Accordéon', to: '/composants/accordion', i18nKey: 'link.accordion' },
        { label: 'Onglet', to: '/composants/tab', i18nKey: 'link.tab' },
        { label: 'Modale', to: '/composants/modal', i18nKey: 'link.modal' },
        { label: 'Infobulle', to: '/composants/tooltip', i18nKey: 'link.tooltip' },
        { label: 'Indicateur d\'étapes', to: '/composants/stepper', i18nKey: 'link.stepper' },
        { label: 'Notification toast', to: '/composants/toast', i18nKey: 'link.toast' },
        { label: 'Menu déroulant', to: '/composants/dropdown', i18nKey: 'link.dropdown' },
        { label: 'Bandeau défilant', to: '/composants/marquee', i18nKey: 'link.marquee' },
        { label: 'Galerie d\'images', to: '/composants/gallery', i18nKey: 'link.gallery' },
        { label: 'Arborescence', to: '/composants/treeview', i18nKey: 'link.treeview' },
        { label: 'Bulle de chat', to: '/composants/chat-bubble', i18nKey: 'link.chat-bubble' },
        { label: 'Tiroir', to: '/composants/drawer', i18nKey: 'link.drawer' },
        { label: 'Glisser-déposer', to: '/composants/draggable', i18nKey: 'link.draggable' },
      ],
    },
    {
      title: 'Réglementaire',
      i18nKey: 'sidebar.regulatory',
      links: [
        { label: 'Consentement', to: '/composants/consent', i18nKey: 'link.consent' },
      ],
    },
    {
      title: 'Dashboard',
      i18nKey: 'sidebar.dashboard',
      links: [
        { label: 'Dashboard Sidebar', to: '/composants/dashboard-sidebar', i18nKey: 'link.dashboard-sidebar' },
        { label: 'Charts', to: '/composants/chart', i18nKey: 'link.chart' },
      ],
    },
  ],
  integrations: [
    {
      title: 'Intégrations',
      i18nKey: 'nav.integrations',
      links: [
        { label: 'Vue 3', to: '/integrations/vue', i18nKey: 'link.integrations-vue' },
        { label: 'React', to: '/integrations/react', i18nKey: 'link.integrations-react' },
      ],
    },
  ],
  'integrations-vue': [
    {
      title: 'Intégrations',
      i18nKey: 'nav.integrations',
      links: [
        { label: 'Vue 3', to: '/integrations/vue', i18nKey: 'link.integrations-vue' },
        { label: 'React', to: '/integrations/react', i18nKey: 'link.integrations-react' },
      ],
    },
    {
      title: 'Navigation',
      i18nKey: 'sidebar.navigation',
      links: [
        { label: 'BjHeader', to: '/integrations/vue/header', i18nKey: 'link.header' },
        { label: 'BjFooter', to: '/integrations/vue/footer', i18nKey: 'link.footer' },
        { label: 'BjNavigation', to: '/integrations/vue/navigation', i18nKey: 'link.navigation' },
        { label: 'BjBreadcrumb', to: '/integrations/vue/breadcrumb', i18nKey: 'link.breadcrumb' },
        { label: 'BjSidemenu', to: '/integrations/vue/sidemenu', i18nKey: 'link.sidemenu' },
        { label: 'BjSkiplink', to: '/integrations/vue/skiplink', i18nKey: 'link.skiplink' },
        { label: 'BjPagination', to: '/integrations/vue/pagination', i18nKey: 'link.pagination' },
        { label: 'BjSummary', to: '/integrations/vue/summary', i18nKey: 'link.summary' },
      ],
    },
    {
      title: 'Base',
      i18nKey: 'sidebar.base',
      links: [
        { label: 'BjLogo', to: '/integrations/vue/logo', i18nKey: 'link.logo' },
        { label: 'BjButton', to: '/integrations/vue/button', i18nKey: 'link.button' },
        { label: 'BjLink', to: '/integrations/vue/link', i18nKey: 'link.link' },
        { label: 'BjBadge', to: '/integrations/vue/badge', i18nKey: 'link.badge' },
        { label: 'BjTag', to: '/integrations/vue/tag', i18nKey: 'link.tag' },
        { label: 'BjAvatar', to: '/integrations/vue/avatar', i18nKey: 'link.avatar' },
      ],
    },
    {
      title: 'Formulaires',
      i18nKey: 'sidebar.forms',
      links: [
        { label: 'BjInput', to: '/integrations/vue/input', i18nKey: 'link.input' },
        { label: 'BjSelect', to: '/integrations/vue/select', i18nKey: 'link.select' },
        { label: 'BjCombobox', to: '/integrations/vue/combobox', i18nKey: 'link.combobox' },
        { label: 'BjCheckbox', to: '/integrations/vue/checkbox', i18nKey: 'link.checkbox' },
        { label: 'BjRadio', to: '/integrations/vue/radio', i18nKey: 'link.radio' },
        { label: 'BjToggle', to: '/integrations/vue/toggle', i18nKey: 'link.toggle' },
        { label: 'BjDatepicker', to: '/integrations/vue/datepicker', i18nKey: 'link.datepicker' },
        { label: 'BjUpload', to: '/integrations/vue/upload', i18nKey: 'link.upload' },
        { label: 'BjSearch', to: '/integrations/vue/search', i18nKey: 'link.search' },
        { label: 'BjRichEditor', to: '/integrations/vue/rich-editor', i18nKey: 'link.rich-editor' },
      ],
    },
    {
      title: 'Contenu',
      i18nKey: 'sidebar.content',
      links: [
        { label: 'BjAlert', to: '/integrations/vue/alert', i18nKey: 'link.alert' },
        { label: 'BjNotice', to: '/integrations/vue/notice', i18nKey: 'link.notice' },
        { label: 'BjCallout', to: '/integrations/vue/callout', i18nKey: 'link.callout' },
        { label: 'BjHighlight', to: '/integrations/vue/highlight', i18nKey: 'link.highlight' },
        { label: 'BjQuote', to: '/integrations/vue/quote', i18nKey: 'link.quote' },
        { label: 'BjCard', to: '/integrations/vue/card', i18nKey: 'link.card' },
        { label: 'BjTile', to: '/integrations/vue/tile', i18nKey: 'link.tile' },
        { label: 'BjTable', to: '/integrations/vue/table', i18nKey: 'link.table' },
        { label: 'BjContent', to: '/integrations/vue/content', i18nKey: 'link.editorial-content' },
        { label: 'BjBanner', to: '/integrations/vue/banner', i18nKey: 'link.banner' },
        { label: 'BjSkeleton', to: '/integrations/vue/skeleton', i18nKey: 'link.skeleton' },
      ],
    },
    {
      title: 'Interactifs',
      i18nKey: 'sidebar.interactive',
      links: [
        { label: 'BjAccordion', to: '/integrations/vue/accordion', i18nKey: 'link.accordion' },
        { label: 'BjTab', to: '/integrations/vue/tab', i18nKey: 'link.tab' },
        { label: 'BjModal', to: '/integrations/vue/modal', i18nKey: 'link.modal' },
        { label: 'BjTooltip', to: '/integrations/vue/tooltip', i18nKey: 'link.tooltip' },
        { label: 'BjStepper', to: '/integrations/vue/stepper', i18nKey: 'link.stepper' },
        { label: 'BjToast', to: '/integrations/vue/toast', i18nKey: 'link.toast' },
        { label: 'BjDropdown', to: '/integrations/vue/dropdown', i18nKey: 'link.dropdown' },
        { label: 'BjMarquee', to: '/integrations/vue/marquee', i18nKey: 'link.marquee' },
        { label: 'BjGallery', to: '/integrations/vue/gallery', i18nKey: 'link.gallery' },
        { label: 'BjTreeview', to: '/integrations/vue/treeview', i18nKey: 'link.treeview' },
        { label: 'BjChatBubble', to: '/integrations/vue/chat-bubble', i18nKey: 'link.chat-bubble' },
        { label: 'BjDrawer', to: '/integrations/vue/drawer', i18nKey: 'link.drawer' },
        { label: 'BjDraggable', to: '/integrations/vue/draggable', i18nKey: 'link.draggable' },
      ],
    },
    {
      title: 'Réglementaire',
      i18nKey: 'sidebar.regulatory',
      links: [
        { label: 'BjConsent', to: '/integrations/vue/consent', i18nKey: 'link.consent' },
      ],
    },
    {
      title: 'Dashboard',
      i18nKey: 'sidebar.dashboard',
      links: [
        { label: 'BjDashboardSidebar', to: '/integrations/vue/dashboard-sidebar', i18nKey: 'link.dashboard-sidebar' },
        { label: 'BjChartBar', to: '/integrations/vue/chart-bar', i18nKey: 'link.chart-bar' },
        { label: 'BjChartLine', to: '/integrations/vue/chart-line', i18nKey: 'link.chart-line' },
        { label: 'BjChartPie', to: '/integrations/vue/chart-pie', i18nKey: 'link.chart-pie' },
      ],
    },
  ],
  'integrations-react': [
    {
      title: 'Intégrations',
      i18nKey: 'nav.integrations',
      links: [
        { label: 'Vue 3', to: '/integrations/vue', i18nKey: 'link.integrations-vue' },
        { label: 'React', to: '/integrations/react', i18nKey: 'link.integrations-react' },
      ],
    },
    {
      title: 'Navigation',
      i18nKey: 'sidebar.navigation',
      links: [
        { label: 'BjHeader', to: '/integrations/react/header', i18nKey: 'link.header' },
        { label: 'BjFooter', to: '/integrations/react/footer', i18nKey: 'link.footer' },
        { label: 'BjNavigation', to: '/integrations/react/navigation', i18nKey: 'link.navigation' },
        { label: 'BjBreadcrumb', to: '/integrations/react/breadcrumb', i18nKey: 'link.breadcrumb' },
        { label: 'BjSidemenu', to: '/integrations/react/sidemenu', i18nKey: 'link.sidemenu' },
        { label: 'BjSkiplink', to: '/integrations/react/skiplink', i18nKey: 'link.skiplink' },
        { label: 'BjPagination', to: '/integrations/react/pagination', i18nKey: 'link.pagination' },
        { label: 'BjSummary', to: '/integrations/react/summary', i18nKey: 'link.summary' },
      ],
    },
    {
      title: 'Base',
      i18nKey: 'sidebar.base',
      links: [
        { label: 'BjLogo', to: '/integrations/react/logo', i18nKey: 'link.logo' },
        { label: 'BjButton', to: '/integrations/react/button', i18nKey: 'link.button' },
        { label: 'BjLink', to: '/integrations/react/link', i18nKey: 'link.link' },
        { label: 'BjBadge', to: '/integrations/react/badge', i18nKey: 'link.badge' },
        { label: 'BjTag', to: '/integrations/react/tag', i18nKey: 'link.tag' },
        { label: 'BjAvatar', to: '/integrations/react/avatar', i18nKey: 'link.avatar' },
      ],
    },
    {
      title: 'Formulaires',
      i18nKey: 'sidebar.forms',
      links: [
        { label: 'BjInput', to: '/integrations/react/input', i18nKey: 'link.input' },
        { label: 'BjSelect', to: '/integrations/react/select', i18nKey: 'link.select' },
        { label: 'BjCombobox', to: '/integrations/react/combobox', i18nKey: 'link.combobox' },
        { label: 'BjCheckbox', to: '/integrations/react/checkbox', i18nKey: 'link.checkbox' },
        { label: 'BjRadio', to: '/integrations/react/radio', i18nKey: 'link.radio' },
        { label: 'BjToggle', to: '/integrations/react/toggle', i18nKey: 'link.toggle' },
        { label: 'BjDatepicker', to: '/integrations/react/datepicker', i18nKey: 'link.datepicker' },
        { label: 'BjUpload', to: '/integrations/react/upload', i18nKey: 'link.upload' },
        { label: 'BjSearch', to: '/integrations/react/search', i18nKey: 'link.search' },
        { label: 'BjRichEditor', to: '/integrations/react/rich-editor', i18nKey: 'link.rich-editor' },
      ],
    },
    {
      title: 'Contenu',
      i18nKey: 'sidebar.content',
      links: [
        { label: 'BjAlert', to: '/integrations/react/alert', i18nKey: 'link.alert' },
        { label: 'BjNotice', to: '/integrations/react/notice', i18nKey: 'link.notice' },
        { label: 'BjCallout', to: '/integrations/react/callout', i18nKey: 'link.callout' },
        { label: 'BjHighlight', to: '/integrations/react/highlight', i18nKey: 'link.highlight' },
        { label: 'BjQuote', to: '/integrations/react/quote', i18nKey: 'link.quote' },
        { label: 'BjCard', to: '/integrations/react/card', i18nKey: 'link.card' },
        { label: 'BjTile', to: '/integrations/react/tile', i18nKey: 'link.tile' },
        { label: 'BjTable', to: '/integrations/react/table', i18nKey: 'link.table' },
        { label: 'BjContent', to: '/integrations/react/content', i18nKey: 'link.editorial-content' },
        { label: 'BjBanner', to: '/integrations/react/banner', i18nKey: 'link.banner' },
        { label: 'BjSkeleton', to: '/integrations/react/skeleton', i18nKey: 'link.skeleton' },
      ],
    },
    {
      title: 'Interactifs',
      i18nKey: 'sidebar.interactive',
      links: [
        { label: 'BjAccordion', to: '/integrations/react/accordion', i18nKey: 'link.accordion' },
        { label: 'BjTab', to: '/integrations/react/tab', i18nKey: 'link.tab' },
        { label: 'BjModal', to: '/integrations/react/modal', i18nKey: 'link.modal' },
        { label: 'BjTooltip', to: '/integrations/react/tooltip', i18nKey: 'link.tooltip' },
        { label: 'BjStepper', to: '/integrations/react/stepper', i18nKey: 'link.stepper' },
        { label: 'BjToast', to: '/integrations/react/toast', i18nKey: 'link.toast' },
        { label: 'BjDropdown', to: '/integrations/react/dropdown', i18nKey: 'link.dropdown' },
        { label: 'BjMarquee', to: '/integrations/react/marquee', i18nKey: 'link.marquee' },
        { label: 'BjGallery', to: '/integrations/react/gallery', i18nKey: 'link.gallery' },
        { label: 'BjTreeview', to: '/integrations/react/treeview', i18nKey: 'link.treeview' },
        { label: 'BjChatBubble', to: '/integrations/react/chat-bubble', i18nKey: 'link.chat-bubble' },
        { label: 'BjDrawer', to: '/integrations/react/drawer', i18nKey: 'link.drawer' },
        { label: 'BjDraggable', to: '/integrations/react/draggable', i18nKey: 'link.draggable' },
      ],
    },
    {
      title: 'Réglementaire',
      i18nKey: 'sidebar.regulatory',
      links: [
        { label: 'BjConsent', to: '/integrations/react/consent', i18nKey: 'link.consent' },
      ],
    },
    {
      title: 'Dashboard',
      i18nKey: 'sidebar.dashboard',
      links: [
        { label: 'BjDashboardSidebar', to: '/integrations/react/dashboard-sidebar', i18nKey: 'link.dashboard-sidebar' },
        { label: 'BjChartBar', to: '/integrations/react/chart-bar', i18nKey: 'link.chart-bar' },
        { label: 'BjChartLine', to: '/integrations/react/chart-line', i18nKey: 'link.chart-line' },
        { label: 'BjChartPie', to: '/integrations/react/chart-pie', i18nKey: 'link.chart-pie' },
      ],
    },
  ],
  showcases: [
    {
      title: 'Showcases',
      i18nKey: 'nav.showcases',
      links: [],
    },
  ],
  modeles: [
    {
      title: 'Modèles',
      i18nKey: 'nav.templates',
      links: [
        { label: 'Page d\'accueil', to: '/modeles/page-accueil', i18nKey: 'link.template-home' },
        { label: 'Page article', to: '/modeles/page-article', i18nKey: 'link.template-article' },
        { label: 'Page formulaire', to: '/modeles/page-formulaire', i18nKey: 'link.template-form' },
      ],
    },
  ],
}
