<script lang="ts">
export interface BjToggleProps {
  modelValue?: boolean
  label?: string
  hint?: string
  disabled?: boolean
  border?: boolean
  labelLeft?: boolean
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjToggleProps>(), {
  modelValue: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const toggleId = computed(() => `bj-toggle-${Math.random().toString(36).slice(2, 9)}`)

const classes = computed(() => [
  'bj-toggle',
  props.border && 'bj-toggle--border',
  props.labelLeft && 'bj-toggle--label-left',
])

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).checked)
}
</script>

<template>
  <label :class="classes" :for="toggleId">
    <input
      :id="toggleId"
      type="checkbox"
      class="bj-toggle__input"
      role="switch"
      :checked="modelValue"
      :disabled="disabled"
      :aria-checked="String(modelValue)"
      v-bind="$attrs"
      @change="onChange"
    />
    <span class="bj-toggle__label">
      <slot>{{ label }}</slot>
      <span v-if="hint" class="bj-toggle__hint">{{ hint }}</span>
    </span>
  </label>
</template>
