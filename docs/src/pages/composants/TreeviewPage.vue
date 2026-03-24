<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Arborescence',
      desc: 'Structure hiérarchique dépliable avec nœuds, branches et feuilles. Supporte une variante avec cases à cocher et propagation tri-état.',
      'section-simple': 'Arborescence simple',
      'section-checkbox': 'Avec cases à cocher',
      'section-compact': 'Variante compacte',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'a11y-note': 'Utilisez <code>role="tree"</code> sur le conteneur racine, <code>role="treeitem"</code> sur chaque nœud et <code>role="group"</code> sur les sous-arbres. Les boutons toggle doivent porter <code>aria-expanded</code>. La navigation clavier (flèches, Entrée, Espace) est recommandée pour la conformité WCAG.',
      'prop-bj-tree': 'Conteneur racine <code>&lt;ul&gt;</code> avec <code>role="tree"</code>.',
      'prop-bj-tree-item': 'Élément <code>&lt;li&gt;</code> avec <code>role="treeitem"</code>.',
      'prop-bj-tree-item-content': 'Ligne de contenu (toggle + label + icône).',
      'prop-bj-tree-branch': 'Sous-arbre <code>&lt;ul&gt;</code> avec <code>role="group"</code>.',
      'prop-bj-tree-toggle': 'Bouton expand/collapse (chevron).',
      'prop-bj-tree-toggle-spacer': 'Espace réservé pour aligner les feuilles sans toggle.',
      'prop-bj-tree-label': 'Libellé du nœud.',
      'prop-bj-tree-icon': 'Icône optionnelle du nœud.',
      'prop-bj-tree-checkbox': 'Case à cocher (avec <code>bj-tree--checkbox</code>).',
      'prop-bj-tree-checkbox-mod': 'Active les checkboxes et la propagation tri-état.',
      'prop-bj-tree-compact': 'Variante compacte (padding réduit).',
    },
    en: {
      title: 'Tree View',
      desc: 'Expandable hierarchical structure with nodes, branches and leaves. Supports a checkbox variant with tri-state propagation.',
      'section-simple': 'Simple tree',
      'section-checkbox': 'With checkboxes',
      'section-compact': 'Compact variant',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'a11y-note': 'Use <code>role="tree"</code> on the root container, <code>role="treeitem"</code> on each node and <code>role="group"</code> on subtrees. Toggle buttons must carry <code>aria-expanded</code>. Keyboard navigation (arrows, Enter, Space) is recommended for WCAG compliance.',
      'prop-bj-tree': 'Root <code>&lt;ul&gt;</code> container with <code>role="tree"</code>.',
      'prop-bj-tree-item': '<code>&lt;li&gt;</code> element with <code>role="treeitem"</code>.',
      'prop-bj-tree-item-content': 'Content row (toggle + label + icon).',
      'prop-bj-tree-branch': '<code>&lt;ul&gt;</code> subtree with <code>role="group"</code>.',
      'prop-bj-tree-toggle': 'Expand/collapse button (chevron).',
      'prop-bj-tree-toggle-spacer': 'Spacer to align leaves without a toggle.',
      'prop-bj-tree-label': 'Node label.',
      'prop-bj-tree-icon': 'Optional node icon.',
      'prop-bj-tree-checkbox': 'Checkbox (with <code>bj-tree--checkbox</code>).',
      'prop-bj-tree-checkbox-mod': 'Enables checkboxes and tri-state propagation.',
      'prop-bj-tree-compact': 'Compact variant (reduced padding).',
    },
  },
})

