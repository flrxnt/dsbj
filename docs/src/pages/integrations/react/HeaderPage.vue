<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjHeader',
      desc:
        'En-tête institutionnel React avec marque, raccourcis, bouton menu mobile et liste de navigation. L’état du menu est géré en interne.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-serviceName': 'Titre du service affiché à côté du logo.',
      'prop-serviceTagline': 'Sous-titre optionnel sous le titre du service.',
      'prop-logo': 'Contenu React pour le bloc logo (souvent BjLogo ou image).',
      'prop-tools': 'Raccourcis à droite (liens, boutons) avant le bouton menu.',
      'prop-nav': 'Contenu des éléments de liste : passer des balises li avec liens pour remplir bj-header__nav-list.',
      'prop-children': 'Contenu rendu après la navigation, dans le conteneur.',
      'prop-rest': 'Attributs natifs du header et className fusionnés sur l’élément racine.',
    },
    en: {
      title: 'BjHeader',
      desc:
        'Institutional React header with brand, shortcuts, mobile menu toggle, and nav list. Menu open state is handled internally.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-serviceName': 'Service title shown next to the logo.',
      'prop-serviceTagline': 'Optional tagline below the service title.',
      'prop-logo': 'React node for the logo area (often BjLogo or an image).',
      'prop-tools': 'Shortcuts on the right (links, buttons) before the menu button.',
      'prop-nav': 'List item content: pass li elements with links to populate bj-header__nav-list.',
      'prop-children': 'Content rendered after the nav, still inside the container.',
      'prop-rest': 'Native header attributes and className merged on the root element.',
    },
  },
})

const codeUsage = `import { BjHeader } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjHeader
      serviceName="Portail démo"
      serviceTagline="Démarches en ligne"
      logo={
        <div className="bj-logo">
          <p>
            République
            <br />
            du Bénin
          </p>
        </div>
      }
      tools={
        <a href="/compte" className="bj-header__tools-link">
          <i className="ri-user-line" aria-hidden="true" />
          Mon compte
        </a>
      }
      nav={
        <>
          <li className="bj-header__nav-item">
            <a className="bj-header__nav-link" href="/">
              Accueil
            </a>
          </li>
          <li className="bj-header__nav-item">
            <a className="bj-header__nav-link" href="/demarches">
              Démarches
            </a>
          </li>
        </>
      }
    />
  )
}`

const propsRows = computed(() => [
  { name: 'serviceName', description: t('prop-serviceName') },
  { name: 'serviceTagline', description: t('prop-serviceTagline') },
  { name: 'logo', description: t('prop-logo') },
  { name: 'tools', description: t('prop-tools') },
  { name: 'nav', description: t('prop-nav') },
  { name: 'children', description: t('prop-children') },
  { name: '…rest', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-header-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-header-preview" :title="t('section-preview')">
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
                <span class="bj-header__service-tagline">Démarches en ligne</span>
              </div>
            </a>
            <div class="bj-header__tools">
              <a href="#" class="bj-header__tools-link">
                <i class="ri-user-line" aria-hidden="true"></i>
                Mon compte
              </a>
              <button type="button" class="bj-header__menu-btn" aria-expanded="false">
                <i class="ri-menu-line" aria-hidden="true"></i>
                <span class="bj-header__menu-label">Menu</span>
              </button>
            </div>
          </div>
          <nav class="bj-header__nav" aria-label="Navigation principale">
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
      </header>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-header-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
