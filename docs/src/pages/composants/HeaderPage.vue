<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'En-tête de page',
      desc:
        'Identité de l\u2019État, service ou portail, raccourcis et navigation ; bande tricolore en haut.',
      'section-exemple': 'Exemple complet',
      'section-minimal': 'Marque seule (sans bloc service)',
      'section-minimal-p':
        'Sur petit écran, <code>bj-header__service</code> est masqué par défaut (breakpoint <code>md</code>).',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-desc':
        'Sur mobile, <code>data-bj-header-menu</code> sur le bouton avec <code>aria-controls</code> vers l\u2019<code>id</code> du <code>nav</code> ouvre le menu ; placez <code>data-bj-expanded</code> sur le <code>nav</code> lorsqu\u2019il est ouvert.',
      'prop-bj-header': 'En-tête (bande tricolore <code>::before</code>).',
      'prop-bj-header__body': 'Ligne marque / outils.',
      'prop-bj-header__brand': 'Lien d\u2019accueil (logo + texte service).',
      'prop-bj-header__service':
        'Bloc titre service (affiché à partir du breakpoint <code>md</code>).',
      'prop-bj-header__service-title': 'Nom du service (titre).',
      'prop-bj-header__service-tagline': 'Sous-titre ou baseline du service.',
      'prop-bj-header__tools': 'Zone des raccourcis (liens, actions).',
      'prop-bj-header__tools-link': 'Lien dans la zone outils.',
      'prop-bj-header__menu-btn': 'Bouton menu mobile (visible &lt; <code>lg</code>).',
      'prop-bj-header__menu-label': 'Libellé \u00ab Menu \u00bb (masqué sur très petit écran).',
      'prop-bj-header__nav': 'Panneau de navigation principale.',
      'prop-bj-header__nav-list': 'Liste des entrées du menu.',
      'prop-bj-header__nav-item': 'Élément de liste.',
      'prop-bj-header__nav-link': 'Lien ou entrée de navigation.',
      'prop-bj-header__nav-link--active':
        'État actif (courant) ; peut s\u2019appairer avec <code>aria-current="page"</code>.',
      'a11y-note':
        'Synchronisez <code>aria-expanded</code> du bouton burger avec l\u2019ouverture du panneau <code>nav</code>.',
    },
    en: {
      title: 'Page header',
      desc:
        'Institutional identity, service or portal, shortcuts and navigation; tricolor band at the top.',
      'section-exemple': 'Full example',
      'section-minimal': 'Brand only (no service block)',
      'section-minimal-p':
        'On small screens, <code>bj-header__service</code> is hidden by default (from the <code>md</code> breakpoint).',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-desc':
        'On mobile, <code>data-bj-header-menu</code> on the button with <code>aria-controls</code> pointing to the <code>nav</code> <code>id</code> opens the menu; set <code>data-bj-expanded</code> on the <code>nav</code> when it is open.',
      'prop-bj-header': 'Header (tricolor band via <code>::before</code>).',
      'prop-bj-header__body': 'Brand / tools row.',
      'prop-bj-header__brand': 'Home link (logo + service text).',
      'prop-bj-header__service':
        'Service title block (shown from the <code>md</code> breakpoint).',
      'prop-bj-header__service-title': 'Service name (title).',
      'prop-bj-header__service-tagline': 'Service tagline.',
      'prop-bj-header__tools': 'Shortcuts area (links, actions).',
      'prop-bj-header__tools-link': 'Link inside the tools area.',
      'prop-bj-header__menu-btn': 'Mobile menu button (visible below <code>lg</code>).',
      'prop-bj-header__menu-label': '\u201cMenu\u201d label (hidden on the smallest screens).',
      'prop-bj-header__nav': 'Main navigation panel.',
      'prop-bj-header__nav-list': 'Menu item list.',
      'prop-bj-header__nav-item': 'List item.',
      'prop-bj-header__nav-link': 'Nav link or entry.',
      'prop-bj-header__nav-link--active':
        'Active state; pair with <code>aria-current="page"</code> when appropriate.',
      'a11y-note':
        'Keep the burger button\u2019s <code>aria-expanded</code> in sync with the open <code>nav</code> panel.',
    },
  },
})

const codeComplet = `<header class="bj-header" role="banner">
  <div class="bj-container">
    <div class="bj-header__body">
      <a href="/" class="bj-header__brand">
        <div class="bj-logo"><p>République<br />du Bénin</p></div>
        <div class="bj-header__service">
          <span class="bj-header__service-title">Portail démo</span>
          <span class="bj-header__service-tagline">Démarches en ligne</span>
        </div>
      </a>
      <div class="bj-header__tools">
        <a href="#" class="bj-header__tools-link"><i class="ri-user-line" aria-hidden="true"></i> Mon compte</a>
        <button type="button" class="bj-header__menu-btn" data-bj-header-menu aria-controls="main-nav" aria-expanded="false">
          <i class="ri-menu-line" aria-hidden="true"></i>
          <span class="bj-header__menu-label">Menu</span>
        </button>
      </div>
    </div>
    <nav class="bj-header__nav" id="main-nav" aria-label="Navigation principale">
      <ul class="bj-header__nav-list">
        <li class="bj-header__nav-item">
          <a class="bj-header__nav-link bj-header__nav-link--active" href="#" aria-current="page">Accueil</a>
        </li>
        <li class="bj-header__nav-item">
          <a class="bj-header__nav-link" href="#">Démarches</a>
        </li>
      </ul>
    </nav>
  </div>
</header>`

