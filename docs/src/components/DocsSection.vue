<script setup lang="ts">
defineProps<{ id: string; title: string }>()
</script>

<template>
  <section class="docs-section" :aria-labelledby="id">
    <h2 :id="id" class="docs-section__title">{{ title }}</h2>
    <slot />
  </section>
</template>
