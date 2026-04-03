<script lang="ts">
export interface BjDropdownProps {
  align?: 'left' | 'right'
  direction?: 'down' | 'up'
  size?: 'sm' | 'md' | 'lg'
}
</script>

<script setup lang="ts">
import { computed, ref, nextTick, onMounted, onBeforeUnmount } from 'vue'

let uid = 0

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
const triggerRef = ref<HTMLButtonElement>()
const menuId = `bj-dropdown-menu-${++uid}`

const classes = computed(() => [
  'bj-dropdown',
  props.align === 'right' && 'bj-dropdown--right',
  props.direction === 'up' && 'bj-dropdown--up',
  props.size === 'sm' && 'bj-dropdown--sm',
  props.size === 'lg' && 'bj-dropdown--lg',
])

function getMenuItems(): HTMLElement[] {
  if (!wrapperRef.value) return []
  return Array.from(wrapperRef.value.querySelectorAll<HTMLElement>('[role="menuitem"]'))
}

function open() {
  isOpen.value = true
  emit('open')
  nextTick(() => {
    const items = getMenuItems()
    if (items.length) items[0].focus()
  })
}

function close(restoreFocus = true) {
  isOpen.value = false
  emit('close')
  if (restoreFocus) nextTick(() => triggerRef.value?.focus())
}

function toggle() {
  if (isOpen.value) close()
  else open()
}

function onTriggerKeydown(e: KeyboardEvent) {
  if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
    e.preventDefault()
    if (!isOpen.value) open()
  }
}

function onMenuKeydown(e: KeyboardEvent) {
  const items = getMenuItems()
  const current = items.indexOf(document.activeElement as HTMLElement)

  switch (e.key) {
    case 'ArrowDown': {
      e.preventDefault()
      const next = current < items.length - 1 ? current + 1 : 0
      items[next]?.focus()
      break
    }
    case 'ArrowUp': {
      e.preventDefault()
      const prev = current > 0 ? current - 1 : items.length - 1
      items[prev]?.focus()
      break
    }
    case 'Home': {
      e.preventDefault()
      items[0]?.focus()
      break
    }
    case 'End': {
      e.preventDefault()
      items[items.length - 1]?.focus()
      break
    }
    case 'Escape': {
      e.preventDefault()
      close()
      break
    }
    case 'Tab': {
      close(false)
      break
    }
  }
}

function onClickOutside(e: MouseEvent) {
  if (isOpen.value && wrapperRef.value && !wrapperRef.value.contains(e.target as Node)) {
    close(false)
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))

defineExpose({ open, close, toggle, isOpen })
</script>

<template>
  <div ref="wrapperRef" :class="classes" v-bind="$attrs">
    <button
      ref="triggerRef"
      type="button"
      class="bj-dropdown__trigger"
      aria-haspopup="menu"
      :aria-expanded="isOpen"
      :aria-controls="isOpen ? menuId : undefined"
      @click.stop="toggle"
      @keydown="onTriggerKeydown"
    >
      <slot name="trigger" />
    </button>
    <ul
      v-if="isOpen"
      :id="menuId"
      class="bj-dropdown__menu"
      data-bj-expanded
      role="menu"
      style="display: block"
      @keydown="onMenuKeydown"
    >
      <slot />
    </ul>
  </div>
</template>
