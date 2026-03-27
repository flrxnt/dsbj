<script lang="ts">
export interface BjDropdownProps {
  align?: 'left' | 'right'
  direction?: 'down' | 'up'
  size?: 'sm' | 'md' | 'lg'
}
</script>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<BjDropdownProps>(), {
  align: 'left',
  direction: 'down',
  size: 'md',
})

const emit = defineEmits<{
  open: []
  close: []
  select: [value: string]
}>()

const isOpen = ref(false)
const wrapperRef = ref<HTMLElement>()

const classes = computed(() => [
  'bj-dropdown',
  props.align === 'right' && 'bj-dropdown--right',
  props.direction === 'up' && 'bj-dropdown--up',
  props.size === 'sm' && 'bj-dropdown--sm',
  props.size === 'lg' && 'bj-dropdown--lg',
])

function open() {
  isOpen.value = true
  emit('open')
}

function close() {
  isOpen.value = false
  emit('close')
}

function toggle() {
  if (isOpen.value) close()
  else open()
}

function onClickOutside(e: MouseEvent) {
  if (isOpen.value && wrapperRef.value && !wrapperRef.value.contains(e.target as Node)) {
    close()
  }
}

function onEscape(e: KeyboardEvent) {
  if (e.key === 'Escape' && isOpen.value) close()
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onEscape)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onEscape)
})

defineExpose({ open, close, toggle, isOpen })
</script>

<template>
  <div ref="wrapperRef" :class="classes" v-bind="$attrs">
    <div
      class="bj-dropdown__trigger"
      aria-haspopup="true"
      :aria-expanded="String(isOpen)"
      @click.stop="toggle"
    >
      <slot name="trigger" />
    </div>
    <ul
      v-if="isOpen"
      class="bj-dropdown__menu"
      data-bj-expanded
      role="menu"
      style="display: block"
    >
      <slot />
    </ul>
  </div>
</template>
