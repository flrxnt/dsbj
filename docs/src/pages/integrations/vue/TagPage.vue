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
      title: 'BjTag',
      desc: 'Composant Vue pour le tag DSBJ. Variantes, taille, élément sémantique (span, lien, bouton) et fermeture optionnelle.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'prop-variant': 'Variante : default (défaut), action, info, success, warning ou error.',
      'prop-size': 'Taille : md (défaut) ou sm.',
      'prop-dismissible': 'Affiche le bouton de retrait et émet dismiss au clic.',
      'prop-tag': 'Élément racine : span (défaut), a ou button.',
    },
    en: {
      title: 'BjTag',
      desc: 'Vue component for the DSBJ tag. Variants, size, root element (span, link, button), and optional dismiss.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'prop-variant': 'Variant: default, action, info, success, warning, or error.',
      'prop-size': 'Size: md (default) or sm.',
      'prop-dismissible': 'Shows a remove control and emits dismiss when clicked.',
      'prop-tag': 'Root element: span (default), a, or button.',
    },
  },
})

const codeUsage = `<script setup>
import { BjTag } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjTag variant="default" size="md" tag="span">Étiquette</BjTag>
  <BjTag variant="info" :dismissible="true" @dismiss="() => {}">Fermable</BjTag>
</template>`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'size', description: t('prop-size') },
  { name: 'dismissible', description: t('prop-dismissible') },
  { name: 'tag', description: t('prop-tag') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-tag-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tag-preview" :title="t('section-preview')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v); align-items: center">
      <span class="bj-tag">Étiquette</span>
      <span class="bj-tag bj-tag--info bj-tag--dismiss">
        Fermable
        <button type="button" class="bj-tag__close" aria-label="Retirer">
          <i class="ri-close-line" aria-hidden="true"></i>
        </button>
      </span>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-tag-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
