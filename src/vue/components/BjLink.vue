<script lang="ts">
export interface BjLinkProps {
  size?: 'sm' | 'md' | 'lg'
  iconPosition?: 'left' | 'right' | 'none'
  reset?: boolean
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjLinkProps>(), {
  size: 'md',
  iconPosition: 'none',
})

const classes = computed(() => [
  'bj-link',
  props.size !== 'md' && `bj-link--${props.size}`,
  props.iconPosition === 'left' && 'bj-link--icon-left',
  props.iconPosition === 'right' && 'bj-link--icon-right',
  props.reset && 'bj-link--reset',
])
</script>

<template>
  <a :class="classes" v-bind="$attrs">
    <slot />
  </a>
</template>
