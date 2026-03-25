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
      title: 'BjTab',
      desc: 'Composant React pour les onglets DSBJ. Navigation clavier et index controle.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-tabs': 'Tableau des libelles d onglets.',
      'prop-activeIndex': 'Index de l onglet actif.',
      'prop-onChange': 'Callback avec le nouvel index.',
    },
    en: {
      title: 'BjTab',
      desc: 'React component for DSBJ tabs. Keyboard navigation and controlled index.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-tabs': 'Array of tab labels.',
      'prop-activeIndex': 'Active tab index.',
      'prop-onChange': 'Callback with the new index.',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjTab, BjTabPanel } from '@flrxnt/dsbj/react'

export default function App() {
  const [active, setActive] = useState(0)

  return (
    <BjTab
      tabs={['General', 'Securite', 'Notifications']}
      activeIndex={active}
      onChange={setActive}
    >
      <BjTabPanel index={0} activeIndex={active}>
        <p>Contenu general.</p>
      </BjTabPanel>
      <BjTabPanel index={1} activeIndex={active}>
        <p>Parametres de securite.</p>
      </BjTabPanel>
      <BjTabPanel index={2} activeIndex={active}>
        <p>Preferences de notifications.</p>
      </BjTabPanel>
    </BjTab>
  )
}`

const propsRows = computed(() => [
  { name: 'tabs', description: t('prop-tabs') },
  { name: 'activeIndex', description: t('prop-activeIndex') },
  { name: 'onChange', description: t('prop-onChange') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-tab-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tab-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-tabs">
        <div class="bj-tabs__list" role="tablist">
          <button type="button" role="tab" class="bj-tabs__tab" aria-selected="true" tabindex="0">Général</button>
          <button type="button" role="tab" class="bj-tabs__tab" aria-selected="false" tabindex="-1">Sécurité</button>
          <button type="button" role="tab" class="bj-tabs__tab" aria-selected="false" tabindex="-1">Notifications</button>
        </div>
        <div class="bj-tabs__panel" role="tabpanel">
          <p>Contenu général.</p>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-tab-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
