<script lang="ts">
export interface BjSearchProps {
  modelValue?: string
  placeholder?: string
  size?: 'md' | 'lg'
  buttonLabel?: string
  label?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { BjSvgIcon } from '../icons'

let uid = 0

const props = withDefaults(defineProps<BjSearchProps>(), {
  modelValue: '',
  placeholder: 'Rechercher…',
  size: 'md',
  buttonLabel: 'Rechercher',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  submit: [value: string]
}>()

const inputId = `bj-search-${++uid}`

const classes = computed(() => [
  'bj-search',
  props.size === 'lg' && 'bj-search--lg',
])

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

function onSubmit() {
  emit('submit', props.modelValue)
}
</script>

<template>
  <form :class="classes" role="search" @submit.prevent="onSubmit">
    <label v-if="label" class="bj-search__label bj-sr-only" :for="inputId">{{ label }}</label>
    <input
      :id="inputId"
      class="bj-search__input"
      type="search"
      :value="modelValue"
      :placeholder="placeholder"
      :aria-label="!label ? placeholder : undefined"
      v-bind="$attrs"
      @input="onInput"
    />
    <button type="submit" class="bj-search__btn">
      <slot>
        <BjSvgIcon name="searchLine" />
        <span>{{ buttonLabel }}</span>
      </slot>
    </button>
  </form>
</template>
