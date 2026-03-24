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
        'Identité de l’État, service ou portail, raccourcis et navigation ; bande tricolore en haut.',
      'section-exemple': 'Exemple',
      'section-variantes': 'Variantes',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'variantes-desc':
        'Sur mobile, <code>data-bj-header-menu</code> avec <code>aria-controls</code> vers l’<code>id</code> du <code>nav</code> ouvre le menu (<code>data-bj-expanded</code> sur le nav).',
      'prop-bj-header': 'En-tête (bande tricolore).',
      'prop-bj-header__body': 'Ligne marque / outils.',
      'prop-bj-header__brand': 'Lien d’accueil.',
      'prop-bj-header__service': 'Bloc titre service.',
      'prop-bj-header__tools': 'Raccourcis.',
      'prop-bj-header__menu-btn': 'Menu mobile.',
      'prop-bj-header__nav': 'Navigation.',
      'a11y-note':
        'Synchronisez <code>aria-expanded</code> du bouton burger avec l’ouverture du panneau.',
    },
    en: {
      title: 'Page header',
      desc:
        'Institutional identity, service or portal, shortcuts and navigation; tricolor band at the top.',
      'section-exemple': 'Example',
      'section-variantes': 'Variants',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'variantes-desc':
        'On mobile, <code>data-bj-header-menu</code> with <code>aria-controls</code> pointing to the <code>nav</code> <code>id</code> opens the menu (<code>data-bj-expanded</code> on the nav).',
      'prop-bj-header': 'Header (tricolor band).',
      'prop-bj-header__body': 'Brand / tools row.',
      'prop-bj-header__brand': 'Home link.',
      'prop-bj-header__service': 'Service title block.',
      'prop-bj-header__tools': 'Shortcuts.',
      'prop-bj-header__menu-btn': 'Mobile menu.',
      'prop-bj-header__nav': 'Navigation.',
      'a11y-note':
        'Keep the burger button’s <code>aria-expanded</code> in sync with the panel open state.',
    },
  },
})

const codeExemple = `<header class="bj-header" role="banner">…</header>`

const propsRows = computed(() => [
  { name: 'bj-header', description: t('prop-bj-header') },
  { name: 'bj-header__body', description: t('prop-bj-header__body') },
  { name: 'bj-header__brand', description: t('prop-bj-header__brand') },
  { name: 'bj-header__service', description: t('prop-bj-header__service') },
  {
    name: 'bj-header__tools / bj-header__tools-link',
    description: t('prop-bj-header__tools'),
  },
  { name: 'bj-header__menu-btn', description: t('prop-bj-header__menu-btn') },
  {
    name: 'bj-header__nav / bj-header__nav-list / bj-header__nav-link',
    description: t('prop-bj-header__nav'),
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
                <i class="ri-menu-line" aria-hidden="true"></i> Menu
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
                  ><span data-i18n="nav.home">Accueil</span></a
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
    <DocsCode :code="codeExemple" />
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
