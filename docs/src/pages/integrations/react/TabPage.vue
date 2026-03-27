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
      title: 'BjTab / BjTabPanel',
      desc:
        'BjTab reçoit tabs (libellés), activeIndex et onChange. Chaque BjTabPanel reçoit active (booléen) : un seul panneau actif à la fois. Clavier : flèches, Home, End sur les onglets.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props-tab': 'Props — BjTab',
      'section-props-panel': 'Props — BjTabPanel',
      'section-prop-values': 'Valeurs : tous les index de tabs',
      'section-onchange': 'Callback onChange',
      'section-children': 'Enfants : panneaux et contenu riche',
      'section-cross': 'Combinaison : className sur tablist et panneau',
      'section-keyboard': 'Clavier',
      'keyboard-desc':
        'ArrowLeft / ArrowRight changent l’onglet et déplacent le focus ; Home / End vont au premier / dernier onglet.',
      'prop-tabs': 'Tableau des libellés affichés sur les boutons role="tab".',
      'prop-activeIndex': 'Index (0-based) de l’onglet actif ; doit correspondre à un seul BjTabPanel avec active true.',
      'prop-onChange': '(index: number) => void — appelé au clic et lors de la navigation clavier.',
      'prop-tab-children': 'Enfants : typiquement un BjTabPanel par entrée de tabs, dans le même ordre.',
      'prop-tab-className': 'Classe sur la racine .bj-tabs.',
      'prop-panel-active': 'Si true, le panneau est visible (display block) ; sinon masqué.',
      'prop-panel-children': 'Contenu du panneau (ReactNode).',
      'prop-panel-className': 'Classe sur .bj-tabs__panel.',
    },
    en: {
      title: 'BjTab / BjTabPanel',
      desc:
        'BjTab takes tabs (labels), activeIndex, and onChange. Each BjTabPanel takes active (boolean): only one panel should be active. Keyboard: arrows, Home, End on tabs.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props-tab': 'Props — BjTab',
      'section-props-panel': 'Props — BjTabPanel',
      'section-prop-values': 'Values: every tab index',
      'section-onchange': 'onChange callback',
      'section-children': 'Children: panels and rich content',
      'section-cross': 'Combination: className on tab list and panel',
      'section-keyboard': 'Keyboard',
      'keyboard-desc':
        'ArrowLeft / ArrowRight change the active tab and move focus; Home / End jump to first / last tab.',
      'prop-tabs': 'Labels rendered on the role="tab" buttons.',
      'prop-activeIndex': 'Zero-based active tab index; exactly one BjTabPanel should use active at a time.',
      'prop-onChange': '(index: number) => void — fired on click and keyboard navigation.',
      'prop-tab-children': 'Children: usually one BjTabPanel per tabs entry, in the same order.',
      'prop-tab-className': 'Class on the .bj-tabs root.',
      'prop-panel-active': 'When true, the panel is shown (display block); otherwise hidden.',
      'prop-panel-children': 'Panel body (ReactNode).',
      'prop-panel-className': 'Class on .bj-tabs__panel.',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjTab, BjTabPanel } from '@flrxnt/dsbj/react'

export default function App() {
  const [active, setActive] = useState(0)

  return (
    <BjTab
      tabs={['Général', 'Sécurité', 'Notifications']}
      activeIndex={active}
      onChange={setActive}
    >
      <BjTabPanel active={active === 0}>
        <p>Contenu général.</p>
      </BjTabPanel>
      <BjTabPanel active={active === 1}>
        <p>Paramètres de sécurité.</p>
      </BjTabPanel>
      <BjTabPanel active={active === 2}>
        <p>Préférences de notifications.</p>
      </BjTabPanel>
    </BjTab>
  )
}`

const codeOnChange = `import { useCallback, useState } from 'react'
import { BjTab, BjTabPanel } from '@flrxnt/dsbj/react'

export function TabsWithLogging() {
  const [active, setActive] = useState(0)
  const handleChange = useCallback((index: number) => {
    console.log('tab', index)
    setActive(index)
  }, [])

  return (
    <BjTab tabs={['A', 'B']} activeIndex={active} onChange={handleChange}>
      <BjTabPanel active={active === 0}><p>Onglet A</p></BjTabPanel>
      <BjTabPanel active={active === 1}><p>Onglet B</p></BjTabPanel>
    </BjTab>
  )
}`

const codeRichChildren = `import { useState } from 'react'
import { BjTab, BjTabPanel } from '@flrxnt/dsbj/react'

