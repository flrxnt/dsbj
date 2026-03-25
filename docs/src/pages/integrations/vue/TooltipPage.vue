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
      title: 'BjTooltip',
      desc: 'Composant Vue pour l’infobulle DSBJ. Le contenu déclencheur passe dans le slot par défaut ; le texte d’aide est fourni par la prop text.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'prop-text': 'Texte affiché dans l’infobulle (obligatoire).',
      'prop-position': 'Position par rapport au déclencheur : top (défaut), bottom, left ou right.',
    },
    en: {
      title: 'BjTooltip',
      desc: 'Vue component for the DSBJ tooltip. Trigger content goes in the default slot; help text is set with the text prop.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'prop-text': 'Tooltip text (required).',
      'prop-position': 'Position relative to the trigger: top (default), bottom, left, or right.',
    },
  },
})

const codeUsage = `<script setup>
import { BjTooltip } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjTooltip text="Texte d’aide contextuelle" position="top">
    <button type="button" class="bj-btn">Survoler</button>
  </BjTooltip>
</template>`

const propsRows = computed(() => [
  { name: 'text', description: t('prop-text') },
  { name: 'position', description: t('prop-position') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-tooltip-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tooltip-preview" :title="t('section-preview')">
    <DocsPreview>
      <span class="bj-tooltip">
        <button type="button" class="bj-btn">Survoler</button>
        <span class="bj-tooltip__content" role="tooltip">Texte d’aide contextuelle</span>
      </span>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-tooltip-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
