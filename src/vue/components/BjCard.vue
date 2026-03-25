<script lang="ts">
export interface BjCardProps {
  horizontal?: boolean
  flat?: boolean
  highlight?: boolean
  link?: boolean
  tag?: 'article' | 'div' | 'a'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjCardProps>(), {
  tag: 'article',
})

const classes = computed(() => [
  'bj-card',
  props.horizontal && 'bj-card--horizontal',
  props.flat && 'bj-card--flat',
  props.highlight && 'bj-card--highlight',
  props.link && 'bj-card--link',
])
</script>

<template>
  <component :is="tag" :class="classes" v-bind="$attrs">
    <slot />
  </component>
</template>
