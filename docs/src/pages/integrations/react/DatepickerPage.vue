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
      desc: 'Selecteur de date React avec calendrier en portail, modes date/mois/annee, format JJ/MM/AAAA, bornes min et max.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu — Date',
      'section-month': 'Mode mois',
      'section-year': 'Mode année',
      'section-props': 'Props',
      'prop-value': 'Valeur selectionnee. Format selon le mode : JJ/MM/AAAA, MM/AAAA ou AAAA.',
      'prop-onChange': 'Callback avec la valeur formatee lors de la selection.',
      'prop-label': 'Libelle au-dessus du champ.',
      'prop-hint': 'Texte d aide sous le libelle.',
      'prop-placeholder': 'Placeholder du champ.',
      'prop-min': 'Date minimale selectionnable, JJ/MM/AAAA.',
      'prop-max': 'Date maximale selectionnable, JJ/MM/AAAA.',
      'prop-disabled': 'Desactive le champ et le bouton calendrier.',
      'prop-size': 'Taille : sm ou md (defaut md).',
      'prop-mode': 'Mode de selection : date, month ou year.',
      'prop-id': 'Identifiant du champ texte ; sinon g\u00e9n\u00e9r\u00e9 automatiquement.',
      'prop-className': 'Classe CSS sur le conteneur bj-datepicker.',
      'section-hint': 'Libelle et hint',
      'section-size': 'Taille sm',
      'section-disabled': 'Desactive',
      'section-combinations': 'Combinaisons',
      'section-callbacks': 'Valeur et onChange',
      'desc-hint': 'label et hint au-dessus du champ en lecture seule.',
      'desc-size': 'size sm applique bj-datepicker--sm.',
      'desc-disabled': 'disabled sur l\u2019input et le bouton calendrier.',
      'desc-combinations': 'mode month avec min, max, hint et placeholder personnalise.',
      'desc-callbacks': 'value controlee et onChange(value: string) a la selection.',
    },
    en: {
      title: 'BjDatepicker',
      desc: 'React date picker with portaled calendar, date/month/year modes, DD/MM/YYYY format, min and max bounds.',
      'section-usage': 'Usage',
      'section-preview': 'Preview — Date',
      'section-month': 'Month mode',
      'section-year': 'Year mode',
      'section-props': 'Props',
      'prop-value': 'Selected value. Format depends on mode: DD/MM/YYYY, MM/YYYY, or YYYY.',
      'prop-onChange': 'Callback with formatted value on selection.',
      'prop-label': 'Label above the field.',
      'prop-hint': 'Help text below the label.',
      'prop-placeholder': 'Field placeholder.',
      'prop-min': 'Earliest selectable date, DD/MM/YYYY.',
      'prop-max': 'Latest selectable date, DD/MM/YYYY.',
      'prop-disabled': 'Disables the field and calendar button.',
      'prop-size': 'Size: sm or md (default md).',
      'prop-mode': 'Selection mode: date, month, or year.',
      'prop-id': 'Text field id; auto-generated when omitted.',
      'prop-className': 'CSS class on the bj-datepicker wrapper.',
      'section-hint': 'Label and hint',
      'section-size': 'Small size',
      'section-disabled': 'Disabled',
      'section-combinations': 'Combinations',
      'section-callbacks': 'Value and onChange',
      'desc-hint': 'label and hint above the read-only field.',
      'desc-size': 'size sm applies bj-datepicker--sm.',
      'desc-disabled': 'disables the input and calendar button.',
      'desc-combinations': 'month mode with min, max, hint, and custom placeholder.',
      'desc-callbacks': 'controlled value and onChange(value: string) on pick.',
    },
  },
})

const codeUsage = `import { useState } from 'react'
import { BjDatepicker } from '@flrxnt/dsbj/react'

export default function App() {
  const [date, setDate] = useState('')
  return (
    <BjDatepicker
      value={date}
      onChange={setDate}
      label="Date de naissance"
      min="01/01/1950"
      max="31/12/2010"
    />
  )
}`

const codeMonth = `import { useState } from 'react'
import { BjDatepicker } from '@flrxnt/dsbj/react'

export default function App() {
  const [month, setMonth] = useState('')
  return (
    <BjDatepicker
      value={month}
      onChange={setMonth}
      mode="month"
      label="Mois de facturation"
    />
  )
}`

const codeYear = `import { useState } from 'react'
import { BjDatepicker } from '@flrxnt/dsbj/react'

export default function App() {
  const [year, setYear] = useState('')
  return (
    <BjDatepicker
      value={year}
      onChange={setYear}
      mode="year"
      label="Annee fiscale"
    />
  )
}`

const codeHint = `import { useState } from 'react'
import { BjDatepicker } from '@flrxnt/dsbj/react'

export default function App() {
  const [date, setDate] = useState('')
  return (
    <BjDatepicker
      id="birth-react"
      value={date}
      onChange={setDate}
      label="Date de naissance"
      hint="Format JJ/MM/AAAA affiche apres selection"
      placeholder="Choisir une date"
    />
  )
}`

