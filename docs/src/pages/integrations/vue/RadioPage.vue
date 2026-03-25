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
      desc: 'Bouton radio Vue : chaque instance a une value ; le v-model du groupe est la value sélectionnée.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-modelValue': 'Valeur sélectionnée du groupe (v-model), chaîne.',
      'prop-value': 'Valeur de cette option (obligatoire).',
      'prop-label': 'Texte du libellé (contenu par défaut du slot).',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-disabled': 'Désactive ce radio.',
      'prop-name': 'Attribut name commun au groupe.',
    },
    en: {
      title: 'BjRadio',
      desc: 'Vue radio: each instance has a value; the group v-model is the selected value string.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-modelValue': 'Selected group value (v-model), string.',
      'prop-value': 'This option’s value (required).',
      'prop-label': 'Label text (default slot content).',
      'prop-hint': 'Help text below the label.',
      'prop-disabled': 'Disables this radio.',
      'prop-name': 'Shared group name attribute.',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjRadio } from '@flrxnt/dsbj/vue'

const plan = ref('basic')
<\/script>

<template>
  <BjRadio v-model="plan" name="plan" value="basic" label="Formule de base" />
  <BjRadio v-model="plan" name="plan" value="pro" label="Formule professionnelle" hint="Facturation annuelle" />
</template>`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'value', description: t('prop-value') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'name', description: t('prop-name') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-radio-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-radio-preview" :title="t('section-preview')">
    <DocsPreview>
      <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v)">
        <label class="bj-radio" for="vue-rad-prev-1">
          <input id="vue-rad-prev-1" type="radio" name="plan-prev" value="basic" checked />
          <span class="bj-radio__label">Formule de base</span>
        </label>
        <label class="bj-radio" for="vue-rad-prev-2">
          <input id="vue-rad-prev-2" type="radio" name="plan-prev" value="pro" />
          <span class="bj-radio__label">
            Formule professionnelle
            <span class="bj-radio__hint">Facturation annuelle</span>
          </span>
        </label>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-radio-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
