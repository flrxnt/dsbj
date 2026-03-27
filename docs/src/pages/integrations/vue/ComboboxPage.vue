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
      title: 'BjCombobox',
      desc: 'Champ d’autocomplétion Vue avec filtrage à la saisie, v-model sur la value sélectionnée, options, libellé, aide, erreur, message, désactivation et texte sans résultat.',
      'section-usage': 'Utilisation',
      'section-v-model': 'v-model (update:modelValue)',
      'section-preview': 'Aperçu',
      'section-error-message': 'Erreur et message',
      'section-disabled': 'Désactivé',
      'section-no-results': 'noResults',
      'section-error-open': 'Erreur × liste ouverte',
      'section-props': 'Props',
      'prop-modelValue': 'Valeur sélectionnée (v-model), chaîne ; émis via update:modelValue.',
      'prop-label': 'Libellé au-dessus du champ.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-options': 'Tableau d’objets avec value, label et disabled optionnel.',
      'prop-error': 'Met le champ en état d’erreur (bj-combobox--error, aria-invalid).',
      'prop-message': 'Message sous le champ (couleur selon error).',
      'prop-disabled': 'Désactive le combobox.',
      'prop-placeholder': 'Placeholder du champ de saisie.',
      'prop-noResults': 'Texte affiché quand aucune option ne correspond à la saisie.',
      'emit-desc':
        'Le composant émet <code>update:modelValue</code> avec la <code>value</code> de l’option choisie (chaîne).',
    },
    en: {
      title: 'BjCombobox',
      desc: 'Vue autocomplete with type-to-filter, v-model bound to the selected option value, options, label, hint, error, message, disabled state, and empty-state text.',
      'section-usage': 'Usage',
      'section-v-model': 'v-model (update:modelValue)',
      'section-preview': 'Preview',
      'section-error-message': 'Error and message',
      'section-disabled': 'Disabled',
      'section-no-results': 'noResults',
      'section-error-open': 'Error × open list',
      'section-props': 'Props',
      'prop-modelValue': 'Selected value (v-model), string; emitted via update:modelValue.',
      'prop-label': 'Label above the field.',
      'prop-hint': 'Help text below the label.',
      'prop-options': 'Array of objects with value, label, and optional disabled.',
      'prop-error': 'Applies error styling (bj-combobox--error, aria-invalid).',
      'prop-message': 'Message below the field (color follows error).',
      'prop-disabled': 'Disables the combobox.',
      'prop-placeholder': 'Input placeholder text.',
      'prop-noResults': 'Text shown when no option matches the input.',
      'emit-desc':
        'The component emits <code>update:modelValue</code> with the chosen option’s <code>value</code> (string).',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjCombobox } from '@flrxnt/dsbj/vue'

const city = ref('')
const cities = [
  { value: 'cotonou', label: 'Cotonou' },
  { value: 'porto', label: 'Porto-Novo' },
  { value: 'parakou', label: 'Parakou' },
  { value: 'abomey', label: 'Abomey-Calavi' },
  { value: 'djougou', label: 'Djougou' },
]
<\/script>

<template>
  <BjCombobox
    v-model="city"
    label="Ville"
    hint="Commune de résidence"
    placeholder="Rechercher une ville…"
    :options="cities"
  />
</template>`

const codeVModel = `<script setup lang="ts">
import { ref, watch } from 'vue'
import { BjCombobox } from '@flrxnt/dsbj/vue'

const selectedId = ref('')
watch(selectedId, (v) => console.log('update:modelValue', v))
<\/script>

<template>
  <BjCombobox v-model="selectedId" :options="items" label="Code" />
</template>`

const codeError = `<BjCombobox
  v-model="city"
  label="Ville"
  :options="cities"
  :error="true"
  message="Sélectionnez une ville dans la liste."
/>`

const codeDisabled = `<BjCombobox
  v-model="city"
  label="Ville"
  :options="cities"
  :disabled="true"
/>`

const codeNoResults = `<BjCombobox
  v-model="city"
  label="Ville"
  :options="cities"
  no-results="Aucune correspondance pour cette saisie."
/>`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'options', description: t('prop-options') },
  { name: 'error', description: t('prop-error') },
  { name: 'message', description: t('prop-message') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'placeholder', description: t('prop-placeholder') },
  { name: 'noResults', description: t('prop-noResults') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-combobox-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-combobox-v-model" :title="t('section-v-model')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('emit-desc')" />
    <DocsCode :code="codeVModel" lang="html" />
  </DocsSection>

  <DocsSection id="vue-combobox-preview" :title="t('section-preview')">
    <DocsPreview style="min-height: 16rem">
      <div class="bj-combobox bj-combobox--open" style="max-width: 24rem">
        <label class="bj-label" for="vue-cb-prev">Ville</label>
        <span class="bj-hint">Commune de résidence</span>
        <div class="bj-combobox__input-wrap">
          <input id="vue-cb-prev" class="bj-combobox__input" type="text" role="combobox" aria-expanded="true" placeholder="Rechercher une ville…" value="Porto" />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
        <ul class="bj-combobox__listbox" role="listbox" style="position: relative">
          <li class="bj-combobox__option bj-combobox__option--active" role="option" aria-selected="true">Porto-Novo</li>
        </ul>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-combobox-error" :title="t('section-error-message')">
    <DocsPreview style="max-width: 24rem">
      <div class="bj-combobox bj-combobox--error">
        <label class="bj-label" for="vue-cb-err">Ville</label>
        <div class="bj-combobox__input-wrap">
          <input id="vue-cb-err" class="bj-combobox__input" type="text" role="combobox" aria-invalid="true" />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
        <p class="bj-message bj-message--error">Sélectionnez une ville dans la liste.</p>
      </div>
    </DocsPreview>
    <DocsCode :code="codeError" lang="html" />
  </DocsSection>

  <DocsSection id="vue-combobox-disabled" :title="t('section-disabled')">
    <DocsPreview style="max-width: 24rem">
      <div class="bj-combobox">
        <label class="bj-label" for="vue-cb-dis">Ville</label>
        <div class="bj-combobox__input-wrap">
          <input id="vue-cb-dis" class="bj-combobox__input" type="text" role="combobox" disabled value="Cotonou" />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="html" />
  </DocsSection>

  <DocsSection id="vue-combobox-no-results" :title="t('section-no-results')">
    <DocsPreview style="min-height: 10rem">
      <div class="bj-combobox bj-combobox--open" style="max-width: 24rem">
        <label class="bj-label" for="vue-cb-nr">Ville</label>
        <div class="bj-combobox__input-wrap">
          <input id="vue-cb-nr" class="bj-combobox__input" type="text" role="combobox" aria-expanded="true" value="zzz" />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
        <div class="bj-combobox__listbox">
          <p class="bj-combobox__no-results">Aucune correspondance pour cette saisie.</p>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeNoResults" lang="html" />
  </DocsSection>

  <DocsSection id="vue-combobox-error-open" :title="t('section-error-open')">
    <DocsPreview style="min-height: 14rem">
      <div class="bj-combobox bj-combobox--error bj-combobox--open" style="max-width: 24rem">
        <label class="bj-label" for="vue-cb-eo">Ville</label>
        <div class="bj-combobox__input-wrap">
          <input id="vue-cb-eo" class="bj-combobox__input" type="text" role="combobox" aria-expanded="true" aria-invalid="true" />
          <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
        </div>
        <ul class="bj-combobox__listbox" role="listbox" style="position: relative">
          <li class="bj-combobox__option" role="option">Cotonou</li>
        </ul>
        <p class="bj-message bj-message--error">Champ invalide.</p>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-combobox-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
