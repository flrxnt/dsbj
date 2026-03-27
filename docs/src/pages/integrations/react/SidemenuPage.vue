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
      'prop-title': 'Titre optionnel au-dessus des liens.',
      'prop-links': 'Tableau d\'entrées : label, to, active et children optionnels ; children pour un sous-menu.',
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

  <DocsSection id="react-sidemenu-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
