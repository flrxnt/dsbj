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

  <DocsSection id="react-checkbox-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
