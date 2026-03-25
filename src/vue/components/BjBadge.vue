<script lang="ts">
export interface BjBadgeProps {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error' | 'new'
  size?: 'sm' | 'md'
  noIcon?: boolean
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjBadgeProps>(), {
  variant: 'default',
  size: 'md',
})

const classes = computed(() => [
  'bj-badge',
  props.variant !== 'default' && `bj-badge--${props.variant}`,
  props.size === 'sm' && 'bj-badge--sm',
  props.noIcon && 'bj-badge--no-icon',
])
</script>

<template>
  <span :class="classes" v-bind="$attrs">
    <slot />
  </span>
</template>
