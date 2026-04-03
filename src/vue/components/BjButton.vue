<script lang="ts">
export type BjButtonType = 'button' | 'submit' | 'reset'

export interface BjButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'contrast'
  size?: 'sm' | 'md' | 'lg'
  icon?: boolean
  full?: boolean
  disabled?: boolean
  loading?: boolean
  tag?: 'button' | 'a'
  type?: BjButtonType
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjButtonProps>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button',
  type: 'button',
})

const isDisabled = computed(() => props.disabled || props.loading)

const classes = computed(() => [
  'bj-btn',
  props.variant !== 'primary' && `bj-btn--${props.variant}`,
  props.size !== 'md' && `bj-btn--${props.size}`,
  props.icon && 'bj-btn--icon',
  props.full && 'bj-btn--full',
  props.loading && 'bj-btn--loading',
  isDisabled.value && props.tag !== 'button' && 'bj-btn--disabled',
])
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    :type="tag === 'button' ? type : undefined"
    :disabled="tag === 'button' ? isDisabled : undefined"
    :aria-disabled="tag !== 'button' && isDisabled ? true : undefined"
    :aria-busy="loading || undefined"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>
