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
      title: 'BjAlert',
      desc: 'Alerte React avec variantes sémantiques, titre optionnel, taille compacte et bouton de fermeture ; le rôle alert est défini sur le conteneur.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-variant': 'info, success, warning ou error.',
      'prop-size': 'md par défaut, ou sm.',
      'prop-closable': 'Affiche le bouton de fermeture et masque le bloc après fermeture.',
      'prop-title': 'Titre au-dessus du contenu enfant.',
      'prop-onClose': 'Callback invoqué après fermeture locale.',
      'ex-title': 'Succès',
      'ex-text': 'Votre dossier a été enregistré.',
    },
    en: {
      title: 'BjAlert',
      desc: 'React alert with semantic variants, optional title, compact size, and dismiss button; the root sets role alert.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-variant': 'info, success, warning, or error.',
      'prop-size': 'md by default, or sm.',
      'prop-closable': 'Shows the dismiss button and hides the block after close.',
      'prop-title': 'Title above child content.',
      'prop-onClose': 'Callback fired after local dismiss.',
      'ex-title': 'Success',
      'ex-text': 'Your file has been saved.',
    },
  },
})

const codeUsage = `import { BjAlert } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjAlert variant="success" title="Succès">
      Votre dossier a été enregistré.
    </BjAlert>
  )
}`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: 'closable', description: t('prop-closable') },
  { name: 'title', description: t('prop-title') },
  { name: 'onClose', description: t('prop-onClose') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-alert-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-alert-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-alert bj-alert--success" role="alert">
        <i class="bj-alert__icon ri-checkbox-circle-line" aria-hidden="true" />
        <div class="bj-alert__body">
          <p class="bj-alert__title">{{ t('ex-title') }}</p>
          <div class="bj-alert__text">{{ t('ex-text') }}</div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-alert-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
