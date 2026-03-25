<script setup lang="ts">
import { computed } from 'vue'

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
}

const props = withDefaults(defineProps<BjSelectProps>(), {
  modelValue: '',
  options: () => [],
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const selectId = computed(() => `bj-select-${Math.random().toString(36).slice(2, 9)}`)

const selectClasses = computed(() => [
  'bj-select',
  props.error && 'bj-select--error',
])

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLSelectElement).value)
}
</script>

<template>
  <div class="bj-select-group">
    <label v-if="label" class="bj-label" :for="selectId">{{ label }}</label>
    <span v-if="hint" class="bj-hint">{{ hint }}</span>
    <select
      :id="selectId"
      :class="selectClasses"
      :value="modelValue"
      :disabled="disabled"
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
    <p v-if="message" class="bj-message" :class="error ? 'bj-message--error' : 'bj-message--info'">
      {{ message }}
    </p>
  </div>
</template>
