<script setup lang="ts">
import { computed } from 'vue'

export interface BjCalloutProps {
  color?: 'default' | 'green' | 'yellow' | 'red'
  icon?: string
  title?: string
}

const props = withDefaults(defineProps<BjCalloutProps>(), {
  color: 'default',
})

const classes = computed(() => [
  'bj-callout',
  props.color !== 'default' && `bj-callout--${props.color}`,
])
</script>

<template>
  <div :class="classes" v-bind="$attrs">
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
