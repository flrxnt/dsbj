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
      'section-service': 'serviceName et serviceTagline',
      'section-logo': 'Prop logo',
      'section-tools': 'Prop tools',
      'section-nav': 'Prop nav (éléments li)',
      'section-children': 'Prop children',
      'section-full': 'Composition complète',
      'section-rest': 'Attributs natifs du header',
      'desc-service':
        'Sans serviceName, le bloc titre/sous-titre est omis. Le tagline n’apparaît que si serviceName est défini.',
      'desc-logo': 'Contenu ReactNode à gauche dans la marque (souvent BjLogo). Peut être utilisé seul avec nav.',
      'desc-tools': 'Raccourcis avant le bouton menu (liens, boutons). Le bouton menu est toujours rendu.',
      'desc-nav': 'Fragments de <li className="bj-header__nav-item">… à injecter dans le ul interne.',
      'desc-children': 'Rendu après la nav, toujours dans le conteneur .bj-container.',
      'desc-full': 'Toutes les zones optionnelles combinées.',
      'desc-rest':
        'Les props HTML du header (id, role, data-*, onClick sur le root si besoin) sont fusionnées sur l’élément <header>.',
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
      'section-service': 'serviceName and serviceTagline',
      'section-logo': 'logo prop',
      'section-tools': 'tools prop',
      'section-nav': 'nav prop (li items)',
      'section-children': 'children prop',
      'section-full': 'Full composition',
      'section-rest': 'Native header attributes',
      'desc-service':
        'Without serviceName, the title block is omitted. Tagline only renders when serviceName is set.',
      'desc-logo': 'ReactNode for the brand area (often BjLogo). Can be used with nav alone.',
      'desc-tools': 'Shortcuts before the menu button. The menu toggle is always rendered.',
      'desc-nav': 'Fragments of <li className="bj-header__nav-item">… placed inside the internal ul.',
      'desc-children': 'Rendered after the nav, still inside .bj-container.',
      'desc-full': 'All optional slots combined.',
      'desc-rest':
        'Header HTML props (id, role, data-*, root onClick if needed) are spread onto the root <header>.',
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

const codeService = `import { BjHeader } from '@flrxnt/dsbj/react'

export function ServiceOnly() {
  return (
    <BjHeader
      serviceName="Ministère"
      serviceTagline="Une république au service des citoyens"
      nav={
        <li className="bj-header__nav-item">
          <a className="bj-header__nav-link" href="/">Accueil</a>
        </li>
      }
    />
  )
}

export function TitleWithoutTagline() {
  return (
    <BjHeader
      serviceName="Sans baseline"
      nav={
        <li className="bj-header__nav-item">
          <a className="bj-header__nav-link" href="/">Accueil</a>
        </li>
      }
    />
  )
}`

const codeLogo = `import { BjHeader, BjLogo } from '@flrxnt/dsbj/react'

export function WithBjLogo() {
  return (
    <BjHeader
      logo={
        <BjLogo href="/" motto="République du Bénin" tagline="Portail" />
      }
      nav={
        <li className="bj-header__nav-item">
          <a className="bj-header__nav-link" href="/">Accueil</a>
        </li>
      }
    />
  )
}`

const codeTools = `import { BjHeader } from '@flrxnt/dsbj/react'

export function WithTools() {
  return (
    <BjHeader
      tools={
        <>
          <a href="/aide" className="bj-header__tools-link">Aide</a>
          <button type="button" className="bj-header__tools-link">FR</button>
        </>
      }
      nav={
        <li className="bj-header__nav-item">
          <a className="bj-header__nav-link" href="/">Accueil</a>
        </li>
      }
    />
  )
}`

const codeNav = `import { BjHeader } from '@flrxnt/dsbj/react'

export function RichNav() {
  return (
    <BjHeader
      nav={
        <>
          <li className="bj-header__nav-item">
            <a className="bj-header__nav-link bj-header__nav-link--active" href="/" aria-current="page">
              Accueil
            </a>
          </li>
          <li className="bj-header__nav-item">
            <a className="bj-header__nav-link" href="/services">Services</a>
          </li>
          <li className="bj-header__nav-item">
            <a className="bj-header__nav-link" href="/contact">Contact</a>
          </li>
        </>
      }
    />
  )
}`

const codeChildren = `import { BjHeader } from '@flrxnt/dsbj/react'

export function WithChildren() {
  return (
    <BjHeader
      nav={
        <li className="bj-header__nav-item">
          <a className="bj-header__nav-link" href="/">Accueil</a>
        </li>
      }
    >
      <p className="bj-text-sm" style={{ marginTop: '1rem' }}>
        Bandeau ou alerte sous la navigation.
      </p>
    </BjHeader>
  )
}`

const codeFull = `import { BjHeader, BjLogo } from '@flrxnt/dsbj/react'

export function FullHeader() {
  return (
    <BjHeader
      id="site-header"
      data-testid="app-header"
      serviceName="Portail"
      serviceTagline="Démarches"
      logo={<BjLogo size="lg" href="/" src="/sigle.svg" alt="Bénin" />}
      tools={
        <a href="/compte" className="bj-header__tools-link">
          <i className="ri-user-line" aria-hidden="true" /> Compte
        </a>
      }
      nav={
        <>
          <li className="bj-header__nav-item">
            <a className="bj-header__nav-link" href="/">Accueil</a>
          </li>
          <li className="bj-header__nav-item">
            <a className="bj-header__nav-link" href="/démarches">Démarches</a>
          </li>
        </>
      }
    >
      <div className="bj-container" style={{ paddingBottom: '0.5rem' }}>
        <span className="bj-badge">Bêta</span>
      </div>
    </BjHeader>
  )
}`

const codeRest = `import { BjHeader } from '@flrxnt/dsbj/react'

export function WithNativeAttrs() {
  return (
    <BjHeader
      className="my-header"
      role="banner"
      aria-label="En-tête du site"
      data-analytics="header-v2"
      nav={
        <li className="bj-header__nav-item">
          <a className="bj-header__nav-link" href="/">Accueil</a>
        </li>
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

  <DocsSection id="react-header-service" :title="t('section-service')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-service') }}</p>
    <DocsCode :code="codeService" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-header-logo" :title="t('section-logo')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-logo') }}</p>
    <DocsCode :code="codeLogo" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-header-tools" :title="t('section-tools')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-tools') }}</p>
    <DocsCode :code="codeTools" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-header-nav" :title="t('section-nav')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-nav') }}</p>
    <DocsCode :code="codeNav" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-header-children" :title="t('section-children')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-children') }}</p>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-header-full" :title="t('section-full')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-full') }}</p>
    <DocsCode :code="codeFull" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-header-rest" :title="t('section-rest')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-rest') }}</p>
    <DocsCode :code="codeRest" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-header-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
