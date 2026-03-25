<script setup lang="ts">
import { computed } from 'vue'

export interface BjInputProps {
  modelValue?: string
  label?: string
  hint?: string
  state?: 'default' | 'valid' | 'error'
  message?: string
  size?: 'sm' | 'md'
  disabled?: boolean
  type?: string
  placeholder?: string
  textarea?: boolean
  rows?: number
  icon?: string
}

const props = withDefaults(defineProps<BjInputProps>(), {
  modelValue: '',
  state: 'default',
  size: 'md',
  type: 'text',
  rows: 4,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const groupClasses = computed(() => [
  'bj-input-group',
  props.state === 'valid' && 'bj-input-group--valid',
  props.state === 'error' && 'bj-input-group--error',
])

const inputClasses = computed(() => [
  'bj-input',
  props.size === 'sm' && 'bj-input--sm',
])

const inputId = computed(() => `bj-input-${Math.random().toString(36).slice(2, 9)}`)
const hintId = computed(() => `${inputId.value}-hint`)
const messageId = computed(() => `${inputId.value}-msg`)

const describedBy = computed(() => {
  const ids: string[] = []
  if (props.hint) ids.push(hintId.value)
  if (props.message) ids.push(messageId.value)
  return ids.length ? ids.join(' ') : undefined
})

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div :class="groupClasses">
    <label v-if="label" class="bj-label" :for="inputId">{{ label }}</label>
    <span v-if="hint" :id="hintId" class="bj-hint">{{ hint }}</span>
    <div v-if="icon" class="bj-input-wrap">
      <i :class="icon" aria-hidden="true" />
      <input
        :id="inputId"
        :class="inputClasses"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :aria-describedby="describedBy"
        :aria-invalid="state === 'error' ? 'true' : undefined"
        v-bind="$attrs"
        @input="onInput"
      />
    </div>
    <textarea
      v-else-if="textarea"
      :id="inputId"
      :class="inputClasses"
      :value="modelValue"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-describedby="describedBy"
      :aria-invalid="state === 'error' ? 'true' : undefined"
      v-bind="$attrs"
      @input="onInput"
    />
    <input
      v-else
      :id="inputId"
      :class="inputClasses"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-describedby="describedBy"
      :aria-invalid="state === 'error' ? 'true' : undefined"
      v-bind="$attrs"
      @input="onInput"
    />
    <p
      v-if="message"
      :id="messageId"
      class="bj-message"
      :class="{
        'bj-message--valid': state === 'valid',
        'bj-message--error': state === 'error',
        'bj-message--info': state === 'default',
      }"
      :role="state === 'error' ? 'alert' : 'status'"
    >
      {{ message }}
    </p>
  </div>
</template>
