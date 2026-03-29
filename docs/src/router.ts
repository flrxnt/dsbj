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
    path: '/premiers-pas/personnalisation',
    component: () => import('./pages/premiers-pas/PersonnalisationPage.vue'),
    meta: { layout: 'docs', section: 'premiers-pas', titleKey: 'route.customization', breadcrumb: [{ labelKey: 'breadcrumb.getting-started', to: '/premiers-pas' }, { labelKey: 'breadcrumb.customization' }] },
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
    path: '/composants/combobox',
    component: () => import('./pages/composants/ComboboxPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.combobox', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.combobox' }] },
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
  {
    path: '/composants/rich-editor',
    component: () => import('./pages/composants/RichEditorPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.rich-editor', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.rich-editor' }] },
  },
  {
    path: '/composants/dashboard-sidebar',
    component: () => import('./pages/composants/DashboardSidebarPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.dashboard-sidebar', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.dashboard-sidebar' }] },
  },
  {
    path: '/composants/chart',
    component: () => import('./pages/composants/ChartPage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.chart', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.chart' }] },
  },
  {
    path: '/composants/chat-bubble',
    component: () => import('./pages/composants/ChatBubblePage.vue'),
    meta: { layout: 'docs', section: 'composants', titleKey: 'route.chat-bubble', breadcrumb: [{ labelKey: 'breadcrumb.components', to: '/composants' }, { labelKey: 'breadcrumb.chat-bubble' }] },
  },

  // Intégrations
  {
    path: '/integrations',
    component: () => import('./pages/integrations/IndexPage.vue'),
    meta: { layout: 'section', section: 'integrations', titleKey: 'route.integrations', breadcrumb: [{ labelKey: 'breadcrumb.integrations' }] },
  },
  {
    path: '/integrations/vue',
    component: () => import('./pages/integrations/vue/IndexPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.integrations-vue', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue' }] },
  },
  {
    path: '/integrations/vue/button',
    component: () => import('./pages/integrations/vue/ButtonPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-button', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.button' }] },
  },
  {
    path: '/integrations/vue/link',
    component: () => import('./pages/integrations/vue/LinkPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-link', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.link' }] },
  },
  {
    path: '/integrations/vue/badge',
    component: () => import('./pages/integrations/vue/BadgePage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-badge', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.badge' }] },
  },
  {
    path: '/integrations/vue/tag',
    component: () => import('./pages/integrations/vue/TagPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-tag', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.tag' }] },
  },
  {
    path: '/integrations/vue/avatar',
    component: () => import('./pages/integrations/vue/AvatarPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-avatar', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.avatar' }] },
  },
  {
    path: '/integrations/vue/modal',
    component: () => import('./pages/integrations/vue/ModalPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-modal', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.modal' }] },
  },
  {
    path: '/integrations/vue/accordion',
    component: () => import('./pages/integrations/vue/AccordionPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-accordion', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.accordion' }] },
  },
  {
    path: '/integrations/vue/input',
    component: () => import('./pages/integrations/vue/InputPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-input', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.input' }] },
  },
  {
    path: '/integrations/vue/card',
    component: () => import('./pages/integrations/vue/CardPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-card', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.card' }] },
  },
  {
    path: '/integrations/vue/alert',
    component: () => import('./pages/integrations/vue/AlertPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-alert', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.alert' }] },
  },
  {
    path: '/integrations/vue/tab',
    component: () => import('./pages/integrations/vue/TabPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-tab', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.tab' }] },
  },
  {
    path: '/integrations/vue/toast',
    component: () => import('./pages/integrations/vue/ToastPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-toast', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.toast' }] },
  },
  {
    path: '/integrations/vue/select',
    component: () => import('./pages/integrations/vue/SelectPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-select', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.select' }] },
  },
  {
    path: '/integrations/vue/combobox',
    component: () => import('./pages/integrations/vue/ComboboxPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-combobox', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.combobox' }] },
  },
  {
    path: '/integrations/vue/checkbox',
    component: () => import('./pages/integrations/vue/CheckboxPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-checkbox', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.checkbox' }] },
  },
  {
    path: '/integrations/vue/radio',
    component: () => import('./pages/integrations/vue/RadioPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-radio', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.radio' }] },
  },
  {
    path: '/integrations/vue/toggle',
    component: () => import('./pages/integrations/vue/TogglePage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-toggle', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.toggle' }] },
  },
  {
    path: '/integrations/vue/upload',
    component: () => import('./pages/integrations/vue/UploadPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-upload', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.upload' }] },
  },
  {
    path: '/integrations/vue/search',
    component: () => import('./pages/integrations/vue/SearchPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-search', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.search' }] },
  },
  {
    path: '/integrations/vue/datepicker',
    component: () => import('./pages/integrations/vue/DatepickerPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-datepicker', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.datepicker' }] },
  },
  {
    path: '/integrations/vue/dropdown',
    component: () => import('./pages/integrations/vue/DropdownPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-dropdown', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.dropdown' }] },
  },
  {
    path: '/integrations/vue/tooltip',
    component: () => import('./pages/integrations/vue/TooltipPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-tooltip', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.tooltip' }] },
  },
  {
    path: '/integrations/vue/gallery',
    component: () => import('./pages/integrations/vue/GalleryPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-gallery', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.gallery' }] },
  },
  {
    path: '/integrations/vue/marquee',
    component: () => import('./pages/integrations/vue/MarqueePage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-marquee', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.marquee' }] },
  },
  {
    path: '/integrations/vue/treeview',
    component: () => import('./pages/integrations/vue/TreeviewPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-treeview', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.treeview' }] },
  },
  {
    path: '/integrations/vue/consent',
    component: () => import('./pages/integrations/vue/ConsentPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-consent', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.consent' }] },
  },
  {
    path: '/integrations/vue/callout',
    component: () => import('./pages/integrations/vue/CalloutPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-callout', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.callout' }] },
  },
  {
    path: '/integrations/vue/notice',
    component: () => import('./pages/integrations/vue/NoticePage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-notice', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.notice' }] },
  },
  {
    path: '/integrations/vue/highlight',
    component: () => import('./pages/integrations/vue/HighlightPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-highlight', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.highlight' }] },
  },
  {
    path: '/integrations/vue/quote',
    component: () => import('./pages/integrations/vue/QuotePage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-quote', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.quote' }] },
  },
  {
    path: '/integrations/vue/tile',
    component: () => import('./pages/integrations/vue/TilePage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-tile', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.tile' }] },
  },
  {
    path: '/integrations/vue/table',
    component: () => import('./pages/integrations/vue/TablePage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-table', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.table' }] },
  },
  {
    path: '/integrations/vue/skeleton',
    component: () => import('./pages/integrations/vue/SkeletonPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-skeleton', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.skeleton' }] },
  },
  {
    path: '/integrations/vue/content',
    component: () => import('./pages/integrations/vue/ContentPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-content', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.content' }] },
  },
  {
    path: '/integrations/vue/header',
    component: () => import('./pages/integrations/vue/HeaderPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-header', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.header' }] },
  },
  {
    path: '/integrations/vue/footer',
    component: () => import('./pages/integrations/vue/FooterPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-footer', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.footer' }] },
  },
  {
    path: '/integrations/vue/breadcrumb',
    component: () => import('./pages/integrations/vue/BreadcrumbPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-breadcrumb', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.breadcrumb' }] },
  },
  {
    path: '/integrations/vue/pagination',
    component: () => import('./pages/integrations/vue/PaginationPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-pagination', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.pagination' }] },
  },
  {
    path: '/integrations/vue/stepper',
    component: () => import('./pages/integrations/vue/StepperPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-stepper', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.stepper' }] },
  },
  {
    path: '/integrations/vue/banner',
    component: () => import('./pages/integrations/vue/BannerPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-banner', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.banner' }] },
  },
  {
    path: '/integrations/vue/logo',
    component: () => import('./pages/integrations/vue/LogoPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-logo', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.logo' }] },
  },
  {
    path: '/integrations/vue/summary',
    component: () => import('./pages/integrations/vue/SummaryPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-summary', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.summary' }] },
  },
  {
    path: '/integrations/vue/sidemenu',
    component: () => import('./pages/integrations/vue/SidemenuPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-sidemenu', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.sidemenu' }] },
  },
  {
    path: '/integrations/vue/navigation',
    component: () => import('./pages/integrations/vue/NavigationPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-navigation', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.navigation' }] },
  },
  {
    path: '/integrations/vue/skiplink',
    component: () => import('./pages/integrations/vue/SkiplinkPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-skiplink', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.skiplink' }] },
  },
  {
    path: '/integrations/vue/rich-editor',
    component: () => import('./pages/integrations/vue/RichEditorPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-rich-editor', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.rich-editor' }] },
  },
  {
    path: '/integrations/vue/dashboard-sidebar',
    component: () => import('./pages/integrations/vue/DashboardSidebarPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-dashboard-sidebar', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.dashboard-sidebar' }] },
  },
  {
    path: '/integrations/vue/chart-bar',
    component: () => import('./pages/integrations/vue/ChartBarPage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-chart-bar', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.chart-bar' }] },
  },
  {
    path: '/integrations/vue/chart-line',
    component: () => import('./pages/integrations/vue/ChartLinePage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-chart-line', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.chart-line' }] },
  },
  {
    path: '/integrations/vue/chart-pie',
    component: () => import('./pages/integrations/vue/ChartPiePage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-chart-pie', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.chart-pie' }] },
  },
  {
    path: '/integrations/vue/chat-bubble',
    component: () => import('./pages/integrations/vue/ChatBubblePage.vue'),
    meta: { layout: 'docs', section: 'integrations-vue', titleKey: 'route.vue-chat-bubble', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-vue', to: '/integrations/vue' }, { labelKey: 'breadcrumb.chat-bubble' }] },
  },
  {
    path: '/integrations/react',
    component: () => import('./pages/integrations/react/IndexPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.integrations-react', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react' }] },
  },
  {
    path: '/integrations/react/button',
    component: () => import('./pages/integrations/react/ButtonPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-button', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.button' }] },
  },
  {
    path: '/integrations/react/link',
    component: () => import('./pages/integrations/react/LinkPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-link', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.link' }] },
  },
  {
    path: '/integrations/react/badge',
    component: () => import('./pages/integrations/react/BadgePage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-badge', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.badge' }] },
  },
  {
    path: '/integrations/react/tag',
    component: () => import('./pages/integrations/react/TagPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-tag', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.tag' }] },
  },
  {
    path: '/integrations/react/avatar',
    component: () => import('./pages/integrations/react/AvatarPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-avatar', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.avatar' }] },
  },
  {
    path: '/integrations/react/input',
    component: () => import('./pages/integrations/react/InputPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-input', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.input' }] },
  },
  {
    path: '/integrations/react/select',
    component: () => import('./pages/integrations/react/SelectPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-select', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.select' }] },
  },
  {
    path: '/integrations/react/combobox',
    component: () => import('./pages/integrations/react/ComboboxPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-combobox', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.combobox' }] },
  },
  {
    path: '/integrations/react/checkbox',
    component: () => import('./pages/integrations/react/CheckboxPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-checkbox', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.checkbox' }] },
  },
  {
    path: '/integrations/react/radio',
    component: () => import('./pages/integrations/react/RadioPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-radio', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.radio' }] },
  },
  {
    path: '/integrations/react/toggle',
    component: () => import('./pages/integrations/react/TogglePage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-toggle', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.toggle' }] },
  },
  {
    path: '/integrations/react/datepicker',
    component: () => import('./pages/integrations/react/DatepickerPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-datepicker', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.datepicker' }] },
  },
  {
    path: '/integrations/react/upload',
    component: () => import('./pages/integrations/react/UploadPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-upload', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.upload' }] },
  },
  {
    path: '/integrations/react/search',
    component: () => import('./pages/integrations/react/SearchPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-search', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.search' }] },
  },
  {
    path: '/integrations/react/alert',
    component: () => import('./pages/integrations/react/AlertPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-alert', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.alert' }] },
  },
  {
    path: '/integrations/react/card',
    component: () => import('./pages/integrations/react/CardPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-card', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.card' }] },
  },
  {
    path: '/integrations/react/callout',
    component: () => import('./pages/integrations/react/CalloutPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-callout', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.callout' }] },
  },
  {
    path: '/integrations/react/notice',
    component: () => import('./pages/integrations/react/NoticePage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-notice', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.notice' }] },
  },
  {
    path: '/integrations/react/highlight',
    component: () => import('./pages/integrations/react/HighlightPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-highlight', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.highlight' }] },
  },
  {
    path: '/integrations/react/quote',
    component: () => import('./pages/integrations/react/QuotePage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-quote', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.quote' }] },
  },
  {
    path: '/integrations/react/tile',
    component: () => import('./pages/integrations/react/TilePage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-tile', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.tile' }] },
  },
  {
    path: '/integrations/react/table',
    component: () => import('./pages/integrations/react/TablePage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-table', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.table' }] },
  },
  {
    path: '/integrations/react/skeleton',
    component: () => import('./pages/integrations/react/SkeletonPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-skeleton', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.skeleton' }] },
  },
  {
    path: '/integrations/react/header',
    component: () => import('./pages/integrations/react/HeaderPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-header', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.header' }] },
  },
  {
    path: '/integrations/react/footer',
    component: () => import('./pages/integrations/react/FooterPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-footer', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.footer' }] },
  },
  {
    path: '/integrations/react/breadcrumb',
    component: () => import('./pages/integrations/react/BreadcrumbPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-breadcrumb', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.breadcrumb' }] },
  },
  {
    path: '/integrations/react/pagination',
    component: () => import('./pages/integrations/react/PaginationPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-pagination', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.pagination' }] },
  },
  {
    path: '/integrations/react/stepper',
    component: () => import('./pages/integrations/react/StepperPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-stepper', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.stepper' }] },
  },
  {
    path: '/integrations/react/banner',
    component: () => import('./pages/integrations/react/BannerPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-banner', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.banner' }] },
  },
  {
    path: '/integrations/react/accordion',
    component: () => import('./pages/integrations/react/AccordionPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-accordion', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.accordion' }] },
  },
  {
    path: '/integrations/react/modal',
    component: () => import('./pages/integrations/react/ModalPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-modal', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.modal' }] },
  },
  {
    path: '/integrations/react/tab',
    component: () => import('./pages/integrations/react/TabPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-tab', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.tab' }] },
  },
  {
    path: '/integrations/react/dropdown',
    component: () => import('./pages/integrations/react/DropdownPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-dropdown', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.dropdown' }] },
  },
  {
    path: '/integrations/react/toast',
    component: () => import('./pages/integrations/react/ToastPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-toast', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.toast' }] },
  },
  {
    path: '/integrations/react/tooltip',
    component: () => import('./pages/integrations/react/TooltipPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-tooltip', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.tooltip' }] },
  },
  {
    path: '/integrations/react/gallery',
    component: () => import('./pages/integrations/react/GalleryPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-gallery', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.gallery' }] },
  },
  {
    path: '/integrations/react/marquee',
    component: () => import('./pages/integrations/react/MarqueePage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-marquee', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.marquee' }] },
  },
  {
    path: '/integrations/react/treeview',
    component: () => import('./pages/integrations/react/TreeviewPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-treeview', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.treeview' }] },
  },
  {
    path: '/integrations/react/consent',
    component: () => import('./pages/integrations/react/ConsentPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-consent', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.consent' }] },
  },
  {
    path: '/integrations/react/rich-editor',
    component: () => import('./pages/integrations/react/RichEditorPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-rich-editor', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.rich-editor' }] },
  },
  {
    path: '/integrations/react/logo',
    component: () => import('./pages/integrations/react/LogoPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-logo', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.logo' }] },
  },
  {
    path: '/integrations/react/navigation',
    component: () => import('./pages/integrations/react/NavigationPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-navigation', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.navigation' }] },
  },
  {
    path: '/integrations/react/sidemenu',
    component: () => import('./pages/integrations/react/SidemenuPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-sidemenu', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.sidemenu' }] },
  },
  {
    path: '/integrations/react/skiplink',
    component: () => import('./pages/integrations/react/SkiplinkPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-skiplink', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.skiplink' }] },
  },
  {
    path: '/integrations/react/summary',
    component: () => import('./pages/integrations/react/SummaryPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-summary', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.summary' }] },
  },
  {
    path: '/integrations/react/content',
    component: () => import('./pages/integrations/react/ContentPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-content', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.content' }] },
  },
  {
    path: '/integrations/react/dashboard-sidebar',
    component: () => import('./pages/integrations/react/DashboardSidebarPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-dashboard-sidebar', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.dashboard-sidebar' }] },
  },
  {
    path: '/integrations/react/chart-bar',
    component: () => import('./pages/integrations/react/ChartBarPage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-chart-bar', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.chart-bar' }] },
  },
  {
    path: '/integrations/react/chart-line',
    component: () => import('./pages/integrations/react/ChartLinePage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-chart-line', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.chart-line' }] },
  },
  {
    path: '/integrations/react/chart-pie',
    component: () => import('./pages/integrations/react/ChartPiePage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-chart-pie', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.chart-pie' }] },
  },
  {
    path: '/integrations/react/chat-bubble',
    component: () => import('./pages/integrations/react/ChatBubblePage.vue'),
    meta: { layout: 'docs', section: 'integrations-react', titleKey: 'route.react-chat-bubble', breadcrumb: [{ labelKey: 'breadcrumb.integrations', to: '/integrations' }, { labelKey: 'breadcrumb.integrations-react', to: '/integrations/react' }, { labelKey: 'breadcrumb.chat-bubble' }] },
  },

  // Showcases
  {
    path: '/showcases',
    component: () => import('./pages/showcases/IndexPage.vue'),
    meta: { layout: 'section', section: 'showcases', titleKey: 'route.showcases', breadcrumb: [{ labelKey: 'breadcrumb.showcases' }] },
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

  // 404
  {
    path: '/:pathMatch(.*)*',
    component: () => import('./pages/NotFoundPage.vue'),
    meta: { layout: 'home', titleKey: 'route.not-found' },
  },
]
