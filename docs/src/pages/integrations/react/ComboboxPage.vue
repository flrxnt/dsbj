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
      desc: 'Champ d\u2019autocomplétion React avec filtrage à la saisie et navigation clavier.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-value': 'Valeur sélectionnée, chaîne.',
      'prop-onValueChange': 'Callback appelé avec la nouvelle valeur lors de la sélection.',
      'prop-label': 'Libellé au-dessus du champ.',
      'prop-hint': 'Texte d\u2019aide sous le libellé.',
      'prop-options': 'Tableau d\u2019objets avec value, label et disabled optionnel.',
      'prop-error': 'Applique le style d\u2019erreur et aria-invalid.',
      'prop-message': 'Message sous le champ.',
      'prop-disabled': 'Désactive le combobox.',
      'prop-placeholder': 'Placeholder du champ.',
      'prop-noResults': 'Texte quand aucune option ne correspond.',
      'prop-id': 'Identifiant ; sinon généré automatiquement.',
      'prop-rest': 'Autres attributs HTML natifs de l\u2019input.',
    },
    en: {
      title: 'BjCombobox',
      desc: 'React autocomplete field with type-to-filter and keyboard navigation.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-value': 'Selected value, string.',
      'prop-onValueChange': 'Callback invoked with the new value on selection.',
      'prop-label': 'Label above the field.',
      'prop-hint': 'Help text below the label.',
      'prop-options': 'Array of objects with value, label, and optional disabled.',
      'prop-error': 'Applies error styling and aria-invalid.',
      'prop-message': 'Message below the field.',
      'prop-disabled': 'Disables the combobox.',
      'prop-placeholder': 'Input placeholder.',
      'prop-noResults': 'Text when no option matches.',
      'prop-id': 'Element id; auto-generated when omitted.',
      'prop-rest': 'Other native input HTML attributes.',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjCombobox } from '@flrxnt/dsbj/react'

const cities = [
  { value: 'cotonou', label: 'Cotonou' },
  { value: 'porto', label: 'Porto-Novo' },
  { value: 'parakou', label: 'Parakou' },
  { value: 'abomey', label: 'Abomey-Calavi' },
  { value: 'djougou', label: 'Djougou' },
]

export default function App() {
  const [city, setCity] = useState('')
  return (
    <BjCombobox
      value={city}
      onValueChange={setCity}
      label="Ville"
      hint="Commune de résidence"
      placeholder="Rechercher une ville…"
      options={cities}
    />
  )
}`

const propsRows = computed(() => [
  { name: 'value', description: t('prop-value') },
  { name: 'onValueChange', description: t('prop-onValueChange') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'options', description: t('prop-options') },
  { name: 'error', description: t('prop-error') },
  { name: 'message', description: t('prop-message') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'placeholder', description: t('prop-placeholder') },
  { name: 'noResults', description: t('prop-noResults') },
  { name: 'id', description: t('prop-id') },
  { name: '…', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-combobox-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-combobox-preview" :title="t('section-preview')">
    <DocsPreview style="min-height: 16rem">
      <div class="bj-combobox bj-combobox--open" style="max-width: 24rem">
        <label class="bj-label" for="react-cb-prev">Ville</label>
        <span class="bj-hint">Commune de résidence</span>
        <div class="bj-combobox__input-wrap">
          <input id="react-cb-prev" class="bj-combobox__input" type="text" role="combobox" aria-expanded="true" placeholder="Rechercher une ville…" value="Porto" />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
        <ul class="bj-combobox__listbox" role="listbox" style="position: relative">
          <li class="bj-combobox__option bj-combobox__option--active" role="option" aria-selected="true">Porto-Novo</li>
        </ul>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-combobox-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
