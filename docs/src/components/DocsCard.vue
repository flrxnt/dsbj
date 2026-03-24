<script setup lang="ts">
defineProps<{
  to: string
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <RouterLink :to="to" class="docs-card">
    <div class="docs-card__preview">
      <i :class="icon"></i>
    </div>
    <div class="docs-card__body">
      <div class="docs-card__title">{{ title }}</div>
      <div class="docs-card__desc">{{ description }}</div>
    </div>
    <div class="docs-card__arrow">
      <i class="ri-arrow-right-line"></i>
    </div>
  </RouterLink>
</template>
