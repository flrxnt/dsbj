<script setup lang="ts">
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Liste déroulante',
      desc: 'Choix d\u2019une option dans une liste fermée, avec styles homogènes aux autres champs.',
      'section-example': 'Exemple',
      'section-variants': 'Variantes',
      'section-variants-body':
        '<code>bj-select--error</code> pour l\u2019état d\u2019erreur. Désactivation native <code>disabled</code>.',
      'section-searchable': 'Variante avec recherche',
      'section-searchable-body':
        'Les classes <code>bj-select-custom*</code> remplacent le select natif par un panneau déroulant avec champ de recherche intégré.',
      'section-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'prop-select-group': 'Groupe label + select.',
      'prop-select': 'Liste déroulante.',
      'prop-select-error': 'Bordure d\u2019erreur.',
      'prop-custom': 'Conteneur du select custom.',
      'prop-custom-trigger': 'Bouton déclencheur.',
      'prop-custom-panel': 'Panneau déroulant.',
      'prop-custom-search': 'Champ de recherche dans le panneau.',
      'prop-custom-listbox': 'Liste des options.',
      'prop-custom-option': 'Élément d\u2019option.',
      'a11y-note':
        'Liez le <code>label</code> au <code>select</code>. En erreur\u00a0: <code>aria-invalid</code> et message relié par <code>aria-describedby</code>. En mode recherche, le trigger porte <code>role="combobox"</code> et la liste <code>role="listbox"</code>.',
    },
    en: {
      title: 'Select (dropdown)',
      desc: 'Pick one option from a closed list, with styling consistent with other fields.',
      'section-example': 'Example',
      'section-variants': 'Variants',
      'section-variants-body':
        '<code>bj-select--error</code> for the error state. Native disable with <code>disabled</code>.',
      'section-searchable': 'Searchable variant',
      'section-searchable-body':
        'The <code>bj-select-custom*</code> classes replace the native select with a dropdown panel featuring a built-in search field.',
      'section-css': 'CSS classes',
      'section-a11y': 'Accessibility',
      'prop-select-group': 'Label + select group.',
      'prop-select': 'Dropdown list.',
      'prop-select-error': 'Error border.',
      'prop-custom': 'Custom select container.',
      'prop-custom-trigger': 'Trigger button.',
      'prop-custom-panel': 'Dropdown panel.',
      'prop-custom-search': 'Search field inside the panel.',
      'prop-custom-listbox': 'Options list.',
      'prop-custom-option': 'Option element.',
      'a11y-note':
        'Link the <code>label</code> to the <code>select</code>. On error: <code>aria-invalid</code> and message linked via <code>aria-describedby</code>. In searchable mode the trigger has <code>role="combobox"</code> and the list <code>role="listbox"</code>.',
    },
  },
})

const codeExample = `<div class="bj-select-group">
  <select class="bj-select">\u2026</select>
</div>`

const codeSearchable = `<div class="bj-select-group">
  <label class="bj-label" for="sc1">Commune</label>
  <div class="bj-select-custom">
    <button id="sc1" class="bj-select-custom__trigger"
      role="combobox" aria-expanded="true" aria-haspopup="listbox">
      <span>Cotonou</span>
      <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="bj-select-custom__panel">
      <input class="bj-select-custom__search"
        type="text" placeholder="Rechercher\u2026" />
      <ul class="bj-select-custom__listbox" role="listbox">
        <li class="bj-select-custom__option"
          role="option" aria-selected="true">Cotonou</li>
        <li class="bj-select-custom__option"
          role="option">Porto-Novo</li>
      </ul>
    </div>
  </div>
</div>`

const propsRows = computed(() => [
  { name: 'bj-select-group', description: t('prop-select-group') },
  { name: 'bj-select', description: t('prop-select') },
  { name: 'bj-select--error', description: t('prop-select-error') },
  { name: 'bj-select-custom', description: t('prop-custom') },
  { name: 'bj-select-custom__trigger', description: t('prop-custom-trigger') },
  { name: 'bj-select-custom__panel', description: t('prop-custom-panel') },
  { name: 'bj-select-custom__search', description: t('prop-custom-search') },
  { name: 'bj-select-custom__listbox', description: t('prop-custom-listbox') },
  { name: 'bj-select-custom__option', description: t('prop-custom-option') },
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

  <DocsSection id="sec-exemple" :title="t('section-example')">
    <DocsPreview>
      <div class="bj-select-group">
        <label class="bj-label" for="ex-s1">Commune</label>
        <select id="ex-s1" class="bj-select">
          <option value="">Sélectionner…</option>
          <option value="cotonou">Cotonou</option>
          <option value="porto">Porto-Novo</option>
        </select>
      </div>
      <div class="bj-select-group">
        <label class="bj-label" for="ex-s2">Statut (erreur)</label>
        <select
          id="ex-s2"
          class="bj-select bj-select--error"
          aria-invalid="true"
          aria-describedby="ex-s2-e"
        >
          <option value="">Choisir…</option>
        </select>
        <p id="ex-s2-e" class="bj-message bj-message--error" role="alert">
          Champ obligatoire.
        </p>
      </div>
      <div class="bj-select-group">
        <label class="bj-label" for="ex-s3">Désactivé</label>
        <select id="ex-s3" class="bj-select" disabled>
          <option>Non modifiable</option>
        </select>
      </div>
    </DocsPreview>
    <DocsCode :code="codeExample" />
  </DocsSection>

  <DocsSection id="sec-variantes" :title="t('section-variants')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt)"
      v-html="t('section-variants-body')"
    />
  </DocsSection>

  <DocsSection id="sec-searchable" :title="t('section-searchable')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)" v-html="t('section-searchable-body')" />
    <DocsPreview style="min-height: 16rem">
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="ex-sc1">Commune</label>
        <div class="bj-select-custom bj-select-custom--open">
          <button id="ex-sc1" type="button" class="bj-select-custom__trigger" role="combobox" aria-expanded="true" aria-haspopup="listbox">
            <span>Cotonou</span>
            <i class="ri-arrow-down-s-line" aria-hidden="true" />
          </button>
          <div class="bj-select-custom__panel" style="position: relative">
            <input class="bj-select-custom__search" type="text" placeholder="Rechercher…" value="Coto" />
            <ul class="bj-select-custom__listbox" role="listbox">
              <li class="bj-select-custom__option bj-select-custom__option--active" role="option" aria-selected="true">Cotonou</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSearchable" />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilite" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')"></span>
    </DocsA11yNote>
  </DocsSection>
</template>
