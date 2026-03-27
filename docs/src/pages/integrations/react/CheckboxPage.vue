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
      title: 'BjCheckbox',
      desc: 'Case à cocher React avec libellé ou enfants, texte d’aide et attributs name et value pour les formulaires.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-checked': 'État coché contrôlé, booléen.',
      'prop-onChange': 'Gestionnaire de changement sur l’input natif.',
      'prop-label': 'Texte du libellé si aucun enfant n’est fourni.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-disabled': 'Désactive la case.',
      'prop-name': 'Attribut name du input.',
      'prop-value': 'Attribut value du input.',
      'prop-id': 'Identifiant du input ; sinon généré automatiquement.',
      'prop-children': 'Contenu du libellé ; remplace label si présent.',
      'prop-className': 'Classe CSS sur l’élément label racine.',
      'prop-rest': 'Autres attributs HTML natifs du input (type et size sont réservés).',
      'section-children': 'Enfants comme libellé',
      'section-disabled': 'Désactivé',
      'section-combinations': 'Combinaisons',
      'section-callbacks': 'Contrôle et callbacks',
      'desc-children': 'children remplace label pour un libellé riche.',
      'desc-disabled': 'checked et disabled ensemble.',
      'desc-combinations': 'Plusieurs cases avec name et value pour un formulaire.',
      'desc-callbacks': 'checked et onChange avec e.target.checked ; name et value pour la soumission.',
    },
    en: {
      title: 'BjCheckbox',
      desc: 'React checkbox with label or children, hint text, and name/value for forms.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-checked': 'Controlled checked state, boolean.',
      'prop-onChange': 'Change handler on the native input.',
      'prop-label': 'Label text when no children are passed.',
      'prop-hint': 'Help text below the label.',
      'prop-disabled': 'Disables the checkbox.',
      'prop-name': 'Input name attribute.',
      'prop-value': 'Input value attribute.',
      'prop-id': 'Input id; auto-generated when omitted.',
      'prop-children': 'Label content; overrides label when provided.',
      'prop-className': 'CSS class on the root label element.',
      'prop-rest': 'Other native input HTML attributes (type and size are reserved).',
      'section-children': 'Children as label',
      'section-disabled': 'Disabled',
      'section-combinations': 'Combinations',
      'section-callbacks': 'Controlled and callbacks',
      'desc-children': 'children replaces label for rich label content.',
      'desc-disabled': 'checked and disabled together.',
      'desc-combinations': 'Multiple checkboxes with name and value for form posts.',
      'desc-callbacks': 'checked and onChange with e.target.checked; name and value for submit.',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjCheckbox } from '@flrxnt/dsbj/react'

export default function Example() {
  const [accept, setAccept] = useState(false)
  return (
    <BjCheckbox
      checked={accept}
      onChange={(e) => setAccept(e.target.checked)}
      label="J’accepte les conditions d’utilisation"
      hint="Obligatoire pour créer un compte"
      name="terms"
      value="yes"
    />
  )
}`

const codeChildren = `import { useState } from 'react'
import { BjCheckbox } from '@flrxnt/dsbj/react'

export default function Example() {
  const [on, setOn] = useState(true)
  return (
    <BjCheckbox name="news" value="1" checked={on} onChange={(e) => setOn(e.target.checked)}>
      <strong>Newsletter</strong> — offres ponctuelles
    </BjCheckbox>
  )
}`

const codeDisabled = `import { BjCheckbox } from '@flrxnt/dsbj/react'

export default function Example() {
  return (
    <BjCheckbox checked disabled label="Option indisponible" name="x" value="1" />
  )
}`

const codeCombinations = `import { useState } from 'react'
import { BjCheckbox } from '@flrxnt/dsbj/react'

export default function Example() {
  const [a, setA] = useState(false)
  const [b, setB] = useState(true)
  return (
    <fieldset>
      <legend class="bj-label">Préférences</legend>
      <BjCheckbox name="prefs" value="email" checked={a} onChange={(e) => setA(e.target.checked)} label="E-mail" />
      <BjCheckbox name="prefs" value="sms" checked={b} onChange={(e) => setB(e.target.checked)} label="SMS" hint="Frais opérateur" />
    </fieldset>
  )
}`

const codeCallbacks = `import { useState } from 'react'
import { BjCheckbox } from '@flrxnt/dsbj/react'

export default function Example() {
  const [ok, setOk] = useState(false)
  return (
    <BjCheckbox
      id="terms-check"
      checked={ok}
      onChange={(e) => setOk(e.target.checked)}
      label="J’accepte"
      name="terms"
      value="accepted"
    />
  )
}`

const propsRows = computed(() => [
  { name: 'checked', description: t('prop-checked') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'name', description: t('prop-name') },
  { name: 'value', description: t('prop-value') },
  { name: 'id', description: t('prop-id') },
  { name: 'children', description: t('prop-children') },
  { name: 'className', description: t('prop-className') },
  { name: '…', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-checkbox-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-checkbox-preview" :title="t('section-preview')">
    <DocsPreview>
      <label class="bj-checkbox" for="react-cb-prev">
        <input id="react-cb-prev" type="checkbox" name="terms" value="yes" />
        <span class="bj-checkbox__label">
          J’accepte les conditions d’utilisation
          <span class="bj-checkbox__hint">Obligatoire pour créer un compte</span>
        </span>
      </label>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-checkbox-children" :title="t('section-children')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-children') }}</p>
    <DocsPreview>
      <label class="bj-checkbox" for="react-cb-ch">
        <input id="react-cb-ch" type="checkbox" name="news" value="1" checked />
        <span class="bj-checkbox__label"><strong>Newsletter</strong> — offres ponctuelles</span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeChildren" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-checkbox-disabled" :title="t('section-disabled')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-disabled') }}</p>
    <DocsPreview>
      <label class="bj-checkbox" for="react-cb-dis">
        <input id="react-cb-dis" type="checkbox" name="x" value="1" checked disabled />
        <span class="bj-checkbox__label">Option indisponible</span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-checkbox-combinations" :title="t('section-combinations')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-combinations') }}</p>
    <DocsPreview>
      <fieldset style="border: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--bj-spacing-2v)">
        <legend class="bj-label" style="margin-bottom: var(--bj-spacing-1v)">Préférences</legend>
        <label class="bj-checkbox" for="react-cb-p1">
          <input id="react-cb-p1" type="checkbox" name="prefs" value="email" />
          <span class="bj-checkbox__label">E-mail</span>
        </label>
        <label class="bj-checkbox" for="react-cb-p2">
          <input id="react-cb-p2" type="checkbox" name="prefs" value="sms" checked />
          <span class="bj-checkbox__label">SMS<span class="bj-checkbox__hint">Frais opérateur</span></span>
        </label>
      </fieldset>
    </DocsPreview>
    <DocsCode :code="codeCombinations" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-checkbox-callbacks" :title="t('section-callbacks')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-callbacks') }}</p>
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-checkbox-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
