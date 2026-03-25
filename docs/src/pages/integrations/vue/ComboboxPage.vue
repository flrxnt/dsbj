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
      title: 'BjCombobox',
      desc: 'Champ d\u2019autocomplétion Vue avec filtrage à la saisie, navigation clavier et sélection dans une liste déroulante.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-modelValue': 'Valeur sélectionnée (v-model), chaîne.',
      'prop-label': 'Libellé au-dessus du champ.',
      'prop-hint': 'Texte d\u2019aide sous le libellé.',
      'prop-options': 'Tableau d\u2019objets avec value, label et disabled optionnel.',
      'prop-error': 'Met le champ en état d\u2019erreur.',
      'prop-message': 'Message sous le champ.',
      'prop-disabled': 'Désactive le combobox.',
      'prop-placeholder': 'Placeholder du champ de saisie.',
      'prop-noResults': 'Texte affiché quand aucune option ne correspond à la saisie.',
    },
    en: {
      title: 'BjCombobox',
      desc: 'Vue autocomplete field with type-to-filter, keyboard navigation and dropdown list selection.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-modelValue': 'Selected value (v-model), string.',
      'prop-label': 'Label above the field.',
      'prop-hint': 'Help text below the label.',
      'prop-options': 'Array of objects with value, label, and optional disabled.',
      'prop-error': 'Applies error styling.',
      'prop-message': 'Message below the field.',
      'prop-disabled': 'Disables the combobox.',
      'prop-placeholder': 'Input placeholder text.',
      'prop-noResults': 'Text shown when no option matches the input.',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjCombobox } from '@flrxnt/dsbj/vue'

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
  <BjCombobox
    v-model="city"
    label="Ville"
    hint="Commune de résidence"
    placeholder="Rechercher une ville…"
    :options="cities"
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
  { name: 'noResults', description: t('prop-noResults') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-combobox-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-combobox-preview" :title="t('section-preview')">
    <DocsPreview style="min-height: 16rem">
      <div class="bj-combobox bj-combobox--open" style="max-width: 24rem">
        <label class="bj-label" for="vue-cb-prev">Ville</label>
        <span class="bj-hint">Commune de résidence</span>
        <div class="bj-combobox__input-wrap">
          <input id="vue-cb-prev" class="bj-combobox__input" type="text" role="combobox" aria-expanded="true" placeholder="Rechercher une ville…" value="Porto" />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
        <ul class="bj-combobox__listbox" role="listbox" style="position: relative">
          <li class="bj-combobox__option bj-combobox__option--active" role="option" aria-selected="true">Porto-Novo</li>
        </ul>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-combobox-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
