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
      desc: 'Liste d\u00e9roulante React contr\u00f4l\u00e9e avec lib\u00e9ll\u00e9, aide, placeholder, tableau d\u2019options. Supporte un mode recherche via la prop searchable.',
      'section-usage': 'Utilisation',
      'section-searchable': 'Mode recherche',
      'section-preview': 'Aper\u00e7u',
      'section-props': 'Props',
      'prop-value': 'Valeur s\u00e9lectionn\u00e9e, cha\u00eene.',
      'prop-onChange': 'Gestionnaire de changement sur le select natif.',
      'prop-onValueChange': 'Callback avec la nouvelle valeur (fonctionne en mode natif et searchable).',
      'prop-label': 'Lib\u00e9ll\u00e9 au-dessus du select.',
      'prop-hint': 'Texte d\u2019aide sous le lib\u00e9ll\u00e9.',
      'prop-options': 'Tableau d\u2019objets value, label et disabled optionnel.',
      'prop-error': 'Si vrai, applique le style d\u2019erreur et aria-invalid.',
      'prop-message': 'Message sous le champ (couleur selon error).',
      'prop-disabled': 'D\u00e9sactive le select.',
      'prop-placeholder': 'Premi\u00e8re option vide, d\u00e9sactiv\u00e9e, avec ce lib\u00e9ll\u00e9.',
      'prop-searchable': 'Active le mode recherche avec dropdown custom.',
      'prop-searchPlaceholder': 'Placeholder du champ de recherche.',
      'prop-noResults': 'Texte quand aucune option ne correspond.',
      'prop-id': 'Identifiant du select ; sinon g\u00e9n\u00e9r\u00e9 automatiquement.',
      'prop-children': 'Options ou n\u0153uds React suppl\u00e9mentaires (mode natif uniquement).',
      'prop-rest': 'Autres attributs HTML natifs du select.',
      'prop-className': 'Classe CSS sur le select (mode natif) ou sur le groupe (mode searchable).',
      'section-onvalue': 'onChange et onValueChange',
      'section-error': 'Erreur et message',
      'section-disabled-native': 'Désactivé et enfants',
      'section-searchable-i18n': 'Recherche : textes et filtre',
      'section-combinations': 'Combinaisons',
      'section-callbacks': 'Patron contrôlé',
      'desc-onvalue': 'onChange reçoit l’événement natif ; onValueChange reçoit la chaîne (natif et searchable).',
      'desc-error': 'error et message ensemble pour la validation.',
      'desc-disabled-native': 'placeholder, options désactivées et children en option natives.',
      'desc-searchable-i18n': 'searchPlaceholder, noResults et filtre sur le libellé.',
      'desc-combinations': 'Select avec hint, placeholder, erreur et option désactivée.',
      'desc-callbacks': 'value + onChange ou onValueChange pour un état contrôlé.',
    },
    en: {
      title: 'BjSelect',
      desc: 'Controlled React select with label, hint, placeholder, options array. Supports a searchable mode via the searchable prop.',
      'section-usage': 'Usage',
      'section-searchable': 'Searchable mode',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-value': 'Selected value, string.',
      'prop-onChange': 'Change handler on the native select.',
      'prop-onValueChange': 'Callback with the new value (works in both native and searchable modes).',
      'prop-label': 'Label above the select.',
      'prop-hint': 'Help text below the label.',
      'prop-options': 'Array of objects with value, label, and optional disabled.',
      'prop-error': 'When true, error styling and aria-invalid.',
      'prop-message': 'Message below the field (color follows error).',
      'prop-disabled': 'Disables the select.',
      'prop-placeholder': 'Initial empty disabled option with this label.',
      'prop-searchable': 'Enables searchable mode with custom dropdown.',
      'prop-searchPlaceholder': 'Placeholder for the search input.',
      'prop-noResults': 'Text when no option matches.',
      'prop-id': 'Select id; auto-generated when omitted.',
      'prop-children': 'Extra option nodes (native mode only).',
      'prop-rest': 'Other native select HTML attributes.',
      'prop-className': 'CSS class on the select (native mode) or on the group (searchable mode).',
      'section-onvalue': 'onChange and onValueChange',
      'section-error': 'Error and message',
      'section-disabled-native': 'Disabled and children',
      'section-searchable-i18n': 'Search: copy and filtering',
      'section-combinations': 'Combinations',
      'section-callbacks': 'Controlled pattern',
      'desc-onvalue': 'onChange receives the native event; onValueChange receives the string (native and searchable).',
      'desc-error': 'error and message together for validation feedback.',
      'desc-disabled-native': 'placeholder, disabled options, and optional native children.',
      'desc-searchable-i18n': 'searchPlaceholder, noResults, and label-based filtering.',
      'desc-combinations': 'Select with hint, placeholder, error, and a disabled option.',
      'desc-callbacks': 'value with onChange or onValueChange for controlled state.',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjSelect } from '@flrxnt/dsbj/react'

const options = [
  { value: 'dg', label: 'Direction g\u00e9n\u00e9rale' },
  { value: 'dr', label: 'Direction r\u00e9gionale' },
]

export default function Example() {
  const [dept, setDept] = useState('')
  return (
    <BjSelect
      value={dept}
      onChange={(e) => setDept(e.target.value)}
      label="Direction"
      hint="Choisir une direction dans la liste"
      placeholder="S\u00e9lectionner\u2026"
      options={options}
    />
  )
}`

const codeSearchable = `import { useState } from 'react'
import { BjSelect } from '@flrxnt/dsbj/react'

