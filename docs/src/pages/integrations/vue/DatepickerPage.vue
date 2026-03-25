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
      title: 'BjDatepicker',
      desc: 'Sélecteur de date Vue avec calendrier, format JJ/MM/AAAA, bornes min/max et taille sm ou md.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'prop-modelValue': 'Date sélectionnée (v-model), chaîne JJ/MM/AAAA.',
      'prop-label': 'Libellé au-dessus du champ.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-placeholder': 'Placeholder du champ texte (défaut JJ/MM/AAAA).',
      'prop-min': 'Date minimale sélectionnable (JJ/MM/AAAA).',
      'prop-max': 'Date maximale sélectionnable (JJ/MM/AAAA).',
      'prop-disabled': 'Désactive le champ et le bouton calendrier.',
      'prop-size': 'Taille : sm ou md (défaut md).',
    },
    en: {
      title: 'BjDatepicker',
      desc: 'Vue date picker with calendar, DD/MM/YYYY format, min/max bounds, and sm or md size.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'prop-modelValue': 'Selected date (v-model), DD/MM/YYYY string.',
      'prop-label': 'Label above the field.',
      'prop-hint': 'Help text below the label.',
      'prop-placeholder': 'Text field placeholder (default DD/MM/YYYY).',
      'prop-min': 'Earliest selectable date (DD/MM/YYYY).',
      'prop-max': 'Latest selectable date (DD/MM/YYYY).',
      'prop-disabled': 'Disables the field and calendar button.',
      'prop-size': 'Size: sm or md (default md).',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjDatepicker } from '@flrxnt/dsbj/vue'

const birth = ref('')
<\/script>

<template>
  <BjDatepicker
    v-model="birth"
    label="Date de naissance"
    hint="JJ/MM/AAAA"
    min="01/01/1950"
    max="31/12/2010"
  />
</template>`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'placeholder', description: t('prop-placeholder') },
  { name: 'min', description: t('prop-min') },
  { name: 'max', description: t('prop-max') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'size', description: t('prop-size') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-datepicker-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-datepicker-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-datepicker" style="max-width: 18rem">
        <label class="bj-label">Date de naissance</label>
        <span class="bj-hint">JJ/MM/AAAA</span>
        <div class="bj-datepicker__field">
          <input class="bj-datepicker__input" type="text" readonly placeholder="JJ/MM/AAAA" value="15/03/1990" />
          <button type="button" class="bj-datepicker__trigger" aria-label="Ouvrir le calendrier">
            <i class="ri-calendar-line" aria-hidden="true" />
          </button>
        </div>
        <div class="bj-datepicker__calendar" data-bj-expanded role="dialog" aria-label="Calendrier">
          <div class="bj-datepicker__nav">
            <button type="button" class="bj-datepicker__nav-btn" aria-label="Mois précédent">
              <i class="ri-arrow-left-s-line" aria-hidden="true" />
            </button>
            <span class="bj-datepicker__month-year">mars 2026</span>
            <button type="button" class="bj-datepicker__nav-btn" aria-label="Mois suivant">
              <i class="ri-arrow-right-s-line" aria-hidden="true" />
            </button>
          </div>
          <div class="bj-datepicker__weekdays">
            <span class="bj-datepicker__weekday">lun</span>
            <span class="bj-datepicker__weekday">mar</span>
            <span class="bj-datepicker__weekday">mer</span>
            <span class="bj-datepicker__weekday">jeu</span>
            <span class="bj-datepicker__weekday">ven</span>
            <span class="bj-datepicker__weekday">sam</span>
            <span class="bj-datepicker__weekday">dim</span>
          </div>
          <div class="bj-datepicker__grid" role="grid">
            <button type="button" class="bj-datepicker__day bj-datepicker__day--outside" tabindex="-1">27</button>
            <button type="button" class="bj-datepicker__day bj-datepicker__day--outside" tabindex="-1">28</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">1</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">2</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">3</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">4</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">5</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">10</button>
            <button type="button" class="bj-datepicker__day bj-datepicker__day--today" tabindex="-1">11</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">12</button>
            <button type="button" class="bj-datepicker__day bj-datepicker__day--selected" tabindex="-1">15</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">16</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">17</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">18</button>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-datepicker-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
