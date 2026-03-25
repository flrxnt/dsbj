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
      title: 'BjToggle',
      desc: 'Interrupteur React (case à cocher stylée avec role switch), libellé optionnel, bordure et libellé à gauche.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-checked': 'État activé contrôlé, booléen.',
      'prop-onChange': 'Gestionnaire de changement sur l’input natif.',
      'prop-label': 'Texte du libellé si aucun enfant n’est fourni.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-disabled': 'Désactive l’interrupteur.',
      'prop-border': 'Si vrai, ajoute la classe bj-toggle--border.',
      'prop-labelLeft': 'Si vrai, ajoute bj-toggle--label-left.',
      'prop-id': 'Identifiant du input ; sinon généré automatiquement.',
      'prop-children': 'Contenu du libellé ; remplace label si présent.',
      'prop-className': 'Classe CSS sur l’élément label racine.',
      'prop-rest': 'Autres attributs HTML natifs du input (type, size et role sont réservés).',
    },
    en: {
      title: 'BjToggle',
      desc: 'React switch (styled checkbox with switch role), optional label, border, and label-on-left layout.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-checked': 'Controlled on state, boolean.',
      'prop-onChange': 'Change handler on the native input.',
      'prop-label': 'Label text when no children are passed.',
      'prop-hint': 'Help text below the label.',
      'prop-disabled': 'Disables the toggle.',
      'prop-border': 'When true, adds bj-toggle--border.',
      'prop-labelLeft': 'When true, adds bj-toggle--label-left.',
      'prop-id': 'Input id; auto-generated when omitted.',
      'prop-children': 'Label content; overrides label when provided.',
      'prop-className': 'CSS class on the root label element.',
      'prop-rest': 'Other native input HTML attributes (type, size, and role are reserved).',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjToggle } from '@flrxnt/dsbj/react'

export default function Example() {
  const [notify, setNotify] = useState(true)
  return (
    <BjToggle
      checked={notify}
      onChange={(e) => setNotify(e.target.checked)}
      label="Notifications par e-mail"
      hint="Résumé quotidien"
      border
    />
  )
}`

const propsRows = computed(() => [
  { name: 'checked', description: t('prop-checked') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'border', description: t('prop-border') },
  { name: 'labelLeft', description: t('prop-labelLeft') },
  { name: 'id', description: t('prop-id') },
  { name: 'children', description: t('prop-children') },
  { name: 'className', description: t('prop-className') },
  { name: '…', description: t('prop-rest') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-toggle-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-toggle-preview" :title="t('section-preview')">
    <DocsPreview>
      <label class="bj-toggle bj-toggle--border" for="react-tog-prev">
        <input
          id="react-tog-prev"
          type="checkbox"
          class="bj-toggle__input"
          role="switch"
          checked
          aria-checked="true"
        />
        <span class="bj-toggle__label">
          Notifications par e-mail
          <span class="bj-toggle__hint">Résumé quotidien</span>
        </span>
      </label>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-toggle-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
