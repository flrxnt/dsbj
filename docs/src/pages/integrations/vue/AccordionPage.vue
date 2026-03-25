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
      desc: 'Composants Vue pour un groupe d’accordéons. BjAccordion fournit le contexte ; BjAccordionItem définit id, titre et contenu par slot.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props-accordion': 'Props — BjAccordion',
      'section-props-item': 'Props — BjAccordionItem',
      'prop-exclusive': 'Si true, un seul panneau ouvert à la fois.',
      'prop-item-id': 'Identifiant stable de l’item (clé d’état).',
      'prop-item-title': 'Texte du bouton d’en-tête.',
    },
    en: {
      title: 'BjAccordion',
      desc: 'Vue components for an accordion group. BjAccordion provides context; BjAccordionItem sets id, title, and default slot content.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props-accordion': 'Props — BjAccordion',
      'section-props-item': 'Props — BjAccordionItem',
      'prop-exclusive': 'If true, only one panel open at a time.',
      'prop-item-id': 'Stable item id (state key).',
      'prop-item-title': 'Header button label.',
    },
  },
})

const codeUsage = `<script setup>
import { BjAccordion, BjAccordionItem } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjAccordion exclusive>
    <BjAccordionItem id="a1" title="Section 1">Contenu 1</BjAccordionItem>
    <BjAccordionItem id="a2" title="Section 2">Contenu 2</BjAccordionItem>
  </BjAccordion>
</template>`

const accordionProps = computed(() => [
  { name: 'exclusive', description: t('prop-exclusive') },
])

const itemProps = computed(() => [
  { name: 'id', description: t('prop-item-id') },
  { name: 'title', description: t('prop-item-title') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-acc-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-acc-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-accordions" data-bj-accordion-group>
        <div class="bj-accordion">
          <button
            type="button"
            class="bj-accordion__btn"
            data-bj-accordion-btn
            aria-expanded="true"
            aria-controls="int-vue-acc-1"
            id="int-vue-acc-btn-1"
          >
            Section 1
          </button>
          <div
            id="int-vue-acc-1"
            class="bj-accordion__body"
            role="region"
            aria-labelledby="int-vue-acc-btn-1"
            data-bj-expanded
          >
            <p class="bj-text-sm">Contenu 1</p>
          </div>
        </div>
        <div class="bj-accordion">
          <button
            type="button"
            class="bj-accordion__btn"
            data-bj-accordion-btn
            aria-expanded="false"
            aria-controls="int-vue-acc-2"
            id="int-vue-acc-btn-2"
          >
            Section 2
          </button>
          <div
            id="int-vue-acc-2"
            class="bj-accordion__body"
            role="region"
            aria-labelledby="int-vue-acc-btn-2"
          >
            <p class="bj-text-sm">Contenu 2</p>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-acc-props-root" :title="t('section-props-accordion')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="accordionProps" />
  </DocsSection>

  <DocsSection id="vue-acc-props-item" :title="t('section-props-item')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="itemProps" />
  </DocsSection>
</template>
