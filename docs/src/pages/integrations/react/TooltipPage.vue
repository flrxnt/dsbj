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
      desc: 'Infobulle React : le contenu déclencheur est passé en enfants ; le texte d’aide est fourni par la prop text. Position modifiable avec une classe de modificateur.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-text': 'Texte affiché dans l’infobulle (obligatoire).',
      'prop-position': 'Position par rapport au déclencheur : top (défaut), bottom, left ou right.',
    },
    en: {
      title: 'BjTooltip',
      desc: 'React tooltip: wrap the trigger in children; set help copy with the text prop. Position uses a modifier class.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-text': 'Tooltip copy (required).',
      'prop-position': 'Placement: top (default), bottom, left, or right.',
    },
  },
})

const codeUsage = `import { BjButton, BjTooltip } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjTooltip text="Texte d’aide contextuelle" position="top">
      <BjButton type="button">Survoler</BjButton>
    </BjTooltip>
  )
}`

const propsRows = computed(() => [
  { name: 'text', description: t('prop-text') },
  { name: 'position', description: t('prop-position') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-tooltip-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tooltip-preview" :title="t('section-preview')">
    <DocsPreview>
      <span class="bj-tooltip">
        <button type="button" class="bj-btn">Survoler</button>
        <span class="bj-tooltip__content" role="tooltip">Texte d’aide contextuelle</span>
      </span>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-tooltip-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
