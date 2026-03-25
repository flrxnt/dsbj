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
      title: 'BjInput',
      desc: 'Champ React contrôlé avec libellé, aide, états de validation, variante textarea et champ avec icône Remix.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-value': 'Valeur contrôlée du champ, chaîne.',
      'prop-onChange': 'Gestionnaire de changement sur l’input ou la textarea.',
      'prop-label': 'Libellé accessible au-dessus du champ.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-state': 'État visuel : default, valid ou error.',
      'prop-message': 'Message sous le champ (couleur selon l’état).',
      'prop-size': 'Taille : sm ou md (défaut md).',
      'prop-textarea': 'Si vrai, rend une textarea au lieu d’un input.',
      'prop-rows': 'Nombre de lignes de la textarea (défaut 4).',
      'prop-icon': 'Classe d’icône Remix ; enveloppe le input dans bj-input-wrap.',
      'prop-id': 'Identifiant du champ ; sinon généré automatiquement.',
      'prop-className': 'Classe CSS sur l’input ou la textarea.',
      'prop-rest': 'Autres attributs HTML natifs de input ou textarea (hors size, value, defaultValue, onChange et id réservés).',
    },
    en: {
      title: 'BjInput',
      desc: 'Controlled React text field with label, hint, validation states, optional textarea mode, and optional Remix icon slot.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-value': 'Controlled field value, string.',
      'prop-onChange': 'Change handler for the input or textarea.',
      'prop-label': 'Accessible label above the field.',
      'prop-hint': 'Help text below the label.',
      'prop-state': 'Visual state: default, valid, or error.',
      'prop-message': 'Message below the field (styling follows state).',
      'prop-size': 'Size: sm or md (default md).',
      'prop-textarea': 'When true, renders a textarea instead of an input.',
      'prop-rows': 'Textarea row count (default 4).',
      'prop-icon': 'Remix icon class; wraps the input in bj-input-wrap.',
      'prop-id': 'Field id; auto-generated when omitted.',
      'prop-className': 'CSS class on the input or textarea element.',
      'prop-rest': 'Other native input or textarea HTML attributes (size, value, defaultValue, onChange, and id are reserved).',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjInput } from '@flrxnt/dsbj/react'

export default function Example() {
  const [name, setName] = useState('')
  return (
    <BjInput
      value={name}
      onChange={(e) => setName(e.target.value)}
      label="Nom"
      hint="Tel qu’indiqué sur vos documents"
      placeholder="Dupont"
    />
  )
}`

const propsRows = computed(() => [
  { name: 'value', description: t('prop-value') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'state', description: t('prop-state') },
  { name: 'message', description: t('prop-message') },
  { name: 'size', description: t('prop-size') },
  { name: 'textarea', description: t('prop-textarea') },
  { name: 'rows', description: t('prop-rows') },
  { name: 'icon', description: t('prop-icon') },
  { name: 'id', description: t('prop-id') },
  { name: 'className', description: t('prop-className') },
  { name: '…', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-input-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-input-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-input-group" style="max-width: 24rem">
        <label class="bj-label" for="react-in-prev">Nom</label>
        <span class="bj-hint">Votre nom complet tel qu’il apparaît sur vos documents officiels</span>
        <input id="react-in-prev" class="bj-input" type="text" placeholder="Dupont" />
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-input-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
