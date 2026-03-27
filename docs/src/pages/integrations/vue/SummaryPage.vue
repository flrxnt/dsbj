<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjSummary } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjSummary',
      desc: 'Sommaire de page : prop links obligatoire ; title optionnel (défaut « Sommaire » dans le composant), utilisé comme texte visible et aria-label du nav.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-title-default': 'title par défaut (omis)',
      'section-title-custom': 'title personnalisé',
      'section-links': 'links : ancres',
      'prop-title': 'Titre du bloc (défaut : « Sommaire » côté composant). aria-label du nav = title.',
      'prop-links': 'Tableau d’objets label + anchor ; href du lien = anchor (ex. #section).',
      'sum-title': 'Sommaire',
      'sum-title-custom': 'Sur cette page',
      'sum-a': 'Introduction',
      'sum-b': 'Détail',
      'sum-c': 'Contact',
    },
    en: {
      title: 'BjSummary',
      desc: 'In-page summary: required links prop; optional title (component default is French « Sommaire »), used as visible title and nav aria-label.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-title-default': 'Default title (omit prop)',
      'section-title-custom': 'Custom title',
      'section-links': 'links: anchors',
      'prop-title': 'Block title (component default: « Sommaire »). Nav aria-label equals title.',
      'prop-links': 'Array of objects with label and anchor; link href is anchor (e.g. #section).',
      'sum-title': 'Sommaire',
      'sum-title-custom': 'On this page',
      'sum-a': 'Introduction',
      'sum-b': 'Details',
      'sum-c': 'Contact',
    },
  },
})

const linkItems = computed(() => [
  { label: t('sum-a'), anchor: '#intro' },
  { label: t('sum-b'), anchor: '#detail' },
  { label: t('sum-c'), anchor: '#contact' },
])

const codeUsage = `<script setup>
import { BjSummary } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjSummary
    title="Sommaire"
    :links="[
      { label: 'Introduction', anchor: '#intro' },
      { label: 'Contact', anchor: '#contact' },
    ]"
  />
</template>`

const codeDefaultTitle = `<BjSummary
  :links="[
    { label: 'A', anchor: '#a' },
    { label: 'B', anchor: '#b' },
  ]"
/>`

const codeCustomTitle = `<BjSummary
  title="Sur cette page"
  :links="[
    { label: 'Introduction', anchor: '#intro' },
  ]"
/>`

const propsRows = computed(() => [
  { name: 'title', description: t('prop-title') },
  { name: 'links', description: t('prop-links') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-summary-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-summary-preview" :title="t('section-preview')">
    <DocsPreview>
      <BjSummary :title="t('sum-title-custom')" :links="linkItems" />
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-summary-title-default" :title="t('section-title-default')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">
      {{ t('prop-title') }}
    </p>
    <DocsPreview>
      <BjSummary :links="linkItems" />
    </DocsPreview>
    <DocsCode :code="codeDefaultTitle" lang="html" />
  </DocsSection>

  <DocsSection id="vue-summary-title-custom" :title="t('section-title-custom')">
    <DocsPreview>
      <BjSummary :title="t('sum-title-custom')" :links="linkItems" />
    </DocsPreview>
    <DocsCode :code="codeCustomTitle" lang="html" />
  </DocsSection>

  <DocsSection id="vue-summary-links" :title="t('section-links')">
    <DocsPreview>
      <BjSummary
        :title="t('sum-title-custom')"
        :links="[
          { label: t('sum-a'), anchor: '#vue-summary-links' },
          { label: t('sum-b'), anchor: '#detail' },
          { label: t('sum-c'), anchor: '#contact' },
        ]"
      />
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-summary-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
