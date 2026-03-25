<script lang="ts">
export interface BjMarqueeProps {
  speed?: 'slow' | 'default' | 'fast'
  reverse?: boolean
  bordered?: boolean
  pausable?: boolean
}
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<BjMarqueeProps>(), {
  speed: 'default',
  pausable: true,
})

const paused = ref(false)

const classes = computed(() => [
  'bj-marquee',
  paused.value && 'bj-marquee--paused',
  props.reverse && 'bj-marquee--reverse',
  props.speed !== 'default' && `bj-marquee--${props.speed}`,
  props.bordered && 'bj-marquee--bordered',
])

function togglePause() {
  paused.value = !paused.value
}
</script>

<template>
  <div
    :class="classes"
    :aria-live="paused ? 'polite' : 'off'"
    @mouseenter="paused || (paused = false)"
    v-bind="$attrs"
  >
    <div class="bj-marquee__track">
      <slot />
      <slot />
    </div>
    <button
      v-if="pausable"
      type="button"
      class="bj-marquee__pause"
      :aria-label="paused ? 'Reprendre le défilement' : 'Mettre en pause le défilement'"
      @click="togglePause"
    >
      <i :class="paused ? 'ri-play-line' : 'ri-pause-line'" aria-hidden="true" />
    </button>
  </div>
</template>
