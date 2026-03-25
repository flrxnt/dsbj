<script lang="ts">
export interface BjDatepickerProps {
  modelValue?: string
  label?: string
  hint?: string
  placeholder?: string
  min?: string
  max?: string
  disabled?: boolean
  size?: 'sm' | 'md'
  mode?: 'date' | 'month' | 'year'
}
</script>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

const DAYS_SHORT = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
]
const MONTHS_SHORT = [
  'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin',
  'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc',
]

const props = withDefaults(defineProps<BjDatepickerProps>(), {
  modelValue: '',
  placeholder: '',
  size: 'md',
  mode: 'date',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const open = ref(false)
const wrapperRef = ref<HTMLElement>()
const viewYear = ref(new Date().getFullYear())
const viewMonth = ref(new Date().getMonth())
const viewDecade = computed(() => Math.floor(viewYear.value / 10) * 10)

type ViewMode = 'days' | 'months' | 'years'
const currentView = ref<ViewMode>('days')

const defaultPlaceholder = computed(() => {
  if (props.placeholder) return props.placeholder
  if (props.mode === 'month') return 'MM/AAAA'
  if (props.mode === 'year') return 'AAAA'
  return 'JJ/MM/AAAA'
})

const wrapperClasses = computed(() => [
  'bj-datepicker',
  props.size === 'sm' && 'bj-datepicker--sm',
])

function pad(n: number) { return n < 10 ? `0${n}` : `${n}` }

function formatDate(d: Date) { return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}` }
function formatMonth(month: number, year: number) { return `${pad(month + 1)}/${year}` }
function formatYear(year: number) { return `${year}` }

function parseDate(s: string): Date | null {
  const m = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
  if (!m) return null
  const d = new Date(+m[3], +m[2] - 1, +m[1])
  return isNaN(d.getTime()) ? null : d
}
function parseMonth(s: string): { month: number; year: number } | null {
  const m = s.match(/^(\d{2})\/(\d{4})$/)
  if (!m) return null
  return { month: +m[1] - 1, year: +m[2] }
}
function parseYear(s: string): number | null {
  const m = s.match(/^(\d{4})$/)
  return m ? +m[1] : null
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}
function daysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate() }

const minDate = computed(() => props.min ? parseDate(props.min) : null)
const maxDate = computed(() => props.max ? parseDate(props.max) : null)
const selectedDate = computed(() => props.modelValue ? parseDate(props.modelValue) : null)
const selectedMonth = computed(() => props.modelValue ? parseMonth(props.modelValue) : null)
const selectedYear = computed(() => props.modelValue ? parseYear(props.modelValue) : null)

function isDisabled(d: Date) {
  if (minDate.value && d < minDate.value) return true
  if (maxDate.value && d > maxDate.value) return true
  return false
}

interface DayCell { date: Date; day: number; outside: boolean; today: boolean; selected: boolean; disabled: boolean }

const days = computed<DayCell[]>(() => {
  const today = new Date()
  const dim = daysInMonth(viewYear.value, viewMonth.value)
  const firstDow = (new Date(viewYear.value, viewMonth.value, 1).getDay() + 6) % 7
  const cells: DayCell[] = []
  const prevDim = daysInMonth(viewYear.value, viewMonth.value - 1)
  for (let i = firstDow - 1; i >= 0; i--) {
    const d = new Date(viewYear.value, viewMonth.value - 1, prevDim - i)
    cells.push({ date: d, day: prevDim - i, outside: true, today: sameDay(d, today), selected: !!selectedDate.value && sameDay(d, selectedDate.value), disabled: isDisabled(d) })
  }
  for (let day = 1; day <= dim; day++) {
    const d = new Date(viewYear.value, viewMonth.value, day)
    cells.push({ date: d, day, outside: false, today: sameDay(d, today), selected: !!selectedDate.value && sameDay(d, selectedDate.value), disabled: isDisabled(d) })
  }
  const total = cells.length
  const remaining = total % 7 === 0 ? 0 : 7 - (total % 7)
  for (let i = 1; i <= remaining; i++) {
    const d = new Date(viewYear.value, viewMonth.value + 1, i)
    cells.push({ date: d, day: i, outside: true, today: sameDay(d, today), selected: !!selectedDate.value && sameDay(d, selectedDate.value), disabled: isDisabled(d) })
  }
  return cells
})

const monthCells = computed(() => {
  const now = new Date()
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()
  return MONTHS_SHORT.map((label, i) => ({
    label,
    index: i,
    today: i === currentMonth && viewYear.value === currentYear,
    selected: props.mode === 'month'
      ? (selectedMonth.value?.month === i && selectedMonth.value?.year === viewYear.value)
      : (viewMonth.value === i),
  }))
})

const yearCells = computed(() => {
  const now = new Date()
  const currentYear = now.getFullYear()
  const start = viewDecade.value - 1
  return Array.from({ length: 12 }, (_, i) => {
    const y = start + i
    return {
      year: y,
      outside: y < viewDecade.value || y >= viewDecade.value + 10,
      today: y === currentYear,
      selected: props.mode === 'year'
        ? selectedYear.value === y
        : viewYear.value === y,
    }
  })
})

function prevMonth() { if (viewMonth.value === 0) { viewMonth.value = 11; viewYear.value-- } else viewMonth.value-- }
function nextMonth() { if (viewMonth.value === 11) { viewMonth.value = 0; viewYear.value++ } else viewMonth.value++ }
function prevYear() { viewYear.value-- }
function nextYear() { viewYear.value++ }
function prevDecade() { viewYear.value -= 10 }
function nextDecade() { viewYear.value += 10 }

function selectDay(cell: DayCell) {
  if (cell.disabled) return
  emit('update:modelValue', formatDate(cell.date))
  open.value = false
}

function selectMonth(index: number) {
  if (props.mode === 'month') {
    emit('update:modelValue', formatMonth(index, viewYear.value))
    open.value = false
  } else {
    viewMonth.value = index
    currentView.value = 'days'
  }
}

function selectYear(year: number) {
  if (props.mode === 'year') {
    emit('update:modelValue', formatYear(year))
    open.value = false
  } else {
    viewYear.value = year
    currentView.value = props.mode === 'month' ? 'months' : 'months'
  }
}

function showMonthView() { currentView.value = 'months' }
function showYearView() { currentView.value = 'years' }

function toggle() {
  if (props.disabled) return
  open.value = !open.value
  if (open.value) {
    if (props.mode === 'date' && selectedDate.value) {
      viewYear.value = selectedDate.value.getFullYear()
      viewMonth.value = selectedDate.value.getMonth()
      currentView.value = 'days'
    } else if (props.mode === 'month') {
      if (selectedMonth.value) viewYear.value = selectedMonth.value.year
      currentView.value = 'months'
    } else if (props.mode === 'year') {
      if (selectedYear.value) viewYear.value = selectedYear.value
      currentView.value = 'years'
    } else {
      currentView.value = 'days'
    }
  }
}

function onClickOutside(e: MouseEvent) {
  if (open.value && wrapperRef.value && !wrapperRef.value.contains(e.target as Node)) {
    open.value = false
  }
}

function onEscape(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) open.value = false
}

onMounted(() => {
  document.addEventListener('mousedown', onClickOutside)
  document.addEventListener('keydown', onEscape)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onClickOutside)
  document.removeEventListener('keydown', onEscape)
})

function dayClasses(cell: DayCell) {
  return [
    'bj-datepicker__day',
    cell.outside && 'bj-datepicker__day--outside',
    cell.today && 'bj-datepicker__day--today',
    cell.selected && 'bj-datepicker__day--selected',
  ]
}
</script>

<template>
  <div ref="wrapperRef" :class="wrapperClasses">
    <label v-if="label" class="bj-label">{{ label }}</label>
    <span v-if="hint" class="bj-hint">{{ hint }}</span>
    <div class="bj-datepicker__field">
      <input
        class="bj-datepicker__input"
        type="text"
        :value="modelValue"
        :placeholder="defaultPlaceholder"
        :disabled="disabled"
        readonly
        @click="toggle"
      />
      <button
        type="button"
        class="bj-datepicker__trigger"
        :disabled="disabled"
        aria-label="Ouvrir le calendrier"
        @click="toggle"
      >
        <i class="ri-calendar-line" aria-hidden="true" />
      </button>
    </div>
    <div
      v-if="open"
      class="bj-datepicker__calendar"
      data-bj-expanded
      role="dialog"
      aria-label="Calendrier"
      @mousedown.stop
    >
      <!-- Days view -->
      <template v-if="currentView === 'days'">
        <div class="bj-datepicker__nav">
          <button type="button" class="bj-datepicker__nav-btn" aria-label="Mois précédent" @click="prevMonth">
            <i class="ri-arrow-left-s-line" aria-hidden="true" />
          </button>
          <button type="button" class="bj-datepicker__nav-title" @click="showMonthView">
            {{ MONTHS[viewMonth] }} {{ viewYear }}
          </button>
          <button type="button" class="bj-datepicker__nav-btn" aria-label="Mois suivant" @click="nextMonth">
            <i class="ri-arrow-right-s-line" aria-hidden="true" />
          </button>
        </div>
        <div class="bj-datepicker__weekdays">
          <span v-for="d in DAYS_SHORT" :key="d" class="bj-datepicker__weekday">{{ d }}</span>
        </div>
        <div class="bj-datepicker__grid" role="grid">
          <button
            v-for="(cell, i) in days"
            :key="i"
            type="button"
            :class="dayClasses(cell)"
            :disabled="cell.disabled"
            tabindex="-1"
            @click="selectDay(cell)"
          >
            {{ cell.day }}
          </button>
        </div>
      </template>

      <!-- Months view -->
      <template v-if="currentView === 'months'">
        <div class="bj-datepicker__nav">
          <button type="button" class="bj-datepicker__nav-btn" aria-label="Année précédente" @click="prevYear">
            <i class="ri-arrow-left-s-line" aria-hidden="true" />
          </button>
          <button type="button" class="bj-datepicker__nav-title" @click="showYearView">
            {{ viewYear }}
          </button>
          <button type="button" class="bj-datepicker__nav-btn" aria-label="Année suivante" @click="nextYear">
            <i class="ri-arrow-right-s-line" aria-hidden="true" />
          </button>
        </div>
        <div class="bj-datepicker__months-grid">
          <button
            v-for="cell in monthCells"
            :key="cell.index"
            type="button"
            :class="[
              'bj-datepicker__month-cell',
              cell.today && 'bj-datepicker__month-cell--today',
              cell.selected && 'bj-datepicker__month-cell--selected',
            ]"
            @click="selectMonth(cell.index)"
          >
            {{ cell.label }}
          </button>
        </div>
      </template>

      <!-- Years view -->
      <template v-if="currentView === 'years'">
        <div class="bj-datepicker__nav">
          <button type="button" class="bj-datepicker__nav-btn" aria-label="Décennie précédente" @click="prevDecade">
            <i class="ri-arrow-left-s-line" aria-hidden="true" />
          </button>
          <span class="bj-datepicker__nav-title" style="cursor: default;">
            {{ viewDecade }}–{{ viewDecade + 9 }}
          </span>
          <button type="button" class="bj-datepicker__nav-btn" aria-label="Décennie suivante" @click="nextDecade">
            <i class="ri-arrow-right-s-line" aria-hidden="true" />
          </button>
        </div>
        <div class="bj-datepicker__years-grid">
          <button
            v-for="cell in yearCells"
            :key="cell.year"
            type="button"
            :class="[
              'bj-datepicker__year-cell',
              cell.outside && 'bj-datepicker__year-cell--outside',
              cell.today && 'bj-datepicker__year-cell--today',
              cell.selected && 'bj-datepicker__year-cell--selected',
            ]"
            @click="selectYear(cell.year)"
          >
            {{ cell.year }}
          </button>
        </div>
      </template>
    </div>
  </div>
</template>
