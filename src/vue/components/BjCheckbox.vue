<script lang="ts">
export interface BjCheckboxProps {
  modelValue?: boolean
  label?: string
  hint?: string
  disabled?: boolean
  name?: string
  value?: string
  id?: string
  indeterminate?: boolean
  invalid?: boolean
  message?: string
}
</script>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'

let uid = 0

const props = withDefaults(defineProps<BjCheckboxProps>(), {
  modelValue: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const inputRef = ref<HTMLInputElement>()
const checkboxId = props.id || `bj-cb-${++uid}`
const hintId = `${checkboxId}-hint`
const messageId = `${checkboxId}-msg`

const describedBy = computed(() => {
  const ids: string[] = []
  if (props.hint) ids.push(hintId)
  if (props.message) ids.push(messageId)
  return ids.length ? ids.join(' ') : undefined
})

watchEffect(() => {
  if (inputRef.value) {
    inputRef.value.indeterminate = !!props.indeterminate
  }
})

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).checked)
}
</script>

<template>
  <div class="bj-checkbox-group">
    <label class="bj-checkbox" :for="checkboxId">
      <input
        :id="checkboxId"
        ref="inputRef"
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        :name="name"
        :value="value"
        :aria-describedby="describedBy"
        :aria-invalid="invalid || undefined"
        v-bind="$attrs"
        @change="onChange"
      />
      <span class="bj-checkbox__label">
        <slot>{{ label }}</slot>
        <span v-if="hint" :id="hintId" class="bj-checkbox__hint">{{ hint }}</span>
      </span>
    </label>
    <p
      v-if="message"
      :id="messageId"
      class="bj-message"
      :class="invalid ? 'bj-message--error' : 'bj-message--info'"
      :role="invalid ? 'alert' : 'status'"
    >
      {{ message }}
    </p>
  </div>
</template>
