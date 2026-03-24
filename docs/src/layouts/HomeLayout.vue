<script setup lang="ts">
import DocsHeader from '../components/DocsHeader.vue'
import DocsFooter from '../components/DocsFooter.vue'
</script>

<template>
  <DocsHeader />
  <main id="main" role="main">
    <slot />
  </main>
  <DocsFooter />
</template>
