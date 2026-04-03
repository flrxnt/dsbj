<script lang="ts">
export interface BjCardImgProps {
  background?: string
  label?: string
  decorative?: boolean
}
</script>

<script setup lang="ts">

const props = withDefaults(defineProps<BjCardImgProps>(), {
  label: '',
})
</script>

<template>
  <div
    class="bj-card__img"
    :style="background ? { background } : undefined"
    :role="decorative ? undefined : 'img'"
    :aria-label="decorative ? undefined : label"
    :aria-hidden="decorative || undefined"
  >
    <slot />
  </div>
</template>
