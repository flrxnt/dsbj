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
      'prop-className': 'Classe CSS sur le conteneur bj-combobox.',
      'section-controlled': 'Valeur et onValueChange',
      'section-error': 'Erreur et message',
      'section-disabled': 'Désactivé',
      'section-no-results': 'Aucun résultat',
      'section-combinations': 'Combinaisons',
      'section-callbacks': 'Callbacks',
      'desc-controlled': 'value est la valeur sélectionnée ; le libellé affiché est synchronisé avec options.',
      'desc-error': 'error, message et aria-invalid sur le champ.',
      'desc-disabled': 'disabled sur l’input et fermeture du panneau.',
      'desc-no-results': 'noResults quand le filtre ne retourne aucune option.',
      'desc-combinations': 'label, hint, placeholder, error et options avec entrée désactivée.',
      'desc-callbacks': 'onValueChange à la sélection ; filtre sur la saisie déclenche l’ouverture de la liste.',
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
      'prop-className': 'CSS class on the bj-combobox wrapper.',
      'section-controlled': 'value and onValueChange',
      'section-error': 'Error and message',
      'section-disabled': 'Disabled',
      'section-no-results': 'No results',
      'section-combinations': 'Combinations',
      'section-callbacks': 'Callbacks',
      'desc-controlled': 'value is the selected key; the visible label syncs from options.',
      'desc-error': 'error, message, and aria-invalid on the field.',
      'desc-disabled': 'disabled on the input; panel cannot open.',
      'desc-no-results': 'noResults when the filter matches nothing.',
      'desc-combinations': 'label, hint, placeholder, error, and options including a disabled entry.',
      'desc-callbacks': 'onValueChange on pick; typing opens the list and filters labels.',
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

const codeControlled = `import { useState } from 'react'
import { BjCombobox } from '@flrxnt/dsbj/react'

const options = [
  { value: 'a', label: 'Alpha' },
  { value: 'b', label: 'Bravo' },
]

export default function App() {
  const [value, setValue] = useState('a')
  return (
    <BjCombobox
      value={value}
      onValueChange={setValue}
      options={options}
      label="Code"
    />
  )
}`

const codeError = `import { useState } from 'react'
import { BjCombobox } from '@flrxnt/dsbj/react'

const options = [{ value: 'x', label: 'Seul choix' }]

export default function App() {
  const [v, setV] = useState('')
  return (
    <BjCombobox
      value={v}
      onValueChange={setV}
      options={options}
      label="Obligatoire"
      error={!v}
      message={v ? '' : 'Choisissez une valeur.'}
      placeholder="Rechercher…"
    />
  )
}`

const codeDisabled = `import { BjCombobox } from '@flrxnt/dsbj/react'

const options = [{ value: '1', label: 'Un' }]

export default function App() {
  return (
    <BjCombobox value="1" onValueChange={() => {}} options={options} label="Verrouillé" disabled />
  )
}`

const codeNoResults = `import { useState } from 'react'
import { BjCombobox } from '@flrxnt/dsbj/react'

const options = [{ value: 'only', label: 'Unique' }]

export default function App() {
  const [v, setV] = useState('')
  return (
    <BjCombobox
      value={v}
      onValueChange={setV}
      options={options}
      noResults="Rien ne correspond"
      placeholder="Tapez pour filtrer…"
    />
  )
}`

const codeCombinations = `import { useState } from 'react'
import { BjCombobox } from '@flrxnt/dsbj/react'

const options = [
  { value: 'std', label: 'Standard' },
  { value: 'prem', label: 'Premium', disabled: true },
]

export default function App() {
  const [sku, setSku] = useState('')
  return (
    <BjCombobox
      className="my-combobox"
      value={sku}
      onValueChange={setSku}
      label="SKU"
      hint="Premium sur devis"
      placeholder="Filtrer la gamme…"
      options={options}
      error={!sku}
      message={sku ? \`Sélection : \${sku}\` : 'Requis.'}
    />
  )
}`

const codeCallbacks = `import { useState } from 'react'
import { BjCombobox } from '@flrxnt/dsbj/react'

const options = [
  { value: 'cotonou', label: 'Cotonou' },
  { value: 'porto', label: 'Porto-Novo' },
]

export default function App() {
  const [city, setCity] = useState('')
  function onPick(next: string) {
    console.log('selected', next)
    setCity(next)
  }
  return (
    <BjCombobox
      id="city-combobox"
      value={city}
      onValueChange={onPick}
      options={options}
      label="Ville"
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
  { name: 'className', description: t('prop-className') },
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

  <DocsSection id="react-combobox-controlled" :title="t('section-controlled')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-controlled') }}</p>
    <DocsCode :code="codeControlled" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-combobox-error" :title="t('section-error')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-error') }}</p>
    <DocsPreview>
      <div class="bj-combobox bj-combobox--error" style="max-width: 24rem">
        <label class="bj-label" for="react-cb-err">Obligatoire</label>
        <div class="bj-combobox__input-wrap">
          <input id="react-cb-err" class="bj-combobox__input" type="text" role="combobox" aria-expanded="false" aria-invalid="true" placeholder="Rechercher…" />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
        <p class="bj-message bj-message--error">Choisissez une valeur.</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeError" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-combobox-disabled" :title="t('section-disabled')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-disabled') }}</p>
    <DocsPreview>
      <div class="bj-combobox" style="max-width: 24rem">
        <label class="bj-label" for="react-cb-dis">Verrouillé</label>
        <div class="bj-combobox__input-wrap">
          <input id="react-cb-dis" class="bj-combobox__input" type="text" role="combobox" disabled value="Un" />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-combobox-no-results" :title="t('section-no-results')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-no-results') }}</p>
    <DocsPreview>
      <div class="bj-combobox bj-combobox--open" style="max-width: 24rem">
        <div class="bj-combobox__input-wrap">
          <input class="bj-combobox__input" type="text" role="combobox" aria-expanded="true" value="zzz" />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
        <div class="bj-combobox__listbox">
          <p class="bj-combobox__no-results">Rien ne correspond</p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeNoResults" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-combobox-combinations" :title="t('section-combinations')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-combinations') }}</p>
    <DocsPreview>
      <div class="bj-combobox bj-combobox--error" style="max-width: 24rem">
        <label class="bj-label" for="react-cb-combo">SKU</label>
        <span class="bj-hint">Premium sur devis</span>
        <div class="bj-combobox__input-wrap">
          <input id="react-cb-combo" class="bj-combobox__input" type="text" role="combobox" aria-invalid="true" placeholder="Filtrer la gamme…" />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
        <p class="bj-message bj-message--error">Requis.</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombinations" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-combobox-callbacks" :title="t('section-callbacks')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-callbacks') }}</p>
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-combobox-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
