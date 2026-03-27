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
      'section-disabled': 'Option désactivée',
      'section-children': 'Enfants comme libellé',
      'section-combinations': 'Groupe complet',
      'section-callbacks': 'Contrôle et callbacks',
      'desc-disabled': 'Une option peut être disabled dans le même name.',
      'desc-children': 'children remplace label pour du contenu riche.',
      'desc-combinations': 'Trois radios partageant name et un état unique.',
      'desc-callbacks': 'checked selon la value choisie ; onChange met à jour l’état (value et name requis).',
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
      'section-disabled': 'Disabled option',
      'section-children': 'Children as label',
      'section-combinations': 'Full radio group',
      'section-callbacks': 'Controlled and callbacks',
      'desc-disabled': 'One option may be disabled while sharing the same name.',
      'desc-children': 'children replaces label for rich content.',
      'desc-combinations': 'Three radios sharing name and a single piece of state.',
      'desc-callbacks': 'checked from the selected value; onChange updates state (value and name required).',
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

const codeDisabled = `import { useState } from 'react'
import { BjRadio } from '@flrxnt/dsbj/react'

export default function Example() {
  const [tier, setTier] = useState('free')
  return (
    <>
      <BjRadio name="tier" value="free" checked={tier === 'free'} onChange={() => setTier('free')} label="Gratuit" />
      <BjRadio name="tier" value="pro" checked={tier === 'pro'} onChange={() => setTier('pro')} label="Pro" />
      <BjRadio name="tier" value="legacy" checked={tier === 'legacy'} onChange={() => setTier('legacy')} label="Legacy" disabled />
    </>
  )
}`

const codeChildren = `import { useState } from 'react'
import { BjRadio } from '@flrxnt/dsbj/react'

export default function Example() {
  const [v, setV] = useState('a')
  return (
    <BjRadio name="pick" value="a" checked={v === 'a'} onChange={() => setV('a')}>
      Option <em>A</em>
    </BjRadio>
  )
}`

const codeCombinations = `import { useState } from 'react'
import { BjRadio } from '@flrxnt/dsbj/react'

export default function Example() {
  const [region, setRegion] = useState('north')
  return (
    <fieldset>
      <legend class="bj-label">Région</legend>
      <BjRadio id="rad-n" name="region" value="north" checked={region === 'north'} onChange={() => setRegion('north')} label="Nord" />
      <BjRadio id="rad-s" name="region" value="south" checked={region === 'south'} onChange={() => setRegion('south')} label="Sud" hint="Bord maritime" />
      <BjRadio id="rad-c" name="region" value="center" checked={region === 'center'} onChange={() => setRegion('center')} label="Centre" />
    </fieldset>
  )
}`

const codeCallbacks = `import { useState } from 'react'
import { BjRadio } from '@flrxnt/dsbj/react'

export default function Example() {
  const [plan, setPlan] = useState('basic')
  function pick(next: string) {
    setPlan(next)
  }
  return (
    <>
      <BjRadio name="plan" value="basic" checked={plan === 'basic'} onChange={() => pick('basic')} label="Basic" />
      <BjRadio name="plan" value="pro" checked={plan === 'pro'} onChange={() => pick('pro')} label="Pro" />
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

  <DocsSection id="react-radio-disabled" :title="t('section-disabled')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-disabled') }}</p>
    <DocsPreview>
      <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v)">
        <label class="bj-radio" for="react-rad-d1">
          <input id="react-rad-d1" type="radio" name="tier-react-prev" value="free" checked />
          <span class="bj-radio__label">Gratuit</span>
        </label>
        <label class="bj-radio" for="react-rad-d2">
          <input id="react-rad-d2" type="radio" name="tier-react-prev" value="pro" />
          <span class="bj-radio__label">Pro</span>
        </label>
        <label class="bj-radio" for="react-rad-d3">
          <input id="react-rad-d3" type="radio" name="tier-react-prev" value="legacy" disabled />
          <span class="bj-radio__label">Legacy</span>
        </label>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-radio-children" :title="t('section-children')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-children') }}</p>
    <DocsPreview>
      <label class="bj-radio" for="react-rad-ch">
        <input id="react-rad-ch" type="radio" name="pick-react-prev" value="a" checked />
        <span class="bj-radio__label">Option <em>A</em></span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-radio-combinations" :title="t('section-combinations')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-combinations') }}</p>
    <DocsPreview>
      <fieldset style="border: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--bj-spacing-2v)">
        <legend class="bj-label" style="margin-bottom: var(--bj-spacing-1v)">Région</legend>
        <label class="bj-radio" for="react-rad-r1">
          <input id="react-rad-r1" type="radio" name="region-react-prev" value="north" checked />
          <span class="bj-radio__label">Nord</span>
        </label>
        <label class="bj-radio" for="react-rad-r2">
          <input id="react-rad-r2" type="radio" name="region-react-prev" value="south" />
          <span class="bj-radio__label">Sud<span class="bj-radio__hint">Bord maritime</span></span>
        </label>
        <label class="bj-radio" for="react-rad-r3">
          <input id="react-rad-r3" type="radio" name="region-react-prev" value="center" />
          <span class="bj-radio__label">Centre</span>
        </label>
      </fieldset>
    </DocsPreview>
    <DocsCode :code="codeCombinations" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-radio-callbacks" :title="t('section-callbacks')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-callbacks') }}</p>
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-radio-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
