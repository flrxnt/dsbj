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
      desc: 'Tuile cliquable ou statique (balise a ou div), disposition verticale par défaut ou horizontale. Le contenu (icône, titre, texte) utilise les classes BEM bj-tile__*.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-horizontal': 'Si vrai, aligne l’icône et le texte sur une ligne.',
      'prop-tag': 'a (défaut) pour lien, ou div pour conteneur non navigable.',
      'ex-title': 'Démarches en ligne',
      'ex-desc': 'Accédez aux formulaires et suivis administratifs.',
      'code-title': 'Démarches en ligne',
      'code-desc': 'Accédez aux formulaires et suivis administratifs.',
    },
    en: {
      title: 'BjTile',
      desc: 'Clickable or static tile (a or div tag), vertical by default or horizontal. Inner content (icon, title, text) uses bj-tile__* BEM classes.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-horizontal': 'If true, lays out icon and text in a row.',
      'prop-tag': 'a (default) for links, or div for a non-navigable container.',
      'ex-title': 'Online procedures',
      'ex-desc': 'Access forms and administrative tracking.',
      'code-title': 'Online procedures',
      'code-desc': 'Access forms and administrative tracking.',
    },
  },
})

const codeUsage = computed(() => {
  const title = t('code-title').replace(/"/g, '&quot;')
  const desc = t('code-desc').replace(/"/g, '&quot;')
  return `<script setup>
import { BjTile } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <BjTile href="#" tag="a">
    <i class="ri-file-list-3-line bj-tile__icon" aria-hidden="true" />
    <span class="bj-tile__title">${title}</span>
    <span class="bj-tile__desc">${desc}</span>
  </BjTile>
</template>`
})

const propsRows = computed(() => [
  { name: 'horizontal', description: t('prop-horizontal') },
  { name: 'tag', description: t('prop-tag') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-tile-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tile-preview" :title="t('section-preview')">
    <DocsPreview>
      <a href="#" class="bj-tile">
        <i class="ri-file-list-3-line bj-tile__icon" aria-hidden="true" />
        <span class="bj-tile__title">{{ t('ex-title') }}</span>
        <span class="bj-tile__desc">{{ t('ex-desc') }}</span>
      </a>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-tile-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
