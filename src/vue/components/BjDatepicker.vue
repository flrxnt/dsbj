<script setup lang="ts">
import { computed, ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

export interface BjDatepickerProps {
  modelValue?: string
  label?: string
  hint?: string
  placeholder?: string
  min?: string
  max?: string
  disabled?: boolean
  size?: 'sm' | 'md'
}

const DAYS = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim']
const MONTHS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
]

const props = withDefaults(defineProps<BjDatepickerProps>(), {
  modelValue: '',
  placeholder: 'JJ/MM/AAAA',
  size: 'md',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const open = ref(false)
const wrapperRef = ref<HTMLElement>()
const viewYear = ref(new Date().getFullYear())
const viewMonth = ref(new Date().getMonth())

const wrapperClasses = computed(() => [
  'bj-datepicker',
  props.size === 'sm' && 'bj-datepicker--sm',
])

function pad(n: number) { return n < 10 ? `0${n}` : `${n}` }
function formatDate(d: Date) { return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}` }
function parseDate(s: string): Date | null {
  const m = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
  if (!m) return null
  const d = new Date(+m[3], +m[2] - 1, +m[1])
  return isNaN(d.getTime()) ? null : d
}
function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}
function daysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate() }

const minDate = computed(() => props.min ? parseDate(props.min) : null)
const maxDate = computed(() => props.max ? parseDate(props.max) : null)
const selectedDate = computed(() => props.modelValue ? parseDate(props.modelValue) : null)

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

function prevMonth() {
  if (viewMonth.value === 0) { viewMonth.value = 11; viewYear.value-- }
  else viewMonth.value--
}
function nextMonth() {
  if (viewMonth.value === 11) { viewMonth.value = 0; viewYear.value++ }
  else viewMonth.value++
}

function selectDay(cell: DayCell) {
  if (cell.disabled) return
  emit('update:modelValue', formatDate(cell.date))
  open.value = false
}

function toggle() {
  if (props.disabled) return
  open.value = !open.value
  if (open.value && selectedDate.value) {
    viewYear.value = selectedDate.value.getFullYear()
    viewMonth.value = selectedDate.value.getMonth()
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
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onEscape)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
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
        :placeholder="placeholder"
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
    >
      <div class="bj-datepicker__nav">
        <button type="button" class="bj-datepicker__nav-btn" aria-label="Mois précédent" @click="prevMonth">
          <i class="ri-arrow-left-s-line" aria-hidden="true" />
        </button>
        <span class="bj-datepicker__month-year">{{ MONTHS[viewMonth] }} {{ viewYear }}</span>
        <button type="button" class="bj-datepicker__nav-btn" aria-label="Mois suivant" @click="nextMonth">
          <i class="ri-arrow-right-s-line" aria-hidden="true" />
        </button>
      </div>
      <div class="bj-datepicker__weekdays">
        <span v-for="d in DAYS" :key="d" class="bj-datepicker__weekday">{{ d }}</span>
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
    </div>
  </div>
</template>
