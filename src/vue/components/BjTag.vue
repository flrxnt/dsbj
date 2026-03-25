<script lang="ts">
export interface BjTagProps {
  variant?: 'default' | 'action' | 'info' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
  dismissible?: boolean
  tag?: 'span' | 'a' | 'button'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<BjTagProps>(), {
  variant: 'default',
  size: 'md',
  tag: 'span',
})

const emit = defineEmits<{ dismiss: [] }>()

const classes = computed(() => [
  'bj-tag',
  props.variant !== 'default' && `bj-tag--${props.variant}`,
  props.size === 'sm' && 'bj-tag--sm',
  props.dismissible && 'bj-tag--dismiss',
])
</script>

<template>
  <component :is="tag" :class="classes" v-bind="$attrs">
    <slot />
    <button
      v-if="dismissible"
      type="button"
      class="bj-tag__close"
      aria-label="Retirer"
      @click.stop="emit('dismiss')"
    >
      <i class="ri-close-line" aria-hidden="true" />
    </button>
  </component>
</template>
