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
      desc: 'Selecteur de date Vue avec calendrier, selection du mois/annee, format JJ/MM/AAAA, bornes min/max et taille sm ou md.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu — Date',
      'section-month': 'Mode mois',
      'section-year': 'Mode année',
      'section-props': 'Props',
      'prop-modelValue': 'Valeur selectionnee (v-model). Format selon le mode : JJ/MM/AAAA, MM/AAAA ou AAAA.',
      'prop-label': 'Libelle au-dessus du champ.',
      'prop-hint': 'Texte d aide sous le libelle.',
      'prop-placeholder': 'Placeholder du champ texte.',
      'prop-min': 'Date minimale selectionnable (JJ/MM/AAAA).',
      'prop-max': 'Date maximale selectionnable (JJ/MM/AAAA).',
      'prop-disabled': 'Desactive le champ et le bouton calendrier.',
      'prop-size': 'Taille : sm ou md (defaut md).',
      'prop-mode': 'Mode de selection : date, month ou year.',
    },
    en: {
      title: 'BjDatepicker',
      desc: 'Vue date picker with calendar, month/year selection, DD/MM/YYYY format, min/max bounds, and sm or md size.',
      'section-usage': 'Usage',
      'section-preview': 'Preview — Date',
      'section-month': 'Month mode',
      'section-year': 'Year mode',
      'section-props': 'Props',
      'prop-modelValue': 'Selected value (v-model). Format depends on mode: DD/MM/YYYY, MM/YYYY or YYYY.',
      'prop-label': 'Label above the field.',
      'prop-hint': 'Help text below the label.',
      'prop-placeholder': 'Text field placeholder.',
      'prop-min': 'Earliest selectable date (DD/MM/YYYY).',
      'prop-max': 'Latest selectable date (DD/MM/YYYY).',
      'prop-disabled': 'Disables the field and calendar button.',
      'prop-size': 'Size: sm or md (default md).',
      'prop-mode': 'Selection mode: date, month, or year.',
    },
  },
})

const codeUsage = `<script setup>
import { ref } from 'vue'
import { BjDatepicker } from '@flrxnt/dsbj/vue'

const date = ref('')
<\/script>

<template>
  <BjDatepicker
    v-model="date"
    label="Date de naissance"
    min="01/01/1950"
    max="31/12/2010"
  />
</template>`

const codeMonth = `<script setup>
import { ref } from 'vue'
import { BjDatepicker } from '@flrxnt/dsbj/vue'

const month = ref('')
<\/script>

<template>
  <BjDatepicker
    v-model="month"
    mode="month"
    label="Mois de facturation"
  />
</template>`

const codeYear = `<script setup>
import { ref } from 'vue'
import { BjDatepicker } from '@flrxnt/dsbj/vue'

const year = ref('')
<\/script>

<template>
  <BjDatepicker
    v-model="year"
    mode="year"
    label="Annee fiscale"
  />
</template>`

