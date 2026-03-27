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

const codePositions = `<BjTooltip text="Au-dessus" position="top"><button type="button" class="bj-btn">Top</button></BjTooltip>
<BjTooltip text="En dessous" position="bottom"><button type="button" class="bj-btn">Bottom</button></BjTooltip>
<BjTooltip text="À gauche" position="left"><button type="button" class="bj-btn">Left</button></BjTooltip>
<BjTooltip text="À droite" position="right"><button type="button" class="bj-btn">Right</button></BjTooltip>`

const codeCombos = `<!-- Lien + droite -->
<BjTooltip text="Ouvrir dans un nouvel onglet" position="right">
  <a href="/doc" class="bj-link">Documentation</a>
</BjTooltip>

<!-- Icône seule + bas -->
<BjTooltip text="Paramètres" position="bottom">
  <button type="button" class="bj-btn bj-btn--icon-only" aria-label="Paramètres">
    <i class="ri-settings-3-line" aria-hidden="true"></i>
  </button>
</BjTooltip>`

const propsRows = computed(() => [
  { name: 'text', description: t('prop-text') },
  { name: 'position', description: t('prop-position') },
])

const slotRows = computed(() => [{ name: 'default', description: t('slot-default') }])
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

  <DocsSection id="vue-tooltip-positions" :title="t('section-positions')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('positions-code-intro') }}</p>
    <DocsCode :code="codePositions" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tooltip-positions-preview" :title="t('section-positions-preview')">
    <DocsPreview style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-4v); align-items: center; padding: var(--bj-spacing-4v)">
      <span class="bj-tooltip bj-tooltip--bottom">
        <button type="button" class="bj-btn bj-btn--sm">bottom</button>
        <span class="bj-tooltip__content" role="tooltip">Infobulle bas</span>
      </span>
      <span class="bj-tooltip bj-tooltip--left">
        <button type="button" class="bj-btn bj-btn--sm">left</button>
        <span class="bj-tooltip__content" role="tooltip">Infobulle gauche</span>
      </span>
      <span class="bj-tooltip bj-tooltip--right">
        <button type="button" class="bj-btn bj-btn--sm">right</button>
        <span class="bj-tooltip__content" role="tooltip">Infobulle droite</span>
      </span>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-tooltip-combos" :title="t('section-combos')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('combos-intro') }}</p>
    <DocsCode :code="codeCombos" lang="html" />
  </DocsSection>

  <DocsSection id="vue-tooltip-slots" :title="t('section-slots')">
    <DocsPropsTable :headers="['Slot', 'Description']" :rows="slotRows" />
  </DocsSection>

  <DocsSection id="vue-tooltip-emits" :title="t('section-no-emits')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-emits-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-tooltip-vmodel" :title="t('section-no-vmodel')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-vmodel-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-tooltip-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
