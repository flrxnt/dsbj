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
      desc: 'Liste déroulante Vue avec libellé, aide, placeholder, options, messages d’erreur, mode désactivé, mode recherche (dropdown custom) et slot pour options supplémentaires.',
      'section-usage': 'Utilisation',
      'section-native-preview': 'Select natif (aperçu)',
      'section-error-message': 'Erreur et message',
      'section-disabled': 'Désactivé',
      'section-slot': 'Slot — options supplémentaires',
      'section-searchable': 'Mode recherche',
      'section-searchable-props': 'Recherche : searchPlaceholder et noResults',
      'section-searchable-disabled': 'Recherche désactivée',
      'section-props': 'Props',
      'prop-modelValue': 'Valeur sélectionnée (v-model), chaîne.',
      'prop-label': 'Libellé au-dessus du select (associé via for/id).',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-options': 'Tableau d’objets avec value, label et disabled optionnel.',
      'prop-error': 'Met le champ en état d’erreur visuelle.',
      'prop-message': 'Message sous le champ (couleur selon error).',
      'prop-disabled': 'Désactive le select.',
      'prop-placeholder': 'Option initiale vide et désactivée avec ce libellé.',
      'prop-searchable': 'Active le mode recherche : remplace le select natif par un dropdown custom avec filtre.',
      'prop-searchPlaceholder': 'Placeholder du champ de recherche (défaut : « Rechercher… »).',
      'prop-noResults': 'Texte affiché quand aucune option ne correspond.',
      'slot-desc':
        'Le slot par défaut est rendu à l’intérieur du <code>&lt;select&gt;</code> natif (après les <code>&lt;option&gt;</code> générées), pour des options HTML personnalisées.',
    },
    en: {
      title: 'BjSelect',
      desc: 'Vue select with label, hint, placeholder, options, error messaging, disabled state, searchable custom dropdown, and a slot for extra options.',
      'section-usage': 'Usage',
      'section-native-preview': 'Native select (preview)',
      'section-error-message': 'Error and message',
      'section-disabled': 'Disabled',
      'section-slot': 'Slot — extra options',
      'section-searchable': 'Searchable mode',
      'section-searchable-props': 'Search: searchPlaceholder and noResults',
      'section-searchable-disabled': 'Searchable disabled',
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
      'prop-searchPlaceholder': 'Placeholder for the search input (default: "Rechercher…").',
      'prop-noResults': 'Text shown when no option matches.',
      'slot-desc':
        'The default slot is rendered inside the native <code>&lt;select&gt;</code> (after generated <code>&lt;option&gt;</code> elements) for custom HTML options.',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjSelect } from '@flrxnt/dsbj/vue'

const dept = ref('')
const options = [
  { value: 'dg', label: 'Direction générale' },
  { value: 'dr', label: 'Direction régionale' },
]
<\/script>

<template>
  <BjSelect
    v-model="dept"
    label="Direction"
    hint="Choisir une direction dans la liste"
    placeholder="Sélectionner…"
    :options="options"
  />
</template>`

const codeError = `<BjSelect
  v-model="role"
  label="Rôle"
  placeholder="Sélectionner…"
  :options="roles"
  :error="true"
  message="Veuillez choisir un rôle."
/>`

const codeDisabled = `<BjSelect
  v-model="fixed"
  label="Statut"
  :options="statuses"
  :disabled="true"
  placeholder="Verrouillé"
/>`

const codeSlot = `<BjSelect v-model="x" label="Pays" placeholder="Liste + slot" :options="countries">
  <option value="other">Autre (slot)</option>
</BjSelect>`

const codeSearchable = `<script setup>
import { ref } from 'vue'
import { BjSelect } from '@flrxnt/dsbj/vue'

const city = ref('')
const cities = [
  { value: 'cotonou', label: 'Cotonou' },
  { value: 'porto', label: 'Porto-Novo' },
  { value: 'parakou', label: 'Parakou' },
]
<\/script>

<template>
  <BjSelect
    v-model="city"
    label="Commune"
    placeholder="Sélectionner…"
    :options="cities"
    searchable
  />
</template>`

const codeSearchableProps = `<BjSelect
  v-model="city"
  label="Commune"
  searchable
  search-placeholder="Filtrer les communes…"
  no-results="Aucune commune ne correspond."
  :options="cities"
/>`

const codeSearchableDisabled = `<BjSelect
  v-model="city"
  label="Commune"
  searchable
  :disabled="true"
  placeholder="Sélectionner…"
  :options="cities"
/>`

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

  <DocsSection id="vue-select-native-preview" :title="t('section-native-preview')">
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

  <DocsSection id="vue-select-error" :title="t('section-error-message')">
    <DocsPreview>
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="vue-sel-err">Rôle</label>
        <select id="vue-sel-err" class="bj-select bj-select--error">
          <option value="" disabled selected>Sélectionner…</option>
          <option value="admin">Administrateur</option>
        </select>
        <p class="bj-message bj-message--error">Veuillez choisir un rôle.</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeError" lang="html" />
  </DocsSection>

  <DocsSection id="vue-select-disabled" :title="t('section-disabled')">
    <DocsPreview>
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="vue-sel-dis">Statut</label>
        <select id="vue-sel-dis" class="bj-select" disabled>
          <option value="ok" selected>Actif</option>
        </select>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="html" />
  </DocsSection>

  <DocsSection id="vue-select-slot" :title="t('section-slot')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('slot-desc')" />
    <DocsPreview>
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="vue-sel-slot">Pays</label>
        <select id="vue-sel-slot" class="bj-select">
          <option value="" disabled selected>Liste + slot</option>
          <option value="bj">Bénin</option>
          <option value="other">Autre (slot)</option>
        </select>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSlot" lang="html" />
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
            </ul>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-select-searchable-props" :title="t('section-searchable-props')">
    <DocsPreview style="min-height: 14rem">
      <div class="bj-select-group bj-select--error" style="max-width: 24rem">
        <label class="bj-label" for="vue-sel-sp">Commune</label>
        <div class="bj-select-custom bj-select-custom--open">
          <button id="vue-sel-sp" type="button" class="bj-select-custom__trigger" role="combobox" aria-expanded="true">
            <span>—</span>
            <i class="ri-arrow-down-s-line" aria-hidden="true" />
          </button>
          <div class="bj-select-custom__panel" style="position: relative">
            <input class="bj-select-custom__search" type="text" placeholder="Filtrer les communes…" />
            <p class="bj-select-custom__no-results">Aucune commune ne correspond.</p>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSearchableProps" lang="html" />
  </DocsSection>

  <DocsSection id="vue-select-searchable-disabled" :title="t('section-searchable-disabled')">
    <DocsPreview>
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="vue-sel-sd">Commune</label>
        <div class="bj-select-custom">
          <button id="vue-sel-sd" type="button" class="bj-select-custom__trigger" disabled>
            <span>Sélectionner…</span>
            <i class="ri-arrow-down-s-line" aria-hidden="true" />
          </button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSearchableDisabled" lang="html" />
  </DocsSection>

  <DocsSection id="vue-select-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
