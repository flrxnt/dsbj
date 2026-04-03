<script lang="ts">
export interface BjAlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
  closable?: boolean
  title?: string
  closeLabel?: string
  role?: 'alert' | 'status'
}
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { BjSvgIcon } from '../icons'

const props = withDefaults(defineProps<BjAlertProps>(), {
  variant: 'info',
  size: 'md',
  closeLabel: 'Fermer',
})

const emit = defineEmits<{ close: [] }>()

const visible = ref(true)

const classes = computed(() => [
  'bj-alert',
  props.variant !== 'info' && `bj-alert--${props.variant}`,
  props.size === 'sm' && 'bj-alert--sm',
])

const effectiveRole = computed(() => {
  if (props.role) return props.role
  return props.variant === 'error' || props.variant === 'warning' ? 'alert' : 'status'
})

const iconMap: Record<'info' | 'success' | 'warning' | 'error', string> = {
  info: 'informationLine',
  success: 'checkboxCircleLine',
  warning: 'alertLine',
  error: 'errorWarningLine',
}

function close() {
  visible.value = false
  emit('close')
}
</script>

<template>
  <div v-if="visible" :class="classes" :role="effectiveRole" v-bind="$attrs">
    <span class="bj-alert__icon" aria-hidden="true"><BjSvgIcon :name="iconMap[variant]" /></span>
    <div class="bj-alert__body">
      <p v-if="title" class="bj-alert__title">{{ title }}</p>
      <div class="bj-alert__text">
        <slot />
      </div>
    </div>
    <button
      v-if="closable"
      type="button"
      class="bj-alert__close"
      :aria-label="closeLabel"
      @click="close"
    >
      <BjSvgIcon name="closeLine" />
    </button>
  </div>
</template>
