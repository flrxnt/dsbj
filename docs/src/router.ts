import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/HomePage.vue'),
    meta: { layout: 'home', section: 'home', title: 'DSBJ - Design Système du Bénin' },
  },

  // Premiers pas
  {
    path: '/premiers-pas',
    component: () => import('./pages/premiers-pas/IndexPage.vue'),
    meta: { layout: 'docs', section: 'premiers-pas', title: 'Premiers pas - DSBJ', breadcrumb: [{ label: 'Premiers pas', to: '/premiers-pas' }] },
  },
  {
    path: '/premiers-pas/installation',
    component: () => import('./pages/premiers-pas/InstallationPage.vue'),
    meta: { layout: 'docs', section: 'premiers-pas', title: 'Installation - DSBJ', breadcrumb: [{ label: 'Premiers pas', to: '/premiers-pas' }, { label: 'Installation' }] },
  },
  {
    path: '/premiers-pas/utilisation',
    component: () => import('./pages/premiers-pas/UtilisationPage.vue'),
    meta: { layout: 'docs', section: 'premiers-pas', title: 'Utilisation - DSBJ', breadcrumb: [{ label: 'Premiers pas', to: '/premiers-pas' }, { label: 'Utilisation' }] },
  },
  {
    path: '/premiers-pas/ia',
    component: () => import('./pages/premiers-pas/IaPage.vue'),
    meta: { layout: 'docs', section: 'premiers-pas', title: 'Utiliser avec l\'IA - DSBJ', breadcrumb: [{ label: 'Premiers pas', to: '/premiers-pas' }, { label: 'Utiliser avec l\'IA' }] },
  },

  // Fondamentaux
  {
    path: '/fondamentaux',
    component: () => import('./pages/fondamentaux/IndexPage.vue'),
    meta: { layout: 'section', section: 'fondamentaux', title: 'Fondamentaux - DSBJ', breadcrumb: [{ label: 'Fondamentaux' }] },
  },
  {
    path: '/fondamentaux/principes',
    component: () => import('./pages/fondamentaux/PrincipesPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', title: 'Principes - DSBJ', breadcrumb: [{ label: 'Fondamentaux', to: '/fondamentaux' }, { label: 'Principes' }] },
  },
  {
    path: '/fondamentaux/couleurs-palette',
    component: () => import('./pages/fondamentaux/CouleursPalettePage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', title: 'Couleurs - Palette - DSBJ', breadcrumb: [{ label: 'Fondamentaux', to: '/fondamentaux' }, { label: 'Couleurs - Palette' }] },
  },
  {
    path: '/fondamentaux/couleurs-utilisation',
    component: () => import('./pages/fondamentaux/CouleursUtilisationPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', title: 'Couleurs - Utilisation - DSBJ', breadcrumb: [{ label: 'Fondamentaux', to: '/fondamentaux' }, { label: 'Couleurs - Utilisation' }] },
  },
  {
    path: '/fondamentaux/typographie',
    component: () => import('./pages/fondamentaux/TypographiePage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', title: 'Typographie - DSBJ', breadcrumb: [{ label: 'Fondamentaux', to: '/fondamentaux' }, { label: 'Typographie' }] },
  },
  {
    path: '/fondamentaux/espacement',
    component: () => import('./pages/fondamentaux/EspacementPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', title: 'Espacement - DSBJ', breadcrumb: [{ label: 'Fondamentaux', to: '/fondamentaux' }, { label: 'Espacement' }] },
  },
  {
    path: '/fondamentaux/grille',
    component: () => import('./pages/fondamentaux/GrillePage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', title: 'Grille - DSBJ', breadcrumb: [{ label: 'Fondamentaux', to: '/fondamentaux' }, { label: 'Grille' }] },
  },
  {
    path: '/fondamentaux/ombres-elevation',
    component: () => import('./pages/fondamentaux/OmbresElevationPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', title: 'Ombres et élévation - DSBJ', breadcrumb: [{ label: 'Fondamentaux', to: '/fondamentaux' }, { label: 'Ombres et élévation' }] },
  },
  {
    path: '/fondamentaux/icones',
    component: () => import('./pages/fondamentaux/IconesPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', title: 'Icônes - DSBJ', breadcrumb: [{ label: 'Fondamentaux', to: '/fondamentaux' }, { label: 'Icônes' }] },
  },
  {
    path: '/fondamentaux/medias',
    component: () => import('./pages/fondamentaux/MediasPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', title: 'Médias - DSBJ', breadcrumb: [{ label: 'Fondamentaux', to: '/fondamentaux' }, { label: 'Médias' }] },
  },
  {
    path: '/fondamentaux/classes-utilitaires',
    component: () => import('./pages/fondamentaux/ClassesUtilitairesPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', title: 'Classes utilitaires - DSBJ', breadcrumb: [{ label: 'Fondamentaux', to: '/fondamentaux' }, { label: 'Classes utilitaires' }] },
  },

  // Composants
  {
    path: '/composants',
    component: () => import('./pages/composants/IndexPage.vue'),
    meta: { layout: 'section', section: 'composants', title: 'Composants - DSBJ', breadcrumb: [{ label: 'Composants' }] },
  },
  {
    path: '/composants/header',
    component: () => import('./pages/composants/HeaderPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Header - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Header' }] },
  },
  {
    path: '/composants/footer',
    component: () => import('./pages/composants/FooterPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Footer - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Footer' }] },
  },
  {
    path: '/composants/navigation',
    component: () => import('./pages/composants/NavigationPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Navigation - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Navigation' }] },
  },
  {
    path: '/composants/breadcrumb',
    component: () => import('./pages/composants/BreadcrumbPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Breadcrumb - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Breadcrumb' }] },
  },
  {
    path: '/composants/sidemenu',
    component: () => import('./pages/composants/SidemenuPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Sidemenu - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Sidemenu' }] },
  },
  {
    path: '/composants/skiplink',
    component: () => import('./pages/composants/SkiplinkPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Skiplink - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Skiplink' }] },
  },
  {
    path: '/composants/pagination',
    component: () => import('./pages/composants/PaginationPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Pagination - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Pagination' }] },
  },
  {
    path: '/composants/summary',
    component: () => import('./pages/composants/SummaryPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Sommaire - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Sommaire' }] },
  },
  {
    path: '/composants/logo',
    component: () => import('./pages/composants/LogoPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Logo - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Logo' }] },
  },
  {
    path: '/composants/button',
    component: () => import('./pages/composants/ButtonPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Bouton - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Bouton' }] },
  },
  {
    path: '/composants/link',
    component: () => import('./pages/composants/LinkPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Lien - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Lien' }] },
  },
  {
    path: '/composants/badge',
    component: () => import('./pages/composants/BadgePage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Badge - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Badge' }] },
  },
  {
    path: '/composants/tag',
    component: () => import('./pages/composants/TagPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Tag - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Tag' }] },
  },
  {
    path: '/composants/input',
    component: () => import('./pages/composants/InputPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Champ de saisie - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Champ de saisie' }] },
  },
  {
    path: '/composants/select',
    component: () => import('./pages/composants/SelectPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Liste déroulante - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Liste déroulante' }] },
  },
  {
    path: '/composants/checkbox',
    component: () => import('./pages/composants/CheckboxPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Case à cocher - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Case à cocher' }] },
  },
  {
    path: '/composants/radio',
    component: () => import('./pages/composants/RadioPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Bouton radio - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Bouton radio' }] },
  },
  {
    path: '/composants/toggle',
    component: () => import('./pages/composants/TogglePage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Interrupteur - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Interrupteur' }] },
  },
  {
    path: '/composants/datepicker',
    component: () => import('./pages/composants/DatepickerPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Sélecteur de date - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Sélecteur de date' }] },
  },
  {
    path: '/composants/upload',
    component: () => import('./pages/composants/UploadPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Téléversement - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Téléversement' }] },
  },
  {
    path: '/composants/search',
    component: () => import('./pages/composants/SearchPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Recherche - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Recherche' }] },
  },
  {
    path: '/composants/alert',
    component: () => import('./pages/composants/AlertPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Alerte - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Alerte' }] },
  },
  {
    path: '/composants/notice',
    component: () => import('./pages/composants/NoticePage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Bandeau - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Bandeau' }] },
  },
  {
    path: '/composants/callout',
    component: () => import('./pages/composants/CalloutPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Mise en avant - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Mise en avant' }] },
  },
  {
    path: '/composants/highlight',
    component: () => import('./pages/composants/HighlightPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Mise en exergue - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Mise en exergue' }] },
  },
  {
    path: '/composants/quote',
    component: () => import('./pages/composants/QuotePage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Citation - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Citation' }] },
  },
  {
    path: '/composants/card',
    component: () => import('./pages/composants/CardPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Carte - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Carte' }] },
  },
  {
    path: '/composants/tile',
    component: () => import('./pages/composants/TilePage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Tuile - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Tuile' }] },
  },
  {
    path: '/composants/table',
    component: () => import('./pages/composants/TablePage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Tableau - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Tableau' }] },
  },
  {
    path: '/composants/content',
    component: () => import('./pages/composants/ContentPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Contenu éditorial - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Contenu éditorial' }] },
  },
  {
    path: '/composants/accordion',
    component: () => import('./pages/composants/AccordionPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Accordéon - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Accordéon' }] },
  },
  {
    path: '/composants/tab',
    component: () => import('./pages/composants/TabPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Onglet - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Onglet' }] },
  },
  {
    path: '/composants/modal',
    component: () => import('./pages/composants/ModalPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Modale - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Modale' }] },
  },
  {
    path: '/composants/tooltip',
    component: () => import('./pages/composants/TooltipPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Infobulle - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Infobulle' }] },
  },
  {
    path: '/composants/stepper',
    component: () => import('./pages/composants/StepperPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Indicateur d\'étapes - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Indicateur d\'étapes' }] },
  },
  {
    path: '/composants/toast',
    component: () => import('./pages/composants/ToastPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Notification toast - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Notification toast' }] },
  },
  {
    path: '/composants/dropdown',
    component: () => import('./pages/composants/DropdownPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Menu déroulant - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Menu déroulant' }] },
  },
  {
    path: '/composants/marquee',
    component: () => import('./pages/composants/MarqueePage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Bandeau défilant - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Bandeau défilant' }] },
  },
  {
    path: '/composants/gallery',
    component: () => import('./pages/composants/GalleryPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Galerie d\'images - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Galerie d\'images' }] },
  },
  {
    path: '/composants/consent',
    component: () => import('./pages/composants/ConsentPage.vue'),
    meta: { layout: 'docs', section: 'composants', title: 'Consentement - DSBJ', breadcrumb: [{ label: 'Composants', to: '/composants' }, { label: 'Consentement' }] },
  },

  // Modèles
  {
    path: '/modeles',
    component: () => import('./pages/modeles/IndexPage.vue'),
    meta: { layout: 'section', section: 'modeles', title: 'Modèles de pages - DSBJ', breadcrumb: [{ label: 'Modèles' }] },
  },
  {
    path: '/modeles/page-accueil',
    component: () => import('./pages/modeles/PageAccueilPage.vue'),
    meta: { layout: 'docs', section: 'modeles', title: 'Page d\'accueil - DSBJ', breadcrumb: [{ label: 'Modèles', to: '/modeles' }, { label: 'Page d\'accueil' }] },
  },
  {
    path: '/modeles/page-article',
    component: () => import('./pages/modeles/PageArticlePage.vue'),
    meta: { layout: 'docs', section: 'modeles', title: 'Page article - DSBJ', breadcrumb: [{ label: 'Modèles', to: '/modeles' }, { label: 'Page article' }] },
  },
  {
    path: '/modeles/page-formulaire',
    component: () => import('./pages/modeles/PageFormulairePage.vue'),
    meta: { layout: 'docs', section: 'modeles', title: 'Page formulaire - DSBJ', breadcrumb: [{ label: 'Modèles', to: '/modeles' }, { label: 'Page formulaire' }] },
  },

  // Pages légales
  {
    path: '/mentions-legales',
    component: () => import('./pages/MentionsLegalesPage.vue'),
    meta: { layout: 'legal', title: 'Mentions légales - DSBJ', breadcrumb: [{ label: 'Mentions légales' }] },
  },
  {
    path: '/donnees-personnelles',
    component: () => import('./pages/DonneesPersonnellesPage.vue'),
    meta: { layout: 'legal', title: 'Données personnelles - DSBJ', breadcrumb: [{ label: 'Données personnelles' }] },
  },
  {
    path: '/accessibilite',
    component: () => import('./pages/AccessibilitePage.vue'),
    meta: { layout: 'legal', title: 'Accessibilité - DSBJ', breadcrumb: [{ label: 'Déclaration d\'accessibilité' }] },
  },
]
