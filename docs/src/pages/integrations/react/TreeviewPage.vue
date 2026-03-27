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
      title: 'BjTreeview',
      desc: 'Arborescence React récursive : la prop nodes décrit id, label, icon, enfants et checked optionnel. L’état ouvert est interne ; onToggle signale les changements d’expansion. Avec checkbox activé, onCheck signale les bascules et l’état initial reprend les nœuds marqués checked.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-nodes': 'Tableau de TreeNode : id, label, icon, children et checked optionnels.',
      'prop-checkbox': 'Affiche une case par nœud (défaut : false).',
      'prop-compact': 'Densité réduite (défaut : false).',
      'prop-onCheck': 'Callback après bascule : id du nœud et nouveau booléen coché.',
      'prop-onToggle': 'Callback après expansion : id du nœud et booléen expanded.',
      'prop-className': 'Classe sur la racine ul.bj-tree.',
      'section-checkbox': 'checkbox : true avec cases à cocher',
      'section-compact': 'compact : densité réduite',
      'section-oncheck': 'Callback onCheck',
      'section-ontoggle': 'Callback onToggle',
      'section-cross': 'Combinaison : checkbox + compact + callbacks',
      'section-initial-checked': 'État initial : nœuds avec checked: true',
    },
    en: {
      title: 'BjTreeview',
      desc: 'Recursive React tree: nodes carry id, label, optional icon, children, and optional checked. Expand state is internal; onToggle reports expansion changes. With checkbox mode, onCheck fires on toggle and initial selection follows nodes marked checked.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-nodes': 'Array of TreeNode: id, label, and optional icon, children, checked.',
      'prop-checkbox': 'Renders a checkbox per node (default: false).',
      'prop-compact': 'Tighter layout (default: false).',
      'prop-onCheck': 'Callback after a checkbox toggle: node id and new checked value.',
      'prop-onToggle': 'Callback after expand or collapse: node id and expanded flag.',
      'prop-className': 'Class on the root ul.bj-tree.',
      'section-checkbox': 'checkbox: true with checkboxes',
      'section-compact': 'compact: tighter layout',
      'section-oncheck': 'onCheck callback',
      'section-ontoggle': 'onToggle callback',
      'section-cross': 'Combination: checkbox, compact, and callbacks',
      'section-initial-checked': 'Initial state: nodes with checked: true',
    },
  },
})

const codeUsage = `import { BjTreeview } from '@flrxnt/dsbj/react'

const nodes = [
  {
    id: '1',
    label: 'Documents',
    icon: 'ri-folder-line',
    children: [{ id: '1-1', label: 'Rapport.pdf', icon: 'ri-file-text-line' }],
  },
]

export function Example() {
  return <BjTreeview nodes={nodes} checkbox={false} compact={false} />
}`

const codeCheckbox = `import { BjTreeview } from '@flrxnt/dsbj/react'

const nodes = [
  {
    id: 'root',
    label: 'Dossier',
    children: [
      { id: 'a', label: 'Fichier A' },
      { id: 'b', label: 'Fichier B', checked: true },
    ],
  },
]

export function TreeWithBoxes() {
  return <BjTreeview nodes={nodes} checkbox />
}`

const codeCompact = `import { BjTreeview } from '@flrxnt/dsbj/react'

export function CompactTree({ nodes }: { nodes: Parameters<typeof BjTreeview>[0]['nodes'] }) {
  return <BjTreeview nodes={nodes} compact className="my-tree" />
}`

const codeOnCheck = `import { useCallback } from 'react'
import { BjTreeview } from '@flrxnt/dsbj/react'

export function TreeLoggedCheck({ nodes }: { nodes: Parameters<typeof BjTreeview>[0]['nodes'] }) {
  const onCheck = useCallback((id: string, checked: boolean) => {
    console.log('check', id, checked)
  }, [])

  return <BjTreeview nodes={nodes} checkbox onCheck={onCheck} />
}`

const codeOnToggle = `import { useCallback } from 'react'
import { BjTreeview } from '@flrxnt/dsbj/react'

export function TreeLoggedToggle({ nodes }: { nodes: Parameters<typeof BjTreeview>[0]['nodes'] }) {
  const onToggle = useCallback((id: string, expanded: boolean) => {
    console.log('toggle', id, expanded)
  }, [])

  return <BjTreeview nodes={nodes} onToggle={onToggle} />
}`

