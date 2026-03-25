<script setup lang="ts">
export interface BjCardImgProps {
  background?: string
  label?: string
}

const props = withDefaults(defineProps<BjCardImgProps>(), {
  label: '',
})
</script>

<template>
  <div
    class="bj-card__img"
    :style="background ? { background } : undefined"
    role="img"
    :aria-label="label"
  >
    <slot />
  </div>
</template>
