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
      desc: 'En-tête institutionnel avec marque, nom de service, outils et navigation ; menu mobile intégré.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-serviceName': 'Titre du service affiché à côté du logo.',
      'prop-serviceTagline': 'Sous-titre ou baseline sous le nom du service.',
      'preview-service': 'Mon service',
      'preview-tagline': 'Portail des démarches',
      'preview-menu': 'Menu',
      'preview-nav-aria': 'Navigation principale',
      'preview-nav-home': 'Accueil',
      'preview-nav-services': 'Services',
    },
    en: {
      title: 'BjHeader',
      desc: 'Institutional header with brand, service name, tools, and navigation; built-in mobile menu.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-serviceName': 'Service title shown next to the logo.',
      'prop-serviceTagline': 'Subtitle or tagline under the service name.',
      'preview-service': 'My service',
      'preview-tagline': 'Procedures portal',
      'preview-menu': 'Menu',
      'preview-nav-aria': 'Main navigation',
      'preview-nav-home': 'Home',
      'preview-nav-services': 'Services',
    },
  },
})

const codeUsage = `<script setup>
import { BjHeader } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjHeader service-name="Mon service" service-tagline="Portail des démarches">
    <template #logo>
      <span class="bj-logo"><!-- sigle ou image --></span>
    </template>
    <template #tools>
      <a href="#" class="bj-header__tools-link">Aide</a>
    </template>
    <template #nav>
      <li class="bj-header__nav-item">
        <a class="bj-header__nav-link" href="#">Accueil</a>
      </li>
    </template>
  </BjHeader>
</template>`

const propsRows = computed(() => [
  { name: 'serviceName', description: t('prop-serviceName') },
  { name: 'serviceTagline', description: t('prop-serviceTagline') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-header-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-header-preview" :title="t('section-preview')">
    <DocsPreview>
      <header class="bj-header">
        <div class="bj-container">
          <div class="bj-header__body">
            <a class="bj-header__brand" href="#">
              <div class="bj-header__service">
                <span class="bj-header__service-title">{{ t('preview-service') }}</span>
                <span class="bj-header__service-tagline">{{ t('preview-tagline') }}</span>
              </div>
            </a>
            <div class="bj-header__tools">
              <button type="button" class="bj-header__menu-btn" aria-expanded="false">
                <i class="ri-menu-line" aria-hidden="true" />
                <span class="bj-header__menu-label">{{ t('preview-menu') }}</span>
              </button>
            </div>
          </div>
          <nav class="bj-header__nav" :aria-label="t('preview-nav-aria')">
            <ul class="bj-header__nav-list">
              <li class="bj-header__nav-item">
                <a class="bj-header__nav-link" href="#">{{ t('preview-nav-home') }}</a>
              </li>
              <li class="bj-header__nav-item">
                <a class="bj-header__nav-link" href="#">{{ t('preview-nav-services') }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-header-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
