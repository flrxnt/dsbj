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
      desc: 'Liste déroulante Vue avec libellé, aide, placeholder, options et messages de validation.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-modelValue': 'Valeur sélectionnée (v-model), chaîne.',
      'prop-label': 'Libellé au-dessus du select (associé via for/id).',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-options': 'Tableau d’objets avec value, label et disabled optionnel.',
      'prop-error': 'Met le champ en état d’erreur visuelle.',
      'prop-message': 'Message sous le champ (couleur selon error).',
      'prop-disabled': 'Désactive le select.',
      'prop-placeholder': 'Option initiale vide et désactivée avec ce libellé.',
    },
    en: {
      title: 'BjSelect',
      desc: 'Vue select with label, hint, placeholder, options, and validation messaging.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-modelValue': 'Selected value (v-model), string.',
      'prop-label': 'Label above the select (linked via for/id).',
      'prop-hint': 'Help text below the label.',
      'prop-options': 'Array of objects with value, label, and optional disabled.',
      'prop-error': 'Applies error styling to the field.',
      'prop-message': 'Message below the field (color follows error).',
      'prop-disabled': 'Disables the select.',
      'prop-placeholder': 'Initial empty disabled option with this label.',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjSelect } from '@flrxnt/dsbj/vue'

const dept = ref('')
const options = [
  { value: 'dg', label: 'Direction générale' },
  { value: 'dr', label: 'Direction régionale' },
]
<\/script>

<template>
  <BjSelect
    v-model="dept"
    label="Direction"
    hint="Choisir une direction dans la liste"
    placeholder="Sélectionner…"
    :options="options"
  />
</template>`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'options', description: t('prop-options') },
  { name: 'error', description: t('prop-error') },
  { name: 'message', description: t('prop-message') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'placeholder', description: t('prop-placeholder') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-select-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-select-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-select-group" style="max-width: 24rem">
        <label class="bj-label" for="vue-sel-prev">Direction</label>
        <span class="bj-hint">Choisir une direction dans la liste</span>
        <select id="vue-sel-prev" class="bj-select">
          <option value="" disabled selected>Sélectionner…</option>
          <option value="dg">Direction générale</option>
          <option value="dr">Direction régionale</option>
        </select>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-select-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
