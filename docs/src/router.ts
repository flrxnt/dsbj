import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/HomePage.vue'),
    meta: { layout: 'home', section: 'home', titleKey: 'route.home' },
  },

  // Premiers pas
  {
    path: '/premiers-pas',
    component: () => import('./pages/premiers-pas/IndexPage.vue'),
    meta: { layout: 'docs', section: 'premiers-pas', titleKey: 'route.getting-started', breadcrumb: [{ labelKey: 'breadcrumb.getting-started', to: '/premiers-pas' }] },
  },
  {
    path: '/premiers-pas/installation',
    component: () => import('./pages/premiers-pas/InstallationPage.vue'),
    meta: { layout: 'docs', section: 'premiers-pas', titleKey: 'route.installation', breadcrumb: [{ labelKey: 'breadcrumb.getting-started', to: '/premiers-pas' }, { labelKey: 'breadcrumb.installation' }] },
  },
  {
    path: '/premiers-pas/utilisation',
    component: () => import('./pages/premiers-pas/UtilisationPage.vue'),
    meta: { layout: 'docs', section: 'premiers-pas', titleKey: 'route.usage', breadcrumb: [{ labelKey: 'breadcrumb.getting-started', to: '/premiers-pas' }, { labelKey: 'breadcrumb.usage' }] },
  },
  {
    path: '/premiers-pas/ia',
    component: () => import('./pages/premiers-pas/IaPage.vue'),
    meta: { layout: 'docs', section: 'premiers-pas', titleKey: 'route.ai', breadcrumb: [{ labelKey: 'breadcrumb.getting-started', to: '/premiers-pas' }, { labelKey: 'breadcrumb.ai' }] },
  },

  // Fondamentaux
  {
    path: '/fondamentaux',
    component: () => import('./pages/fondamentaux/IndexPage.vue'),
    meta: { layout: 'section', section: 'fondamentaux', titleKey: 'route.fundamentals', breadcrumb: [{ labelKey: 'breadcrumb.fundamentals' }] },
  },
  {
    path: '/fondamentaux/principes',
    component: () => import('./pages/fondamentaux/PrincipesPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', titleKey: 'route.principles', breadcrumb: [{ labelKey: 'breadcrumb.fundamentals', to: '/fondamentaux' }, { labelKey: 'breadcrumb.principles' }] },
  },
  {
    path: '/fondamentaux/couleurs-palette',
    component: () => import('./pages/fondamentaux/CouleursPalettePage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', titleKey: 'route.colors-palette', breadcrumb: [{ labelKey: 'breadcrumb.fundamentals', to: '/fondamentaux' }, { labelKey: 'breadcrumb.colors-palette' }] },
  },
  {
    path: '/fondamentaux/couleurs-utilisation',
    component: () => import('./pages/fondamentaux/CouleursUtilisationPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', titleKey: 'route.colors-usage', breadcrumb: [{ labelKey: 'breadcrumb.fundamentals', to: '/fondamentaux' }, { labelKey: 'breadcrumb.colors-usage' }] },
  },
  {
    path: '/fondamentaux/typographie',
    component: () => import('./pages/fondamentaux/TypographiePage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', titleKey: 'route.typography', breadcrumb: [{ labelKey: 'breadcrumb.fundamentals', to: '/fondamentaux' }, { labelKey: 'breadcrumb.typography' }] },
  },
  {
    path: '/fondamentaux/espacement',
    component: () => import('./pages/fondamentaux/EspacementPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', titleKey: 'route.spacing', breadcrumb: [{ labelKey: 'breadcrumb.fundamentals', to: '/fondamentaux' }, { labelKey: 'breadcrumb.spacing' }] },
  },
  {
    path: '/fondamentaux/grille',
    component: () => import('./pages/fondamentaux/GrillePage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', titleKey: 'route.grid', breadcrumb: [{ labelKey: 'breadcrumb.fundamentals', to: '/fondamentaux' }, { labelKey: 'breadcrumb.grid' }] },
  },
  {
    path: '/fondamentaux/ombres-elevation',
    component: () => import('./pages/fondamentaux/OmbresElevationPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', titleKey: 'route.shadows', breadcrumb: [{ labelKey: 'breadcrumb.fundamentals', to: '/fondamentaux' }, { labelKey: 'breadcrumb.shadows' }] },
  },
  {
    path: '/fondamentaux/icones',
    component: () => import('./pages/fondamentaux/IconesPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', titleKey: 'route.icons', breadcrumb: [{ labelKey: 'breadcrumb.fundamentals', to: '/fondamentaux' }, { labelKey: 'breadcrumb.icons' }] },
  },
  {
    path: '/fondamentaux/medias',
    component: () => import('./pages/fondamentaux/MediasPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', titleKey: 'route.media', breadcrumb: [{ labelKey: 'breadcrumb.fundamentals', to: '/fondamentaux' }, { labelKey: 'breadcrumb.media' }] },
  },
  {
    path: '/fondamentaux/classes-utilitaires',
    component: () => import('./pages/fondamentaux/ClassesUtilitairesPage.vue'),
    meta: { layout: 'docs', section: 'fondamentaux', titleKey: 'route.utility-classes', breadcrumb: [{ labelKey: 'breadcrumb.fundamentals', to: '/fondamentaux' }, { labelKey: 'breadcrumb.utility-classes' }] },
  },

  // Composants
  {
    path: '/composants',
    component: () => import('./pages/composants/IndexPage.vue'),
    meta: { layout: 'section', section: 'composants', titleKey: 'route.components', breadcrumb: [{ labelKey: 'breadcrumb.components' }] },
  },
  {
    path: '/composants/header',
    component: () => import('./pages/composants/HeaderPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.header', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.header' }] },
  },
  {
    path: '/composants/footer',
    component: () => import('./pages/composants/FooterPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.footer', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.footer' }] },
  },
  {
    path: '/composants/navigation',
    component: () => import('./pages/composants/NavigationPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.navigation', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.navigation' }] },
  },
  {
    path: '/composants/breadcrumb',
    component: () => import('./pages/composants/BreadcrumbPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.breadcrumb', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.breadcrumb' }] },
  },
  {
    path: '/composants/sidemenu',
    component: () => import('./pages/composants/SidemenuPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.sidemenu', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.sidemenu' }] },
  },
  {
    path: '/composants/skiplink',
    component: () => import('./pages/composants/SkiplinkPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.skiplink', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.skiplink' }] },
  },
  {
    path: '/composants/pagination',
    component: () => import('./pages/composants/PaginationPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.pagination', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.pagination' }] },
  },
  {
    path: '/composants/summary',
    component: () => import('./pages/composants/SummaryPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.summary', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.summary' }] },
  },
  {
    path: '/composants/logo',
    component: () => import('./pages/composants/LogoPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.logo', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.logo' }] },
  },
  {
    path: '/composants/button',
    component: () => import('./pages/composants/ButtonPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.button', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.button' }] },
  },
  {
    path: '/composants/link',
    component: () => import('./pages/composants/LinkPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.link', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.link' }] },
  },
  {
    path: '/composants/badge',
    component: () => import('./pages/composants/BadgePage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.badge', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.badge' }] },
  },
  {
    path: '/composants/tag',
    component: () => import('./pages/composants/TagPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.tag', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.tag' }] },
  },
  {
    path: '/composants/input',
    component: () => import('./pages/composants/InputPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.input', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.input' }] },
  },
  {
    path: '/composants/select',
    component: () => import('./pages/composants/SelectPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.select', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.select' }] },
  },
  {
    path: '/composants/checkbox',
    component: () => import('./pages/composants/CheckboxPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.checkbox', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.checkbox' }] },
  },
  {
    path: '/composants/radio',
    component: () => import('./pages/composants/RadioPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.radio', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.radio' }] },
  },
  {
    path: '/composants/toggle',
    component: () => import('./pages/composants/TogglePage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.toggle', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.toggle' }] },
  },
  {
    path: '/composants/datepicker',
    component: () => import('./pages/composants/DatepickerPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.datepicker', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.datepicker' }] },
  },
  {
    path: '/composants/upload',
    component: () => import('./pages/composants/UploadPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.upload', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.upload' }] },
  },
  {
    path: '/composants/search',
    component: () => import('./pages/composants/SearchPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.search-comp', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.search' }] },
  },
  {
    path: '/composants/alert',
    component: () => import('./pages/composants/AlertPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.alert', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.alert' }] },
  },
  {
    path: '/composants/notice',
    component: () => import('./pages/composants/NoticePage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.notice', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.notice' }] },
  },
  {
    path: '/composants/callout',
    component: () => import('./pages/composants/CalloutPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.callout', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.callout' }] },
  },
  {
    path: '/composants/highlight',
    component: () => import('./pages/composants/HighlightPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.highlight', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.highlight' }] },
  },
  {
    path: '/composants/quote',
    component: () => import('./pages/composants/QuotePage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.quote', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.quote' }] },
  },
  {
    path: '/composants/card',
    component: () => import('./pages/composants/CardPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.card', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.card' }] },
  },
  {
    path: '/composants/tile',
    component: () => import('./pages/composants/TilePage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.tile', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.tile' }] },
  },
  {
    path: '/composants/table',
    component: () => import('./pages/composants/TablePage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.table', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.table' }] },
  },
  {
    path: '/composants/content',
    component: () => import('./pages/composants/ContentPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.content', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.content' }] },
  },
  {
    path: '/composants/accordion',
    component: () => import('./pages/composants/AccordionPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.accordion', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.accordion' }] },
  },
  {
    path: '/composants/tab',
    component: () => import('./pages/composants/TabPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.tab', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.tab' }] },
  },
  {
    path: '/composants/modal',
    component: () => import('./pages/composants/ModalPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.modal', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.modal' }] },
  },
  {
    path: '/composants/tooltip',
    component: () => import('./pages/composants/TooltipPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.tooltip', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.tooltip' }] },
  },
  {
    path: '/composants/stepper',
    component: () => import('./pages/composants/StepperPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.stepper', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.stepper' }] },
  },
  {
    path: '/composants/toast',
    component: () => import('./pages/composants/ToastPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.toast', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.toast' }] },
  },
  {
    path: '/composants/dropdown',
    component: () => import('./pages/composants/DropdownPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.dropdown', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.dropdown' }] },
  },
  {
    path: '/composants/marquee',
    component: () => import('./pages/composants/MarqueePage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.marquee', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.marquee' }] },
  },
  {
    path: '/composants/gallery',
    component: () => import('./pages/composants/GalleryPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.gallery', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.gallery' }] },
  },
  {
    path: '/composants/banner',
    component: () => import('./pages/composants/BannerPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.banner', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.banner' }] },
  },
  {
    path: '/composants/skeleton',
    component: () => import('./pages/composants/SkeletonPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.skeleton', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.skeleton' }] },
  },
  {
    path: '/composants/avatar',
    component: () => import('./pages/composants/AvatarPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.avatar', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.avatar' }] },
  },
  {
    path: '/composants/treeview',
    component: () => import('./pages/composants/TreeviewPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.treeview', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.treeview' }] },
  },
  {
    path: '/composants/consent',
    component: () => import('./pages/composants/ConsentPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.consent', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.consent' }] },
  },

  // Modèles
  {
    path: '/modeles',
    component: () => import('./pages/modeles/IndexPage.vue'),
    meta: { layout: 'section', section: 'modeles', titleKey: 'route.templates', breadcrumb: [{ labelKey: 'breadcrumb.templates' }] },
  },
  {
    path: '/modeles/page-accueil',
    component: () => import('./pages/modeles/PageAccueilPage.vue'),
    meta: { layout: 'docs', section: 'modeles', titleKey: 'route.template-home', breadcrumb: [{ labelKey: 'breadcrumb.templates', to: '/modeles' }, { labelKey: 'breadcrumb.template-home' }] },
  },
  {
    path: '/modeles/page-article',
    component: () => import('./pages/modeles/PageArticlePage.vue'),
    meta: { layout: 'docs', section: 'modeles', titleKey: 'route.template-article', breadcrumb: [{ labelKey: 'breadcrumb.templates', to: '/modeles' }, { labelKey: 'breadcrumb.template-article' }] },
  },
  {
    path: '/modeles/page-formulaire',
    component: () => import('./pages/modeles/PageFormulairePage.vue'),
    meta: { layout: 'docs', section: 'modeles', titleKey: 'route.template-form', breadcrumb: [{ labelKey: 'breadcrumb.templates', to: '/modeles' }, { labelKey: 'breadcrumb.template-form' }] },
  },

  // Pages légales
  {
    path: '/mentions-legales',
    component: () => import('./pages/MentionsLegalesPage.vue'),
    meta: { layout: 'legal', titleKey: 'route.legal-notice', breadcrumb: [{ labelKey: 'breadcrumb.legal-notice' }] },
  },
  {
    path: '/donnees-personnelles',
    component: () => import('./pages/DonneesPersonnellesPage.vue'),
    meta: { layout: 'legal', titleKey: 'route.personal-data', breadcrumb: [{ labelKey: 'breadcrumb.personal-data' }] },
  },
  {
    path: '/accessibilite',
    component: () => import('./pages/AccessibilitePage.vue'),
    meta: { layout: 'legal', titleKey: 'route.accessibility', breadcrumb: [{ labelKey: 'breadcrumb.accessibility' }] },
  },
]
