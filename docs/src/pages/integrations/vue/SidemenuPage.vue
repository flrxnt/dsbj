<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjSidemenu } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjSidemenu',
      desc: 'Menu latéral : title optionnel, links obligatoire (label, to, active?, children?). Les enfants rendent une sous-liste.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-title-absent': 'Sans title',
      'section-title-present': 'Avec title',
      'section-links-flat': 'Liens plats',
      'section-links-nested': 'Liens avec children',
      'section-active-parent-child': 'active sur parent et enfant',
      'prop-title': 'Titre optionnel au-dessus des liens.',
      'prop-links':
        'Tableau d’entrées : label, to, active et children optionnels ; children : sous-liens (même forme, sans sous-sous-liste dans le composant).',
      'menu-title': 'Dans cette rubrique',
      'nav-aria': 'Menu latéral',
      'm-home': 'Accueil',
      'm-sub': 'Sous-page',
      'm-other': 'Autre page',
      'm-child': 'Sous-élément',
      'm-section': 'Section',
    },
    en: {
      title: 'BjSidemenu',
      desc: 'Side menu: optional title, required links (label, to, active?, children?). Children render a nested list.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-title-absent': 'Without title',
      'section-title-present': 'With title',
      'section-links-flat': 'Flat links',
      'section-links-nested': 'Links with children',
      'section-active-parent-child': 'active on parent and child',
      'prop-title': 'Optional title above the links.',
      'prop-links':
        'Array of entries with label, to, optional active and optional children; children are sub-links (same shape; no deeper nesting in the component).',
      'menu-title': 'In this section',
      'nav-aria': 'Side menu',
      'm-home': 'Home',
      'm-sub': 'Subpage',
      'm-other': 'Other page',
      'm-child': 'Child item',
      'm-section': 'Section',
    },
  },
})

const codeUsage = `<script setup>
import { BjSidemenu } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjSidemenu
    title="Rubrique"
    :links="[
      { label: 'Accueil', to: '/', active: true },
      {
        label: 'Section',
        to: '/section',
        children: [{ label: 'Sous-page', to: '/section/sous' }],
      },
    ]"
  />
</template>`

const codeNoTitle = `<BjSidemenu
  :links="[
    { label: 'Accueil', to: '/' },
    { label: 'Contact', to: '/contact' },
  ]"
/>`

const codeTitle = `<BjSidemenu
  title="Dans cette rubrique"
  :links="[{ label: 'Page', to: '/p' }]"
/>`

const codeNested = `<BjSidemenu
  :links="[
    {
      label: 'Section',
      to: '/section',
      children: [
        { label: 'Enfant A', to: '/section/a' },
        { label: 'Enfant B', to: '/section/b' },
      ],
    },
  ]"
/>`

const codeActive = `<BjSidemenu
  :links="[
    { label: 'Accueil', to: '/', active: true },
    { label: 'Sous', to: '/s', children: [{ label: 'Actif', to: '/s/a', active: true }] },
  ]"
/>`

const linksFlat = computed(() => [
  { label: t('m-home'), to: '#', active: false },
  { label: t('m-other'), to: '#', active: true },
  { label: t('m-sub'), to: '#' },
])

const linksNested = computed(() => [
  {
    label: t('m-section'),
    to: '#',
    children: [
      { label: t('m-child'), to: '#' },
      { label: t('m-sub'), to: '#' },
    ],
  },
  { label: t('m-other'), to: '#' },
])

const linksActiveDemo = computed(() => [
  { label: t('m-home'), to: '#', active: true },
  {
    label: t('m-section'),
    to: '#',
    children: [{ label: t('m-child'), to: '#', active: true }],
  },
])

const propsRows = computed(() => [
  { name: 'title', description: t('prop-title') },
  { name: 'links', description: t('prop-links') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-sidemenu-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-sidemenu-preview" :title="t('section-preview')">
    <DocsPreview>
      <BjSidemenu :aria-label="t('nav-aria')" :title="t('menu-title')" :links="linksNested" />
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-sidemenu-no-title" :title="t('section-title-absent')">
    <DocsPreview>
      <BjSidemenu :links="linksFlat" />
    </DocsPreview>
    <DocsCode :code="codeNoTitle" lang="html" />
  </DocsSection>

  <DocsSection id="vue-sidemenu-with-title" :title="t('section-title-present')">
    <DocsPreview>
      <BjSidemenu :title="t('menu-title')" :links="linksFlat" />
    </DocsPreview>
    <DocsCode :code="codeTitle" lang="html" />
  </DocsSection>

  <DocsSection id="vue-sidemenu-flat" :title="t('section-links-flat')">
    <DocsPreview>
      <BjSidemenu :title="t('menu-title')" :links="linksFlat" />
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-sidemenu-nested" :title="t('section-links-nested')">
    <DocsPreview>
      <BjSidemenu :title="t('menu-title')" :links="linksNested" />
    </DocsPreview>
    <DocsCode :code="codeNested" lang="html" />
  </DocsSection>

  <DocsSection id="vue-sidemenu-active" :title="t('section-active-parent-child')">
    <DocsPreview>
      <BjSidemenu :title="t('menu-title')" :links="linksActiveDemo" />
    </DocsPreview>
    <DocsCode :code="codeActive" lang="html" />
  </DocsSection>

  <DocsSection id="vue-sidemenu-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