const propsRows = computed(() => [
  { name: 'modelValue', description: t('prop-modelValue') },
  { name: 'mode', description: t('prop-mode') },
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
        <div class="bj-datepicker__field">
          <input class="bj-datepicker__input" type="text" readonly placeholder="JJ/MM/AAAA" value="14/03/2026" />
          <button type="button" class="bj-datepicker__trigger" aria-label="Ouvrir le calendrier">
            <i class="ri-calendar-line" aria-hidden="true"></i>
          </button>
        </div>
        <div class="bj-datepicker__calendar" data-bj-expanded style="position: relative; top: 0;">
          <div class="bj-datepicker__nav">
            <button type="button" class="bj-datepicker__nav-btn"><i class="ri-arrow-left-s-line" aria-hidden="true"></i></button>
            <button type="button" class="bj-datepicker__nav-title">Mars 2026</button>
            <button type="button" class="bj-datepicker__nav-btn"><i class="ri-arrow-right-s-line" aria-hidden="true"></i></button>
          </div>
          <div class="bj-datepicker__weekdays">
            <span class="bj-datepicker__weekday">Lun</span><span class="bj-datepicker__weekday">Mar</span>
            <span class="bj-datepicker__weekday">Mer</span><span class="bj-datepicker__weekday">Jeu</span>
            <span class="bj-datepicker__weekday">Ven</span><span class="bj-datepicker__weekday">Sam</span>
            <span class="bj-datepicker__weekday">Dim</span>
          </div>
          <div class="bj-datepicker__grid" role="grid">
            <button type="button" class="bj-datepicker__day bj-datepicker__day--outside" tabindex="-1">23</button>
            <button type="button" class="bj-datepicker__day bj-datepicker__day--outside" tabindex="-1">24</button>
            <button type="button" class="bj-datepicker__day bj-datepicker__day--outside" tabindex="-1">25</button>
            <button type="button" class="bj-datepicker__day bj-datepicker__day--outside" tabindex="-1">26</button>
            <button type="button" class="bj-datepicker__day bj-datepicker__day--outside" tabindex="-1">27</button>
            <button type="button" class="bj-datepicker__day bj-datepicker__day--outside" tabindex="-1">28</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">1</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">2</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">3</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">4</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">5</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">6</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">7</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">8</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">9</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">10</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">11</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">12</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">13</button>
            <button type="button" class="bj-datepicker__day bj-datepicker__day--selected" tabindex="-1">14</button>
            <button type="button" class="bj-datepicker__day" tabindex="-1">15</button>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-datepicker-month" :title="t('section-month')">
    <DocsPreview>
      <div class="bj-datepicker" style="max-width: 18rem">
        <label class="bj-label">Mois de facturation</label>
        <div class="bj-datepicker__field">
          <input class="bj-datepicker__input" type="text" readonly placeholder="MM/AAAA" value="03/2026" />
          <button type="button" class="bj-datepicker__trigger"><i class="ri-calendar-line" aria-hidden="true"></i></button>
        </div>
        <div class="bj-datepicker__calendar" data-bj-expanded style="position: relative; top: 0;">
          <div class="bj-datepicker__nav">
            <button type="button" class="bj-datepicker__nav-btn"><i class="ri-arrow-left-s-line" aria-hidden="true"></i></button>
            <button type="button" class="bj-datepicker__nav-title">2026</button>
            <button type="button" class="bj-datepicker__nav-btn"><i class="ri-arrow-right-s-line" aria-hidden="true"></i></button>
          </div>
          <div class="bj-datepicker__months-grid">
            <button type="button" class="bj-datepicker__month-cell">Jan</button>
            <button type="button" class="bj-datepicker__month-cell">Fév</button>
            <button type="button" class="bj-datepicker__month-cell bj-datepicker__month-cell--selected">Mar</button>
            <button type="button" class="bj-datepicker__month-cell">Avr</button>
            <button type="button" class="bj-datepicker__month-cell">Mai</button>
            <button type="button" class="bj-datepicker__month-cell">Juin</button>
            <button type="button" class="bj-datepicker__month-cell">Juil</button>
            <button type="button" class="bj-datepicker__month-cell">Août</button>
            <button type="button" class="bj-datepicker__month-cell">Sep</button>
            <button type="button" class="bj-datepicker__month-cell">Oct</button>
            <button type="button" class="bj-datepicker__month-cell">Nov</button>
            <button type="button" class="bj-datepicker__month-cell">Déc</button>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMonth" lang="html" />
  </DocsSection>

  <DocsSection id="vue-datepicker-year" :title="t('section-year')">
    <DocsPreview>
      <div class="bj-datepicker" style="max-width: 18rem">
        <label class="bj-label">Année fiscale</label>
        <div class="bj-datepicker__field">
          <input class="bj-datepicker__input" type="text" readonly placeholder="AAAA" value="2026" />
          <button type="button" class="bj-datepicker__trigger"><i class="ri-calendar-line" aria-hidden="true"></i></button>
        </div>
        <div class="bj-datepicker__calendar" data-bj-expanded style="position: relative; top: 0;">
          <div class="bj-datepicker__nav">
            <button type="button" class="bj-datepicker__nav-btn"><i class="ri-arrow-left-s-line" aria-hidden="true"></i></button>
            <span class="bj-datepicker__nav-title" style="cursor: default;">2020–2029</span>
            <button type="button" class="bj-datepicker__nav-btn"><i class="ri-arrow-right-s-line" aria-hidden="true"></i></button>
          </div>
          <div class="bj-datepicker__years-grid">
            <button type="button" class="bj-datepicker__year-cell bj-datepicker__year-cell--outside">2019</button>
            <button type="button" class="bj-datepicker__year-cell">2020</button>
            <button type="button" class="bj-datepicker__year-cell">2021</button>
            <button type="button" class="bj-datepicker__year-cell">2022</button>
            <button type="button" class="bj-datepicker__year-cell">2023</button>
            <button type="button" class="bj-datepicker__year-cell">2024</button>
            <button type="button" class="bj-datepicker__year-cell">2025</button>
            <button type="button" class="bj-datepicker__year-cell bj-datepicker__year-cell--selected">2026</button>
            <button type="button" class="bj-datepicker__year-cell">2027</button>
            <button type="button" class="bj-datepicker__year-cell">2028</button>
            <button type="button" class="bj-datepicker__year-cell">2029</button>
            <button type="button" class="bj-datepicker__year-cell bj-datepicker__year-cell--outside">2030</button>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeYear" lang="html" />
  </DocsSection>

  <DocsSection id="vue-datepicker-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
