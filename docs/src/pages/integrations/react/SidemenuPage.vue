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
      title: 'BjSidemenu',
      desc: 'Menu latéral React avec liens, état actif et sous-listes optionnelles.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-no-title': 'Sans titre',
      'section-title': 'Avec title',
      'section-active': 'Lien actif (active)',
      'section-nested': 'children (sous-menu)',
      'section-full': 'Combinaison title + actif + imbrication',
      'section-rest': 'Attributs natifs du nav',
      'desc-no-title': 'Omettre title : le paragraphe .bj-sidemenu__title n’est pas rendu.',
      'desc-title': 'title affiche .bj-sidemenu__title au-dessus de la liste.',
      'desc-active': 'active: true ajoute bj-sidemenu__link--active et aria-current="page" sur le lien.',
      'desc-nested': 'children est un tableau de liens rendu dans .bj-sidemenu__sublist sous le parent.',
      'desc-full': 'Cas typique : rubrique, page courante dans une section, sous-pages.',
      'desc-rest': 'id, className, aria-label supplémentaires sur le <nav> racine.',
      'prop-title': 'Titre optionnel au-dessus des liens.',
      'prop-links':
        'Tableau d\'entrées : label, to, active et children optionnels ; children pour un sous-menu.',
      'prop-nav': 'Attributs nav natifs supplémentaires.',
      'menu-title': 'Dans cette rubrique',
      'nav-aria': 'Menu latéral',
      'm-home': 'Accueil',
      'm-sub': 'Sous-page',
      'm-other': 'Autre page',
      'm-child': 'Sous-élément',
    },
    en: {
      title: 'BjSidemenu',
      desc: 'React side menu with links, active state, and optional nested items.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-no-title': 'Without title',
      'section-title': 'With title',
      'section-active': 'Active link (active)',
      'section-nested': 'children (submenu)',
      'section-full': 'title + active + nesting',
      'section-rest': 'Native nav attributes',
      'desc-no-title': 'Omit title: the .bj-sidemenu__title paragraph is not rendered.',
      'desc-title': 'title renders .bj-sidemenu__title above the list.',
      'desc-active': 'active: true adds bj-sidemenu__link--active and aria-current="page" on the anchor.',
      'desc-nested': 'children is an array of links rendered inside .bj-sidemenu__sublist under the parent.',
      'desc-full': 'Typical case: section title, current page in a branch, nested pages.',
      'desc-rest': 'id, className, extra aria-label on the root <nav>.',
      'prop-title': 'Optional title above the links.',
      'prop-links': 'Array of entries with label, to, optional active and optional children; children for a submenu.',
      'prop-nav': 'Extra native nav attributes are forwarded.',
      'menu-title': 'In this section',
      'nav-aria': 'Side menu',
      'm-home': 'Home',
      'm-sub': 'Subpage',
      'm-other': 'Other page',
      'm-child': 'Child item',
    },
  },
})

const codeUsage = `import { BjSidemenu } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjSidemenu
      title="Rubrique"
      links={[
        { label: 'Accueil', to: '/', active: true },
        {
          label: 'Section',
          to: '/section',
          children: [{ label: 'Sous-page', to: '/section/sous' }],
        },
      ]}
    />
  )
}`

const codeNoTitle = `import { BjSidemenu } from '@flrxnt/dsbj/react'

export function NoTitle() {
  return (
    <BjSidemenu
      links={[
        { label: 'Vue d’ensemble', to: '/vue' },
        { label: 'Statistiques', to: '/stats' },
      ]}
    />
  )
}`

const codeTitle = `import { BjSidemenu } from '@flrxnt/dsbj/react'

export function WithTitle() {
  return (
    <BjSidemenu
      title="Démarches en ligne"
      links={[
        { label: 'Liste', to: '/demarches' },
        { label: 'Suivi', to: '/suivi' },
      ]}
    />
  )
}`

const codeActive = `import { BjSidemenu } from '@flrxnt/dsbj/react'

export function WithActive() {
  return (
    <BjSidemenu
      links={[
        { label: 'Étape 1', to: '/etape-1' },
        { label: 'Étape 2', to: '/etape-2', active: true },
        { label: 'Étape 3', to: '/etape-3' },
      ]}
    />
  )
}`

const codeNested = `import { BjSidemenu } from '@flrxnt/dsbj/react'

export function Nested() {
  return (
    <BjSidemenu
      links={[
        {
          label: 'Parent',
          to: '/parent',
          children: [
            { label: 'Enfant A', to: '/parent/a' },
            { label: 'Enfant B', to: '/parent/b', active: true },
          ],
        },
      ]}
    />
  )
}`

const codeFull = `import { BjSidemenu } from '@flrxnt/dsbj/react'

export function FullMenu() {
  return (
    <BjSidemenu
      title="Mon dossier"
      aria-label="Navigation latérale du dossier"
      links={[
        { label: 'Résumé', to: '/dossier', active: true },
        {
          label: 'Pièces',
          to: '/dossier/pieces',
          children: [
            { label: 'À fournir', to: '/dossier/pieces/manquantes' },
            { label: 'Déposées', to: '/dossier/pieces/deposees' },
          ],
        },
        { label: 'Historique', to: '/dossier/historique' },
      ]}
    />
  )
}`

const codeRest = `import { BjSidemenu } from '@flrxnt/dsbj/react'

export function WithNativeAttrs() {
  return (
    <BjSidemenu
      id="sidebar-nav"
      className="layout-sidebar__nav"
      data-testid="sidemenu"
      links={[{ label: 'Accueil', to: '/' }]}
    />
  )
}`

const propsRows = computed(() => [
  { name: 'title', description: t('prop-title') },
  { name: 'links', description: t('prop-links') },
  { name: '(nav props)', description: t('prop-nav') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-sidemenu-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-sidemenu-preview" :title="t('section-preview')">
    <DocsPreview>
      <nav class="bj-sidemenu" :aria-label="t('nav-aria')">
        <p class="bj-sidemenu__title">{{ t('menu-title') }}</p>
        <ul class="bj-sidemenu__list">
          <li class="bj-sidemenu__item">
            <a class="bj-sidemenu__link bj-sidemenu__link--active" href="#" aria-current="page">{{ t('m-home') }}</a>
            <ul class="bj-sidemenu__sublist">
              <li class="bj-sidemenu__item">
                <a class="bj-sidemenu__link" href="#">{{ t('m-child') }}</a>
              </li>
            </ul>
          </li>
          <li class="bj-sidemenu__item">
            <a class="bj-sidemenu__link" href="#">{{ t('m-sub') }}</a>
          </li>
          <li class="bj-sidemenu__item">
            <a class="bj-sidemenu__link" href="#">{{ t('m-other') }}</a>
          </li>
        </ul>
      </nav>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-sidemenu-no-title" :title="t('section-no-title')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-no-title') }}</p>
    <DocsCode :code="codeNoTitle" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-sidemenu-title" :title="t('section-title')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-title') }}</p>
    <DocsCode :code="codeTitle" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-sidemenu-active" :title="t('section-active')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-active') }}</p>
    <DocsCode :code="codeActive" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-sidemenu-nested" :title="t('section-nested')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-nested') }}</p>
    <DocsCode :code="codeNested" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-sidemenu-full" :title="t('section-full')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-full') }}</p>
    <DocsCode :code="codeFull" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-sidemenu-rest" :title="t('section-rest')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-rest') }}</p>
    <DocsCode :code="codeRest" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-sidemenu-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