const codeSimple = `<ul class="bj-tree" role="tree">
  <li class="bj-tree__item" role="treeitem">
    <div class="bj-tree__item-content">
      <button type="button" class="bj-tree__toggle" data-bj-tree-toggle aria-expanded="true">
        <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
      </button>
      <i class="ri-folder-open-line bj-tree__icon" aria-hidden="true"></i>
      <span class="bj-tree__label">Documents</span>
    </div>
    <ul class="bj-tree__branch" role="group">
      <li class="bj-tree__item" role="treeitem">
        <div class="bj-tree__item-content">
          <button type="button" class="bj-tree__toggle" data-bj-tree-toggle aria-expanded="false">
            <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
          </button>
          <i class="ri-folder-line bj-tree__icon" aria-hidden="true"></i>
          <span class="bj-tree__label">Rapports</span>
        </div>
        <ul class="bj-tree__branch" role="group" hidden>
          <li class="bj-tree__item" role="treeitem">
            <div class="bj-tree__item-content">
              <span class="bj-tree__toggle-spacer"></span>
              <i class="ri-file-text-line bj-tree__icon" aria-hidden="true"></i>
              <span class="bj-tree__label">Rapport 2025.pdf</span>
            </div>
          </li>
        </ul>
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
</ul>`

const codeCheckbox = `<ul class="bj-tree bj-tree--checkbox" role="tree">
  <li class="bj-tree__item" role="treeitem">
    <div class="bj-tree__item-content">
      <button type="button" class="bj-tree__toggle" data-bj-tree-toggle aria-expanded="true">
        <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
      </button>
      <input type="checkbox" class="bj-tree__checkbox" />
      <span class="bj-tree__label">Permissions</span>
    </div>
    <ul class="bj-tree__branch" role="group">
      <li class="bj-tree__item" role="treeitem">
        <div class="bj-tree__item-content">
          <span class="bj-tree__toggle-spacer"></span>
          <input type="checkbox" class="bj-tree__checkbox" />
          <span class="bj-tree__label">Lecture</span>
        </div>
      </li>
      <li class="bj-tree__item" role="treeitem">
        <div class="bj-tree__item-content">
          <span class="bj-tree__toggle-spacer"></span>
          <input type="checkbox" class="bj-tree__checkbox" />
          <span class="bj-tree__label">Écriture</span>
        </div>
      </li>
      <li class="bj-tree__item" role="treeitem">
        <div class="bj-tree__item-content">
          <span class="bj-tree__toggle-spacer"></span>
          <input type="checkbox" class="bj-tree__checkbox" />
          <span class="bj-tree__label">Suppression</span>
        </div>
      </li>
    </ul>
  </li>
</ul>`

const codeCompact = `<ul class="bj-tree bj-tree--compact" role="tree">
  <li class="bj-tree__item" role="treeitem">
    <div class="bj-tree__item-content">
      <button type="button" class="bj-tree__toggle" data-bj-tree-toggle aria-expanded="true">
        <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
      </button>
      <span class="bj-tree__label">Racine</span>
    </div>
    <ul class="bj-tree__branch" role="group">
      <li class="bj-tree__item" role="treeitem">
        <div class="bj-tree__item-content">
          <span class="bj-tree__toggle-spacer"></span>
          <span class="bj-tree__label">Élément 1</span>
        </div>
      </li>
      <li class="bj-tree__item" role="treeitem">
        <div class="bj-tree__item-content">
          <span class="bj-tree__toggle-spacer"></span>
          <span class="bj-tree__label">Élément 2</span>
        </div>
      </li>
    </ul>
  </li>
</ul>`

