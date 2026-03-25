<script lang="ts">
export interface BjTooltipProps {
  text: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjTooltipProps>(), {
  position: 'top',
})

const classes = computed(() => [
  'bj-tooltip',
  props.position !== 'top' && `bj-tooltip--${props.position}`,
])
</script>

<template>
  <span :class="classes" v-bind="$attrs">
    <slot />
    <span class="bj-tooltip__content" role="tooltip">{{ text }}</span>
  </span>
</template>
