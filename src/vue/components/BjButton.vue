<script lang="ts">
export interface BjButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'contrast'
  size?: 'sm' | 'md' | 'lg'
  icon?: boolean
  full?: boolean
  disabled?: boolean
  tag?: 'button' | 'a'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjButtonProps>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button',
})

const classes = computed(() => [
  'bj-btn',
  props.variant !== 'primary' && `bj-btn--${props.variant}`,
  props.size !== 'md' && `bj-btn--${props.size}`,
  props.icon && 'bj-btn--icon',
  props.full && 'bj-btn--full',
  props.disabled && props.tag !== 'button' && 'bj-btn--disabled',
])
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    :disabled="tag === 'button' ? disabled : undefined"
    :aria-disabled="tag !== 'button' && disabled ? 'true' : undefined"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>
