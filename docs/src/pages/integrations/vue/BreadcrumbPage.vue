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
      title: 'BjBreadcrumb',
      desc: 'Fil d’Ariane : liste d’éléments ; le dernier sans lien est la page courante.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'breadcrumb-prop-items':
        'Tableau d’objets avec label et to optionnel. Les entrées avec to (sauf la dernière) sont rendues comme liens.',
      'bc-home': 'Accueil',
      'bc-section': 'Rubrique',
      'bc-page': 'Page actuelle',
      'bc-aria': 'Fil d’Ariane',
    },
    en: {
      title: 'BjBreadcrumb',
      desc: 'Breadcrumb trail: item list; the last item without a link is the current page.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'breadcrumb-prop-items':
        'Array of objects with label and optional to. Entries with to (except the last) are rendered as links.',
      'bc-home': 'Home',
      'bc-section': 'Section',
      'bc-page': 'Current page',
      'bc-aria': 'Breadcrumb',
    },
  },
})

const codeUsage = `<script setup>
import { BjBreadcrumb } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjBreadcrumb
    :items="[
      { label: 'Accueil', to: '/' },
      { label: 'Rubrique', to: '/rubrique' },
      { label: 'Page actuelle' },
    ]"
  />
</template>`

const propsRows = computed(() => [{ name: 'items', description: t('breadcrumb-prop-items') }])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-breadcrumb-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-breadcrumb-preview" :title="t('section-preview')">
    <DocsPreview>
      <nav class="bj-breadcrumb" :aria-label="t('bc-aria')">
        <ol class="bj-breadcrumb__list">
          <li class="bj-breadcrumb__item">
            <a class="bj-breadcrumb__link" href="#">{{ t('bc-home') }}</a>
          </li>
          <li class="bj-breadcrumb__item">
            <a class="bj-breadcrumb__link" href="#">{{ t('bc-section') }}</a>
          </li>
          <li class="bj-breadcrumb__item">
            <span aria-current="page">{{ t('bc-page') }}</span>
          </li>
        </ol>
      </nav>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-breadcrumb-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
