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
      title: 'BjDashboardSidebar',
      desc: 'Sidebar de navigation React pour tableaux de bord : branding, sections, items collapsibles et mode compact.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-brandText': 'Texte de la marque.',
      'prop-brandImg': 'URL de l\'image du logo.',
      'prop-brandHref': 'Lien sur le bloc branding.',
      'prop-sections': 'Tableau de sections avec title et links.',
      'prop-compact': 'Mode compact (icônes seules).',
      'prop-footer': 'ReactNode pour le footer.',
      'prop-aside': 'Attributs aside natifs supplémentaires.',
    },
    en: {
      title: 'BjDashboardSidebar',
      desc: 'React dashboard navigation sidebar: branding, sections, collapsible items and compact mode.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-brandText': 'Brand text.',
      'prop-brandImg': 'Logo image URL.',
      'prop-brandHref': 'Link on the branding block.',
      'prop-sections': 'Array of sections with title and links.',
      'prop-compact': 'Compact mode (icons only).',
      'prop-footer': 'ReactNode for the footer.',
      'prop-aside': 'Extra native aside attributes are forwarded.',
    },
  },
})

const codeUsage = `import { BjDashboardSidebar } from '@flrxnt/dsbj/react'

const sections = [
  {
    title: 'Principal',
    links: [
      { label: 'Tableau de bord', to: '/dashboard', icon: 'ri-dashboard-line', active: true },
      { label: 'Statistiques', to: '/stats', icon: 'ri-bar-chart-line' },
    ],
  },
]

export function Example() {
  return (
    <BjDashboardSidebar
      brandText="Mon App"
      brandImg="/sigle.svg"
      brandHref="/"
      sections={sections}
    />
  )
}`

const propsRows = computed(() => [
  { name: 'brandText', description: t('prop-brandText') },
  { name: 'brandImg', description: t('prop-brandImg') },
  { name: 'brandHref', description: t('prop-brandHref') },
  { name: 'sections', description: t('prop-sections') },
  { name: 'compact', description: t('prop-compact') },
  { name: 'footer', description: t('prop-footer') },
  { name: '(aside props)', description: t('prop-aside') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-dashboard-sidebar-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dashboard-sidebar-preview" :title="t('section-preview')">
    <DocsPreview>
      <div style="height: 20rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <aside class="bj-dashboard-sidebar" style="position: relative; height: 100%;">
          <div class="bj-dashboard-sidebar__brand">
            <img src="/sigle.svg" alt="" class="bj-dashboard-sidebar__brand-img">
            <span class="bj-dashboard-sidebar__brand-text">Mon App</span>
          </div>
          <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard">
            <div class="bj-dashboard-sidebar__section">
              <p class="bj-dashboard-sidebar__section-title">Principal</p>
              <ul class="bj-dashboard-sidebar__list">
                <li class="bj-dashboard-sidebar__item">
                  <a class="bj-dashboard-sidebar__link bj-dashboard-sidebar__link--active" href="#" aria-current="page">
                    <i class="ri-dashboard-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Tableau de bord</span>
                  </a>
                </li>
                <li class="bj-dashboard-sidebar__item">
                  <a class="bj-dashboard-sidebar__link" href="#">
                    <i class="ri-bar-chart-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Statistiques</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-dashboard-sidebar-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
