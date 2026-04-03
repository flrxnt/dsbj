<script lang="ts">
export interface BjDraggableProps {
  items?: string[]
  handle?: boolean
  disabled?: boolean
  tag?: string
}
</script>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = withDefaults(defineProps<BjDraggableProps>(), {
  handle: true,
  disabled: false,
  tag: 'div',
})

const emit = defineEmits<{
  reorder: [payload: { from: number; to: number }]
}>()

const dragIndex = ref<number | null>(null)
const overIndex = ref<number | null>(null)

const containerClasses = computed(() => [
  'bj-draggable',
  props.disabled && 'bj-draggable--disabled',
])

function onDragStart(index: number) {
  if (props.disabled) return
  dragIndex.value = index
}

function onDragOver(e: DragEvent, index: number) {
  if (props.disabled) return
  e.preventDefault()
  overIndex.value = index
}

function onDrop(index: number) {
  if (props.disabled || dragIndex.value === null || dragIndex.value === index) return
  emit('reorder', { from: dragIndex.value, to: index })
  dragIndex.value = null
  overIndex.value = null
}

function onDragEnd() {
  dragIndex.value = null
  overIndex.value = null
}

function onKeydown(e: KeyboardEvent, index: number) {
  if (props.disabled) return
  const total = props.items?.length ?? 0
  let targetIndex = -1

  if (e.key === 'ArrowUp' && index > 0) targetIndex = index - 1
  if (e.key === 'ArrowDown' && index < total - 1) targetIndex = index + 1

  if (targetIndex >= 0) {
    e.preventDefault()
    emit('reorder', { from: index, to: targetIndex })
  }
}

function itemClasses(index: number) {
  return [
    'bj-draggable__item',
    dragIndex.value === index && 'bj-draggable__item--dragging',
    overIndex.value === index && dragIndex.value !== index && 'bj-draggable__item--over',
  ]
}
</script>

<template>
  <component :is="tag" :class="containerClasses" v-bind="$attrs">
    <div
      v-for="(item, index) in items"
      :key="item"
      :class="itemClasses(index)"
      :draggable="!disabled"
      :tabindex="disabled ? -1 : 0"
      role="listitem"
      :aria-label="item"
      @dragstart="onDragStart(index)"
      @dragover="onDragOver($event, index)"
      @drop="onDrop(index)"
      @dragend="onDragEnd"
      @keydown="onKeydown($event, index)"
    >
      <span v-if="handle" class="bj-draggable__handle" aria-hidden="true" />
      <span class="bj-draggable__content">
        <slot :item="item" :index="index">{{ item }}</slot>
      </span>
    </div>
  </component>
</template>