const cities = [
  { value: 'cotonou', label: 'Cotonou' },
  { value: 'porto', label: 'Porto-Novo' },
  { value: 'parakou', label: 'Parakou' },
  { value: 'abomey', label: 'Abomey-Calavi' },
]

export default function Example() {
  const [city, setCity] = useState('')
  return (
    <BjSelect
      value={city}
      onValueChange={setCity}
      label="Commune"
      placeholder="S\u00e9lectionner\u2026"
      options={cities}
      searchable
    />
  )
}`

const codeOnValue = `import { useState } from 'react'
import { BjSelect } from '@flrxnt/dsbj/react'

const options = [{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }]

export default function Example() {
  const [v, setV] = useState('')
  return (
    <BjSelect
      value={v}
      onChange={(e) => console.log('native', e.target.value)}
      onValueChange={setV}
      options={options}
      label="Les deux callbacks"
    />
  )
}`

const codeError = `import { useState } from 'react'
import { BjSelect } from '@flrxnt/dsbj/react'

const options = [{ value: 'x', label: 'Choix' }]

export default function Example() {
  const [v, setV] = useState('')
  return (
    <BjSelect
      value={v}
      onValueChange={setV}
      label="Champ requis"
      error={!v}
      message={v ? '' : 'Veuillez sélectionner une valeur.'}
      placeholder="Sélectionner…"
      options={options}
    />
  )
}`

const codeDisabledChildren = `import { useState } from 'react'
import { BjSelect } from '@flrxnt/dsbj/react'

export default function Example() {
  const [v, setV] = useState('')
  return (
    <BjSelect value={v} onValueChange={setV} label="Groupes" disabled placeholder="Choisir…">
      <optgroup label="Groupe 1">
        <option value="1">Un</option>
        <option value="2">Deux</option>
      </optgroup>
    </BjSelect>
  )
}`

const codeSearchableI18n = `import { useState } from 'react'
import { BjSelect } from '@flrxnt/dsbj/react'

const options = [
  { value: 'cotonou', label: 'Cotonou' },
  { value: 'porto', label: 'Porto-Novo' },
]

export default function Example() {
  const [city, setCity] = useState('')
  return (
    <BjSelect
      value={city}
      onValueChange={setCity}
      searchable
      searchPlaceholder="Filter cities…"
      noResults="No match"
      options={options}
      label="City"
    />
  )
}`

const codeCombinations = `import { useState } from 'react'
import { BjSelect } from '@flrxnt/dsbj/react'

const options = [
  { value: 'std', label: 'Standard' },
  { value: 'prem', label: 'Premium', disabled: true },
  { value: 'ent', label: 'Enterprise' },
]

export default function Example() {
  const [plan, setPlan] = useState('')
  return (
    <BjSelect
      value={plan}
      onValueChange={setPlan}
      label="Offre"
      hint="Premium sur demande"
      placeholder="Choisir une offre…"
      options={options}
      error={!plan}
      message={plan ? \`Sélection : \${plan}\` : 'Requis.'}
    />
  )
}`

const propsRows = computed(() => [
  { name: 'value', description: t('prop-value') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: 'onValueChange', description: t('prop-onValueChange') },
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
  { name: 'id', description: t('prop-id') },
  { name: 'children', description: t('prop-children') },
  { name: 'className', description: t('prop-className') },
  { name: '\u2026', description: t('prop-rest') },
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

  <DocsSection id="react-select-onvalue" :title="t('section-onvalue')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-onvalue') }}</p>
    <DocsCode :code="codeOnValue" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-select-error" :title="t('section-error')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-error') }}</p>
    <DocsPreview>
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="react-sel-err">Champ requis</label>
        <select id="react-sel-err" class="bj-select bj-select--error" aria-invalid="true" aria-describedby="react-sel-err-msg">
          <option value="" disabled selected>Sélectionner…</option>
          <option value="x">Choix</option>
        </select>
        <p id="react-sel-err-msg" class="bj-message bj-message--error">Veuillez sélectionner une valeur.</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeError" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-select-disabled-children" :title="t('section-disabled-native')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-disabled-native') }}</p>
    <DocsPreview>
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="react-sel-dis">Groupes</label>
        <select id="react-sel-dis" class="bj-select" disabled>
          <option value="" disabled selected>Choisir…</option>
          <optgroup label="Groupe 1">
            <option value="1">Un</option>
            <option value="2">Deux</option>
          </optgroup>
        </select>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabledChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-select-searchable-i18n" :title="t('section-searchable-i18n')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-searchable-i18n') }}</p>
    <DocsCode :code="codeSearchableI18n" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-select-combinations" :title="t('section-combinations')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-combinations') }}</p>
    <DocsPreview>
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="react-sel-combo">Offre</label>
        <span class="bj-hint">Premium sur demande</span>
        <select id="react-sel-combo" class="bj-select bj-select--error" aria-invalid="true">
          <option value="" disabled selected>Choisir une offre…</option>
          <option value="std">Standard</option>
          <option value="prem" disabled>Premium</option>
          <option value="ent">Enterprise</option>
        </select>
        <p class="bj-message bj-message--error">Requis.</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombinations" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-select-callbacks" :title="t('section-callbacks')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-callbacks') }}</p>
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-select-searchable" :title="t('section-searchable')">
    <DocsCode :code="codeSearchable" lang="tsx" />
    <DocsPreview style="min-height: 16rem">
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="react-sel-search">Commune</label>
        <div class="bj-select-custom bj-select-custom--open">
          <button id="react-sel-search" type="button" class="bj-select-custom__trigger" role="combobox" aria-expanded="true" aria-haspopup="listbox">
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
            </ul>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-select-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
