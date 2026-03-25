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
      title: 'BjNotice',
      desc: 'Bandeau horizontal avec variantes default, info, warning et alert ; titre et icône optionnels, fermeture optionnelle avec callback onClose.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-variant': 'default par défaut, info, warning ou alert.',
      'prop-closable': 'Affiche le bouton de fermeture et masque le bandeau.',
      'prop-title': 'Titre au-dessus du contenu enfant.',
      'prop-icon': 'Classe d’icône à gauche du corps.',
      'prop-onClose': 'Callback après fermeture locale.',
      'ex-title': 'Maintenance prévue',
      'ex-body': 'Le service sera indisponible dimanche de 2 h à 4 h.',
      'aria-close': 'Fermer',
    },
    en: {
      title: 'BjNotice',
      desc: 'Horizontal banner with default, info, warning, and alert variants; optional title, icon, and dismiss with onClose.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-variant': 'default by default, info, warning, or alert.',
      'prop-closable': 'Shows dismiss and hides the banner.',
      'prop-title': 'Title above child content.',
      'prop-icon': 'Icon class to the left of the body.',
      'prop-onClose': 'Callback after local dismiss.',
      'ex-title': 'Scheduled maintenance',
      'ex-body': 'The service will be unavailable on Sunday from 2:00 to 4:00.',
      'aria-close': 'Close',
    },
  },
})

const codeUsage = `import { BjNotice } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjNotice
      variant="info"
      closable
      icon="ri-information-line"
      title="Maintenance prévue"
      onClose={() => console.log('closed')}
    >
      Le service sera indisponible dimanche de 2 h à 4 h.
    </BjNotice>
  )
}`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'closable', description: t('prop-closable') },
  { name: 'title', description: t('prop-title') },
  { name: 'icon', description: t('prop-icon') },
  { name: 'onClose', description: t('prop-onClose') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-notice-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-notice-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-notice bj-notice--info">
        <i class="ri-information-line bj-notice__icon" aria-hidden="true" />
        <div class="bj-notice__body">
          <p class="bj-notice__title">{{ t('ex-title') }}</p>
          <p>{{ t('ex-body') }}</p>
        </div>
        <button type="button" class="bj-notice__close" :aria-label="t('aria-close')">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-notice-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
