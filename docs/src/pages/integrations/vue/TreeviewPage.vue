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
      'section-combos': 'Combinaisons checkbox × compact (4)',
      'section-emits': 'Événements',
      'section-slots': 'Slots',
      'section-no-vmodel': 'v-model',
      'section-preview-variants': 'Aperçu HTML (compact + cases à cocher)',
      'combo-intro': 'Les quatre booléens : (false,false), (true,false), (false,true), (true,true) sur la même structure nodes.',
      'emit-check': 'check(id, checked) : clic sur une case à cocher (prop checkbox true).',
      'emit-toggle': 'toggle(id, expanded) : ouverture ou fermeture d’un nœud avec enfants.',
      'no-slots-desc': 'Pas de slots : tout le libellé et les icônes viennent des objets nodes.',
      'no-vmodel-desc': 'Pas de v-model : l’expansion et les cases sont internes ; écoutez check et toggle pour synchroniser votre état.',
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
      'section-combos': 'checkbox × compact (4 combinations)',
      'section-emits': 'Events',
      'section-slots': 'Slots',
      'section-no-vmodel': 'v-model',
      'section-preview-variants': 'HTML preview (compact + checkboxes)',
      'combo-intro': 'Four flag pairs: (false,false), (true,false), (false,true), (true,true) on the same nodes tree.',
      'emit-check': 'check(id, checked): fired when a checkbox toggles (checkbox prop true).',
      'emit-toggle': 'toggle(id, expanded): branch expand/collapse for nodes with children.',
      'no-slots-desc': 'No slots: labels and icons come from the nodes objects only.',
      'no-vmodel-desc': 'No v-model: expansion and checks are internal; listen to check and toggle to sync app state.',
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

const codeCombos = `<BjTreeview :nodes="nodes" :checkbox="false" :compact="false" />
<BjTreeview :nodes="nodes" :checkbox="true" :compact="false" />
<BjTreeview :nodes="nodes" :checkbox="false" :compact="true" />
<BjTreeview :nodes="nodes" :checkbox="true" :compact="true" />`

const codeEmits = `<script setup>
import { BjTreeview } from '@flrxnt/dsbj/vue'

function onCheck(id: string, checked: boolean) {
  console.log('check', id, checked)
}
function onToggle(id: string, expanded: boolean) {
  console.log('toggle', id, expanded)
}
<\/script>

<template>
  <BjTreeview :nodes="nodes" :checkbox="true" @check="onCheck" @toggle="onToggle" />
</template>`

const propsRows = computed(() => [
  { name: 'nodes', description: t('prop-nodes') },
  { name: 'checkbox', description: t('prop-checkbox') },
  { name: 'compact', description: t('prop-compact') },
])

const emitRows = computed(() => [
  { name: 'check', description: t('emit-check') },
  { name: 'toggle', description: t('emit-toggle') },
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

  <DocsSection id="vue-treeview-preview-variants" :title="t('section-preview-variants')">
    <DocsPreview>
      <ul class="bj-tree bj-tree--compact bj-tree--checkbox" role="tree">
        <li class="bj-tree__item" role="treeitem">
          <div class="bj-tree__item-content">
            <button type="button" class="bj-tree__toggle" aria-expanded="true" data-bj-tree-toggle>
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
            <input type="checkbox" class="bj-tree__checkbox" checked aria-label="Projet" />
            <i class="ri-folder-line bj-tree__icon" aria-hidden="true"></i>
            <span class="bj-tree__label">Projet</span>
          </div>
          <ul class="bj-tree__branch" role="group">
            <li class="bj-tree__item" role="treeitem">
              <div class="bj-tree__item-content">
                <span class="bj-tree__toggle-spacer"></span>
                <input type="checkbox" class="bj-tree__checkbox" aria-label="Tâche" />
                <i class="ri-file-text-line bj-tree__icon" aria-hidden="true"></i>
                <span class="bj-tree__label">Tâche</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-treeview-combos" :title="t('section-combos')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('combo-intro') }}</p>
    <DocsCode :code="codeCombos" lang="html" />
  </DocsSection>

  <DocsSection id="vue-treeview-emits" :title="t('section-emits')">
    <DocsPropsTable :headers="['Événement', 'Description']" :rows="emitRows" />
    <DocsCode :code="codeEmits" lang="html" />
  </DocsSection>

  <DocsSection id="vue-treeview-slots" :title="t('section-slots')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-slots-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-treeview-vmodel" :title="t('section-no-vmodel')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('no-vmodel-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-treeview-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