export function RichTabs() {
  const [active, setActive] = useState(0)
  return (
    <BjTab tabs={['Résumé', 'Détails']} activeIndex={active} onChange={setActive}>
      <BjTabPanel active={active === 0}>
        <ul><li>Point 1</li><li>Point 2</li></ul>
      </BjTabPanel>
      <BjTabPanel active={active === 1}>
        <p>Texte et <strong>gras</strong>, <a href="#lien">lien</a>.</p>
      </BjTabPanel>
    </BjTab>
  )
}`

const codeCrossClass = `import { useState } from 'react'
import { BjTab, BjTabPanel } from '@flrxnt/dsbj/react'

export function StyledTabs() {
  const [active, setActive] = useState(0)
  return (
    <BjTab className="my-tabs" tabs={['Un', 'Deux']} activeIndex={active} onChange={setActive}>
      <BjTabPanel active={active === 0} className="my-panel">
        <p>Panneau 1</p>
      </BjTabPanel>
      <BjTabPanel active={active === 1} className="my-panel">
        <p>Panneau 2</p>
      </BjTabPanel>
    </BjTab>
  )
}`

const tabProps = computed(() => [
  { name: 'tabs', description: t('prop-tabs') },
  { name: 'activeIndex', description: t('prop-activeIndex') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: 'children', description: t('prop-tab-children') },
  { name: 'className', description: t('prop-tab-className') },
])

const panelProps = computed(() => [
  { name: 'active', description: t('prop-panel-active') },
  { name: 'children', description: t('prop-panel-children') },
  { name: 'className', description: t('prop-panel-className') },
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
        <div class="bj-tabs__panel" role="tabpanel" data-bj-expanded style="display: block">
          <p class="bj-text-sm">Contenu général.</p>
        </div>
        <div class="bj-tabs__panel" role="tabpanel" style="display: none">
          <p class="bj-text-sm">Paramètres de sécurité.</p>
        </div>
        <div class="bj-tabs__panel" role="tabpanel" style="display: none">
          <p class="bj-text-sm">Préférences de notifications.</p>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-tab-prop-values" :title="t('section-prop-values')">
    <p class="bj-text-sm" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)">
      Chaque index <code>i</code> du tableau <code>tabs</code> correspond à un
      <code v-pre>BjTabPanel</code> avec la prop booléenne <code v-pre>active={activeIndex === i}</code> (ou
      <code v-pre>active={active === i}</code> si vous nommez le state ainsi).
    </p>
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tab-onchange" :title="t('section-onchange')">
    <DocsCode :code="codeOnChange" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tab-children" :title="t('section-children')">
    <DocsPreview>
      <div class="bj-tabs">
        <div class="bj-tabs__list" role="tablist">
          <button type="button" role="tab" class="bj-tabs__tab" aria-selected="true" tabindex="0">Résumé</button>
          <button type="button" role="tab" class="bj-tabs__tab" aria-selected="false" tabindex="-1">Détails</button>
        </div>
        <div class="bj-tabs__panel" role="tabpanel" data-bj-expanded style="display: block">
          <ul class="bj-text-sm">
            <li>Point 1</li>
            <li>Point 2</li>
          </ul>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeRichChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tab-cross" :title="t('section-cross')">
    <DocsPreview>
      <div class="bj-tabs my-tabs-preview">
        <div class="bj-tabs__list" role="tablist">
          <button type="button" role="tab" class="bj-tabs__tab" aria-selected="true" tabindex="0">Un</button>
          <button type="button" role="tab" class="bj-tabs__tab" aria-selected="false" tabindex="-1">Deux</button>
        </div>
        <div class="bj-tabs__panel my-panel-preview" role="tabpanel" data-bj-expanded style="display: block">
          <p class="bj-text-sm">Panneau avec className</p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCrossClass" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-tab-keyboard" :title="t('section-keyboard')">
    <p class="bj-text-sm" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('keyboard-desc') }}</p>
  </DocsSection>

  <DocsSection id="react-tab-props-tab" :title="t('section-props-tab')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="tabProps" />
  </DocsSection>

  <DocsSection id="react-tab-props-panel" :title="t('section-props-panel')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="panelProps" />
  </DocsSection>
</template>
