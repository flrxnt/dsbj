<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjBreadcrumb } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjBreadcrumb',
      desc: 'Fil d’Ariane : prop items obligatoire. Les entrées avec to dont l’index est strictement inférieur au dernier sont des liens ; le dernier segment est toujours rendu en texte courant (aria-current="page"), même si to est fourni.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-items-full': 'items : plusieurs entrées avec to',
      'section-items-last-no-to': 'Dernier sans to',
      'section-items-single': 'Un seul segment (page courante)',
      'section-items-mixed': 'to sur le dernier (toujours span)',
      'breadcrumb-prop-items':
        'Tableau d’objets avec champs label (string) et to optionnel. Les liens : item.to défini et index strictement avant le dernier élément.',
      'bc-home': 'Accueil',
      'bc-section': 'Rubrique',
      'bc-page': 'Page actuelle',
      'bc-aria': 'Fil d’Ariane',
    },
    en: {
      title: 'BjBreadcrumb',
      desc: 'Breadcrumb: required items prop. Entries with to and index strictly before the last render as links; the last segment is always plain text (aria-current="page"), even when to is set.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-items-full': 'items: multiple entries with to',
      'section-items-last-no-to': 'Last item without to',
      'section-items-single': 'Single segment (current page)',
      'section-items-mixed': 'to on last item (still a span)',
      'breadcrumb-prop-items':
        'Array of objects with label (string) and optional destination (to). A segment becomes a link when a destination is set and its index is strictly before the last item.',
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

const codeFull = `<BjBreadcrumb
  :items="[
    { label: 'Accueil', to: '/' },
    { label: 'Rubrique', to: '/r' },
    { label: 'Page', to: '/r/p' },
  ]"
/>`

const codeLastNoTo = `<BjBreadcrumb
  :items="[
    { label: 'Accueil', to: '/' },
    { label: 'Page actuelle' },
  ]"
/>`

const codeSingle = `<BjBreadcrumb :items="[{ label: 'Seulement la page courante' }]" />`

const codeMixed = `<BjBreadcrumb
  :items="[
    { label: 'Accueil', to: '/' },
    { label: 'Courant', to: '/c' },
  ]"
/>`

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
      <BjBreadcrumb
        :aria-label="t('bc-aria')"
        :items="[
          { label: t('bc-home'), to: '#' },
          { label: t('bc-section'), to: '#' },
          { label: t('bc-page') },
        ]"
      />
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-breadcrumb-items-full" :title="t('section-items-full')">
    <DocsPreview>
      <BjBreadcrumb
        :items="[
          { label: t('bc-home'), to: '#' },
          { label: t('bc-section'), to: '#' },
          { label: t('bc-page'), to: '#' },
        ]"
      />
    </DocsPreview>
    <DocsCode :code="codeFull" lang="html" />
  </DocsSection>

  <DocsSection id="vue-breadcrumb-last-no-to" :title="t('section-items-last-no-to')">
    <DocsPreview>
      <BjBreadcrumb
        :items="[
          { label: t('bc-home'), to: '#' },
          { label: t('bc-page') },
        ]"
      />
    </DocsPreview>
    <DocsCode :code="codeLastNoTo" lang="html" />
  </DocsSection>

  <DocsSection id="vue-breadcrumb-single" :title="t('section-items-single')">
    <DocsPreview>
      <BjBreadcrumb :items="[{ label: t('bc-page') }]" />
    </DocsPreview>
    <DocsCode :code="codeSingle" lang="html" />
  </DocsSection>

  <DocsSection id="vue-breadcrumb-mixed" :title="t('section-items-mixed')">
    <DocsPreview>
      <BjBreadcrumb
        :items="[
          { label: t('bc-home'), to: '#' },
          { label: t('bc-page'), to: '#' },
        ]"
      />
    </DocsPreview>
    <DocsCode :code="codeMixed" lang="html" />
  </DocsSection>

  <DocsSection id="vue-breadcrumb-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
