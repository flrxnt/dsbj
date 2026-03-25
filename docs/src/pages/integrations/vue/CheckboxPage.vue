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
      desc: 'Case à cocher Vue avec libellé, aide et prise en charge des attributs natifs name et value.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-modelValue': 'État coché (v-model), booléen.',
      'prop-label': 'Texte du libellé (contenu par défaut du slot).',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-disabled': 'Désactive la case.',
      'prop-name': 'Attribut name du input (formulaires).',
      'prop-value': 'Attribut value du input.',
    },
    en: {
      title: 'BjCheckbox',
      desc: 'Vue checkbox with label, hint, and native name/value support.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-modelValue': 'Checked state (v-model), boolean.',
      'prop-label': 'Label text (default slot content).',
      'prop-hint': 'Help text below the label.',
      'prop-disabled': 'Disables the checkbox.',
      'prop-name': 'Input name attribute (forms).',
      'prop-value': 'Input value attribute.',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjCheckbox } from '@flrxnt/dsbj/vue'

const accept = ref(false)
<\/script>

<template>
  <BjCheckbox
    v-model="accept"
    label="J’accepte les conditions d’utilisation"
    hint="Obligatoire pour créer un compte"
    name="terms"
    value="yes"
  />
</template>`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'name', description: t('prop-name') },
  { name: 'value', description: t('prop-value') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-checkbox-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-checkbox-preview" :title="t('section-preview')">
    <DocsPreview>
      <label class="bj-checkbox" for="vue-cb-prev">
        <input id="vue-cb-prev" type="checkbox" name="terms" value="yes" />
        <span class="bj-checkbox__label">
          J’accepte les conditions d’utilisation
          <span class="bj-checkbox__hint">Obligatoire pour créer un compte</span>
        </span>
      </label>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-checkbox-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