const codeCross = `import { useCallback } from 'react'
import { BjTreeview } from '@flrxnt/dsbj/react'

export function FullTree({ nodes }: { nodes: Parameters<typeof BjTreeview>[0]['nodes'] }) {
  const onCheck = useCallback((id: string, checked: boolean) => {
    /* persistance, analytics… */
  }, [])
  const onToggle = useCallback((id: string, expanded: boolean) => {
    /* journalisation */
  }, [])

  return (
    <BjTreeview
      nodes={nodes}
      checkbox
      compact
      className="my-tree"
      onCheck={onCheck}
      onToggle={onToggle}
    />
  )
}`

const codeInitialChecked = `const nodes = [
  {
    id: 'p',
    label: 'Parent',
    children: [
      { id: 'c1', label: 'Coché au chargement', checked: true },
      { id: 'c2', label: 'Non coché' },
    ],
  },
]

export function Preselected() {
  return <BjTreeview nodes={nodes} checkbox />
}`

const propsRows = computed(() => [
  { name: 'nodes', description: t('prop-nodes') },
  { name: 'checkbox', description: t('prop-checkbox') },
  { name: 'compact', description: t('prop-compact') },
  { name: 'onCheck', description: t('prop-onCheck') },
  { name: 'onToggle', description: t('prop-onToggle') },
  { name: 'className', description: t('prop-className') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-treeview-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-treeview-checkbox" :title="t('section-checkbox')">
    <DocsPreview>
      <ul class="bj-tree bj-tree--checkbox" role="tree">
        <li class="bj-tree__item" role="treeitem">
          <div class="bj-tree__item-content">
            <button type="button" class="bj-tree__toggle" aria-expanded="true" data-bj-tree-toggle>
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
            <input type="checkbox" class="bj-tree__checkbox" checked />
            <i class="ri-folder-line bj-tree__icon" aria-hidden="true"></i>
            <span class="bj-tree__label">Dossier</span>
          </div>
          <ul class="bj-tree__branch" role="group">
            <li class="bj-tree__item" role="treeitem">
              <div class="bj-tree__item-content">
                <span class="bj-tree__toggle-spacer"></span>
                <input type="checkbox" class="bj-tree__checkbox" />
                <i class="ri-file-text-line bj-tree__icon" aria-hidden="true"></i>
                <span class="bj-tree__label">Fichier A</span>
              </div>
            </li>
            <li class="bj-tree__item" role="treeitem">
              <div class="bj-tree__item-content">
                <span class="bj-tree__toggle-spacer"></span>
                <input type="checkbox" class="bj-tree__checkbox" checked />
                <i class="ri-file-text-line bj-tree__icon" aria-hidden="true"></i>
                <span class="bj-tree__label">Fichier B</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </DocsPreview>
    <DocsCode :code="codeCheckbox" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-treeview-compact" :title="t('section-compact')">
    <DocsPreview>
      <ul class="bj-tree bj-tree--compact my-tree-preview" role="tree">
        <li class="bj-tree__item" role="treeitem">
          <div class="bj-tree__item-content">
            <span class="bj-tree__toggle-spacer"></span>
            <i class="ri-file-line bj-tree__icon" aria-hidden="true"></i>
            <span class="bj-tree__label">Compact</span>
          </div>
        </li>
      </ul>
    </DocsPreview>
    <DocsCode :code="codeCompact" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-treeview-oncheck" :title="t('section-oncheck')">
    <DocsCode :code="codeOnCheck" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-treeview-ontoggle" :title="t('section-ontoggle')">
    <DocsCode :code="codeOnToggle" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-treeview-initial-checked" :title="t('section-initial-checked')">
    <DocsCode :code="codeInitialChecked" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-treeview-cross" :title="t('section-cross')">
    <DocsCode :code="codeCross" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-treeview-preview" :title="t('section-preview')">
    <DocsPreview>
      <ul class="bj-tree" role="tree">
        <li class="bj-tree__item" role="treeitem">
          <div class="bj-tree__item-content">
            <button type="button" class="bj-tree__toggle" aria-expanded="true" data-bj-tree-toggle>
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
            <i class="ri-folder-open-line bj-tree__icon" aria-hidden="true"></i>
            <span class="bj-tree__label">Documents</span>
          </div>
          <ul class="bj-tree__branch" role="group">
            <li class="bj-tree__item" role="treeitem">
              <div class="bj-tree__item-content">
                <span class="bj-tree__toggle-spacer"></span>
                <i class="ri-file-text-line bj-tree__icon" aria-hidden="true"></i>
                <span class="bj-tree__label">Rapport.pdf</span>
              </div>
            </li>
            <li class="bj-tree__item" role="treeitem">
              <div class="bj-tree__item-content">
                <span class="bj-tree__toggle-spacer"></span>
                <i class="ri-file-text-line bj-tree__icon" aria-hidden="true"></i>
                <span class="bj-tree__label">Note de service.docx</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-treeview-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