const propsRows = computed(() => [
  { name: 'bj-tree', description: t('prop-bj-tree') },
  { name: 'bj-tree__item', description: t('prop-bj-tree-item') },
  { name: 'bj-tree__item-content', description: t('prop-bj-tree-item-content') },
  { name: 'bj-tree__branch', description: t('prop-bj-tree-branch') },
  { name: 'bj-tree__toggle', description: t('prop-bj-tree-toggle') },
  { name: 'bj-tree__toggle-spacer', description: t('prop-bj-tree-toggle-spacer') },
  { name: 'bj-tree__label', description: t('prop-bj-tree-label') },
  { name: 'bj-tree__icon', description: t('prop-bj-tree-icon') },
  { name: 'bj-tree__checkbox', description: t('prop-bj-tree-checkbox') },
  { name: 'bj-tree--checkbox', description: t('prop-bj-tree-checkbox-mod') },
  { name: 'bj-tree--compact', description: t('prop-bj-tree-compact') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="simple-tree" :title="t('section-simple')">
    <DocsPreview>
      <ul class="bj-tree" role="tree">
        <li class="bj-tree__item" role="treeitem">
          <div class="bj-tree__item-content">
            <button type="button" class="bj-tree__toggle" data-bj-tree-toggle aria-expanded="true">
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
            <i class="ri-folder-open-line bj-tree__icon" aria-hidden="true"></i>
            <span class="bj-tree__label">Documents</span>
          </div>
          <ul class="bj-tree__branch" role="group">
            <li class="bj-tree__item" role="treeitem">
              <div class="bj-tree__item-content">
                <button type="button" class="bj-tree__toggle" data-bj-tree-toggle aria-expanded="false">
                  <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
                </button>
                <i class="ri-folder-line bj-tree__icon" aria-hidden="true"></i>
                <span class="bj-tree__label">Rapports</span>
              </div>
              <ul class="bj-tree__branch" role="group" hidden>
                <li class="bj-tree__item" role="treeitem">
                  <div class="bj-tree__item-content">
                    <span class="bj-tree__toggle-spacer"></span>
                    <i class="ri-file-text-line bj-tree__icon" aria-hidden="true"></i>
                    <span class="bj-tree__label">Rapport 2025.pdf</span>
                  </div>
                </li>
              </ul>
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
    <DocsCode :code="codeSimple" />
  </DocsSection>

  <DocsSection id="checkbox-tree" :title="t('section-checkbox')">
    <DocsPreview>
      <ul class="bj-tree bj-tree--checkbox" role="tree">
        <li class="bj-tree__item" role="treeitem">
          <div class="bj-tree__item-content">
            <button type="button" class="bj-tree__toggle" data-bj-tree-toggle aria-expanded="true">
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
            <input type="checkbox" class="bj-tree__checkbox" />
            <span class="bj-tree__label">Permissions</span>
          </div>
          <ul class="bj-tree__branch" role="group">
            <li class="bj-tree__item" role="treeitem">
              <div class="bj-tree__item-content">
                <span class="bj-tree__toggle-spacer"></span>
                <input type="checkbox" class="bj-tree__checkbox" />
                <span class="bj-tree__label">Lecture</span>
              </div>
            </li>
            <li class="bj-tree__item" role="treeitem">
              <div class="bj-tree__item-content">
                <span class="bj-tree__toggle-spacer"></span>
                <input type="checkbox" class="bj-tree__checkbox" />
                <span class="bj-tree__label">Écriture</span>
              </div>
            </li>
            <li class="bj-tree__item" role="treeitem">
              <div class="bj-tree__item-content">
                <span class="bj-tree__toggle-spacer"></span>
                <input type="checkbox" class="bj-tree__checkbox" />
                <span class="bj-tree__label">Suppression</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </DocsPreview>
    <DocsCode :code="codeCheckbox" />
  </DocsSection>

  <DocsSection id="compact-tree" :title="t('section-compact')">
    <DocsPreview>
      <ul class="bj-tree bj-tree--compact" role="tree">
        <li class="bj-tree__item" role="treeitem">
          <div class="bj-tree__item-content">
            <button type="button" class="bj-tree__toggle" data-bj-tree-toggle aria-expanded="true">
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
            <span class="bj-tree__label">Racine</span>
          </div>
          <ul class="bj-tree__branch" role="group">
            <li class="bj-tree__item" role="treeitem">
              <div class="bj-tree__item-content">
                <span class="bj-tree__toggle-spacer"></span>
                <span class="bj-tree__label">Élément 1</span>
              </div>
            </li>
            <li class="bj-tree__item" role="treeitem">
              <div class="bj-tree__item-content">
                <span class="bj-tree__toggle-spacer"></span>
                <span class="bj-tree__label">Élément 2</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </DocsPreview>
    <DocsCode :code="codeCompact" />
  </DocsSection>

  <DocsSection id="classes-tree" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-tree" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
