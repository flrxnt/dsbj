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
      desc: 'Sélecteur de date Vue avec calendrier, modes date / mois / année, format JJ/MM/AAAA (ou MM/AAAA, AAAA), bornes min/max, taille sm ou md, placeholder, libellé, aide et état désactivé.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu — Date',
      'section-month': 'Mode mois',
      'section-year': 'Mode année',
      'section-sizes': 'Tailles (sm / md)',
      'section-mode-size': 'Mode × taille',
      'section-placeholder-hint': 'Placeholder et hint',
      'section-min-max': 'Min et max',
      'section-disabled': 'Désactivé',
      'section-props': 'Props',
      'prop-modelValue': 'Valeur sélectionnée (v-model). Format selon le mode : JJ/MM/AAAA, MM/AAAA ou AAAA.',
      'prop-label': 'Libellé au-dessus du champ.',
      'prop-hint': 'Texte d’aide sous le libellé.',
      'prop-placeholder': 'Placeholder du champ texte (sinon JJ/MM/AAAA, MM/AAAA ou AAAA selon le mode).',
      'prop-min': 'Date minimale sélectionnable (JJ/MM/AAAA).',
      'prop-max': 'Date maximale sélectionnable (JJ/MM/AAAA).',
      'prop-disabled': 'Désactive le champ et le bouton calendrier.',
      'prop-size': 'Taille : sm (bj-datepicker--sm) ou md (défaut).',
      'prop-mode': 'Mode de sélection : date, month ou year.',
      'label-sm': 'sm',
      'label-md': 'md',
    },
    en: {
      title: 'BjDatepicker',
      desc: 'Vue date picker with calendar, date / month / year modes, DD/MM/YYYY (or MM/YYYY, YYYY) format, min/max bounds, sm or md size, placeholder, label, hint, and disabled state.',
      'section-usage': 'Usage',
      'section-preview': 'Preview — Date',
      'section-month': 'Month mode',
      'section-year': 'Year mode',
      'section-sizes': 'Sizes (sm / md)',
      'section-mode-size': 'Mode × size',
      'section-placeholder-hint': 'Placeholder and hint',
      'section-min-max': 'Min and max',
      'section-disabled': 'Disabled',
      'section-props': 'Props',
      'prop-modelValue': 'Selected value (v-model). Format depends on mode: DD/MM/YYYY, MM/YYYY or YYYY.',
      'prop-label': 'Label above the field.',
      'prop-hint': 'Help text below the label.',
      'prop-placeholder': 'Text field placeholder (otherwise default by mode).',
      'prop-min': 'Earliest selectable date (DD/MM/YYYY).',
      'prop-max': 'Latest selectable date (DD/MM/YYYY).',
      'prop-disabled': 'Disables the field and calendar button.',
      'prop-size': 'Size: sm (bj-datepicker--sm) or md (default).',
      'prop-mode': 'Selection mode: date, month, or year.',
      'label-sm': 'sm',
      'label-md': 'md',
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
  <BjDatepicker v-model="month" mode="month" label="Mois de facturation" />
</template>`

const codeYear = `<script setup>
import { ref } from 'vue'
import { BjDatepicker } from '@flrxnt/dsbj/vue'

const year = ref('')
<\/script>

<template>
  <BjDatepicker v-model="year" mode="year" label="Année fiscale" />
</template>`

const codeSizes = `<BjDatepicker v-model="d1" label="Date (sm)" size="sm" />
<BjDatepicker v-model="d2" label="Date (md)" size="md" />`

const codeModeSize = `<BjDatepicker v-model="m1" mode="month" label="Mois" size="sm" />
<BjDatepicker v-model="y1" mode="year" label="Année" size="md" />`

const codePlaceholderHint = `<BjDatepicker
  v-model="evt"
  label="Événement"
  hint="Choisissez une date dans la plage autorisée"
  placeholder="Choisir une date…"
/>`

const codeMinMax = `<BjDatepicker
  v-model="stay"
  label="Séjour"
  min="01/06/2026"
  max="30/09/2026"
/>`

const codeDisabled = `<BjDatepicker v-model="fixed" label="Date fixe" :disabled="true" />`

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

  <DocsSection id="vue-datepicker-sizes" :title="t('section-sizes')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v); max-width: 18rem">
      <div class="bj-datepicker bj-datepicker--sm">
        <label class="bj-label">{{ t('label-sm') }}</label>
        <div class="bj-datepicker__field">
          <input class="bj-datepicker__input" type="text" readonly placeholder="JJ/MM/AAAA" value="" />
          <button type="button" class="bj-datepicker__trigger" aria-label="Calendrier"><i class="ri-calendar-line" aria-hidden="true"></i></button>
        </div>
      </div>
      <div class="bj-datepicker">
        <label class="bj-label">{{ t('label-md') }}</label>
        <div class="bj-datepicker__field">
          <input class="bj-datepicker__input" type="text" readonly placeholder="JJ/MM/AAAA" value="" />
          <button type="button" class="bj-datepicker__trigger" aria-label="Calendrier"><i class="ri-calendar-line" aria-hidden="true"></i></button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizes" lang="html" />
  </DocsSection>

  <DocsSection id="vue-datepicker-mode-size" :title="t('section-mode-size')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); max-width: 18rem">
      <div class="bj-datepicker bj-datepicker--sm">
        <label class="bj-label">Mois (sm)</label>
        <div class="bj-datepicker__field">
          <input class="bj-datepicker__input" type="text" readonly placeholder="MM/AAAA" value="01/2026" />
          <button type="button" class="bj-datepicker__trigger" aria-label="Calendrier"><i class="ri-calendar-line" aria-hidden="true"></i></button>
        </div>
      </div>
      <div class="bj-datepicker">
        <label class="bj-label">Année (md)</label>
        <div class="bj-datepicker__field">
          <input class="bj-datepicker__input" type="text" readonly placeholder="AAAA" value="2026" />
          <button type="button" class="bj-datepicker__trigger" aria-label="Calendrier"><i class="ri-calendar-line" aria-hidden="true"></i></button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeModeSize" lang="html" />
  </DocsSection>

  <DocsSection id="vue-datepicker-placeholder-hint" :title="t('section-placeholder-hint')">
    <DocsPreview>
      <div class="bj-datepicker" style="max-width: 18rem">
        <label class="bj-label">Événement</label>
        <span class="bj-hint">Choisissez une date dans la plage autorisée</span>
        <div class="bj-datepicker__field">
          <input class="bj-datepicker__input" type="text" readonly placeholder="Choisir une date…" value="" />
          <button type="button" class="bj-datepicker__trigger" aria-label="Calendrier"><i class="ri-calendar-line" aria-hidden="true"></i></button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codePlaceholderHint" lang="html" />
  </DocsSection>

  <DocsSection id="vue-datepicker-min-max" :title="t('section-min-max')">
    <DocsPreview>
      <div class="bj-datepicker" style="max-width: 18rem">
        <label class="bj-label">Séjour</label>
        <div class="bj-datepicker__field">
          <input class="bj-datepicker__input" type="text" readonly placeholder="JJ/MM/AAAA" value="15/07/2026" />
          <button type="button" class="bj-datepicker__trigger" aria-label="Calendrier"><i class="ri-calendar-line" aria-hidden="true"></i></button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeMinMax" lang="html" />
  </DocsSection>

  <DocsSection id="vue-datepicker-disabled" :title="t('section-disabled')">
    <DocsPreview>
      <div class="bj-datepicker" style="max-width: 18rem">
        <label class="bj-label">Date fixe</label>
        <div class="bj-datepicker__field">
          <input class="bj-datepicker__input" type="text" readonly disabled value="01/01/2026" />
          <button type="button" class="bj-datepicker__trigger" disabled aria-label="Calendrier"><i class="ri-calendar-line" aria-hidden="true"></i></button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="html" />
  </DocsSection>

  <DocsSection id="vue-datepicker-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
