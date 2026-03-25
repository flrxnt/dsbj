<script setup lang="ts">
import { computed } from 'vue'

export interface BjHighlightProps {
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<BjHighlightProps>(), {
  size: 'md',
})

const classes = computed(() => [
  'bj-highlight',
  props.size !== 'md' && `bj-highlight--${props.size}`,
])
</script>

<template>
  <div :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>
