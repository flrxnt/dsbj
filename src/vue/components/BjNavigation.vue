<script lang="ts">
export interface BjNavigationProps {
  ariaLabel?: string
}
</script>

<script setup lang="ts">

withDefaults(defineProps<BjNavigationProps>(), {
  ariaLabel: 'Navigation',
})
</script>

<template>
  <nav class="bj-nav" :aria-label="ariaLabel" v-bind="$attrs">
    <ul class="bj-nav__list">
      <slot />
    </ul>
  </nav>
</template>
