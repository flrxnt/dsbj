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
      title: 'Dashboard Sidebar',
      desc: 'Navigation latérale pour tableaux de bord avec branding, sections de liens, items collapsibles et mode compact.',
      'sec-default': 'Sidebar par défaut',
      'sec-compact': 'Mode compact',
      'sec-classes': 'Classes CSS',
      'class-root': 'Conteneur principal de la sidebar',
      'class-compact': 'Modificateur : mode compact, icônes seules',
      'class-brand': 'Zone de branding (logo + texte)',
      'class-brand-img': 'Image du logo',
      'class-brand-text': 'Texte de la marque',
      'class-nav': 'Zone de navigation scrollable',
      'class-section': 'Groupe de liens',
      'class-section-title': 'Titre de section (uppercase)',
      'class-list': 'Liste de liens',
      'class-item': 'Élément de liste',
      'class-link': 'Lien de navigation',
      'class-link-active': 'Modificateur : lien actif',
      'class-link-icon': 'Icône du lien',
      'class-link-label': 'Libellé du lien',
      'class-btn': 'Bouton collapsible',
      'class-sublist': 'Sous-liste de liens',
      'class-footer': 'Pied de la sidebar',
    },
    en: {
      title: 'Dashboard Sidebar',
      desc: 'Side navigation for dashboards with branding, link sections, collapsible items and compact mode.',
      'sec-default': 'Default sidebar',
      'sec-compact': 'Compact mode',
      'sec-classes': 'CSS classes',
      'class-root': 'Main sidebar container',
      'class-compact': 'Modifier: compact mode, icons only',
      'class-brand': 'Branding area (logo + text)',
      'class-brand-img': 'Logo image',
      'class-brand-text': 'Brand text',
      'class-nav': 'Scrollable navigation area',
      'class-section': 'Link group',
      'class-section-title': 'Section title (uppercase)',
      'class-list': 'Link list',
      'class-item': 'List item',
      'class-link': 'Navigation link',
      'class-link-active': 'Modifier: active link',
      'class-link-icon': 'Link icon',
      'class-link-label': 'Link label',
      'class-btn': 'Collapsible button',
      'class-sublist': 'Nested link list',
      'class-footer': 'Sidebar footer',
    },
  },
})

const htmlCode = `<aside class="bj-dashboard-sidebar">
  <a class="bj-dashboard-sidebar__brand" href="/">
    <img src="/sigle.svg" alt="" class="bj-dashboard-sidebar__brand-img">
    <span class="bj-dashboard-sidebar__brand-text">Mon Dashboard</span>
  </a>
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
</aside>`

const classesRows = computed(() => [
  { name: 'bj-dashboard-sidebar', description: t('class-root') },
  { name: 'bj-dashboard-sidebar--compact', description: t('class-compact') },
  { name: 'bj-dashboard-sidebar__brand', description: t('class-brand') },
  { name: 'bj-dashboard-sidebar__brand-img', description: t('class-brand-img') },
  { name: 'bj-dashboard-sidebar__brand-text', description: t('class-brand-text') },
  { name: 'bj-dashboard-sidebar__nav', description: t('class-nav') },
  { name: 'bj-dashboard-sidebar__section', description: t('class-section') },
  { name: 'bj-dashboard-sidebar__section-title', description: t('class-section-title') },
  { name: 'bj-dashboard-sidebar__list', description: t('class-list') },
  { name: 'bj-dashboard-sidebar__item', description: t('class-item') },
  { name: 'bj-dashboard-sidebar__link', description: t('class-link') },
  { name: 'bj-dashboard-sidebar__link--active', description: t('class-link-active') },
  { name: 'bj-dashboard-sidebar__link-icon', description: t('class-link-icon') },
  { name: 'bj-dashboard-sidebar__link-label', description: t('class-link-label') },
  { name: 'bj-dashboard-sidebar__btn', description: t('class-btn') },
  { name: 'bj-dashboard-sidebar__sublist', description: t('class-sublist') },
  { name: 'bj-dashboard-sidebar__footer', description: t('class-footer') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="sec-default" :title="t('sec-default')">
    <DocsPreview>
      <div style="height: 24rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <aside class="bj-dashboard-sidebar" style="position: relative; height: 100%;">
          <div class="bj-dashboard-sidebar__brand">
            <img src="/sigle.svg" alt="" class="bj-dashboard-sidebar__brand-img">
            <span class="bj-dashboard-sidebar__brand-text">Mon Dashboard</span>
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
                <li class="bj-dashboard-sidebar__item">
                  <a class="bj-dashboard-sidebar__link" href="#">
                    <i class="ri-settings-3-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Paramètres</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </DocsPreview>
    <DocsCode :code="htmlCode" />
  </DocsSection>

  <DocsSection id="sec-classes" :title="t('sec-classes')">
    <DocsPropsTable :rows="classesRows" />
  </DocsSection>
</template>
