<script setup lang="ts">
import { computed } from 'vue'

export interface BjCheckboxProps {
  modelValue?: boolean
  label?: string
  hint?: string
  disabled?: boolean
  name?: string
  value?: string
}

const props = withDefaults(defineProps<BjCheckboxProps>(), {
  modelValue: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const checkboxId = computed(() => `bj-cb-${Math.random().toString(36).slice(2, 9)}`)

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).checked)
}
</script>

<template>
  <label class="bj-checkbox" :for="checkboxId">
    <input
      :id="checkboxId"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      :name="name"
      :value="value"
      v-bind="$attrs"
      @change="onChange"
    />
    <span class="bj-checkbox__label">
      <slot>{{ label }}</slot>
      <span v-if="hint" class="bj-checkbox__hint">{{ hint }}</span>
    </span>
  </label>
</template>