const codeMinimal = `<header class="bj-header" role="banner">
  <div class="bj-container">
    <div class="bj-header__body">
      <a href="/" class="bj-header__brand">
        <div class="bj-logo"><p>République<br />du Bénin</p></div>
      </a>
      <div class="bj-header__tools">
        <button type="button" class="bj-header__menu-btn" data-bj-header-menu aria-controls="nav-min" aria-expanded="false">
          <i class="ri-menu-line" aria-hidden="true"></i>
          <span class="bj-header__menu-label">Menu</span>
        </button>
      </div>
    </div>
    <nav class="bj-header__nav" id="nav-min" aria-label="Navigation principale">
      <ul class="bj-header__nav-list">
        <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="#">Accueil</a></li>
      </ul>
    </nav>
  </div>
</header>`

const propsRows = computed(() => [
  { name: 'bj-header', description: t('prop-bj-header') },
  { name: 'bj-header__body', description: t('prop-bj-header__body') },
  { name: 'bj-header__brand', description: t('prop-bj-header__brand') },
  { name: 'bj-header__service', description: t('prop-bj-header__service') },
  {
    name: 'bj-header__service-title',
    description: t('prop-bj-header__service-title'),
  },
  {
    name: 'bj-header__service-tagline',
    description: t('prop-bj-header__service-tagline'),
  },
  { name: 'bj-header__tools', description: t('prop-bj-header__tools') },
  {
    name: 'bj-header__tools-link',
    description: t('prop-bj-header__tools-link'),
  },
  { name: 'bj-header__menu-btn', description: t('prop-bj-header__menu-btn') },
  {
    name: 'bj-header__menu-label',
    description: t('prop-bj-header__menu-label'),
  },
  { name: 'bj-header__nav', description: t('prop-bj-header__nav') },
  {
    name: 'bj-header__nav-list',
    description: t('prop-bj-header__nav-list'),
  },
  {
    name: 'bj-header__nav-item',
    description: t('prop-bj-header__nav-item'),
  },
  {
    name: 'bj-header__nav-link',
    description: t('prop-bj-header__nav-link'),
  },
  {
    name: 'bj-header__nav-link--active',
    description: t('prop-bj-header__nav-link--active'),
  },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="sec-exemple" :title="t('section-exemple')">
    <DocsPreview style="padding: 0; overflow: hidden">
      <header class="bj-header" role="banner">
        <div class="bj-container">
          <div class="bj-header__body">
            <a href="#" class="bj-header__brand">
              <div class="bj-logo">
                <p>République<br />du Bénin</p>
              </div>
              <div class="bj-header__service">
                <span class="bj-header__service-title">Portail démo</span>
                <span class="bj-header__service-tagline"
                  >Démarches en ligne</span
                >
              </div>
            </a>
            <div class="bj-header__tools">
              <a href="#" class="bj-header__tools-link"
                ><i class="ri-user-line" aria-hidden="true"></i> Mon
                compte</a
              >
              <button
                type="button"
                class="bj-header__menu-btn"
                data-bj-header-menu
                aria-controls="ex-hnav"
                aria-expanded="false"
              >
                <i class="ri-menu-line" aria-hidden="true"></i>
                <span class="bj-header__menu-label">Menu</span>
              </button>
            </div>
          </div>
          <nav
            class="bj-header__nav"
            id="ex-hnav"
            role="navigation"
            aria-label="Navigation principale"
          >
            <ul class="bj-header__nav-list">
              <li class="bj-header__nav-item">
                <a
                  class="bj-header__nav-link bj-header__nav-link--active"
                  href="#"
                  aria-current="page"
                  >Accueil</a
                >
              </li>
              <li class="bj-header__nav-item">
                <a class="bj-header__nav-link" href="#">Démarches</a>
              </li>
              <li class="bj-header__nav-item">
                <a class="bj-header__nav-link" href="#">Aide</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </DocsPreview>
    <DocsCode :code="codeComplet" />
  </DocsSection>

  <DocsSection id="sec-minimal" :title="t('section-minimal')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      {{ t('section-minimal-p') }}
    </p>
    <DocsPreview style="padding: 0; overflow: hidden">
      <header class="bj-header" role="banner">
        <div class="bj-container">
          <div class="bj-header__body">
            <a href="#" class="bj-header__brand">
              <div class="bj-logo">
                <p>République<br />du Bénin</p>
              </div>
            </a>
            <div class="bj-header__tools">
              <button
                type="button"
                class="bj-header__menu-btn"
                data-bj-header-menu
                aria-controls="ex-hnav-min"
                aria-expanded="false"
              >
                <i class="ri-menu-line" aria-hidden="true"></i>
                <span class="bj-header__menu-label">Menu</span>
              </button>
            </div>
          </div>
          <nav
            class="bj-header__nav"
            id="ex-hnav-min"
            role="navigation"
            aria-label="Navigation principale"
          >
            <ul class="bj-header__nav-list">
              <li class="bj-header__nav-item">
                <a class="bj-header__nav-link" href="#">Accueil</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </DocsPreview>
    <DocsCode :code="codeMinimal" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variantes')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('variantes-desc')"
    />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
