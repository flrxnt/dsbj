<script lang="ts">
export interface BjTooltipProps {
  text: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  id?: string
}
</script>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

let uid = 0

const props = withDefaults(defineProps<BjTooltipProps>(), {
  position: 'top',
})

const isVisible = ref(false)
const tooltipId = computed(() => props.id || `bj-tooltip-${++uid}`)
const triggerRef = ref<HTMLElement>()

const classes = computed(() => [
  'bj-tooltip',
  props.position !== 'top' && `bj-tooltip--${props.position}`,
  isVisible.value && 'bj-tooltip--visible',
])

function show() { isVisible.value = true }
function hide() { isVisible.value = false }

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isVisible.value) {
    hide()
  }
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <span
    ref="triggerRef"
    :class="classes"
    v-bind="$attrs"
    @mouseenter="show"
    @mouseleave="hide"
    @focusin="show"
    @focusout="hide"
  >
    <span :aria-describedby="tooltipId">
      <slot />
    </span>
    <span
      :id="tooltipId"
      class="bj-tooltip__content"
      role="tooltip"
      :aria-hidden="!isVisible"
    >{{ text }}</span>
  </span>
</template>
