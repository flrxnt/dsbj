<script setup lang="ts">
import { computed } from 'vue'

export interface BjTileProps {
  horizontal?: boolean
  tag?: 'a' | 'div'
}

const props = withDefaults(defineProps<BjTileProps>(), {
  tag: 'a',
})

const classes = computed(() => [
  'bj-tile',
  props.horizontal && 'bj-tile--horizontal',
])
</script>

<template>
  <component :is="tag" :class="classes" v-bind="$attrs">
    <slot />
  </component>
</template>
