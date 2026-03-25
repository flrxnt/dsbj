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
      desc: 'Composant Vue pour l’arborescence DSBJ. Structure récursive via nodes ; variantes cases à cocher et compact.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'prop-nodes':
        'Tableau de nœuds (id, label, icon, children et checked optionnels) ; children définit les sous-niveaux.',
      'prop-checkbox': 'Affiche une case à cocher par nœud (défaut : false).',
      'prop-compact': 'Réduit l’espacement (défaut : false).',
    },
    en: {
      title: 'BjTreeview',
      desc: 'Vue component for the DSBJ tree view. Recursive structure via nodes; optional checkboxes and compact density.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'prop-nodes':
        'Array of nodes with id, label, and optional icon, children, and checked; children defines nested levels.',
      'prop-checkbox': 'Shows a checkbox per node (default: false).',
      'prop-compact': 'Tighter spacing (default: false).',
    },
  },
})

const codeUsage = `<script setup>
import { BjTreeview } from '@flrxnt/dsbj/vue'

const nodes = [
  {
    id: '1',
    label: 'Documents',
    icon: 'ri-folder-line',
    children: [
      { id: '1-1', label: 'Rapport.pdf', icon: 'ri-file-text-line' },
    ],
  },
]
<\/script>

<template>
  <BjTreeview :nodes="nodes" :checkbox="false" :compact="false" />
</template>`

const propsRows = computed(() => [
  { name: 'nodes', description: t('prop-nodes') },
  { name: 'checkbox', description: t('prop-checkbox') },
  { name: 'compact', description: t('prop-compact') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-treeview-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-treeview-preview" :title="t('section-preview')">
    <DocsPreview>
      <ul class="bj-tree" role="tree">
        <li class="bj-tree__item" role="treeitem">
          <div class="bj-tree__item-content">
            <button
              type="button"
              class="bj-tree__toggle"
              data-bj-tree-toggle
              aria-expanded="true"
            >
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

  <DocsSection id="vue-treeview-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
