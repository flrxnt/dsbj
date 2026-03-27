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
      desc: 'Bouton radio Vue : chaque instance a une value obligatoire ; le v-model du groupe est la chaîne sélectionnée. Libellé, aide, name partagé et option désactivée.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-group': 'Groupe (même v-model et name)',
      'section-disabled-option': 'Option désactivée',
      'section-hint': 'Avec hint sur une option',
      'section-slot': 'Slot par défaut',
      'section-props': 'Props',
      'prop-modelValue': 'Valeur sélectionnée du groupe (v-model), chaîne.',
      'prop-value': 'Valeur de cette option (obligatoire).',
      'prop-label': 'Texte du libellé (contenu par défaut du slot).',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-disabled': 'Désactive ce radio.',
      'prop-name': 'Attribut name commun au groupe.',
      'slot-desc': 'Comme pour la checkbox, le slot remplace le texte du libellé.',
    },
    en: {
      title: 'BjRadio',
      desc: 'Vue radio: each instance requires a value; the group v-model is the selected string. Label, hint, shared name, and per-option disabled.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-group': 'Group (same v-model and name)',
      'section-disabled-option': 'Disabled option',
      'section-hint': 'With hint on one option',
      'section-slot': 'Default slot',
      'section-props': 'Props',
      'prop-modelValue': 'Selected group value (v-model), string.',
      'prop-value': 'This option’s value (required).',
      'prop-label': 'Label text (default slot content).',
      'prop-hint': 'Help text below the label.',
      'prop-disabled': 'Disables this radio.',
      'prop-name': 'Shared group name attribute.',
      'slot-desc': 'Like the checkbox, the slot replaces the label text.',
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

const codeGroup = `<BjRadio v-model="tier" name="tier" value="free" label="Gratuit" />
<BjRadio v-model="tier" name="tier" value="paid" label="Payant" />`

const codeDisabled = `<BjRadio v-model="opt" name="opt" value="a" label="Option A" />
<BjRadio v-model="opt" name="opt" value="b" label="Option B (indisponible)" :disabled="true" />`

const codeHint = `<BjRadio v-model="ship" name="ship" value="std" label="Standard" />
<BjRadio v-model="ship" name="ship" value="exp" label="Express" hint="Livraison sous 24 h" />`

const codeSlot = `<BjRadio v-model="color" name="color" value="blue">
  <strong>Bleu</strong> — classique
</BjRadio>`

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

  <DocsSection id="vue-radio-group" :title="t('section-group')">
    <DocsPreview>
      <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v)">
        <label class="bj-radio" for="vue-rad-g1">
          <input id="vue-rad-g1" type="radio" name="tier-prev" value="free" checked />
          <span class="bj-radio__label">Gratuit</span>
        </label>
        <label class="bj-radio" for="vue-rad-g2">
          <input id="vue-rad-g2" type="radio" name="tier-prev" value="paid" />
          <span class="bj-radio__label">Payant</span>
        </label>
      </div>
    </DocsPreview>
    <DocsCode :code="codeGroup" lang="html" />
  </DocsSection>

  <DocsSection id="vue-radio-disabled" :title="t('section-disabled-option')">
    <DocsPreview>
      <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v)">
        <label class="bj-radio" for="vue-rad-d1">
          <input id="vue-rad-d1" type="radio" name="opt-prev" value="a" checked />
          <span class="bj-radio__label">Option A</span>
        </label>
        <label class="bj-radio" for="vue-rad-d2">
          <input id="vue-rad-d2" type="radio" name="opt-prev" value="b" disabled />
          <span class="bj-radio__label">Option B (indisponible)</span>
        </label>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="html" />
  </DocsSection>

  <DocsSection id="vue-radio-hint" :title="t('section-hint')">
    <DocsPreview>
      <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v)">
        <label class="bj-radio" for="vue-rad-h1">
          <input id="vue-rad-h1" type="radio" name="ship-prev" value="std" checked />
          <span class="bj-radio__label">Standard</span>
        </label>
        <label class="bj-radio" for="vue-rad-h2">
          <input id="vue-rad-h2" type="radio" name="ship-prev" value="exp" />
          <span class="bj-radio__label">
            Express
            <span class="bj-radio__hint">Livraison sous 24 h</span>
          </span>
        </label>
      </div>
    </DocsPreview>
    <DocsCode :code="codeHint" lang="html" />
  </DocsSection>

  <DocsSection id="vue-radio-slot" :title="t('section-slot')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)">{{ t('slot-desc') }}</p>
    <DocsPreview>
      <label class="bj-radio" for="vue-rad-sl">
        <input id="vue-rad-sl" type="radio" name="color-prev" value="blue" checked />
        <span class="bj-radio__label"><strong>Bleu</strong> — classique</span>
      </label>
    </DocsPreview>
    <DocsCode :code="codeSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-radio-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
