<script setup lang="ts">
import { computed, ref } from 'vue'

export interface BjNoticeProps {
  variant?: 'default' | 'info' | 'warning' | 'alert'
  closable?: boolean
  title?: string
  icon?: string
}

const props = withDefaults(defineProps<BjNoticeProps>(), {
  variant: 'default',
})

const emit = defineEmits<{ close: [] }>()

const visible = ref(true)

const classes = computed(() => [
  'bj-notice',
  props.variant !== 'default' && `bj-notice--${props.variant}`,
])

function close() {
  visible.value = false
  emit('close')
}
</script>

<template>
  <div v-if="visible" :class="classes" v-bind="$attrs">
    <i v-if="icon" class="bj-notice__icon" :class="icon" aria-hidden="true" />
    <div class="bj-notice__body">
      <p v-if="title" class="bj-notice__title">{{ title }}</p>
      <slot />
    </div>
    <button
      v-if="closable"
      type="button"
      class="bj-notice__close"
      aria-label="Fermer"
      @click="close"
    >
      <i class="ri-close-line" aria-hidden="true" />
    </button>
  </div>
</template>
