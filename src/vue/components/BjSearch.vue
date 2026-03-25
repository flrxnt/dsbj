<script lang="ts">
export interface BjSearchProps {
  modelValue?: string
  placeholder?: string
  size?: 'md' | 'lg'
  buttonLabel?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

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
    <input
      class="bj-search__input"
      type="search"
      :value="modelValue"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="onInput"
    />
    <button type="submit" class="bj-search__btn">
      <slot>
        <i class="ri-search-line" aria-hidden="true" />
        <span>{{ buttonLabel }}</span>
      </slot>
    </button>
  </form>
</template>
