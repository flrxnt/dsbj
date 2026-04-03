<script lang="ts">
export interface BjToggleProps {
  modelValue?: boolean
  label?: string
  hint?: string
  disabled?: boolean
  border?: boolean
  labelLeft?: boolean
  id?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

let uid = 0

const props = withDefaults(defineProps<BjToggleProps>(), {
  modelValue: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const toggleId = props.id || `bj-toggle-${++uid}`
const hintId = `${toggleId}-hint`

const classes = computed(() => [
  'bj-toggle',
  props.border && 'bj-toggle--border',
  props.labelLeft && 'bj-toggle--label-left',
])

const describedBy = computed(() => {
  if (props.hint) return hintId
  return undefined
})

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
      :aria-checked="modelValue"
      :aria-describedby="describedBy"
      v-bind="$attrs"
      @change="onChange"
    />
    <span class="bj-toggle__label">
      <slot>{{ label }}</slot>
      <span v-if="hint" :id="hintId" class="bj-toggle__hint">{{ hint }}</span>
    </span>
  </label>
</template>
