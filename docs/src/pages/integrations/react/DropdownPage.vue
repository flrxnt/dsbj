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
      title: 'BjDropdown',
      desc: 'Menu deroulant React avec fermeture au clic exterieur et touche Escape.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-align': 'Alignement : left ou right.',
      'prop-direction': 'Direction d ouverture : down ou up.',
      'prop-size': 'Taille : sm ou md.',
      'prop-trigger': 'ReactNode du declencheur.',
    },
    en: {
      title: 'BjDropdown',
      desc: 'React dropdown menu with click-outside and Escape key closure.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-align': 'Alignment: left or right.',
      'prop-direction': 'Open direction: down or up.',
      'prop-size': 'Size: sm or md.',
      'prop-trigger': 'ReactNode for the trigger element.',
    },
  },
})

const codeUsage = `import { BjDropdown } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjDropdown
      trigger={<button className="bj-btn">Menu</button>}
    >
      <li className="bj-dropdown__item" role="menuitem">Action 1</li>
      <li className="bj-dropdown__item" role="menuitem">Action 2</li>
      <li className="bj-dropdown__item" role="menuitem">Action 3</li>
    </BjDropdown>
  )
}`

const propsRows = computed(() => [
  { name: 'align', description: t('prop-align') },
  { name: 'direction', description: t('prop-direction') },
  { name: 'size', description: t('prop-size') },
  { name: 'trigger', description: t('prop-trigger') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-dropdown-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dropdown-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-dropdown" style="position: relative;">
        <div class="bj-dropdown__trigger">
          <button type="button" class="bj-btn">Menu</button>
        </div>
        <ul class="bj-dropdown__menu" data-bj-expanded role="menu" style="display: block; position: relative;">
          <li class="bj-dropdown__item" role="menuitem">Action 1</li>
          <li class="bj-dropdown__item" role="menuitem">Action 2</li>
          <li class="bj-dropdown__item" role="menuitem">Action 3</li>
        </ul>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-dropdown-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
