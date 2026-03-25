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
      title: 'BjAccordion',
      desc: 'Composants React pour un groupe d’accordéons. BjAccordion fournit le contexte d’état ; BjAccordionItem exige un id stable, un titre et le contenu en enfants.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props — BjAccordion',
      'section-props-item': 'Props — BjAccordionItem',
      'prop-exclusive': 'Si true, un seul panneau ouvert à la fois.',
      'prop-item-id': 'Identifiant stable de l’item (clé d’état interne).',
      'prop-item-title': 'Libellé du bouton d’en-tête.',
    },
    en: {
      title: 'BjAccordion',
      desc: 'React components for an accordion group. BjAccordion provides state context; BjAccordionItem requires a stable id, title, and children for panel content.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props — BjAccordion',
      'section-props-item': 'Props — BjAccordionItem',
      'prop-exclusive': 'If true, only one panel is open at a time.',
      'prop-item-id': 'Stable item id used as the internal state key.',
      'prop-item-title': 'Header button label.',
    },
  },
})

const codeUsage = `import { BjAccordion, BjAccordionItem } from '@flrxnt/dsbj/react'

export function Example() {
  return (
    <BjAccordion exclusive>
      <BjAccordionItem id="a1" title="Section 1">
        <p>Contenu 1</p>
      </BjAccordionItem>
      <BjAccordionItem id="a2" title="Section 2">
        <p>Contenu 2</p>
      </BjAccordionItem>
    </BjAccordion>
  )
}`

const accordionProps = computed(() => [{ name: 'exclusive', description: t('prop-exclusive') }])

const itemProps = computed(() => [
  { name: 'id', description: t('prop-item-id') },
  { name: 'title', description: t('prop-item-title') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-accordion-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-accordion-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-accordions">
        <div class="bj-accordion bj-accordion--expanded">
          <button
            type="button"
            class="bj-accordion__btn"
            aria-expanded="true"
            aria-controls="react-acc-p1"
            id="react-acc-b1"
          >
            Section 1
          </button>
          <div
            id="react-acc-p1"
            class="bj-accordion__body"
            role="region"
            aria-labelledby="react-acc-b1"
            data-bj-expanded
          >
            <p class="bj-text-sm">Contenu 1</p>
          </div>
        </div>
        <div class="bj-accordion">
          <button
            type="button"
            class="bj-accordion__btn"
            aria-expanded="false"
            aria-controls="react-acc-p2"
            id="react-acc-b2"
          >
            Section 2
          </button>
          <div id="react-acc-p2" class="bj-accordion__body" role="region" aria-labelledby="react-acc-b2">
            <p class="bj-text-sm">Contenu 2</p>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-accordion-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="accordionProps" />
  </DocsSection>

  <DocsSection id="react-accordion-props-item" :title="t('section-props-item')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="itemProps" />
  </DocsSection>
</template>
