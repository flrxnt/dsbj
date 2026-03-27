<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjSkiplink } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjSkiplink',
      desc: 'Liens d’évitement : sans prop links, le défaut est un tableau d’un seul lien « Aller au contenu » vers la cible #main.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-default-prop': 'Valeur par défaut (prop omise)',
      'section-custom-links': 'links personnalisés',
      'section-single-link': 'Un seul lien',
      'prop-links':
        'Tableau d’objets label + target ; target devient href. Défaut : Aller au contenu vers la cible #main.',
      'skip-content': 'Aller au contenu',
      'skip-nav': 'Aller au menu',
      'skip-search': 'Aller à la recherche',
    },
    en: {
      title: 'BjSkiplink',
      desc: 'Skip links: when links is omitted, the default is a one-item array: skip to content pointing at #main.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-default-prop': 'Default (omit links)',
      'section-custom-links': 'Custom links',
      'section-single-link': 'Single link',
      'prop-links': 'Array of objects with label and target; target becomes href. Default: skip to content → #main.',
      'skip-content': 'Skip to content',
      'skip-nav': 'Skip to menu',
      'skip-search': 'Skip to search',
    },
  },
})

const codeUsage = `<script setup>
import { BjSkiplink } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjSkiplink
    :links="[
      { label: 'Aller au contenu', target: '#main' },
      { label: 'Aller au menu', target: '#nav' },
    ]"
  />
</template>`

const codeDefault = `<template>
  <BjSkiplink />
</template>`

const codeCustom = `<BjSkiplink
  :links="[
    { label: 'Aller au contenu', target: '#main' },
    { label: 'Aller au menu', target: '#navigation' },
    { label: 'Recherche', target: '#search' },
  ]"
/>`

const codeSingle = `<BjSkiplink :links="[{ label: 'Aller au contenu', target: '#main' }]" />`

const propsRows = computed(() => [{ name: 'links', description: t('prop-links') }])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-skiplink-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-skiplink-preview" :title="t('section-preview')">
    <DocsPreview>
      <BjSkiplink
        :links="[
          { label: t('skip-content'), target: '#main' },
          { label: t('skip-nav'), target: '#nav' },
        ]"
      />
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-skiplink-default" :title="t('section-default-prop')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">
      {{ t('prop-links') }}
    </p>
    <DocsPreview>
      <BjSkiplink />
    </DocsPreview>
    <DocsCode :code="codeDefault" lang="html" />
  </DocsSection>

  <DocsSection id="vue-skiplink-custom" :title="t('section-custom-links')">
    <DocsPreview>
      <BjSkiplink
        :links="[
          { label: t('skip-content'), target: '#main' },
          { label: t('skip-nav'), target: '#nav' },
          { label: t('skip-search'), target: '#search' },
        ]"
      />
    </DocsPreview>
    <DocsCode :code="codeCustom" lang="html" />
  </DocsSection>

  <DocsSection id="vue-skiplink-single" :title="t('section-single-link')">
    <DocsPreview>
      <BjSkiplink :links="[{ label: t('skip-content'), target: '#main' }]" />
    </DocsPreview>
    <DocsCode :code="codeSingle" lang="html" />
  </DocsSection>

  <DocsSection id="vue-skiplink-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
