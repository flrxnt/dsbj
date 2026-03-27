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
      'section-combo': 'Cases à cocher + compact',
      'combo-intro':
        'Les modificateurs',
      'combo-intro-2':
        'et',
      'combo-intro-3':
        'peuvent être combinés sur la même racine',
      'combo-intro-4': '.',
      'section-pairings': 'Combinaisons cases à cocher × compact',
      'pairings-intro':
        'Quatre combinaisons : arborescence simple (sans case, espacement standard), cases à cocher seules, compact seul, puis',
      'pairings-intro-2':
        'ci-dessus pour les deux options à la fois — la même structure HTML s’applique dans chaque cas.',
      'pairing-card-simple': 'Simple',
      'pairing-card-checkbox': 'Cases',
      'pairing-card-compact': 'Compact',
      'pairing-card-both': 'Cases + compact',
      'pairing-card-both-plus': '+',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'th-class-attr': 'Classe / attribut',
      'th-description': 'Description',
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
      'prop-data-toggle':
        'Sur le bouton d’expansion : ancre pour le module JS treeview.',
    },
    en: {
      title: 'Tree View',
      desc: 'Expandable hierarchical structure with nodes, branches and leaves. Supports a checkbox variant with tri-state propagation.',
      'section-simple': 'Simple tree',
      'section-checkbox': 'With checkboxes',
      'section-compact': 'Compact variant',
      'section-combo': 'Checkboxes + compact',
      'combo-intro': 'Modifiers',
      'combo-intro-2': 'and',
      'combo-intro-3': 'can be combined on the same root',
      'combo-intro-4': '.',
      'section-pairings': 'Checkbox × compact combinations',
      'pairings-intro':
        'Four combinations: simple tree (no checkbox, default spacing), checkboxes only, compact only, then',
      'pairings-intro-2':
        'above for both flags at once—the same HTML structure applies in each case.',
      'pairing-card-simple': 'Simple',
      'pairing-card-checkbox': 'Checkboxes',
      'pairing-card-compact': 'Compact',
      'pairing-card-both': 'Checkboxes + compact',
      'pairing-card-both-plus': '+',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'th-class-attr': 'Class / attribute',
      'th-description': 'Description',
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
      'prop-data-toggle':
        'On the expand button: hook for the treeview JS module.',
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

const codePairingMatrix = `<!--
  bj-tree
  bj-tree bj-tree--checkbox
  bj-tree bj-tree--compact
  bj-tree bj-tree--checkbox bj-tree--compact
-->`

const codeCombo = `<ul class="bj-tree bj-tree--checkbox bj-tree--compact" role="tree">
  <li class="bj-tree__item" role="treeitem">
    <div class="bj-tree__item-content">
      <button type="button" class="bj-tree__toggle" data-bj-tree-toggle aria-expanded="true">
        <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
      </button>
      <input type="checkbox" class="bj-tree__checkbox" />
      <span class="bj-tree__label">Dossiers</span>
    </div>
    <ul class="bj-tree__branch" role="group">
      <li class="bj-tree__item" role="treeitem">
        <div class="bj-tree__item-content">
          <span class="bj-tree__toggle-spacer"></span>
          <input type="checkbox" class="bj-tree__checkbox" />
          <span class="bj-tree__label">Courrier</span>
        </div>
      </li>
      <li class="bj-tree__item" role="treeitem">
        <div class="bj-tree__item-content">
          <span class="bj-tree__toggle-spacer"></span>
          <input type="checkbox" class="bj-tree__checkbox" />
          <span class="bj-tree__label">Archives</span>
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

const propsTableHeaders = computed((): [string, string] => [
  t('th-class-attr'),
  t('th-description'),
])

const propsRows = computed(() => [
  { name: 'bj-tree', description: t('prop-bj-tree') },
  { name: 'bj-tree__item', description: t('prop-bj-tree-item') },
  { name: 'bj-tree__item-content', description: t('prop-bj-tree-item-content') },
  { name: 'bj-tree__branch', description: t('prop-bj-tree-branch') },
  { name: 'bj-tree__toggle', description: t('prop-bj-tree-toggle') },
  {
    name: 'data-bj-tree-toggle',
    description: t('prop-data-toggle'),
  },
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

  <DocsSection id="combo-tree" :title="t('section-combo')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('combo-intro') }}
      <code>bj-tree--checkbox</code>
      {{ t('combo-intro-2') }}
      <code>bj-tree--compact</code>
      {{ t('combo-intro-3') }}
      <code>bj-tree</code>{{ t('combo-intro-4') }}
      Le composant Vue
      <code>BjTreeview</code>
      applique les mêmes classes sur le rendu HTML.
    </p>
    <DocsPreview>
      <ul class="bj-tree bj-tree--checkbox bj-tree--compact" role="tree">
        <li class="bj-tree__item" role="treeitem">
          <div class="bj-tree__item-content">
            <button type="button" class="bj-tree__toggle" data-bj-tree-toggle aria-expanded="true">
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
            <input type="checkbox" class="bj-tree__checkbox" />
            <span class="bj-tree__label">Dossiers</span>
          </div>
          <ul class="bj-tree__branch" role="group">
            <li class="bj-tree__item" role="treeitem">
              <div class="bj-tree__item-content">
                <span class="bj-tree__toggle-spacer"></span>
                <input type="checkbox" class="bj-tree__checkbox" />
                <span class="bj-tree__label">Courrier</span>
              </div>
            </li>
            <li class="bj-tree__item" role="treeitem">
              <div class="bj-tree__item-content">
                <span class="bj-tree__toggle-spacer"></span>
                <input type="checkbox" class="bj-tree__checkbox" />
                <span class="bj-tree__label">Archives</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </DocsPreview>
    <DocsCode :code="codeCombo" />
  </DocsSection>

  <DocsSection id="pairings-tree" :title="t('section-pairings')">
    <p class="bj-text-md" style="color: var(--bj-text-alt); max-width: 44rem">
      {{ t('pairings-intro') }}
      <code>bj-tree--checkbox bj-tree--compact</code>
      {{ t('pairings-intro-2') }}
    </p>
    <DocsPreview
      style="
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
        gap: var(--bj-spacing-3v);
      "
    >
      <div
        class="bj-text-xs"
        style="
          padding: var(--bj-spacing-2v);
          border: 1px solid var(--bj-border-subtle);
          border-radius: var(--bj-radius-sm);
        "
      >
        <strong>{{ t('pairing-card-simple') }}</strong>
        <div><code>bj-tree</code></div>
      </div>
      <div
        class="bj-text-xs"
        style="
          padding: var(--bj-spacing-2v);
          border: 1px solid var(--bj-border-subtle);
          border-radius: var(--bj-radius-sm);
        "
      >
        <strong>{{ t('pairing-card-checkbox') }}</strong>
        <div><code>bj-tree--checkbox</code></div>
      </div>
      <div
        class="bj-text-xs"
        style="
          padding: var(--bj-spacing-2v);
          border: 1px solid var(--bj-border-subtle);
          border-radius: var(--bj-radius-sm);
        "
      >
        <strong>{{ t('pairing-card-compact') }}</strong>
        <div><code>bj-tree--compact</code></div>
      </div>
      <div
        class="bj-text-xs"
        style="
          padding: var(--bj-spacing-2v);
          border: 1px solid var(--bj-border-subtle);
          border-radius: var(--bj-radius-sm);
        "
      >
        <strong>{{ t('pairing-card-both') }}</strong>
        <div>
          <code>bj-tree--checkbox</code> {{ t('pairing-card-both-plus') }}
          <code>bj-tree--compact</code>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codePairingMatrix" />
  </DocsSection>

  <DocsSection id="classes-tree" :title="t('section-classes-css')">
    <DocsPropsTable :headers="propsTableHeaders" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-tree" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
