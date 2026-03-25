<script lang="ts">
export interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
}

export interface BjComboboxProps {
  modelValue?: string
  label?: string
  hint?: string
  options?: ComboboxOption[]
  error?: boolean
  message?: string
  disabled?: boolean
  placeholder?: string
  noResults?: string
}
</script>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<BjComboboxProps>(), {
  modelValue: '',
  options: () => [],
  placeholder: '',
  noResults: 'Aucun résultat',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const uid = `bj-combobox-${Math.random().toString(36).slice(2, 9)}`
const inputId = `${uid}-input`
const listboxId = `${uid}-listbox`

const query = ref('')
const isOpen = ref(false)
const activeIndex = ref(-1)
const wrapperRef = ref<HTMLElement>()
const inputRef = ref<HTMLInputElement>()

const selectedLabel = computed(() => {
  const opt = props.options.find(o => o.value === props.modelValue)
  return opt?.label ?? ''
})

watch(() => props.modelValue, () => {
  query.value = selectedLabel.value
}, { immediate: true })

const filtered = computed(() => {
  const q = query.value.toLowerCase().trim()
  if (!q) return props.options
  return props.options.filter(o => o.label.toLowerCase().includes(q))
})

function open() {
  if (props.disabled) return
  isOpen.value = true
  activeIndex.value = -1
}

function close() {
  isOpen.value = false
  activeIndex.value = -1
}

function select(opt: ComboboxOption) {
  if (opt.disabled) return
  emit('update:modelValue', opt.value)
  query.value = opt.label
  close()
}

function onInput(e: Event) {
  query.value = (e.target as HTMLInputElement).value
  if (!isOpen.value) open()
  activeIndex.value = -1
}

function onFocus() {
  if (!isOpen.value) open()
}

function onKeydown(e: KeyboardEvent) {
  const len = filtered.value.length
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      if (!isOpen.value) { open(); return }
      activeIndex.value = activeIndex.value < len - 1 ? activeIndex.value + 1 : 0
      scrollToActive()
      break
    case 'ArrowUp':
      e.preventDefault()
      if (!isOpen.value) { open(); return }
      activeIndex.value = activeIndex.value > 0 ? activeIndex.value - 1 : len - 1
      scrollToActive()
      break
    case 'Enter':
      e.preventDefault()
      if (isOpen.value && activeIndex.value >= 0 && activeIndex.value < len) {
        select(filtered.value[activeIndex.value])
      }
      break
    case 'Escape':
      e.preventDefault()
      close()
      query.value = selectedLabel.value
      break
    case 'Tab':
      close()
      break
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
    close()
    query.value = selectedLabel.value
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))

const activeDescendant = computed(() =>
  activeIndex.value >= 0 ? `${uid}-opt-${activeIndex.value}` : undefined,
)
</script>

<template>
  <div
    ref="wrapperRef"
    class="bj-combobox"
    :class="[error && 'bj-combobox--error', isOpen && 'bj-combobox--open']"
  >
    <label v-if="label" class="bj-label" :for="inputId">{{ label }}</label>
    <span v-if="hint" class="bj-hint">{{ hint }}</span>

    <div class="bj-combobox__input-wrap">
      <input
        :id="inputId"
        ref="inputRef"
        class="bj-combobox__input"
        type="text"
        role="combobox"
        autocomplete="off"
        :value="query"
        :placeholder="placeholder"
        :disabled="disabled"
        :aria-expanded="isOpen"
        aria-autocomplete="list"
        aria-haspopup="listbox"
        :aria-controls="listboxId"
        :aria-activedescendant="activeDescendant"
        :aria-invalid="error || undefined"
        v-bind="$attrs"
        @input="onInput"
        @focus="onFocus"
        @keydown="onKeydown"
      />
      <i class="ri-arrow-down-s-line bj-combobox__icon" aria-hidden="true" />
    </div>

    <ul
      v-if="isOpen && filtered.length > 0"
      :id="listboxId"
      class="bj-combobox__listbox"
      role="listbox"
    >
      <li
        v-for="(opt, i) in filtered"
        :id="`${uid}-opt-${i}`"
        :key="opt.value"
        :data-index="i"
        class="bj-combobox__option"
        :class="i === activeIndex && 'bj-combobox__option--active'"
        role="option"
        :aria-selected="opt.value === modelValue"
        :aria-disabled="opt.disabled || undefined"
        @click="select(opt)"
        @mouseenter="activeIndex = i"
      >
        {{ opt.label }}
      </li>
    </ul>

    <div v-if="isOpen && filtered.length === 0" class="bj-combobox__listbox">
      <p class="bj-combobox__no-results">{{ noResults }}</p>
    </div>

    <p v-if="message" class="bj-message" :class="error ? 'bj-message--error' : 'bj-message--info'">
      {{ message }}
    </p>
  </div>
</template>
