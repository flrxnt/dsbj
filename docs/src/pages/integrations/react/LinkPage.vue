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
      title: 'BjLink',
      desc: 'Composant React pour le lien DSBJ. forwardRef sur une ancre avec classes bj-link et props typées.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'preview-default': 'Consulter la démarche',
      'preview-small': 'Petit lien',
      'preview-icon-left': 'Retour',
      'preview-external': 'Site externe',
      'preview-reset': 'Lien discret (reset)',
      'prop-size': 'Taille du texte : sm, md (défaut) ou lg.',
      'prop-iconPosition': 'Icône dans le contenu : none (défaut), left ou right.',
      'prop-reset': 'Applique bj-link--reset : couleur héritée, soulignement au survol.',
    },
    en: {
      title: 'BjLink',
      desc: 'React component for the DSBJ link. forwardRef on an anchor with bj-link classes and typed props.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'preview-default': 'View the procedure',
      'preview-small': 'Small link',
      'preview-icon-left': 'Back',
      'preview-external': 'External site',
      'preview-reset': 'Subtle link (reset)',
      'prop-size': 'Text size: sm, md (default), or lg.',
      'prop-iconPosition': 'Icon layout: none (default), left, or right.',
      'prop-reset': 'Applies bj-link--reset: inherited color, underline on hover.',
    },
  },
})

const codeUsage = `import { BjLink } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <>
      <BjLink href="#">Consulter la démarche</BjLink>
      <BjLink href="#" size="sm">
        Petit lien
      </BjLink>
      <BjLink href="#" iconPosition="left">
        <i className="ri-arrow-left-line" aria-hidden />
        Retour
      </BjLink>
    </>
  )
}`

const propsRows = computed(() => [
  { name: 'size', description: t('prop-size') },
  { name: 'iconPosition', description: t('prop-iconPosition') },
  { name: 'reset', description: t('prop-reset') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-link-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-link-preview" :title="t('section-preview')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center;">
      <a href="#" class="bj-link" @click.prevent>{{ t('preview-default') }}</a>
      <a href="#" class="bj-link bj-link--sm" @click.prevent>{{ t('preview-small') }}</a>
      <a href="#" class="bj-link bj-link--icon-left" @click.prevent>
        <i class="ri-arrow-left-line" aria-hidden="true" />
        {{ t('preview-icon-left') }}
      </a>
      <a
        href="#"
        class="bj-link"
        target="_blank"
        rel="noopener noreferrer"
        @click.prevent
      >{{ t('preview-external') }}</a>
      <a href="#" class="bj-link bj-link--reset" @click.prevent>{{ t('preview-reset') }}</a>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-link-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
