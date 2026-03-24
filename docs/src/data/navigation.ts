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
      ],
    },
    {
      title: 'Formulaires',
      i18nKey: 'sidebar.forms',
      links: [
        { label: 'Champ de saisie', to: '/composants/input', i18nKey: 'link.input' },
        { label: 'Liste déroulante', to: '/composants/select', i18nKey: 'link.select' },
        { label: 'Case à cocher', to: '/composants/checkbox', i18nKey: 'link.checkbox' },
        { label: 'Bouton radio', to: '/composants/radio', i18nKey: 'link.radio' },
        { label: 'Interrupteur', to: '/composants/toggle', i18nKey: 'link.toggle' },
        { label: 'Sélecteur de date', to: '/composants/datepicker', i18nKey: 'link.datepicker' },
        { label: 'Téléversement', to: '/composants/upload', i18nKey: 'link.upload' },
        { label: 'Recherche', to: '/composants/search', i18nKey: 'link.search' },
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
      ],
    },
    {
      title: 'Réglementaire',
      i18nKey: 'sidebar.regulatory',
      links: [
        { label: 'Consentement', to: '/composants/consent', i18nKey: 'link.consent' },
      ],
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
