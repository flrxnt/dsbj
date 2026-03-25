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
      title: 'BjTile',
      desc: 'Tuile avec forwardRef : lien par défaut (as a) ou conteneur div ; disposition horizontale optionnelle. Le contenu utilise les classes bj-tile__icon, bj-tile__title et bj-tile__desc.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-horizontal': 'Si vrai, aligne l’icône et le texte sur une ligne.',
      'prop-as': 'a par défaut pour lien, ou div pour un bloc statique.',
      'ex-title': 'Démarches en ligne',
      'ex-desc': 'Accédez aux formulaires et suivis administratifs.',
    },
    en: {
      title: 'BjTile',
      desc: 'Tile with forwardRef: default link (as a) or static div; optional horizontal layout. Inner markup uses bj-tile__icon, bj-tile__title, and bj-tile__desc.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-horizontal': 'If true, lays out icon and text in a row.',
      'prop-as': 'a by default for links, or div for a static block.',
      'ex-title': 'Online procedures',
      'ex-desc': 'Access forms and administrative tracking.',
    },
  },
})

const codeUsage = `import { BjTile } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjTile href="#">
      <i className="ri-file-list-3-line bj-tile__icon" aria-hidden />
      <span className="bj-tile__title">Démarches en ligne</span>
      <span className="bj-tile__desc">Accédez aux formulaires et suivis administratifs.</span>
    </BjTile>
  )
}`

const propsRows = computed(() => [
  { name: 'horizontal', description: t('prop-horizontal') },
  { name: 'as', description: t('prop-as') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-tile-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tile-preview" :title="t('section-preview')">
    <DocsPreview>
      <a href="#" class="bj-tile">
        <i class="ri-file-list-3-line bj-tile__icon" aria-hidden="true" />
        <span class="bj-tile__title">{{ t('ex-title') }}</span>
        <span class="bj-tile__desc">{{ t('ex-desc') }}</span>
      </a>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-tile-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