const codeSizeSm = `import { useState } from 'react'
import { BjDatepicker } from '@flrxnt/dsbj/react'

export default function App() {
  const [d, setD] = useState('')
  return <BjDatepicker value={d} onChange={setD} size="sm" label="Compact" />
}`

const codeDisabled = `import { BjDatepicker } from '@flrxnt/dsbj/react'

export default function App() {
  return (
    <BjDatepicker value="01/01/2024" onChange={() => {}} label="Verrouille" disabled />
  )
}`

const codeCombinations = `import { useState } from 'react'
import { BjDatepicker } from '@flrxnt/dsbj/react'

export default function App() {
  const [m, setM] = useState('')
  return (
    <BjDatepicker
      mode="month"
      value={m}
      onChange={setM}
      label="Periode"
      hint="Mois comptable"
      min="01/01/2020"
      max="12/12/2030"
      placeholder="MM/AAAA"
    />
  )
}`

const codeCallbacks = `import { useState } from 'react'
import { BjDatepicker } from '@flrxnt/dsbj/react'

export default function App() {
  const [value, setValue] = useState('')
  function onPick(next: string) {
    console.log('picked', next)
    setValue(next)
  }
  return <BjDatepicker value={value} onChange={onPick} label="Echeance" mode="date" />
}`

const propsRows = computed(() => [
  { name: 'value', description: t('prop-value') },
  { name: 'onChange', description: t('prop-onChange') },
  { name: 'mode', description: t('prop-mode') },
  { name: 'label', description: t('prop-label') },
  { name: 'hint', description: t('prop-hint') },
  { name: 'placeholder', description: t('prop-placeholder') },
  { name: 'min', description: t('prop-min') },
  { name: 'max', description: t('prop-max') },
  { name: 'disabled', description: t('prop-disabled') },
  { name: 'size', description: t('prop-size') },
  { name: 'id', description: t('prop-id') },
  { name: 'className', description: t('prop-className') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-datepicker-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-datepicker-hint" :title="t('section-hint')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-hint') }}</p>
    <DocsPreview>
      <div class="bj-datepicker" style="max-width: 18rem">
        <label class="bj-label" for="react-dp-hint">Date de naissance</label>
        <span class="bj-hint">Format JJ/MM/AAAA affiché après sélection</span>
        <div class="bj-datepicker__field">
          <input id="react-dp-hint" class="bj-datepicker__input" type="text" readonly placeholder="Choisir une date" />
          <button type="button" class="bj-datepicker__trigger" aria-label="Calendrier"><i class="ri-calendar-line" aria-hidden="true"></i></button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeHint" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-datepicker-size" :title="t('section-size')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-size') }}</p>
    <DocsPreview>
      <div class="bj-datepicker bj-datepicker--sm" style="max-width: 16rem">
        <label class="bj-label" for="react-dp-sm">Compact</label>
        <div class="bj-datepicker__field">
          <input id="react-dp-sm" class="bj-datepicker__input" type="text" readonly placeholder="JJ/MM/AAAA" />
          <button type="button" class="bj-datepicker__trigger" aria-label="Calendrier"><i class="ri-calendar-line" aria-hidden="true"></i></button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSizeSm" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-datepicker-disabled" :title="t('section-disabled')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-disabled') }}</p>
    <DocsPreview>
      <div class="bj-datepicker" style="max-width: 18rem">
        <label class="bj-label" for="react-dp-dis">Verrouillé</label>
        <div class="bj-datepicker__field">
          <input id="react-dp-dis" class="bj-datepicker__input" type="text" readonly value="01/01/2024" disabled />
          <button type="button" class="bj-datepicker__trigger" disabled aria-label="Calendrier"><i class="ri-calendar-line" aria-hidden="true"></i></button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeDisabled" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-datepicker-combinations" :title="t('section-combinations')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-combinations') }}</p>
    <DocsPreview>
      <div class="bj-datepicker" style="max-width: 18rem">
        <label class="bj-label" for="react-dp-combo">Période</label>
        <span class="bj-hint">Mois comptable</span>
        <div class="bj-datepicker__field">
          <input id="react-dp-combo" class="bj-datepicker__input" type="text" readonly placeholder="MM/AAAA" value="03/2026" />
          <button type="button" class="bj-datepicker__trigger" aria-label="Calendrier"><i class="ri-calendar-line" aria-hidden="true"></i></button>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCombinations" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-datepicker-callbacks" :title="t('section-callbacks')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc-callbacks') }}</p>
    <DocsCode :code="codeCallbacks" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-datepicker-preview" :title="t('section-preview')">
    <DocsPreview>
      <div class="bj-datepicker" style="max-width: 18rem">
        <label class="bj-label">Date de naissance</label>
        <div class="bj-datepicker__field">
          <input class="bj-datepicker__input" type="text" readonly placeholder="JJ/MM/AAAA" value="14/03/2026" />
          <button type="button" class="bj-datepicker__trigger"><i class="ri-calendar-line" aria-hidden="true"></i></button>
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

  <DocsSection id="react-datepicker-month" :title="t('section-month')">
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
    <DocsCode :code="codeMonth" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-datepicker-year" :title="t('section-year')">
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
    <DocsCode :code="codeYear" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-datepicker-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
