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
      title: 'BjNavigation',
      desc: 'Conteneur de navigation React : liste de liens via children (structure .bj-nav__item / .bj-nav__link).',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-basic': 'Liste de li (children)',
      'section-aria': 'aria-label et props nav',
      'section-active': 'Lien courant',
      'section-many': 'Plusieurs entrées',
      'desc-basic': 'Chaque entrée est un li.bj-nav__item contenant une ancre .bj-nav__link.',
      'desc-aria':
        'Le composant définit aria-label="Navigation" par défaut ; passez aria-label sur BjNavigation pour le remplacer (spread après la valeur par défaut dans le code source : vos props peuvent surcharger).',
      'desc-active': 'Utilisez aria-current="page" et une classe d’état sur le lien actif.',
      'desc-many': 'Navigation horizontale typique avec plusieurs rubriques.',
      'prop-children': 'Éléments li.bj-nav__item à placer dans le ul interne.',
      'prop-nav': 'Attributs nav natifs supplémentaires (aria-label, id, className, etc.).',
      'nav-aria': 'Navigation',
      'nav-home': 'Accueil',
      'nav-services': 'Services',
      'nav-contact': 'Contact',
    },
    en: {
      title: 'BjNavigation',
      desc: 'React navigation wrapper: link list via children (.bj-nav__item / .bj-nav__link structure).',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-basic': 'List of li (children)',
      'section-aria': 'aria-label and nav props',
      'section-active': 'Current link',
      'section-many': 'Multiple items',
      'desc-basic': 'Each entry is a li.bj-nav__item wrapping an anchor .bj-nav__link.',
      'desc-aria':
        'The component sets aria-label="Navigation" by default; pass aria-label on BjNavigation to override (rest props are spread on nav and can override defaults depending on merge order in implementation).',
      'desc-active': 'Use aria-current="page" and a state class on the active link.',
      'desc-many': 'Typical horizontal nav with several sections.',
      'prop-children': 'li.bj-nav__item nodes inside the internal ul.',
      'prop-nav': 'Extra native nav attributes (aria-label, id, className, etc.).',
      'nav-aria': 'Navigation',
      'nav-home': 'Home',
      'nav-services': 'Services',
      'nav-contact': 'Contact',
    },
  },
})

const codeUsage = `import { BjNavigation } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjNavigation>
      <li className="bj-nav__item">
        <a className="bj-nav__link" href="#">Accueil</a>
      </li>
      <li className="bj-nav__item">
        <a className="bj-nav__link" href="#">Services</a>
      </li>
    </BjNavigation>
  )
}`

const codeBasic = `import { BjNavigation } from '@flrxnt/dsbj/react'

export function TwoLinks() {
  return (
    <BjNavigation>
      <li className="bj-nav__item">
        <a className="bj-nav__link" href="/">Home</a>
      </li>
      <li className="bj-nav__item">
        <a className="bj-nav__link" href="/about">About</a>
      </li>
    </BjNavigation>
  )
}`

const codeAria = `import { BjNavigation } from '@flrxnt/dsbj/react'

export function LabeledNav() {
  return (
    <BjNavigation aria-label="Navigation secondaire" id="subnav" className="app-subnav">
      <li className="bj-nav__item">
        <a className="bj-nav__link" href="/profil">Profil</a>
      </li>
      <li className="bj-nav__item">
        <a className="bj-nav__link" href="/parametres">Paramètres</a>
      </li>
    </BjNavigation>
  )
}`

const codeActive = `import { BjNavigation } from '@flrxnt/dsbj/react'

export function WithCurrent() {
  return (
    <BjNavigation aria-label="Menu principal">
      <li className="bj-nav__item">
        <a className="bj-nav__link bj-nav__link--active" href="/" aria-current="page">
          Accueil
        </a>
      </li>
      <li className="bj-nav__item">
        <a className="bj-nav__link" href="/demarches">Démarches</a>
      </li>
    </BjNavigation>
  )
}`

const codeMany = `import { BjNavigation } from '@flrxnt/dsbj/react'

const items = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/actualites', label: 'Actualités' },
  { href: '/contact', label: 'Contact' },
] as const

export function MappedNav() {
  return (
    <BjNavigation>
      {items.map(({ href, label }) => (
        <li key={href} className="bj-nav__item">
          <a className="bj-nav__link" href={href}>{label}</a>
        </li>
      ))}
    </BjNavigation>
  )
}`

const propsRows = computed(() => [
  { name: 'children', description: t('prop-children') },
  { name: '(nav props)', description: t('prop-nav') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-navigation-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-navigation-preview" :title="t('section-preview')">
    <DocsPreview>
      <nav class="bj-nav" :aria-label="t('nav-aria')">
        <ul class="bj-nav__list">
          <li class="bj-nav__item">
            <a class="bj-nav__link" href="#">{{ t('nav-home') }}</a>
          </li>
          <li class="bj-nav__item">
            <a class="bj-nav__link" href="#">{{ t('nav-services') }}</a>
          </li>
          <li class="bj-nav__item">
            <a class="bj-nav__link" href="#">{{ t('nav-contact') }}</a>
          </li>
        </ul>
      </nav>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-navigation-basic" :title="t('section-basic')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-basic') }}</p>
    <DocsCode :code="codeBasic" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-navigation-aria" :title="t('section-aria')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-aria') }}</p>
    <DocsCode :code="codeAria" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-navigation-active" :title="t('section-active')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-active') }}</p>
    <DocsCode :code="codeActive" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-navigation-many" :title="t('section-many')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-many') }}</p>
    <DocsCode :code="codeMany" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-navigation-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
