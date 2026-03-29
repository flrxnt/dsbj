<script lang="ts">
export interface BjDrawerProps {
  modelValue?: boolean
  position?: 'left' | 'right'
  size?: 'default' | 'sm' | 'lg' | 'full'
  title?: string
  id?: string
}
</script>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = withDefaults(defineProps<BjDrawerProps>(), {
  modelValue: false,
  position: 'left',
  size: 'default',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const drawerRef = ref<HTMLElement>()
let previousFocus: HTMLElement | null = null

const classes = computed(() => [
  'bj-drawer',
  props.position === 'right' && 'bj-drawer--right',
  props.size !== 'default' && `bj-drawer--${props.size}`,
])

const drawerId = computed(() => props.id || `bj-drawer-${Math.random().toString(36).slice(2, 9)}`)
const titleId = computed(() => `${drawerId.value}-title`)

function open() {
  previousFocus = document.activeElement as HTMLElement
  emit('update:modelValue', true)
  document.body.classList.add('bj-drawer-open')
}

function close() {
  emit('update:modelValue', false)
  document.body.classList.remove('bj-drawer-open')
  nextTick(() => previousFocus?.focus())
}

function onOverlayClick() {
  close()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.modelValue) close()
}

watch(() => props.modelValue, (val) => {
  if (val) document.body.classList.add('bj-drawer-open')
  else document.body.classList.remove('bj-drawer-open')
})

onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.classList.remove('bj-drawer-open')
})

defineExpose({ open, close })
</script>

<template>
  <div
    v-if="modelValue"
    ref="drawerRef"
    :id="drawerId"
    :class="classes"
    data-bj-expanded
    role="dialog"
    aria-modal="true"
    :aria-labelledby="title ? titleId : undefined"
    style="display: block"
  >
    <div class="bj-drawer__overlay" @click="onOverlayClick" />
    <div class="bj-drawer__panel">
      <header v-if="title || $slots.header" class="bj-drawer__header">
        <slot name="header">
          <h2 :id="titleId" class="bj-drawer__title">{{ title }}</h2>
        </slot>
        <button type="button" class="bj-drawer__close" aria-label="Fermer" @click="close">
          <i class="ri-close-line" aria-hidden="true" />
        </button>
      </header>
      <div class="bj-drawer__body">
        <slot />
      </div>
      <footer v-if="$slots.footer" class="bj-drawer__footer">
        <slot name="footer" :close="close" />
      </footer>
    </div>
  </div>
</template>
