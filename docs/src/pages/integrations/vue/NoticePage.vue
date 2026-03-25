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
      desc: 'Bandeau horizontal avec variantes sémantiques, titre et icône optionnels, fermeture optionnelle (événement close).',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-variant': 'default (défaut), info, warning ou alert — style et bordure gauche.',
      'prop-closable': 'Affiche le bouton de fermeture ; émet close au clic.',
      'prop-title': 'Titre en gras au-dessus du contenu du slot par défaut.',
      'prop-icon': 'Classe d’icône affichée à gauche du corps.',
      'ex-title': 'Maintenance prévue',
      'ex-body': 'Le service sera indisponible dimanche de 2 h à 4 h.',
      'code-title': 'Maintenance prévue',
      'code-body': 'Le service sera indisponible dimanche de 2 h à 4 h.',
      'aria-close': 'Fermer',
    },
    en: {
      title: 'BjNotice',
      desc: 'Horizontal banner with semantic variants, optional title and icon, and optional dismiss (close event).',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-variant': 'default (default), info, warning, or alert — style and left border.',
      'prop-closable': 'Shows the dismiss button; emits close on click.',
      'prop-title': 'Bold title above the default slot content.',
      'prop-icon': 'Icon class shown to the left of the body.',
      'ex-title': 'Scheduled maintenance',
      'ex-body': 'The service will be unavailable on Sunday from 2:00 to 4:00.',
      'code-title': 'Scheduled maintenance',
      'code-body': 'The service will be unavailable on Sunday from 2:00 to 4:00.',
      'aria-close': 'Close',
    },
  },
})

const codeUsage = computed(() => {
  const title = t('code-title').replace(/"/g, '&quot;')
  const body = t('code-body')
  return `<script setup>
import { BjNotice } from '@flrxnt/dsbj/vue'
<\\/script>

<template>
  <BjNotice variant="info" closable icon="ri-information-line" title="${title}" @close="onClose">
    ${body}
  </BjNotice>
</template>`
})

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'closable', description: t('prop-closable') },
  { name: 'title', description: t('prop-title') },
  { name: 'icon', description: t('prop-icon') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-notice-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-notice-preview" :title="t('section-preview')">
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

  <DocsSection id="vue-notice-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
