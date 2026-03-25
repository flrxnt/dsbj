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
      desc: 'Liste déroulante React contrôlée avec libellé, aide, placeholder, tableau d’options ou enfants personnalisés.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-value': 'Valeur sélectionnée, chaîne.',
      'prop-onChange': 'Gestionnaire de changement sur le select natif.',
      'prop-label': 'Libellé au-dessus du select.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-options': 'Tableau d’objets value, label et disabled optionnel.',
      'prop-error': 'Si vrai, applique le style d’erreur et aria-invalid.',
      'prop-message': 'Message sous le champ (couleur selon error).',
      'prop-disabled': 'Désactive le select.',
      'prop-placeholder': 'Première option vide, désactivée, avec ce libellé.',
      'prop-id': 'Identifiant du select ; sinon généré automatiquement.',
      'prop-children': 'Options ou nœuds React supplémentaires rendus après les options générées.',
      'prop-className': 'Classe CSS sur l’élément select.',
      'prop-rest': 'Autres attributs HTML natifs du select (hors size, value, defaultValue, onChange, id et children réservés).',
    },
    en: {
      title: 'BjSelect',
      desc: 'Controlled React select with label, hint, placeholder, options array, or custom children.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-value': 'Selected value, string.',
      'prop-onChange': 'Change handler on the native select.',
      'prop-label': 'Label above the select.',
      'prop-hint': 'Help text below the label.',
      'prop-options': 'Array of objects with value, label, and optional disabled.',
      'prop-error': 'When true, error styling and aria-invalid.',
      'prop-message': 'Message below the field (color follows error).',
      'prop-disabled': 'Disables the select.',
      'prop-placeholder': 'Initial empty disabled option with this label.',
      'prop-id': 'Select id; auto-generated when omitted.',
      'prop-children': 'Extra option nodes rendered after generated options.',
      'prop-className': 'CSS class on the select element.',
      'prop-rest': 'Other native select HTML attributes (size, value, defaultValue, onChange, id, and children are reserved).',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjSelect } from '@flrxnt/dsbj/react'

const options = [
  { value: 'dg', label: 'Direction générale' },
  { value: 'dr', label: 'Direction régionale' },
]

export default function Example() {
  const [dept, setDept] = useState('')
  return (
    <BjSelect
      value={dept}
      onChange={(e) => setDept(e.target.value)}
      label="Direction"
      hint="Choisir une direction dans la liste"
      placeholder="Sélectionner…"
      options={options}
    />
  )
}`

const propsRows = computed(() => [
  { name: 'value', description: t('prop-value') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'options', description: t('prop-options') },
  { name: 'error', description: t('prop-error') },
  { name: 'message', description: t('prop-message') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'placeholder', description: t('prop-placeholder') },
  { name: 'id', description: t('prop-id') },
  { name: 'children', description: t('prop-children') },
  { name: 'className', description: t('prop-className') },
  { name: '…', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-select-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-select-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="react-sel-prev">Direction</label>
        <span class="bj-hint">Choisir une direction dans la liste</span>
        <select id="react-sel-prev" class="bj-select">
          <option value="" disabled selected>Sélectionner…</option>
          <option value="dg">Direction générale</option>
          <option value="dr">Direction régionale</option>
        </select>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-select-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
