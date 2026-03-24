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
      links: [
        { label: 'Présentation', to: '/premiers-pas' },
        { label: 'Installation', to: '/premiers-pas/installation' },
        { label: 'Utilisation', to: '/premiers-pas/utilisation' },
        { label: 'Utiliser avec l\'IA', to: '/premiers-pas/ia' },
      ],
    },
  ],
  fondamentaux: [
    {
      title: 'Fondamentaux',
      links: [
        { label: 'Principes', to: '/fondamentaux/principes' },
        { label: 'Couleurs - Palette', to: '/fondamentaux/couleurs-palette' },
        { label: 'Couleurs - Utilisation', to: '/fondamentaux/couleurs-utilisation' },
        { label: 'Typographie', to: '/fondamentaux/typographie' },
        { label: 'Espacement', to: '/fondamentaux/espacement' },
        { label: 'Grille', to: '/fondamentaux/grille' },
        { label: 'Ombres et élévation', to: '/fondamentaux/ombres-elevation' },
        { label: 'Icônes', to: '/fondamentaux/icones' },
        { label: 'Médias', to: '/fondamentaux/medias' },
        { label: 'Classes utilitaires', to: '/fondamentaux/classes-utilitaires' },
      ],
    },
  ],
  composants: [
    {
      title: 'Navigation',
      i18nKey: 'sidebar.navigation',
      links: [
        { label: 'Header', to: '/composants/header' },
        { label: 'Footer', to: '/composants/footer' },
        { label: 'Navigation', to: '/composants/navigation' },
        { label: 'Breadcrumb', to: '/composants/breadcrumb' },
        { label: 'Sidemenu', to: '/composants/sidemenu' },
        { label: 'Skiplink', to: '/composants/skiplink' },
        { label: 'Pagination', to: '/composants/pagination' },
        { label: 'Sommaire', to: '/composants/summary' },
      ],
    },
    {
      title: 'Base',
      i18nKey: 'sidebar.base',
      links: [
        { label: 'Logo', to: '/composants/logo' },
        { label: 'Bouton', to: '/composants/button' },
        { label: 'Lien', to: '/composants/link' },
        { label: 'Badge', to: '/composants/badge' },
        { label: 'Tag', to: '/composants/tag' },
      ],
    },
    {
      title: 'Formulaires',
      i18nKey: 'sidebar.forms',
      links: [
        { label: 'Champ de saisie', to: '/composants/input' },
        { label: 'Liste déroulante', to: '/composants/select' },
        { label: 'Case à cocher', to: '/composants/checkbox' },
        { label: 'Bouton radio', to: '/composants/radio' },
        { label: 'Interrupteur', to: '/composants/toggle' },
        { label: 'Sélecteur de date', to: '/composants/datepicker' },
        { label: 'Téléversement', to: '/composants/upload' },
        { label: 'Recherche', to: '/composants/search' },
      ],
    },
    {
      title: 'Contenu',
      i18nKey: 'sidebar.content',
      links: [
        { label: 'Alerte', to: '/composants/alert' },
        { label: 'Bandeau', to: '/composants/notice' },
        { label: 'Mise en avant', to: '/composants/callout' },
        { label: 'Mise en exergue', to: '/composants/highlight' },
        { label: 'Citation', to: '/composants/quote' },
        { label: 'Carte', to: '/composants/card' },
        { label: 'Tuile', to: '/composants/tile' },
        { label: 'Tableau', to: '/composants/table' },
        { label: 'Contenu éditorial', to: '/composants/content' },
      ],
    },
    {
      title: 'Interactifs',
      i18nKey: 'sidebar.interactive',
      links: [
        { label: 'Accordéon', to: '/composants/accordion' },
        { label: 'Onglet', to: '/composants/tab' },
        { label: 'Modale', to: '/composants/modal' },
        { label: 'Infobulle', to: '/composants/tooltip' },
        { label: 'Indicateur d\'étapes', to: '/composants/stepper' },
        { label: 'Notification toast', to: '/composants/toast' },
        { label: 'Menu déroulant', to: '/composants/dropdown' },
        { label: 'Bandeau défilant', to: '/composants/marquee' },
        { label: 'Galerie d\'images', to: '/composants/gallery' },
      ],
    },
    {
      title: 'Réglementaire',
      i18nKey: 'sidebar.regulatory',
      links: [
        { label: 'Consentement', to: '/composants/consent' },
      ],
    },
  ],
  modeles: [
    {
      title: 'Modèles',
      links: [
        { label: 'Page d\'accueil', to: '/modeles/page-accueil' },
        { label: 'Page article', to: '/modeles/page-article' },
        { label: 'Page formulaire', to: '/modeles/page-formulaire' },
      ],
    },
  ],
}
