<script setup lang="ts">
import { computed } from 'vue'

export interface BjRadioProps {
  modelValue?: string
  value: string
  label?: string
  hint?: string
  disabled?: boolean
  name?: string
}

const props = defineProps<BjRadioProps>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const radioId = computed(() => `bj-radio-${Math.random().toString(36).slice(2, 9)}`)

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
      v-bind="$attrs"
      @change="onChange"
    />
    <span class="bj-radio__label">
      <slot>{{ label }}</slot>
      <span v-if="hint" class="bj-radio__hint">{{ hint }}</span>
    </span>
  </label>
</template>
