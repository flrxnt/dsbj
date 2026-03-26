<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  to: string
  icon: string
  title: string
  description: string
}>()

const isExternal = computed(() => props.to.startsWith('http'))
</script>

<template>
  <component
    :is="isExternal ? 'a' : 'RouterLink'"
    :to="isExternal ? undefined : to"
    :href="to"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="docs-card"
  >
    <div class="docs-card__preview">
      <i :class="icon"></i>
    </div>
    <div class="docs-card__body">
      <div class="docs-card__title">{{ title }}</div>
      <div class="docs-card__desc">{{ description }}</div>
    </div>
    <div class="docs-card__arrow">
      <i :class="isExternal ? 'ri-external-link-line' : 'ri-arrow-right-line'"></i>
    </div>
  </component>
</template>
