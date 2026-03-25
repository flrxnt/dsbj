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
      title: 'BjSelect',
      desc: 'Liste d\u00e9roulante Vue avec lib\u00e9ll\u00e9, aide, placeholder, options et messages de validation. Supporte un mode recherche avec dropdown custom.',
      'section-usage': 'Utilisation',
      'section-searchable': 'Mode recherche',
      'section-preview': 'Aper\u00e7u',
      'section-props': 'Props',
      'prop-modelValue': 'Valeur s\u00e9lectionn\u00e9e (v-model), cha\u00eene.',
      'prop-label': 'Lib\u00e9ll\u00e9 au-dessus du select (associ\u00e9 via for/id).',
      'prop-hint': 'Texte d\u2019aide sous le lib\u00e9ll\u00e9.',
      'prop-options': 'Tableau d\u2019objets avec value, label et disabled optionnel.',
      'prop-error': 'Met le champ en \u00e9tat d\u2019erreur visuelle.',
      'prop-message': 'Message sous le champ (couleur selon error).',
      'prop-disabled': 'D\u00e9sactive le select.',
      'prop-placeholder': 'Option initiale vide et d\u00e9sactiv\u00e9e avec ce lib\u00e9ll\u00e9.',
      'prop-searchable': 'Active le mode recherche : remplace le select natif par un dropdown custom avec filtre.',
      'prop-searchPlaceholder': 'Placeholder du champ de recherche (d\u00e9faut : \u00ab Rechercher\u2026 \u00bb).',
      'prop-noResults': 'Texte affich\u00e9 quand aucune option ne correspond.',
    },
    en: {
      title: 'BjSelect',
      desc: 'Vue select with label, hint, placeholder, options, and validation messaging. Supports a searchable mode with a custom dropdown.',
      'section-usage': 'Usage',
      'section-searchable': 'Searchable mode',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-modelValue': 'Selected value (v-model), string.',
      'prop-label': 'Label above the select (linked via for/id).',
      'prop-hint': 'Help text below the label.',
      'prop-options': 'Array of objects with value, label, and optional disabled.',
      'prop-error': 'Applies error styling to the field.',
      'prop-message': 'Message below the field (color follows error).',
      'prop-disabled': 'Disables the select.',
      'prop-placeholder': 'Initial empty disabled option with this label.',
      'prop-searchable': 'Enables searchable mode: replaces native select with a custom dropdown + filter.',
      'prop-searchPlaceholder': 'Placeholder for the search input (default: "Rechercher\u2026").',
      'prop-noResults': 'Text shown when no option matches.',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjSelect } from '@flrxnt/dsbj/vue'

const dept = ref('')
const options = [
  { value: 'dg', label: 'Direction g\u00e9n\u00e9rale' },
  { value: 'dr', label: 'Direction r\u00e9gionale' },
]
<\/script>

<template>
  <BjSelect
    v-model="dept"
    label="Direction"
    hint="Choisir une direction dans la liste"
    placeholder="S\u00e9lectionner\u2026"
    :options="options"
  />
</template>`

const codeSearchable = `<script setup>
import { ref } from 'vue'
import { BjSelect } from '@flrxnt/dsbj/vue'

const city = ref('')
const cities = [
  { value: 'cotonou', label: 'Cotonou' },
  { value: 'porto', label: 'Porto-Novo' },
  { value: 'parakou', label: 'Parakou' },
  { value: 'abomey', label: 'Abomey-Calavi' },
  { value: 'djougou', label: 'Djougou' },
]
<\/script>

<template>
  <BjSelect
    v-model="city"
    label="Commune"
    placeholder="S\u00e9lectionner\u2026"
    :options="cities"
    searchable
  />
</template>`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'options', description: t('prop-options') },
  { name: 'error', description: t('prop-error') },
  { name: 'message', description: t('prop-message') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'placeholder', description: t('prop-placeholder') },
  { name: 'searchable', description: t('prop-searchable') },
  { name: 'searchPlaceholder', description: t('prop-searchPlaceholder') },
  { name: 'noResults', description: t('prop-noResults') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-select-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-select-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="vue-sel-prev">Direction</label>
        <span class="bj-hint">Choisir une direction dans la liste</span>
        <select id="vue-sel-prev" class="bj-select">
          <option value="" disabled selected>Sélectionner…</option>
          <option value="dg">Direction générale</option>
          <option value="dr">Direction régionale</option>
        </select>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-select-searchable" :title="t('section-searchable')">
    <DocsCode :code="codeSearchable" lang="html" />
    <DocsPreview style="min-height: 18rem">
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="vue-sel-search">Commune</label>
        <div class="bj-select-custom bj-select-custom--open">
          <button id="vue-sel-search" type="button" class="bj-select-custom__trigger" role="combobox" aria-expanded="true" aria-haspopup="listbox">
            <span>Sélectionner…</span>
            <i class="ri-arrow-down-s-line" aria-hidden="true" />
          </button>
          <div class="bj-select-custom__panel" style="position: relative">
            <input class="bj-select-custom__search" type="text" placeholder="Rechercher…" />
            <ul class="bj-select-custom__listbox" role="listbox">
              <li class="bj-select-custom__option" role="option">Cotonou</li>
              <li class="bj-select-custom__option" role="option">Porto-Novo</li>
              <li class="bj-select-custom__option" role="option">Parakou</li>
              <li class="bj-select-custom__option" role="option">Abomey-Calavi</li>
              <li class="bj-select-custom__option" role="option">Djougou</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-select-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
