<script lang="ts">
export interface BjModalProps {
  modelValue?: boolean
  size?: 'default' | 'sm' | 'lg' | 'full'
  title?: string
  id?: string
  closeLabel?: string
}
</script>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { BjSvgIcon } from '../icons'
import { useFocusTrap } from '../composables/useFocusTrap'

let modalUid = 0

const props = withDefaults(defineProps<BjModalProps>(), {
  modelValue: false,
  size: 'default',
  closeLabel: 'Fermer',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const modalRef = ref<HTMLElement>()
let previousFocus: HTMLElement | null = null

useFocusTrap(modalRef, () => props.modelValue)

const classes = computed(() => [
  'bj-modal',
  props.size !== 'default' && `bj-modal--${props.size}`,
])

const modalId = computed(() => props.id || `bj-modal-${++modalUid}`)
const titleId = computed(() => `${modalId.value}-title`)

function open() {
  previousFocus = document.activeElement as HTMLElement
  emit('update:modelValue', true)
  document.body.classList.add('bj-modal-open')
}

function close() {
  emit('update:modelValue', false)
  document.body.classList.remove('bj-modal-open')
  nextTick(() => previousFocus?.focus())
}

function onOverlayClick() {
  close()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.modelValue) close()
}

watch(() => props.modelValue, (val) => {
  if (val) document.body.classList.add('bj-modal-open')
  else document.body.classList.remove('bj-modal-open')
})

onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.classList.remove('bj-modal-open')
})

defineExpose({ open, close })
</script>

<template>
  <div
    v-if="modelValue"
    ref="modalRef"
    :id="modalId"
    :class="classes"
    data-bj-expanded
    role="dialog"
    aria-modal="true"
    :aria-labelledby="title ? titleId : undefined"
    style="display: flex"
  >
    <div class="bj-modal__overlay" @click="onOverlayClick" />
    <div class="bj-modal__dialog">
      <header v-if="title || $slots.header" class="bj-modal__header">
        <slot name="header">
          <h2 :id="titleId" class="bj-modal__title">{{ title }}</h2>
        </slot>
        <button type="button" class="bj-modal__close" :aria-label="closeLabel" @click="close">
          <BjSvgIcon name="closeLine" />
        </button>
      </header>
      <div class="bj-modal__body">
        <slot />
      </div>
      <footer v-if="$slots.footer" class="bj-modal__footer">
        <slot name="footer" :close="close" />
      </footer>
    </div>
  </div>
</template>
