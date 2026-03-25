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

const propsRows = computed(() => [
  { name: 'nodes', description: t('prop-nodes') },
  { name: 'checkbox', description: t('prop-checkbox') },
  { name: 'compact', description: t('prop-compact') },
  { name: 'onCheck', description: t('prop-onCheck') },
  { name: 'onToggle', description: t('prop-onToggle') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-treeview-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
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
