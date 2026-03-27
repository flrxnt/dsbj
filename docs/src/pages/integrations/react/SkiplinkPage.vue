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
      title: 'BjSkiplink',
      desc: 'Liens d'évitement React affichés au focus clavier pour accéder rapidement au contenu principal.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-links': 'Tableau de liens avec label et target (href = target). Défaut : un lien vers #main.',
      'prop-div': 'Attributs div natifs supplémentaires.',
      'skip-content': 'Aller au contenu',
      'skip-nav': 'Aller au menu',
    },
    en: {
      title: 'BjSkiplink',
      desc: 'React skip links shown on keyboard focus to jump to main content or other landmarks.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-links': 'Array of links with label and target (href = target). Default: one link to #main.',
      'prop-div': 'Extra native div attributes are forwarded.',
      'skip-content': 'Skip to content',
      'skip-nav': 'Skip to menu',
    },
  },
})

const codeUsage = `import { BjSkiplink } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjSkiplink
      links={[
        { label: 'Aller au contenu', target: '#main' },
        { label: 'Aller au menu', target: '#nav' },
      ]}
    />
  )
}`

const propsRows = computed(() => [
  { name: 'links', description: t('prop-links') },
  { name: '(div props)', description: t('prop-div') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-skiplink-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-skiplink-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-skiplinks">
        <div class="bj-skiplinks__list">
          <a class="bj-skiplinks__link" href="#">{{ t('skip-content') }}</a>
          <a class="bj-skiplinks__link" href="#">{{ t('skip-nav') }}</a>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-skiplink-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
