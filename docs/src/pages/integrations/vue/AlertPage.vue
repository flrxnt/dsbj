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
      desc: 'Alerte Vue avec variantes sémantiques, titre optionnel, taille compacte et bouton de fermeture.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'prop-variant': 'info, success, warning ou error.',
      'prop-size': 'md (défaut) ou sm.',
      'prop-closable': 'Affiche le bouton de fermeture.',
      'prop-title': 'Titre au-dessus du contenu du slot.',
    },
    en: {
      title: 'BjAlert',
      desc: 'Vue alert with semantic variants, optional title, compact size, and close button.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'prop-variant': 'info, success, warning, or error.',
      'prop-size': 'md (default) or sm.',
      'prop-closable': 'Shows the close button.',
      'prop-title': 'Title above the default slot content.',
    },
  },
})

const codeUsage = `<script setup>
import { BjAlert } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjAlert variant="success" title="Succès">
    Votre dossier a été enregistré.
  </BjAlert>
</template>`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: 'closable', description: t('prop-closable') },
  { name: 'title', description: t('prop-title') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-alert-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-alert-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-alert bj-alert--success" role="alert">
        <div class="bj-alert__body">
          <p class="bj-alert__title">Succès</p>
          <p class="bj-alert__text">Votre dossier a été enregistré.</p>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-alert-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
