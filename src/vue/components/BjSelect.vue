<script lang="ts">
export interface BjSelectOption {
  value: string
  label: string
  disabled?: boolean
}
export interface BjSelectProps {
  modelValue?: string
  label?: string
  hint?: string
  options?: BjSelectOption[]
  error?: boolean
  message?: string
  disabled?: boolean
  placeholder?: string
  searchable?: boolean
  searchPlaceholder?: string
  noResults?: string
  id?: string
  required?: boolean
}
</script>

<script setup lang="ts">
import { computed, ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { BjSvgIcon } from '../icons'

let uid = 0

const props = withDefaults(defineProps<BjSelectProps>(), {
  modelValue: '',
  options: () => [],
  searchPlaceholder: 'Rechercher…',
  noResults: 'Aucun résultat',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const selectId = props.id || `bj-select-${++uid}`
const hintId = `${selectId}-hint`
const messageId = `${selectId}-msg`

const selectClasses = computed(() => [
  'bj-select',
  props.error && 'bj-select--error',
])

const describedBy = computed(() => {
  const ids: string[] = []
  if (props.hint) ids.push(hintId)
  if (props.message) ids.push(messageId)
  return ids.length ? ids.join(' ') : undefined
})

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLSelectElement).value)
}

// ─── Searchable custom select ────────────────────────────
const isOpen = ref(false)
const search = ref('')
const activeIndex = ref(-1)
const wrapperRef = ref<HTMLElement>()
const searchRef = ref<HTMLInputElement>()
const listboxId = `${selectId}-listbox`

const selectedLabel = computed(() => {
  const opt = props.options.find(o => o.value === props.modelValue)
  return opt?.label ?? ''
})

const filtered = computed(() => {
  if (!props.searchable) return props.options
  const q = search.value.toLowerCase().trim()
  if (!q) return props.options
  return props.options.filter(o => o.label.toLowerCase().includes(q))
})

function openCustom() {
  if (props.disabled) return
  isOpen.value = true
  activeIndex.value = -1
  search.value = ''
  nextTick(() => searchRef.value?.focus())
}

function closeCustom() {
  isOpen.value = false
  activeIndex.value = -1
}

function toggleCustom() {
  if (isOpen.value) closeCustom()
  else openCustom()
}

function selectOption(opt: BjSelectOption) {
  if (opt.disabled) return
  emit('update:modelValue', opt.value)
  closeCustom()
}

function onSearchKeydown(e: KeyboardEvent) {
  const len = filtered.value.length
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      activeIndex.value = activeIndex.value < len - 1 ? activeIndex.value + 1 : 0
      scrollToActive()
      break
    case 'ArrowUp':
      e.preventDefault()
      activeIndex.value = activeIndex.value > 0 ? activeIndex.value - 1 : len - 1
      scrollToActive()
      break
    case 'Home':
      e.preventDefault()
      activeIndex.value = 0
      scrollToActive()
      break
    case 'End':
      e.preventDefault()
      activeIndex.value = len - 1
      scrollToActive()
      break
    case 'Enter':
      e.preventDefault()
      if (activeIndex.value >= 0 && activeIndex.value < len) {
        selectOption(filtered.value[activeIndex.value])
      }
      break
    case 'Escape':
      e.preventDefault()
      closeCustom()
      break
  }
}

function onTriggerKeydown(e: KeyboardEvent) {
  if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
    e.preventDefault()
    openCustom()
  }
}

function scrollToActive() {
  nextTick(() => {
    const el = wrapperRef.value?.querySelector(`[data-index="${activeIndex.value}"]`)
    el?.scrollIntoView({ block: 'nearest' })
  })
}

function onClickOutside(e: MouseEvent) {
  if (isOpen.value && wrapperRef.value && !wrapperRef.value.contains(e.target as Node)) {
    closeCustom()
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))

const activeDescendant = computed(() =>
  activeIndex.value >= 0 ? `${selectId}-opt-${activeIndex.value}` : undefined,
)
</script>

<template>
  <!-- Native select (default) -->
  <div v-if="!searchable" class="bj-select-group">
    <label v-if="label" class="bj-label" :for="selectId">{{ label }}</label>
    <span v-if="hint" :id="hintId" class="bj-hint">{{ hint }}</span>
    <select
      :id="selectId"
      :class="selectClasses"
      :value="modelValue"
      :disabled="disabled"
      :required="required || undefined"
      :aria-required="required || undefined"
      :aria-invalid="error || undefined"
      :aria-describedby="describedBy"
      v-bind="$attrs"
      @change="onChange"
    >
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
        :disabled="opt.disabled"
      >
        {{ opt.label }}
      </option>
      <slot />
    </select>
    <p
      v-if="message"
      :id="messageId"
      class="bj-message"
      :class="error ? 'bj-message--error' : 'bj-message--info'"
      :role="error ? 'alert' : 'status'"
    >
      {{ message }}
    </p>
  </div>

  <!-- Custom searchable select -->
  <div
    v-else
    ref="wrapperRef"
    class="bj-select-group"
    :class="error && 'bj-select--error'"
  >
    <label v-if="label" class="bj-label" :for="`${selectId}-trigger`">{{ label }}</label>
    <span v-if="hint" :id="hintId" class="bj-hint">{{ hint }}</span>

    <div class="bj-select-custom" :class="isOpen && 'bj-select-custom--open'">
      <button
        :id="`${selectId}-trigger`"
        type="button"
        class="bj-select-custom__trigger"
        :class="!modelValue && 'bj-select-custom__trigger--placeholder'"
        :disabled="disabled"
        role="combobox"
        :aria-expanded="isOpen"
        aria-haspopup="listbox"
        :aria-controls="isOpen && filtered.length > 0 ? listboxId : undefined"
        :aria-activedescendant="activeDescendant"
        :aria-invalid="error || undefined"
        :aria-describedby="describedBy"
        @click.stop="toggleCustom"
        @keydown="onTriggerKeydown"
      >
        <span>{{ selectedLabel || placeholder || '&nbsp;' }}</span>
        <BjSvgIcon name="arrowDownSLine" />
      </button>

      <div v-if="isOpen" class="bj-select-custom__panel">
        <input
          ref="searchRef"
          class="bj-select-custom__search"
          type="text"
          :placeholder="searchPlaceholder"
          :value="search"
          :aria-label="searchPlaceholder"
          @input="search = ($event.target as HTMLInputElement).value; activeIndex = -1"
          @keydown="onSearchKeydown"
        />
        <ul
          v-if="filtered.length > 0"
          :id="listboxId"
          class="bj-select-custom__listbox"
          role="listbox"
        >
          <li
            v-for="(opt, i) in filtered"
            :id="`${selectId}-opt-${i}`"
            :key="opt.value"
            :data-index="i"
            class="bj-select-custom__option"
            :class="i === activeIndex && 'bj-select-custom__option--active'"
            role="option"
            :aria-selected="opt.value === modelValue"
            :aria-disabled="opt.disabled || undefined"
            @click="selectOption(opt)"
            @mouseenter="activeIndex = i"
          >
            {{ opt.label }}
          </li>
        </ul>
        <p v-else class="bj-select-custom__no-results">{{ noResults }}</p>
      </div>
    </div>

    <p
      v-if="message"
      :id="messageId"
      class="bj-message"
      :class="error ? 'bj-message--error' : 'bj-message--info'"
      :role="error ? 'alert' : 'status'"
    >
      {{ message }}
    </p>
  </div>
</template>
