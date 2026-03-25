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
      title: 'BjRadio',
      desc: 'Bouton radio React : chaque instance a une value obligatoire ; liez checked et onChange à un état partagé pour le groupe.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-value': 'Valeur de cette option (obligatoire).',
      'prop-checked': 'Si vrai, cette option est sélectionnée dans le groupe.',
      'prop-onChange': 'Gestionnaire de changement ; mettez à jour l’état avec la value de l’option choisie.',
      'prop-label': 'Texte du libellé si aucun enfant n’est fourni.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-disabled': 'Désactive ce radio.',
      'prop-name': 'Attribut name commun au groupe.',
      'prop-id': 'Identifiant du input ; sinon généré automatiquement.',
      'prop-children': 'Contenu du libellé ; remplace label si présent.',
      'prop-className': 'Classe CSS sur l’élément label racine.',
      'prop-rest': 'Autres attributs HTML natifs du input non couverts par les props du composant.',
    },
    en: {
      title: 'BjRadio',
      desc: 'React radio: each option has a required value; wire checked and onChange to shared state for the group.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-value': 'This option’s value (required).',
      'prop-checked': 'When true, this option is selected in the group.',
      'prop-onChange': 'Change handler; update state with the chosen option’s value.',
      'prop-label': 'Label text when no children are passed.',
      'prop-hint': 'Help text below the label.',
      'prop-disabled': 'Disables this radio.',
      'prop-name': 'Shared group name attribute.',
      'prop-id': 'Input id; auto-generated when omitted.',
      'prop-children': 'Label content; overrides label when provided.',
      'prop-className': 'CSS class on the root label element.',
      'prop-rest': 'Other native input HTML attributes not covered by the component props.',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjRadio } from '@flrxnt/dsbj/react'

export default function Example() {
  const [plan, setPlan] = useState('basic')
  return (
    <>
      <BjRadio
        name="plan"
        value="basic"
        checked={plan === 'basic'}
        onChange={() => setPlan('basic')}
        label="Formule de base"
      />
      <BjRadio
        name="plan"
        value="pro"
        checked={plan === 'pro'}
        onChange={() => setPlan('pro')}
        label="Formule professionnelle"
        hint="Facturation annuelle"
      />
    </>
  )
}`

const propsRows = computed(() => [
  { name: 'value', description: t('prop-value') },
  { name: 'checked', description: t('prop-checked') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'name', description: t('prop-name') },
  { name: 'id', description: t('prop-id') },
  { name: 'children', description: t('prop-children') },
  { name: 'className', description: t('prop-className') },
  { name: '…', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-radio-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-radio-preview" :title="t('section-preview')">
    <DocsPreview>
      <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v)">
        <label class="bj-radio" for="react-rad-prev-1">
          <input id="react-rad-prev-1" type="radio" name="plan-react-prev" value="basic" checked />
          <span class="bj-radio__label">Formule de base</span>
        </label>
        <label class="bj-radio" for="react-rad-prev-2">
          <input id="react-rad-prev-2" type="radio" name="plan-react-prev" value="pro" />
          <span class="bj-radio__label">
            Formule professionnelle
            <span class="bj-radio__hint">Facturation annuelle</span>
          </span>
        </label>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-radio-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
