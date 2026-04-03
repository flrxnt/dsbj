<script lang="ts">
export interface BjTagProps {
  variant?: 'default' | 'action' | 'info' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
  dismissible?: boolean
  tag?: 'span' | 'a' | 'button'
  dismissLabel?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { BjSvgIcon } from '../icons'

const props = withDefaults(defineProps<BjTagProps>(), {
  variant: 'default',
  size: 'md',
  tag: 'span',
  dismissLabel: 'Retirer',
})

const emit = defineEmits<{ dismiss: [] }>()

const effectiveTag = computed(() => {
  if (props.dismissible && props.tag === 'button') return 'span'
  return props.tag
})

const classes = computed(() => [
  'bj-tag',
  props.variant !== 'default' && `bj-tag--${props.variant}`,
  props.size === 'sm' && 'bj-tag--sm',
  props.dismissible && 'bj-tag--dismiss',
])
</script>

<template>
  <component :is="effectiveTag" :class="classes" v-bind="$attrs">
    <slot />
    <button
      v-if="dismissible"
      type="button"
      class="bj-tag__close"
      :aria-label="dismissLabel"
      @click.stop="emit('dismiss')"
    >
      <BjSvgIcon name="closeLine" />
    </button>
  </component>
</template>
