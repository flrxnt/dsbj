<script setup lang="ts">
import { computed, ref } from 'vue'

export interface BjAlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
  closable?: boolean
  title?: string
}

const props = withDefaults(defineProps<BjAlertProps>(), {
  variant: 'info',
  size: 'md',
})

const emit = defineEmits<{ close: [] }>()

const visible = ref(true)

const classes = computed(() => [
  'bj-alert',
  props.variant !== 'info' && `bj-alert--${props.variant}`,
  props.size === 'sm' && 'bj-alert--sm',
])

const iconMap: Record<string, string> = {
  info: 'ri-information-line',
  success: 'ri-checkbox-circle-line',
  warning: 'ri-alert-line',
  error: 'ri-error-warning-line',
}

function close() {
  visible.value = false
  emit('close')
}
</script>

<template>
  <div v-if="visible" :class="classes" role="alert" v-bind="$attrs">
    <i class="bj-alert__icon" :class="iconMap[variant]" aria-hidden="true" />
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
      aria-label="Fermer"
      @click="close"
    >
      <i class="ri-close-line" aria-hidden="true" />
    </button>
  </div>
</template>
