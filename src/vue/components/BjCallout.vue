<script lang="ts">
export interface BjCalloutProps {
  color?: 'default' | 'green' | 'yellow' | 'red'
  icon?: string
  title?: string
  role?: 'alert' | 'status' | 'note'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjCalloutProps>(), {
  color: 'default',
})

const classes = computed(() => [
  'bj-callout',
  props.color !== 'default' && `bj-callout--${props.color}`,
])

const effectiveRole = computed(() => {
  if (props.role === 'note') return undefined
  return props.role || undefined
})
</script>

<template>
  <div :class="classes" :role="effectiveRole" v-bind="$attrs">
    <i v-if="icon" class="bj-callout__icon" :class="icon" aria-hidden="true" />
    <p v-if="title" class="bj-callout__title">{{ title }}</p>
    <div class="bj-callout__text">
      <slot />
    </div>
    <div v-if="$slots.action" class="bj-callout__btn">
      <slot name="action" />
    </div>
  </div>
</template>
