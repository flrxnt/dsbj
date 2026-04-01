<script lang="ts">
import type { ToastPosition } from '../composables/useToast'

export interface BjToastProps {
  position?: ToastPosition
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { BjSvgIcon } from '../icons'
import { useToast, type ToastType } from '../composables/useToast'

const props = withDefaults(defineProps<BjToastProps>(), {
  position: 'top-right',
})

const { toasts, add, remove } = useToast()

const toastIconNames: Record<ToastType, string> = {
  info: 'informationLine',
  success: 'checkLine',
  warning: 'alertLine',
  error: 'closeCircleLine',
}

const containerClasses = computed(() => [
  'bj-toast-container',
  props.position !== 'top-right' && `bj-toast-container--${props.position}`,
])

defineExpose({ add, remove, toasts })
</script>

<template>
  <div :class="containerClasses" aria-live="polite" role="status">
    <div
      v-for="t in toasts"
      :key="t.id"
      class="bj-toast"
      :class="[
        `bj-toast--${t.type}`,
        t.removing && 'bj-toast--removing',
      ]"
      role="alert"
    >
      <span class="bj-toast__icon" aria-hidden="true">
        <BjSvgIcon :name="toastIconNames[t.type]" />
      </span>
      <div class="bj-toast__body">
        <p v-if="t.title" class="bj-toast__title">{{ t.title }}</p>
        <p class="bj-toast__text">{{ t.text }}</p>
      </div>
      <button type="button" class="bj-toast__close" aria-label="Fermer" @click="remove(t.id)">
        <BjSvgIcon name="closeLine" />
      </button>
      <div
        v-if="t.duration > 0"
        class="bj-toast__progress"
        :style="{
          width: '100%',
          transitionDuration: `${t.duration}ms`,
          animation: `bjProgressShrink ${t.duration}ms linear forwards`,
        }"
      />
    </div>
  </div>
</template>
