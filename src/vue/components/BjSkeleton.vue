<script setup lang="ts">
import { computed } from 'vue'

export interface BjSkeletonProps {
  variant?: 'text' | 'heading' | 'circle' | 'rect'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<BjSkeletonProps>(), {
  variant: 'text',
  size: 'md',
})

const classes = computed(() => [
  'bj-skeleton',
  `bj-skeleton--${props.variant}`,
  props.size !== 'md' && `bj-skeleton--${props.size}`,
])
</script>

<template>
  <div :class="classes" aria-hidden="true" v-bind="$attrs" />
</template>
