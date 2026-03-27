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
      desc:
        'Infobulle React : prop text (obligatoire), enfants = déclencheur, position top | bottom | left | right (défaut top), className optionnel sur la racine .bj-tooltip.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-positions': 'Toutes les valeurs de position',
      'section-cross': 'Combinaison : position + className + enfants riches',
      'section-children': 'Enfants : bouton, lien, icône, texte',
      'prop-text': 'Texte affiché dans l’infobulle (obligatoire).',
      'prop-position': 'top (défaut) | bottom | left | right — classe bj-tooltip--*.',
      'prop-children': 'Nœud déclencheur (souvent un bouton ou un span focusable).',
      'prop-className': 'Classe additionnelle sur le span racine .bj-tooltip.',
    },
    en: {
      title: 'BjTooltip',
      desc:
        'React tooltip: required text prop, children as the trigger, position top | bottom | left | right (default top), optional className on the .bj-tooltip root.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-positions': 'All position values',
      'section-cross': 'Combination: position, className, and rich children',
      'section-children': 'Children: button, link, icon, or text',
      'prop-text': 'Tooltip copy (required).',
      'prop-position': 'top (default) | bottom | left | right — applies bj-tooltip--*.',
      'prop-children': 'Trigger node (often a button or focusable span).',
      'prop-className': 'Extra class on the root .bj-tooltip span.',
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

const codePositions = `import { BjTooltip } from '@flrxnt/dsbj/react'

export function AllPositions() {
  return (
    <>
      <BjTooltip text="Au-dessus" position="top">
        <button type="button" className="bj-btn">top</button>
      </BjTooltip>
      <BjTooltip text="En dessous" position="bottom">
        <button type="button" className="bj-btn">bottom</button>
      </BjTooltip>
      <BjTooltip text="À gauche" position="left">
        <button type="button" className="bj-btn">left</button>
      </BjTooltip>
      <BjTooltip text="À droite" position="right">
        <button type="button" className="bj-btn">right</button>
      </BjTooltip>
    </>
  )
}`

const codeCross = `import { BjTooltip } from '@flrxnt/dsbj/react'

export function StyledTooltip() {
  return (
    <BjTooltip text="Info" position="bottom" className="my-tooltip">
      <span className="bj-link" tabIndex={0} role="button">
        Lien factice
      </span>
    </BjTooltip>
  )
}`

const codeChildren = `import { BjTooltip } from '@flrxnt/dsbj/react'

export function TriggerVariants() {
  return (
    <>
      <BjTooltip text="Bouton">
        <button type="button" className="bj-btn bj-btn--sm">Action</button>
      </BjTooltip>
      <BjTooltip text="Icône">
        <button type="button" className="bj-btn bj-btn--tertiary" aria-label="Aide">
          <i className="ri-question-line" aria-hidden="true" />
        </button>
      </BjTooltip>
    </>
  )
}`

const propsRows = computed(() => [
  { name: 'text', description: t('prop-text') },
  { name: 'position', description: t('prop-position') },
  { name: 'children', description: t('prop-children') },
  { name: 'className', description: t('prop-className') },
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

  <DocsSection id="react-tooltip-positions" :title="t('section-positions')">
    <div style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-4v); align-items: flex-start">
      <DocsPreview>
        <span class="bj-text-xs" style="display: block; margin-bottom: var(--bj-spacing-2v); color: var(--bj-text-alt)">top</span>
        <span class="bj-tooltip">
          <button type="button" class="bj-btn bj-btn--sm">top</button>
          <span class="bj-tooltip__content" role="tooltip">Au-dessus</span>
        </span>
      </DocsPreview>
      <DocsPreview>
        <span class="bj-text-xs" style="display: block; margin-bottom: var(--bj-spacing-2v); color: var(--bj-text-alt)">bottom</span>
        <span class="bj-tooltip bj-tooltip--bottom">
          <button type="button" class="bj-btn bj-btn--sm">bottom</button>
          <span class="bj-tooltip__content" role="tooltip">En dessous</span>
        </span>
      </DocsPreview>
      <DocsPreview>
        <span class="bj-text-xs" style="display: block; margin-bottom: var(--bj-spacing-2v); color: var(--bj-text-alt)">left</span>
        <span class="bj-tooltip bj-tooltip--left">
          <button type="button" class="bj-btn bj-btn--sm">left</button>
          <span class="bj-tooltip__content" role="tooltip">À gauche</span>
        </span>
      </DocsPreview>
      <DocsPreview>
        <span class="bj-text-xs" style="display: block; margin-bottom: var(--bj-spacing-2v); color: var(--bj-text-alt)">right</span>
        <span class="bj-tooltip bj-tooltip--right">
          <button type="button" class="bj-btn bj-btn--sm">right</button>
          <span class="bj-tooltip__content" role="tooltip">À droite</span>
        </span>
      </DocsPreview>
    </div>
    <DocsCode :code="codePositions" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tooltip-cross" :title="t('section-cross')">
    <DocsPreview>
      <span class="bj-tooltip bj-tooltip--bottom my-tooltip-preview">
        <span class="bj-link" tabindex="0" role="button">Lien factice</span>
        <span class="bj-tooltip__content" role="tooltip">Info</span>
      </span>
    </DocsPreview>
    <DocsCode :code="codeCross" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tooltip-children" :title="t('section-children')">
    <DocsPreview>
      <div style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-3v); align-items: center">
        <span class="bj-tooltip">
          <button type="button" class="bj-btn bj-btn--sm">Action</button>
          <span class="bj-tooltip__content" role="tooltip">Bouton</span>
        </span>
        <span class="bj-tooltip">
          <button type="button" class="bj-btn bj-btn--tertiary" aria-label="Aide">
            <i class="ri-question-line" aria-hidden="true"></i>
          </button>
          <span class="bj-tooltip__content" role="tooltip">Icône</span>
        </span>
      </div>
    </DocsPreview>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tooltip-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
