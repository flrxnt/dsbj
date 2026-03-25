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
      desc: 'Champ de saisie Vue avec libellé, aide, états de validation et prise en charge textarea via la prop textarea.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'prop-modelValue': 'Valeur du champ (v-model).',
      'prop-label': 'Libellé accessible.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-state': 'État visuel : default, valid, error.',
      'prop-message': 'Message sous le champ (erreur ou succès).',
      'prop-size': 'Taille : sm ou md.',
      'prop-textarea': 'Rend une textarea au lieu d’un input.',
      'prop-disabled': 'Désactive le champ.',
    },
    en: {
      title: 'BjInput',
      desc: 'Vue text field with label, hint, validation states, and textarea mode via the textarea prop.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'prop-modelValue': 'Field value (v-model).',
      'prop-label': 'Accessible label.',
      'prop-hint': 'Help text below the label.',
      'prop-state': 'Visual state: default, valid, error.',
      'prop-message': 'Message below the field.',
      'prop-size': 'Size: sm or md.',
      'prop-textarea': 'Renders a textarea instead of an input.',
      'prop-disabled': 'Disables the field.',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjInput } from '@flrxnt/dsbj/vue'

const name = ref('')
<\/script>

<template>
  <BjInput v-model="name" label="Nom" hint="Tel qu’indiqué sur vos documents" placeholder="Dupont" />
</template>`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'state', description: t('prop-state') },
  { name: 'message', description: t('prop-message') },
  { name: 'size', description: t('prop-size') },
  { name: 'textarea', description: t('prop-textarea') },
  { name: 'disabled', description: t('prop-disabled') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-input-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-input-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-input-group" style="max-width: 24rem">
        <label class="bj-label" for="int-vue-in-1">Nom</label>
        <span class="bj-hint">Votre nom complet tel qu’il apparaît sur vos documents officiels</span>
        <input id="int-vue-in-1" class="bj-input" type="text" placeholder="Dupont" />
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-input-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
