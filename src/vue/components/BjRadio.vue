<script lang="ts">
export interface BjRadioProps {
  modelValue?: string
  value: string
  label?: string
  hint?: string
  disabled?: boolean
  name?: string
  id?: string
  invalid?: boolean
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

let uid = 0

const props = defineProps<BjRadioProps>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const radioId = props.id || `bj-radio-${++uid}`
const hintId = `${radioId}-hint`

const describedBy = computed(() => {
  if (props.hint) return hintId
  return undefined
})

function onChange() {
  emit('update:modelValue', props.value)
}
</script>

<template>
  <label class="bj-radio" :for="radioId">
    <input
      :id="radioId"
      type="radio"
      :checked="modelValue === value"
      :value="value"
      :disabled="disabled"
      :name="name"
      :aria-describedby="describedBy"
      :aria-invalid="invalid || undefined"
      v-bind="$attrs"
      @change="onChange"
    />
    <span class="bj-radio__label">
      <slot>{{ label }}</slot>
      <span v-if="hint" :id="hintId" class="bj-radio__hint">{{ hint }}</span>
    </span>
  </label>
</template>
